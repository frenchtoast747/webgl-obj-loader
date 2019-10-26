(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("OBJ", [], factory);
	else if(typeof exports === 'object')
		exports["OBJ"] = factory();
	else
		root["OBJ"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Attribute, DuplicateAttributeException, Layout, Material, MaterialLibrary, Mesh, TYPES, downloadModels, downloadMeshes, initMeshBuffers, deleteMeshBuffers, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _mesh__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ "./src/material.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return _material__WEBPACK_IMPORTED_MODULE_1__["Material"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialLibrary", function() { return _material__WEBPACK_IMPORTED_MODULE_1__["MaterialLibrary"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["Attribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateAttributeException", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["DuplicateAttributeException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["Layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["TYPES"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadModels", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["downloadModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadMeshes", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["downloadMeshes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initMeshBuffers", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["initMeshBuffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMeshBuffers", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["deleteMeshBuffers"]; });





const version = "2.0.3";
/**
 * @namespace
 */



/***/ }),

/***/ "./src/layout.ts":
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
/*! exports provided: TYPES, DuplicateAttributeException, Attribute, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateAttributeException", function() { return DuplicateAttributeException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
var TYPES;
(function (TYPES) {
    TYPES[TYPES["BYTE"] = 1] = "BYTE";
    TYPES[TYPES["UNSIGNED_BYTE"] = 1] = "UNSIGNED_BYTE";
    TYPES[TYPES["SHORT"] = 2] = "SHORT";
    TYPES[TYPES["UNSIGNED_SHORT"] = 2] = "UNSIGNED_SHORT";
    TYPES[TYPES["FLOAT"] = 4] = "FLOAT";
})(TYPES || (TYPES = {}));
/**
 * An exception for when two or more of the same attributes are found in the
 * same layout.
 * @private
 */
class DuplicateAttributeException extends Error {
    /**
     * Create a DuplicateAttributeException
     * @param {Attribute} attribute - The attribute that was found more than
     *        once in the {@link Layout}
     */
    constructor(attribute) {
        super(`found duplicate attribute: ${attribute.key}`);
    }
}
/**
 * Represents how a vertex attribute should be packed into an buffer.
 * @private
 */
class Attribute {
    /**
     * Create an attribute. Do not call this directly, use the predefined
     * constants.
     * @param {string} key - The name of this attribute as if it were a key in
     *        an Object. Use the camel case version of the upper snake case
     *        const name.
     * @param {number} size - The number of components per vertex attribute.
     *        Must be 1, 2, 3, or 4.
     * @param {string} type - The data type of each component for this
     *        attribute. Possible values:<br/>
     *        "BYTE": signed 8-bit integer, with values in [-128, 127]<br/>
     *        "SHORT": signed 16-bit integer, with values in
     *            [-32768, 32767]<br/>
     *        "UNSIGNED_BYTE": unsigned 8-bit integer, with values in
     *            [0, 255]<br/>
     *        "UNSIGNED_SHORT": unsigned 16-bit integer, with values in
     *            [0, 65535]<br/>
     *        "FLOAT": 32-bit floating point number
     * @param {boolean} normalized - Whether integer data values should be
     *        normalized when being casted to a float.<br/>
     *        If true, signed integers are normalized to [-1, 1].<br/>
     *        If true, unsigned integers are normalized to [0, 1].<br/>
     *        For type "FLOAT", this parameter has no effect.
     */
    constructor(key, size, type, normalized = false) {
        this.key = key;
        this.size = size;
        this.type = type;
        this.normalized = normalized;
        this.sizeOfType = this.type;
        this.sizeInBytes = this.sizeOfType * size;
    }
}
/**
 * A class to represent the memory layout for a vertex attribute array. Used by
 * {@link Mesh}'s TBD(...) method to generate a packed array from mesh data.
 * <p>
 * Layout can sort of be thought of as a C-style struct declaration.
 * {@link Mesh}'s TBD(...) method will use the {@link Layout} instance to
 * pack an array in the given attribute order.
 * <p>
 * Layout also is very helpful when calling a WebGL context's
 * <code>vertexAttribPointer</code> method. If you've created a buffer using
 * a Layout instance, then the same Layout instance can be used to determine
 * the size, type, normalized, stride, and offset parameters for
 * <code>vertexAttribPointer</code>.
 * <p>
 * For example:
 * <pre><code>
 *
 * const index = glctx.getAttribLocation(shaderProgram, "pos");
 * glctx.vertexAttribPointer(
 *   layout.position.size,
 *   glctx[layout.position.type],
 *   layout.position.normalized,
 *   layout.position.stride,
 *   layout.position.offset);
 * </code></pre>
 * @see {@link Mesh}
 */
class Layout {
    /**
     * Create a Layout object. This constructor will throw if any duplicate
     * attributes are given.
     * @param {Array} ...attributes - An ordered list of attributes that
     *        describe the desired memory layout for each vertex attribute.
     *        <p>
     *
     * @see {@link Mesh}
     */
    constructor(...attributes) {
        this.attributes = attributes;
        this.attributeMap = {};
        let offset = 0;
        let maxStrideMultiple = 0;
        for (const attribute of attributes) {
            if (this.attributeMap[attribute.key]) {
                throw new DuplicateAttributeException(attribute);
            }
            // Add padding to satisfy WebGL's requirement that all
            // vertexAttribPointer calls have an offset that is a multiple of
            // the type size.
            if (offset % attribute.sizeOfType !== 0) {
                offset += attribute.sizeOfType - (offset % attribute.sizeOfType);
                console.warn("Layout requires padding before " + attribute.key + " attribute");
            }
            this.attributeMap[attribute.key] = {
                attribute: attribute,
                size: attribute.size,
                type: attribute.type,
                normalized: attribute.normalized,
                offset: offset,
            };
            offset += attribute.sizeInBytes;
            maxStrideMultiple = Math.max(maxStrideMultiple, attribute.sizeOfType);
        }
        // Add padding to the end to satisfy WebGL's requirement that all
        // vertexAttribPointer calls have a stride that is a multiple of the
        // type size. Because we're putting differently sized attributes into
        // the same buffer, it must be padded to a multiple of the largest
        // type size.
        if (offset % maxStrideMultiple !== 0) {
            offset += maxStrideMultiple - (offset % maxStrideMultiple);
            console.warn("Layout requires padding at the back");
        }
        this.stride = offset;
        for (const attribute of attributes) {
            this.attributeMap[attribute.key].stride = this.stride;
        }
    }
}
// Geometry attributes
/**
 * Attribute layout to pack a vertex's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.POSITION = new Attribute("position", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.NORMAL = new Attribute("normal", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 *
 * @see {@link Layout}
 */
Layout.TANGENT = new Attribute("tangent", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's bitangent x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 * @see {@link Layout}
 */
Layout.BITANGENT = new Attribute("bitangent", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's texture coordinates' u & v as floats
 *
 * @see {@link Layout}
 */
Layout.UV = new Attribute("uv", 2, TYPES.FLOAT);
// Material attributes
/**
 * Attribute layout to pack an unsigned short to be interpreted as a the index
 * into a {@link Mesh}'s materials list.
 * <p>
 * The intention of this value is to send all of the {@link Mesh}'s materials
 * into multiple shader uniforms and then reference the current one by this
 * vertex attribute.
 * <p>
 * example glsl code:
 *
 * <pre><code>
 *  // this is bound using MATERIAL_INDEX
 *  attribute int materialIndex;
 *
 *  struct Material {
 *    vec3 diffuse;
 *    vec3 specular;
 *    vec3 specularExponent;
 *  };
 *
 *  uniform Material materials[MAX_MATERIALS];
 *
 *  // ...
 *
 *  vec3 diffuse = materials[materialIndex];
 *
 * </code></pre>
 * TODO: More description & test to make sure subscripting by attributes even
 * works for webgl
 *
 * @see {@link Layout}
 */
Layout.MATERIAL_INDEX = new Attribute("materialIndex", 1, TYPES.SHORT);
Layout.MATERIAL_ENABLED = new Attribute("materialEnabled", 1, TYPES.UNSIGNED_SHORT);
Layout.AMBIENT = new Attribute("ambient", 3, TYPES.FLOAT);
Layout.DIFFUSE = new Attribute("diffuse", 3, TYPES.FLOAT);
Layout.SPECULAR = new Attribute("specular", 3, TYPES.FLOAT);
Layout.SPECULAR_EXPONENT = new Attribute("specularExponent", 3, TYPES.FLOAT);
Layout.EMISSIVE = new Attribute("emissive", 3, TYPES.FLOAT);
Layout.TRANSMISSION_FILTER = new Attribute("transmissionFilter", 3, TYPES.FLOAT);
Layout.DISSOLVE = new Attribute("dissolve", 1, TYPES.FLOAT);
Layout.ILLUMINATION = new Attribute("illumination", 1, TYPES.UNSIGNED_SHORT);
Layout.REFRACTION_INDEX = new Attribute("refractionIndex", 1, TYPES.FLOAT);
Layout.SHARPNESS = new Attribute("sharpness", 1, TYPES.FLOAT);
Layout.MAP_DIFFUSE = new Attribute("mapDiffuse", 1, TYPES.SHORT);
Layout.MAP_AMBIENT = new Attribute("mapAmbient", 1, TYPES.SHORT);
Layout.MAP_SPECULAR = new Attribute("mapSpecular", 1, TYPES.SHORT);
Layout.MAP_SPECULAR_EXPONENT = new Attribute("mapSpecularExponent", 1, TYPES.SHORT);
Layout.MAP_DISSOLVE = new Attribute("mapDissolve", 1, TYPES.SHORT);
Layout.ANTI_ALIASING = new Attribute("antiAliasing", 1, TYPES.UNSIGNED_SHORT);
Layout.MAP_BUMP = new Attribute("mapBump", 1, TYPES.SHORT);
Layout.MAP_DISPLACEMENT = new Attribute("mapDisplacement", 1, TYPES.SHORT);
Layout.MAP_DECAL = new Attribute("mapDecal", 1, TYPES.SHORT);
Layout.MAP_EMISSIVE = new Attribute("mapEmissive", 1, TYPES.SHORT);


/***/ }),

/***/ "./src/material.ts":
/*!*************************!*\
  !*** ./src/material.ts ***!
  \*************************/
/*! exports provided: Material, MaterialLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialLibrary", function() { return MaterialLibrary; });
/**
 * The Material class.
 */
class Material {
    constructor(name) {
        this.name = name;
        /**
         * Constructor
         * @param {String} name the unique name of the material
         */
        // The values for the following attibutes
        // are an array of R, G, B normalized values.
        // Ka - Ambient Reflectivity
        this.ambient = [0, 0, 0];
        // Kd - Defuse Reflectivity
        this.diffuse = [0, 0, 0];
        // Ks
        this.specular = [0, 0, 0];
        // Ke
        this.emissive = [0, 0, 0];
        // Tf
        this.transmissionFilter = [0, 0, 0];
        // d
        this.dissolve = 0;
        // valid range is between 0 and 1000
        this.specularExponent = 0;
        // either d or Tr; valid values are normalized
        this.transparency = 0;
        // illum - the enum of the illumination model to use
        this.illumination = 0;
        // Ni - Set to "normal" (air).
        this.refractionIndex = 1;
        // sharpness
        this.sharpness = 0;
        // map_Kd
        this.mapDiffuse = emptyTextureOptions();
        // map_Ka
        this.mapAmbient = emptyTextureOptions();
        // map_Ks
        this.mapSpecular = emptyTextureOptions();
        // map_Ns
        this.mapSpecularExponent = emptyTextureOptions();
        // map_d
        this.mapDissolve = emptyTextureOptions();
        // map_aat
        this.antiAliasing = false;
        // map_bump or bump
        this.mapBump = emptyTextureOptions();
        // disp
        this.mapDisplacement = emptyTextureOptions();
        // decal
        this.mapDecal = emptyTextureOptions();
        // map_Ke
        this.mapEmissive = emptyTextureOptions();
        // refl - when the reflection type is a cube, there will be multiple refl
        //        statements for each side of the cube. If it's a spherical
        //        reflection, there should only ever be one.
        this.mapReflections = [];
    }
}
const SENTINEL_MATERIAL = new Material("sentinel");
/**
 * https://en.wikipedia.org/wiki/Wavefront_.obj_file
 * http://paulbourke.net/dataformats/mtl/
 */
class MaterialLibrary {
    constructor(data) {
        this.data = data;
        /**
         * Constructs the Material Parser
         * @param mtlData the MTL file contents
         */
        this.currentMaterial = SENTINEL_MATERIAL;
        this.materials = {};
        this.parse();
    }
    /* eslint-disable camelcase */
    /* the function names here disobey camelCase conventions
     to make parsing/routing easier. see the parse function
     documentation for more information. */
    /**
     * Creates a new Material object and adds to the registry.
     * @param tokens the tokens associated with the directive
     */
    parse_newmtl(tokens) {
        const name = tokens[0];
        // console.info('Parsing new Material:', name);
        this.currentMaterial = new Material(name);
        this.materials[name] = this.currentMaterial;
    }
    /**
     * See the documenation for parse_Ka below for a better understanding.
     *
     * Given a list of possible color tokens, returns an array of R, G, and B
     * color values.
     *
     * @param tokens the tokens associated with the directive
     * @return {*} a 3 element array containing the R, G, and B values
     * of the color.
     */
    parseColor(tokens) {
        if (tokens[0] == "spectral") {
            throw new Error("The MTL parser does not support spectral curve files. You will " +
                "need to convert the MTL colors to either RGB or CIEXYZ.");
        }
        if (tokens[0] == "xyz") {
            throw new Error("The MTL parser does not currently support XYZ colors. Either convert the " +
                "XYZ values to RGB or create an issue to add support for XYZ");
        }
        // from my understanding of the spec, RGB values at this point
        // will either be 3 floats or exactly 1 float, so that's the check
        // that i'm going to perform here
        if (tokens.length == 3) {
            const [x, y, z] = tokens;
            return [parseFloat(x), parseFloat(y), parseFloat(z)];
        }
        // Since tokens at this point has a length of 3, we're going to assume
        // it's exactly 1, skipping the check for 2.
        const value = parseFloat(tokens[0]);
        // in this case, all values are equivalent
        return [value, value, value];
    }
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
     * The "g" and "b" values are optional. If only the "r" value is
     * specified, then the "g" and "b" values are assigned the value of
     * "r". Values are normally in the range 0.0 to 1.0. Values outside
     * of this range increase or decrease the reflectivity accordingly.
     *
     * The "Ka spectral" form specifies the ambient reflectivity using a
     * spectral curve. "file.rfl" is the name of the ".rfl" file containing
     * the curve data. "factor" is an optional argument which is a multiplier
     * for the values in the .rfl file and defaults to 1.0 if not specified.
     *
     * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.
     * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments
     * are optional and take on the value of the "x" component if only "x" is
     * specified. The "x y z" values are normally in the range of 0.0 to 1.0 and
     * increase or decrease ambient reflectivity accordingly outside of that
     * range.
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Ka(tokens) {
        this.currentMaterial.ambient = this.parseColor(tokens);
    }
    /**
     * Diffuse Reflectivity
     *
     * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
     * are the same
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Kd(tokens) {
        this.currentMaterial.diffuse = this.parseColor(tokens);
    }
    /**
     * Spectral Reflectivity
     *
     * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
     * are the same
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Ks(tokens) {
        this.currentMaterial.specular = this.parseColor(tokens);
    }
    /**
     * Emissive
     *
     * The amount and color of light emitted by the object.
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Ke(tokens) {
        this.currentMaterial.emissive = this.parseColor(tokens);
    }
    /**
     * Transmission Filter
     *
     * Any light passing through the object is filtered by the transmission
     * filter, which only allows specific colors to pass through. For example, Tf
     * 0 1 0 allows all of the green to pass through and filters out all of the
     * red and blue.
     *
     * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules
     * are the same
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Tf(tokens) {
        this.currentMaterial.transmissionFilter = this.parseColor(tokens);
    }
    /**
     * Specifies the dissolve for the current material.
     *
     * Statement: d [-halo] `factor`
     *
     * Example: "d 0.5"
     *
     * The factor is the amount this material dissolves into the background. A
     * factor of 1.0 is fully opaque. This is the default when a new material is
     * created. A factor of 0.0 is fully dissolved (completely transparent).
     *
     * Unlike a real transparent material, the dissolve does not depend upon
     * material thickness nor does it have any spectral character. Dissolve works
     * on all illumination models.
     *
     * The dissolve statement allows for an optional "-halo" flag which indicates
     * that a dissolve is dependent on the surface orientation relative to the
     * viewer. For example, a sphere with the following dissolve, "d -halo 0.0",
     * will be fully dissolved at its center and will appear gradually more opaque
     * toward its edge.
     *
     * "factor" is the minimum amount of dissolve applied to the material. The
     * amount of dissolve will vary between 1.0 (fully opaque) and the specified
     * "factor". The formula is:
     *
     *    dissolve = 1.0 - (N*v)(1.0-factor)
     *
     * @param tokens the tokens associated with the directive
     */
    parse_d(tokens) {
        // this ignores the -halo option as I can't find any documentation on what
        // it's supposed to be.
        this.currentMaterial.dissolve = parseFloat(tokens.pop() || "0");
    }
    /**
     * The "illum" statement specifies the illumination model to use in the
     * material. Illumination models are mathematical equations that represent
     * various material lighting and shading effects.
     *
     * The illumination number can be a number from 0 to 10. The following are
     * the list of illumination enumerations and their summaries:
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
     *
     * @param tokens the tokens associated with the directive
     */
    parse_illum(tokens) {
        this.currentMaterial.illumination = parseInt(tokens[0]);
    }
    /**
     * Optical Density (AKA Index of Refraction)
     *
     * Statement: Ni `index`
     *
     * Example: Ni 1.0
     *
     * Specifies the optical density for the surface. `index` is the value
     * for the optical density. The values can range from 0.001 to 10.  A value of
     * 1.0 means that light does not bend as it passes through an object.
     * Increasing the optical_density increases the amount of bending. Glass has
     * an index of refraction of about 1.5. Values of less than 1.0 produce
     * bizarre results and are not recommended
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Ni(tokens) {
        this.currentMaterial.refractionIndex = parseFloat(tokens[0]);
    }
    /**
     * Specifies the specular exponent for the current material. This defines the
     * focus of the specular highlight.
     *
     * Statement: Ns `exponent`
     *
     * Example: "Ns 250"
     *
     * `exponent` is the value for the specular exponent. A high exponent results
     * in a tight, concentrated highlight. Ns Values normally range from 0 to
     * 1000.
     *
     * @param tokens the tokens associated with the directive
     */
    parse_Ns(tokens) {
        this.currentMaterial.specularExponent = parseInt(tokens[0]);
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
     * `value` can be a number from 0 to 1000. The default is 60. A high value
     * results in a clear reflection of objects in the reflection map.
     *
     * Tip: sharpness values greater than 100 introduce aliasing effects in
     * flat surfaces that are viewed at a sharp angle.
     *
     * @param tokens the tokens associated with the directive
     */
    parse_sharpness(tokens) {
        this.currentMaterial.sharpness = parseInt(tokens[0]);
    }
    /**
     * Parses the -cc flag and updates the options object with the values.
     *
     * @param values the values passed to the -cc flag
     * @param options the Object of all image options
     */
    parse_cc(values, options) {
        options.colorCorrection = values[0] == "on";
    }
    /**
     * Parses the -blendu flag and updates the options object with the values.
     *
     * @param values the values passed to the -blendu flag
     * @param options the Object of all image options
     */
    parse_blendu(values, options) {
        options.horizontalBlending = values[0] == "on";
    }
    /**
     * Parses the -blendv flag and updates the options object with the values.
     *
     * @param values the values passed to the -blendv flag
     * @param options the Object of all image options
     */
    parse_blendv(values, options) {
        options.verticalBlending = values[0] == "on";
    }
    /**
     * Parses the -boost flag and updates the options object with the values.
     *
     * @param values the values passed to the -boost flag
     * @param options the Object of all image options
     */
    parse_boost(values, options) {
        options.boostMipMapSharpness = parseFloat(values[0]);
    }
    /**
     * Parses the -mm flag and updates the options object with the values.
     *
     * @param values the values passed to the -mm flag
     * @param options the Object of all image options
     */
    parse_mm(values, options) {
        options.modifyTextureMap.brightness = parseFloat(values[0]);
        options.modifyTextureMap.contrast = parseFloat(values[1]);
    }
    /**
     * Parses and sets the -o, -s, and -t  u, v, and w values
     *
     * @param values the values passed to the -o, -s, -t flag
     * @param {Object} option the Object of either the -o, -s, -t option
     * @param {Integer} defaultValue the Object of all image options
     */
    parse_ost(values, option, defaultValue) {
        while (values.length < 3) {
            values.push(defaultValue.toString());
        }
        option.u = parseFloat(values[0]);
        option.v = parseFloat(values[1]);
        option.w = parseFloat(values[2]);
    }
    /**
     * Parses the -o flag and updates the options object with the values.
     *
     * @param values the values passed to the -o flag
     * @param options the Object of all image options
     */
    parse_o(values, options) {
        this.parse_ost(values, options.offset, 0);
    }
    /**
     * Parses the -s flag and updates the options object with the values.
     *
     * @param values the values passed to the -s flag
     * @param options the Object of all image options
     */
    parse_s(values, options) {
        this.parse_ost(values, options.scale, 1);
    }
    /**
     * Parses the -t flag and updates the options object with the values.
     *
     * @param values the values passed to the -t flag
     * @param options the Object of all image options
     */
    parse_t(values, options) {
        this.parse_ost(values, options.turbulence, 0);
    }
    /**
     * Parses the -texres flag and updates the options object with the values.
     *
     * @param values the values passed to the -texres flag
     * @param options the Object of all image options
     */
    parse_texres(values, options) {
        options.textureResolution = parseFloat(values[0]);
    }
    /**
     * Parses the -clamp flag and updates the options object with the values.
     *
     * @param values the values passed to the -clamp flag
     * @param options the Object of all image options
     */
    parse_clamp(values, options) {
        options.clamp = values[0] == "on";
    }
    /**
     * Parses the -bm flag and updates the options object with the values.
     *
     * @param values the values passed to the -bm flag
     * @param options the Object of all image options
     */
    parse_bm(values, options) {
        options.bumpMultiplier = parseFloat(values[0]);
    }
    /**
     * Parses the -imfchan flag and updates the options object with the values.
     *
     * @param values the values passed to the -imfchan flag
     * @param options the Object of all image options
     */
    parse_imfchan(values, options) {
        options.imfChan = values[0];
    }
    /**
     * This only exists for relection maps and denotes the type of reflection.
     *
     * @param values the values passed to the -type flag
     * @param options the Object of all image options
     */
    parse_type(values, options) {
        options.reflectionType = values[0];
    }
    /**
     * Parses the texture's options and returns an options object with the info
     *
     * @param tokens all of the option tokens to pass to the texture
     * @return {Object} a complete object of objects to apply to the texture
     */
    parseOptions(tokens) {
        const options = emptyTextureOptions();
        let option;
        let values;
        const optionsToValues = {};
        tokens.reverse();
        while (tokens.length) {
            // token is guaranteed to exists here, hence the explicit "as"
            const token = tokens.pop();
            if (token.startsWith("-")) {
                option = token.substr(1);
                optionsToValues[option] = [];
            }
            else if (option) {
                optionsToValues[option].push(token);
            }
        }
        for (option in optionsToValues) {
            if (!optionsToValues.hasOwnProperty(option)) {
                continue;
            }
            values = optionsToValues[option];
            const optionMethod = this[`parse_${option}`];
            if (optionMethod) {
                optionMethod.bind(this)(values, options);
            }
        }
        return options;
    }
    /**
     * Parses the given texture map line.
     *
     * @param tokens all of the tokens representing the texture
     * @return a complete object of objects to apply to the texture
     */
    parseMap(tokens) {
        // according to wikipedia:
        // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)
        // there is at least one vendor that places the filename before the options
        // rather than after (which is to spec). All options start with a '-'
        // so if the first token doesn't start with a '-', we're going to assume
        // it's the name of the map file.
        let optionsString;
        let filename = "";
        if (!tokens[0].startsWith("-")) {
            [filename, ...optionsString] = tokens;
        }
        else {
            filename = tokens.pop();
            optionsString = tokens;
        }
        const options = this.parseOptions(optionsString);
        options.filename = filename.replace(/\\/g, "/");
        return options;
    }
    /**
     * Parses the ambient map.
     *
     * @param tokens list of tokens for the map_Ka direcive
     */
    parse_map_Ka(tokens) {
        this.currentMaterial.mapAmbient = this.parseMap(tokens);
    }
    /**
     * Parses the diffuse map.
     *
     * @param tokens list of tokens for the map_Kd direcive
     */
    parse_map_Kd(tokens) {
        this.currentMaterial.mapDiffuse = this.parseMap(tokens);
    }
    /**
     * Parses the specular map.
     *
     * @param tokens list of tokens for the map_Ks direcive
     */
    parse_map_Ks(tokens) {
        this.currentMaterial.mapSpecular = this.parseMap(tokens);
    }
    /**
     * Parses the emissive map.
     *
     * @param tokens list of tokens for the map_Ke direcive
     */
    parse_map_Ke(tokens) {
        this.currentMaterial.mapEmissive = this.parseMap(tokens);
    }
    /**
     * Parses the specular exponent map.
     *
     * @param tokens list of tokens for the map_Ns direcive
     */
    parse_map_Ns(tokens) {
        this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);
    }
    /**
     * Parses the dissolve map.
     *
     * @param tokens list of tokens for the map_d direcive
     */
    parse_map_d(tokens) {
        this.currentMaterial.mapDissolve = this.parseMap(tokens);
    }
    /**
     * Parses the anti-aliasing option.
     *
     * @param tokens list of tokens for the map_aat direcive
     */
    parse_map_aat(tokens) {
        this.currentMaterial.antiAliasing = tokens[0] == "on";
    }
    /**
     * Parses the bump map.
     *
     * @param tokens list of tokens for the map_bump direcive
     */
    parse_map_bump(tokens) {
        this.currentMaterial.mapBump = this.parseMap(tokens);
    }
    /**
     * Parses the bump map.
     *
     * @param tokens list of tokens for the bump direcive
     */
    parse_bump(tokens) {
        this.parse_map_bump(tokens);
    }
    /**
     * Parses the disp map.
     *
     * @param tokens list of tokens for the disp direcive
     */
    parse_disp(tokens) {
        this.currentMaterial.mapDisplacement = this.parseMap(tokens);
    }
    /**
     * Parses the decal map.
     *
     * @param tokens list of tokens for the map_decal direcive
     */
    parse_decal(tokens) {
        this.currentMaterial.mapDecal = this.parseMap(tokens);
    }
    /**
     * Parses the refl map.
     *
     * @param tokens list of tokens for the refl direcive
     */
    parse_refl(tokens) {
        this.currentMaterial.mapReflections.push(this.parseMap(tokens));
    }
    /**
     * Parses the MTL file.
     *
     * Iterates line by line parsing each MTL directive.
     *
     * This function expects the first token in the line
     * to be a valid MTL directive. That token is then used
     * to try and run a method on this class. parse_[directive]
     * E.g., the `newmtl` directive would try to call the method
     * parse_newmtl. Each parsing function takes in the remaining
     * list of tokens and updates the currentMaterial class with
     * the attributes provided.
     */
    parse() {
        const lines = this.data.split(/\r?\n/);
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith("#")) {
                continue;
            }
            const [directive, ...tokens] = line.split(/\s/);
            const parseMethod = this[`parse_${directive}`];
            if (!parseMethod) {
                console.warn(`Don't know how to parse the directive: "${directive}"`);
                continue;
            }
            // console.log(`Parsing "${directive}" with tokens: ${tokens}`);
            parseMethod.bind(this)(tokens);
        }
        // some cleanup. These don't need to be exposed as public data.
        delete this.data;
        this.currentMaterial = SENTINEL_MATERIAL;
    }
}
function emptyTextureOptions() {
    return {
        colorCorrection: false,
        horizontalBlending: true,
        verticalBlending: true,
        boostMipMapSharpness: 0,
        modifyTextureMap: {
            brightness: 0,
            contrast: 1,
        },
        offset: { u: 0, v: 0, w: 0 },
        scale: { u: 1, v: 1, w: 1 },
        turbulence: { u: 0, v: 0, w: 0 },
        clamp: false,
        textureResolution: null,
        bumpMultiplier: 1,
        imfChan: null,
        filename: "",
    };
}


/***/ }),

/***/ "./src/mesh.ts":
/*!*********************!*\
  !*** ./src/mesh.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh; });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");

/**
 * The main Mesh class. The constructor will parse through the OBJ file data
 * and collect the vertex, vertex normal, texture, and face information. This
 * information can then be used later on when creating your VBOs. See
 * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
 */
class Mesh {
    /**
     * Create a Mesh
     * @param {String} objectData - a string representation of an OBJ file with
     *     newlines preserved.
     * @param {Object} options - a JS object containing valid options. See class
     *     documentation for options.
     * @param {bool} options.enableWTextureCoord - Texture coordinates can have
     *     an optional "w" coordinate after the u and v coordinates. This extra
     *     value can be used in order to perform fancy transformations on the
     *     textures themselves. Default is to truncate to only the u an v
     *     coordinates. Passing true will provide a default value of 0 in the
     *     event that any or all texture coordinates don't provide a w value.
     *     Always use the textureStride attribute in order to determine the
     *     stride length of the texture coordinates when rendering the element
     *     array.
     * @param {bool} options.calcTangentsAndBitangents - Calculate the tangents
     *     and bitangents when loading of the OBJ is completed. This adds two new
     *     attributes to the Mesh instance: `tangents` and `bitangents`.
     */
    constructor(objectData, options) {
        this.name = "";
        this.indicesPerMaterial = [];
        this.materialsByIndex = {};
        this.tangents = [];
        this.bitangents = [];
        options = options || {};
        options.materials = options.materials || {};
        options.enableWTextureCoord = !!options.enableWTextureCoord;
        // the list of unique vertex, normal, texture, attributes
        this.vertexNormals = [];
        this.textures = [];
        // the indicies to draw the faces
        this.indices = [];
        this.textureStride = options.enableWTextureCoord ? 3 : 2;
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
        const verts = [];
        const vertNormals = [];
        const textures = [];
        const materialNamesByIndex = [];
        const materialIndicesByName = {};
        // keep track of what material we've seen last
        let currentMaterialIndex = -1;
        let currentObjectByMaterialIndex = 0;
        // unpacking stuff
        const unpacked = {
            verts: [],
            norms: [],
            textures: [],
            hashindices: {},
            indices: [[]],
            materialIndices: [],
            index: 0,
        };
        const VERTEX_RE = /^v\s/;
        const NORMAL_RE = /^vn\s/;
        const TEXTURE_RE = /^vt\s/;
        const FACE_RE = /^f\s/;
        const WHITESPACE_RE = /\s+/;
        const USE_MATERIAL_RE = /^usemtl/;
        // array of lines separated by the newline
        const lines = objectData.split("\n");
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith("#")) {
                continue;
            }
            const elements = line.split(WHITESPACE_RE);
            elements.shift();
            if (VERTEX_RE.test(line)) {
                // if this is a vertex
                verts.push(...elements);
            }
            else if (NORMAL_RE.test(line)) {
                // if this is a vertex normal
                vertNormals.push(...elements);
            }
            else if (TEXTURE_RE.test(line)) {
                let coords = elements;
                // by default, the loader will only look at the U and V
                // coordinates of the vt declaration. So, this truncates the
                // elements to only those 2 values. If W texture coordinate
                // support is enabled, then the texture coordinate is
                // expected to have three values in it.
                if (elements.length > 2 && !options.enableWTextureCoord) {
                    coords = elements.slice(0, 2);
                }
                else if (elements.length === 2 && options.enableWTextureCoord) {
                    // If for some reason W texture coordinate support is enabled
                    // and only the U and V coordinates are given, then we supply
                    // the default value of 0 so that the stride length is correct
                    // when the textures are unpacked below.
                    coords.push("0");
                }
                textures.push(...coords);
            }
            else if (USE_MATERIAL_RE.test(line)) {
                const materialName = elements[0];
                // check to see if we've ever seen it before
                if (!(materialName in materialIndicesByName)) {
                    // new material we've never seen
                    materialNamesByIndex.push(materialName);
                    materialIndicesByName[materialName] = materialNamesByIndex.length - 1;
                    // push new array into indices
                    // already contains an array at index zero, don't add
                    if (materialIndicesByName[materialName] > 0) {
                        unpacked.indices.push([]);
                    }
                }
                // keep track of the current material index
                currentMaterialIndex = materialIndicesByName[materialName];
                // update current index array
                currentObjectByMaterialIndex = currentMaterialIndex;
            }
            else if (FACE_RE.test(line)) {
                // if this is a face
                /*
                split this face into an array of Vertex groups
                for example:
                   f 16/92/11 14/101/22 1/69/1
                becomes:
                  ['16/92/11', '14/101/22', '1/69/1'];
                */
                const triangles = triangulate(elements);
                for (const triangle of triangles) {
                    for (let j = 0, eleLen = triangle.length; j < eleLen; j++) {
                        const hash = triangle[j] + "," + currentMaterialIndex;
                        if (hash in unpacked.hashindices) {
                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);
                        }
                        else {
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
                            const vertex = elements[j].split("/");
                            // it's possible for faces to only specify the vertex
                            // and the normal. In this case, vertex will only have
                            // a length of 2 and not 3 and the normal will be the
                            // second item in the list with an index of 1.
                            const normalIndex = vertex.length - 1;
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
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 0]);
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 1]);
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 2]);
                            // Vertex textures
                            if (textures.length) {
                                const stride = options.enableWTextureCoord ? 3 : 2;
                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 0]);
                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 1]);
                                if (options.enableWTextureCoord) {
                                    unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 2]);
                                }
                            }
                            // Vertex normals
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 0]);
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 1]);
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 2]);
                            // Vertex material indices
                            unpacked.materialIndices.push(currentMaterialIndex);
                            // add the newly created Vertex to the list of indices
                            unpacked.hashindices[hash] = unpacked.index;
                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);
                            // increment the counter
                            unpacked.index += 1;
                        }
                    }
                }
            }
        }
        this.vertices = unpacked.verts;
        this.vertexNormals = unpacked.norms;
        this.textures = unpacked.textures;
        this.vertexMaterialIndices = unpacked.materialIndices;
        this.indices = unpacked.indices[currentObjectByMaterialIndex];
        this.indicesPerMaterial = unpacked.indices;
        this.materialNames = materialNamesByIndex;
        this.materialIndices = materialIndicesByName;
        this.materialsByIndex = {};
        if (options.calcTangentsAndBitangents) {
            this.calculateTangentsAndBitangents();
        }
    }
    /**
     * Calculates the tangents and bitangents of the mesh that forms an orthogonal basis together with the
     * normal in the direction of the texture coordinates. These are useful for setting up the TBN matrix
     * when distorting the normals through normal maps.
     * Method derived from: http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-13-normal-mapping/
     *
     * This method requires the normals and texture coordinates to be parsed and set up correctly.
     * Adds the tangents and bitangents as members of the class instance.
     */
    calculateTangentsAndBitangents() {
        console.assert(!!(this.vertices &&
            this.vertices.length &&
            this.vertexNormals &&
            this.vertexNormals.length &&
            this.textures &&
            this.textures.length), "Missing attributes for calculating tangents and bitangents");
        const unpacked = {
            tangents: [...new Array(this.vertices.length)].map(_ => 0),
            bitangents: [...new Array(this.vertices.length)].map(_ => 0),
        };
        // Loop through all faces in the whole mesh
        const indices = this.indices;
        const vertices = this.vertices;
        const normals = this.vertexNormals;
        const uvs = this.textures;
        for (let i = 0; i < indices.length; i += 3) {
            const i0 = indices[i + 0];
            const i1 = indices[i + 1];
            const i2 = indices[i + 2];
            const x_v0 = vertices[i0 * 3 + 0];
            const y_v0 = vertices[i0 * 3 + 1];
            const z_v0 = vertices[i0 * 3 + 2];
            const x_uv0 = uvs[i0 * 2 + 0];
            const y_uv0 = uvs[i0 * 2 + 1];
            const x_v1 = vertices[i1 * 3 + 0];
            const y_v1 = vertices[i1 * 3 + 1];
            const z_v1 = vertices[i1 * 3 + 2];
            const x_uv1 = uvs[i1 * 2 + 0];
            const y_uv1 = uvs[i1 * 2 + 1];
            const x_v2 = vertices[i2 * 3 + 0];
            const y_v2 = vertices[i2 * 3 + 1];
            const z_v2 = vertices[i2 * 3 + 2];
            const x_uv2 = uvs[i2 * 2 + 0];
            const y_uv2 = uvs[i2 * 2 + 1];
            const x_deltaPos1 = x_v1 - x_v0;
            const y_deltaPos1 = y_v1 - y_v0;
            const z_deltaPos1 = z_v1 - z_v0;
            const x_deltaPos2 = x_v2 - x_v0;
            const y_deltaPos2 = y_v2 - y_v0;
            const z_deltaPos2 = z_v2 - z_v0;
            const x_uvDeltaPos1 = x_uv1 - x_uv0;
            const y_uvDeltaPos1 = y_uv1 - y_uv0;
            const x_uvDeltaPos2 = x_uv2 - x_uv0;
            const y_uvDeltaPos2 = y_uv2 - y_uv0;
            const rInv = x_uvDeltaPos1 * y_uvDeltaPos2 - y_uvDeltaPos1 * x_uvDeltaPos2;
            const r = 1.0 / Math.abs(rInv < 0.0001 ? 1.0 : rInv);
            // Tangent
            const x_tangent = (x_deltaPos1 * y_uvDeltaPos2 - x_deltaPos2 * y_uvDeltaPos1) * r;
            const y_tangent = (y_deltaPos1 * y_uvDeltaPos2 - y_deltaPos2 * y_uvDeltaPos1) * r;
            const z_tangent = (z_deltaPos1 * y_uvDeltaPos2 - z_deltaPos2 * y_uvDeltaPos1) * r;
            // Bitangent
            const x_bitangent = (x_deltaPos2 * x_uvDeltaPos1 - x_deltaPos1 * x_uvDeltaPos2) * r;
            const y_bitangent = (y_deltaPos2 * x_uvDeltaPos1 - y_deltaPos1 * x_uvDeltaPos2) * r;
            const z_bitangent = (z_deltaPos2 * x_uvDeltaPos1 - z_deltaPos1 * x_uvDeltaPos2) * r;
            // Gram-Schmidt orthogonalize
            //t = glm::normalize(t - n * glm:: dot(n, t));
            const x_n0 = normals[i0 * 3 + 0];
            const y_n0 = normals[i0 * 3 + 1];
            const z_n0 = normals[i0 * 3 + 2];
            const x_n1 = normals[i1 * 3 + 0];
            const y_n1 = normals[i1 * 3 + 1];
            const z_n1 = normals[i1 * 3 + 2];
            const x_n2 = normals[i2 * 3 + 0];
            const y_n2 = normals[i2 * 3 + 1];
            const z_n2 = normals[i2 * 3 + 2];
            // Tangent
            const n0_dot_t = x_tangent * x_n0 + y_tangent * y_n0 + z_tangent * z_n0;
            const n1_dot_t = x_tangent * x_n1 + y_tangent * y_n1 + z_tangent * z_n1;
            const n2_dot_t = x_tangent * x_n2 + y_tangent * y_n2 + z_tangent * z_n2;
            const x_resTangent0 = x_tangent - x_n0 * n0_dot_t;
            const y_resTangent0 = y_tangent - y_n0 * n0_dot_t;
            const z_resTangent0 = z_tangent - z_n0 * n0_dot_t;
            const x_resTangent1 = x_tangent - x_n1 * n1_dot_t;
            const y_resTangent1 = y_tangent - y_n1 * n1_dot_t;
            const z_resTangent1 = z_tangent - z_n1 * n1_dot_t;
            const x_resTangent2 = x_tangent - x_n2 * n2_dot_t;
            const y_resTangent2 = y_tangent - y_n2 * n2_dot_t;
            const z_resTangent2 = z_tangent - z_n2 * n2_dot_t;
            const magTangent0 = Math.sqrt(x_resTangent0 * x_resTangent0 + y_resTangent0 * y_resTangent0 + z_resTangent0 * z_resTangent0);
            const magTangent1 = Math.sqrt(x_resTangent1 * x_resTangent1 + y_resTangent1 * y_resTangent1 + z_resTangent1 * z_resTangent1);
            const magTangent2 = Math.sqrt(x_resTangent2 * x_resTangent2 + y_resTangent2 * y_resTangent2 + z_resTangent2 * z_resTangent2);
            // Bitangent
            const n0_dot_bt = x_bitangent * x_n0 + y_bitangent * y_n0 + z_bitangent * z_n0;
            const n1_dot_bt = x_bitangent * x_n1 + y_bitangent * y_n1 + z_bitangent * z_n1;
            const n2_dot_bt = x_bitangent * x_n2 + y_bitangent * y_n2 + z_bitangent * z_n2;
            const x_resBitangent0 = x_bitangent - x_n0 * n0_dot_bt;
            const y_resBitangent0 = y_bitangent - y_n0 * n0_dot_bt;
            const z_resBitangent0 = z_bitangent - z_n0 * n0_dot_bt;
            const x_resBitangent1 = x_bitangent - x_n1 * n1_dot_bt;
            const y_resBitangent1 = y_bitangent - y_n1 * n1_dot_bt;
            const z_resBitangent1 = z_bitangent - z_n1 * n1_dot_bt;
            const x_resBitangent2 = x_bitangent - x_n2 * n2_dot_bt;
            const y_resBitangent2 = y_bitangent - y_n2 * n2_dot_bt;
            const z_resBitangent2 = z_bitangent - z_n2 * n2_dot_bt;
            const magBitangent0 = Math.sqrt(x_resBitangent0 * x_resBitangent0 +
                y_resBitangent0 * y_resBitangent0 +
                z_resBitangent0 * z_resBitangent0);
            const magBitangent1 = Math.sqrt(x_resBitangent1 * x_resBitangent1 +
                y_resBitangent1 * y_resBitangent1 +
                z_resBitangent1 * z_resBitangent1);
            const magBitangent2 = Math.sqrt(x_resBitangent2 * x_resBitangent2 +
                y_resBitangent2 * y_resBitangent2 +
                z_resBitangent2 * z_resBitangent2);
            unpacked.tangents[i0 * 3 + 0] += x_resTangent0 / magTangent0;
            unpacked.tangents[i0 * 3 + 1] += y_resTangent0 / magTangent0;
            unpacked.tangents[i0 * 3 + 2] += z_resTangent0 / magTangent0;
            unpacked.tangents[i1 * 3 + 0] += x_resTangent1 / magTangent1;
            unpacked.tangents[i1 * 3 + 1] += y_resTangent1 / magTangent1;
            unpacked.tangents[i1 * 3 + 2] += z_resTangent1 / magTangent1;
            unpacked.tangents[i2 * 3 + 0] += x_resTangent2 / magTangent2;
            unpacked.tangents[i2 * 3 + 1] += y_resTangent2 / magTangent2;
            unpacked.tangents[i2 * 3 + 2] += z_resTangent2 / magTangent2;
            unpacked.bitangents[i0 * 3 + 0] += x_resBitangent0 / magBitangent0;
            unpacked.bitangents[i0 * 3 + 1] += y_resBitangent0 / magBitangent0;
            unpacked.bitangents[i0 * 3 + 2] += z_resBitangent0 / magBitangent0;
            unpacked.bitangents[i1 * 3 + 0] += x_resBitangent1 / magBitangent1;
            unpacked.bitangents[i1 * 3 + 1] += y_resBitangent1 / magBitangent1;
            unpacked.bitangents[i1 * 3 + 2] += z_resBitangent1 / magBitangent1;
            unpacked.bitangents[i2 * 3 + 0] += x_resBitangent2 / magBitangent2;
            unpacked.bitangents[i2 * 3 + 1] += y_resBitangent2 / magBitangent2;
            unpacked.bitangents[i2 * 3 + 2] += z_resBitangent2 / magBitangent2;
            // TODO: check handedness
        }
        this.tangents = unpacked.tangents;
        this.bitangents = unpacked.bitangents;
    }
    /**
     * @param layout - A {@link Layout} object that describes the
     * desired memory layout of the generated buffer
     * @return The packed array in the ... TODO
     */
    makeBufferData(layout) {
        const numItems = this.vertices.length / 3;
        const buffer = new ArrayBuffer(layout.stride * numItems);
        buffer.numItems = numItems;
        const dataView = new DataView(buffer);
        for (let i = 0, vertexOffset = 0; i < numItems; i++) {
            vertexOffset = i * layout.stride;
            // copy in the vertex data in the order and format given by the
            // layout param
            for (const attribute of layout.attributes) {
                const offset = vertexOffset + layout.attributeMap[attribute.key].offset;
                switch (attribute.key) {
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].POSITION.key:
                        dataView.setFloat32(offset, this.vertices[i * 3], true);
                        dataView.setFloat32(offset + 4, this.vertices[i * 3 + 1], true);
                        dataView.setFloat32(offset + 8, this.vertices[i * 3 + 2], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].UV.key:
                        dataView.setFloat32(offset, this.textures[i * 2], true);
                        dataView.setFloat32(offset + 4, this.textures[i * 2 + 1], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].NORMAL.key:
                        dataView.setFloat32(offset, this.vertexNormals[i * 3], true);
                        dataView.setFloat32(offset + 4, this.vertexNormals[i * 3 + 1], true);
                        dataView.setFloat32(offset + 8, this.vertexNormals[i * 3 + 2], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].MATERIAL_INDEX.key:
                        dataView.setInt16(offset, this.vertexMaterialIndices[i], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].AMBIENT.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.ambient[0], true);
                        dataView.setFloat32(offset + 4, material.ambient[1], true);
                        dataView.setFloat32(offset + 8, material.ambient[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].DIFFUSE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.diffuse[0], true);
                        dataView.setFloat32(offset + 4, material.diffuse[1], true);
                        dataView.setFloat32(offset + 8, material.diffuse[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SPECULAR.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.specular[0], true);
                        dataView.setFloat32(offset + 4, material.specular[1], true);
                        dataView.setFloat32(offset + 8, material.specular[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SPECULAR_EXPONENT.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.specularExponent, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].EMISSIVE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.emissive[0], true);
                        dataView.setFloat32(offset + 4, material.emissive[1], true);
                        dataView.setFloat32(offset + 8, material.emissive[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].TRANSMISSION_FILTER.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.transmissionFilter[0], true);
                        dataView.setFloat32(offset + 4, material.transmissionFilter[1], true);
                        dataView.setFloat32(offset + 8, material.transmissionFilter[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].DISSOLVE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.dissolve, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].ILLUMINATION.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setInt16(offset, material.illumination, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].REFRACTION_INDEX.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.refractionIndex, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SHARPNESS.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.sharpness, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].ANTI_ALIASING.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setInt16(offset, material.antiAliasing ? 1 : 0, true);
                        break;
                    }
                }
            }
        }
        return buffer;
    }
    makeIndexBufferData() {
        const buffer = new Uint16Array(this.indices);
        buffer.numItems = this.indices.length;
        return buffer;
    }
    addMaterialLibrary(mtl) {
        for (const name in mtl.materials) {
            if (!(name in this.materialIndices)) {
                // This material is not referenced by the mesh
                continue;
            }
            const material = mtl.materials[name];
            // Find the material index for this material
            const materialIndex = this.materialIndices[material.name];
            // Put the material into the materialsByIndex object at the right
            // spot as determined when the obj file was parsed
            this.materialsByIndex[materialIndex] = material;
        }
    }
}
function* triangulate(elements) {
    if (elements.length <= 3) {
        yield elements;
    }
    else if (elements.length === 4) {
        yield [elements[0], elements[1], elements[2]];
        yield [elements[2], elements[3], elements[0]];
    }
    else {
        for (let i = 1; i < elements.length - 1; i++) {
            yield [elements[0], elements[i], elements[i + 1]];
        }
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: downloadModels, downloadMeshes, initMeshBuffers, deleteMeshBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadModels", function() { return downloadModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadMeshes", function() { return downloadMeshes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMeshBuffers", function() { return initMeshBuffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMeshBuffers", function() { return deleteMeshBuffers; });
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ "./src/material.ts");


function downloadMtlTextures(mtl, root) {
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
            const mapData = material[attr];
            if (!mapData) {
                continue;
            }
            const url = root + mapData.filename;
            textures.push(fetch(url)
                .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.blob();
            })
                .then(function (data) {
                const image = new Image();
                image.src = URL.createObjectURL(data);
                mapData.texture = image;
                return new Promise(resolve => (image.onload = resolve));
            })
                .catch(() => {
                console.error(`Unable to download texture: ${url}`);
            }));
        }
    }
    return Promise.all(textures);
}
function getMtl(modelOptions) {
    if (!(typeof modelOptions.mtl === "string")) {
        return modelOptions.obj.replace(/\.obj$/, ".mtl");
    }
    return modelOptions.mtl;
}
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
function downloadModels(models) {
    const finished = [];
    for (const model of models) {
        if (!model.obj) {
            throw new Error('"obj" attribute of model object not set. The .obj file is required to be set ' +
                "in order to use downloadModels()");
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
            return new _mesh__WEBPACK_IMPORTED_MODULE_0__["default"](data, options);
        });
        let mtlPromise;
        // Download MaterialLibrary file?
        if (model.mtl) {
            const mtl = getMtl(model);
            mtlPromise = fetch(mtl)
                .then(response => response.text())
                .then((data) => {
                const material = new _material__WEBPACK_IMPORTED_MODULE_1__["MaterialLibrary"](data);
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
            })
                .then((value) => {
                return value[0];
            });
        }
        const parsed = [namePromise, meshPromise, mtlPromise];
        finished.push(Promise.all(parsed));
    }
    return Promise.all(finished).then(ms => {
        // the "finished" promise is a list of name, Mesh instance,
        // and MaterialLibary instance. This unpacks and returns an
        // object mapping name to Mesh (Mesh points to MTL).
        const models = {};
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
function downloadMeshes(nameAndURLs, completionCallback, meshes) {
    if (meshes === undefined) {
        meshes = {};
    }
    const completed = [];
    for (const mesh_name in nameAndURLs) {
        if (!nameAndURLs.hasOwnProperty(mesh_name)) {
            continue;
        }
        const url = nameAndURLs[mesh_name];
        completed.push(fetch(url)
            .then(response => response.text())
            .then(data => {
            return [mesh_name, new _mesh__WEBPACK_IMPORTED_MODULE_0__["default"](data)];
        }));
    }
    Promise.all(completed).then(ms => {
        for (const [name, mesh] of ms) {
            meshes[name] = mesh;
        }
        return completionCallback(meshes);
    });
}
function _buildBuffer(gl, type, data, itemSize) {
    const buffer = gl.createBuffer();
    const arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
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
function initMeshBuffers(gl, mesh) {
    mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
    mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, mesh.textureStride);
    mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
    mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
    return mesh;
}
function deleteMeshBuffers(gl, mesh) {
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
}


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaron/git/webgl-obj-loader/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PQkovd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09CSi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PQkovLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL2xheW91dC50cyIsIndlYnBhY2s6Ly9PQkovLi9zcmMvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL21lc2gudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFMUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxD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QUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFakMsVUFBVTtZQUNWLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXhFLE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3pCLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUNoRyxDQUFDO1lBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDekIsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLENBQ2hHLENBQUM7WUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUN6QixhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsQ0FDaEcsQ0FBQztZQUVGLFlBQVk7WUFDWixNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvRSxNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvRSxNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUUvRSxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUVuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUVuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUVuRSx5QkFBeUI7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLE1BQWM7UUFDekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sTUFBTSxHQUE0QixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxZQUFZLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakMsK0RBQStEO1lBQy9ELGVBQWU7WUFDZixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZDLE1BQU0sTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hFLFFBQVEsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyw4Q0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO3dCQUNwQixRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDeEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsTUFBTTtvQkFDVixLQUFLLDhDQUFNLENBQUMsRUFBRSxDQUFDLEdBQUc7d0JBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3hELFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hFLE1BQU07b0JBQ1YsS0FBSyw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO3dCQUNsQixRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDN0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDckUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDckUsTUFBTTtvQkFDVixLQUFLLDhDQUFNLENBQUMsY0FBYyxDQUFDLEdBQUc7d0JBQzFCLFFBQVEsQ0FBQyxRQUFR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Z2wtb2JqLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiT0JKXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9CSlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPQkpcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBNZXNoLCB7XG4gICAgTWVzaE9wdGlvbnMsXG4gICAgTWF0ZXJpYWxOYW1lVG9JbmRleCxcbiAgICBJbmRleFRvTWF0ZXJpYWwsXG4gICAgQXJyYXlCdWZmZXJXaXRoSXRlbVNpemUsXG4gICAgVWludDE2QXJyYXlXaXRoSXRlbVNpemUsXG59IGZyb20gXCIuL21lc2hcIjtcbmltcG9ydCB7IE1hdGVyaWFsLCBNYXRlcmlhbExpYnJhcnksIFZlYzMsIFVWVywgVGV4dHVyZU1hcERhdGEgfSBmcm9tIFwiLi9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGF5b3V0LCBUWVBFUywgQXR0cmlidXRlSW5mbywgRHVwbGljYXRlQXR0cmlidXRlRXhjZXB0aW9uLCBBdHRyaWJ1dGUgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7XG4gICAgZG93bmxvYWRNb2RlbHMsXG4gICAgZG93bmxvYWRNZXNoZXMsXG4gICAgaW5pdE1lc2hCdWZmZXJzLFxuICAgIGRlbGV0ZU1lc2hCdWZmZXJzLFxuICAgIERvd25sb2FkTW9kZWxzT3B0aW9ucyxcbiAgICBNZXNoTWFwLFxuICAgIE5hbWVBbmRVcmxzLFxuICAgIEV4dGVuZGVkR0xCdWZmZXIsXG4gICAgTWVzaFdpdGhCdWZmZXJzLFxufSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCB2ZXJzaW9uID0gXCIyLjAuM1wiO1xuXG4vKipcbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IHtcbiAgICBBcnJheUJ1ZmZlcldpdGhJdGVtU2l6ZSxcbiAgICBBdHRyaWJ1dGUsXG4gICAgQXR0cmlidXRlSW5mbyxcbiAgICBEb3dubG9hZE1vZGVsc09wdGlvbnMsXG4gICAgRHVwbGljYXRlQXR0cmlidXRlRXhjZXB0aW9uLFxuICAgIEV4dGVuZGVkR0xCdWZmZXIsXG4gICAgSW5kZXhUb01hdGVyaWFsLFxuICAgIExheW91dCxcbiAgICBNYXRlcmlhbCxcbiAgICBNYXRlcmlhbExpYnJhcnksXG4gICAgTWF0ZXJpYWxOYW1lVG9JbmRleCxcbiAgICBNZXNoLFxuICAgIE1lc2hNYXAsXG4gICAgTWVzaE9wdGlvbnMsXG4gICAgTWVzaFdpdGhCdWZmZXJzLFxuICAgIE5hbWVBbmRVcmxzLFxuICAgIFRleHR1cmVNYXBEYXRhLFxuICAgIFRZUEVTLFxuICAgIFVpbnQxNkFycmF5V2l0aEl0ZW1TaXplLFxuICAgIFVWVyxcbiAgICBWZWMzLFxuICAgIGRvd25sb2FkTW9kZWxzLFxuICAgIGRvd25sb2FkTWVzaGVzLFxuICAgIGluaXRNZXNoQnVmZmVycyxcbiAgICBkZWxldGVNZXNoQnVmZmVycyxcbiAgICB2ZXJzaW9uLFxufTtcbiIsImV4cG9ydCBlbnVtIFRZUEVTIHtcbiAgICBcIkJZVEVcIiA9IDEsXG4gICAgXCJVTlNJR05FRF9CWVRFXCIgPSAxLFxuICAgIFwiU0hPUlRcIiA9IDIsXG4gICAgXCJVTlNJR05FRF9TSE9SVFwiID0gMixcbiAgICBcIkZMT0FUXCIgPSA0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZUluZm8ge1xuICAgIGF0dHJpYnV0ZTogQXR0cmlidXRlO1xuICAgIHNpemU6IEF0dHJpYnV0ZVtcInNpemVcIl07XG4gICAgdHlwZTogQXR0cmlidXRlW1widHlwZVwiXTtcbiAgICBub3JtYWxpemVkOiBBdHRyaWJ1dGVbXCJub3JtYWxpemVkXCJdO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIHN0cmlkZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuIGV4Y2VwdGlvbiBmb3Igd2hlbiB0d28gb3IgbW9yZSBvZiB0aGUgc2FtZSBhdHRyaWJ1dGVzIGFyZSBmb3VuZCBpbiB0aGVcbiAqIHNhbWUgbGF5b3V0LlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUF0dHJpYnV0ZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBEdXBsaWNhdGVBdHRyaWJ1dGVFeGNlcHRpb25cbiAgICAgKiBAcGFyYW0ge0F0dHJpYnV0ZX0gYXR0cmlidXRlIC0gVGhlIGF0dHJpYnV0ZSB0aGF0IHdhcyBmb3VuZCBtb3JlIHRoYW5cbiAgICAgKiAgICAgICAgb25jZSBpbiB0aGUge0BsaW5rIExheW91dH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGU6IEF0dHJpYnV0ZSkge1xuICAgICAgICBzdXBlcihgZm91bmQgZHVwbGljYXRlIGF0dHJpYnV0ZTogJHthdHRyaWJ1dGUua2V5fWApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGhvdyBhIHZlcnRleCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHBhY2tlZCBpbnRvIGFuIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGUge1xuICAgIHB1YmxpYyBzaXplT2ZUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIHNpemVJbkJ5dGVzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZS4gRG8gbm90IGNhbGwgdGhpcyBkaXJlY3RseSwgdXNlIHRoZSBwcmVkZWZpbmVkXG4gICAgICogY29uc3RhbnRzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGlzIGF0dHJpYnV0ZSBhcyBpZiBpdCB3ZXJlIGEga2V5IGluXG4gICAgICogICAgICAgIGFuIE9iamVjdC4gVXNlIHRoZSBjYW1lbCBjYXNlIHZlcnNpb24gb2YgdGhlIHVwcGVyIHNuYWtlIGNhc2VcbiAgICAgKiAgICAgICAgY29uc3QgbmFtZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBwZXIgdmVydGV4IGF0dHJpYnV0ZS5cbiAgICAgKiAgICAgICAgTXVzdCBiZSAxLCAyLCAzLCBvciA0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGRhdGEgdHlwZSBvZiBlYWNoIGNvbXBvbmVudCBmb3IgdGhpc1xuICAgICAqICAgICAgICBhdHRyaWJ1dGUuIFBvc3NpYmxlIHZhbHVlczo8YnIvPlxuICAgICAqICAgICAgICBcIkJZVEVcIjogc2lnbmVkIDgtYml0IGludGVnZXIsIHdpdGggdmFsdWVzIGluIFstMTI4LCAxMjddPGJyLz5cbiAgICAgKiAgICAgICAgXCJTSE9SVFwiOiBzaWduZWQgMTYtYml0IGludGVnZXIsIHdpdGggdmFsdWVzIGluXG4gICAgICogICAgICAgICAgICBbLTMyNzY4LCAzMjc2N108YnIvPlxuICAgICAqICAgICAgICBcIlVOU0lHTkVEX0JZVEVcIjogdW5zaWduZWQgOC1iaXQgaW50ZWdlciwgd2l0aCB2YWx1ZXMgaW5cbiAgICAgKiAgICAgICAgICAgIFswLCAyNTVdPGJyLz5cbiAgICAgKiAgICAgICAgXCJVTlNJR05FRF9TSE9SVFwiOiB1bnNpZ25lZCAxNi1iaXQgaW50ZWdlciwgd2l0aCB2YWx1ZXMgaW5cbiAgICAgKiAgICAgICAgICAgIFswLCA2NTUzNV08YnIvPlxuICAgICAqICAgICAgICBcIkZMT0FUXCI6IDMyLWJpdCBmbG9hdGluZyBwb2ludCBudW1iZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vcm1hbGl6ZWQgLSBXaGV0aGVyIGludGVnZXIgZGF0YSB2YWx1ZXMgc2hvdWxkIGJlXG4gICAgICogICAgICAgIG5vcm1hbGl6ZWQgd2hlbiBiZWluZyBjYXN0ZWQgdG8gYSBmbG9hdC48YnIvPlxuICAgICAqICAgICAgICBJZiB0cnVlLCBzaWduZWQgaW50ZWdlcnMgYXJlIG5vcm1hbGl6ZWQgdG8gWy0xLCAxXS48YnIvPlxuICAgICAqICAgICAgICBJZiB0cnVlLCB1bnNpZ25lZCBpbnRlZ2VycyBhcmUgbm9ybWFsaXplZCB0byBbMCwgMV0uPGJyLz5cbiAgICAgKiAgICAgICAgRm9yIHR5cGUgXCJGTE9BVFwiLCB0aGlzIHBhcmFtZXRlciBoYXMgbm8gZWZmZWN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBrZXk6IHN0cmluZywgcHVibGljIHNpemU6IG51bWJlciwgcHVibGljIHR5cGU6IFRZUEVTLCBwdWJsaWMgbm9ybWFsaXplZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc2l6ZU9mVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgdGhpcy5zaXplSW5CeXRlcyA9IHRoaXMuc2l6ZU9mVHlwZSAqIHNpemU7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgdG8gcmVwcmVzZW50IHRoZSBtZW1vcnkgbGF5b3V0IGZvciBhIHZlcnRleCBhdHRyaWJ1dGUgYXJyYXkuIFVzZWQgYnlcbiAqIHtAbGluayBNZXNofSdzIFRCRCguLi4pIG1ldGhvZCB0byBnZW5lcmF0ZSBhIHBhY2tlZCBhcnJheSBmcm9tIG1lc2ggZGF0YS5cbiAqIDxwPlxuICogTGF5b3V0IGNhbiBzb3J0IG9mIGJlIHRob3VnaHQgb2YgYXMgYSBDLXN0eWxlIHN0cnVjdCBkZWNsYXJhdGlvbi5cbiAqIHtAbGluayBNZXNofSdzIFRCRCguLi4pIG1ldGhvZCB3aWxsIHVzZSB0aGUge0BsaW5rIExheW91dH0gaW5zdGFuY2UgdG9cbiAqIHBhY2sgYW4gYXJyYXkgaW4gdGhlIGdpdmVuIGF0dHJpYnV0ZSBvcmRlci5cbiAqIDxwPlxuICogTGF5b3V0IGFsc28gaXMgdmVyeSBoZWxwZnVsIHdoZW4gY2FsbGluZyBhIFdlYkdMIGNvbnRleHQnc1xuICogPGNvZGU+dmVydGV4QXR0cmliUG9pbnRlcjwvY29kZT4gbWV0aG9kLiBJZiB5b3UndmUgY3JlYXRlZCBhIGJ1ZmZlciB1c2luZ1xuICogYSBMYXlvdXQgaW5zdGFuY2UsIHRoZW4gdGhlIHNhbWUgTGF5b3V0IGluc3RhbmNlIGNhbiBiZSB1c2VkIHRvIGRldGVybWluZVxuICogdGhlIHNpemUsIHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgYW5kIG9mZnNldCBwYXJhbWV0ZXJzIGZvclxuICogPGNvZGU+dmVydGV4QXR0cmliUG9pbnRlcjwvY29kZT4uXG4gKiA8cD5cbiAqIEZvciBleGFtcGxlOlxuICogPHByZT48Y29kZT5cbiAqXG4gKiBjb25zdCBpbmRleCA9IGdsY3R4LmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwicG9zXCIpO1xuICogZ2xjdHgudmVydGV4QXR0cmliUG9pbnRlcihcbiAqICAgbGF5b3V0LnBvc2l0aW9uLnNpemUsXG4gKiAgIGdsY3R4W2xheW91dC5wb3NpdGlvbi50eXBlXSxcbiAqICAgbGF5b3V0LnBvc2l0aW9uLm5vcm1hbGl6ZWQsXG4gKiAgIGxheW91dC5wb3NpdGlvbi5zdHJpZGUsXG4gKiAgIGxheW91dC5wb3NpdGlvbi5vZmZzZXQpO1xuICogPC9jb2RlPjwvcHJlPlxuICogQHNlZSB7QGxpbmsgTWVzaH1cbiAqL1xuZXhwb3J0IGNsYXNzIExheW91dCB7XG4gICAgLy8gR2VvbWV0cnkgYXR0cmlidXRlc1xuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIHgsIHksICYgeiBhcyBmbG9hdHNcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIExheW91dH1cbiAgICAgKi9cbiAgICBzdGF0aWMgUE9TSVRJT04gPSBuZXcgQXR0cmlidXRlKFwicG9zaXRpb25cIiwgMywgVFlQRVMuRkxPQVQpO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIGxheW91dCB0byBwYWNrIGEgdmVydGV4J3Mgbm9ybWFsJ3MgeCwgeSwgJiB6IGFzIGZsb2F0c1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgTGF5b3V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBOT1JNQUwgPSBuZXcgQXR0cmlidXRlKFwibm9ybWFsXCIsIDMsIFRZUEVTLkZMT0FUKTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIG5vcm1hbCdzIHgsIHksICYgeiBhcyBmbG9hdHMuXG4gICAgICogPHA+XG4gICAgICogVGhpcyB2YWx1ZSB3aWxsIGJlIGNvbXB1dGVkIG9uLXRoZS1mbHkgYmFzZWQgb24gdGhlIHRleHR1cmUgY29vcmRpbmF0ZXMuXG4gICAgICogSWYgbm8gdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZ2VuZXJhdGVkIHZhbHVlIHdpbGwgZGVmYXVsdCB0b1xuICAgICAqIDAsIDAsIDAuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgc3RhdGljIFRBTkdFTlQgPSBuZXcgQXR0cmlidXRlKFwidGFuZ2VudFwiLCAzLCBUWVBFUy5GTE9BVCk7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYSB2ZXJ0ZXgncyBub3JtYWwncyBiaXRhbmdlbnQgeCwgeSwgJiB6IGFzIGZsb2F0cy5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGlzIHZhbHVlIHdpbGwgYmUgY29tcHV0ZWQgb24tdGhlLWZseSBiYXNlZCBvbiB0aGUgdGV4dHVyZSBjb29yZGluYXRlcy5cbiAgICAgKiBJZiBubyB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBhdmFpbGFibGUsIHRoZSBnZW5lcmF0ZWQgdmFsdWUgd2lsbCBkZWZhdWx0IHRvXG4gICAgICogMCwgMCwgMC5cbiAgICAgKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgc3RhdGljIEJJVEFOR0VOVCA9IG5ldyBBdHRyaWJ1dGUoXCJiaXRhbmdlbnRcIiwgMywgVFlQRVMuRkxPQVQpO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIGxheW91dCB0byBwYWNrIGEgdmVydGV4J3MgdGV4dHVyZSBjb29yZGluYXRlcycgdSAmIHYgYXMgZmxvYXRzXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgc3RhdGljIFVWID0gbmV3IEF0dHJpYnV0ZShcInV2XCIsIDIsIFRZUEVTLkZMT0FUKTtcblxuICAgIC8vIE1hdGVyaWFsIGF0dHJpYnV0ZXNcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhbiB1bnNpZ25lZCBzaG9ydCB0byBiZSBpbnRlcnByZXRlZCBhcyBhIHRoZSBpbmRleFxuICAgICAqIGludG8gYSB7QGxpbmsgTWVzaH0ncyBtYXRlcmlhbHMgbGlzdC5cbiAgICAgKiA8cD5cbiAgICAgKiBUaGUgaW50ZW50aW9uIG9mIHRoaXMgdmFsdWUgaXMgdG8gc2VuZCBhbGwgb2YgdGhlIHtAbGluayBNZXNofSdzIG1hdGVyaWFsc1xuICAgICAqIGludG8gbXVsdGlwbGUgc2hhZGVyIHVuaWZvcm1zIGFuZCB0aGVuIHJlZmVyZW5jZSB0aGUgY3VycmVudCBvbmUgYnkgdGhpc1xuICAgICAqIHZlcnRleCBhdHRyaWJ1dGUuXG4gICAgICogPHA+XG4gICAgICogZXhhbXBsZSBnbHNsIGNvZGU6XG4gICAgICpcbiAgICAgKiA8cHJlPjxjb2RlPlxuICAgICAqICAvLyB0aGlzIGlzIGJvdW5kIHVzaW5nIE1BVEVSSUFMX0lOREVYXG4gICAgICogIGF0dHJpYnV0ZSBpbnQgbWF0ZXJpYWxJbmRleDtcbiAgICAgKlxuICAgICAqICBzdHJ1Y3QgTWF0ZXJpYWwge1xuICAgICAqICAgIHZlYzMgZGlmZnVzZTtcbiAgICAgKiAgICB2ZWMzIHNwZWN1bGFyO1xuICAgICAqICAgIHZlYzMgc3BlY3VsYXJFeHBvbmVudDtcbiAgICAgKiAgfTtcbiAgICAgKlxuICAgICAqICB1bmlmb3JtIE1hdGVyaWFsIG1hdGVyaWFsc1tNQVhfTUFURVJJQUxTXTtcbiAgICAgKlxuICAgICAqICAvLyAuLi5cbiAgICAgKlxuICAgICAqICB2ZWMzIGRpZmZ1c2UgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG4gICAgICpcbiAgICAgKiA8L2NvZGU+PC9wcmU+XG4gICAgICogVE9ETzogTW9yZSBkZXNjcmlwdGlvbiAmIHRlc3QgdG8gbWFrZSBzdXJlIHN1YnNjcmlwdGluZyBieSBhdHRyaWJ1dGVzIGV2ZW5cbiAgICAgKiB3b3JrcyBmb3Igd2ViZ2xcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIExheW91dH1cbiAgICAgKi9cbiAgICBzdGF0aWMgTUFURVJJQUxfSU5ERVggPSBuZXcgQXR0cmlidXRlKFwibWF0ZXJpYWxJbmRleFwiLCAxLCBUWVBFUy5TSE9SVCk7XG4gICAgc3RhdGljIE1BVEVSSUFMX0VOQUJMRUQgPSBuZXcgQXR0cmlidXRlKFwibWF0ZXJpYWxFbmFibGVkXCIsIDEsIFRZUEVTLlVOU0lHTkVEX1NIT1JUKTtcbiAgICBzdGF0aWMgQU1CSUVOVCA9IG5ldyBBdHRyaWJ1dGUoXCJhbWJpZW50XCIsIDMsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgRElGRlVTRSA9IG5ldyBBdHRyaWJ1dGUoXCJkaWZmdXNlXCIsIDMsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgU1BFQ1VMQVIgPSBuZXcgQXR0cmlidXRlKFwic3BlY3VsYXJcIiwgMywgVFlQRVMuRkxPQVQpO1xuICAgIHN0YXRpYyBTUEVDVUxBUl9FWFBPTkVOVCA9IG5ldyBBdHRyaWJ1dGUoXCJzcGVjdWxhckV4cG9uZW50XCIsIDMsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgRU1JU1NJVkUgPSBuZXcgQXR0cmlidXRlKFwiZW1pc3NpdmVcIiwgMywgVFlQRVMuRkxPQVQpO1xuICAgIHN0YXRpYyBUUkFOU01JU1NJT05fRklMVEVSID0gbmV3IEF0dHJpYnV0ZShcInRyYW5zbWlzc2lvbkZpbHRlclwiLCAzLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIERJU1NPTFZFID0gbmV3IEF0dHJpYnV0ZShcImRpc3NvbHZlXCIsIDEsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgSUxMVU1JTkFUSU9OID0gbmV3IEF0dHJpYnV0ZShcImlsbHVtaW5hdGlvblwiLCAxLCBUWVBFUy5VTlNJR05FRF9TSE9SVCk7XG4gICAgc3RhdGljIFJFRlJBQ1RJT05fSU5ERVggPSBuZXcgQXR0cmlidXRlKFwicmVmcmFjdGlvbkluZGV4XCIsIDEsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgU0hBUlBORVNTID0gbmV3IEF0dHJpYnV0ZShcInNoYXJwbmVzc1wiLCAxLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIE1BUF9ESUZGVVNFID0gbmV3IEF0dHJpYnV0ZShcIm1hcERpZmZ1c2VcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfQU1CSUVOVCA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBBbWJpZW50XCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgTUFQX1NQRUNVTEFSID0gbmV3IEF0dHJpYnV0ZShcIm1hcFNwZWN1bGFyXCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgTUFQX1NQRUNVTEFSX0VYUE9ORU5UID0gbmV3IEF0dHJpYnV0ZShcIm1hcFNwZWN1bGFyRXhwb25lbnRcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfRElTU09MVkUgPSBuZXcgQXR0cmlidXRlKFwibWFwRGlzc29sdmVcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBBTlRJX0FMSUFTSU5HID0gbmV3IEF0dHJpYnV0ZShcImFudGlBbGlhc2luZ1wiLCAxLCBUWVBFUy5VTlNJR05FRF9TSE9SVCk7XG4gICAgc3RhdGljIE1BUF9CVU1QID0gbmV3IEF0dHJpYnV0ZShcIm1hcEJ1bXBcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfRElTUExBQ0VNRU5UID0gbmV3IEF0dHJpYnV0ZShcIm1hcERpc3BsYWNlbWVudFwiLCAxLCBUWVBFUy5TSE9SVCk7XG4gICAgc3RhdGljIE1BUF9ERUNBTCA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBEZWNhbFwiLCAxLCBUWVBFUy5TSE9SVCk7XG4gICAgc3RhdGljIE1BUF9FTUlTU0lWRSA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBFbWlzc2l2ZVwiLCAxLCBUWVBFUy5TSE9SVCk7XG5cbiAgICBwdWJsaWMgc3RyaWRlOiBudW1iZXI7XG4gICAgcHVibGljIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdO1xuICAgIHB1YmxpYyBhdHRyaWJ1dGVNYXA6IHsgW2lkeDogc3RyaW5nXTogQXR0cmlidXRlSW5mbyB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIExheW91dCBvYmplY3QuIFRoaXMgY29uc3RydWN0b3Igd2lsbCB0aHJvdyBpZiBhbnkgZHVwbGljYXRlXG4gICAgICogYXR0cmlidXRlcyBhcmUgZ2l2ZW4uXG4gICAgICogQHBhcmFtIHtBcnJheX0gLi4uYXR0cmlidXRlcyAtIEFuIG9yZGVyZWQgbGlzdCBvZiBhdHRyaWJ1dGVzIHRoYXRcbiAgICAgKiAgICAgICAgZGVzY3JpYmUgdGhlIGRlc2lyZWQgbWVtb3J5IGxheW91dCBmb3IgZWFjaCB2ZXJ0ZXggYXR0cmlidXRlLlxuICAgICAqICAgICAgICA8cD5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIE1lc2h9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uYXR0cmlidXRlczogQXR0cmlidXRlW10pIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVNYXAgPSB7fTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGxldCBtYXhTdHJpZGVNdWx0aXBsZSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZU1hcFthdHRyaWJ1dGUua2V5XSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBEdXBsaWNhdGVBdHRyaWJ1dGVFeGNlcHRpb24oYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nIHRvIHNhdGlzZnkgV2ViR0wncyByZXF1aXJlbWVudCB0aGF0IGFsbFxuICAgICAgICAgICAgLy8gdmVydGV4QXR0cmliUG9pbnRlciBjYWxscyBoYXZlIGFuIG9mZnNldCB0aGF0IGlzIGEgbXVsdGlwbGUgb2ZcbiAgICAgICAgICAgIC8vIHRoZSB0eXBlIHNpemUuXG4gICAgICAgICAgICBpZiAob2Zmc2V0ICUgYXR0cmlidXRlLnNpemVPZlR5cGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYXR0cmlidXRlLnNpemVPZlR5cGUgLSAob2Zmc2V0ICUgYXR0cmlidXRlLnNpemVPZlR5cGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkxheW91dCByZXF1aXJlcyBwYWRkaW5nIGJlZm9yZSBcIiArIGF0dHJpYnV0ZS5rZXkgKyBcIiBhdHRyaWJ1dGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZU1hcFthdHRyaWJ1dGUua2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICBzaXplOiBhdHRyaWJ1dGUuc2l6ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBhdHRyaWJ1dGUudHlwZSxcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkOiBhdHRyaWJ1dGUubm9ybWFsaXplZCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIH0gYXMgQXR0cmlidXRlSW5mbztcbiAgICAgICAgICAgIG9mZnNldCArPSBhdHRyaWJ1dGUuc2l6ZUluQnl0ZXM7XG4gICAgICAgICAgICBtYXhTdHJpZGVNdWx0aXBsZSA9IE1hdGgubWF4KG1heFN0cmlkZU11bHRpcGxlLCBhdHRyaWJ1dGUuc2l6ZU9mVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHBhZGRpbmcgdG8gdGhlIGVuZCB0byBzYXRpc2Z5IFdlYkdMJ3MgcmVxdWlyZW1lbnQgdGhhdCBhbGxcbiAgICAgICAgLy8gdmVydGV4QXR0cmliUG9pbnRlciBjYWxscyBoYXZlIGEgc3RyaWRlIHRoYXQgaXMgYSBtdWx0aXBsZSBvZiB0aGVcbiAgICAgICAgLy8gdHlwZSBzaXplLiBCZWNhdXNlIHdlJ3JlIHB1dHRpbmcgZGlmZmVyZW50bHkgc2l6ZWQgYXR0cmlidXRlcyBpbnRvXG4gICAgICAgIC8vIHRoZSBzYW1lIGJ1ZmZlciwgaXQgbXVzdCBiZSBwYWRkZWQgdG8gYSBtdWx0aXBsZSBvZiB0aGUgbGFyZ2VzdFxuICAgICAgICAvLyB0eXBlIHNpemUuXG4gICAgICAgIGlmIChvZmZzZXQgJSBtYXhTdHJpZGVNdWx0aXBsZSAhPT0gMCkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IG1heFN0cmlkZU11bHRpcGxlIC0gKG9mZnNldCAlIG1heFN0cmlkZU11bHRpcGxlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkxheW91dCByZXF1aXJlcyBwYWRkaW5nIGF0IHRoZSBiYWNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RyaWRlID0gb2Zmc2V0O1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZU1hcFthdHRyaWJ1dGUua2V5XS5zdHJpZGUgPSB0aGlzLnN0cmlkZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIFZlYzMgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVVZXIHtcbiAgICB1OiBudW1iZXI7XG4gICAgdjogbnVtYmVyO1xuICAgIHc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0dXJlTWFwRGF0YSB7XG4gICAgY29sb3JDb3JyZWN0aW9uOiBib29sZWFuO1xuICAgIGhvcml6b250YWxCbGVuZGluZzogYm9vbGVhbjtcbiAgICB2ZXJ0aWNhbEJsZW5kaW5nOiBib29sZWFuO1xuICAgIGJvb3N0TWlwTWFwU2hhcnBuZXNzOiBudW1iZXI7XG4gICAgbW9kaWZ5VGV4dHVyZU1hcDoge1xuICAgICAgICBicmlnaHRuZXNzOiBudW1iZXI7XG4gICAgICAgIGNvbnRyYXN0OiBudW1iZXI7XG4gICAgfTtcbiAgICBvZmZzZXQ6IFVWVztcbiAgICBzY2FsZTogVVZXO1xuICAgIHR1cmJ1bGVuY2U6IFVWVztcbiAgICBjbGFtcDogYm9vbGVhbjtcbiAgICB0ZXh0dXJlUmVzb2x1dGlvbjogbnVtYmVyIHwgbnVsbDtcbiAgICBidW1wTXVsdGlwbGllcjogbnVtYmVyO1xuICAgIGltZkNoYW46IHN0cmluZyB8IG51bGw7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcbiAgICByZWZsZWN0aW9uVHlwZT86IHN0cmluZztcbiAgICB0ZXh0dXJlPzogSFRNTEltYWdlRWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgTWF0ZXJpYWwgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRlcmlhbCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgdW5pcXVlIG5hbWUgb2YgdGhlIG1hdGVyaWFsXG4gICAgICovXG4gICAgLy8gVGhlIHZhbHVlcyBmb3IgdGhlIGZvbGxvd2luZyBhdHRpYnV0ZXNcbiAgICAvLyBhcmUgYW4gYXJyYXkgb2YgUiwgRywgQiBub3JtYWxpemVkIHZhbHVlcy5cbiAgICAvLyBLYSAtIEFtYmllbnQgUmVmbGVjdGl2aXR5XG4gICAgYW1iaWVudDogVmVjMyA9IFswLCAwLCAwXTtcbiAgICAvLyBLZCAtIERlZnVzZSBSZWZsZWN0aXZpdHlcbiAgICBkaWZmdXNlOiBWZWMzID0gWzAsIDAsIDBdO1xuICAgIC8vIEtzXG4gICAgc3BlY3VsYXI6IFZlYzMgPSBbMCwgMCwgMF07XG4gICAgLy8gS2VcbiAgICBlbWlzc2l2ZTogVmVjMyA9IFswLCAwLCAwXTtcbiAgICAvLyBUZlxuICAgIHRyYW5zbWlzc2lvbkZpbHRlcjogVmVjMyA9IFswLCAwLCAwXTtcbiAgICAvLyBkXG4gICAgZGlzc29sdmU6IG51bWJlciA9IDA7XG4gICAgLy8gdmFsaWQgcmFuZ2UgaXMgYmV0d2VlbiAwIGFuZCAxMDAwXG4gICAgc3BlY3VsYXJFeHBvbmVudDogbnVtYmVyID0gMDtcbiAgICAvLyBlaXRoZXIgZCBvciBUcjsgdmFsaWQgdmFsdWVzIGFyZSBub3JtYWxpemVkXG4gICAgdHJhbnNwYXJlbmN5OiBudW1iZXIgPSAwO1xuICAgIC8vIGlsbHVtIC0gdGhlIGVudW0gb2YgdGhlIGlsbHVtaW5hdGlvbiBtb2RlbCB0byB1c2VcbiAgICBpbGx1bWluYXRpb246IG51bWJlciA9IDA7XG4gICAgLy8gTmkgLSBTZXQgdG8gXCJub3JtYWxcIiAoYWlyKS5cbiAgICByZWZyYWN0aW9uSW5kZXg6IG51bWJlciA9IDE7XG4gICAgLy8gc2hhcnBuZXNzXG4gICAgc2hhcnBuZXNzOiBudW1iZXIgPSAwO1xuICAgIC8vIG1hcF9LZFxuICAgIG1hcERpZmZ1c2U6IFRleHR1cmVNYXBEYXRhID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuICAgIC8vIG1hcF9LYVxuICAgIG1hcEFtYmllbnQ6IFRleHR1cmVNYXBEYXRhID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuICAgIC8vIG1hcF9Lc1xuICAgIG1hcFNwZWN1bGFyOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfTnNcbiAgICBtYXBTcGVjdWxhckV4cG9uZW50OiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfZFxuICAgIG1hcERpc3NvbHZlOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfYWF0XG4gICAgYW50aUFsaWFzaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gbWFwX2J1bXAgb3IgYnVtcFxuICAgIG1hcEJ1bXA6IFRleHR1cmVNYXBEYXRhID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuICAgIC8vIGRpc3BcbiAgICBtYXBEaXNwbGFjZW1lbnQ6IFRleHR1cmVNYXBEYXRhID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuICAgIC8vIGRlY2FsXG4gICAgbWFwRGVjYWw6IFRleHR1cmVNYXBEYXRhID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuICAgIC8vIG1hcF9LZVxuICAgIG1hcEVtaXNzaXZlOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyByZWZsIC0gd2hlbiB0aGUgcmVmbGVjdGlvbiB0eXBlIGlzIGEgY3ViZSwgdGhlcmUgd2lsbCBiZSBtdWx0aXBsZSByZWZsXG4gICAgLy8gICAgICAgIHN0YXRlbWVudHMgZm9yIGVhY2ggc2lkZSBvZiB0aGUgY3ViZS4gSWYgaXQncyBhIHNwaGVyaWNhbFxuICAgIC8vICAgICAgICByZWZsZWN0aW9uLCB0aGVyZSBzaG91bGQgb25seSBldmVyIGJlIG9uZS5cbiAgICBtYXBSZWZsZWN0aW9uczogVGV4dHVyZU1hcERhdGFbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHt9XG59XG5cbmNvbnN0IFNFTlRJTkVMX01BVEVSSUFMID0gbmV3IE1hdGVyaWFsKFwic2VudGluZWxcIik7XG5cbi8qKlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2F2ZWZyb250Xy5vYmpfZmlsZVxuICogaHR0cDovL3BhdWxib3Vya2UubmV0L2RhdGFmb3JtYXRzL210bC9cbiAqL1xuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTGlicmFyeSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyB0aGUgTWF0ZXJpYWwgUGFyc2VyXG4gICAgICogQHBhcmFtIG10bERhdGEgdGhlIE1UTCBmaWxlIGNvbnRlbnRzXG4gICAgICovXG4gICAgcHVibGljIGN1cnJlbnRNYXRlcmlhbDogTWF0ZXJpYWwgPSBTRU5USU5FTF9NQVRFUklBTDtcbiAgICBwdWJsaWMgbWF0ZXJpYWxzOiB7IFtrOiBzdHJpbmddOiBNYXRlcmlhbCB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAvKiB0aGUgZnVuY3Rpb24gbmFtZXMgaGVyZSBkaXNvYmV5IGNhbWVsQ2FzZSBjb252ZW50aW9uc1xuICAgICB0byBtYWtlIHBhcnNpbmcvcm91dGluZyBlYXNpZXIuIHNlZSB0aGUgcGFyc2UgZnVuY3Rpb25cbiAgICAgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi4gKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgTWF0ZXJpYWwgb2JqZWN0IGFuZCBhZGRzIHRvIHRoZSByZWdpc3RyeS5cbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9uZXdtdGwodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBuYW1lID0gdG9rZW5zWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmluZm8oJ1BhcnNpbmcgbmV3IE1hdGVyaWFsOicsIG5hbWUpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsID0gbmV3IE1hdGVyaWFsKG5hbWUpO1xuICAgICAgICB0aGlzLm1hdGVyaWFsc1tuYW1lXSA9IHRoaXMuY3VycmVudE1hdGVyaWFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlZSB0aGUgZG9jdW1lbmF0aW9uIGZvciBwYXJzZV9LYSBiZWxvdyBmb3IgYSBiZXR0ZXIgdW5kZXJzdGFuZGluZy5cbiAgICAgKlxuICAgICAqIEdpdmVuIGEgbGlzdCBvZiBwb3NzaWJsZSBjb2xvciB0b2tlbnMsIHJldHVybnMgYW4gYXJyYXkgb2YgUiwgRywgYW5kIEJcbiAgICAgKiBjb2xvciB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKiBAcmV0dXJuIHsqfSBhIDMgZWxlbWVudCBhcnJheSBjb250YWluaW5nIHRoZSBSLCBHLCBhbmQgQiB2YWx1ZXNcbiAgICAgKiBvZiB0aGUgY29sb3IuXG4gICAgICovXG4gICAgcGFyc2VDb2xvcih0b2tlbnM6IHN0cmluZ1tdKTogVmVjMyB7XG4gICAgICAgIGlmICh0b2tlbnNbMF0gPT0gXCJzcGVjdHJhbFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJUaGUgTVRMIHBhcnNlciBkb2VzIG5vdCBzdXBwb3J0IHNwZWN0cmFsIGN1cnZlIGZpbGVzLiBZb3Ugd2lsbCBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwibmVlZCB0byBjb252ZXJ0IHRoZSBNVEwgY29sb3JzIHRvIGVpdGhlciBSR0Igb3IgQ0lFWFlaLlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2tlbnNbMF0gPT0gXCJ4eXpcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiVGhlIE1UTCBwYXJzZXIgZG9lcyBub3QgY3VycmVudGx5IHN1cHBvcnQgWFlaIGNvbG9ycy4gRWl0aGVyIGNvbnZlcnQgdGhlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJYWVogdmFsdWVzIHRvIFJHQiBvciBjcmVhdGUgYW4gaXNzdWUgdG8gYWRkIHN1cHBvcnQgZm9yIFhZWlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyb20gbXkgdW5kZXJzdGFuZGluZyBvZiB0aGUgc3BlYywgUkdCIHZhbHVlcyBhdCB0aGlzIHBvaW50XG4gICAgICAgIC8vIHdpbGwgZWl0aGVyIGJlIDMgZmxvYXRzIG9yIGV4YWN0bHkgMSBmbG9hdCwgc28gdGhhdCdzIHRoZSBjaGVja1xuICAgICAgICAvLyB0aGF0IGknbSBnb2luZyB0byBwZXJmb3JtIGhlcmVcbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgY29uc3QgW3gsIHksIHpdID0gdG9rZW5zO1xuICAgICAgICAgICAgcmV0dXJuIFtwYXJzZUZsb2F0KHgpLCBwYXJzZUZsb2F0KHkpLCBwYXJzZUZsb2F0KHopXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNpbmNlIHRva2VucyBhdCB0aGlzIHBvaW50IGhhcyBhIGxlbmd0aCBvZiAzLCB3ZSdyZSBnb2luZyB0byBhc3N1bWVcbiAgICAgICAgLy8gaXQncyBleGFjdGx5IDEsIHNraXBwaW5nIHRoZSBjaGVjayBmb3IgMi5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KHRva2Vuc1swXSk7XG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSwgYWxsIHZhbHVlcyBhcmUgZXF1aXZhbGVudFxuICAgICAgICByZXR1cm4gW3ZhbHVlLCB2YWx1ZSwgdmFsdWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBhbWJpZW50IHJlZmxlY3Rpdml0eVxuICAgICAqXG4gICAgICogQSBLYSBkaXJlY3RpdmUgY2FuIHRha2Ugb25lIG9mIHRocmVlIGZvcm1zOlxuICAgICAqICAgLSBLYSByIGcgYlxuICAgICAqICAgLSBLYSBzcGVjdHJhbCBmaWxlLnJmbFxuICAgICAqICAgLSBLYSB4eXogeCB5IHpcbiAgICAgKiBUaGVzZSB0aHJlZSBmb3JtcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIGluIHRoYXQgb25seSBvbmVcbiAgICAgKiBkZWNsYXJhdGlvbiBjYW4gZXhpc3QgcGVyIG1hdGVyaWFsLiBJdCBpcyBjb25zaWRlcmVkIGEgc3ludGF4XG4gICAgICogZXJyb3Igb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogVGhlIFwiS2FcIiBmb3JtIHNwZWNpZmllcyB0aGUgYW1iaWVudCByZWZsZWN0aXZpdHkgdXNpbmcgUkdCIHZhbHVlcy5cbiAgICAgKiBUaGUgXCJnXCIgYW5kIFwiYlwiIHZhbHVlcyBhcmUgb3B0aW9uYWwuIElmIG9ubHkgdGhlIFwiclwiIHZhbHVlIGlzXG4gICAgICogc3BlY2lmaWVkLCB0aGVuIHRoZSBcImdcIiBhbmQgXCJiXCIgdmFsdWVzIGFyZSBhc3NpZ25lZCB0aGUgdmFsdWUgb2ZcbiAgICAgKiBcInJcIi4gVmFsdWVzIGFyZSBub3JtYWxseSBpbiB0aGUgcmFuZ2UgMC4wIHRvIDEuMC4gVmFsdWVzIG91dHNpZGVcbiAgICAgKiBvZiB0aGlzIHJhbmdlIGluY3JlYXNlIG9yIGRlY3JlYXNlIHRoZSByZWZsZWN0aXZpdHkgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiBUaGUgXCJLYSBzcGVjdHJhbFwiIGZvcm0gc3BlY2lmaWVzIHRoZSBhbWJpZW50IHJlZmxlY3Rpdml0eSB1c2luZyBhXG4gICAgICogc3BlY3RyYWwgY3VydmUuIFwiZmlsZS5yZmxcIiBpcyB0aGUgbmFtZSBvZiB0aGUgXCIucmZsXCIgZmlsZSBjb250YWluaW5nXG4gICAgICogdGhlIGN1cnZlIGRhdGEuIFwiZmFjdG9yXCIgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgd2hpY2ggaXMgYSBtdWx0aXBsaWVyXG4gICAgICogZm9yIHRoZSB2YWx1ZXMgaW4gdGhlIC5yZmwgZmlsZSBhbmQgZGVmYXVsdHMgdG8gMS4wIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAgICpcbiAgICAgKiBUaGUgXCJLYSB4eXpcIiBmb3JtIHNwZWNpZmllcyB0aGUgYW1iaWVudCByZWZsZWN0aXZpdHkgdXNpbmcgQ0lFWFlaIHZhbHVlcy5cbiAgICAgKiBcInggeSB6XCIgYXJlIHRoZSB2YWx1ZXMgb2YgdGhlIENJRVhZWiBjb2xvciBzcGFjZS4gVGhlIFwieVwiIGFuZCBcInpcIiBhcmd1bWVudHNcbiAgICAgKiBhcmUgb3B0aW9uYWwgYW5kIHRha2Ugb24gdGhlIHZhbHVlIG9mIHRoZSBcInhcIiBjb21wb25lbnQgaWYgb25seSBcInhcIiBpc1xuICAgICAqIHNwZWNpZmllZC4gVGhlIFwieCB5IHpcIiB2YWx1ZXMgYXJlIG5vcm1hbGx5IGluIHRoZSByYW5nZSBvZiAwLjAgdG8gMS4wIGFuZFxuICAgICAqIGluY3JlYXNlIG9yIGRlY3JlYXNlIGFtYmllbnQgcmVmbGVjdGl2aXR5IGFjY29yZGluZ2x5IG91dHNpZGUgb2YgdGhhdFxuICAgICAqIHJhbmdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfS2EodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5hbWJpZW50ID0gdGhpcy5wYXJzZUNvbG9yKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlmZnVzZSBSZWZsZWN0aXZpdHlcbiAgICAgKlxuICAgICAqIFNpbWlsYXIgdG8gdGhlIEthIGRpcmVjdGl2ZS4gU2ltcGx5IHJlcGxhY2UgXCJLYVwiIHdpdGggXCJLZFwiIGFuZCB0aGUgcnVsZXNcbiAgICAgKiBhcmUgdGhlIHNhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX0tkKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuZGlmZnVzZSA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWN0cmFsIFJlZmxlY3Rpdml0eVxuICAgICAqXG4gICAgICogU2ltaWxhciB0byB0aGUgS2EgZGlyZWN0aXZlLiBTaW1wbHkgcmVwbGFjZSBcIktzXCIgd2l0aCBcIktkXCIgYW5kIHRoZSBydWxlc1xuICAgICAqIGFyZSB0aGUgc2FtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfS3ModG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5zcGVjdWxhciA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXNzaXZlXG4gICAgICpcbiAgICAgKiBUaGUgYW1vdW50IGFuZCBjb2xvciBvZiBsaWdodCBlbWl0dGVkIGJ5IHRoZSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9LZSh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmVtaXNzaXZlID0gdGhpcy5wYXJzZUNvbG9yKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNtaXNzaW9uIEZpbHRlclxuICAgICAqXG4gICAgICogQW55IGxpZ2h0IHBhc3NpbmcgdGhyb3VnaCB0aGUgb2JqZWN0IGlzIGZpbHRlcmVkIGJ5IHRoZSB0cmFuc21pc3Npb25cbiAgICAgKiBmaWx0ZXIsIHdoaWNoIG9ubHkgYWxsb3dzIHNwZWNpZmljIGNvbG9ycyB0byBwYXNzIHRocm91Z2guIEZvciBleGFtcGxlLCBUZlxuICAgICAqIDAgMSAwIGFsbG93cyBhbGwgb2YgdGhlIGdyZWVuIHRvIHBhc3MgdGhyb3VnaCBhbmQgZmlsdGVycyBvdXQgYWxsIG9mIHRoZVxuICAgICAqIHJlZCBhbmQgYmx1ZS5cbiAgICAgKlxuICAgICAqIFNpbWlsYXIgdG8gdGhlIEthIGRpcmVjdGl2ZS4gU2ltcGx5IHJlcGxhY2UgXCJLc1wiIHdpdGggXCJUZlwiIGFuZCB0aGUgcnVsZXNcbiAgICAgKiBhcmUgdGhlIHNhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX1RmKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwudHJhbnNtaXNzaW9uRmlsdGVyID0gdGhpcy5wYXJzZUNvbG9yKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBkaXNzb2x2ZSBmb3IgdGhlIGN1cnJlbnQgbWF0ZXJpYWwuXG4gICAgICpcbiAgICAgKiBTdGF0ZW1lbnQ6IGQgWy1oYWxvXSBgZmFjdG9yYFxuICAgICAqXG4gICAgICogRXhhbXBsZTogXCJkIDAuNVwiXG4gICAgICpcbiAgICAgKiBUaGUgZmFjdG9yIGlzIHRoZSBhbW91bnQgdGhpcyBtYXRlcmlhbCBkaXNzb2x2ZXMgaW50byB0aGUgYmFja2dyb3VuZC4gQVxuICAgICAqIGZhY3RvciBvZiAxLjAgaXMgZnVsbHkgb3BhcXVlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHdoZW4gYSBuZXcgbWF0ZXJpYWwgaXNcbiAgICAgKiBjcmVhdGVkLiBBIGZhY3RvciBvZiAwLjAgaXMgZnVsbHkgZGlzc29sdmVkIChjb21wbGV0ZWx5IHRyYW5zcGFyZW50KS5cbiAgICAgKlxuICAgICAqIFVubGlrZSBhIHJlYWwgdHJhbnNwYXJlbnQgbWF0ZXJpYWwsIHRoZSBkaXNzb2x2ZSBkb2VzIG5vdCBkZXBlbmQgdXBvblxuICAgICAqIG1hdGVyaWFsIHRoaWNrbmVzcyBub3IgZG9lcyBpdCBoYXZlIGFueSBzcGVjdHJhbCBjaGFyYWN0ZXIuIERpc3NvbHZlIHdvcmtzXG4gICAgICogb24gYWxsIGlsbHVtaW5hdGlvbiBtb2RlbHMuXG4gICAgICpcbiAgICAgKiBUaGUgZGlzc29sdmUgc3RhdGVtZW50IGFsbG93cyBmb3IgYW4gb3B0aW9uYWwgXCItaGFsb1wiIGZsYWcgd2hpY2ggaW5kaWNhdGVzXG4gICAgICogdGhhdCBhIGRpc3NvbHZlIGlzIGRlcGVuZGVudCBvbiB0aGUgc3VyZmFjZSBvcmllbnRhdGlvbiByZWxhdGl2ZSB0byB0aGVcbiAgICAgKiB2aWV3ZXIuIEZvciBleGFtcGxlLCBhIHNwaGVyZSB3aXRoIHRoZSBmb2xsb3dpbmcgZGlzc29sdmUsIFwiZCAtaGFsbyAwLjBcIixcbiAgICAgKiB3aWxsIGJlIGZ1bGx5IGRpc3NvbHZlZCBhdCBpdHMgY2VudGVyIGFuZCB3aWxsIGFwcGVhciBncmFkdWFsbHkgbW9yZSBvcGFxdWVcbiAgICAgKiB0b3dhcmQgaXRzIGVkZ2UuXG4gICAgICpcbiAgICAgKiBcImZhY3RvclwiIGlzIHRoZSBtaW5pbXVtIGFtb3VudCBvZiBkaXNzb2x2ZSBhcHBsaWVkIHRvIHRoZSBtYXRlcmlhbC4gVGhlXG4gICAgICogYW1vdW50IG9mIGRpc3NvbHZlIHdpbGwgdmFyeSBiZXR3ZWVuIDEuMCAoZnVsbHkgb3BhcXVlKSBhbmQgdGhlIHNwZWNpZmllZFxuICAgICAqIFwiZmFjdG9yXCIuIFRoZSBmb3JtdWxhIGlzOlxuICAgICAqXG4gICAgICogICAgZGlzc29sdmUgPSAxLjAgLSAoTip2KSgxLjAtZmFjdG9yKVxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfZCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIC8vIHRoaXMgaWdub3JlcyB0aGUgLWhhbG8gb3B0aW9uIGFzIEkgY2FuJ3QgZmluZCBhbnkgZG9jdW1lbnRhdGlvbiBvbiB3aGF0XG4gICAgICAgIC8vIGl0J3Mgc3VwcG9zZWQgdG8gYmUuXG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmRpc3NvbHZlID0gcGFyc2VGbG9hdCh0b2tlbnMucG9wKCkgfHwgXCIwXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBcImlsbHVtXCIgc3RhdGVtZW50IHNwZWNpZmllcyB0aGUgaWxsdW1pbmF0aW9uIG1vZGVsIHRvIHVzZSBpbiB0aGVcbiAgICAgKiBtYXRlcmlhbC4gSWxsdW1pbmF0aW9uIG1vZGVscyBhcmUgbWF0aGVtYXRpY2FsIGVxdWF0aW9ucyB0aGF0IHJlcHJlc2VudFxuICAgICAqIHZhcmlvdXMgbWF0ZXJpYWwgbGlnaHRpbmcgYW5kIHNoYWRpbmcgZWZmZWN0cy5cbiAgICAgKlxuICAgICAqIFRoZSBpbGx1bWluYXRpb24gbnVtYmVyIGNhbiBiZSBhIG51bWJlciBmcm9tIDAgdG8gMTAuIFRoZSBmb2xsb3dpbmcgYXJlXG4gICAgICogdGhlIGxpc3Qgb2YgaWxsdW1pbmF0aW9uIGVudW1lcmF0aW9ucyBhbmQgdGhlaXIgc3VtbWFyaWVzOlxuICAgICAqIDAuIENvbG9yIG9uIGFuZCBBbWJpZW50IG9mZlxuICAgICAqIDEuIENvbG9yIG9uIGFuZCBBbWJpZW50IG9uXG4gICAgICogMi4gSGlnaGxpZ2h0IG9uXG4gICAgICogMy4gUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9uXG4gICAgICogNC4gVHJhbnNwYXJlbmN5OiBHbGFzcyBvbiwgUmVmbGVjdGlvbjogUmF5IHRyYWNlIG9uXG4gICAgICogNS4gUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXG4gICAgICogNi4gVHJhbnNwYXJlbmN5OiBSZWZyYWN0aW9uIG9uLCBSZWZsZWN0aW9uOiBGcmVzbmVsIG9mZiBhbmQgUmF5IHRyYWNlIG9uXG4gICAgICogNy4gVHJhbnNwYXJlbmN5OiBSZWZyYWN0aW9uIG9uLCBSZWZsZWN0aW9uOiBGcmVzbmVsIG9uIGFuZCBSYXkgdHJhY2Ugb25cbiAgICAgKiA4LiBSZWZsZWN0aW9uIG9uIGFuZCBSYXkgdHJhY2Ugb2ZmXG4gICAgICogOS4gVHJhbnNwYXJlbmN5OiBHbGFzcyBvbiwgUmVmbGVjdGlvbjogUmF5IHRyYWNlIG9mZlxuICAgICAqIDEwLiBDYXN0cyBzaGFkb3dzIG9udG8gaW52aXNpYmxlIHN1cmZhY2VzXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBcImlsbHVtIDJcIiB0byBzcGVjaWZ5IHRoZSBcIkhpZ2hsaWdodCBvblwiIG1vZGVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9pbGx1bSh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmlsbHVtaW5hdGlvbiA9IHBhcnNlSW50KHRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3B0aWNhbCBEZW5zaXR5IChBS0EgSW5kZXggb2YgUmVmcmFjdGlvbilcbiAgICAgKlxuICAgICAqIFN0YXRlbWVudDogTmkgYGluZGV4YFxuICAgICAqXG4gICAgICogRXhhbXBsZTogTmkgMS4wXG4gICAgICpcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG9wdGljYWwgZGVuc2l0eSBmb3IgdGhlIHN1cmZhY2UuIGBpbmRleGAgaXMgdGhlIHZhbHVlXG4gICAgICogZm9yIHRoZSBvcHRpY2FsIGRlbnNpdHkuIFRoZSB2YWx1ZXMgY2FuIHJhbmdlIGZyb20gMC4wMDEgdG8gMTAuICBBIHZhbHVlIG9mXG4gICAgICogMS4wIG1lYW5zIHRoYXQgbGlnaHQgZG9lcyBub3QgYmVuZCBhcyBpdCBwYXNzZXMgdGhyb3VnaCBhbiBvYmplY3QuXG4gICAgICogSW5jcmVhc2luZyB0aGUgb3B0aWNhbF9kZW5zaXR5IGluY3JlYXNlcyB0aGUgYW1vdW50IG9mIGJlbmRpbmcuIEdsYXNzIGhhc1xuICAgICAqIGFuIGluZGV4IG9mIHJlZnJhY3Rpb24gb2YgYWJvdXQgMS41LiBWYWx1ZXMgb2YgbGVzcyB0aGFuIDEuMCBwcm9kdWNlXG4gICAgICogYml6YXJyZSByZXN1bHRzIGFuZCBhcmUgbm90IHJlY29tbWVuZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9OaSh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLnJlZnJhY3Rpb25JbmRleCA9IHBhcnNlRmxvYXQodG9rZW5zWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNwZWN1bGFyIGV4cG9uZW50IGZvciB0aGUgY3VycmVudCBtYXRlcmlhbC4gVGhpcyBkZWZpbmVzIHRoZVxuICAgICAqIGZvY3VzIG9mIHRoZSBzcGVjdWxhciBoaWdobGlnaHQuXG4gICAgICpcbiAgICAgKiBTdGF0ZW1lbnQ6IE5zIGBleHBvbmVudGBcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IFwiTnMgMjUwXCJcbiAgICAgKlxuICAgICAqIGBleHBvbmVudGAgaXMgdGhlIHZhbHVlIGZvciB0aGUgc3BlY3VsYXIgZXhwb25lbnQuIEEgaGlnaCBleHBvbmVudCByZXN1bHRzXG4gICAgICogaW4gYSB0aWdodCwgY29uY2VudHJhdGVkIGhpZ2hsaWdodC4gTnMgVmFsdWVzIG5vcm1hbGx5IHJhbmdlIGZyb20gMCB0b1xuICAgICAqIDEwMDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9Ocyh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSBwYXJzZUludCh0b2tlbnNbMF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgc2hhcnBuZXNzIG9mIHRoZSByZWZsZWN0aW9ucyBmcm9tIHRoZSBsb2NhbCByZWZsZWN0aW9uIG1hcC5cbiAgICAgKlxuICAgICAqIFN0YXRlbWVudDogc2hhcnBuZXNzIGB2YWx1ZWBcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IFwic2hhcnBuZXNzIDEwMFwiXG4gICAgICpcbiAgICAgKiBJZiBhIG1hdGVyaWFsIGRvZXMgbm90IGhhdmUgYSBsb2NhbCByZWZsZWN0aW9uIG1hcCBkZWZpbmVkIGluIGl0cyBtYXRlcmlhbFxuICAgICAqIGRlZmludGlvbnMsIHNoYXJwbmVzcyB3aWxsIGFwcGx5IHRvIHRoZSBnbG9iYWwgcmVmbGVjdGlvbiBtYXAgZGVmaW5lZCBpblxuICAgICAqIFByZVZpZXcuXG4gICAgICpcbiAgICAgKiBgdmFsdWVgIGNhbiBiZSBhIG51bWJlciBmcm9tIDAgdG8gMTAwMC4gVGhlIGRlZmF1bHQgaXMgNjAuIEEgaGlnaCB2YWx1ZVxuICAgICAqIHJlc3VsdHMgaW4gYSBjbGVhciByZWZsZWN0aW9uIG9mIG9iamVjdHMgaW4gdGhlIHJlZmxlY3Rpb24gbWFwLlxuICAgICAqXG4gICAgICogVGlwOiBzaGFycG5lc3MgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxMDAgaW50cm9kdWNlIGFsaWFzaW5nIGVmZmVjdHMgaW5cbiAgICAgKiBmbGF0IHN1cmZhY2VzIHRoYXQgYXJlIHZpZXdlZCBhdCBhIHNoYXJwIGFuZ2xlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2Vfc2hhcnBuZXNzKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuc2hhcnBuZXNzID0gcGFyc2VJbnQodG9rZW5zWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1jYyBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtY2MgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9jYyh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLmNvbG9yQ29ycmVjdGlvbiA9IHZhbHVlc1swXSA9PSBcIm9uXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtYmxlbmR1IGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1ibGVuZHUgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9ibGVuZHUodmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5ob3Jpem9udGFsQmxlbmRpbmcgPSB2YWx1ZXNbMF0gPT0gXCJvblwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLWJsZW5kdiBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtYmxlbmR2IGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfYmxlbmR2KHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMudmVydGljYWxCbGVuZGluZyA9IHZhbHVlc1swXSA9PSBcIm9uXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtYm9vc3QgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJvb3N0IGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfYm9vc3QodmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5ib29zdE1pcE1hcFNoYXJwbmVzcyA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1tbSBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtbW0gZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9tbSh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLm1vZGlmeVRleHR1cmVNYXAuYnJpZ2h0bmVzcyA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICAgICAgb3B0aW9ucy5tb2RpZnlUZXh0dXJlTWFwLmNvbnRyYXN0ID0gcGFyc2VGbG9hdCh2YWx1ZXNbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbmQgc2V0cyB0aGUgLW8sIC1zLCBhbmQgLXQgIHUsIHYsIGFuZCB3IHZhbHVlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLW8sIC1zLCAtdCBmbGFnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiB0aGUgT2JqZWN0IG9mIGVpdGhlciB0aGUgLW8sIC1zLCAtdCBvcHRpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGRlZmF1bHRWYWx1ZSB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2Vfb3N0KHZhbHVlczogc3RyaW5nW10sIG9wdGlvbjogVVZXLCBkZWZhdWx0VmFsdWU6IG51bWJlcikge1xuICAgICAgICB3aGlsZSAodmFsdWVzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGRlZmF1bHRWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbi51ID0gcGFyc2VGbG9hdCh2YWx1ZXNbMF0pO1xuICAgICAgICBvcHRpb24udiA9IHBhcnNlRmxvYXQodmFsdWVzWzFdKTtcbiAgICAgICAgb3B0aW9uLncgPSBwYXJzZUZsb2F0KHZhbHVlc1syXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtbyBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtbyBmbGFnXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX28odmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5wYXJzZV9vc3QodmFsdWVzLCBvcHRpb25zLm9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtcyBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtcyBmbGFnXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX3ModmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5wYXJzZV9vc3QodmFsdWVzLCBvcHRpb25zLnNjYWxlLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC10IGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC10IGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfdCh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICB0aGlzLnBhcnNlX29zdCh2YWx1ZXMsIG9wdGlvbnMudHVyYnVsZW5jZSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtdGV4cmVzIGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC10ZXhyZXMgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV90ZXhyZXModmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy50ZXh0dXJlUmVzb2x1dGlvbiA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1jbGFtcCBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtY2xhbXAgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9jbGFtcCh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLmNsYW1wID0gdmFsdWVzWzBdID09IFwib25cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1ibSBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtYm0gZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9ibSh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLmJ1bXBNdWx0aXBsaWVyID0gcGFyc2VGbG9hdCh2YWx1ZXNbMF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLWltZmNoYW4gZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWltZmNoYW4gZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9pbWZjaGFuKHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuaW1mQ2hhbiA9IHZhbHVlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG9ubHkgZXhpc3RzIGZvciByZWxlY3Rpb24gbWFwcyBhbmQgZGVub3RlcyB0aGUgdHlwZSBvZiByZWZsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLXR5cGUgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV90eXBlKHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMucmVmbGVjdGlvblR5cGUgPSB2YWx1ZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSB0ZXh0dXJlJ3Mgb3B0aW9ucyBhbmQgcmV0dXJucyBhbiBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBpbmZvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGFsbCBvZiB0aGUgb3B0aW9uIHRva2VucyB0byBwYXNzIHRvIHRoZSB0ZXh0dXJlXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBhIGNvbXBsZXRlIG9iamVjdCBvZiBvYmplY3RzIHRvIGFwcGx5IHRvIHRoZSB0ZXh0dXJlXG4gICAgICovXG4gICAgcGFyc2VPcHRpb25zKHRva2Vuczogc3RyaW5nW10pOiBUZXh0dXJlTWFwRGF0YSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbXB0eVRleHR1cmVPcHRpb25zKCk7XG5cbiAgICAgICAgbGV0IG9wdGlvbjtcbiAgICAgICAgbGV0IHZhbHVlcztcbiAgICAgICAgY29uc3Qgb3B0aW9uc1RvVmFsdWVzOiB7IFtrOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XG5cbiAgICAgICAgdG9rZW5zLnJldmVyc2UoKTtcblxuICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gdG9rZW4gaXMgZ3VhcmFudGVlZCB0byBleGlzdHMgaGVyZSwgaGVuY2UgdGhlIGV4cGxpY2l0IFwiYXNcIlxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMucG9wKCkgYXMgc3RyaW5nO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uc3RhcnRzV2l0aChcIi1cIikpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24gPSB0b2tlbi5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1RvVmFsdWVzW29wdGlvbl0gPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1RvVmFsdWVzW29wdGlvbl0ucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKG9wdGlvbiBpbiBvcHRpb25zVG9WYWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9uc1RvVmFsdWVzLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcyA9IG9wdGlvbnNUb1ZhbHVlc1tvcHRpb25dO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTWV0aG9kID0gKHRoaXMgYXMgYW55KVtgcGFyc2VfJHtvcHRpb259YF07XG4gICAgICAgICAgICBpZiAob3B0aW9uTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uTWV0aG9kLmJpbmQodGhpcykodmFsdWVzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZ2l2ZW4gdGV4dHVyZSBtYXAgbGluZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgYWxsIG9mIHRoZSB0b2tlbnMgcmVwcmVzZW50aW5nIHRoZSB0ZXh0dXJlXG4gICAgICogQHJldHVybiBhIGNvbXBsZXRlIG9iamVjdCBvZiBvYmplY3RzIHRvIGFwcGx5IHRvIHRoZSB0ZXh0dXJlXG4gICAgICovXG4gICAgcGFyc2VNYXAodG9rZW5zOiBzdHJpbmdbXSk6IFRleHR1cmVNYXBEYXRhIHtcbiAgICAgICAgLy8gYWNjb3JkaW5nIHRvIHdpa2lwZWRpYTpcbiAgICAgICAgLy8gKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dhdmVmcm9udF8ub2JqX2ZpbGUjVmVuZG9yX3NwZWNpZmljX2FsdGVyYXRpb25zKVxuICAgICAgICAvLyB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgdmVuZG9yIHRoYXQgcGxhY2VzIHRoZSBmaWxlbmFtZSBiZWZvcmUgdGhlIG9wdGlvbnNcbiAgICAgICAgLy8gcmF0aGVyIHRoYW4gYWZ0ZXIgKHdoaWNoIGlzIHRvIHNwZWMpLiBBbGwgb3B0aW9ucyBzdGFydCB3aXRoIGEgJy0nXG4gICAgICAgIC8vIHNvIGlmIHRoZSBmaXJzdCB0b2tlbiBkb2Vzbid0IHN0YXJ0IHdpdGggYSAnLScsIHdlJ3JlIGdvaW5nIHRvIGFzc3VtZVxuICAgICAgICAvLyBpdCdzIHRoZSBuYW1lIG9mIHRoZSBtYXAgZmlsZS5cbiAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmc7XG4gICAgICAgIGxldCBmaWxlbmFtZSA9IFwiXCI7XG4gICAgICAgIGlmICghdG9rZW5zWzBdLnN0YXJ0c1dpdGgoXCItXCIpKSB7XG4gICAgICAgICAgICBbZmlsZW5hbWUsIC4uLm9wdGlvbnNTdHJpbmddID0gdG9rZW5zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsZW5hbWUgPSB0b2tlbnMucG9wKCkgYXMgc3RyaW5nO1xuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IHRva2VucztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnBhcnNlT3B0aW9ucyhvcHRpb25zU3RyaW5nKTtcbiAgICAgICAgb3B0aW9ucy5maWxlbmFtZSA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYW1iaWVudCBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX0thIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfbWFwX0thKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwQW1iaWVudCA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGRpZmZ1c2UgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9LZCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9LZCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcERpZmZ1c2UgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBzcGVjdWxhciBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX0tzIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfbWFwX0tzKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwU3BlY3VsYXIgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBlbWlzc2l2ZSBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX0tlIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfbWFwX0tlKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRW1pc3NpdmUgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBzcGVjdWxhciBleHBvbmVudCBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX05zIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfbWFwX05zKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwU3BlY3VsYXJFeHBvbmVudCA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGRpc3NvbHZlIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfZCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9kKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRGlzc29sdmUgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBhbnRpLWFsaWFzaW5nIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfYWF0IGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfbWFwX2FhdCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmFudGlBbGlhc2luZyA9IHRva2Vuc1swXSA9PSBcIm9uXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBidW1wIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfYnVtcCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9idW1wKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwQnVtcCA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGJ1bXAgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIGJ1bXAgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9idW1wKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5wYXJzZV9tYXBfYnVtcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZGlzcCBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgZGlzcCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX2Rpc3AodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBEaXNwbGFjZW1lbnQgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBkZWNhbCBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX2RlY2FsIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfZGVjYWwodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBEZWNhbCA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIHJlZmwgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIHJlZmwgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9yZWZsKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwUmVmbGVjdGlvbnMucHVzaCh0aGlzLnBhcnNlTWFwKHRva2VucykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgTVRMIGZpbGUuXG4gICAgICpcbiAgICAgKiBJdGVyYXRlcyBsaW5lIGJ5IGxpbmUgcGFyc2luZyBlYWNoIE1UTCBkaXJlY3RpdmUuXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGV4cGVjdHMgdGhlIGZpcnN0IHRva2VuIGluIHRoZSBsaW5lXG4gICAgICogdG8gYmUgYSB2YWxpZCBNVEwgZGlyZWN0aXZlLiBUaGF0IHRva2VuIGlzIHRoZW4gdXNlZFxuICAgICAqIHRvIHRyeSBhbmQgcnVuIGEgbWV0aG9kIG9uIHRoaXMgY2xhc3MuIHBhcnNlX1tkaXJlY3RpdmVdXG4gICAgICogRS5nLiwgdGhlIGBuZXdtdGxgIGRpcmVjdGl2ZSB3b3VsZCB0cnkgdG8gY2FsbCB0aGUgbWV0aG9kXG4gICAgICogcGFyc2VfbmV3bXRsLiBFYWNoIHBhcnNpbmcgZnVuY3Rpb24gdGFrZXMgaW4gdGhlIHJlbWFpbmluZ1xuICAgICAqIGxpc3Qgb2YgdG9rZW5zIGFuZCB1cGRhdGVzIHRoZSBjdXJyZW50TWF0ZXJpYWwgY2xhc3Mgd2l0aFxuICAgICAqIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IHRoaXMuZGF0YS5zcGxpdCgvXFxyP1xcbi8pO1xuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUgfHwgbGluZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aXZlLCAuLi50b2tlbnNdID0gbGluZS5zcGxpdCgvXFxzLyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlTWV0aG9kID0gKHRoaXMgYXMgYW55KVtgcGFyc2VfJHtkaXJlY3RpdmV9YF07XG5cbiAgICAgICAgICAgIGlmICghcGFyc2VNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYERvbid0IGtub3cgaG93IHRvIHBhcnNlIHRoZSBkaXJlY3RpdmU6IFwiJHtkaXJlY3RpdmV9XCJgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBhcnNpbmcgXCIke2RpcmVjdGl2ZX1cIiB3aXRoIHRva2VuczogJHt0b2tlbnN9YCk7XG4gICAgICAgICAgICBwYXJzZU1ldGhvZC5iaW5kKHRoaXMpKHRva2Vucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb21lIGNsZWFudXAuIFRoZXNlIGRvbid0IG5lZWQgdG8gYmUgZXhwb3NlZCBhcyBwdWJsaWMgZGF0YS5cbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwgPSBTRU5USU5FTF9NQVRFUklBTDtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSovXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGV4dHVyZU9wdGlvbnMoKTogVGV4dHVyZU1hcERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yQ29ycmVjdGlvbjogZmFsc2UsXG4gICAgICAgIGhvcml6b250YWxCbGVuZGluZzogdHJ1ZSxcbiAgICAgICAgdmVydGljYWxCbGVuZGluZzogdHJ1ZSxcbiAgICAgICAgYm9vc3RNaXBNYXBTaGFycG5lc3M6IDAsXG4gICAgICAgIG1vZGlmeVRleHR1cmVNYXA6IHtcbiAgICAgICAgICAgIGJyaWdodG5lc3M6IDAsXG4gICAgICAgICAgICBjb250cmFzdDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0OiB7IHU6IDAsIHY6IDAsIHc6IDAgfSxcbiAgICAgICAgc2NhbGU6IHsgdTogMSwgdjogMSwgdzogMSB9LFxuICAgICAgICB0dXJidWxlbmNlOiB7IHU6IDAsIHY6IDAsIHc6IDAgfSxcbiAgICAgICAgY2xhbXA6IGZhbHNlLFxuICAgICAgICB0ZXh0dXJlUmVzb2x1dGlvbjogbnVsbCxcbiAgICAgICAgYnVtcE11bHRpcGxpZXI6IDEsXG4gICAgICAgIGltZkNoYW46IG51bGwsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IE1hdGVyaWFsLCBNYXRlcmlhbExpYnJhcnkgfSBmcm9tIFwiLi9tYXRlcmlhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc2hPcHRpb25zIHtcbiAgICBlbmFibGVXVGV4dHVyZUNvb3JkPzogYm9vbGVhbjtcbiAgICBjYWxjVGFuZ2VudHNBbmRCaXRhbmdlbnRzPzogYm9vbGVhbjtcbiAgICBtYXRlcmlhbHM/OiB7IFtrZXk6IHN0cmluZ106IE1hdGVyaWFsIH07XG59XG5cbmludGVyZmFjZSBVbnBhY2tlZEF0dHJzIHtcbiAgICB2ZXJ0czogbnVtYmVyW107XG4gICAgbm9ybXM6IG51bWJlcltdO1xuICAgIHRleHR1cmVzOiBudW1iZXJbXTtcbiAgICBoYXNoaW5kaWNlczogeyBbazogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgaW5kaWNlczogbnVtYmVyW11bXTtcbiAgICBtYXRlcmlhbEluZGljZXM6IG51bWJlcltdO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0ZXJpYWxOYW1lVG9JbmRleCB7XG4gICAgW2s6IHN0cmluZ106IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRleFRvTWF0ZXJpYWwge1xuICAgIFtrOiBudW1iZXJdOiBNYXRlcmlhbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheUJ1ZmZlcldpdGhJdGVtU2l6ZSBleHRlbmRzIEFycmF5QnVmZmVyIHtcbiAgICBudW1JdGVtcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVaW50MTZBcnJheVdpdGhJdGVtU2l6ZSBleHRlbmRzIFVpbnQxNkFycmF5IHtcbiAgICBudW1JdGVtcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGUgbWFpbiBNZXNoIGNsYXNzLiBUaGUgY29uc3RydWN0b3Igd2lsbCBwYXJzZSB0aHJvdWdoIHRoZSBPQkogZmlsZSBkYXRhXG4gKiBhbmQgY29sbGVjdCB0aGUgdmVydGV4LCB2ZXJ0ZXggbm9ybWFsLCB0ZXh0dXJlLCBhbmQgZmFjZSBpbmZvcm1hdGlvbi4gVGhpc1xuICogaW5mb3JtYXRpb24gY2FuIHRoZW4gYmUgdXNlZCBsYXRlciBvbiB3aGVuIGNyZWF0aW5nIHlvdXIgVkJPcy4gU2VlXG4gKiBPQkouaW5pdE1lc2hCdWZmZXJzIGZvciBhbiBleGFtcGxlIG9mIGhvdyB0byB1c2UgdGhlIG5ld2x5IGNyZWF0ZWQgTWVzaFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoIHtcbiAgICBwdWJsaWMgdmVydGljZXM6IG51bWJlcltdO1xuICAgIHB1YmxpYyB2ZXJ0ZXhOb3JtYWxzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgdGV4dHVyZXM6IG51bWJlcltdO1xuICAgIHB1YmxpYyBpbmRpY2VzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgdmVydGV4TWF0ZXJpYWxJbmRpY2VzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgaW5kaWNlc1Blck1hdGVyaWFsOiBudW1iZXJbXVtdID0gW107XG4gICAgcHVibGljIG1hdGVyaWFsTmFtZXM6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBtYXRlcmlhbEluZGljZXM6IE1hdGVyaWFsTmFtZVRvSW5kZXg7XG4gICAgcHVibGljIG1hdGVyaWFsc0J5SW5kZXg6IEluZGV4VG9NYXRlcmlhbCA9IHt9O1xuICAgIHB1YmxpYyB0YW5nZW50czogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgYml0YW5nZW50czogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgdGV4dHVyZVN0cmlkZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgTWVzaFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmplY3REYXRhIC0gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gT0JKIGZpbGUgd2l0aFxuICAgICAqICAgICBuZXdsaW5lcyBwcmVzZXJ2ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhIEpTIG9iamVjdCBjb250YWluaW5nIHZhbGlkIG9wdGlvbnMuIFNlZSBjbGFzc1xuICAgICAqICAgICBkb2N1bWVudGF0aW9uIGZvciBvcHRpb25zLlxuICAgICAqIEBwYXJhbSB7Ym9vbH0gb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkIC0gVGV4dHVyZSBjb29yZGluYXRlcyBjYW4gaGF2ZVxuICAgICAqICAgICBhbiBvcHRpb25hbCBcIndcIiBjb29yZGluYXRlIGFmdGVyIHRoZSB1IGFuZCB2IGNvb3JkaW5hdGVzLiBUaGlzIGV4dHJhXG4gICAgICogICAgIHZhbHVlIGNhbiBiZSB1c2VkIGluIG9yZGVyIHRvIHBlcmZvcm0gZmFuY3kgdHJhbnNmb3JtYXRpb25zIG9uIHRoZVxuICAgICAqICAgICB0ZXh0dXJlcyB0aGVtc2VsdmVzLiBEZWZhdWx0IGlzIHRvIHRydW5jYXRlIHRvIG9ubHkgdGhlIHUgYW4gdlxuICAgICAqICAgICBjb29yZGluYXRlcy4gUGFzc2luZyB0cnVlIHdpbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMCBpbiB0aGVcbiAgICAgKiAgICAgZXZlbnQgdGhhdCBhbnkgb3IgYWxsIHRleHR1cmUgY29vcmRpbmF0ZXMgZG9uJ3QgcHJvdmlkZSBhIHcgdmFsdWUuXG4gICAgICogICAgIEFsd2F5cyB1c2UgdGhlIHRleHR1cmVTdHJpZGUgYXR0cmlidXRlIGluIG9yZGVyIHRvIGRldGVybWluZSB0aGVcbiAgICAgKiAgICAgc3RyaWRlIGxlbmd0aCBvZiB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudFxuICAgICAqICAgICBhcnJheS5cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IG9wdGlvbnMuY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50cyAtIENhbGN1bGF0ZSB0aGUgdGFuZ2VudHNcbiAgICAgKiAgICAgYW5kIGJpdGFuZ2VudHMgd2hlbiBsb2FkaW5nIG9mIHRoZSBPQkogaXMgY29tcGxldGVkLiBUaGlzIGFkZHMgdHdvIG5ld1xuICAgICAqICAgICBhdHRyaWJ1dGVzIHRvIHRoZSBNZXNoIGluc3RhbmNlOiBgdGFuZ2VudHNgIGFuZCBgYml0YW5nZW50c2AuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob2JqZWN0RGF0YTogc3RyaW5nLCBvcHRpb25zPzogTWVzaE9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIG9wdGlvbnMubWF0ZXJpYWxzID0gb3B0aW9ucy5tYXRlcmlhbHMgfHwge307XG4gICAgICAgIG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCA9ICEhb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkO1xuXG4gICAgICAgIC8vIHRoZSBsaXN0IG9mIHVuaXF1ZSB2ZXJ0ZXgsIG5vcm1hbCwgdGV4dHVyZSwgYXR0cmlidXRlc1xuICAgICAgICB0aGlzLnZlcnRleE5vcm1hbHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuICAgICAgICAvLyB0aGUgaW5kaWNpZXMgdG8gZHJhdyB0aGUgZmFjZXNcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XG4gICAgICAgIHRoaXMudGV4dHVyZVN0cmlkZSA9IG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCA/IDMgOiAyO1xuXG4gICAgICAgIC8qXG4gICAgICAgIFRoZSBPQkogZmlsZSBmb3JtYXQgZG9lcyBhIHNvcnQgb2YgY29tcHJlc3Npb24gd2hlbiBzYXZpbmcgYSBtb2RlbCBpbiBhXG4gICAgICAgIHByb2dyYW0gbGlrZSBCbGVuZGVyLiBUaGVyZSBhcmUgYXQgbGVhc3QgMyBzZWN0aW9ucyAoNCBpbmNsdWRpbmcgdGV4dHVyZXMpXG4gICAgICAgIHdpdGhpbiB0aGUgZmlsZS4gRWFjaCBsaW5lIGluIGEgc2VjdGlvbiBiZWdpbnMgd2l0aCB0aGUgc2FtZSBzdHJpbmc6XG4gICAgICAgICAgKiAndic6IGluZGljYXRlcyB2ZXJ0ZXggc2VjdGlvblxuICAgICAgICAgICogJ3ZuJzogaW5kaWNhdGVzIHZlcnRleCBub3JtYWwgc2VjdGlvblxuICAgICAgICAgICogJ2YnOiBpbmRpY2F0ZXMgdGhlIGZhY2VzIHNlY3Rpb25cbiAgICAgICAgICAqICd2dCc6IGluZGljYXRlcyB2ZXJ0ZXggdGV4dHVyZSBzZWN0aW9uIChpZiB0ZXh0dXJlcyB3ZXJlIHVzZWQgb24gdGhlIG1vZGVsKVxuICAgICAgICBFYWNoIG9mIHRoZSBhYm92ZSBzZWN0aW9ucyAoZXhjZXB0IGZvciB0aGUgZmFjZXMgc2VjdGlvbikgaXMgYSBsaXN0L3NldCBvZlxuICAgICAgICB1bmlxdWUgdmVydGljZXMuXG5cbiAgICAgICAgRWFjaCBsaW5lIG9mIHRoZSBmYWNlcyBzZWN0aW9uIGNvbnRhaW5zIGEgbGlzdCBvZlxuICAgICAgICAodmVydGV4LCBbdGV4dHVyZV0sIG5vcm1hbCkgZ3JvdXBzLlxuXG4gICAgICAgICoqTm90ZToqKiBUaGUgZm9sbG93aW5nIGRvY3VtZW50YXRpb24gd2lsbCB1c2UgYSBjYXBpdGFsIFwiVlwiIFZlcnRleCB0b1xuICAgICAgICBkZW5vdGUgdGhlIGFib3ZlICh2ZXJ0ZXgsIFt0ZXh0dXJlXSwgbm9ybWFsKSBncm91cHMgd2hlcmVhcyBhIGxvd2VyY2FzZVxuICAgICAgICBcInZcIiB2ZXJ0ZXggaXMgdXNlZCB0byBkZW5vdGUgYW4gWCwgWSwgWiBjb29yZGluYXRlLlxuXG4gICAgICAgIFNvbWUgZXhhbXBsZXM6XG4gICAgICAgICAgICAvLyB0aGUgdGV4dHVyZSBpbmRleCBpcyBvcHRpb25hbCwgYm90aCBmb3JtYXRzIGFyZSBwb3NzaWJsZSBmb3IgbW9kZWxzXG4gICAgICAgICAgICAvLyB3aXRob3V0IGEgdGV4dHVyZSBhcHBsaWVkXG4gICAgICAgICAgICBmIDEvMjUgMTgvNDYgMTIvMzFcbiAgICAgICAgICAgIGYgMS8vMjUgMTgvLzQ2IDEyLy8zMVxuXG4gICAgICAgICAgICAvLyBBIDMgdmVydGV4IGZhY2Ugd2l0aCB0ZXh0dXJlIGluZGljZXNcbiAgICAgICAgICAgIGYgMTYvOTIvMTEgMTQvMTAxLzIyIDEvNjkvMVxuXG4gICAgICAgICAgICAvLyBBIDQgdmVydGV4IGZhY2VcbiAgICAgICAgICAgIGYgMTYvOTIvMTEgNDAvMTA5LzQwIDM4LzExNC8zOCAxNC8xMDEvMjJcblxuICAgICAgICBUaGUgZmlyc3QgdHdvIGxpbmVzIGFyZSBleGFtcGxlcyBvZiBhIDMgdmVydGV4IGZhY2Ugd2l0aG91dCBhIHRleHR1cmUgYXBwbGllZC5cbiAgICAgICAgVGhlIHNlY29uZCBpcyBhbiBleGFtcGxlIG9mIGEgMyB2ZXJ0ZXggZmFjZSB3aXRoIGEgdGV4dHVyZSBhcHBsaWVkLlxuICAgICAgICBUaGUgdGhpcmQgaXMgYW4gZXhhbXBsZSBvZiBhIDQgdmVydGV4IGZhY2UuIE5vdGU6IGEgZmFjZSBjYW4gY29udGFpbiBOXG4gICAgICAgIG51bWJlciBvZiB2ZXJ0aWNlcy5cblxuICAgICAgICBFYWNoIG51bWJlciB0aGF0IGFwcGVhcnMgaW4gb25lIG9mIHRoZSBncm91cHMgaXMgYSAxLWJhc2VkIGluZGV4XG4gICAgICAgIGNvcnJlc3BvbmRpbmcgdG8gYW4gaXRlbSBmcm9tIHRoZSBvdGhlciBzZWN0aW9ucyAobWVhbmluZyB0aGF0IGluZGV4aW5nXG4gICAgICAgIHN0YXJ0cyBhdCBvbmUgYW5kICpub3QqIHplcm8pLlxuXG4gICAgICAgIEZvciBleGFtcGxlOlxuICAgICAgICAgICAgYGYgMTYvOTIvMTFgIGlzIHNheWluZyB0b1xuICAgICAgICAgICAgICAtIHRha2UgdGhlIDE2dGggZWxlbWVudCBmcm9tIHRoZSBbdl0gdmVydGV4IGFycmF5XG4gICAgICAgICAgICAgIC0gdGFrZSB0aGUgOTJuZCBlbGVtZW50IGZyb20gdGhlIFt2dF0gdGV4dHVyZSBhcnJheVxuICAgICAgICAgICAgICAtIHRha2UgdGhlIDExdGggZWxlbWVudCBmcm9tIHRoZSBbdm5dIG5vcm1hbCBhcnJheVxuICAgICAgICAgICAgYW5kIHRvZ2V0aGVyIHRoZXkgbWFrZSBhIHVuaXF1ZSB2ZXJ0ZXguXG4gICAgICAgIFVzaW5nIGFsbCAzKyB1bmlxdWUgVmVydGljZXMgZnJvbSB0aGUgZmFjZSBsaW5lIHdpbGwgcHJvZHVjZSBhIHBvbHlnb24uXG5cbiAgICAgICAgTm93LCB5b3UgY291bGQganVzdCBnbyB0aHJvdWdoIHRoZSBPQkogZmlsZSBhbmQgY3JlYXRlIGEgbmV3IHZlcnRleCBmb3JcbiAgICAgICAgZWFjaCBmYWNlIGxpbmUgYW5kIFdlYkdMIHdpbGwgZHJhdyB3aGF0IGFwcGVhcnMgdG8gYmUgdGhlIHNhbWUgbW9kZWwuXG4gICAgICAgIEhvd2V2ZXIsIHZlcnRpY2VzIHdpbGwgYmUgb3ZlcmxhcHBlZCBhbmQgZHVwbGljYXRlZCBhbGwgb3ZlciB0aGUgcGxhY2UuXG5cbiAgICAgICAgQ29uc2lkZXIgYSBjdWJlIGluIDNEIHNwYWNlIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4gYW5kIGVhY2ggc2lkZSBpc1xuICAgICAgICAyIHVuaXRzIGxvbmcuIFRoZSBmcm9udCBmYWNlICh3aXRoIHRoZSBwb3NpdGl2ZSBaLWF4aXMgcG9pbnRpbmcgdG93YXJkc1xuICAgICAgICB5b3UpIHdvdWxkIGhhdmUgYSBUb3AgUmlnaHQgdmVydGV4IChsb29raW5nIG9ydGhvZ29uYWwgdG8gaXRzIG5vcm1hbClcbiAgICAgICAgbWFwcGVkIGF0ICgxLDEsMSkgVGhlIHJpZ2h0IGZhY2Ugd291bGQgaGF2ZSBhIFRvcCBMZWZ0IHZlcnRleCAobG9va2luZ1xuICAgICAgICBvcnRob2dvbmFsIHRvIGl0cyBub3JtYWwpIGF0ICgxLDEsMSkgYW5kIHRoZSB0b3AgZmFjZSB3b3VsZCBoYXZlIGEgQm90dG9tXG4gICAgICAgIFJpZ2h0IHZlcnRleCAobG9va2luZyBvcnRob2dvbmFsIHRvIGl0cyBub3JtYWwpIGF0ICgxLDEsMSkuIEVhY2ggZmFjZVxuICAgICAgICBoYXMgYSB2ZXJ0ZXggYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXMsIGhvd2V2ZXIsIHRocmVlIGRpc3RpbmN0IHZlcnRpY2VzXG4gICAgICAgIHdpbGwgYmUgZHJhd24gYXQgdGhlIHNhbWUgc3BvdC5cblxuICAgICAgICBUbyBzb2x2ZSB0aGUgaXNzdWUgb2YgZHVwbGljYXRlIFZlcnRpY2VzICh0aGUgYCh2ZXJ0ZXgsIFt0ZXh0dXJlXSwgbm9ybWFsKWBcbiAgICAgICAgZ3JvdXBzKSwgd2hpbGUgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGZhY2UgbGluZXMsIHdoZW4gYSBncm91cCBpcyBlbmNvdW50ZXJlZFxuICAgICAgICB0aGUgd2hvbGUgZ3JvdXAgc3RyaW5nICgnMTYvOTIvMTEnKSBpcyBjaGVja2VkIHRvIHNlZSBpZiBpdCBleGlzdHMgaW4gdGhlXG4gICAgICAgIHBhY2tlZC5oYXNoaW5kaWNlcyBvYmplY3QsIGFuZCBpZiBpdCBkb2Vzbid0LCB0aGUgaW5kaWNlcyBpdCBzcGVjaWZpZXNcbiAgICAgICAgYXJlIHVzZWQgdG8gbG9vayB1cCBlYWNoIGF0dHJpYnV0ZSBpbiB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgYXJyYXlzXG4gICAgICAgIGFscmVhZHkgY3JlYXRlZC4gVGhlIHZhbHVlcyBhcmUgdGhlbiBjb3BpZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdW5wYWNrZWRcbiAgICAgICAgYXJyYXkgKGZsYXR0ZW5lZCB0byBwbGF5IG5pY2Ugd2l0aCBXZWJHTCdzIEVMRU1FTlRfQVJSQVlfQlVGRkVSIGluZGV4aW5nKSxcbiAgICAgICAgdGhlIGdyb3VwIHN0cmluZyBpcyBhZGRlZCB0byB0aGUgaGFzaGluZGljZXMgc2V0IGFuZCB0aGUgY3VycmVudCB1bnBhY2tlZFxuICAgICAgICBpbmRleCBpcyB1c2VkIGFzIHRoaXMgaGFzaGluZGljZXMgdmFsdWUgc28gdGhhdCB0aGUgZ3JvdXAgb2YgZWxlbWVudHMgY2FuXG4gICAgICAgIGJlIHJldXNlZC4gVGhlIHVucGFja2VkIGluZGV4IGlzIGluY3JlbWVudGVkLiBJZiB0aGUgZ3JvdXAgc3RyaW5nIGFscmVhZHlcbiAgICAgICAgZXhpc3RzIGluIHRoZSBoYXNoaW5kaWNlcyBvYmplY3QsIGl0cyBjb3JyZXNwb25kaW5nIHZhbHVlIGlzIHRoZSBpbmRleCBvZlxuICAgICAgICB0aGF0IGdyb3VwIGFuZCBpcyBhcHBlbmRlZCB0byB0aGUgdW5wYWNrZWQgaW5kaWNlcyBhcnJheS5cbiAgICAgICAqL1xuICAgICAgICBjb25zdCB2ZXJ0cyA9IFtdO1xuICAgICAgICBjb25zdCB2ZXJ0Tm9ybWFscyA9IFtdO1xuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IFtdO1xuICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWVzQnlJbmRleCA9IFtdO1xuICAgICAgICBjb25zdCBtYXRlcmlhbEluZGljZXNCeU5hbWU6IE1hdGVyaWFsTmFtZVRvSW5kZXggPSB7fTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB3aGF0IG1hdGVyaWFsIHdlJ3ZlIHNlZW4gbGFzdFxuICAgICAgICBsZXQgY3VycmVudE1hdGVyaWFsSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGN1cnJlbnRPYmplY3RCeU1hdGVyaWFsSW5kZXggPSAwO1xuICAgICAgICAvLyB1bnBhY2tpbmcgc3R1ZmZcbiAgICAgICAgY29uc3QgdW5wYWNrZWQ6IFVucGFja2VkQXR0cnMgPSB7XG4gICAgICAgICAgICB2ZXJ0czogW10sXG4gICAgICAgICAgICBub3JtczogW10sXG4gICAgICAgICAgICB0ZXh0dXJlczogW10sXG4gICAgICAgICAgICBoYXNoaW5kaWNlczoge30sXG4gICAgICAgICAgICBpbmRpY2VzOiBbW11dLFxuICAgICAgICAgICAgbWF0ZXJpYWxJbmRpY2VzOiBbXSxcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFZFUlRFWF9SRSA9IC9edlxccy87XG4gICAgICAgIGNvbnN0IE5PUk1BTF9SRSA9IC9edm5cXHMvO1xuICAgICAgICBjb25zdCBURVhUVVJFX1JFID0gL152dFxccy87XG4gICAgICAgIGNvbnN0IEZBQ0VfUkUgPSAvXmZcXHMvO1xuICAgICAgICBjb25zdCBXSElURVNQQUNFX1JFID0gL1xccysvO1xuICAgICAgICBjb25zdCBVU0VfTUFURVJJQUxfUkUgPSAvXnVzZW10bC87XG5cbiAgICAgICAgLy8gYXJyYXkgb2YgbGluZXMgc2VwYXJhdGVkIGJ5IHRoZSBuZXdsaW5lXG4gICAgICAgIGNvbnN0IGxpbmVzID0gb2JqZWN0RGF0YS5zcGxpdChcIlxcblwiKTtcblxuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUgfHwgbGluZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBsaW5lLnNwbGl0KFdISVRFU1BBQ0VfUkUpO1xuICAgICAgICAgICAgZWxlbWVudHMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKFZFUlRFWF9SRS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHZlcnRleFxuICAgICAgICAgICAgICAgIHZlcnRzLnB1c2goLi4uZWxlbWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChOT1JNQUxfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSB2ZXJ0ZXggbm9ybWFsXG4gICAgICAgICAgICAgICAgdmVydE5vcm1hbHMucHVzaCguLi5lbGVtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRFWFRVUkVfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBlbGVtZW50cztcbiAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0LCB0aGUgbG9hZGVyIHdpbGwgb25seSBsb29rIGF0IHRoZSBVIGFuZCBWXG4gICAgICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgb2YgdGhlIHZ0IGRlY2xhcmF0aW9uLiBTbywgdGhpcyB0cnVuY2F0ZXMgdGhlXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudHMgdG8gb25seSB0aG9zZSAyIHZhbHVlcy4gSWYgVyB0ZXh0dXJlIGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAvLyBzdXBwb3J0IGlzIGVuYWJsZWQsIHRoZW4gdGhlIHRleHR1cmUgY29vcmRpbmF0ZSBpc1xuICAgICAgICAgICAgICAgIC8vIGV4cGVjdGVkIHRvIGhhdmUgdGhyZWUgdmFsdWVzIGluIGl0LlxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAyICYmICFvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gZWxlbWVudHMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDIgJiYgb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGZvciBzb21lIHJlYXNvbiBXIHRleHR1cmUgY29vcmRpbmF0ZSBzdXBwb3J0IGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG9ubHkgdGhlIFUgYW5kIFYgY29vcmRpbmF0ZXMgYXJlIGdpdmVuLCB0aGVuIHdlIHN1cHBseVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiAwIHNvIHRoYXQgdGhlIHN0cmlkZSBsZW5ndGggaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB0ZXh0dXJlcyBhcmUgdW5wYWNrZWQgYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKFwiMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dHVyZXMucHVzaCguLi5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVU0VfTUFURVJJQUxfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IGVsZW1lbnRzWzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHdlJ3ZlIGV2ZXIgc2VlbiBpdCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoIShtYXRlcmlhbE5hbWUgaW4gbWF0ZXJpYWxJbmRpY2VzQnlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgbWF0ZXJpYWwgd2UndmUgbmV2ZXIgc2VlblxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWVzQnlJbmRleC5wdXNoKG1hdGVyaWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kaWNlc0J5TmFtZVttYXRlcmlhbE5hbWVdID0gbWF0ZXJpYWxOYW1lc0J5SW5kZXgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHVzaCBuZXcgYXJyYXkgaW50byBpbmRpY2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgY29udGFpbnMgYW4gYXJyYXkgYXQgaW5kZXggemVybywgZG9uJ3QgYWRkXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbEluZGljZXNCeU5hbWVbbWF0ZXJpYWxOYW1lXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLmluZGljZXMucHVzaChbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBtYXRlcmlhbCBpbmRleFxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXRlcmlhbEluZGV4ID0gbWF0ZXJpYWxJbmRpY2VzQnlOYW1lW21hdGVyaWFsTmFtZV07XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGN1cnJlbnQgaW5kZXggYXJyYXlcbiAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0QnlNYXRlcmlhbEluZGV4ID0gY3VycmVudE1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEZBQ0VfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBmYWNlXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBzcGxpdCB0aGlzIGZhY2UgaW50byBhbiBhcnJheSBvZiBWZXJ0ZXggZ3JvdXBzXG4gICAgICAgICAgICAgICAgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgICAgICAgZiAxNi85Mi8xMSAxNC8xMDEvMjIgMS82OS8xXG4gICAgICAgICAgICAgICAgYmVjb21lczpcbiAgICAgICAgICAgICAgICAgIFsnMTYvOTIvMTEnLCAnMTQvMTAxLzIyJywgJzEvNjkvMSddO1xuICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmlhbmdsZXMgPSB0cmlhbmd1bGF0ZShlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0cmlhbmdsZSBvZiB0cmlhbmdsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGVsZUxlbiA9IHRyaWFuZ2xlLmxlbmd0aDsgaiA8IGVsZUxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gdHJpYW5nbGVbal0gKyBcIixcIiArIGN1cnJlbnRNYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2ggaW4gdW5wYWNrZWQuaGFzaGluZGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5pbmRpY2VzW2N1cnJlbnRPYmplY3RCeU1hdGVyaWFsSW5kZXhdLnB1c2godW5wYWNrZWQuaGFzaGluZGljZXNbaGFzaF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBlbGVtZW50IG9mIHRoZSBmYWNlIGxpbmUgYXJyYXkgaXMgYSBWZXJ0ZXggd2hpY2ggaGFzIGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyBkZWxpbWl0ZWQgYnkgYSBmb3J3YXJkIHNsYXNoLiBUaGlzIHdpbGwgc2VwYXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhY2ggYXR0cmlidXRlIGludG8gYW5vdGhlciBhcnJheTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMTkvOTIvMTEnXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWNvbWVzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnRleCA9IFsnMTknLCAnOTInLCAnMTEnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVydGV4WzBdIGlzIHRoZSB2ZXJ0ZXggaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhbMV0gaXMgdGhlIHRleHR1cmUgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhbMl0gaXMgdGhlIG5vcm1hbCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGZhY2VzIGhhdmluZyBWZXJ0aWNlcyB3aGljaCBhcmUgY29tcHJpc2VkIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgbG9jYXRpb24gKHYpLCB0ZXh0dXJlICh2dCksIGFuZCBub3JtYWwgKHZuKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IGVsZW1lbnRzW2pdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIGZvciBmYWNlcyB0byBvbmx5IHNwZWNpZnkgdGhlIHZlcnRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgbm9ybWFsLiBJbiB0aGlzIGNhc2UsIHZlcnRleCB3aWxsIG9ubHkgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgbGVuZ3RoIG9mIDIgYW5kIG5vdCAzIGFuZCB0aGUgbm9ybWFsIHdpbGwgYmUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kIGl0ZW0gaW4gdGhlIGxpc3Qgd2l0aCBhbiBpbmRleCBvZiAxLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbEluZGV4ID0gdmVydGV4Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdmVydHMsIHRleHR1cmVzLCBhbmQgdmVydE5vcm1hbHMgYXJyYXlzIGVhY2ggY29udGFpbiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmQgYXJyYXkgb2YgY29vcmRpbmF0ZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIGl0IGdldHMgY29uZnVzaW5nIGJ5IHJlZmVycmluZyB0byBWZXJ0ZXggYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggKGJvdGggYXJlIGRpZmZlcmVudCBpbiBteSBkZXNjcmlwdGlvbnMpIEkgd2lsbCBleHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2hhdCdzIGdvaW5nIG9uIHVzaW5nIHRoZSB2ZXJ0ZXhOb3JtYWxzIGFycmF5OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4WzJdIHdpbGwgY29udGFpbiB0aGUgb25lLWJhc2VkIGluZGV4IG9mIHRoZSB2ZXJ0ZXhOb3JtYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiAodm4pLiBPbmUgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgaW5kZXggbnVtYmVyIHRvIHBsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICBuaWNlIHdpdGggamF2YXNjcmlwdCdzIHplcm8tYmFzZWQgYXJyYXkgaW5kZXhpbmcuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIHZlcnRleE5vcm1hbCBpcyBhIGZsYXR0ZW5lZCBhcnJheSBvZiB4LCB5LCB6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGUgcG9pbnRlciBhcml0aG1ldGljIGlzIHVzZWQgdG8gc2tpcCB0byB0aGUgc3RhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsLCB0aGVuIHRoZSBvZmZzZXQgaXMgYWRkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiArMCBpcyB4LCArMSBpcyB5LCArMiBpcyB6LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYW1lIHByb2Nlc3MgaXMgcmVwZWF0ZWQgZm9yIHZlcnRzIGFuZCB0ZXh0dXJlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRleCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnZlcnRzLnB1c2goK3ZlcnRzWygrdmVydGV4WzBdIC0gMSkgKiAzICsgMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnZlcnRzLnB1c2goK3ZlcnRzWygrdmVydGV4WzBdIC0gMSkgKiAzICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnZlcnRzLnB1c2goK3ZlcnRzWygrdmVydGV4WzBdIC0gMSkgKiAzICsgMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRleCB0ZXh0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkID8gMyA6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnRleHR1cmVzLnB1c2goK3RleHR1cmVzWygrdmVydGV4WzFdIC0gMSkgKiBzdHJpZGUgKyAwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnRleHR1cmVzLnB1c2goK3RleHR1cmVzWygrdmVydGV4WzFdIC0gMSkgKiBzdHJpZGUgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnRleHR1cmVzLnB1c2goK3RleHR1cmVzWygrdmVydGV4WzFdIC0gMSkgKiBzdHJpZGUgKyAyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVydGV4IG5vcm1hbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1soK3ZlcnRleFtub3JtYWxJbmRleF0gLSAxKSAqIDMgKyAwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQubm9ybXMucHVzaCgrdmVydE5vcm1hbHNbKCt2ZXJ0ZXhbbm9ybWFsSW5kZXhdIC0gMSkgKiAzICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLm5vcm1zLnB1c2goK3ZlcnROb3JtYWxzWygrdmVydGV4W25vcm1hbEluZGV4XSAtIDEpICogMyArIDJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggbWF0ZXJpYWwgaW5kaWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLm1hdGVyaWFsSW5kaWNlcy5wdXNoKGN1cnJlbnRNYXRlcmlhbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIG5ld2x5IGNyZWF0ZWQgVmVydGV4IHRvIHRoZSBsaXN0IG9mIGluZGljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5oYXNoaW5kaWNlc1toYXNoXSA9IHVucGFja2VkLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLmluZGljZXNbY3VycmVudE9iamVjdEJ5TWF0ZXJpYWxJbmRleF0ucHVzaCh1bnBhY2tlZC5oYXNoaW5kaWNlc1toYXNoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQuaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gdW5wYWNrZWQudmVydHM7XG4gICAgICAgIHRoaXMudmVydGV4Tm9ybWFscyA9IHVucGFja2VkLm5vcm1zO1xuICAgICAgICB0aGlzLnRleHR1cmVzID0gdW5wYWNrZWQudGV4dHVyZXM7XG4gICAgICAgIHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzID0gdW5wYWNrZWQubWF0ZXJpYWxJbmRpY2VzO1xuICAgICAgICB0aGlzLmluZGljZXMgPSB1bnBhY2tlZC5pbmRpY2VzW2N1cnJlbnRPYmplY3RCeU1hdGVyaWFsSW5kZXhdO1xuICAgICAgICB0aGlzLmluZGljZXNQZXJNYXRlcmlhbCA9IHVucGFja2VkLmluZGljZXM7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzID0gbWF0ZXJpYWxOYW1lc0J5SW5kZXg7XG4gICAgICAgIHRoaXMubWF0ZXJpYWxJbmRpY2VzID0gbWF0ZXJpYWxJbmRpY2VzQnlOYW1lO1xuICAgICAgICB0aGlzLm1hdGVyaWFsc0J5SW5kZXggPSB7fTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxjVGFuZ2VudHNBbmRCaXRhbmdlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRhbmdlbnRzQW5kQml0YW5nZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgdGFuZ2VudHMgYW5kIGJpdGFuZ2VudHMgb2YgdGhlIG1lc2ggdGhhdCBmb3JtcyBhbiBvcnRob2dvbmFsIGJhc2lzIHRvZ2V0aGVyIHdpdGggdGhlXG4gICAgICogbm9ybWFsIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHRleHR1cmUgY29vcmRpbmF0ZXMuIFRoZXNlIGFyZSB1c2VmdWwgZm9yIHNldHRpbmcgdXAgdGhlIFRCTiBtYXRyaXhcbiAgICAgKiB3aGVuIGRpc3RvcnRpbmcgdGhlIG5vcm1hbHMgdGhyb3VnaCBub3JtYWwgbWFwcy5cbiAgICAgKiBNZXRob2QgZGVyaXZlZCBmcm9tOiBodHRwOi8vd3d3Lm9wZW5nbC10dXRvcmlhbC5vcmcvaW50ZXJtZWRpYXRlLXR1dG9yaWFscy90dXRvcmlhbC0xMy1ub3JtYWwtbWFwcGluZy9cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHJlcXVpcmVzIHRoZSBub3JtYWxzIGFuZCB0ZXh0dXJlIGNvb3JkaW5hdGVzIHRvIGJlIHBhcnNlZCBhbmQgc2V0IHVwIGNvcnJlY3RseS5cbiAgICAgKiBBZGRzIHRoZSB0YW5nZW50cyBhbmQgYml0YW5nZW50cyBhcyBtZW1iZXJzIG9mIHRoZSBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVUYW5nZW50c0FuZEJpdGFuZ2VudHMoKSB7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KFxuICAgICAgICAgICAgISEoXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcyAmJlxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhOb3JtYWxzICYmXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhOb3JtYWxzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFwiTWlzc2luZyBhdHRyaWJ1dGVzIGZvciBjYWxjdWxhdGluZyB0YW5nZW50cyBhbmQgYml0YW5nZW50c1wiLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHVucGFja2VkID0ge1xuICAgICAgICAgICAgdGFuZ2VudHM6IFsuLi5uZXcgQXJyYXkodGhpcy52ZXJ0aWNlcy5sZW5ndGgpXS5tYXAoXyA9PiAwKSxcbiAgICAgICAgICAgIGJpdGFuZ2VudHM6IFsuLi5uZXcgQXJyYXkodGhpcy52ZXJ0aWNlcy5sZW5ndGgpXS5tYXAoXyA9PiAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGZhY2VzIGluIHRoZSB3aG9sZSBtZXNoXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSB0aGlzLmluZGljZXM7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgY29uc3Qgbm9ybWFscyA9IHRoaXMudmVydGV4Tm9ybWFscztcbiAgICAgICAgY29uc3QgdXZzID0gdGhpcy50ZXh0dXJlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IGkwID0gaW5kaWNlc1tpICsgMF07XG4gICAgICAgICAgICBjb25zdCBpMSA9IGluZGljZXNbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgaTIgPSBpbmRpY2VzW2kgKyAyXTtcblxuICAgICAgICAgICAgY29uc3QgeF92MCA9IHZlcnRpY2VzW2kwICogMyArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV92MCA9IHZlcnRpY2VzW2kwICogMyArIDFdO1xuICAgICAgICAgICAgY29uc3Qgel92MCA9IHZlcnRpY2VzW2kwICogMyArIDJdO1xuXG4gICAgICAgICAgICBjb25zdCB4X3V2MCA9IHV2c1tpMCAqIDIgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfdXYwID0gdXZzW2kwICogMiArIDFdO1xuXG4gICAgICAgICAgICBjb25zdCB4X3YxID0gdmVydGljZXNbaTEgKiAzICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X3YxID0gdmVydGljZXNbaTEgKiAzICsgMV07XG4gICAgICAgICAgICBjb25zdCB6X3YxID0gdmVydGljZXNbaTEgKiAzICsgMl07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdXYxID0gdXZzW2kxICogMiArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV91djEgPSB1dnNbaTEgKiAyICsgMV07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdjIgPSB2ZXJ0aWNlc1tpMiAqIDMgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfdjIgPSB2ZXJ0aWNlc1tpMiAqIDMgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHpfdjIgPSB2ZXJ0aWNlc1tpMiAqIDMgKyAyXTtcblxuICAgICAgICAgICAgY29uc3QgeF91djIgPSB1dnNbaTIgKiAyICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X3V2MiA9IHV2c1tpMiAqIDIgKyAxXTtcblxuICAgICAgICAgICAgY29uc3QgeF9kZWx0YVBvczEgPSB4X3YxIC0geF92MDtcbiAgICAgICAgICAgIGNvbnN0IHlfZGVsdGFQb3MxID0geV92MSAtIHlfdjA7XG4gICAgICAgICAgICBjb25zdCB6X2RlbHRhUG9zMSA9IHpfdjEgLSB6X3YwO1xuXG4gICAgICAgICAgICBjb25zdCB4X2RlbHRhUG9zMiA9IHhfdjIgLSB4X3YwO1xuICAgICAgICAgICAgY29uc3QgeV9kZWx0YVBvczIgPSB5X3YyIC0geV92MDtcbiAgICAgICAgICAgIGNvbnN0IHpfZGVsdGFQb3MyID0gel92MiAtIHpfdjA7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdXZEZWx0YVBvczEgPSB4X3V2MSAtIHhfdXYwO1xuICAgICAgICAgICAgY29uc3QgeV91dkRlbHRhUG9zMSA9IHlfdXYxIC0geV91djA7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdXZEZWx0YVBvczIgPSB4X3V2MiAtIHhfdXYwO1xuICAgICAgICAgICAgY29uc3QgeV91dkRlbHRhUG9zMiA9IHlfdXYyIC0geV91djA7XG5cbiAgICAgICAgICAgIGNvbnN0IHJJbnYgPSB4X3V2RGVsdGFQb3MxICogeV91dkRlbHRhUG9zMiAtIHlfdXZEZWx0YVBvczEgKiB4X3V2RGVsdGFQb3MyO1xuICAgICAgICAgICAgY29uc3QgciA9IDEuMCAvIE1hdGguYWJzKHJJbnYgPCAwLjAwMDEgPyAxLjAgOiBySW52KTtcblxuICAgICAgICAgICAgLy8gVGFuZ2VudFxuICAgICAgICAgICAgY29uc3QgeF90YW5nZW50ID0gKHhfZGVsdGFQb3MxICogeV91dkRlbHRhUG9zMiAtIHhfZGVsdGFQb3MyICogeV91dkRlbHRhUG9zMSkgKiByO1xuICAgICAgICAgICAgY29uc3QgeV90YW5nZW50ID0gKHlfZGVsdGFQb3MxICogeV91dkRlbHRhUG9zMiAtIHlfZGVsdGFQb3MyICogeV91dkRlbHRhUG9zMSkgKiByO1xuICAgICAgICAgICAgY29uc3Qgel90YW5nZW50ID0gKHpfZGVsdGFQb3MxICogeV91dkRlbHRhUG9zMiAtIHpfZGVsdGFQb3MyICogeV91dkRlbHRhUG9zMSkgKiByO1xuXG4gICAgICAgICAgICAvLyBCaXRhbmdlbnRcbiAgICAgICAgICAgIGNvbnN0IHhfYml0YW5nZW50ID0gKHhfZGVsdGFQb3MyICogeF91dkRlbHRhUG9zMSAtIHhfZGVsdGFQb3MxICogeF91dkRlbHRhUG9zMikgKiByO1xuICAgICAgICAgICAgY29uc3QgeV9iaXRhbmdlbnQgPSAoeV9kZWx0YVBvczIgKiB4X3V2RGVsdGFQb3MxIC0geV9kZWx0YVBvczEgKiB4X3V2RGVsdGFQb3MyKSAqIHI7XG4gICAgICAgICAgICBjb25zdCB6X2JpdGFuZ2VudCA9ICh6X2RlbHRhUG9zMiAqIHhfdXZEZWx0YVBvczEgLSB6X2RlbHRhUG9zMSAqIHhfdXZEZWx0YVBvczIpICogcjtcblxuICAgICAgICAgICAgLy8gR3JhbS1TY2htaWR0IG9ydGhvZ29uYWxpemVcbiAgICAgICAgICAgIC8vdCA9IGdsbTo6bm9ybWFsaXplKHQgLSBuICogZ2xtOjogZG90KG4sIHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHhfbjAgPSBub3JtYWxzW2kwICogMyArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV9uMCA9IG5vcm1hbHNbaTAgKiAzICsgMV07XG4gICAgICAgICAgICBjb25zdCB6X24wID0gbm9ybWFsc1tpMCAqIDMgKyAyXTtcblxuICAgICAgICAgICAgY29uc3QgeF9uMSA9IG5vcm1hbHNbaTEgKiAzICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X24xID0gbm9ybWFsc1tpMSAqIDMgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHpfbjEgPSBub3JtYWxzW2kxICogMyArIDJdO1xuXG4gICAgICAgICAgICBjb25zdCB4X24yID0gbm9ybWFsc1tpMiAqIDMgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfbjIgPSBub3JtYWxzW2kyICogMyArIDFdO1xuICAgICAgICAgICAgY29uc3Qgel9uMiA9IG5vcm1hbHNbaTIgKiAzICsgMl07XG5cbiAgICAgICAgICAgIC8vIFRhbmdlbnRcbiAgICAgICAgICAgIGNvbnN0IG4wX2RvdF90ID0geF90YW5nZW50ICogeF9uMCArIHlfdGFuZ2VudCAqIHlfbjAgKyB6X3RhbmdlbnQgKiB6X24wO1xuICAgICAgICAgICAgY29uc3QgbjFfZG90X3QgPSB4X3RhbmdlbnQgKiB4X24xICsgeV90YW5nZW50ICogeV9uMSArIHpfdGFuZ2VudCAqIHpfbjE7XG4gICAgICAgICAgICBjb25zdCBuMl9kb3RfdCA9IHhfdGFuZ2VudCAqIHhfbjIgKyB5X3RhbmdlbnQgKiB5X24yICsgel90YW5nZW50ICogel9uMjtcblxuICAgICAgICAgICAgY29uc3QgeF9yZXNUYW5nZW50MCA9IHhfdGFuZ2VudCAtIHhfbjAgKiBuMF9kb3RfdDtcbiAgICAgICAgICAgIGNvbnN0IHlfcmVzVGFuZ2VudDAgPSB5X3RhbmdlbnQgLSB5X24wICogbjBfZG90X3Q7XG4gICAgICAgICAgICBjb25zdCB6X3Jlc1RhbmdlbnQwID0gel90YW5nZW50IC0gel9uMCAqIG4wX2RvdF90O1xuXG4gICAgICAgICAgICBjb25zdCB4X3Jlc1RhbmdlbnQxID0geF90YW5nZW50IC0geF9uMSAqIG4xX2RvdF90O1xuICAgICAgICAgICAgY29uc3QgeV9yZXNUYW5nZW50MSA9IHlfdGFuZ2VudCAtIHlfbjEgKiBuMV9kb3RfdDtcbiAgICAgICAgICAgIGNvbnN0IHpfcmVzVGFuZ2VudDEgPSB6X3RhbmdlbnQgLSB6X24xICogbjFfZG90X3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfcmVzVGFuZ2VudDIgPSB4X3RhbmdlbnQgLSB4X24yICogbjJfZG90X3Q7XG4gICAgICAgICAgICBjb25zdCB5X3Jlc1RhbmdlbnQyID0geV90YW5nZW50IC0geV9uMiAqIG4yX2RvdF90O1xuICAgICAgICAgICAgY29uc3Qgel9yZXNUYW5nZW50MiA9IHpfdGFuZ2VudCAtIHpfbjIgKiBuMl9kb3RfdDtcblxuICAgICAgICAgICAgY29uc3QgbWFnVGFuZ2VudDAgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgeF9yZXNUYW5nZW50MCAqIHhfcmVzVGFuZ2VudDAgKyB5X3Jlc1RhbmdlbnQwICogeV9yZXNUYW5nZW50MCArIHpfcmVzVGFuZ2VudDAgKiB6X3Jlc1RhbmdlbnQwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG1hZ1RhbmdlbnQxID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIHhfcmVzVGFuZ2VudDEgKiB4X3Jlc1RhbmdlbnQxICsgeV9yZXNUYW5nZW50MSAqIHlfcmVzVGFuZ2VudDEgKyB6X3Jlc1RhbmdlbnQxICogel9yZXNUYW5nZW50MSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBtYWdUYW5nZW50MiA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICB4X3Jlc1RhbmdlbnQyICogeF9yZXNUYW5nZW50MiArIHlfcmVzVGFuZ2VudDIgKiB5X3Jlc1RhbmdlbnQyICsgel9yZXNUYW5nZW50MiAqIHpfcmVzVGFuZ2VudDIsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBCaXRhbmdlbnRcbiAgICAgICAgICAgIGNvbnN0IG4wX2RvdF9idCA9IHhfYml0YW5nZW50ICogeF9uMCArIHlfYml0YW5nZW50ICogeV9uMCArIHpfYml0YW5nZW50ICogel9uMDtcbiAgICAgICAgICAgIGNvbnN0IG4xX2RvdF9idCA9IHhfYml0YW5nZW50ICogeF9uMSArIHlfYml0YW5nZW50ICogeV9uMSArIHpfYml0YW5nZW50ICogel9uMTtcbiAgICAgICAgICAgIGNvbnN0IG4yX2RvdF9idCA9IHhfYml0YW5nZW50ICogeF9uMiArIHlfYml0YW5nZW50ICogeV9uMiArIHpfYml0YW5nZW50ICogel9uMjtcblxuICAgICAgICAgICAgY29uc3QgeF9yZXNCaXRhbmdlbnQwID0geF9iaXRhbmdlbnQgLSB4X24wICogbjBfZG90X2J0O1xuICAgICAgICAgICAgY29uc3QgeV9yZXNCaXRhbmdlbnQwID0geV9iaXRhbmdlbnQgLSB5X24wICogbjBfZG90X2J0O1xuICAgICAgICAgICAgY29uc3Qgel9yZXNCaXRhbmdlbnQwID0gel9iaXRhbmdlbnQgLSB6X24wICogbjBfZG90X2J0O1xuXG4gICAgICAgICAgICBjb25zdCB4X3Jlc0JpdGFuZ2VudDEgPSB4X2JpdGFuZ2VudCAtIHhfbjEgKiBuMV9kb3RfYnQ7XG4gICAgICAgICAgICBjb25zdCB5X3Jlc0JpdGFuZ2VudDEgPSB5X2JpdGFuZ2VudCAtIHlfbjEgKiBuMV9kb3RfYnQ7XG4gICAgICAgICAgICBjb25zdCB6X3Jlc0JpdGFuZ2VudDEgPSB6X2JpdGFuZ2VudCAtIHpfbjEgKiBuMV9kb3RfYnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfcmVzQml0YW5nZW50MiA9IHhfYml0YW5nZW50IC0geF9uMiAqIG4yX2RvdF9idDtcbiAgICAgICAgICAgIGNvbnN0IHlfcmVzQml0YW5nZW50MiA9IHlfYml0YW5nZW50IC0geV9uMiAqIG4yX2RvdF9idDtcbiAgICAgICAgICAgIGNvbnN0IHpfcmVzQml0YW5nZW50MiA9IHpfYml0YW5nZW50IC0gel9uMiAqIG4yX2RvdF9idDtcblxuICAgICAgICAgICAgY29uc3QgbWFnQml0YW5nZW50MCA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICB4X3Jlc0JpdGFuZ2VudDAgKiB4X3Jlc0JpdGFuZ2VudDAgK1xuICAgICAgICAgICAgICAgICAgICB5X3Jlc0JpdGFuZ2VudDAgKiB5X3Jlc0JpdGFuZ2VudDAgK1xuICAgICAgICAgICAgICAgICAgICB6X3Jlc0JpdGFuZ2VudDAgKiB6X3Jlc0JpdGFuZ2VudDAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbWFnQml0YW5nZW50MSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICB4X3Jlc0JpdGFuZ2VudDEgKiB4X3Jlc0JpdGFuZ2VudDEgK1xuICAgICAgICAgICAgICAgICAgICB5X3Jlc0JpdGFuZ2VudDEgKiB5X3Jlc0JpdGFuZ2VudDEgK1xuICAgICAgICAgICAgICAgICAgICB6X3Jlc0JpdGFuZ2VudDEgKiB6X3Jlc0JpdGFuZ2VudDEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbWFnQml0YW5nZW50MiA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICB4X3Jlc0JpdGFuZ2VudDIgKiB4X3Jlc0JpdGFuZ2VudDIgK1xuICAgICAgICAgICAgICAgICAgICB5X3Jlc0JpdGFuZ2VudDIgKiB5X3Jlc0JpdGFuZ2VudDIgK1xuICAgICAgICAgICAgICAgICAgICB6X3Jlc0JpdGFuZ2VudDIgKiB6X3Jlc0JpdGFuZ2VudDIsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMCAqIDMgKyAwXSArPSB4X3Jlc1RhbmdlbnQwIC8gbWFnVGFuZ2VudDA7XG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMCAqIDMgKyAxXSArPSB5X3Jlc1RhbmdlbnQwIC8gbWFnVGFuZ2VudDA7XG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMCAqIDMgKyAyXSArPSB6X3Jlc1RhbmdlbnQwIC8gbWFnVGFuZ2VudDA7XG5cbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kxICogMyArIDBdICs9IHhfcmVzVGFuZ2VudDEgLyBtYWdUYW5nZW50MTtcbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kxICogMyArIDFdICs9IHlfcmVzVGFuZ2VudDEgLyBtYWdUYW5nZW50MTtcbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kxICogMyArIDJdICs9IHpfcmVzVGFuZ2VudDEgLyBtYWdUYW5nZW50MTtcblxuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTIgKiAzICsgMF0gKz0geF9yZXNUYW5nZW50MiAvIG1hZ1RhbmdlbnQyO1xuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTIgKiAzICsgMV0gKz0geV9yZXNUYW5nZW50MiAvIG1hZ1RhbmdlbnQyO1xuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTIgKiAzICsgMl0gKz0gel9yZXNUYW5nZW50MiAvIG1hZ1RhbmdlbnQyO1xuXG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kwICogMyArIDBdICs9IHhfcmVzQml0YW5nZW50MCAvIG1hZ0JpdGFuZ2VudDA7XG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kwICogMyArIDFdICs9IHlfcmVzQml0YW5nZW50MCAvIG1hZ0JpdGFuZ2VudDA7XG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kwICogMyArIDJdICs9IHpfcmVzQml0YW5nZW50MCAvIG1hZ0JpdGFuZ2VudDA7XG5cbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTEgKiAzICsgMF0gKz0geF9yZXNCaXRhbmdlbnQxIC8gbWFnQml0YW5nZW50MTtcbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTEgKiAzICsgMV0gKz0geV9yZXNCaXRhbmdlbnQxIC8gbWFnQml0YW5nZW50MTtcbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTEgKiAzICsgMl0gKz0gel9yZXNCaXRhbmdlbnQxIC8gbWFnQml0YW5nZW50MTtcblxuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMiAqIDMgKyAwXSArPSB4X3Jlc0JpdGFuZ2VudDIgLyBtYWdCaXRhbmdlbnQyO1xuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMiAqIDMgKyAxXSArPSB5X3Jlc0JpdGFuZ2VudDIgLyBtYWdCaXRhbmdlbnQyO1xuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMiAqIDMgKyAyXSArPSB6X3Jlc0JpdGFuZ2VudDIgLyBtYWdCaXRhbmdlbnQyO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBoYW5kZWRuZXNzXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhbmdlbnRzID0gdW5wYWNrZWQudGFuZ2VudHM7XG4gICAgICAgIHRoaXMuYml0YW5nZW50cyA9IHVucGFja2VkLmJpdGFuZ2VudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxheW91dCAtIEEge0BsaW5rIExheW91dH0gb2JqZWN0IHRoYXQgZGVzY3JpYmVzIHRoZVxuICAgICAqIGRlc2lyZWQgbWVtb3J5IGxheW91dCBvZiB0aGUgZ2VuZXJhdGVkIGJ1ZmZlclxuICAgICAqIEByZXR1cm4gVGhlIHBhY2tlZCBhcnJheSBpbiB0aGUgLi4uIFRPRE9cbiAgICAgKi9cbiAgICBtYWtlQnVmZmVyRGF0YShsYXlvdXQ6IExheW91dCk6IEFycmF5QnVmZmVyV2l0aEl0ZW1TaXplIHtcbiAgICAgICAgY29uc3QgbnVtSXRlbXMgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogQXJyYXlCdWZmZXJXaXRoSXRlbVNpemUgPSBuZXcgQXJyYXlCdWZmZXIobGF5b3V0LnN0cmlkZSAqIG51bUl0ZW1zKTtcbiAgICAgICAgYnVmZmVyLm51bUl0ZW1zID0gbnVtSXRlbXM7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCB2ZXJ0ZXhPZmZzZXQgPSAwOyBpIDwgbnVtSXRlbXM7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4T2Zmc2V0ID0gaSAqIGxheW91dC5zdHJpZGU7XG4gICAgICAgICAgICAvLyBjb3B5IGluIHRoZSB2ZXJ0ZXggZGF0YSBpbiB0aGUgb3JkZXIgYW5kIGZvcm1hdCBnaXZlbiBieSB0aGVcbiAgICAgICAgICAgIC8vIGxheW91dCBwYXJhbVxuICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgbGF5b3V0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB2ZXJ0ZXhPZmZzZXQgKyBsYXlvdXQuYXR0cmlidXRlTWFwW2F0dHJpYnV0ZS5rZXldLm9mZnNldDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuUE9TSVRJT04ua2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIHRoaXMudmVydGljZXNbaSAqIDNdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgdGhpcy52ZXJ0aWNlc1tpICogMyArIDFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgdGhpcy52ZXJ0aWNlc1tpICogMyArIDJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5VVi5rZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdGhpcy50ZXh0dXJlc1tpICogMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCB0aGlzLnRleHR1cmVzW2kgKiAyICsgMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0Lk5PUk1BTC5rZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdGhpcy52ZXJ0ZXhOb3JtYWxzW2kgKiAzXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIHRoaXMudmVydGV4Tm9ybWFsc1tpICogMyArIDFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgdGhpcy52ZXJ0ZXhOb3JtYWxzW2kgKiAzICsgMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0Lk1BVEVSSUFMX0lOREVYLmtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LkFNQklFTlQua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5hbWJpZW50WzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgbWF0ZXJpYWwuYW1iaWVudFsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLmFtYmllbnRbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuRElGRlVTRS5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLmRpZmZ1c2VbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCBtYXRlcmlhbC5kaWZmdXNlWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgbWF0ZXJpYWwuZGlmZnVzZVsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5TUEVDVUxBUi5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnNwZWN1bGFyWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgbWF0ZXJpYWwuc3BlY3VsYXJbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA4LCBtYXRlcmlhbC5zcGVjdWxhclsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5TUEVDVUxBUl9FWFBPTkVOVC5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuRU1JU1NJVkUua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5lbWlzc2l2ZVswXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIG1hdGVyaWFsLmVtaXNzaXZlWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgbWF0ZXJpYWwuZW1pc3NpdmVbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuVFJBTlNNSVNTSU9OX0ZJTFRFUi5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclswXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5ESVNTT0xWRS5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLmRpc3NvbHZlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LklMTFVNSU5BVElPTi5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50MTYob2Zmc2V0LCBtYXRlcmlhbC5pbGx1bWluYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuUkVGUkFDVElPTl9JTkRFWC5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnJlZnJhY3Rpb25JbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5TSEFSUE5FU1Mua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5zaGFycG5lc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuQU5USV9BTElBU0lORy5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50MTYob2Zmc2V0LCBtYXRlcmlhbC5hbnRpQWxpYXNpbmcgPyAxIDogMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIG1ha2VJbmRleEJ1ZmZlckRhdGEoKTogVWludDE2QXJyYXlXaXRoSXRlbVNpemUge1xuICAgICAgICBjb25zdCBidWZmZXI6IFVpbnQxNkFycmF5V2l0aEl0ZW1TaXplID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuaW5kaWNlcyk7XG4gICAgICAgIGJ1ZmZlci5udW1JdGVtcyA9IHRoaXMuaW5kaWNlcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgYWRkTWF0ZXJpYWxMaWJyYXJ5KG10bDogTWF0ZXJpYWxMaWJyYXJ5KSB7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBtdGwubWF0ZXJpYWxzKSB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMubWF0ZXJpYWxJbmRpY2VzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgbWF0ZXJpYWwgaXMgbm90IHJlZmVyZW5jZWQgYnkgdGhlIG1lc2hcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtdGwubWF0ZXJpYWxzW25hbWVdO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBtYXRlcmlhbCBpbmRleCBmb3IgdGhpcyBtYXRlcmlhbFxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMubWF0ZXJpYWxJbmRpY2VzW21hdGVyaWFsLm5hbWVdO1xuXG4gICAgICAgICAgICAvLyBQdXQgdGhlIG1hdGVyaWFsIGludG8gdGhlIG1hdGVyaWFsc0J5SW5kZXggb2JqZWN0IGF0IHRoZSByaWdodFxuICAgICAgICAgICAgLy8gc3BvdCBhcyBkZXRlcm1pbmVkIHdoZW4gdGhlIG9iaiBmaWxlIHdhcyBwYXJzZWRcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XSA9IG1hdGVyaWFsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiogdHJpYW5ndWxhdGUoZWxlbWVudHM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgIHlpZWxkIGVsZW1lbnRzO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHlpZWxkIFtlbGVtZW50c1swXSwgZWxlbWVudHNbMV0sIGVsZW1lbnRzWzJdXTtcbiAgICAgICAgeWllbGQgW2VsZW1lbnRzWzJdLCBlbGVtZW50c1szXSwgZWxlbWVudHNbMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICB5aWVsZCBbZWxlbWVudHNbMF0sIGVsZW1lbnRzW2ldLCBlbGVtZW50c1tpICsgMV1dO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IE1lc2ggZnJvbSBcIi4vbWVzaFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxMaWJyYXJ5LCBUZXh0dXJlTWFwRGF0YSB9IGZyb20gXCIuL21hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIGRvd25sb2FkTXRsVGV4dHVyZXMobXRsOiBNYXRlcmlhbExpYnJhcnksIHJvb3Q6IHN0cmluZykge1xuICAgIGNvbnN0IG1hcEF0dHJpYnV0ZXMgPSBbXG4gICAgICAgIFwibWFwRGlmZnVzZVwiLFxuICAgICAgICBcIm1hcEFtYmllbnRcIixcbiAgICAgICAgXCJtYXBTcGVjdWxhclwiLFxuICAgICAgICBcIm1hcERpc3NvbHZlXCIsXG4gICAgICAgIFwibWFwQnVtcFwiLFxuICAgICAgICBcIm1hcERpc3BsYWNlbWVudFwiLFxuICAgICAgICBcIm1hcERlY2FsXCIsXG4gICAgICAgIFwibWFwRW1pc3NpdmVcIixcbiAgICBdO1xuICAgIGlmICghcm9vdC5lbmRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgcm9vdCArPSBcIi9cIjtcbiAgICB9XG4gICAgY29uc3QgdGV4dHVyZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgbWF0ZXJpYWxOYW1lIGluIG10bC5tYXRlcmlhbHMpIHtcbiAgICAgICAgaWYgKCFtdGwubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG1hdGVyaWFsTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbXRsLm1hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xuXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBtYXBBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXBEYXRhID0gKG1hdGVyaWFsIGFzIGFueSlbYXR0cl0gYXMgVGV4dHVyZU1hcERhdGE7XG4gICAgICAgICAgICBpZiAoIW1hcERhdGEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIG1hcERhdGEuZmlsZW5hbWU7XG4gICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKFxuICAgICAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRleHR1cmUgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IChpbWFnZS5vbmxvYWQgPSByZXNvbHZlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gZG93bmxvYWQgdGV4dHVyZTogJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0ZXh0dXJlcyk7XG59XG5cbmZ1bmN0aW9uIGdldE10bChtb2RlbE9wdGlvbnM6IERvd25sb2FkTW9kZWxzT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgaWYgKCEodHlwZW9mIG1vZGVsT3B0aW9ucy5tdGwgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgIHJldHVybiBtb2RlbE9wdGlvbnMub2JqLnJlcGxhY2UoL1xcLm9iaiQvLCBcIi5tdGxcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVsT3B0aW9ucy5tdGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRNb2RlbHNPcHRpb25zIHtcbiAgICBvYmo6IHN0cmluZztcbiAgICBtdGw/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgIGRvd25sb2FkTXRsVGV4dHVyZXM/OiBib29sZWFuO1xuICAgIG10bFRleHR1cmVSb290Pzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgaW5kaWNlc1Blck1hdGVyaWFsPzogYm9vbGVhbjtcbiAgICBjYWxjVGFuZ2VudHNBbmRCaXRhbmdlbnRzPzogYm9vbGVhbjtcbn1cblxudHlwZSBNb2RlbFByb21pc2VzID0gW1Byb21pc2U8c3RyaW5nPiwgUHJvbWlzZTxNZXNoPiwgdW5kZWZpbmVkIHwgUHJvbWlzZTxNYXRlcmlhbExpYnJhcnk+XTtcbmV4cG9ydCB0eXBlIE1lc2hNYXAgPSB7IFtuYW1lOiBzdHJpbmddOiBNZXNoIH07XG4vKipcbiAqIEFjY2VwdHMgYSBsaXN0IG9mIG1vZGVsIHJlcXVlc3Qgb2JqZWN0cyBhbmQgcmV0dXJucyBhIFByb21pc2UgdGhhdFxuICogcmVzb2x2ZXMgd2hlbiBhbGwgbW9kZWxzIGhhdmUgYmVlbiBkb3dubG9hZGVkIGFuZCBwYXJzZWQuXG4gKlxuICogVGhlIGxpc3Qgb2YgbW9kZWwgb2JqZWN0cyBmb2xsb3cgdGhpcyBpbnRlcmZhY2U6XG4gKiB7XG4gKiAgb2JqOiAncGF0aC90by9tb2RlbC5vYmonLFxuICogIG10bDogdHJ1ZSB8ICdwYXRoL3RvL21vZGVsLm10bCcsXG4gKiAgZG93bmxvYWRNdGxUZXh0dXJlczogdHJ1ZSB8IGZhbHNlXG4gKiAgbXRsVGV4dHVyZVJvb3Q6ICcvbW9kZWxzL3N1emFubmUvbWFwcydcbiAqICBuYW1lOiAnc3V6YW5uZSdcbiAqIH1cbiAqXG4gKiBUaGUgYG9iamAgYXR0cmlidXRlIGlzIHJlcXVpcmVkIGFuZCBzaG91bGQgYmUgdGhlIHBhdGggdG8gdGhlXG4gKiBtb2RlbCdzIC5vYmogZmlsZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCByZXBvIChhYnNvbHV0ZSBVUkxzIGFyZVxuICogc3VnZ2VzdGVkKS5cbiAqXG4gKiBUaGUgYG10bGAgYXR0cmlidXRlIGlzIG9wdGlvbmFsIGFuZCBjYW4gZWl0aGVyIGJlIGEgYm9vbGVhbiBvclxuICogYSBwYXRoIHRvIHRoZSBtb2RlbCdzIC5tdGwgZmlsZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBVUkwuIElmXG4gKiB0aGUgdmFsdWUgaXMgYHRydWVgLCB0aGVuIHRoZSBwYXRoIGFuZCBiYXNlbmFtZSBnaXZlbiBmb3IgdGhlIGBvYmpgXG4gKiBhdHRyaWJ1dGUgaXMgdXNlZCByZXBsYWNpbmcgdGhlIC5vYmogc3VmZml4IGZvciAubXRsXG4gKiBFLmcuOiB7b2JqOiAnbW9kZWxzL2Zvby5vYmonLCBtdGw6IHRydWV9IHdvdWxkIHNlYXJjaCBmb3IgJ21vZGVscy9mb28ubXRsJ1xuICpcbiAqIFRoZSBgbmFtZWAgYXR0cmlidXRlIGlzIG9wdGlvbmFsIGFuZCBpcyBhIGh1bWFuIGZyaWVuZGx5IG5hbWUgdG8gYmVcbiAqIGluY2x1ZGVkIHdpdGggdGhlIHBhcnNlZCBPQkogYW5kIE1UTCBmaWxlcy4gSWYgbm90IGdpdmVuLCB0aGUgYmFzZSAub2JqXG4gKiBmaWxlbmFtZSB3aWxsIGJlIHVzZWQuXG4gKlxuICogVGhlIGBkb3dubG9hZE10bFRleHR1cmVzYCBhdHRyaWJ1dGUgaXMgYSBmbGFnIGZvciBhdXRvbWF0aWNhbGx5IGRvd25sb2FkaW5nXG4gKiBhbnkgaW1hZ2VzIGZvdW5kIGluIHRoZSBNVEwgZmlsZSBhbmQgYXR0YWNoaW5nIHRoZW0gdG8gZWFjaCBNYXRlcmlhbFxuICogY3JlYXRlZCBmcm9tIHRoYXQgZmlsZS4gRm9yIGV4YW1wbGUsIGlmIG1hdGVyaWFsLm1hcERpZmZ1c2UgaXMgc2V0ICh0aGVyZVxuICogd2FzIGRhdGEgaW4gdGhlIE1UTCBmaWxlKSwgdGhlbiBtYXRlcmlhbC5tYXBEaWZmdXNlLnRleHR1cmUgd2lsbCBjb250YWluXG4gKiB0aGUgZG93bmxvYWRlZCBpbWFnZS4gVGhpcyBvcHRpb24gZGVmYXVsdHMgdG8gYHRydWVgLiBCeSBkZWZhdWx0LCB0aGUgTVRMJ3NcbiAqIFVSTCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBsb2NhdGlvbiBvZiB0aGUgaW1hZ2VzLlxuICpcbiAqIFRoZSBgbXRsVGV4dHVyZVJvb3RgIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgc2hvdWxkIHBvaW50IHRvIHRoZSBsb2NhdGlvblxuICogb24gdGhlIHNlcnZlciB0aGF0IHRoaXMgTVRMJ3MgdGV4dHVyZSBmaWxlcyBhcmUgbG9jYXRlZC4gVGhlIGRlZmF1bHQgaXMgdG9cbiAqIHVzZSB0aGUgTVRMIGZpbGUncyBsb2NhdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gdGhlIHJlc3VsdCBvZiBkb3dubG9hZGluZyB0aGUgZ2l2ZW4gbGlzdCBvZiBtb2RlbHMuIFRoZVxuICogcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgdGhlIG5hbWVzIG9mIHRoZSBtb2RlbHNcbiAqIGFuZCB0aGUgdmFsdWUgaXMgaXRzIE1lc2ggb2JqZWN0LiBFYWNoIE1lc2ggb2JqZWN0IHdpbGwgYXV0b21hdGljYWxseVxuICogaGF2ZSBpdHMgYWRkTWF0ZXJpYWxMaWJyYXJ5KCkgbWV0aG9kIGNhbGxlZCB0byBzZXQgdGhlIGdpdmVuIE1UTCBkYXRhIChpZiBnaXZlbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE1vZGVscyhtb2RlbHM6IERvd25sb2FkTW9kZWxzT3B0aW9uc1tdKTogUHJvbWlzZTxNZXNoTWFwPiB7XG4gICAgY29uc3QgZmluaXNoZWQgPSBbXTtcblxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICAgIGlmICghbW9kZWwub2JqKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1wib2JqXCIgYXR0cmlidXRlIG9mIG1vZGVsIG9iamVjdCBub3Qgc2V0LiBUaGUgLm9iaiBmaWxlIGlzIHJlcXVpcmVkIHRvIGJlIHNldCAnICtcbiAgICAgICAgICAgICAgICAgICAgXCJpbiBvcmRlciB0byB1c2UgZG93bmxvYWRNb2RlbHMoKVwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpbmRpY2VzUGVyTWF0ZXJpYWw6ICEhbW9kZWwuaW5kaWNlc1Blck1hdGVyaWFsLFxuICAgICAgICAgICAgY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50czogISFtb2RlbC5jYWxjVGFuZ2VudHNBbmRCaXRhbmdlbnRzLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHRoZSBuYW1lIGlzIG5vdCBwcm92aWRlZCwgZGVydml2ZSBpdCBmcm9tIHRoZSBnaXZlbiBPQkpcbiAgICAgICAgbGV0IG5hbWUgPSBtb2RlbC5uYW1lO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbW9kZWwub2JqLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS5yZXBsYWNlKFwiLm9ialwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShuYW1lKTtcblxuICAgICAgICBjb25zdCBtZXNoUHJvbWlzZSA9IGZldGNoKG1vZGVsLm9iailcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWVzaChkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtdGxQcm9taXNlO1xuICAgICAgICAvLyBEb3dubG9hZCBNYXRlcmlhbExpYnJhcnkgZmlsZT9cbiAgICAgICAgaWYgKG1vZGVsLm10bCkge1xuICAgICAgICAgICAgY29uc3QgbXRsID0gZ2V0TXRsKG1vZGVsKTtcbiAgICAgICAgICAgIG10bFByb21pc2UgPSBmZXRjaChtdGwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAoZGF0YTogc3RyaW5nKTogUHJvbWlzZTxbTWF0ZXJpYWxMaWJyYXJ5LCBhbnldPiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNYXRlcmlhbExpYnJhcnkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZG93bmxvYWRNdGxUZXh0dXJlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9vdCA9IG1vZGVsLm10bFRleHR1cmVSb290O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRpcmVjdG9yeSBvZiB0aGUgTVRMIGZpbGUgYXMgZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290ID0gbXRsLnN1YnN0cigwLCBtdGwubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG93bmxvYWRNdGxUZXh0dXJlcyByZXR1cm5zIGEgUHJvbWlzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgcmVzb2x2ZWQgb25jZSBhbGwgb2YgdGhlIGltYWdlcyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFyZSBkb3dubG9hZGVkLiBUaGVzZSBhcmUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dGFjaGVkIHRvIHRoZSBtYXAgZGF0YSBvYmplY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtQcm9taXNlLnJlc29sdmUobWF0ZXJpYWwpLCBkb3dubG9hZE10bFRleHR1cmVzKG1hdGVyaWFsLCByb290KV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtQcm9taXNlLnJlc29sdmUobWF0ZXJpYWwpLCB1bmRlZmluZWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBbTWF0ZXJpYWxMaWJyYXJ5LCBhbnldKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZDogTW9kZWxQcm9taXNlcyA9IFtuYW1lUHJvbWlzZSwgbWVzaFByb21pc2UsIG10bFByb21pc2VdO1xuICAgICAgICBmaW5pc2hlZC5wdXNoKFByb21pc2UuYWxsPHN0cmluZywgTWVzaCwgTWF0ZXJpYWxMaWJyYXJ5IHwgdW5kZWZpbmVkPihwYXJzZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmluaXNoZWQpLnRoZW4obXMgPT4ge1xuICAgICAgICAvLyB0aGUgXCJmaW5pc2hlZFwiIHByb21pc2UgaXMgYSBsaXN0IG9mIG5hbWUsIE1lc2ggaW5zdGFuY2UsXG4gICAgICAgIC8vIGFuZCBNYXRlcmlhbExpYmFyeSBpbnN0YW5jZS4gVGhpcyB1bnBhY2tzIGFuZCByZXR1cm5zIGFuXG4gICAgICAgIC8vIG9iamVjdCBtYXBwaW5nIG5hbWUgdG8gTWVzaCAoTWVzaCBwb2ludHMgdG8gTVRMKS5cbiAgICAgICAgY29uc3QgbW9kZWxzOiBNZXNoTWFwID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBtb2RlbCBvZiBtcykge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIG1lc2gsIG10bF0gPSBtb2RlbDtcbiAgICAgICAgICAgIG1lc2gubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAobXRsKSB7XG4gICAgICAgICAgICAgICAgbWVzaC5hZGRNYXRlcmlhbExpYnJhcnkobXRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVsc1tuYW1lXSA9IG1lc2g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVBbmRVcmxzIHtcbiAgICBbbWVzaE5hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBUYWtlcyBpbiBhbiBvYmplY3Qgb2YgYG1lc2hfbmFtZWAsIGAnL3VybC90by9PQkovZmlsZSdgIHBhaXJzIGFuZCBhIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi4gRWFjaCBPQkogZmlsZSB3aWxsIGJlIGFqYXhlZCBpbiBhbmQgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG9cbiAqIGFuIE9CSi5NZXNoLiBXaGVuIGFsbCBmaWxlcyBoYXZlIHN1Y2Nlc3NmdWxseSBkb3dubG9hZGVkIHRoZSBjYWxsYmFja1xuICogZnVuY3Rpb24gcHJvdmlkZWQgd2lsbCBiZSBjYWxsZWQgYW5kIHBhc3NlZCBpbiBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIG5ld2x5IGNyZWF0ZWQgbWVzaGVzLlxuICpcbiAqICoqTm90ZToqKiBJbiBvcmRlciB0byB1c2UgdGhpcyBmdW5jdGlvbiBhcyBhIHdheSB0byBkb3dubG9hZCBtZXNoZXMsIGFcbiAqIHdlYnNlcnZlciBvZiBzb21lIHNvcnQgbXVzdCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lQW5kQXR0cnMgYW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIG1lc2ggYW5kIHRoZSB2YWx1ZSBpcyB0aGUgdXJsIHRvIHRoYXQgbWVzaCdzIE9CSiBmaWxlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGlvbkNhbGxiYWNrIHNob3VsZCBjb250YWluIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHRha2Ugb25lIHBhcmFtZXRlcjogYW4gb2JqZWN0IGFycmF5IHdoZXJlIHRoZSBrZXlzIHdpbGwgYmUgdGhlIHVuaXF1ZSBvYmplY3QgbmFtZSBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgYSBNZXNoIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNoZXMgSW4gY2FzZSBvdGhlciBtZXNoZXMgYXJlIGxvYWRlZCBzZXBhcmF0ZWx5IG9yIGlmIGEgcHJldmlvdXNseSBkZWNsYXJlZCB2YXJpYWJsZSBpcyBkZXNpcmVkIHRvIGJlIHVzZWQsIHBhc3MgaW4gYSAocG9zc2libHkgZW1wdHkpIGpzb24gb2JqZWN0IG9mIHRoZSBwYXR0ZXJuOiB7ICc8bWVzaF9uYW1lPic6IE9CSi5NZXNoIH1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE1lc2hlcyhcbiAgICBuYW1lQW5kVVJMczogTmFtZUFuZFVybHMsXG4gICAgY29tcGxldGlvbkNhbGxiYWNrOiAobWVzaGVzOiBNZXNoTWFwKSA9PiB2b2lkLFxuICAgIG1lc2hlczogTWVzaE1hcCxcbikge1xuICAgIGlmIChtZXNoZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXNoZXMgPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZWQ6IFByb21pc2U8W3N0cmluZywgTWVzaF0+W10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgbWVzaF9uYW1lIGluIG5hbWVBbmRVUkxzKSB7XG4gICAgICAgIGlmICghbmFtZUFuZFVSTHMuaGFzT3duUHJvcGVydHkobWVzaF9uYW1lKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmFtZUFuZFVSTHNbbWVzaF9uYW1lXTtcbiAgICAgICAgY29tcGxldGVkLnB1c2goXG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW21lc2hfbmFtZSwgbmV3IE1lc2goZGF0YSldIGFzIFtzdHJpbmcsIE1lc2hdO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIFByb21pc2UuYWxsKGNvbXBsZXRlZCkudGhlbihtcyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIG1lc2hdIG9mIG1zKSB7XG4gICAgICAgICAgICBtZXNoZXNbbmFtZV0gPSBtZXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRpb25DYWxsYmFjayhtZXNoZXMpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkR0xCdWZmZXIgZXh0ZW5kcyBXZWJHTEJ1ZmZlciB7XG4gICAgaXRlbVNpemU6IG51bWJlcjtcbiAgICBudW1JdGVtczogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBfYnVpbGRCdWZmZXIoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdHlwZTogR0xlbnVtLCBkYXRhOiBudW1iZXJbXSwgaXRlbVNpemU6IG51bWJlcik6IEV4dGVuZGVkR0xCdWZmZXIge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpIGFzIEV4dGVuZGVkR0xCdWZmZXI7XG4gICAgY29uc3QgYXJyYXlWaWV3ID0gdHlwZSA9PT0gZ2wuQVJSQVlfQlVGRkVSID8gRmxvYXQzMkFycmF5IDogVWludDE2QXJyYXk7XG4gICAgZ2wuYmluZEJ1ZmZlcih0eXBlLCBidWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEodHlwZSwgbmV3IGFycmF5VmlldyhkYXRhKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgIGJ1ZmZlci5pdGVtU2l6ZSA9IGl0ZW1TaXplO1xuICAgIGJ1ZmZlci5udW1JdGVtcyA9IGRhdGEubGVuZ3RoIC8gaXRlbVNpemU7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNoV2l0aEJ1ZmZlcnMgZXh0ZW5kcyBNZXNoIHtcbiAgICBub3JtYWxCdWZmZXI6IEV4dGVuZGVkR0xCdWZmZXI7XG4gICAgdGV4dHVyZUJ1ZmZlcjogRXh0ZW5kZWRHTEJ1ZmZlcjtcbiAgICB2ZXJ0ZXhCdWZmZXI6IEV4dGVuZGVkR0xCdWZmZXI7XG4gICAgaW5kZXhCdWZmZXI6IEV4dGVuZGVkR0xCdWZmZXI7XG59XG5cbi8qKlxuICogVGFrZXMgaW4gdGhlIFdlYkdMIGNvbnRleHQgYW5kIGEgTWVzaCwgdGhlbiBjcmVhdGVzIGFuZCBhcHBlbmRzIHRoZSBidWZmZXJzXG4gKiB0byB0aGUgbWVzaCBvYmplY3QgYXMgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIGBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKWAgY29udGV4dCBpbnN0YW5jZVxuICogQHBhcmFtIHtNZXNofSBtZXNoIGEgc2luZ2xlIGBPQkouTWVzaGAgaW5zdGFuY2VcbiAqXG4gKiBUaGUgbmV3bHkgY3JlYXRlZCBtZXNoIGF0dHJpYnV0ZXMgYXJlOlxuICpcbiAqIEF0dHJidXRlIHwgRGVzY3JpcHRpb25cbiAqIDotLS0gfCAtLS1cbiAqICoqbm9ybWFsQnVmZmVyKiogICAgICAgfGNvbnRhaW5zIHRoZSBtb2RlbCYjMzk7cyBWZXJ0ZXggTm9ybWFsc1xuICogbm9ybWFsQnVmZmVyLml0ZW1TaXplICB8c2V0IHRvIDMgaXRlbXNcbiAqIG5vcm1hbEJ1ZmZlci5udW1JdGVtcyAgfHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGV4IG5vcm1hbHNcbiAqIHxcbiAqICoqdGV4dHVyZUJ1ZmZlcioqICAgICAgfGNvbnRhaW5zIHRoZSBtb2RlbCYjMzk7cyBUZXh0dXJlIENvb3JkaW5hdGVzXG4gKiB0ZXh0dXJlQnVmZmVyLml0ZW1TaXplIHxzZXQgdG8gMiBpdGVtc1xuICogdGV4dHVyZUJ1ZmZlci5udW1JdGVtcyB8dGhlIG51bWJlciBvZiB0ZXh0dXJlIGNvb3JkaW5hdGVzXG4gKiB8XG4gKiAqKnZlcnRleEJ1ZmZlcioqICAgICAgIHxjb250YWlucyB0aGUgbW9kZWwmIzM5O3MgVmVydGV4IFBvc2l0aW9uIENvb3JkaW5hdGVzIChkb2VzIG5vdCBpbmNsdWRlIHcpXG4gKiB2ZXJ0ZXhCdWZmZXIuaXRlbVNpemUgIHxzZXQgdG8gMyBpdGVtc1xuICogdmVydGV4QnVmZmVyLm51bUl0ZW1zICB8dGhlIHRvdGFsIG51bWJlciBvZiB2ZXJ0aWNlc1xuICogfFxuICogKippbmRleEJ1ZmZlcioqICAgICAgICB8Y29udGFpbnMgdGhlIGluZGljZXMgb2YgdGhlIGZhY2VzXG4gKiBpbmRleEJ1ZmZlci5pdGVtU2l6ZSAgIHxpcyBzZXQgdG8gMVxuICogaW5kZXhCdWZmZXIubnVtSXRlbXMgICB8dGhlIHRvdGFsIG51bWJlciBvZiBpbmRpY2VzXG4gKlxuICogQSBzaW1wbGUgZXhhbXBsZSAoYSBsb3Qgb2Ygc3RlcHMgYXJlIG1pc3NpbmcsIHNvIGRvbid0IGNvcHkgYW5kIHBhc3RlKTpcbiAqXG4gKiAgICAgY29uc3QgZ2wgICA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpLFxuICogICAgICAgICBtZXNoID0gT0JKLk1lc2gob2JqX2ZpbGVfZGF0YSk7XG4gKiAgICAgLy8gY29tcGlsZSB0aGUgc2hhZGVycyBhbmQgY3JlYXRlIGEgc2hhZGVyIHByb2dyYW1cbiAqICAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICogICAgIC8vIGNvbXBpbGF0aW9uIHN0dWZmIGhlcmVcbiAqICAgICAuLi5cbiAqICAgICAvLyBtYWtlIHN1cmUgeW91IGhhdmUgdmVydGV4LCB2ZXJ0ZXggbm9ybWFsLCBhbmQgdGV4dHVyZSBjb29yZGluYXRlXG4gKiAgICAgLy8gYXR0cmlidXRlcyBsb2NhdGVkIGluIHlvdXIgc2hhZGVycyBhbmQgYXR0YWNoIHRoZW0gdG8gdGhlIHNoYWRlciBwcm9ncmFtXG4gKiAgICAgc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVZlcnRleFBvc2l0aW9uXCIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUpO1xuICpcbiAqICAgICBzaGFkZXJQcm9ncmFtLnZlcnRleE5vcm1hbEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVZlcnRleE5vcm1hbFwiKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnZlcnRleE5vcm1hbEF0dHJpYnV0ZSk7XG4gKlxuICogICAgIHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgXCJhVGV4dHVyZUNvb3JkXCIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqXG4gKiAgICAgLy8gY3JlYXRlIGFuZCBpbml0aWFsaXplIHRoZSB2ZXJ0ZXgsIHZlcnRleCBub3JtYWwsIGFuZCB0ZXh0dXJlIGNvb3JkaW5hdGUgYnVmZmVyc1xuICogICAgIC8vIGFuZCBzYXZlIG9uIHRvIHRoZSBtZXNoIG9iamVjdFxuICogICAgIE9CSi5pbml0TWVzaEJ1ZmZlcnMoZ2wsIG1lc2gpO1xuICpcbiAqICAgICAvLyBub3cgdG8gcmVuZGVyIHRoZSBtZXNoXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG1lc2gudmVydGV4QnVmZmVyKTtcbiAqICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIG1lc2gudmVydGV4QnVmZmVyLml0ZW1TaXplLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICogICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGUgbWVzaCBkb2Vzbid0IGNvbnRhaW5cbiAqICAgICAvLyBhbnkgdGV4dHVyZSBjb29yZGluYXRlcyAoZS5nLiBzdXphbm5lLm9iaiBpbiB0aGUgZGV2ZWxvcG1lbnQgYnJhbmNoKS5cbiAqICAgICAvLyBpbiB0aGlzIGNhc2UsIHRoZSB0ZXh0dXJlIHZlcnRleEF0dHJpYkFycmF5IHdpbGwgbmVlZCB0byBiZSBkaXNhYmxlZFxuICogICAgIC8vIGJlZm9yZSB0aGUgY2FsbCB0byBkcmF3RWxlbWVudHNcbiAqICAgICBpZighbWVzaC50ZXh0dXJlcy5sZW5ndGgpe1xuICogICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqICAgICB9XG4gKiAgICAgZWxzZXtcbiAqICAgICAgIC8vIGlmIHRoZSB0ZXh0dXJlIHZlcnRleEF0dHJpYkFycmF5IGhhcyBiZWVuIHByZXZpb3VzbHlcbiAqICAgICAgIC8vIGRpc2FibGVkLCB0aGVuIGl0IG5lZWRzIHRvIGJlIHJlLWVuYWJsZWRcbiAqICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnRleHR1cmVCdWZmZXIpO1xuICogICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSwgbWVzaC50ZXh0dXJlQnVmZmVyLml0ZW1TaXplLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICogICAgIH1cbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG1lc2gubm9ybWFsQnVmZmVyKTtcbiAqICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4Tm9ybWFsQXR0cmlidXRlLCBtZXNoLm5vcm1hbEJ1ZmZlci5pdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbW9kZWwubWVzaC5pbmRleEJ1ZmZlcik7XG4gKiAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgbW9kZWwubWVzaC5pbmRleEJ1ZmZlci5udW1JdGVtcywgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lc2hCdWZmZXJzKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG1lc2g6IE1lc2gpOiBNZXNoV2l0aEJ1ZmZlcnMge1xuICAgIChtZXNoIGFzIE1lc2hXaXRoQnVmZmVycykubm9ybWFsQnVmZmVyID0gX2J1aWxkQnVmZmVyKGdsLCBnbC5BUlJBWV9CVUZGRVIsIG1lc2gudmVydGV4Tm9ybWFscywgMyk7XG4gICAgKG1lc2ggYXMgTWVzaFdpdGhCdWZmZXJzKS50ZXh0dXJlQnVmZmVyID0gX2J1aWxkQnVmZmVyKGdsLCBnbC5BUlJBWV9CVUZGRVIsIG1lc2gudGV4dHVyZXMsIG1lc2gudGV4dHVyZVN0cmlkZSk7XG4gICAgKG1lc2ggYXMgTWVzaFdpdGhCdWZmZXJzKS52ZXJ0ZXhCdWZmZXIgPSBfYnVpbGRCdWZmZXIoZ2wsIGdsLkFSUkFZX0JVRkZFUiwgbWVzaC52ZXJ0aWNlcywgMyk7XG4gICAgKG1lc2ggYXMgTWVzaFdpdGhCdWZmZXJzKS5pbmRleEJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG1lc2guaW5kaWNlcywgMSk7XG5cbiAgICByZXR1cm4gbWVzaCBhcyBNZXNoV2l0aEJ1ZmZlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXNoQnVmZmVycyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBtZXNoOiBNZXNoV2l0aEJ1ZmZlcnMpIHtcbiAgICBnbC5kZWxldGVCdWZmZXIobWVzaC5ub3JtYWxCdWZmZXIpO1xuICAgIGdsLmRlbGV0ZUJ1ZmZlcihtZXNoLnRleHR1cmVCdWZmZXIpO1xuICAgIGdsLmRlbGV0ZUJ1ZmZlcihtZXNoLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuZGVsZXRlQnVmZmVyKG1lc2guaW5kZXhCdWZmZXIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==