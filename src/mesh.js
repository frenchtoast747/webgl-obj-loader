/**
   * The main Mesh class. The constructor will parse through the OBJ file data
   * and collect the vertex, vertex normal, texture, and face information. This
   * information can then be used later on when creating your VBOs. See
   * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
   *
   * @class Mesh
   * @constructor
   *
   * @param {String} objectData a string representation of an OBJ file with newlines preserved.
   * @param {Object} options a JS object containing valid options. See below for options.
   *
   * - Options
   *   - materials
   */
  export function Mesh(objectData, options) {
    options = options || {};
    options.materials = options.materials || [];

    var self = this;
    self.has_materials = !!options.materials;
    // maps material name to Material() instance
    self.materials = {};
    // the list of unique vertex, normal, texture, attributes
    self.vertices = [];
    self.vertexNormals = [];
    self.textures = [];
    // the indicies to draw the faces
    self.indices = [];

    /*
    The OBJ file format does a sort of compression when saving a model in a
    program like Blender. There are at least 3 sections (4 including textures)
    within the file. Each line in a section begins with the same string:
      * 'v': indicates vertex section
      * 'vn': indicates vertex normal section
      * 'f': indicates the faces section
      * 'vt': indicates vertex texture section (if textures were used on the model)
    Each of the above sections (except for the faces section) is a list/set of
    unique vertices.

    Each line of the faces section contains a list of
    (vertex, [texture], normal) groups.

    **Note:** The following documentation will use a capital "V" Vertex to
    denote the above (vertex, [texture], normal) groups whereas a lowercase
    "v" vertex is used to denote an X, Y, Z coordinate.

    Some examples:
        // the texture index is optional, both formats are possible for models
        // without a texture applied
        f 1/25 18/46 12/31
        f 1//25 18//46 12//31

        // A 3 vertex face with texture indices
        f 16/92/11 14/101/22 1/69/1

        // A 4 vertex face
        f 16/92/11 40/109/40 38/114/38 14/101/22

    The first two lines are examples of a 3 vertex face without a texture applied.
    The second is an example of a 3 vertex face with a texture applied.
    The third is an example of a 4 vertex face. Note: a face can contain N
    number of vertices.

    Each number that appears in one of the groups is a 1-based index
    corresponding to an item from the other sections (meaning that indexing
    starts at one and *not* zero).

    For example:
        `f 16/92/11` is saying to
          - take the 16th element from the [v] vertex array
          - take the 92nd element from the [vt] texture array
          - take the 11th element from the [vn] normal array
        and together they make a unique vertex.
    Using all 3+ unique Vertices from the face line will produce a polygon.

    Now, you could just go through the OBJ file and create a new vertex for
    each face line and WebGL will draw what appears to be the same model.
    However, vertices will be overlapped and duplicated all over the place.

    Consider a cube in 3D space centered about the origin and each side is
    2 units long. The front face (with the positive Z-axis pointing towards
    you) would have a Top Right vertex (looking orthogonal to its normal)
    mapped at (1,1,1) The right face would have a Top Left vertex (looking
    orthogonal to its normal) at (1,1,1) and the top face would have a Bottom
    Right vertex (looking orthogonal to its normal) at (1,1,1). Each face
    has a vertex at the same coordinates, however, three distinct vertices
    will be drawn at the same spot.

    To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`
    groups), while iterating through the face lines, when a group is encountered
    the whole group string ('16/92/11') is checked to see if it exists in the
    packed.hashindices object, and if it doesn't, the indices it specifies
    are used to look up each attribute in the corresponding attribute arrays
    already created. The values are then copied to the corresponding unpacked
    array (flattened to play nice with WebGL's ELEMENT_ARRAY_BUFFER indexing),
    the group string is added to the hashindices set and the current unpacked
    index is used as this hashindices value so that the group of elements can
    be reused. The unpacked index is incremented. If the group string already
    exists in the hashindices object, its corresponding value is the index of
    that group and is appended to the unpacked indices array.
   */
    var verts = [], vertNormals = [], textures = [], unpacked = {};
    // keep track of what material we've seen last
    var current_material;
    // unpacking stuff
    unpacked.verts = [];
    unpacked.norms = [];
    unpacked.textures = [];
    unpacked.hashindices = {};
    unpacked.indices = [];
    unpacked.index = 0;

    var VERTEX_RE = /^v\s/;
    var NORMAL_RE = /^vn\s/;
    var TEXTURE_RE = /^vt\s/;
    var FACE_RE = /^f\s/;
    var WHITESPACE_RE = /\s+/;
    var USE_MATERIAL_RE = /^usemtl/;

    // array of lines separated by the newline
    var lines = objectData.split('\n');

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var elements = line.split(WHITESPACE_RE);
      elements.shift();

      if (VERTEX_RE.test(line)) {
        // if this is a vertex
        verts.push.apply(verts, elements);
      } else if (NORMAL_RE.test(line)) {
        // if this is a vertex normal
        vertNormals.push.apply(vertNormals, elements);
      } else if (TEXTURE_RE.test(line)) {
        // if this is a texture
        textures.push.apply(textures, elements);
      } else if (USE_MATERIAL_RE.test(line)) {
        // keep track of the current material
        current_material = elements[0];
      } else if (FACE_RE.test(line)) {
        // if this is a face
        /*
        split this face into an array of Vertex groups
        for example:
           f 16/92/11 14/101/22 1/69/1
        becomes:
          ['16/92/11', '14/101/22', '1/69/1'];
        */
        var quad = false;
        for (var j = 0, eleLen = elements.length; j < eleLen; j++){
          // Triangulating quads
          // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
          // corresponding triangles:
          //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
          //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
          if(j === 3 && !quad) {
              // add v2/t2/vn2 in again before continuing to 3
              j = 2;
              quad = true;
          }
          if(elements[j] in unpacked.hashindices){
              unpacked.indices.push(unpacked.hashindices[elements[j]]);
          }
          else{
              /*
              Each element of the face line array is a Vertex which has its
              attributes delimited by a forward slash. This will separate
              each attribute into another array:
                  '19/92/11'
              becomes:
                  Vertex = ['19', '92', '11'];
              where
                  Vertex[0] is the vertex index
                  Vertex[1] is the texture index
                  Vertex[2] is the normal index
               Think of faces having Vertices which are comprised of the
               attributes location (v), texture (vt), and normal (vn).
               */
              var vertex = elements[ j ].split( '/' );
              /*
               The verts, textures, and vertNormals arrays each contain a
               flattend array of coordinates.

               Because it gets confusing by referring to Vertex and then
               vertex (both are different in my descriptions) I will explain
               what's going on using the vertexNormals array:

               vertex[2] will contain the one-based index of the vertexNormals
               section (vn). One is subtracted from this index number to play
               nice with javascript's zero-based array indexing.

               Because vertexNormal is a flattened array of x, y, z values,
               simple pointer arithmetic is used to skip to the start of the
               vertexNormal, then the offset is added to get the correct
               component: +0 is x, +1 is y, +2 is z.

               This same process is repeated for verts and textures.
               */
              // Vertex position
              unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 0]);
              unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 1]);
              unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 2]);
              // Vertex textures
              if (textures.length) {
                unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 0]);
                unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 1]);
              }
              // Vertex normals
              unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 0]);
              unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 1]);
              unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 2]);
              // add the newly created Vertex to the list of indices
              unpacked.hashindices[elements[j]] = unpacked.index;
              unpacked.indices.push(unpacked.index);
              // increment the counter
              unpacked.index += 1;
          }
          if(j === 3 && quad) {
              // add v0/t0/vn0 onto the second triangle
              unpacked.indices.push( unpacked.hashindices[elements[0]]);
          }
        }
      }
    }
    self.vertices = unpacked.verts;
    self.vertexNormals = unpacked.norms;
    self.textures = unpacked.textures;
    self.indices = unpacked.indices;
  };