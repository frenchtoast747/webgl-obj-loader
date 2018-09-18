import Mesh from "./mesh.js";
import { Material, MaterialLibrary } from "./material.js";
import { Layout } from "./layout.js";
import { downloadModels, downloadMeshes, initMeshBuffers, deleteMeshBuffers } from "./utils.js";

const version = "1.1.3";

/**
 * @namespace
 */
export {
    Mesh,
    Material,
    MaterialLibrary,
    Layout,
    downloadModels,
    downloadMeshes,
    initMeshBuffers,
    deleteMeshBuffers,
    version
};
