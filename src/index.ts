import Mesh, {
    MeshOptions,
    MaterialNameToIndex,
    IndexToMaterial,
    ArrayBufferWithItemSize,
    Uint16ArrayWithItemSize,
} from "./mesh";
import { Material, MaterialLibrary, Vec3, UVW, TextureMapData } from "./material";
import { Layout, TYPES, AttributeInfo, DuplicateAttributeException, Attribute } from "./layout";
import {
    downloadModels,
    downloadMeshes,
    initMeshBuffers,
    deleteMeshBuffers,
    DownloadModelsOptions,
    MeshMap,
    NameAndUrls,
    ExtendedGLBuffer,
    MeshWithBuffers,
} from "./utils";

const version = "2.0.3";

export const OBJ = {
    Attribute,
    DuplicateAttributeException,
    Layout,
    Material,
    MaterialLibrary,
    Mesh,
    TYPES,
    downloadModels,
    downloadMeshes,
    initMeshBuffers,
    deleteMeshBuffers,
    version,
};

/**
 * @namespace
 */
export {
    ArrayBufferWithItemSize,
    Attribute,
    AttributeInfo,
    DownloadModelsOptions,
    DuplicateAttributeException,
    ExtendedGLBuffer,
    IndexToMaterial,
    Layout,
    Material,
    MaterialLibrary,
    MaterialNameToIndex,
    Mesh,
    MeshMap,
    MeshOptions,
    MeshWithBuffers,
    NameAndUrls,
    TextureMapData,
    TYPES,
    Uint16ArrayWithItemSize,
    UVW,
    Vec3,
    downloadModels,
    downloadMeshes,
    initMeshBuffers,
    deleteMeshBuffers,
    version,
};
