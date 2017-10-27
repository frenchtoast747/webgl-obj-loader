import { Mesh } from './mesh'

var OBJ = {};

OBJ.Mesh = Mesh

  function each(items, fn){
    for (var i = 0; i < items.length; i++){
      var ret = fn(items[i], i);
      if (ret === false){
        break;
      }
    }
  }

  /**
   * https://en.wikipedia.org/wiki/Wavefront_.obj_file
   * http://paulbourke.net/dataformats/mtl/
   */
  OBJ.Material = function(objectData){
      // the unique material ID.
      this.name = '';
      // The values for the following attibutes
      // are an array of R, G, B normalized values.
      // Ka - Ambient Reflectivity
      this.ambient = [0, 0, 0];
      // Kd - Defuse Reflectivity
      this.diffuse = [0, 0, 0];
      // Ks
      this.specular = [0, 0, 0];
      // valid range is between 0 and 1000
      this.specular_exponent = 0;
      // either d or Tr; valid values are normalized
      this.transparency = 0;
      // the enum of the illumination model to use
      this.illumination = 0;
      // map_Kd
      this.map_diffuse = '';
      // map_Ka
      this.map_ambient = '';
      // map_Ks
      this.map_specular = '';
      // map_Ns
      this.map_specular_component = '';
      // map_d
      this.map_alpha = '';
      // map_bump or bump
      this.map_bump = '';
      // disp
      this.map_displacement = '';
      // decal
      this.map_decal = '';

      /**
       * Parse the ambient reflectivity
       *
       * A Ka directive can take one of three forms:
       *   - Ka r g b
       *   - Ka spectral file.rfl
       *   - Ka xyz x y z
       * These three forms are mutually exclusive in that only one
       * declaration can exist per material. It is considered a syntax
       * error otherwise.
       *
       * The "Ka" form specifies the ambient reflectivity using RGB values.
       * The "g" and "b" values are optional. If only the "r" value is specified,
       * then the "g" and "b" values are assigned the value of "r". Values are normally
       * in the range 0.0 to 1.0. Values outside of this range increase or decrease the
       * reflectivity accordingly.
       *
       * The "Ka spectral" form specifies the ambient reflectivity using a
       * spectral curve. "file.rfl" is the name of the ".rfl" file containing
       * the curve data. "factor" is an optional argument which is a multiplier
       * for the values in the .rfl file and defaults to 1.0 if not specified.
       *
       * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.
       * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments
       * are optional and take on the value of the "x" component if only "x" is specified.
       * The "x y z" values are normally in the range of 0.0 to 1.0 and increase or decrease
       * ambient reflectivity accordingly outside of that range.
       */
      function parse_ka(){

      }

      /**
       * Diffuse Reflectivity
       *
       * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
       * are the same
       */
      function parse_kd(){

      }

      /**
       * Spectral Reflectivity
       *
       * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
       * are the same
       */
      function parse_ks(){

      }

      /**
       * Transmission Filter
       *
       * Any light passing through the object is filtered by the transmission filter,
       * which only allows specific colors to pass through. For example, Tf 0 1 0 allows
       * all of the green to pass through and filters out all of the red and blue.
       *
       * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules
       * are the same
       */
      function parse_tf(){

      }

      /**
       * The "illum" statement specifies the illumination model to use in the material.
       * Illumination models are mathematical equations that represent various material
       * lighting and shading effects.
       *
       * The illumination number can be a number from 0 to 10. The following are the list
       * of illumination enumerations and their summaries:
       * 0. Color on and Ambient off
       * 1. Color on and Ambient on
       * 2. Highlight on
       * 3. Reflection on and Ray trace on
       * 4. Transparency: Glass on, Reflection: Ray trace on
       * 5. Reflection: Fresnel on and Ray trace on
       * 6. Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
       * 7. Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
       * 8. Reflection on and Ray trace off
       * 9. Transparency: Glass on, Reflection: Ray trace off
       * 10. Casts shadows onto invisible surfaces
       *
       * Example: "illum 2" to specify the "Highlight on" model
       */
      function parse_illum(){

      }

      /**
       * Specifies the dissolve for the current material.
       *
       * Statement: d [-halo] `factor`
       *
       * Example: "d 0.5"
       *
       * The factor is the amount this material dissolves into the background. A factor
       * of 1.0 is fully opaque. This is the default when a new material is created.
       * A factor of 0.0 is fully dissolved (completely transparent).
       *
       * Unlike a real transparent material, the dissolve does not depend upon material
       * thickness nor does it have any spectral character. Dissolve works on all
       * illumination models.
       *
       * The dissolve statement allows for an optional "-halo" flag which indicates
       * that a dissolve is dependent on the surface orientation relative to the viewer.
       * For example, a sphere with the following dissolve, "d -halo 0.0", will be fully
       * dissolved at its center and will appear gradually more opaque toward its edge.
       *
       * "factor" is the minimum amount of dissolve applied to the material. The amount
       * of dissolve will vary between 1.0 (fully opaque) and the specified "factor". The
       * formula is:
       *
       *    dissolve = 1.0 - (N*v)(1.0-factor)
       */
      function parse_dissolve(){

      }

      /**
       * Specifies the specular exponent for the current material. This defines the focus
       * of the specular highlight.
       *
       * Statement: Ns `exponent`
       *
       * Example: "Ns 250"
       *
       * `exponent` is the value for the specular exponent. A high exponent results in a
       * tight, concentrated highlight. Ns Values normally range from 0 to 1000.
       */
      function parse_specular_exponent(){

      }

      /**
       * Specifies the sharpness of the reflections from the local reflection map.
       *
       * Statement: sharpness `value`
       *
       * Example: "sharpness 100"
       *
       * If a material does not have a local reflection map defined in its material
       * defintions, sharpness will apply to the global reflection map defined in
       * PreView.
       *
       * `value` can be a number from 0 to 1000. The default is 60. A high value results
       * in a clear reflection of objects in the reflection map.
       *
       * Tip: sharpness values greater than 100 introduce aliasing effects in
       * flat surfaces that are viewed at a sharp angle.
       */
      function parse_sharpness(){

      }

      var maps = {
        'map_Ka': 'map',
        'map_Kd': 'map',
      };

      function parse_map(){

      }

      function parse_options(line){

      }

  };

  var Ajax = function(){
    // this is just a helper class to ease ajax calls
    var _this = this;
    this.xmlhttp = new XMLHttpRequest();

    this.get = function(url, callback){
      _this.xmlhttp.onreadystatechange = function(){
        if(_this.xmlhttp.readyState === 4){
          callback(_this.xmlhttp.responseText, _this.xmlhttp.status);
        }
      };
      _this.xmlhttp.open('GET', url, true);
      _this.xmlhttp.send();
    }
  };

  function download_file(url, callback){
    new Ajax().get(url, function(data, status){
      if (status !== 200){
        console.error('An error has occurred while trying to download the ' +
          'file "' + url + '". Is the URL correct?');
        throw '';
      }
      callback(data);
    });
  }

  /**
   * Takes in an object of `mesh_name`, `'/url/to/OBJ/file'` pairs and a callback
   * function. Each OBJ file will be ajaxed in and automatically converted to
   * an OBJ.Mesh. When all files have successfully downloaded the callback
   * function provided will be called and passed in an object containing
   * the newly created meshes.
   *
   * **Note:** In order to use this function as a way to download meshes, a
   * webserver of some sort must be used.
   *
   * @param {Object} nameAndAttrs an object where the key is the name of the mesh and the value is the url to that mesh's OBJ file
   *
   * @param {Function} completionCallback should contain a function that will take one parameter: an object array where the keys will be the unique object name and the value will be a Mesh object
   *
   * @param {Object} meshes In case other meshes are loaded separately or if a previously declared variable is desired to be used, pass in a (possibly empty) json object of the pattern: { '<mesh_name>': OBJ.Mesh }
   *
   */
  OBJ.downloadMeshes = function (nameAndAttrs, completionCallback, meshes){
    // the total number of meshes. this is used to implement "blocking"
    var semaphore = Object.keys(nameAndAttrs).length;
    // if error is true, an alert will given
    var error = false;
    // this is used to check if all meshes have been downloaded
    // if meshes is supplied, then it will be populated, otherwise
    // a new object is created. this will be passed into the completionCallback
    if(meshes === undefined) meshes = {};
    // loop over the mesh_name,url key,value pairs
    for(var mesh_name in nameAndAttrs){
      if(nameAndAttrs.hasOwnProperty(mesh_name)){
        var value = nameAndAttrs[mesh_name];
        var url = value;
        // maps mesh_name to Material() instances
        var materials = {};

        if (typeof value === typeof {}){
          url = value.url;
          semaphore += value.materials.length;
          each(value.materials, function(material_url){
            download_file(material_url, function(material){
              material
            })
          });
        }
        else{

        }

        new Ajax().get(url, (function(name) {
          return function (data, status) {
            if (status === 200) {
              meshes[name] = new OBJ.Mesh(data);
            }
            else {
              error = true;
              console.error('An error has occurred and the mesh "' +
                name + '" could not be downloaded.');
            }
            // the request has finished, decrement the counter
            semaphore--;
            if (semaphore === 0) {
              if (error) {
                // if an error has occurred, the user is notified here and the
                // callback is not called
                console.error('An error has occurred and one or meshes has not been ' +
                  'downloaded. The execution of the script has terminated.');
                throw '';
              }
              // there haven't been any errors in retrieving the meshes
              // call the callback
              completionCallback(meshes);
            }
          }
        })(mesh_name));
      }
    }
  };

  var _buildBuffer = function( gl, type, data, itemSize ){
    var buffer = gl.createBuffer();
    var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
  };

  /**
   * Takes in the WebGL context and a Mesh, then creates and appends the buffers
   * to the mesh object as attributes.
   *
   * @param {WebGLRenderingContext} gl the `canvas.getContext('webgl')` context instance
   * @param {Mesh} mesh a single `OBJ.Mesh` instance
   *
   * The newly created mesh attributes are:
   *
   * Attrbute | Description
   * :--- | ---
   * **normalBuffer**       |contains the model&#39;s Vertex Normals
   * normalBuffer.itemSize  |set to 3 items
   * normalBuffer.numItems  |the total number of vertex normals
   * |
   * **textureBuffer**      |contains the model&#39;s Texture Coordinates
   * textureBuffer.itemSize |set to 2 items
   * textureBuffer.numItems |the number of texture coordinates
   * |
   * **vertexBuffer**       |contains the model&#39;s Vertex Position Coordinates (does not include w)
   * vertexBuffer.itemSize  |set to 3 items
   * vertexBuffer.numItems  |the total number of vertices
   * |
   * **indexBuffer**        |contains the indices of the faces
   * indexBuffer.itemSize   |is set to 1
   * indexBuffer.numItems   |the total number of indices
   *
   * A simple example (a lot of steps are missing, so don't copy and paste):
   *
   *     var gl   = canvas.getContext('webgl'),
   *         mesh = OBJ.Mesh(obj_file_data);
   *     // compile the shaders and create a shader program
   *     var shaderProgram = gl.createProgram();
   *     // compilation stuff here
   *     ...
   *     // make sure you have vertex, vertex normal, and texture coordinate
   *     // attributes located in your shaders and attach them to the shader program
   *     shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
   *     gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
   *
   *     shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
   *     gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
   *
   *     shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
   *     gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *
   *     // create and initialize the vertex, vertex normal, and texture coordinate buffers
   *     // and save on to the mesh object
   *     OBJ.initMeshBuffers(gl, mesh);
   *
   *     // now to render the mesh
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *     // it's possible that the mesh doesn't contain
   *     // any texture coordinates (e.g. suzanne.obj in the development branch).
   *     // in this case, the texture vertexAttribArray will need to be disabled
   *     // before the call to drawElements
   *     if(!mesh.textures.length){
   *       gl.disableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *     }
   *     else{
   *       // if the texture vertexAttribArray has been previously
   *       // disabled, then it needs to be re-enabled
   *       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *       gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
   *       gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *     }
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *
   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
   *     gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
   */
  OBJ.initMeshBuffers = function( gl, mesh ){
    mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
    mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, 2);
    mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
    mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
  };

  OBJ.deleteMeshBuffers = function( gl, mesh ){
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
  }

export {
    OBJ,
}
