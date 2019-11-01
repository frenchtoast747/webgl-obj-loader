import Mesh from "./mesh";
import { MaterialLibrary, TextureMapData } from "./material";

function downloadMtlTextures(mtl: MaterialLibrary, root: string) {
    const mapAttributes = [
        "mapDiffuse",
        "mapAmbient",
        "mapSpecular",
        "mapDissolve",
        "mapBump",
        "mapDisplacement",
        "mapDecal",
        "mapEmissive",
    ];
    if (!root.endsWith("/")) {
        root += "/";
    }
    const textures = [];

    for (const materialName in mtl.materials) {
        if (!mtl.materials.hasOwnProperty(materialName)) {
            continue;
        }
        const material = mtl.materials[materialName];

        for (const attr of mapAttributes) {
            const mapData = (material as any)[attr] as TextureMapData;
            if (!mapData || !mapData.filename) {
                continue;
            }
            const url = root + mapData.filename;
            textures.push(
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error();
                        }
                        return response.blob();
                    })
                    .then(function(data) {
                        const image = new Image();
                        image.src = URL.createObjectURL(data);
                        mapData.texture = image;
                        return new Promise(resolve => (image.onload = resolve));
                    })
                    .catch(() => {
                        console.error(`Unable to download texture: ${url}`);
                    }),
            );
        }
    }

    return Promise.all(textures);
}

function getMtl(modelOptions: DownloadModelsOptions): string {
    if (!(typeof modelOptions.mtl === "string")) {
        return modelOptions.obj.replace(/\.obj$/, ".mtl");
    }

    return modelOptions.mtl;
}

export interface DownloadModelsOptions {
    obj: string;
    mtl?: boolean | string;
    downloadMtlTextures?: boolean;
    mtlTextureRoot?: string;
    name?: string;
    indicesPerMaterial?: boolean;
    calcTangentsAndBitangents?: boolean;
}

type ModelPromises = [Promise<string>, Promise<Mesh>, undefined | Promise<MaterialLibrary>];
export type MeshMap = { [name: string]: Mesh };
/**
 * Accepts a list of model request objects and returns a Promise that
 * resolves when all models have been downloaded and parsed.
 *
 * The list of model objects follow this interface:
 * {
 *  obj: 'path/to/model.obj',
 *  mtl: true | 'path/to/model.mtl',
 *  downloadMtlTextures: true | false
 *  mtlTextureRoot: '/models/suzanne/maps'
 *  name: 'suzanne'
 * }
 *
 * The `obj` attribute is required and should be the path to the
 * model's .obj file relative to the current repo (absolute URLs are
 * suggested).
 *
 * The `mtl` attribute is optional and can either be a boolean or
 * a path to the model's .mtl file relative to the current URL. If
 * the value is `true`, then the path and basename given for the `obj`
 * attribute is used replacing the .obj suffix for .mtl
 * E.g.: {obj: 'models/foo.obj', mtl: true} would search for 'models/foo.mtl'
 *
 * The `name` attribute is optional and is a human friendly name to be
 * included with the parsed OBJ and MTL files. If not given, the base .obj
 * filename will be used.
 *
 * The `downloadMtlTextures` attribute is a flag for automatically downloading
 * any images found in the MTL file and attaching them to each Material
 * created from that file. For example, if material.mapDiffuse is set (there
 * was data in the MTL file), then material.mapDiffuse.texture will contain
 * the downloaded image. This option defaults to `true`. By default, the MTL's
 * URL will be used to determine the location of the images.
 *
 * The `mtlTextureRoot` attribute is optional and should point to the location
 * on the server that this MTL's texture files are located. The default is to
 * use the MTL file's location.
 *
 * @returns {Promise} the result of downloading the given list of models. The
 * promise will resolve with an object whose keys are the names of the models
 * and the value is its Mesh object. Each Mesh object will automatically
 * have its addMaterialLibrary() method called to set the given MTL data (if given).
 */
export function downloadModels(models: DownloadModelsOptions[]): Promise<MeshMap> {
    const finished = [];

    for (const model of models) {
        if (!model.obj) {
            throw new Error(
                '"obj" attribute of model object not set. The .obj file is required to be set ' +
                    "in order to use downloadModels()",
            );
        }

        const options = {
            indicesPerMaterial: !!model.indicesPerMaterial,
            calcTangentsAndBitangents: !!model.calcTangentsAndBitangents,
        };

        // if the name is not provided, dervive it from the given OBJ
        let name = model.name;
        if (!name) {
            const parts = model.obj.split("/");
            name = parts[parts.length - 1].replace(".obj", "");
        }
        const namePromise = Promise.resolve(name);

        const meshPromise = fetch(model.obj)
            .then(response => response.text())
            .then(data => {
                return new Mesh(data, options);
            });

        let mtlPromise;
        // Download MaterialLibrary file?
        if (model.mtl) {
            const mtl = getMtl(model);
            mtlPromise = fetch(mtl)
                .then(response => response.text())
                .then(
                    (data: string): Promise<[MaterialLibrary, any]> => {
                        const material = new MaterialLibrary(data);
                        if (model.downloadMtlTextures !== false) {
                            let root = model.mtlTextureRoot;
                            if (!root) {
                                // get the directory of the MTL file as default
                                root = mtl.substr(0, mtl.lastIndexOf("/"));
                            }
                            // downloadMtlTextures returns a Promise that
                            // is resolved once all of the images it
                            // contains are downloaded. These are then
                            // attached to the map data objects
                            return Promise.all([Promise.resolve(material), downloadMtlTextures(material, root)]);
                        }
                        return Promise.all([Promise.resolve(material), undefined]);
                    },
                )
                .then((value: [MaterialLibrary, any]) => {
                    return value[0];
                });
        }

        const parsed: ModelPromises = [namePromise, meshPromise, mtlPromise];
        finished.push(Promise.all<string, Mesh, MaterialLibrary | undefined>(parsed));
    }

    return Promise.all(finished).then(ms => {
        // the "finished" promise is a list of name, Mesh instance,
        // and MaterialLibary instance. This unpacks and returns an
        // object mapping name to Mesh (Mesh points to MTL).
        const models: MeshMap = {};

        for (const model of ms) {
            const [name, mesh, mtl] = model;
            mesh.name = name;
            if (mtl) {
                mesh.addMaterialLibrary(mtl);
            }
            models[name] = mesh;
        }

        return models;
    });
}

export interface NameAndUrls {
    [meshName: string]: string;
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
export function downloadMeshes(
    nameAndURLs: NameAndUrls,
    completionCallback: (meshes: MeshMap) => void,
    meshes: MeshMap,
) {
    if (meshes === undefined) {
        meshes = {};
    }

    const completed: Promise<[string, Mesh]>[] = [];

    for (const mesh_name in nameAndURLs) {
        if (!nameAndURLs.hasOwnProperty(mesh_name)) {
            continue;
        }
        const url = nameAndURLs[mesh_name];
        completed.push(
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    return [mesh_name, new Mesh(data)] as [string, Mesh];
                }),
        );
    }

    Promise.all(completed).then(ms => {
        for (const [name, mesh] of ms) {
            meshes[name] = mesh;
        }

        return completionCallback(meshes);
    });
}

export interface ExtendedGLBuffer extends WebGLBuffer {
    itemSize: number;
    numItems: number;
}

function _buildBuffer(gl: WebGLRenderingContext, type: GLenum, data: number[], itemSize: number): ExtendedGLBuffer {
    const buffer = gl.createBuffer() as ExtendedGLBuffer;
    const arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
}

export interface MeshWithBuffers extends Mesh {
    normalBuffer: ExtendedGLBuffer;
    textureBuffer: ExtendedGLBuffer;
    vertexBuffer: ExtendedGLBuffer;
    indexBuffer: ExtendedGLBuffer;
}

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
 *     const gl   = canvas.getContext('webgl'),
 *         mesh = OBJ.Mesh(obj_file_data);
 *     // compile the shaders and create a shader program
 *     const shaderProgram = gl.createProgram();
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
export function initMeshBuffers(gl: WebGLRenderingContext, mesh: Mesh): MeshWithBuffers {
    (mesh as MeshWithBuffers).normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
    (mesh as MeshWithBuffers).textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, mesh.textureStride);
    (mesh as MeshWithBuffers).vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
    (mesh as MeshWithBuffers).indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);

    return mesh as MeshWithBuffers;
}

export function deleteMeshBuffers(gl: WebGLRenderingContext, mesh: MeshWithBuffers) {
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
}
