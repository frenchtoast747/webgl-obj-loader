(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("OBJ", [], factory);
	else if(typeof exports === 'object')
		exports["OBJ"] = factory();
	else
		root["OBJ"] = factory();
})(window, function() {
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





const version = "1.1.3";
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
        options.filename = filename;
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
                let quad = false;
                for (let j = 0, eleLen = elements.length; j < eleLen; j++) {
                    // Triangulating quads
                    // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
                    // corresponding triangles:
                    //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
                    //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
                    if (j === 3 && !quad) {
                        // add v2/t2/vn2 in again before continuing to 3
                        j = 2;
                        quad = true;
                    }
                    const hash0 = elements[0] + "," + currentMaterialIndex;
                    const hash = elements[j] + "," + currentMaterialIndex;
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
                    if (j === 3 && quad) {
                        // add v0/t0/vn0 onto the second triangle
                        unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash0]);
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

module.exports = __webpack_require__(/*! /home/aaron/google_drive/projects/webgl-obj-loader/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PQkovd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL09CSi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9PQkovLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL2xheW91dC50cyIsIndlYnBhY2s6Ly9PQkovLi9zcmMvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL21lc2gudHMiLCJ3ZWJwYWNrOi8vT0JKLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDLENBQUM7WUFFakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFakMsVUFBVTtZQUNWLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXhFLE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRWxELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3pCLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUNoRyxDQUFDO1lBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDekIsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLENBQ2hHLENBQUM7WUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUN6QixhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWEsQ0FDaEcsQ0FBQztZQUVGLFlBQVk7WUFDWixNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvRSxNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvRSxNQUFNLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztZQUUvRSxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUV2RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUMzQixlQUFlLEdBQUcsZUFBZTtnQkFDN0IsZUFBZSxHQUFHLGVBQWU7Z0JBQ2pDLGVBQWUsR0FBRyxlQUFlLENBQ3hDLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUU3RCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUVuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFB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RUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLElBQXdCLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RyxJQUF3QixDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUF3QixDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRW5HLE9BQU8sSUFBdUIsQ0FBQztBQUNuQyxDQUFDO0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxFQUF5QixFQUFFLElBQXFCO0lBQzlFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLENBQUMiLCJmaWxlIjoid2ViZ2wtb2JqLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiT0JKXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9CSlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPQkpcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgTWVzaCwge1xuICAgIE1lc2hPcHRpb25zLFxuICAgIE1hdGVyaWFsTmFtZVRvSW5kZXgsXG4gICAgSW5kZXhUb01hdGVyaWFsLFxuICAgIEFycmF5QnVmZmVyV2l0aEl0ZW1TaXplLFxuICAgIFVpbnQxNkFycmF5V2l0aEl0ZW1TaXplLFxufSBmcm9tIFwiLi9tZXNoXCI7XG5pbXBvcnQgeyBNYXRlcmlhbCwgTWF0ZXJpYWxMaWJyYXJ5LCBWZWMzLCBVVlcsIFRleHR1cmVNYXBEYXRhIH0gZnJvbSBcIi4vbWF0ZXJpYWxcIjtcbmltcG9ydCB7IExheW91dCwgVFlQRVMsIEF0dHJpYnV0ZUluZm8sIER1cGxpY2F0ZUF0dHJpYnV0ZUV4Y2VwdGlvbiwgQXR0cmlidXRlIH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQge1xuICAgIGRvd25sb2FkTW9kZWxzLFxuICAgIGRvd25sb2FkTWVzaGVzLFxuICAgIGluaXRNZXNoQnVmZmVycyxcbiAgICBkZWxldGVNZXNoQnVmZmVycyxcbiAgICBEb3dubG9hZE1vZGVsc09wdGlvbnMsXG4gICAgTWVzaE1hcCxcbiAgICBOYW1lQW5kVXJscyxcbiAgICBFeHRlbmRlZEdMQnVmZmVyLFxuICAgIE1lc2hXaXRoQnVmZmVycyxcbn0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgdmVyc2lvbiA9IFwiMS4xLjNcIjtcblxuLyoqXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCB7XG4gICAgQXJyYXlCdWZmZXJXaXRoSXRlbVNpemUsXG4gICAgQXR0cmlidXRlLFxuICAgIEF0dHJpYnV0ZUluZm8sXG4gICAgRG93bmxvYWRNb2RlbHNPcHRpb25zLFxuICAgIER1cGxpY2F0ZUF0dHJpYnV0ZUV4Y2VwdGlvbixcbiAgICBFeHRlbmRlZEdMQnVmZmVyLFxuICAgIEluZGV4VG9NYXRlcmlhbCxcbiAgICBMYXlvdXQsXG4gICAgTWF0ZXJpYWwsXG4gICAgTWF0ZXJpYWxMaWJyYXJ5LFxuICAgIE1hdGVyaWFsTmFtZVRvSW5kZXgsXG4gICAgTWVzaCxcbiAgICBNZXNoTWFwLFxuICAgIE1lc2hPcHRpb25zLFxuICAgIE1lc2hXaXRoQnVmZmVycyxcbiAgICBOYW1lQW5kVXJscyxcbiAgICBUZXh0dXJlTWFwRGF0YSxcbiAgICBUWVBFUyxcbiAgICBVaW50MTZBcnJheVdpdGhJdGVtU2l6ZSxcbiAgICBVVlcsXG4gICAgVmVjMyxcbiAgICBkb3dubG9hZE1vZGVscyxcbiAgICBkb3dubG9hZE1lc2hlcyxcbiAgICBpbml0TWVzaEJ1ZmZlcnMsXG4gICAgZGVsZXRlTWVzaEJ1ZmZlcnMsXG4gICAgdmVyc2lvbixcbn07XG4iLCJleHBvcnQgZW51bSBUWVBFUyB7XG4gICAgXCJCWVRFXCIgPSAxLFxuICAgIFwiVU5TSUdORURfQllURVwiID0gMSxcbiAgICBcIlNIT1JUXCIgPSAyLFxuICAgIFwiVU5TSUdORURfU0hPUlRcIiA9IDIsXG4gICAgXCJGTE9BVFwiID0gNCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGVJbmZvIHtcbiAgICBhdHRyaWJ1dGU6IEF0dHJpYnV0ZTtcbiAgICBzaXplOiBBdHRyaWJ1dGVbXCJzaXplXCJdO1xuICAgIHR5cGU6IEF0dHJpYnV0ZVtcInR5cGVcIl07XG4gICAgbm9ybWFsaXplZDogQXR0cmlidXRlW1wibm9ybWFsaXplZFwiXTtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBzdHJpZGU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbiBleGNlcHRpb24gZm9yIHdoZW4gdHdvIG9yIG1vcmUgb2YgdGhlIHNhbWUgYXR0cmlidXRlcyBhcmUgZm91bmQgaW4gdGhlXG4gKiBzYW1lIGxheW91dC5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBEdXBsaWNhdGVBdHRyaWJ1dGVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgRHVwbGljYXRlQXR0cmlidXRlRXhjZXB0aW9uXG4gICAgICogQHBhcmFtIHtBdHRyaWJ1dGV9IGF0dHJpYnV0ZSAtIFRoZSBhdHRyaWJ1dGUgdGhhdCB3YXMgZm91bmQgbW9yZSB0aGFuXG4gICAgICogICAgICAgIG9uY2UgaW4gdGhlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlOiBBdHRyaWJ1dGUpIHtcbiAgICAgICAgc3VwZXIoYGZvdW5kIGR1cGxpY2F0ZSBhdHRyaWJ1dGU6ICR7YXR0cmlidXRlLmtleX1gKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBob3cgYSB2ZXJ0ZXggYXR0cmlidXRlIHNob3VsZCBiZSBwYWNrZWQgaW50byBhbiBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgICBwdWJsaWMgc2l6ZU9mVHlwZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzaXplSW5CeXRlczogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUuIERvIG5vdCBjYWxsIHRoaXMgZGlyZWN0bHksIHVzZSB0aGUgcHJlZGVmaW5lZFxuICAgICAqIGNvbnN0YW50cy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhpcyBhdHRyaWJ1dGUgYXMgaWYgaXQgd2VyZSBhIGtleSBpblxuICAgICAqICAgICAgICBhbiBPYmplY3QuIFVzZSB0aGUgY2FtZWwgY2FzZSB2ZXJzaW9uIG9mIHRoZSB1cHBlciBzbmFrZSBjYXNlXG4gICAgICogICAgICAgIGNvbnN0IG5hbWUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBUaGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgcGVyIHZlcnRleCBhdHRyaWJ1dGUuXG4gICAgICogICAgICAgIE11c3QgYmUgMSwgMiwgMywgb3IgNC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBkYXRhIHR5cGUgb2YgZWFjaCBjb21wb25lbnQgZm9yIHRoaXNcbiAgICAgKiAgICAgICAgYXR0cmlidXRlLiBQb3NzaWJsZSB2YWx1ZXM6PGJyLz5cbiAgICAgKiAgICAgICAgXCJCWVRFXCI6IHNpZ25lZCA4LWJpdCBpbnRlZ2VyLCB3aXRoIHZhbHVlcyBpbiBbLTEyOCwgMTI3XTxici8+XG4gICAgICogICAgICAgIFwiU0hPUlRcIjogc2lnbmVkIDE2LWJpdCBpbnRlZ2VyLCB3aXRoIHZhbHVlcyBpblxuICAgICAqICAgICAgICAgICAgWy0zMjc2OCwgMzI3NjddPGJyLz5cbiAgICAgKiAgICAgICAgXCJVTlNJR05FRF9CWVRFXCI6IHVuc2lnbmVkIDgtYml0IGludGVnZXIsIHdpdGggdmFsdWVzIGluXG4gICAgICogICAgICAgICAgICBbMCwgMjU1XTxici8+XG4gICAgICogICAgICAgIFwiVU5TSUdORURfU0hPUlRcIjogdW5zaWduZWQgMTYtYml0IGludGVnZXIsIHdpdGggdmFsdWVzIGluXG4gICAgICogICAgICAgICAgICBbMCwgNjU1MzVdPGJyLz5cbiAgICAgKiAgICAgICAgXCJGTE9BVFwiOiAzMi1iaXQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBub3JtYWxpemVkIC0gV2hldGhlciBpbnRlZ2VyIGRhdGEgdmFsdWVzIHNob3VsZCBiZVxuICAgICAqICAgICAgICBub3JtYWxpemVkIHdoZW4gYmVpbmcgY2FzdGVkIHRvIGEgZmxvYXQuPGJyLz5cbiAgICAgKiAgICAgICAgSWYgdHJ1ZSwgc2lnbmVkIGludGVnZXJzIGFyZSBub3JtYWxpemVkIHRvIFstMSwgMV0uPGJyLz5cbiAgICAgKiAgICAgICAgSWYgdHJ1ZSwgdW5zaWduZWQgaW50ZWdlcnMgYXJlIG5vcm1hbGl6ZWQgdG8gWzAsIDFdLjxici8+XG4gICAgICogICAgICAgIEZvciB0eXBlIFwiRkxPQVRcIiwgdGhpcyBwYXJhbWV0ZXIgaGFzIG5vIGVmZmVjdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMga2V5OiBzdHJpbmcsIHB1YmxpYyBzaXplOiBudW1iZXIsIHB1YmxpYyB0eXBlOiBUWVBFUywgcHVibGljIG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNpemVPZlR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIHRoaXMuc2l6ZUluQnl0ZXMgPSB0aGlzLnNpemVPZlR5cGUgKiBzaXplO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgbWVtb3J5IGxheW91dCBmb3IgYSB2ZXJ0ZXggYXR0cmlidXRlIGFycmF5LiBVc2VkIGJ5XG4gKiB7QGxpbmsgTWVzaH0ncyBUQkQoLi4uKSBtZXRob2QgdG8gZ2VuZXJhdGUgYSBwYWNrZWQgYXJyYXkgZnJvbSBtZXNoIGRhdGEuXG4gKiA8cD5cbiAqIExheW91dCBjYW4gc29ydCBvZiBiZSB0aG91Z2h0IG9mIGFzIGEgQy1zdHlsZSBzdHJ1Y3QgZGVjbGFyYXRpb24uXG4gKiB7QGxpbmsgTWVzaH0ncyBUQkQoLi4uKSBtZXRob2Qgd2lsbCB1c2UgdGhlIHtAbGluayBMYXlvdXR9IGluc3RhbmNlIHRvXG4gKiBwYWNrIGFuIGFycmF5IGluIHRoZSBnaXZlbiBhdHRyaWJ1dGUgb3JkZXIuXG4gKiA8cD5cbiAqIExheW91dCBhbHNvIGlzIHZlcnkgaGVscGZ1bCB3aGVuIGNhbGxpbmcgYSBXZWJHTCBjb250ZXh0J3NcbiAqIDxjb2RlPnZlcnRleEF0dHJpYlBvaW50ZXI8L2NvZGU+IG1ldGhvZC4gSWYgeW91J3ZlIGNyZWF0ZWQgYSBidWZmZXIgdXNpbmdcbiAqIGEgTGF5b3V0IGluc3RhbmNlLCB0aGVuIHRoZSBzYW1lIExheW91dCBpbnN0YW5jZSBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmVcbiAqIHRoZSBzaXplLCB0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIGFuZCBvZmZzZXQgcGFyYW1ldGVycyBmb3JcbiAqIDxjb2RlPnZlcnRleEF0dHJpYlBvaW50ZXI8L2NvZGU+LlxuICogPHA+XG4gKiBGb3IgZXhhbXBsZTpcbiAqIDxwcmU+PGNvZGU+XG4gKlxuICogY29uc3QgaW5kZXggPSBnbGN0eC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcInBvc1wiKTtcbiAqIGdsY3R4LnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gKiAgIGxheW91dC5wb3NpdGlvbi5zaXplLFxuICogICBnbGN0eFtsYXlvdXQucG9zaXRpb24udHlwZV0sXG4gKiAgIGxheW91dC5wb3NpdGlvbi5ub3JtYWxpemVkLFxuICogICBsYXlvdXQucG9zaXRpb24uc3RyaWRlLFxuICogICBsYXlvdXQucG9zaXRpb24ub2Zmc2V0KTtcbiAqIDwvY29kZT48L3ByZT5cbiAqIEBzZWUge0BsaW5rIE1lc2h9XG4gKi9cbmV4cG9ydCBjbGFzcyBMYXlvdXQge1xuICAgIC8vIEdlb21ldHJ5IGF0dHJpYnV0ZXNcbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYSB2ZXJ0ZXgncyB4LCB5LCAmIHogYXMgZmxvYXRzXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgc3RhdGljIFBPU0lUSU9OID0gbmV3IEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIDMsIFRZUEVTLkZMT0FUKTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIG5vcm1hbCdzIHgsIHksICYgeiBhcyBmbG9hdHNcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIExheW91dH1cbiAgICAgKi9cbiAgICBzdGF0aWMgTk9STUFMID0gbmV3IEF0dHJpYnV0ZShcIm5vcm1hbFwiLCAzLCBUWVBFUy5GTE9BVCk7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYSB2ZXJ0ZXgncyBub3JtYWwncyB4LCB5LCAmIHogYXMgZmxvYXRzLlxuICAgICAqIDxwPlxuICAgICAqIFRoaXMgdmFsdWUgd2lsbCBiZSBjb21wdXRlZCBvbi10aGUtZmx5IGJhc2VkIG9uIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzLlxuICAgICAqIElmIG5vIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIGdlbmVyYXRlZCB2YWx1ZSB3aWxsIGRlZmF1bHQgdG9cbiAgICAgKiAwLCAwLCAwLlxuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgTGF5b3V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBUQU5HRU5UID0gbmV3IEF0dHJpYnV0ZShcInRhbmdlbnRcIiwgMywgVFlQRVMuRkxPQVQpO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIGxheW91dCB0byBwYWNrIGEgdmVydGV4J3Mgbm9ybWFsJ3MgYml0YW5nZW50IHgsIHksICYgeiBhcyBmbG9hdHMuXG4gICAgICogPHA+XG4gICAgICogVGhpcyB2YWx1ZSB3aWxsIGJlIGNvbXB1dGVkIG9uLXRoZS1mbHkgYmFzZWQgb24gdGhlIHRleHR1cmUgY29vcmRpbmF0ZXMuXG4gICAgICogSWYgbm8gdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZ2VuZXJhdGVkIHZhbHVlIHdpbGwgZGVmYXVsdCB0b1xuICAgICAqIDAsIDAsIDAuXG4gICAgICogQHNlZSB7QGxpbmsgTGF5b3V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBCSVRBTkdFTlQgPSBuZXcgQXR0cmlidXRlKFwiYml0YW5nZW50XCIsIDMsIFRZUEVTLkZMT0FUKTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIHRleHR1cmUgY29vcmRpbmF0ZXMnIHUgJiB2IGFzIGZsb2F0c1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgTGF5b3V0fVxuICAgICAqL1xuICAgIHN0YXRpYyBVViA9IG5ldyBBdHRyaWJ1dGUoXCJ1dlwiLCAyLCBUWVBFUy5GTE9BVCk7XG5cbiAgICAvLyBNYXRlcmlhbCBhdHRyaWJ1dGVzXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYW4gdW5zaWduZWQgc2hvcnQgdG8gYmUgaW50ZXJwcmV0ZWQgYXMgYSB0aGUgaW5kZXhcbiAgICAgKiBpbnRvIGEge0BsaW5rIE1lc2h9J3MgbWF0ZXJpYWxzIGxpc3QuXG4gICAgICogPHA+XG4gICAgICogVGhlIGludGVudGlvbiBvZiB0aGlzIHZhbHVlIGlzIHRvIHNlbmQgYWxsIG9mIHRoZSB7QGxpbmsgTWVzaH0ncyBtYXRlcmlhbHNcbiAgICAgKiBpbnRvIG11bHRpcGxlIHNoYWRlciB1bmlmb3JtcyBhbmQgdGhlbiByZWZlcmVuY2UgdGhlIGN1cnJlbnQgb25lIGJ5IHRoaXNcbiAgICAgKiB2ZXJ0ZXggYXR0cmlidXRlLlxuICAgICAqIDxwPlxuICAgICAqIGV4YW1wbGUgZ2xzbCBjb2RlOlxuICAgICAqXG4gICAgICogPHByZT48Y29kZT5cbiAgICAgKiAgLy8gdGhpcyBpcyBib3VuZCB1c2luZyBNQVRFUklBTF9JTkRFWFxuICAgICAqICBhdHRyaWJ1dGUgaW50IG1hdGVyaWFsSW5kZXg7XG4gICAgICpcbiAgICAgKiAgc3RydWN0IE1hdGVyaWFsIHtcbiAgICAgKiAgICB2ZWMzIGRpZmZ1c2U7XG4gICAgICogICAgdmVjMyBzcGVjdWxhcjtcbiAgICAgKiAgICB2ZWMzIHNwZWN1bGFyRXhwb25lbnQ7XG4gICAgICogIH07XG4gICAgICpcbiAgICAgKiAgdW5pZm9ybSBNYXRlcmlhbCBtYXRlcmlhbHNbTUFYX01BVEVSSUFMU107XG4gICAgICpcbiAgICAgKiAgLy8gLi4uXG4gICAgICpcbiAgICAgKiAgdmVjMyBkaWZmdXNlID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuICAgICAqXG4gICAgICogPC9jb2RlPjwvcHJlPlxuICAgICAqIFRPRE86IE1vcmUgZGVzY3JpcHRpb24gJiB0ZXN0IHRvIG1ha2Ugc3VyZSBzdWJzY3JpcHRpbmcgYnkgYXR0cmlidXRlcyBldmVuXG4gICAgICogd29ya3MgZm9yIHdlYmdsXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gICAgICovXG4gICAgc3RhdGljIE1BVEVSSUFMX0lOREVYID0gbmV3IEF0dHJpYnV0ZShcIm1hdGVyaWFsSW5kZXhcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVRFUklBTF9FTkFCTEVEID0gbmV3IEF0dHJpYnV0ZShcIm1hdGVyaWFsRW5hYmxlZFwiLCAxLCBUWVBFUy5VTlNJR05FRF9TSE9SVCk7XG4gICAgc3RhdGljIEFNQklFTlQgPSBuZXcgQXR0cmlidXRlKFwiYW1iaWVudFwiLCAzLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIERJRkZVU0UgPSBuZXcgQXR0cmlidXRlKFwiZGlmZnVzZVwiLCAzLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIFNQRUNVTEFSID0gbmV3IEF0dHJpYnV0ZShcInNwZWN1bGFyXCIsIDMsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgU1BFQ1VMQVJfRVhQT05FTlQgPSBuZXcgQXR0cmlidXRlKFwic3BlY3VsYXJFeHBvbmVudFwiLCAzLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIEVNSVNTSVZFID0gbmV3IEF0dHJpYnV0ZShcImVtaXNzaXZlXCIsIDMsIFRZUEVTLkZMT0FUKTtcbiAgICBzdGF0aWMgVFJBTlNNSVNTSU9OX0ZJTFRFUiA9IG5ldyBBdHRyaWJ1dGUoXCJ0cmFuc21pc3Npb25GaWx0ZXJcIiwgMywgVFlQRVMuRkxPQVQpO1xuICAgIHN0YXRpYyBESVNTT0xWRSA9IG5ldyBBdHRyaWJ1dGUoXCJkaXNzb2x2ZVwiLCAxLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIElMTFVNSU5BVElPTiA9IG5ldyBBdHRyaWJ1dGUoXCJpbGx1bWluYXRpb25cIiwgMSwgVFlQRVMuVU5TSUdORURfU0hPUlQpO1xuICAgIHN0YXRpYyBSRUZSQUNUSU9OX0lOREVYID0gbmV3IEF0dHJpYnV0ZShcInJlZnJhY3Rpb25JbmRleFwiLCAxLCBUWVBFUy5GTE9BVCk7XG4gICAgc3RhdGljIFNIQVJQTkVTUyA9IG5ldyBBdHRyaWJ1dGUoXCJzaGFycG5lc3NcIiwgMSwgVFlQRVMuRkxPQVQpO1xuICAgIHN0YXRpYyBNQVBfRElGRlVTRSA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBEaWZmdXNlXCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgTUFQX0FNQklFTlQgPSBuZXcgQXR0cmlidXRlKFwibWFwQW1iaWVudFwiLCAxLCBUWVBFUy5TSE9SVCk7XG4gICAgc3RhdGljIE1BUF9TUEVDVUxBUiA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBTcGVjdWxhclwiLCAxLCBUWVBFUy5TSE9SVCk7XG4gICAgc3RhdGljIE1BUF9TUEVDVUxBUl9FWFBPTkVOVCA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBTcGVjdWxhckV4cG9uZW50XCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgTUFQX0RJU1NPTFZFID0gbmV3IEF0dHJpYnV0ZShcIm1hcERpc3NvbHZlXCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgQU5USV9BTElBU0lORyA9IG5ldyBBdHRyaWJ1dGUoXCJhbnRpQWxpYXNpbmdcIiwgMSwgVFlQRVMuVU5TSUdORURfU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfQlVNUCA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBCdW1wXCIsIDEsIFRZUEVTLlNIT1JUKTtcbiAgICBzdGF0aWMgTUFQX0RJU1BMQUNFTUVOVCA9IG5ldyBBdHRyaWJ1dGUoXCJtYXBEaXNwbGFjZW1lbnRcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfREVDQUwgPSBuZXcgQXR0cmlidXRlKFwibWFwRGVjYWxcIiwgMSwgVFlQRVMuU0hPUlQpO1xuICAgIHN0YXRpYyBNQVBfRU1JU1NJVkUgPSBuZXcgQXR0cmlidXRlKFwibWFwRW1pc3NpdmVcIiwgMSwgVFlQRVMuU0hPUlQpO1xuXG4gICAgcHVibGljIHN0cmlkZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVbXTtcbiAgICBwdWJsaWMgYXR0cmlidXRlTWFwOiB7IFtpZHg6IHN0cmluZ106IEF0dHJpYnV0ZUluZm8gfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBMYXlvdXQgb2JqZWN0LiBUaGlzIGNvbnN0cnVjdG9yIHdpbGwgdGhyb3cgaWYgYW55IGR1cGxpY2F0ZVxuICAgICAqIGF0dHJpYnV0ZXMgYXJlIGdpdmVuLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IC4uLmF0dHJpYnV0ZXMgLSBBbiBvcmRlcmVkIGxpc3Qgb2YgYXR0cmlidXRlcyB0aGF0XG4gICAgICogICAgICAgIGRlc2NyaWJlIHRoZSBkZXNpcmVkIG1lbW9yeSBsYXlvdXQgZm9yIGVhY2ggdmVydGV4IGF0dHJpYnV0ZS5cbiAgICAgKiAgICAgICAgPHA+XG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBNZXNofVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLmF0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlTWFwID0ge307XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBsZXQgbWF4U3RyaWRlTXVsdGlwbGUgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVNYXBbYXR0cmlidXRlLmtleV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlQXR0cmlidXRlRXhjZXB0aW9uKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgcGFkZGluZyB0byBzYXRpc2Z5IFdlYkdMJ3MgcmVxdWlyZW1lbnQgdGhhdCBhbGxcbiAgICAgICAgICAgIC8vIHZlcnRleEF0dHJpYlBvaW50ZXIgY2FsbHMgaGF2ZSBhbiBvZmZzZXQgdGhhdCBpcyBhIG11bHRpcGxlIG9mXG4gICAgICAgICAgICAvLyB0aGUgdHlwZSBzaXplLlxuICAgICAgICAgICAgaWYgKG9mZnNldCAlIGF0dHJpYnV0ZS5zaXplT2ZUeXBlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGF0dHJpYnV0ZS5zaXplT2ZUeXBlIC0gKG9mZnNldCAlIGF0dHJpYnV0ZS5zaXplT2ZUeXBlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMYXlvdXQgcmVxdWlyZXMgcGFkZGluZyBiZWZvcmUgXCIgKyBhdHRyaWJ1dGUua2V5ICsgXCIgYXR0cmlidXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVNYXBbYXR0cmlidXRlLmtleV0gPSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgc2l6ZTogYXR0cmlidXRlLnNpemUsXG4gICAgICAgICAgICAgICAgdHlwZTogYXR0cmlidXRlLnR5cGUsXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZDogYXR0cmlidXRlLm5vcm1hbGl6ZWQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICB9IGFzIEF0dHJpYnV0ZUluZm87XG4gICAgICAgICAgICBvZmZzZXQgKz0gYXR0cmlidXRlLnNpemVJbkJ5dGVzO1xuICAgICAgICAgICAgbWF4U3RyaWRlTXVsdGlwbGUgPSBNYXRoLm1heChtYXhTdHJpZGVNdWx0aXBsZSwgYXR0cmlidXRlLnNpemVPZlR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBwYWRkaW5nIHRvIHRoZSBlbmQgdG8gc2F0aXNmeSBXZWJHTCdzIHJlcXVpcmVtZW50IHRoYXQgYWxsXG4gICAgICAgIC8vIHZlcnRleEF0dHJpYlBvaW50ZXIgY2FsbHMgaGF2ZSBhIHN0cmlkZSB0aGF0IGlzIGEgbXVsdGlwbGUgb2YgdGhlXG4gICAgICAgIC8vIHR5cGUgc2l6ZS4gQmVjYXVzZSB3ZSdyZSBwdXR0aW5nIGRpZmZlcmVudGx5IHNpemVkIGF0dHJpYnV0ZXMgaW50b1xuICAgICAgICAvLyB0aGUgc2FtZSBidWZmZXIsIGl0IG11c3QgYmUgcGFkZGVkIHRvIGEgbXVsdGlwbGUgb2YgdGhlIGxhcmdlc3RcbiAgICAgICAgLy8gdHlwZSBzaXplLlxuICAgICAgICBpZiAob2Zmc2V0ICUgbWF4U3RyaWRlTXVsdGlwbGUgIT09IDApIHtcbiAgICAgICAgICAgIG9mZnNldCArPSBtYXhTdHJpZGVNdWx0aXBsZSAtIChvZmZzZXQgJSBtYXhTdHJpZGVNdWx0aXBsZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMYXlvdXQgcmVxdWlyZXMgcGFkZGluZyBhdCB0aGUgYmFja1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cmlkZSA9IG9mZnNldDtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVNYXBbYXR0cmlidXRlLmtleV0uc3RyaWRlID0gdGhpcy5zdHJpZGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBWZWMzID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVWVyB7XG4gICAgdTogbnVtYmVyO1xuICAgIHY6IG51bWJlcjtcbiAgICB3OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dHVyZU1hcERhdGEge1xuICAgIGNvbG9yQ29ycmVjdGlvbjogYm9vbGVhbjtcbiAgICBob3Jpem9udGFsQmxlbmRpbmc6IGJvb2xlYW47XG4gICAgdmVydGljYWxCbGVuZGluZzogYm9vbGVhbjtcbiAgICBib29zdE1pcE1hcFNoYXJwbmVzczogbnVtYmVyO1xuICAgIG1vZGlmeVRleHR1cmVNYXA6IHtcbiAgICAgICAgYnJpZ2h0bmVzczogbnVtYmVyO1xuICAgICAgICBjb250cmFzdDogbnVtYmVyO1xuICAgIH07XG4gICAgb2Zmc2V0OiBVVlc7XG4gICAgc2NhbGU6IFVWVztcbiAgICB0dXJidWxlbmNlOiBVVlc7XG4gICAgY2xhbXA6IGJvb2xlYW47XG4gICAgdGV4dHVyZVJlc29sdXRpb246IG51bWJlciB8IG51bGw7XG4gICAgYnVtcE11bHRpcGxpZXI6IG51bWJlcjtcbiAgICBpbWZDaGFuOiBzdHJpbmcgfCBudWxsO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgcmVmbGVjdGlvblR5cGU/OiBzdHJpbmc7XG4gICAgdGV4dHVyZT86IEhUTUxJbWFnZUVsZW1lbnQ7XG59XG5cbi8qKlxuICogVGhlIE1hdGVyaWFsIGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWwge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIHVuaXF1ZSBuYW1lIG9mIHRoZSBtYXRlcmlhbFxuICAgICAqL1xuICAgIC8vIFRoZSB2YWx1ZXMgZm9yIHRoZSBmb2xsb3dpbmcgYXR0aWJ1dGVzXG4gICAgLy8gYXJlIGFuIGFycmF5IG9mIFIsIEcsIEIgbm9ybWFsaXplZCB2YWx1ZXMuXG4gICAgLy8gS2EgLSBBbWJpZW50IFJlZmxlY3Rpdml0eVxuICAgIGFtYmllbnQ6IFZlYzMgPSBbMCwgMCwgMF07XG4gICAgLy8gS2QgLSBEZWZ1c2UgUmVmbGVjdGl2aXR5XG4gICAgZGlmZnVzZTogVmVjMyA9IFswLCAwLCAwXTtcbiAgICAvLyBLc1xuICAgIHNwZWN1bGFyOiBWZWMzID0gWzAsIDAsIDBdO1xuICAgIC8vIEtlXG4gICAgZW1pc3NpdmU6IFZlYzMgPSBbMCwgMCwgMF07XG4gICAgLy8gVGZcbiAgICB0cmFuc21pc3Npb25GaWx0ZXI6IFZlYzMgPSBbMCwgMCwgMF07XG4gICAgLy8gZFxuICAgIGRpc3NvbHZlOiBudW1iZXIgPSAwO1xuICAgIC8vIHZhbGlkIHJhbmdlIGlzIGJldHdlZW4gMCBhbmQgMTAwMFxuICAgIHNwZWN1bGFyRXhwb25lbnQ6IG51bWJlciA9IDA7XG4gICAgLy8gZWl0aGVyIGQgb3IgVHI7IHZhbGlkIHZhbHVlcyBhcmUgbm9ybWFsaXplZFxuICAgIHRyYW5zcGFyZW5jeTogbnVtYmVyID0gMDtcbiAgICAvLyBpbGx1bSAtIHRoZSBlbnVtIG9mIHRoZSBpbGx1bWluYXRpb24gbW9kZWwgdG8gdXNlXG4gICAgaWxsdW1pbmF0aW9uOiBudW1iZXIgPSAwO1xuICAgIC8vIE5pIC0gU2V0IHRvIFwibm9ybWFsXCIgKGFpcikuXG4gICAgcmVmcmFjdGlvbkluZGV4OiBudW1iZXIgPSAxO1xuICAgIC8vIHNoYXJwbmVzc1xuICAgIHNoYXJwbmVzczogbnVtYmVyID0gMDtcbiAgICAvLyBtYXBfS2RcbiAgICBtYXBEaWZmdXNlOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfS2FcbiAgICBtYXBBbWJpZW50OiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfS3NcbiAgICBtYXBTcGVjdWxhcjogVGV4dHVyZU1hcERhdGEgPSBlbXB0eVRleHR1cmVPcHRpb25zKCk7XG4gICAgLy8gbWFwX05zXG4gICAgbWFwU3BlY3VsYXJFeHBvbmVudDogVGV4dHVyZU1hcERhdGEgPSBlbXB0eVRleHR1cmVPcHRpb25zKCk7XG4gICAgLy8gbWFwX2RcbiAgICBtYXBEaXNzb2x2ZTogVGV4dHVyZU1hcERhdGEgPSBlbXB0eVRleHR1cmVPcHRpb25zKCk7XG4gICAgLy8gbWFwX2FhdFxuICAgIGFudGlBbGlhc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIG1hcF9idW1wIG9yIGJ1bXBcbiAgICBtYXBCdW1wOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBkaXNwXG4gICAgbWFwRGlzcGxhY2VtZW50OiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBkZWNhbFxuICAgIG1hcERlY2FsOiBUZXh0dXJlTWFwRGF0YSA9IGVtcHR5VGV4dHVyZU9wdGlvbnMoKTtcbiAgICAvLyBtYXBfS2VcbiAgICBtYXBFbWlzc2l2ZTogVGV4dHVyZU1hcERhdGEgPSBlbXB0eVRleHR1cmVPcHRpb25zKCk7XG4gICAgLy8gcmVmbCAtIHdoZW4gdGhlIHJlZmxlY3Rpb24gdHlwZSBpcyBhIGN1YmUsIHRoZXJlIHdpbGwgYmUgbXVsdGlwbGUgcmVmbFxuICAgIC8vICAgICAgICBzdGF0ZW1lbnRzIGZvciBlYWNoIHNpZGUgb2YgdGhlIGN1YmUuIElmIGl0J3MgYSBzcGhlcmljYWxcbiAgICAvLyAgICAgICAgcmVmbGVjdGlvbiwgdGhlcmUgc2hvdWxkIG9ubHkgZXZlciBiZSBvbmUuXG4gICAgbWFwUmVmbGVjdGlvbnM6IFRleHR1cmVNYXBEYXRhW10gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7fVxufVxuXG5jb25zdCBTRU5USU5FTF9NQVRFUklBTCA9IG5ldyBNYXRlcmlhbChcInNlbnRpbmVsXCIpO1xuXG4vKipcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dhdmVmcm9udF8ub2JqX2ZpbGVcbiAqIGh0dHA6Ly9wYXVsYm91cmtlLm5ldC9kYXRhZm9ybWF0cy9tdGwvXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRlcmlhbExpYnJhcnkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgdGhlIE1hdGVyaWFsIFBhcnNlclxuICAgICAqIEBwYXJhbSBtdGxEYXRhIHRoZSBNVEwgZmlsZSBjb250ZW50c1xuICAgICAqL1xuICAgIHB1YmxpYyBjdXJyZW50TWF0ZXJpYWw6IE1hdGVyaWFsID0gU0VOVElORUxfTUFURVJJQUw7XG4gICAgcHVibGljIG1hdGVyaWFsczogeyBbazogc3RyaW5nXTogTWF0ZXJpYWwgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgLyogdGhlIGZ1bmN0aW9uIG5hbWVzIGhlcmUgZGlzb2JleSBjYW1lbENhc2UgY29udmVudGlvbnNcbiAgICAgdG8gbWFrZSBwYXJzaW5nL3JvdXRpbmcgZWFzaWVyLiBzZWUgdGhlIHBhcnNlIGZ1bmN0aW9uXG4gICAgIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE1hdGVyaWFsIG9iamVjdCBhbmQgYWRkcyB0byB0aGUgcmVnaXN0cnkuXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfbmV3bXRsKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRva2Vuc1swXTtcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdQYXJzaW5nIG5ldyBNYXRlcmlhbDonLCBuYW1lKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbCA9IG5ldyBNYXRlcmlhbChuYW1lKTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbHNbbmFtZV0gPSB0aGlzLmN1cnJlbnRNYXRlcmlhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWUgdGhlIGRvY3VtZW5hdGlvbiBmb3IgcGFyc2VfS2EgYmVsb3cgZm9yIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcuXG4gICAgICpcbiAgICAgKiBHaXZlbiBhIGxpc3Qgb2YgcG9zc2libGUgY29sb3IgdG9rZW5zLCByZXR1cm5zIGFuIGFycmF5IG9mIFIsIEcsIGFuZCBCXG4gICAgICogY29sb3IgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICogQHJldHVybiB7Kn0gYSAzIGVsZW1lbnQgYXJyYXkgY29udGFpbmluZyB0aGUgUiwgRywgYW5kIEIgdmFsdWVzXG4gICAgICogb2YgdGhlIGNvbG9yLlxuICAgICAqL1xuICAgIHBhcnNlQ29sb3IodG9rZW5zOiBzdHJpbmdbXSk6IFZlYzMge1xuICAgICAgICBpZiAodG9rZW5zWzBdID09IFwic3BlY3RyYWxcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiVGhlIE1UTCBwYXJzZXIgZG9lcyBub3Qgc3VwcG9ydCBzcGVjdHJhbCBjdXJ2ZSBmaWxlcy4gWW91IHdpbGwgXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIm5lZWQgdG8gY29udmVydCB0aGUgTVRMIGNvbG9ycyB0byBlaXRoZXIgUkdCIG9yIENJRVhZWi5cIixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW5zWzBdID09IFwieHl6XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIlRoZSBNVEwgcGFyc2VyIGRvZXMgbm90IGN1cnJlbnRseSBzdXBwb3J0IFhZWiBjb2xvcnMuIEVpdGhlciBjb252ZXJ0IHRoZSBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiWFlaIHZhbHVlcyB0byBSR0Igb3IgY3JlYXRlIGFuIGlzc3VlIHRvIGFkZCBzdXBwb3J0IGZvciBYWVpcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmcm9tIG15IHVuZGVyc3RhbmRpbmcgb2YgdGhlIHNwZWMsIFJHQiB2YWx1ZXMgYXQgdGhpcyBwb2ludFxuICAgICAgICAvLyB3aWxsIGVpdGhlciBiZSAzIGZsb2F0cyBvciBleGFjdGx5IDEgZmxvYXQsIHNvIHRoYXQncyB0aGUgY2hlY2tcbiAgICAgICAgLy8gdGhhdCBpJ20gZ29pbmcgdG8gcGVyZm9ybSBoZXJlXG4gICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5LCB6XSA9IHRva2VucztcbiAgICAgICAgICAgIHJldHVybiBbcGFyc2VGbG9hdCh4KSwgcGFyc2VGbG9hdCh5KSwgcGFyc2VGbG9hdCh6KV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5jZSB0b2tlbnMgYXQgdGhpcyBwb2ludCBoYXMgYSBsZW5ndGggb2YgMywgd2UncmUgZ29pbmcgdG8gYXNzdW1lXG4gICAgICAgIC8vIGl0J3MgZXhhY3RseSAxLCBza2lwcGluZyB0aGUgY2hlY2sgZm9yIDIuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdCh0b2tlbnNbMF0pO1xuICAgICAgICAvLyBpbiB0aGlzIGNhc2UsIGFsbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnRcbiAgICAgICAgcmV0dXJuIFt2YWx1ZSwgdmFsdWUsIHZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgYW1iaWVudCByZWZsZWN0aXZpdHlcbiAgICAgKlxuICAgICAqIEEgS2EgZGlyZWN0aXZlIGNhbiB0YWtlIG9uZSBvZiB0aHJlZSBmb3JtczpcbiAgICAgKiAgIC0gS2EgciBnIGJcbiAgICAgKiAgIC0gS2Egc3BlY3RyYWwgZmlsZS5yZmxcbiAgICAgKiAgIC0gS2EgeHl6IHggeSB6XG4gICAgICogVGhlc2UgdGhyZWUgZm9ybXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSBpbiB0aGF0IG9ubHkgb25lXG4gICAgICogZGVjbGFyYXRpb24gY2FuIGV4aXN0IHBlciBtYXRlcmlhbC4gSXQgaXMgY29uc2lkZXJlZCBhIHN5bnRheFxuICAgICAqIGVycm9yIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIFRoZSBcIkthXCIgZm9ybSBzcGVjaWZpZXMgdGhlIGFtYmllbnQgcmVmbGVjdGl2aXR5IHVzaW5nIFJHQiB2YWx1ZXMuXG4gICAgICogVGhlIFwiZ1wiIGFuZCBcImJcIiB2YWx1ZXMgYXJlIG9wdGlvbmFsLiBJZiBvbmx5IHRoZSBcInJcIiB2YWx1ZSBpc1xuICAgICAqIHNwZWNpZmllZCwgdGhlbiB0aGUgXCJnXCIgYW5kIFwiYlwiIHZhbHVlcyBhcmUgYXNzaWduZWQgdGhlIHZhbHVlIG9mXG4gICAgICogXCJyXCIuIFZhbHVlcyBhcmUgbm9ybWFsbHkgaW4gdGhlIHJhbmdlIDAuMCB0byAxLjAuIFZhbHVlcyBvdXRzaWRlXG4gICAgICogb2YgdGhpcyByYW5nZSBpbmNyZWFzZSBvciBkZWNyZWFzZSB0aGUgcmVmbGVjdGl2aXR5IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogVGhlIFwiS2Egc3BlY3RyYWxcIiBmb3JtIHNwZWNpZmllcyB0aGUgYW1iaWVudCByZWZsZWN0aXZpdHkgdXNpbmcgYVxuICAgICAqIHNwZWN0cmFsIGN1cnZlLiBcImZpbGUucmZsXCIgaXMgdGhlIG5hbWUgb2YgdGhlIFwiLnJmbFwiIGZpbGUgY29udGFpbmluZ1xuICAgICAqIHRoZSBjdXJ2ZSBkYXRhLiBcImZhY3RvclwiIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHdoaWNoIGlzIGEgbXVsdGlwbGllclxuICAgICAqIGZvciB0aGUgdmFsdWVzIGluIHRoZSAucmZsIGZpbGUgYW5kIGRlZmF1bHRzIHRvIDEuMCBpZiBub3Qgc3BlY2lmaWVkLlxuICAgICAqXG4gICAgICogVGhlIFwiS2EgeHl6XCIgZm9ybSBzcGVjaWZpZXMgdGhlIGFtYmllbnQgcmVmbGVjdGl2aXR5IHVzaW5nIENJRVhZWiB2YWx1ZXMuXG4gICAgICogXCJ4IHkgelwiIGFyZSB0aGUgdmFsdWVzIG9mIHRoZSBDSUVYWVogY29sb3Igc3BhY2UuIFRoZSBcInlcIiBhbmQgXCJ6XCIgYXJndW1lbnRzXG4gICAgICogYXJlIG9wdGlvbmFsIGFuZCB0YWtlIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJ4XCIgY29tcG9uZW50IGlmIG9ubHkgXCJ4XCIgaXNcbiAgICAgKiBzcGVjaWZpZWQuIFRoZSBcInggeSB6XCIgdmFsdWVzIGFyZSBub3JtYWxseSBpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMCBhbmRcbiAgICAgKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhbWJpZW50IHJlZmxlY3Rpdml0eSBhY2NvcmRpbmdseSBvdXRzaWRlIG9mIHRoYXRcbiAgICAgKiByYW5nZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX0thKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuYW1iaWVudCA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpZmZ1c2UgUmVmbGVjdGl2aXR5XG4gICAgICpcbiAgICAgKiBTaW1pbGFyIHRvIHRoZSBLYSBkaXJlY3RpdmUuIFNpbXBseSByZXBsYWNlIFwiS2FcIiB3aXRoIFwiS2RcIiBhbmQgdGhlIHJ1bGVzXG4gICAgICogYXJlIHRoZSBzYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9LZCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmRpZmZ1c2UgPSB0aGlzLnBhcnNlQ29sb3IodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjdHJhbCBSZWZsZWN0aXZpdHlcbiAgICAgKlxuICAgICAqIFNpbWlsYXIgdG8gdGhlIEthIGRpcmVjdGl2ZS4gU2ltcGx5IHJlcGxhY2UgXCJLc1wiIHdpdGggXCJLZFwiIGFuZCB0aGUgcnVsZXNcbiAgICAgKiBhcmUgdGhlIHNhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX0tzKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuc3BlY3VsYXIgPSB0aGlzLnBhcnNlQ29sb3IodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWlzc2l2ZVxuICAgICAqXG4gICAgICogVGhlIGFtb3VudCBhbmQgY29sb3Igb2YgbGlnaHQgZW1pdHRlZCBieSB0aGUgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfS2UodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5lbWlzc2l2ZSA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbWlzc2lvbiBGaWx0ZXJcbiAgICAgKlxuICAgICAqIEFueSBsaWdodCBwYXNzaW5nIHRocm91Z2ggdGhlIG9iamVjdCBpcyBmaWx0ZXJlZCBieSB0aGUgdHJhbnNtaXNzaW9uXG4gICAgICogZmlsdGVyLCB3aGljaCBvbmx5IGFsbG93cyBzcGVjaWZpYyBjb2xvcnMgdG8gcGFzcyB0aHJvdWdoLiBGb3IgZXhhbXBsZSwgVGZcbiAgICAgKiAwIDEgMCBhbGxvd3MgYWxsIG9mIHRoZSBncmVlbiB0byBwYXNzIHRocm91Z2ggYW5kIGZpbHRlcnMgb3V0IGFsbCBvZiB0aGVcbiAgICAgKiByZWQgYW5kIGJsdWUuXG4gICAgICpcbiAgICAgKiBTaW1pbGFyIHRvIHRoZSBLYSBkaXJlY3RpdmUuIFNpbXBseSByZXBsYWNlIFwiS3NcIiB3aXRoIFwiVGZcIiBhbmQgdGhlIHJ1bGVzXG4gICAgICogYXJlIHRoZSBzYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9UZih0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlciA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgZGlzc29sdmUgZm9yIHRoZSBjdXJyZW50IG1hdGVyaWFsLlxuICAgICAqXG4gICAgICogU3RhdGVtZW50OiBkIFstaGFsb10gYGZhY3RvcmBcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IFwiZCAwLjVcIlxuICAgICAqXG4gICAgICogVGhlIGZhY3RvciBpcyB0aGUgYW1vdW50IHRoaXMgbWF0ZXJpYWwgZGlzc29sdmVzIGludG8gdGhlIGJhY2tncm91bmQuIEFcbiAgICAgKiBmYWN0b3Igb2YgMS4wIGlzIGZ1bGx5IG9wYXF1ZS4gVGhpcyBpcyB0aGUgZGVmYXVsdCB3aGVuIGEgbmV3IG1hdGVyaWFsIGlzXG4gICAgICogY3JlYXRlZC4gQSBmYWN0b3Igb2YgMC4wIGlzIGZ1bGx5IGRpc3NvbHZlZCAoY29tcGxldGVseSB0cmFuc3BhcmVudCkuXG4gICAgICpcbiAgICAgKiBVbmxpa2UgYSByZWFsIHRyYW5zcGFyZW50IG1hdGVyaWFsLCB0aGUgZGlzc29sdmUgZG9lcyBub3QgZGVwZW5kIHVwb25cbiAgICAgKiBtYXRlcmlhbCB0aGlja25lc3Mgbm9yIGRvZXMgaXQgaGF2ZSBhbnkgc3BlY3RyYWwgY2hhcmFjdGVyLiBEaXNzb2x2ZSB3b3Jrc1xuICAgICAqIG9uIGFsbCBpbGx1bWluYXRpb24gbW9kZWxzLlxuICAgICAqXG4gICAgICogVGhlIGRpc3NvbHZlIHN0YXRlbWVudCBhbGxvd3MgZm9yIGFuIG9wdGlvbmFsIFwiLWhhbG9cIiBmbGFnIHdoaWNoIGluZGljYXRlc1xuICAgICAqIHRoYXQgYSBkaXNzb2x2ZSBpcyBkZXBlbmRlbnQgb24gdGhlIHN1cmZhY2Ugb3JpZW50YXRpb24gcmVsYXRpdmUgdG8gdGhlXG4gICAgICogdmlld2VyLiBGb3IgZXhhbXBsZSwgYSBzcGhlcmUgd2l0aCB0aGUgZm9sbG93aW5nIGRpc3NvbHZlLCBcImQgLWhhbG8gMC4wXCIsXG4gICAgICogd2lsbCBiZSBmdWxseSBkaXNzb2x2ZWQgYXQgaXRzIGNlbnRlciBhbmQgd2lsbCBhcHBlYXIgZ3JhZHVhbGx5IG1vcmUgb3BhcXVlXG4gICAgICogdG93YXJkIGl0cyBlZGdlLlxuICAgICAqXG4gICAgICogXCJmYWN0b3JcIiBpcyB0aGUgbWluaW11bSBhbW91bnQgb2YgZGlzc29sdmUgYXBwbGllZCB0byB0aGUgbWF0ZXJpYWwuIFRoZVxuICAgICAqIGFtb3VudCBvZiBkaXNzb2x2ZSB3aWxsIHZhcnkgYmV0d2VlbiAxLjAgKGZ1bGx5IG9wYXF1ZSkgYW5kIHRoZSBzcGVjaWZpZWRcbiAgICAgKiBcImZhY3RvclwiLiBUaGUgZm9ybXVsYSBpczpcbiAgICAgKlxuICAgICAqICAgIGRpc3NvbHZlID0gMS4wIC0gKE4qdikoMS4wLWZhY3RvcilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX2QodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICAvLyB0aGlzIGlnbm9yZXMgdGhlIC1oYWxvIG9wdGlvbiBhcyBJIGNhbid0IGZpbmQgYW55IGRvY3VtZW50YXRpb24gb24gd2hhdFxuICAgICAgICAvLyBpdCdzIHN1cHBvc2VkIHRvIGJlLlxuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5kaXNzb2x2ZSA9IHBhcnNlRmxvYXQodG9rZW5zLnBvcCgpIHx8IFwiMFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgXCJpbGx1bVwiIHN0YXRlbWVudCBzcGVjaWZpZXMgdGhlIGlsbHVtaW5hdGlvbiBtb2RlbCB0byB1c2UgaW4gdGhlXG4gICAgICogbWF0ZXJpYWwuIElsbHVtaW5hdGlvbiBtb2RlbHMgYXJlIG1hdGhlbWF0aWNhbCBlcXVhdGlvbnMgdGhhdCByZXByZXNlbnRcbiAgICAgKiB2YXJpb3VzIG1hdGVyaWFsIGxpZ2h0aW5nIGFuZCBzaGFkaW5nIGVmZmVjdHMuXG4gICAgICpcbiAgICAgKiBUaGUgaWxsdW1pbmF0aW9uIG51bWJlciBjYW4gYmUgYSBudW1iZXIgZnJvbSAwIHRvIDEwLiBUaGUgZm9sbG93aW5nIGFyZVxuICAgICAqIHRoZSBsaXN0IG9mIGlsbHVtaW5hdGlvbiBlbnVtZXJhdGlvbnMgYW5kIHRoZWlyIHN1bW1hcmllczpcbiAgICAgKiAwLiBDb2xvciBvbiBhbmQgQW1iaWVudCBvZmZcbiAgICAgKiAxLiBDb2xvciBvbiBhbmQgQW1iaWVudCBvblxuICAgICAqIDIuIEhpZ2hsaWdodCBvblxuICAgICAqIDMuIFJlZmxlY3Rpb24gb24gYW5kIFJheSB0cmFjZSBvblxuICAgICAqIDQuIFRyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvblxuICAgICAqIDUuIFJlZmxlY3Rpb246IEZyZXNuZWwgb24gYW5kIFJheSB0cmFjZSBvblxuICAgICAqIDYuIFRyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvZmYgYW5kIFJheSB0cmFjZSBvblxuICAgICAqIDcuIFRyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXG4gICAgICogOC4gUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9mZlxuICAgICAqIDkuIFRyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvZmZcbiAgICAgKiAxMC4gQ2FzdHMgc2hhZG93cyBvbnRvIGludmlzaWJsZSBzdXJmYWNlc1xuICAgICAqXG4gICAgICogRXhhbXBsZTogXCJpbGx1bSAyXCIgdG8gc3BlY2lmeSB0aGUgXCJIaWdobGlnaHQgb25cIiBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfaWxsdW0odG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5pbGx1bWluYXRpb24gPSBwYXJzZUludCh0b2tlbnNbMF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wdGljYWwgRGVuc2l0eSAoQUtBIEluZGV4IG9mIFJlZnJhY3Rpb24pXG4gICAgICpcbiAgICAgKiBTdGF0ZW1lbnQ6IE5pIGBpbmRleGBcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IE5pIDEuMFxuICAgICAqXG4gICAgICogU3BlY2lmaWVzIHRoZSBvcHRpY2FsIGRlbnNpdHkgZm9yIHRoZSBzdXJmYWNlLiBgaW5kZXhgIGlzIHRoZSB2YWx1ZVxuICAgICAqIGZvciB0aGUgb3B0aWNhbCBkZW5zaXR5LiBUaGUgdmFsdWVzIGNhbiByYW5nZSBmcm9tIDAuMDAxIHRvIDEwLiAgQSB2YWx1ZSBvZlxuICAgICAqIDEuMCBtZWFucyB0aGF0IGxpZ2h0IGRvZXMgbm90IGJlbmQgYXMgaXQgcGFzc2VzIHRocm91Z2ggYW4gb2JqZWN0LlxuICAgICAqIEluY3JlYXNpbmcgdGhlIG9wdGljYWxfZGVuc2l0eSBpbmNyZWFzZXMgdGhlIGFtb3VudCBvZiBiZW5kaW5nLiBHbGFzcyBoYXNcbiAgICAgKiBhbiBpbmRleCBvZiByZWZyYWN0aW9uIG9mIGFib3V0IDEuNS4gVmFsdWVzIG9mIGxlc3MgdGhhbiAxLjAgcHJvZHVjZVxuICAgICAqIGJpemFycmUgcmVzdWx0cyBhbmQgYXJlIG5vdCByZWNvbW1lbmRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfTmkodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5yZWZyYWN0aW9uSW5kZXggPSBwYXJzZUZsb2F0KHRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBzcGVjdWxhciBleHBvbmVudCBmb3IgdGhlIGN1cnJlbnQgbWF0ZXJpYWwuIFRoaXMgZGVmaW5lcyB0aGVcbiAgICAgKiBmb2N1cyBvZiB0aGUgc3BlY3VsYXIgaGlnaGxpZ2h0LlxuICAgICAqXG4gICAgICogU3RhdGVtZW50OiBOcyBgZXhwb25lbnRgXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBcIk5zIDI1MFwiXG4gICAgICpcbiAgICAgKiBgZXhwb25lbnRgIGlzIHRoZSB2YWx1ZSBmb3IgdGhlIHNwZWN1bGFyIGV4cG9uZW50LiBBIGhpZ2ggZXhwb25lbnQgcmVzdWx0c1xuICAgICAqIGluIGEgdGlnaHQsIGNvbmNlbnRyYXRlZCBoaWdobGlnaHQuIE5zIFZhbHVlcyBub3JtYWxseSByYW5nZSBmcm9tIDAgdG9cbiAgICAgKiAxMDAwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAgICovXG4gICAgcGFyc2VfTnModG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50ID0gcGFyc2VJbnQodG9rZW5zWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNoYXJwbmVzcyBvZiB0aGUgcmVmbGVjdGlvbnMgZnJvbSB0aGUgbG9jYWwgcmVmbGVjdGlvbiBtYXAuXG4gICAgICpcbiAgICAgKiBTdGF0ZW1lbnQ6IHNoYXJwbmVzcyBgdmFsdWVgXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBcInNoYXJwbmVzcyAxMDBcIlxuICAgICAqXG4gICAgICogSWYgYSBtYXRlcmlhbCBkb2VzIG5vdCBoYXZlIGEgbG9jYWwgcmVmbGVjdGlvbiBtYXAgZGVmaW5lZCBpbiBpdHMgbWF0ZXJpYWxcbiAgICAgKiBkZWZpbnRpb25zLCBzaGFycG5lc3Mgd2lsbCBhcHBseSB0byB0aGUgZ2xvYmFsIHJlZmxlY3Rpb24gbWFwIGRlZmluZWQgaW5cbiAgICAgKiBQcmVWaWV3LlxuICAgICAqXG4gICAgICogYHZhbHVlYCBjYW4gYmUgYSBudW1iZXIgZnJvbSAwIHRvIDEwMDAuIFRoZSBkZWZhdWx0IGlzIDYwLiBBIGhpZ2ggdmFsdWVcbiAgICAgKiByZXN1bHRzIGluIGEgY2xlYXIgcmVmbGVjdGlvbiBvZiBvYmplY3RzIGluIHRoZSByZWZsZWN0aW9uIG1hcC5cbiAgICAgKlxuICAgICAqIFRpcDogc2hhcnBuZXNzIHZhbHVlcyBncmVhdGVyIHRoYW4gMTAwIGludHJvZHVjZSBhbGlhc2luZyBlZmZlY3RzIGluXG4gICAgICogZmxhdCBzdXJmYWNlcyB0aGF0IGFyZSB2aWV3ZWQgYXQgYSBzaGFycCBhbmdsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHBhcnNlX3NoYXJwbmVzcyh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLnNoYXJwbmVzcyA9IHBhcnNlSW50KHRva2Vuc1swXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtY2MgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWNjIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfY2ModmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5jb2xvckNvcnJlY3Rpb24gPSB2YWx1ZXNbMF0gPT0gXCJvblwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLWJsZW5kdSBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtYmxlbmR1IGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfYmxlbmR1KHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuaG9yaXpvbnRhbEJsZW5kaW5nID0gdmFsdWVzWzBdID09IFwib25cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1ibGVuZHYgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJsZW5kdiBmbGFnXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX2JsZW5kdih2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLnZlcnRpY2FsQmxlbmRpbmcgPSB2YWx1ZXNbMF0gPT0gXCJvblwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLWJvb3N0IGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1ib29zdCBmbGFnXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX2Jvb3N0KHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuYm9vc3RNaXBNYXBTaGFycG5lc3MgPSBwYXJzZUZsb2F0KHZhbHVlc1swXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtbW0gZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLW1tIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfbW0odmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5tb2RpZnlUZXh0dXJlTWFwLmJyaWdodG5lc3MgPSBwYXJzZUZsb2F0KHZhbHVlc1swXSk7XG4gICAgICAgIG9wdGlvbnMubW9kaWZ5VGV4dHVyZU1hcC5jb250cmFzdCA9IHBhcnNlRmxvYXQodmFsdWVzWzFdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYW5kIHNldHMgdGhlIC1vLCAtcywgYW5kIC10ICB1LCB2LCBhbmQgdyB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1vLCAtcywgLXQgZmxhZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gdGhlIE9iamVjdCBvZiBlaXRoZXIgdGhlIC1vLCAtcywgLXQgb3B0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBkZWZhdWx0VmFsdWUgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX29zdCh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb246IFVWVywgZGVmYXVsdFZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUgKHZhbHVlcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24udSA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICAgICAgb3B0aW9uLnYgPSBwYXJzZUZsb2F0KHZhbHVlc1sxXSk7XG4gICAgICAgIG9wdGlvbi53ID0gcGFyc2VGbG9hdCh2YWx1ZXNbMl0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLW8gZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLW8gZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9vKHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIHRoaXMucGFyc2Vfb3N0KHZhbHVlcywgb3B0aW9ucy5vZmZzZXQsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLXMgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLXMgZmxhZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwYXJzZV9zKHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIHRoaXMucGFyc2Vfb3N0KHZhbHVlcywgb3B0aW9ucy5zY2FsZSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtdCBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtdCBmbGFnXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgICAqL1xuICAgIHBhcnNlX3QodmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5wYXJzZV9vc3QodmFsdWVzLCBvcHRpb25zLnR1cmJ1bGVuY2UsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgLXRleHJlcyBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtdGV4cmVzIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfdGV4cmVzKHZhbHVlczogc3RyaW5nW10sIG9wdGlvbnM6IFRleHR1cmVNYXBEYXRhKSB7XG4gICAgICAgIG9wdGlvbnMudGV4dHVyZVJlc29sdXRpb24gPSBwYXJzZUZsb2F0KHZhbHVlc1swXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtY2xhbXAgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWNsYW1wIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfY2xhbXAodmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5jbGFtcCA9IHZhbHVlc1swXSA9PSBcIm9uXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSAtYm0gZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJtIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfYm0odmFsdWVzOiBzdHJpbmdbXSwgb3B0aW9uczogVGV4dHVyZU1hcERhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5idW1wTXVsdGlwbGllciA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIC1pbWZjaGFuIGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1pbWZjaGFuIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfaW1mY2hhbih2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLmltZkNoYW4gPSB2YWx1ZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgcmVsZWN0aW9uIG1hcHMgYW5kIGRlbm90ZXMgdGhlIHR5cGUgb2YgcmVmbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC10eXBlIGZsYWdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAgICovXG4gICAgcGFyc2VfdHlwZSh2YWx1ZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBUZXh0dXJlTWFwRGF0YSkge1xuICAgICAgICBvcHRpb25zLnJlZmxlY3Rpb25UeXBlID0gdmFsdWVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgdGV4dHVyZSdzIG9wdGlvbnMgYW5kIHJldHVybnMgYW4gb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgaW5mb1xuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBhbGwgb2YgdGhlIG9wdGlvbiB0b2tlbnMgdG8gcGFzcyB0byB0aGUgdGV4dHVyZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gYSBjb21wbGV0ZSBvYmplY3Qgb2Ygb2JqZWN0cyB0byBhcHBseSB0byB0aGUgdGV4dHVyZVxuICAgICAqL1xuICAgIHBhcnNlT3B0aW9ucyh0b2tlbnM6IHN0cmluZ1tdKTogVGV4dHVyZU1hcERhdGEge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZW1wdHlUZXh0dXJlT3B0aW9ucygpO1xuXG4gICAgICAgIGxldCBvcHRpb247XG4gICAgICAgIGxldCB2YWx1ZXM7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNUb1ZhbHVlczogeyBbazogc3RyaW5nXTogc3RyaW5nW10gfSA9IHt9O1xuXG4gICAgICAgIHRva2Vucy5yZXZlcnNlKCk7XG5cbiAgICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHRva2VuIGlzIGd1YXJhbnRlZWQgdG8gZXhpc3RzIGhlcmUsIGhlbmNlIHRoZSBleHBsaWNpdCBcImFzXCJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zLnBvcCgpIGFzIHN0cmluZztcblxuICAgICAgICAgICAgaWYgKHRva2VuLnN0YXJ0c1dpdGgoXCItXCIpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gdG9rZW4uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNUb1ZhbHVlc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNUb1ZhbHVlc1tvcHRpb25dLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChvcHRpb24gaW4gb3B0aW9uc1RvVmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnNUb1ZhbHVlcy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZXMgPSBvcHRpb25zVG9WYWx1ZXNbb3B0aW9uXTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbk1ldGhvZCA9ICh0aGlzIGFzIGFueSlbYHBhcnNlXyR7b3B0aW9ufWBdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbk1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbk1ldGhvZC5iaW5kKHRoaXMpKHZhbHVlcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdpdmVuIHRleHR1cmUgbWFwIGxpbmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGFsbCBvZiB0aGUgdG9rZW5zIHJlcHJlc2VudGluZyB0aGUgdGV4dHVyZVxuICAgICAqIEByZXR1cm4gYSBjb21wbGV0ZSBvYmplY3Qgb2Ygb2JqZWN0cyB0byBhcHBseSB0byB0aGUgdGV4dHVyZVxuICAgICAqL1xuICAgIHBhcnNlTWFwKHRva2Vuczogc3RyaW5nW10pOiBUZXh0dXJlTWFwRGF0YSB7XG4gICAgICAgIC8vIGFjY29yZGluZyB0byB3aWtpcGVkaWE6XG4gICAgICAgIC8vIChodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XYXZlZnJvbnRfLm9ial9maWxlI1ZlbmRvcl9zcGVjaWZpY19hbHRlcmF0aW9ucylcbiAgICAgICAgLy8gdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHZlbmRvciB0aGF0IHBsYWNlcyB0aGUgZmlsZW5hbWUgYmVmb3JlIHRoZSBvcHRpb25zXG4gICAgICAgIC8vIHJhdGhlciB0aGFuIGFmdGVyICh3aGljaCBpcyB0byBzcGVjKS4gQWxsIG9wdGlvbnMgc3RhcnQgd2l0aCBhICctJ1xuICAgICAgICAvLyBzbyBpZiB0aGUgZmlyc3QgdG9rZW4gZG9lc24ndCBzdGFydCB3aXRoIGEgJy0nLCB3ZSdyZSBnb2luZyB0byBhc3N1bWVcbiAgICAgICAgLy8gaXQncyB0aGUgbmFtZSBvZiB0aGUgbWFwIGZpbGUuXG4gICAgICAgIGxldCBvcHRpb25zU3RyaW5nO1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSBcIlwiO1xuICAgICAgICBpZiAoIXRva2Vuc1swXS5zdGFydHNXaXRoKFwiLVwiKSkge1xuICAgICAgICAgICAgW2ZpbGVuYW1lLCAuLi5vcHRpb25zU3RyaW5nXSA9IHRva2VucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGVuYW1lID0gdG9rZW5zLnBvcCgpIGFzIHN0cmluZztcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSB0b2tlbnM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wYXJzZU9wdGlvbnMob3B0aW9uc1N0cmluZyk7XG4gICAgICAgIG9wdGlvbnMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGFtYmllbnQgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9LYSBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9LYSh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcEFtYmllbnQgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBkaWZmdXNlIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfS2QgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9tYXBfS2QodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBEaWZmdXNlID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgc3BlY3VsYXIgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9LcyBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9Lcyh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcFNwZWN1bGFyID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZW1pc3NpdmUgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9LZSBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9LZSh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcEVtaXNzaXZlID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgc3BlY3VsYXIgZXhwb25lbnQgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9OcyBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9Ocyh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcFNwZWN1bGFyRXhwb25lbnQgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBkaXNzb2x2ZSBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX2QgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9tYXBfZCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcERpc3NvbHZlID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYW50aS1hbGlhc2luZyBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX2FhdCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX21hcF9hYXQodG9rZW5zOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5hbnRpQWxpYXNpbmcgPSB0b2tlbnNbMF0gPT0gXCJvblwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYnVtcCBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX2J1bXAgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9tYXBfYnVtcCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcEJ1bXAgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBidW1wIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBidW1wIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfYnVtcCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMucGFyc2VfbWFwX2J1bXAodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGRpc3AgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIGRpc3AgZGlyZWNpdmVcbiAgICAgKi9cbiAgICBwYXJzZV9kaXNwKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRGlzcGxhY2VtZW50ID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZGVjYWwgbWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9kZWNhbCBkaXJlY2l2ZVxuICAgICAqL1xuICAgIHBhcnNlX2RlY2FsKHRva2Vuczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRGVjYWwgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSByZWZsIG1hcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSByZWZsIGRpcmVjaXZlXG4gICAgICovXG4gICAgcGFyc2VfcmVmbCh0b2tlbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcFJlZmxlY3Rpb25zLnB1c2godGhpcy5wYXJzZU1hcCh0b2tlbnMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIE1UTCBmaWxlLlxuICAgICAqXG4gICAgICogSXRlcmF0ZXMgbGluZSBieSBsaW5lIHBhcnNpbmcgZWFjaCBNVEwgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBleHBlY3RzIHRoZSBmaXJzdCB0b2tlbiBpbiB0aGUgbGluZVxuICAgICAqIHRvIGJlIGEgdmFsaWQgTVRMIGRpcmVjdGl2ZS4gVGhhdCB0b2tlbiBpcyB0aGVuIHVzZWRcbiAgICAgKiB0byB0cnkgYW5kIHJ1biBhIG1ldGhvZCBvbiB0aGlzIGNsYXNzLiBwYXJzZV9bZGlyZWN0aXZlXVxuICAgICAqIEUuZy4sIHRoZSBgbmV3bXRsYCBkaXJlY3RpdmUgd291bGQgdHJ5IHRvIGNhbGwgdGhlIG1ldGhvZFxuICAgICAqIHBhcnNlX25ld210bC4gRWFjaCBwYXJzaW5nIGZ1bmN0aW9uIHRha2VzIGluIHRoZSByZW1haW5pbmdcbiAgICAgKiBsaXN0IG9mIHRva2VucyBhbmQgdXBkYXRlcyB0aGUgY3VycmVudE1hdGVyaWFsIGNsYXNzIHdpdGhcbiAgICAgKiB0aGUgYXR0cmlidXRlcyBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSB0aGlzLmRhdGEuc3BsaXQoL1xccj9cXG4vKTtcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCFsaW5lIHx8IGxpbmUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGl2ZSwgLi4udG9rZW5zXSA9IGxpbmUuc3BsaXQoL1xccy8pO1xuXG4gICAgICAgICAgICBjb25zdCBwYXJzZU1ldGhvZCA9ICh0aGlzIGFzIGFueSlbYHBhcnNlXyR7ZGlyZWN0aXZlfWBdO1xuXG4gICAgICAgICAgICBpZiAoIXBhcnNlTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBEb24ndCBrbm93IGhvdyB0byBwYXJzZSB0aGUgZGlyZWN0aXZlOiBcIiR7ZGlyZWN0aXZlfVwiYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQYXJzaW5nIFwiJHtkaXJlY3RpdmV9XCIgd2l0aCB0b2tlbnM6ICR7dG9rZW5zfWApO1xuICAgICAgICAgICAgcGFyc2VNZXRob2QuYmluZCh0aGlzKSh0b2tlbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29tZSBjbGVhbnVwLiBUaGVzZSBkb24ndCBuZWVkIHRvIGJlIGV4cG9zZWQgYXMgcHVibGljIGRhdGEuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuY3VycmVudE1hdGVyaWFsID0gU0VOVElORUxfTUFURVJJQUw7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UqL1xufVxuXG5mdW5jdGlvbiBlbXB0eVRleHR1cmVPcHRpb25zKCk6IFRleHR1cmVNYXBEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xvckNvcnJlY3Rpb246IGZhbHNlLFxuICAgICAgICBob3Jpem9udGFsQmxlbmRpbmc6IHRydWUsXG4gICAgICAgIHZlcnRpY2FsQmxlbmRpbmc6IHRydWUsXG4gICAgICAgIGJvb3N0TWlwTWFwU2hhcnBuZXNzOiAwLFxuICAgICAgICBtb2RpZnlUZXh0dXJlTWFwOiB7XG4gICAgICAgICAgICBicmlnaHRuZXNzOiAwLFxuICAgICAgICAgICAgY29udHJhc3Q6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldDogeyB1OiAwLCB2OiAwLCB3OiAwIH0sXG4gICAgICAgIHNjYWxlOiB7IHU6IDEsIHY6IDEsIHc6IDEgfSxcbiAgICAgICAgdHVyYnVsZW5jZTogeyB1OiAwLCB2OiAwLCB3OiAwIH0sXG4gICAgICAgIGNsYW1wOiBmYWxzZSxcbiAgICAgICAgdGV4dHVyZVJlc29sdXRpb246IG51bGwsXG4gICAgICAgIGJ1bXBNdWx0aXBsaWVyOiAxLFxuICAgICAgICBpbWZDaGFuOiBudWxsLFxuICAgICAgICBmaWxlbmFtZTogXCJcIixcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXRlcmlhbCwgTWF0ZXJpYWxMaWJyYXJ5IH0gZnJvbSBcIi4vbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXNoT3B0aW9ucyB7XG4gICAgZW5hYmxlV1RleHR1cmVDb29yZD86IGJvb2xlYW47XG4gICAgY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50cz86IGJvb2xlYW47XG4gICAgbWF0ZXJpYWxzPzogeyBba2V5OiBzdHJpbmddOiBNYXRlcmlhbCB9O1xufVxuXG5pbnRlcmZhY2UgVW5wYWNrZWRBdHRycyB7XG4gICAgdmVydHM6IG51bWJlcltdO1xuICAgIG5vcm1zOiBudW1iZXJbXTtcbiAgICB0ZXh0dXJlczogbnVtYmVyW107XG4gICAgaGFzaGluZGljZXM6IHsgW2s6IHN0cmluZ106IG51bWJlciB9O1xuICAgIGluZGljZXM6IG51bWJlcltdW107XG4gICAgbWF0ZXJpYWxJbmRpY2VzOiBudW1iZXJbXTtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsTmFtZVRvSW5kZXgge1xuICAgIFtrOiBzdHJpbmddOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5kZXhUb01hdGVyaWFsIHtcbiAgICBbazogbnVtYmVyXTogTWF0ZXJpYWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlCdWZmZXJXaXRoSXRlbVNpemUgZXh0ZW5kcyBBcnJheUJ1ZmZlciB7XG4gICAgbnVtSXRlbXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVWludDE2QXJyYXlXaXRoSXRlbVNpemUgZXh0ZW5kcyBVaW50MTZBcnJheSB7XG4gICAgbnVtSXRlbXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIG1haW4gTWVzaCBjbGFzcy4gVGhlIGNvbnN0cnVjdG9yIHdpbGwgcGFyc2UgdGhyb3VnaCB0aGUgT0JKIGZpbGUgZGF0YVxuICogYW5kIGNvbGxlY3QgdGhlIHZlcnRleCwgdmVydGV4IG5vcm1hbCwgdGV4dHVyZSwgYW5kIGZhY2UgaW5mb3JtYXRpb24uIFRoaXNcbiAqIGluZm9ybWF0aW9uIGNhbiB0aGVuIGJlIHVzZWQgbGF0ZXIgb24gd2hlbiBjcmVhdGluZyB5b3VyIFZCT3MuIFNlZVxuICogT0JKLmluaXRNZXNoQnVmZmVycyBmb3IgYW4gZXhhbXBsZSBvZiBob3cgdG8gdXNlIHRoZSBuZXdseSBjcmVhdGVkIE1lc2hcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzaCB7XG4gICAgcHVibGljIHZlcnRpY2VzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgdmVydGV4Tm9ybWFsczogbnVtYmVyW107XG4gICAgcHVibGljIHRleHR1cmVzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgaW5kaWNlczogbnVtYmVyW107XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHZlcnRleE1hdGVyaWFsSW5kaWNlczogbnVtYmVyW107XG4gICAgcHVibGljIGluZGljZXNQZXJNYXRlcmlhbDogbnVtYmVyW11bXSA9IFtdO1xuICAgIHB1YmxpYyBtYXRlcmlhbE5hbWVzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgbWF0ZXJpYWxJbmRpY2VzOiBNYXRlcmlhbE5hbWVUb0luZGV4O1xuICAgIHB1YmxpYyBtYXRlcmlhbHNCeUluZGV4OiBJbmRleFRvTWF0ZXJpYWwgPSB7fTtcbiAgICBwdWJsaWMgdGFuZ2VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGJpdGFuZ2VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIHRleHR1cmVTdHJpZGU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIE1lc2hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0RGF0YSAtIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFuIE9CSiBmaWxlIHdpdGhcbiAgICAgKiAgICAgbmV3bGluZXMgcHJlc2VydmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gYSBKUyBvYmplY3QgY29udGFpbmluZyB2YWxpZCBvcHRpb25zLiBTZWUgY2xhc3NcbiAgICAgKiAgICAgZG9jdW1lbnRhdGlvbiBmb3Igb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCAtIFRleHR1cmUgY29vcmRpbmF0ZXMgY2FuIGhhdmVcbiAgICAgKiAgICAgYW4gb3B0aW9uYWwgXCJ3XCIgY29vcmRpbmF0ZSBhZnRlciB0aGUgdSBhbmQgdiBjb29yZGluYXRlcy4gVGhpcyBleHRyYVxuICAgICAqICAgICB2YWx1ZSBjYW4gYmUgdXNlZCBpbiBvcmRlciB0byBwZXJmb3JtIGZhbmN5IHRyYW5zZm9ybWF0aW9ucyBvbiB0aGVcbiAgICAgKiAgICAgdGV4dHVyZXMgdGhlbXNlbHZlcy4gRGVmYXVsdCBpcyB0byB0cnVuY2F0ZSB0byBvbmx5IHRoZSB1IGFuIHZcbiAgICAgKiAgICAgY29vcmRpbmF0ZXMuIFBhc3NpbmcgdHJ1ZSB3aWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDAgaW4gdGhlXG4gICAgICogICAgIGV2ZW50IHRoYXQgYW55IG9yIGFsbCB0ZXh0dXJlIGNvb3JkaW5hdGVzIGRvbid0IHByb3ZpZGUgYSB3IHZhbHVlLlxuICAgICAqICAgICBBbHdheXMgdXNlIHRoZSB0ZXh0dXJlU3RyaWRlIGF0dHJpYnV0ZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgdGhlXG4gICAgICogICAgIHN0cmlkZSBsZW5ndGggb2YgdGhlIHRleHR1cmUgY29vcmRpbmF0ZXMgd2hlbiByZW5kZXJpbmcgdGhlIGVsZW1lbnRcbiAgICAgKiAgICAgYXJyYXkuXG4gICAgICogQHBhcmFtIHtib29sfSBvcHRpb25zLmNhbGNUYW5nZW50c0FuZEJpdGFuZ2VudHMgLSBDYWxjdWxhdGUgdGhlIHRhbmdlbnRzXG4gICAgICogICAgIGFuZCBiaXRhbmdlbnRzIHdoZW4gbG9hZGluZyBvZiB0aGUgT0JKIGlzIGNvbXBsZXRlZC4gVGhpcyBhZGRzIHR3byBuZXdcbiAgICAgKiAgICAgYXR0cmlidXRlcyB0byB0aGUgTWVzaCBpbnN0YW5jZTogYHRhbmdlbnRzYCBhbmQgYGJpdGFuZ2VudHNgLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdERhdGE6IHN0cmluZywgb3B0aW9ucz86IE1lc2hPcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRpb25zLm1hdGVyaWFscyA9IG9wdGlvbnMubWF0ZXJpYWxzIHx8IHt9O1xuICAgICAgICBvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQgPSAhIW9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZDtcblxuICAgICAgICAvLyB0aGUgbGlzdCBvZiB1bmlxdWUgdmVydGV4LCBub3JtYWwsIHRleHR1cmUsIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy52ZXJ0ZXhOb3JtYWxzID0gW107XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlIGluZGljaWVzIHRvIGRyYXcgdGhlIGZhY2VzXG4gICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnRleHR1cmVTdHJpZGUgPSBvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQgPyAzIDogMjtcblxuICAgICAgICAvKlxuICAgICAgICBUaGUgT0JKIGZpbGUgZm9ybWF0IGRvZXMgYSBzb3J0IG9mIGNvbXByZXNzaW9uIHdoZW4gc2F2aW5nIGEgbW9kZWwgaW4gYVxuICAgICAgICBwcm9ncmFtIGxpa2UgQmxlbmRlci4gVGhlcmUgYXJlIGF0IGxlYXN0IDMgc2VjdGlvbnMgKDQgaW5jbHVkaW5nIHRleHR1cmVzKVxuICAgICAgICB3aXRoaW4gdGhlIGZpbGUuIEVhY2ggbGluZSBpbiBhIHNlY3Rpb24gYmVnaW5zIHdpdGggdGhlIHNhbWUgc3RyaW5nOlxuICAgICAgICAgICogJ3YnOiBpbmRpY2F0ZXMgdmVydGV4IHNlY3Rpb25cbiAgICAgICAgICAqICd2bic6IGluZGljYXRlcyB2ZXJ0ZXggbm9ybWFsIHNlY3Rpb25cbiAgICAgICAgICAqICdmJzogaW5kaWNhdGVzIHRoZSBmYWNlcyBzZWN0aW9uXG4gICAgICAgICAgKiAndnQnOiBpbmRpY2F0ZXMgdmVydGV4IHRleHR1cmUgc2VjdGlvbiAoaWYgdGV4dHVyZXMgd2VyZSB1c2VkIG9uIHRoZSBtb2RlbClcbiAgICAgICAgRWFjaCBvZiB0aGUgYWJvdmUgc2VjdGlvbnMgKGV4Y2VwdCBmb3IgdGhlIGZhY2VzIHNlY3Rpb24pIGlzIGEgbGlzdC9zZXQgb2ZcbiAgICAgICAgdW5pcXVlIHZlcnRpY2VzLlxuXG4gICAgICAgIEVhY2ggbGluZSBvZiB0aGUgZmFjZXMgc2VjdGlvbiBjb250YWlucyBhIGxpc3Qgb2ZcbiAgICAgICAgKHZlcnRleCwgW3RleHR1cmVdLCBub3JtYWwpIGdyb3Vwcy5cblxuICAgICAgICAqKk5vdGU6KiogVGhlIGZvbGxvd2luZyBkb2N1bWVudGF0aW9uIHdpbGwgdXNlIGEgY2FwaXRhbCBcIlZcIiBWZXJ0ZXggdG9cbiAgICAgICAgZGVub3RlIHRoZSBhYm92ZSAodmVydGV4LCBbdGV4dHVyZV0sIG5vcm1hbCkgZ3JvdXBzIHdoZXJlYXMgYSBsb3dlcmNhc2VcbiAgICAgICAgXCJ2XCIgdmVydGV4IGlzIHVzZWQgdG8gZGVub3RlIGFuIFgsIFksIFogY29vcmRpbmF0ZS5cblxuICAgICAgICBTb21lIGV4YW1wbGVzOlxuICAgICAgICAgICAgLy8gdGhlIHRleHR1cmUgaW5kZXggaXMgb3B0aW9uYWwsIGJvdGggZm9ybWF0cyBhcmUgcG9zc2libGUgZm9yIG1vZGVsc1xuICAgICAgICAgICAgLy8gd2l0aG91dCBhIHRleHR1cmUgYXBwbGllZFxuICAgICAgICAgICAgZiAxLzI1IDE4LzQ2IDEyLzMxXG4gICAgICAgICAgICBmIDEvLzI1IDE4Ly80NiAxMi8vMzFcblxuICAgICAgICAgICAgLy8gQSAzIHZlcnRleCBmYWNlIHdpdGggdGV4dHVyZSBpbmRpY2VzXG4gICAgICAgICAgICBmIDE2LzkyLzExIDE0LzEwMS8yMiAxLzY5LzFcblxuICAgICAgICAgICAgLy8gQSA0IHZlcnRleCBmYWNlXG4gICAgICAgICAgICBmIDE2LzkyLzExIDQwLzEwOS80MCAzOC8xMTQvMzggMTQvMTAxLzIyXG5cbiAgICAgICAgVGhlIGZpcnN0IHR3byBsaW5lcyBhcmUgZXhhbXBsZXMgb2YgYSAzIHZlcnRleCBmYWNlIHdpdGhvdXQgYSB0ZXh0dXJlIGFwcGxpZWQuXG4gICAgICAgIFRoZSBzZWNvbmQgaXMgYW4gZXhhbXBsZSBvZiBhIDMgdmVydGV4IGZhY2Ugd2l0aCBhIHRleHR1cmUgYXBwbGllZC5cbiAgICAgICAgVGhlIHRoaXJkIGlzIGFuIGV4YW1wbGUgb2YgYSA0IHZlcnRleCBmYWNlLiBOb3RlOiBhIGZhY2UgY2FuIGNvbnRhaW4gTlxuICAgICAgICBudW1iZXIgb2YgdmVydGljZXMuXG5cbiAgICAgICAgRWFjaCBudW1iZXIgdGhhdCBhcHBlYXJzIGluIG9uZSBvZiB0aGUgZ3JvdXBzIGlzIGEgMS1iYXNlZCBpbmRleFxuICAgICAgICBjb3JyZXNwb25kaW5nIHRvIGFuIGl0ZW0gZnJvbSB0aGUgb3RoZXIgc2VjdGlvbnMgKG1lYW5pbmcgdGhhdCBpbmRleGluZ1xuICAgICAgICBzdGFydHMgYXQgb25lIGFuZCAqbm90KiB6ZXJvKS5cblxuICAgICAgICBGb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIGBmIDE2LzkyLzExYCBpcyBzYXlpbmcgdG9cbiAgICAgICAgICAgICAgLSB0YWtlIHRoZSAxNnRoIGVsZW1lbnQgZnJvbSB0aGUgW3ZdIHZlcnRleCBhcnJheVxuICAgICAgICAgICAgICAtIHRha2UgdGhlIDkybmQgZWxlbWVudCBmcm9tIHRoZSBbdnRdIHRleHR1cmUgYXJyYXlcbiAgICAgICAgICAgICAgLSB0YWtlIHRoZSAxMXRoIGVsZW1lbnQgZnJvbSB0aGUgW3ZuXSBub3JtYWwgYXJyYXlcbiAgICAgICAgICAgIGFuZCB0b2dldGhlciB0aGV5IG1ha2UgYSB1bmlxdWUgdmVydGV4LlxuICAgICAgICBVc2luZyBhbGwgMysgdW5pcXVlIFZlcnRpY2VzIGZyb20gdGhlIGZhY2UgbGluZSB3aWxsIHByb2R1Y2UgYSBwb2x5Z29uLlxuXG4gICAgICAgIE5vdywgeW91IGNvdWxkIGp1c3QgZ28gdGhyb3VnaCB0aGUgT0JKIGZpbGUgYW5kIGNyZWF0ZSBhIG5ldyB2ZXJ0ZXggZm9yXG4gICAgICAgIGVhY2ggZmFjZSBsaW5lIGFuZCBXZWJHTCB3aWxsIGRyYXcgd2hhdCBhcHBlYXJzIHRvIGJlIHRoZSBzYW1lIG1vZGVsLlxuICAgICAgICBIb3dldmVyLCB2ZXJ0aWNlcyB3aWxsIGJlIG92ZXJsYXBwZWQgYW5kIGR1cGxpY2F0ZWQgYWxsIG92ZXIgdGhlIHBsYWNlLlxuXG4gICAgICAgIENvbnNpZGVyIGEgY3ViZSBpbiAzRCBzcGFjZSBjZW50ZXJlZCBhYm91dCB0aGUgb3JpZ2luIGFuZCBlYWNoIHNpZGUgaXNcbiAgICAgICAgMiB1bml0cyBsb25nLiBUaGUgZnJvbnQgZmFjZSAod2l0aCB0aGUgcG9zaXRpdmUgWi1heGlzIHBvaW50aW5nIHRvd2FyZHNcbiAgICAgICAgeW91KSB3b3VsZCBoYXZlIGEgVG9wIFJpZ2h0IHZlcnRleCAobG9va2luZyBvcnRob2dvbmFsIHRvIGl0cyBub3JtYWwpXG4gICAgICAgIG1hcHBlZCBhdCAoMSwxLDEpIFRoZSByaWdodCBmYWNlIHdvdWxkIGhhdmUgYSBUb3AgTGVmdCB2ZXJ0ZXggKGxvb2tpbmdcbiAgICAgICAgb3J0aG9nb25hbCB0byBpdHMgbm9ybWFsKSBhdCAoMSwxLDEpIGFuZCB0aGUgdG9wIGZhY2Ugd291bGQgaGF2ZSBhIEJvdHRvbVxuICAgICAgICBSaWdodCB2ZXJ0ZXggKGxvb2tpbmcgb3J0aG9nb25hbCB0byBpdHMgbm9ybWFsKSBhdCAoMSwxLDEpLiBFYWNoIGZhY2VcbiAgICAgICAgaGFzIGEgdmVydGV4IGF0IHRoZSBzYW1lIGNvb3JkaW5hdGVzLCBob3dldmVyLCB0aHJlZSBkaXN0aW5jdCB2ZXJ0aWNlc1xuICAgICAgICB3aWxsIGJlIGRyYXduIGF0IHRoZSBzYW1lIHNwb3QuXG5cbiAgICAgICAgVG8gc29sdmUgdGhlIGlzc3VlIG9mIGR1cGxpY2F0ZSBWZXJ0aWNlcyAodGhlIGAodmVydGV4LCBbdGV4dHVyZV0sIG5vcm1hbClgXG4gICAgICAgIGdyb3VwcyksIHdoaWxlIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBmYWNlIGxpbmVzLCB3aGVuIGEgZ3JvdXAgaXMgZW5jb3VudGVyZWRcbiAgICAgICAgdGhlIHdob2xlIGdyb3VwIHN0cmluZyAoJzE2LzkyLzExJykgaXMgY2hlY2tlZCB0byBzZWUgaWYgaXQgZXhpc3RzIGluIHRoZVxuICAgICAgICBwYWNrZWQuaGFzaGluZGljZXMgb2JqZWN0LCBhbmQgaWYgaXQgZG9lc24ndCwgdGhlIGluZGljZXMgaXQgc3BlY2lmaWVzXG4gICAgICAgIGFyZSB1c2VkIHRvIGxvb2sgdXAgZWFjaCBhdHRyaWJ1dGUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIGFycmF5c1xuICAgICAgICBhbHJlYWR5IGNyZWF0ZWQuIFRoZSB2YWx1ZXMgYXJlIHRoZW4gY29waWVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIHVucGFja2VkXG4gICAgICAgIGFycmF5IChmbGF0dGVuZWQgdG8gcGxheSBuaWNlIHdpdGggV2ViR0wncyBFTEVNRU5UX0FSUkFZX0JVRkZFUiBpbmRleGluZyksXG4gICAgICAgIHRoZSBncm91cCBzdHJpbmcgaXMgYWRkZWQgdG8gdGhlIGhhc2hpbmRpY2VzIHNldCBhbmQgdGhlIGN1cnJlbnQgdW5wYWNrZWRcbiAgICAgICAgaW5kZXggaXMgdXNlZCBhcyB0aGlzIGhhc2hpbmRpY2VzIHZhbHVlIHNvIHRoYXQgdGhlIGdyb3VwIG9mIGVsZW1lbnRzIGNhblxuICAgICAgICBiZSByZXVzZWQuIFRoZSB1bnBhY2tlZCBpbmRleCBpcyBpbmNyZW1lbnRlZC4gSWYgdGhlIGdyb3VwIHN0cmluZyBhbHJlYWR5XG4gICAgICAgIGV4aXN0cyBpbiB0aGUgaGFzaGluZGljZXMgb2JqZWN0LCBpdHMgY29ycmVzcG9uZGluZyB2YWx1ZSBpcyB0aGUgaW5kZXggb2ZcbiAgICAgICAgdGhhdCBncm91cCBhbmQgaXMgYXBwZW5kZWQgdG8gdGhlIHVucGFja2VkIGluZGljZXMgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgICAgY29uc3QgdmVydHMgPSBbXTtcbiAgICAgICAgY29uc3QgdmVydE5vcm1hbHMgPSBbXTtcbiAgICAgICAgY29uc3QgdGV4dHVyZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lc0J5SW5kZXggPSBbXTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRpY2VzQnlOYW1lOiBNYXRlcmlhbE5hbWVUb0luZGV4ID0ge307XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdCBtYXRlcmlhbCB3ZSd2ZSBzZWVuIGxhc3RcbiAgICAgICAgbGV0IGN1cnJlbnRNYXRlcmlhbEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBjdXJyZW50T2JqZWN0QnlNYXRlcmlhbEluZGV4ID0gMDtcbiAgICAgICAgLy8gdW5wYWNraW5nIHN0dWZmXG4gICAgICAgIGNvbnN0IHVucGFja2VkOiBVbnBhY2tlZEF0dHJzID0ge1xuICAgICAgICAgICAgdmVydHM6IFtdLFxuICAgICAgICAgICAgbm9ybXM6IFtdLFxuICAgICAgICAgICAgdGV4dHVyZXM6IFtdLFxuICAgICAgICAgICAgaGFzaGluZGljZXM6IHt9LFxuICAgICAgICAgICAgaW5kaWNlczogW1tdXSxcbiAgICAgICAgICAgIG1hdGVyaWFsSW5kaWNlczogW10sXG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBWRVJURVhfUkUgPSAvXnZcXHMvO1xuICAgICAgICBjb25zdCBOT1JNQUxfUkUgPSAvXnZuXFxzLztcbiAgICAgICAgY29uc3QgVEVYVFVSRV9SRSA9IC9ednRcXHMvO1xuICAgICAgICBjb25zdCBGQUNFX1JFID0gL15mXFxzLztcbiAgICAgICAgY29uc3QgV0hJVEVTUEFDRV9SRSA9IC9cXHMrLztcbiAgICAgICAgY29uc3QgVVNFX01BVEVSSUFMX1JFID0gL151c2VtdGwvO1xuXG4gICAgICAgIC8vIGFycmF5IG9mIGxpbmVzIHNlcGFyYXRlZCBieSB0aGUgbmV3bGluZVxuICAgICAgICBjb25zdCBsaW5lcyA9IG9iamVjdERhdGEuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCFsaW5lIHx8IGxpbmUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbGluZS5zcGxpdChXSElURVNQQUNFX1JFKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmIChWRVJURVhfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSB2ZXJ0ZXhcbiAgICAgICAgICAgICAgICB2ZXJ0cy5wdXNoKC4uLmVsZW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTk9STUFMX1JFLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdmVydGV4IG5vcm1hbFxuICAgICAgICAgICAgICAgIHZlcnROb3JtYWxzLnB1c2goLi4uZWxlbWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChURVhUVVJFX1JFLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gZWxlbWVudHM7XG4gICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCwgdGhlIGxvYWRlciB3aWxsIG9ubHkgbG9vayBhdCB0aGUgVSBhbmQgVlxuICAgICAgICAgICAgICAgIC8vIGNvb3JkaW5hdGVzIG9mIHRoZSB2dCBkZWNsYXJhdGlvbi4gU28sIHRoaXMgdHJ1bmNhdGVzIHRoZVxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRvIG9ubHkgdGhvc2UgMiB2YWx1ZXMuIElmIFcgdGV4dHVyZSBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBpcyBlbmFibGVkLCB0aGVuIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGUgaXNcbiAgICAgICAgICAgICAgICAvLyBleHBlY3RlZCB0byBoYXZlIHRocmVlIHZhbHVlcyBpbiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMiAmJiAhb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IGVsZW1lbnRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyICYmIG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBmb3Igc29tZSByZWFzb24gVyB0ZXh0dXJlIGNvb3JkaW5hdGUgc3VwcG9ydCBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBvbmx5IHRoZSBVIGFuZCBWIGNvb3JkaW5hdGVzIGFyZSBnaXZlbiwgdGhlbiB3ZSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgb2YgMCBzbyB0aGF0IHRoZSBzdHJpZGUgbGVuZ3RoIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgdGV4dHVyZXMgYXJlIHVucGFja2VkIGJlbG93LlxuICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaChcIjBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2goLi4uY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVVNFX01BVEVSSUFMX1JFLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBlbGVtZW50c1swXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBldmVyIHNlZW4gaXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKCEobWF0ZXJpYWxOYW1lIGluIG1hdGVyaWFsSW5kaWNlc0J5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3IG1hdGVyaWFsIHdlJ3ZlIG5ldmVyIHNlZW5cbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxOYW1lc0J5SW5kZXgucHVzaChtYXRlcmlhbE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbEluZGljZXNCeU5hbWVbbWF0ZXJpYWxOYW1lXSA9IG1hdGVyaWFsTmFtZXNCeUluZGV4Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIHB1c2ggbmV3IGFycmF5IGludG8gaW5kaWNlc1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGNvbnRhaW5zIGFuIGFycmF5IGF0IGluZGV4IHplcm8sIGRvbid0IGFkZFxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxJbmRpY2VzQnlOYW1lW21hdGVyaWFsTmFtZV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5pbmRpY2VzLnB1c2goW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgbWF0ZXJpYWwgaW5kZXhcbiAgICAgICAgICAgICAgICBjdXJyZW50TWF0ZXJpYWxJbmRleCA9IG1hdGVyaWFsSW5kaWNlc0J5TmFtZVttYXRlcmlhbE5hbWVdO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJyZW50IGluZGV4IGFycmF5XG4gICAgICAgICAgICAgICAgY3VycmVudE9iamVjdEJ5TWF0ZXJpYWxJbmRleCA9IGN1cnJlbnRNYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChGQUNFX1JFLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgZmFjZVxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgc3BsaXQgdGhpcyBmYWNlIGludG8gYW4gYXJyYXkgb2YgVmVydGV4IGdyb3Vwc1xuICAgICAgICAgICAgICAgIGZvciBleGFtcGxlOlxuICAgICAgICAgICAgICAgICAgIGYgMTYvOTIvMTEgMTQvMTAxLzIyIDEvNjkvMVxuICAgICAgICAgICAgICAgIGJlY29tZXM6XG4gICAgICAgICAgICAgICAgICBbJzE2LzkyLzExJywgJzE0LzEwMS8yMicsICcxLzY5LzEnXTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGxldCBxdWFkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGVsZUxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaiA8IGVsZUxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWFuZ3VsYXRpbmcgcXVhZHNcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVhZDogJ2YgdjAvdDAvdm4wIHYxL3QxL3ZuMSB2Mi90Mi92bjIgdjMvdDMvdm4zLydcbiAgICAgICAgICAgICAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0cmlhbmdsZXM6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgJ2YgdjAvdDAvdm4wIHYxL3QxL3ZuMSB2Mi90Mi92bjInXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgJ2YgdjIvdDIvdm4yIHYzL3QzL3ZuMyB2MC90MC92bjAnXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAzICYmICFxdWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdjIvdDIvdm4yIGluIGFnYWluIGJlZm9yZSBjb250aW51aW5nIHRvIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaDAgPSBlbGVtZW50c1swXSArIFwiLFwiICsgY3VycmVudE1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBlbGVtZW50c1tqXSArIFwiLFwiICsgY3VycmVudE1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoIGluIHVucGFja2VkLmhhc2hpbmRpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5pbmRpY2VzW2N1cnJlbnRPYmplY3RCeU1hdGVyaWFsSW5kZXhdLnB1c2godW5wYWNrZWQuaGFzaGluZGljZXNbaGFzaF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggZWxlbWVudCBvZiB0aGUgZmFjZSBsaW5lIGFycmF5IGlzIGEgVmVydGV4IHdoaWNoIGhhcyBpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgZGVsaW1pdGVkIGJ5IGEgZm9yd2FyZCBzbGFzaC4gVGhpcyB3aWxsIHNlcGFyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoIGF0dHJpYnV0ZSBpbnRvIGFub3RoZXIgYXJyYXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzE5LzkyLzExJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVjb21lczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXggPSBbJzE5JywgJzkyJywgJzExJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnRleFswXSBpcyB0aGUgdmVydGV4IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVydGV4WzFdIGlzIHRoZSB0ZXh0dXJlIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVydGV4WzJdIGlzIHRoZSBub3JtYWwgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICBUaGluayBvZiBmYWNlcyBoYXZpbmcgVmVydGljZXMgd2hpY2ggYXJlIGNvbXByaXNlZCBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIGxvY2F0aW9uICh2KSwgdGV4dHVyZSAodnQpLCBhbmQgbm9ybWFsICh2bikuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IGVsZW1lbnRzW2pdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgZm9yIGZhY2VzIHRvIG9ubHkgc3BlY2lmeSB0aGUgdmVydGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIG5vcm1hbC4gSW4gdGhpcyBjYXNlLCB2ZXJ0ZXggd2lsbCBvbmx5IGhhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgbGVuZ3RoIG9mIDIgYW5kIG5vdCAzIGFuZCB0aGUgbm9ybWFsIHdpbGwgYmUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgaXRlbSBpbiB0aGUgbGlzdCB3aXRoIGFuIGluZGV4IG9mIDEuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxJbmRleCA9IHZlcnRleC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdmVydHMsIHRleHR1cmVzLCBhbmQgdmVydE5vcm1hbHMgYXJyYXlzIGVhY2ggY29udGFpbiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmQgYXJyYXkgb2YgY29vcmRpbmF0ZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIGl0IGdldHMgY29uZnVzaW5nIGJ5IHJlZmVycmluZyB0byBWZXJ0ZXggYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggKGJvdGggYXJlIGRpZmZlcmVudCBpbiBteSBkZXNjcmlwdGlvbnMpIEkgd2lsbCBleHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2hhdCdzIGdvaW5nIG9uIHVzaW5nIHRoZSB2ZXJ0ZXhOb3JtYWxzIGFycmF5OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4WzJdIHdpbGwgY29udGFpbiB0aGUgb25lLWJhc2VkIGluZGV4IG9mIHRoZSB2ZXJ0ZXhOb3JtYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiAodm4pLiBPbmUgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgaW5kZXggbnVtYmVyIHRvIHBsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICBuaWNlIHdpdGggamF2YXNjcmlwdCdzIHplcm8tYmFzZWQgYXJyYXkgaW5kZXhpbmcuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIHZlcnRleE5vcm1hbCBpcyBhIGZsYXR0ZW5lZCBhcnJheSBvZiB4LCB5LCB6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGUgcG9pbnRlciBhcml0aG1ldGljIGlzIHVzZWQgdG8gc2tpcCB0byB0aGUgc3RhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsLCB0aGVuIHRoZSBvZmZzZXQgaXMgYWRkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiArMCBpcyB4LCArMSBpcyB5LCArMiBpcyB6LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYW1lIHByb2Nlc3MgaXMgcmVwZWF0ZWQgZm9yIHZlcnRzIGFuZCB0ZXh0dXJlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVydGV4IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC52ZXJ0cy5wdXNoKCt2ZXJ0c1soK3ZlcnRleFswXSAtIDEpICogMyArIDBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnZlcnRzLnB1c2goK3ZlcnRzWygrdmVydGV4WzBdIC0gMSkgKiAzICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQudmVydHMucHVzaCgrdmVydHNbKCt2ZXJ0ZXhbMF0gLSAxKSAqIDMgKyAyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggdGV4dHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpZGUgPSBvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQgPyAzIDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC50ZXh0dXJlcy5wdXNoKCt0ZXh0dXJlc1soK3ZlcnRleFsxXSAtIDEpICogc3RyaWRlICsgMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnRleHR1cmVzLnB1c2goK3RleHR1cmVzWygrdmVydGV4WzFdIC0gMSkgKiBzdHJpZGUgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC50ZXh0dXJlcy5wdXNoKCt0ZXh0dXJlc1soK3ZlcnRleFsxXSAtIDEpICogc3RyaWRlICsgMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRleCBub3JtYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1soK3ZlcnRleFtub3JtYWxJbmRleF0gLSAxKSAqIDMgKyAwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1soK3ZlcnRleFtub3JtYWxJbmRleF0gLSAxKSAqIDMgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1soK3ZlcnRleFtub3JtYWxJbmRleF0gLSAxKSAqIDMgKyAyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggbWF0ZXJpYWwgaW5kaWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQubWF0ZXJpYWxJbmRpY2VzLnB1c2goY3VycmVudE1hdGVyaWFsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXdseSBjcmVhdGVkIFZlcnRleCB0byB0aGUgbGlzdCBvZiBpbmRpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5oYXNoaW5kaWNlc1toYXNoXSA9IHVucGFja2VkLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQuaW5kaWNlc1tjdXJyZW50T2JqZWN0QnlNYXRlcmlhbEluZGV4XS5wdXNoKHVucGFja2VkLmhhc2hpbmRpY2VzW2hhc2hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQuaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMyAmJiBxdWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdjAvdDAvdm4wIG9udG8gdGhlIHNlY29uZCB0cmlhbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQuaW5kaWNlc1tjdXJyZW50T2JqZWN0QnlNYXRlcmlhbEluZGV4XS5wdXNoKHVucGFja2VkLmhhc2hpbmRpY2VzW2hhc2gwXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHVucGFja2VkLnZlcnRzO1xuICAgICAgICB0aGlzLnZlcnRleE5vcm1hbHMgPSB1bnBhY2tlZC5ub3JtcztcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHVucGFja2VkLnRleHR1cmVzO1xuICAgICAgICB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlcyA9IHVucGFja2VkLm1hdGVyaWFsSW5kaWNlcztcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gdW5wYWNrZWQuaW5kaWNlc1tjdXJyZW50T2JqZWN0QnlNYXRlcmlhbEluZGV4XTtcbiAgICAgICAgdGhpcy5pbmRpY2VzUGVyTWF0ZXJpYWwgPSB1bnBhY2tlZC5pbmRpY2VzO1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWxOYW1lcyA9IG1hdGVyaWFsTmFtZXNCeUluZGV4O1xuICAgICAgICB0aGlzLm1hdGVyaWFsSW5kaWNlcyA9IG1hdGVyaWFsSW5kaWNlc0J5TmFtZTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbHNCeUluZGV4ID0ge307XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50cykge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUYW5nZW50c0FuZEJpdGFuZ2VudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHRhbmdlbnRzIGFuZCBiaXRhbmdlbnRzIG9mIHRoZSBtZXNoIHRoYXQgZm9ybXMgYW4gb3J0aG9nb25hbCBiYXNpcyB0b2dldGhlciB3aXRoIHRoZVxuICAgICAqIG5vcm1hbCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzLiBUaGVzZSBhcmUgdXNlZnVsIGZvciBzZXR0aW5nIHVwIHRoZSBUQk4gbWF0cml4XG4gICAgICogd2hlbiBkaXN0b3J0aW5nIHRoZSBub3JtYWxzIHRocm91Z2ggbm9ybWFsIG1hcHMuXG4gICAgICogTWV0aG9kIGRlcml2ZWQgZnJvbTogaHR0cDovL3d3dy5vcGVuZ2wtdHV0b3JpYWwub3JnL2ludGVybWVkaWF0ZS10dXRvcmlhbHMvdHV0b3JpYWwtMTMtbm9ybWFsLW1hcHBpbmcvXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCByZXF1aXJlcyB0aGUgbm9ybWFscyBhbmQgdGV4dHVyZSBjb29yZGluYXRlcyB0byBiZSBwYXJzZWQgYW5kIHNldCB1cCBjb3JyZWN0bHkuXG4gICAgICogQWRkcyB0aGUgdGFuZ2VudHMgYW5kIGJpdGFuZ2VudHMgYXMgbWVtYmVycyBvZiB0aGUgY2xhc3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgY2FsY3VsYXRlVGFuZ2VudHNBbmRCaXRhbmdlbnRzKCkge1xuICAgICAgICBjb25zb2xlLmFzc2VydChcbiAgICAgICAgICAgICEhKFxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4Tm9ybWFscyAmJlxuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4Tm9ybWFscy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5sZW5ndGhcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBcIk1pc3NpbmcgYXR0cmlidXRlcyBmb3IgY2FsY3VsYXRpbmcgdGFuZ2VudHMgYW5kIGJpdGFuZ2VudHNcIixcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB1bnBhY2tlZCA9IHtcbiAgICAgICAgICAgIHRhbmdlbnRzOiBbLi4ubmV3IEFycmF5KHRoaXMudmVydGljZXMubGVuZ3RoKV0ubWFwKF8gPT4gMCksXG4gICAgICAgICAgICBiaXRhbmdlbnRzOiBbLi4ubmV3IEFycmF5KHRoaXMudmVydGljZXMubGVuZ3RoKV0ubWFwKF8gPT4gMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBmYWNlcyBpbiB0aGUgd2hvbGUgbWVzaFxuICAgICAgICBjb25zdCBpbmRpY2VzID0gdGhpcy5pbmRpY2VzO1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSB0aGlzLnZlcnRleE5vcm1hbHM7XG4gICAgICAgIGNvbnN0IHV2cyA9IHRoaXMudGV4dHVyZXM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCBpMCA9IGluZGljZXNbaSArIDBdO1xuICAgICAgICAgICAgY29uc3QgaTEgPSBpbmRpY2VzW2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGkyID0gaW5kaWNlc1tpICsgMl07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdjAgPSB2ZXJ0aWNlc1tpMCAqIDMgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfdjAgPSB2ZXJ0aWNlc1tpMCAqIDMgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHpfdjAgPSB2ZXJ0aWNlc1tpMCAqIDMgKyAyXTtcblxuICAgICAgICAgICAgY29uc3QgeF91djAgPSB1dnNbaTAgKiAyICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X3V2MCA9IHV2c1tpMCAqIDIgKyAxXTtcblxuICAgICAgICAgICAgY29uc3QgeF92MSA9IHZlcnRpY2VzW2kxICogMyArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV92MSA9IHZlcnRpY2VzW2kxICogMyArIDFdO1xuICAgICAgICAgICAgY29uc3Qgel92MSA9IHZlcnRpY2VzW2kxICogMyArIDJdO1xuXG4gICAgICAgICAgICBjb25zdCB4X3V2MSA9IHV2c1tpMSAqIDIgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfdXYxID0gdXZzW2kxICogMiArIDFdO1xuXG4gICAgICAgICAgICBjb25zdCB4X3YyID0gdmVydGljZXNbaTIgKiAzICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X3YyID0gdmVydGljZXNbaTIgKiAzICsgMV07XG4gICAgICAgICAgICBjb25zdCB6X3YyID0gdmVydGljZXNbaTIgKiAzICsgMl07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfdXYyID0gdXZzW2kyICogMiArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV91djIgPSB1dnNbaTIgKiAyICsgMV07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfZGVsdGFQb3MxID0geF92MSAtIHhfdjA7XG4gICAgICAgICAgICBjb25zdCB5X2RlbHRhUG9zMSA9IHlfdjEgLSB5X3YwO1xuICAgICAgICAgICAgY29uc3Qgel9kZWx0YVBvczEgPSB6X3YxIC0gel92MDtcblxuICAgICAgICAgICAgY29uc3QgeF9kZWx0YVBvczIgPSB4X3YyIC0geF92MDtcbiAgICAgICAgICAgIGNvbnN0IHlfZGVsdGFQb3MyID0geV92MiAtIHlfdjA7XG4gICAgICAgICAgICBjb25zdCB6X2RlbHRhUG9zMiA9IHpfdjIgLSB6X3YwO1xuXG4gICAgICAgICAgICBjb25zdCB4X3V2RGVsdGFQb3MxID0geF91djEgLSB4X3V2MDtcbiAgICAgICAgICAgIGNvbnN0IHlfdXZEZWx0YVBvczEgPSB5X3V2MSAtIHlfdXYwO1xuXG4gICAgICAgICAgICBjb25zdCB4X3V2RGVsdGFQb3MyID0geF91djIgLSB4X3V2MDtcbiAgICAgICAgICAgIGNvbnN0IHlfdXZEZWx0YVBvczIgPSB5X3V2MiAtIHlfdXYwO1xuXG4gICAgICAgICAgICBjb25zdCBySW52ID0geF91dkRlbHRhUG9zMSAqIHlfdXZEZWx0YVBvczIgLSB5X3V2RGVsdGFQb3MxICogeF91dkRlbHRhUG9zMjtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAxLjAgLyBNYXRoLmFicyhySW52IDwgMC4wMDAxID8gMS4wIDogckludik7XG5cbiAgICAgICAgICAgIC8vIFRhbmdlbnRcbiAgICAgICAgICAgIGNvbnN0IHhfdGFuZ2VudCA9ICh4X2RlbHRhUG9zMSAqIHlfdXZEZWx0YVBvczIgLSB4X2RlbHRhUG9zMiAqIHlfdXZEZWx0YVBvczEpICogcjtcbiAgICAgICAgICAgIGNvbnN0IHlfdGFuZ2VudCA9ICh5X2RlbHRhUG9zMSAqIHlfdXZEZWx0YVBvczIgLSB5X2RlbHRhUG9zMiAqIHlfdXZEZWx0YVBvczEpICogcjtcbiAgICAgICAgICAgIGNvbnN0IHpfdGFuZ2VudCA9ICh6X2RlbHRhUG9zMSAqIHlfdXZEZWx0YVBvczIgLSB6X2RlbHRhUG9zMiAqIHlfdXZEZWx0YVBvczEpICogcjtcblxuICAgICAgICAgICAgLy8gQml0YW5nZW50XG4gICAgICAgICAgICBjb25zdCB4X2JpdGFuZ2VudCA9ICh4X2RlbHRhUG9zMiAqIHhfdXZEZWx0YVBvczEgLSB4X2RlbHRhUG9zMSAqIHhfdXZEZWx0YVBvczIpICogcjtcbiAgICAgICAgICAgIGNvbnN0IHlfYml0YW5nZW50ID0gKHlfZGVsdGFQb3MyICogeF91dkRlbHRhUG9zMSAtIHlfZGVsdGFQb3MxICogeF91dkRlbHRhUG9zMikgKiByO1xuICAgICAgICAgICAgY29uc3Qgel9iaXRhbmdlbnQgPSAoel9kZWx0YVBvczIgKiB4X3V2RGVsdGFQb3MxIC0gel9kZWx0YVBvczEgKiB4X3V2RGVsdGFQb3MyKSAqIHI7XG5cbiAgICAgICAgICAgIC8vIEdyYW0tU2NobWlkdCBvcnRob2dvbmFsaXplXG4gICAgICAgICAgICAvL3QgPSBnbG06Om5vcm1hbGl6ZSh0IC0gbiAqIGdsbTo6IGRvdChuLCB0KSk7XG4gICAgICAgICAgICBjb25zdCB4X24wID0gbm9ybWFsc1tpMCAqIDMgKyAwXTtcbiAgICAgICAgICAgIGNvbnN0IHlfbjAgPSBub3JtYWxzW2kwICogMyArIDFdO1xuICAgICAgICAgICAgY29uc3Qgel9uMCA9IG5vcm1hbHNbaTAgKiAzICsgMl07XG5cbiAgICAgICAgICAgIGNvbnN0IHhfbjEgPSBub3JtYWxzW2kxICogMyArIDBdO1xuICAgICAgICAgICAgY29uc3QgeV9uMSA9IG5vcm1hbHNbaTEgKiAzICsgMV07XG4gICAgICAgICAgICBjb25zdCB6X24xID0gbm9ybWFsc1tpMSAqIDMgKyAyXTtcblxuICAgICAgICAgICAgY29uc3QgeF9uMiA9IG5vcm1hbHNbaTIgKiAzICsgMF07XG4gICAgICAgICAgICBjb25zdCB5X24yID0gbm9ybWFsc1tpMiAqIDMgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHpfbjIgPSBub3JtYWxzW2kyICogMyArIDJdO1xuXG4gICAgICAgICAgICAvLyBUYW5nZW50XG4gICAgICAgICAgICBjb25zdCBuMF9kb3RfdCA9IHhfdGFuZ2VudCAqIHhfbjAgKyB5X3RhbmdlbnQgKiB5X24wICsgel90YW5nZW50ICogel9uMDtcbiAgICAgICAgICAgIGNvbnN0IG4xX2RvdF90ID0geF90YW5nZW50ICogeF9uMSArIHlfdGFuZ2VudCAqIHlfbjEgKyB6X3RhbmdlbnQgKiB6X24xO1xuICAgICAgICAgICAgY29uc3QgbjJfZG90X3QgPSB4X3RhbmdlbnQgKiB4X24yICsgeV90YW5nZW50ICogeV9uMiArIHpfdGFuZ2VudCAqIHpfbjI7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfcmVzVGFuZ2VudDAgPSB4X3RhbmdlbnQgLSB4X24wICogbjBfZG90X3Q7XG4gICAgICAgICAgICBjb25zdCB5X3Jlc1RhbmdlbnQwID0geV90YW5nZW50IC0geV9uMCAqIG4wX2RvdF90O1xuICAgICAgICAgICAgY29uc3Qgel9yZXNUYW5nZW50MCA9IHpfdGFuZ2VudCAtIHpfbjAgKiBuMF9kb3RfdDtcblxuICAgICAgICAgICAgY29uc3QgeF9yZXNUYW5nZW50MSA9IHhfdGFuZ2VudCAtIHhfbjEgKiBuMV9kb3RfdDtcbiAgICAgICAgICAgIGNvbnN0IHlfcmVzVGFuZ2VudDEgPSB5X3RhbmdlbnQgLSB5X24xICogbjFfZG90X3Q7XG4gICAgICAgICAgICBjb25zdCB6X3Jlc1RhbmdlbnQxID0gel90YW5nZW50IC0gel9uMSAqIG4xX2RvdF90O1xuXG4gICAgICAgICAgICBjb25zdCB4X3Jlc1RhbmdlbnQyID0geF90YW5nZW50IC0geF9uMiAqIG4yX2RvdF90O1xuICAgICAgICAgICAgY29uc3QgeV9yZXNUYW5nZW50MiA9IHlfdGFuZ2VudCAtIHlfbjIgKiBuMl9kb3RfdDtcbiAgICAgICAgICAgIGNvbnN0IHpfcmVzVGFuZ2VudDIgPSB6X3RhbmdlbnQgLSB6X24yICogbjJfZG90X3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hZ1RhbmdlbnQwID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIHhfcmVzVGFuZ2VudDAgKiB4X3Jlc1RhbmdlbnQwICsgeV9yZXNUYW5nZW50MCAqIHlfcmVzVGFuZ2VudDAgKyB6X3Jlc1RhbmdlbnQwICogel9yZXNUYW5nZW50MCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBtYWdUYW5nZW50MSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICB4X3Jlc1RhbmdlbnQxICogeF9yZXNUYW5nZW50MSArIHlfcmVzVGFuZ2VudDEgKiB5X3Jlc1RhbmdlbnQxICsgel9yZXNUYW5nZW50MSAqIHpfcmVzVGFuZ2VudDEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbWFnVGFuZ2VudDIgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgeF9yZXNUYW5nZW50MiAqIHhfcmVzVGFuZ2VudDIgKyB5X3Jlc1RhbmdlbnQyICogeV9yZXNUYW5nZW50MiArIHpfcmVzVGFuZ2VudDIgKiB6X3Jlc1RhbmdlbnQyLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQml0YW5nZW50XG4gICAgICAgICAgICBjb25zdCBuMF9kb3RfYnQgPSB4X2JpdGFuZ2VudCAqIHhfbjAgKyB5X2JpdGFuZ2VudCAqIHlfbjAgKyB6X2JpdGFuZ2VudCAqIHpfbjA7XG4gICAgICAgICAgICBjb25zdCBuMV9kb3RfYnQgPSB4X2JpdGFuZ2VudCAqIHhfbjEgKyB5X2JpdGFuZ2VudCAqIHlfbjEgKyB6X2JpdGFuZ2VudCAqIHpfbjE7XG4gICAgICAgICAgICBjb25zdCBuMl9kb3RfYnQgPSB4X2JpdGFuZ2VudCAqIHhfbjIgKyB5X2JpdGFuZ2VudCAqIHlfbjIgKyB6X2JpdGFuZ2VudCAqIHpfbjI7XG5cbiAgICAgICAgICAgIGNvbnN0IHhfcmVzQml0YW5nZW50MCA9IHhfYml0YW5nZW50IC0geF9uMCAqIG4wX2RvdF9idDtcbiAgICAgICAgICAgIGNvbnN0IHlfcmVzQml0YW5nZW50MCA9IHlfYml0YW5nZW50IC0geV9uMCAqIG4wX2RvdF9idDtcbiAgICAgICAgICAgIGNvbnN0IHpfcmVzQml0YW5nZW50MCA9IHpfYml0YW5nZW50IC0gel9uMCAqIG4wX2RvdF9idDtcblxuICAgICAgICAgICAgY29uc3QgeF9yZXNCaXRhbmdlbnQxID0geF9iaXRhbmdlbnQgLSB4X24xICogbjFfZG90X2J0O1xuICAgICAgICAgICAgY29uc3QgeV9yZXNCaXRhbmdlbnQxID0geV9iaXRhbmdlbnQgLSB5X24xICogbjFfZG90X2J0O1xuICAgICAgICAgICAgY29uc3Qgel9yZXNCaXRhbmdlbnQxID0gel9iaXRhbmdlbnQgLSB6X24xICogbjFfZG90X2J0O1xuXG4gICAgICAgICAgICBjb25zdCB4X3Jlc0JpdGFuZ2VudDIgPSB4X2JpdGFuZ2VudCAtIHhfbjIgKiBuMl9kb3RfYnQ7XG4gICAgICAgICAgICBjb25zdCB5X3Jlc0JpdGFuZ2VudDIgPSB5X2JpdGFuZ2VudCAtIHlfbjIgKiBuMl9kb3RfYnQ7XG4gICAgICAgICAgICBjb25zdCB6X3Jlc0JpdGFuZ2VudDIgPSB6X2JpdGFuZ2VudCAtIHpfbjIgKiBuMl9kb3RfYnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hZ0JpdGFuZ2VudDAgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgeF9yZXNCaXRhbmdlbnQwICogeF9yZXNCaXRhbmdlbnQwICtcbiAgICAgICAgICAgICAgICAgICAgeV9yZXNCaXRhbmdlbnQwICogeV9yZXNCaXRhbmdlbnQwICtcbiAgICAgICAgICAgICAgICAgICAgel9yZXNCaXRhbmdlbnQwICogel9yZXNCaXRhbmdlbnQwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG1hZ0JpdGFuZ2VudDEgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgeF9yZXNCaXRhbmdlbnQxICogeF9yZXNCaXRhbmdlbnQxICtcbiAgICAgICAgICAgICAgICAgICAgeV9yZXNCaXRhbmdlbnQxICogeV9yZXNCaXRhbmdlbnQxICtcbiAgICAgICAgICAgICAgICAgICAgel9yZXNCaXRhbmdlbnQxICogel9yZXNCaXRhbmdlbnQxLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG1hZ0JpdGFuZ2VudDIgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgeF9yZXNCaXRhbmdlbnQyICogeF9yZXNCaXRhbmdlbnQyICtcbiAgICAgICAgICAgICAgICAgICAgeV9yZXNCaXRhbmdlbnQyICogeV9yZXNCaXRhbmdlbnQyICtcbiAgICAgICAgICAgICAgICAgICAgel9yZXNCaXRhbmdlbnQyICogel9yZXNCaXRhbmdlbnQyLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTAgKiAzICsgMF0gKz0geF9yZXNUYW5nZW50MCAvIG1hZ1RhbmdlbnQwO1xuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTAgKiAzICsgMV0gKz0geV9yZXNUYW5nZW50MCAvIG1hZ1RhbmdlbnQwO1xuICAgICAgICAgICAgdW5wYWNrZWQudGFuZ2VudHNbaTAgKiAzICsgMl0gKz0gel9yZXNUYW5nZW50MCAvIG1hZ1RhbmdlbnQwO1xuXG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMSAqIDMgKyAwXSArPSB4X3Jlc1RhbmdlbnQxIC8gbWFnVGFuZ2VudDE7XG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMSAqIDMgKyAxXSArPSB5X3Jlc1RhbmdlbnQxIC8gbWFnVGFuZ2VudDE7XG4gICAgICAgICAgICB1bnBhY2tlZC50YW5nZW50c1tpMSAqIDMgKyAyXSArPSB6X3Jlc1RhbmdlbnQxIC8gbWFnVGFuZ2VudDE7XG5cbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kyICogMyArIDBdICs9IHhfcmVzVGFuZ2VudDIgLyBtYWdUYW5nZW50MjtcbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kyICogMyArIDFdICs9IHlfcmVzVGFuZ2VudDIgLyBtYWdUYW5nZW50MjtcbiAgICAgICAgICAgIHVucGFja2VkLnRhbmdlbnRzW2kyICogMyArIDJdICs9IHpfcmVzVGFuZ2VudDIgLyBtYWdUYW5nZW50MjtcblxuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMCAqIDMgKyAwXSArPSB4X3Jlc0JpdGFuZ2VudDAgLyBtYWdCaXRhbmdlbnQwO1xuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMCAqIDMgKyAxXSArPSB5X3Jlc0JpdGFuZ2VudDAgLyBtYWdCaXRhbmdlbnQwO1xuICAgICAgICAgICAgdW5wYWNrZWQuYml0YW5nZW50c1tpMCAqIDMgKyAyXSArPSB6X3Jlc0JpdGFuZ2VudDAgLyBtYWdCaXRhbmdlbnQwO1xuXG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kxICogMyArIDBdICs9IHhfcmVzQml0YW5nZW50MSAvIG1hZ0JpdGFuZ2VudDE7XG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kxICogMyArIDFdICs9IHlfcmVzQml0YW5nZW50MSAvIG1hZ0JpdGFuZ2VudDE7XG4gICAgICAgICAgICB1bnBhY2tlZC5iaXRhbmdlbnRzW2kxICogMyArIDJdICs9IHpfcmVzQml0YW5nZW50MSAvIG1hZ0JpdGFuZ2VudDE7XG5cbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTIgKiAzICsgMF0gKz0geF9yZXNCaXRhbmdlbnQyIC8gbWFnQml0YW5nZW50MjtcbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTIgKiAzICsgMV0gKz0geV9yZXNCaXRhbmdlbnQyIC8gbWFnQml0YW5nZW50MjtcbiAgICAgICAgICAgIHVucGFja2VkLmJpdGFuZ2VudHNbaTIgKiAzICsgMl0gKz0gel9yZXNCaXRhbmdlbnQyIC8gbWFnQml0YW5nZW50MjtcblxuICAgICAgICAgICAgLy8gVE9ETzogY2hlY2sgaGFuZGVkbmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YW5nZW50cyA9IHVucGFja2VkLnRhbmdlbnRzO1xuICAgICAgICB0aGlzLmJpdGFuZ2VudHMgPSB1bnBhY2tlZC5iaXRhbmdlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsYXlvdXQgLSBBIHtAbGluayBMYXlvdXR9IG9iamVjdCB0aGF0IGRlc2NyaWJlcyB0aGVcbiAgICAgKiBkZXNpcmVkIG1lbW9yeSBsYXlvdXQgb2YgdGhlIGdlbmVyYXRlZCBidWZmZXJcbiAgICAgKiBAcmV0dXJuIFRoZSBwYWNrZWQgYXJyYXkgaW4gdGhlIC4uLiBUT0RPXG4gICAgICovXG4gICAgbWFrZUJ1ZmZlckRhdGEobGF5b3V0OiBMYXlvdXQpOiBBcnJheUJ1ZmZlcldpdGhJdGVtU2l6ZSB7XG4gICAgICAgIGNvbnN0IG51bUl0ZW1zID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICAgICAgICBjb25zdCBidWZmZXI6IEFycmF5QnVmZmVyV2l0aEl0ZW1TaXplID0gbmV3IEFycmF5QnVmZmVyKGxheW91dC5zdHJpZGUgKiBudW1JdGVtcyk7XG4gICAgICAgIGJ1ZmZlci5udW1JdGVtcyA9IG51bUl0ZW1zO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgdmVydGV4T2Zmc2V0ID0gMDsgaSA8IG51bUl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleE9mZnNldCA9IGkgKiBsYXlvdXQuc3RyaWRlO1xuICAgICAgICAgICAgLy8gY29weSBpbiB0aGUgdmVydGV4IGRhdGEgaW4gdGhlIG9yZGVyIGFuZCBmb3JtYXQgZ2l2ZW4gYnkgdGhlXG4gICAgICAgICAgICAvLyBsYXlvdXQgcGFyYW1cbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGxheW91dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVydGV4T2Zmc2V0ICsgbGF5b3V0LmF0dHJpYnV0ZU1hcFthdHRyaWJ1dGUua2V5XS5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhdHRyaWJ1dGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LlBPU0lUSU9OLmtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCB0aGlzLnZlcnRpY2VzW2kgKiAzXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIHRoaXMudmVydGljZXNbaSAqIDMgKyAxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIHRoaXMudmVydGljZXNbaSAqIDMgKyAyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuVVYua2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIHRoaXMudGV4dHVyZXNbaSAqIDJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgdGhpcy50ZXh0dXJlc1tpICogMiArIDFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5OT1JNQUwua2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIHRoaXMudmVydGV4Tm9ybWFsc1tpICogM10sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCB0aGlzLnZlcnRleE5vcm1hbHNbaSAqIDMgKyAxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIHRoaXMudmVydGV4Tm9ybWFsc1tpICogMyArIDJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5NQVRFUklBTF9JTkRFWC5rZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQxNihvZmZzZXQsIHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5BTUJJRU5ULmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWF0ZXJpYWwgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuYW1iaWVudFswXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIG1hdGVyaWFsLmFtYmllbnRbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA4LCBtYXRlcmlhbC5hbWJpZW50WzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LkRJRkZVU0Uua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5kaWZmdXNlWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgbWF0ZXJpYWwuZGlmZnVzZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLmRpZmZ1c2VbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuU1BFQ1VMQVIua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5zcGVjdWxhclswXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIG1hdGVyaWFsLnNwZWN1bGFyWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgbWF0ZXJpYWwuc3BlY3VsYXJbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuU1BFQ1VMQVJfRVhQT05FTlQua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LkVNSVNTSVZFLmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWF0ZXJpYWwgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuZW1pc3NpdmVbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCBtYXRlcmlhbC5lbWlzc2l2ZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLmVtaXNzaXZlWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LlRSQU5TTUlTU0lPTl9GSUxURVIua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC50cmFuc21pc3Npb25GaWx0ZXJbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCBtYXRlcmlhbC50cmFuc21pc3Npb25GaWx0ZXJbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA4LCBtYXRlcmlhbC50cmFuc21pc3Npb25GaWx0ZXJbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuRElTU09MVkUua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5kaXNzb2x2ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5JTExVTUlOQVRJT04ua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgbWF0ZXJpYWwuaWxsdW1pbmF0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LlJFRlJBQ1RJT05fSU5ERVgua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5yZWZyYWN0aW9uSW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuU0hBUlBORVNTLmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWF0ZXJpYWwgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuc2hhcnBuZXNzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LkFOVElfQUxJQVNJTkcua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbCBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgbWF0ZXJpYWwuYW50aUFsaWFzaW5nID8gMSA6IDAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBtYWtlSW5kZXhCdWZmZXJEYXRhKCk6IFVpbnQxNkFycmF5V2l0aEl0ZW1TaXplIHtcbiAgICAgICAgY29uc3QgYnVmZmVyOiBVaW50MTZBcnJheVdpdGhJdGVtU2l6ZSA9IG5ldyBVaW50MTZBcnJheSh0aGlzLmluZGljZXMpO1xuICAgICAgICBidWZmZXIubnVtSXRlbXMgPSB0aGlzLmluZGljZXMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIGFkZE1hdGVyaWFsTGlicmFyeShtdGw6IE1hdGVyaWFsTGlicmFyeSkge1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbXRsLm1hdGVyaWFscykge1xuICAgICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLm1hdGVyaWFsSW5kaWNlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIG1hdGVyaWFsIGlzIG5vdCByZWZlcmVuY2VkIGJ5IHRoZSBtZXNoXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbXRsLm1hdGVyaWFsc1tuYW1lXTtcblxuICAgICAgICAgICAgLy8gRmluZCB0aGUgbWF0ZXJpYWwgaW5kZXggZm9yIHRoaXMgbWF0ZXJpYWxcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLm1hdGVyaWFsSW5kaWNlc1ttYXRlcmlhbC5uYW1lXTtcblxuICAgICAgICAgICAgLy8gUHV0IHRoZSBtYXRlcmlhbCBpbnRvIHRoZSBtYXRlcmlhbHNCeUluZGV4IG9iamVjdCBhdCB0aGUgcmlnaHRcbiAgICAgICAgICAgIC8vIHNwb3QgYXMgZGV0ZXJtaW5lZCB3aGVuIHRoZSBvYmogZmlsZSB3YXMgcGFyc2VkXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF0gPSBtYXRlcmlhbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBNZXNoIGZyb20gXCIuL21lc2hcIjtcbmltcG9ydCB7IE1hdGVyaWFsTGlicmFyeSwgVGV4dHVyZU1hcERhdGEgfSBmcm9tIFwiLi9tYXRlcmlhbFwiO1xuXG5mdW5jdGlvbiBkb3dubG9hZE10bFRleHR1cmVzKG10bDogTWF0ZXJpYWxMaWJyYXJ5LCByb290OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXBBdHRyaWJ1dGVzID0gW1xuICAgICAgICBcIm1hcERpZmZ1c2VcIixcbiAgICAgICAgXCJtYXBBbWJpZW50XCIsXG4gICAgICAgIFwibWFwU3BlY3VsYXJcIixcbiAgICAgICAgXCJtYXBEaXNzb2x2ZVwiLFxuICAgICAgICBcIm1hcEJ1bXBcIixcbiAgICAgICAgXCJtYXBEaXNwbGFjZW1lbnRcIixcbiAgICAgICAgXCJtYXBEZWNhbFwiLFxuICAgICAgICBcIm1hcEVtaXNzaXZlXCIsXG4gICAgXTtcbiAgICBpZiAoIXJvb3QuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIHJvb3QgKz0gXCIvXCI7XG4gICAgfVxuICAgIGNvbnN0IHRleHR1cmVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1hdGVyaWFsTmFtZSBpbiBtdGwubWF0ZXJpYWxzKSB7XG4gICAgICAgIGlmICghbXRsLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbE5hbWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG10bC5tYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgbWFwQXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3QgbWFwRGF0YSA9IChtYXRlcmlhbCBhcyBhbnkpW2F0dHJdIGFzIFRleHR1cmVNYXBEYXRhO1xuICAgICAgICAgICAgaWYgKCFtYXBEYXRhKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHJvb3QgKyBtYXBEYXRhLmZpbGVuYW1lO1xuICAgICAgICAgICAgdGV4dHVyZXMucHVzaChcbiAgICAgICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50ZXh0dXJlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiAoaW1hZ2Uub25sb2FkID0gcmVzb2x2ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGRvd25sb2FkIHRleHR1cmU6ICR7dXJsfWApO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGV4dHVyZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRNdGwobW9kZWxPcHRpb25zOiBEb3dubG9hZE1vZGVsc09wdGlvbnMpOiBzdHJpbmcge1xuICAgIGlmICghKHR5cGVvZiBtb2RlbE9wdGlvbnMubXRsID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICByZXR1cm4gbW9kZWxPcHRpb25zLm9iai5yZXBsYWNlKC9cXC5vYmokLywgXCIubXRsXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBtb2RlbE9wdGlvbnMubXRsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkTW9kZWxzT3B0aW9ucyB7XG4gICAgb2JqOiBzdHJpbmc7XG4gICAgbXRsPzogYm9vbGVhbiB8IHN0cmluZztcbiAgICBkb3dubG9hZE10bFRleHR1cmVzPzogYm9vbGVhbjtcbiAgICBtdGxUZXh0dXJlUm9vdD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGluZGljZXNQZXJNYXRlcmlhbD86IGJvb2xlYW47XG4gICAgY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50cz86IGJvb2xlYW47XG59XG5cbnR5cGUgTW9kZWxQcm9taXNlcyA9IFtQcm9taXNlPHN0cmluZz4sIFByb21pc2U8TWVzaD4sIHVuZGVmaW5lZCB8IFByb21pc2U8TWF0ZXJpYWxMaWJyYXJ5Pl07XG5leHBvcnQgdHlwZSBNZXNoTWFwID0geyBbbmFtZTogc3RyaW5nXTogTWVzaCB9O1xuLyoqXG4gKiBBY2NlcHRzIGEgbGlzdCBvZiBtb2RlbCByZXF1ZXN0IG9iamVjdHMgYW5kIHJldHVybnMgYSBQcm9taXNlIHRoYXRcbiAqIHJlc29sdmVzIHdoZW4gYWxsIG1vZGVscyBoYXZlIGJlZW4gZG93bmxvYWRlZCBhbmQgcGFyc2VkLlxuICpcbiAqIFRoZSBsaXN0IG9mIG1vZGVsIG9iamVjdHMgZm9sbG93IHRoaXMgaW50ZXJmYWNlOlxuICoge1xuICogIG9iajogJ3BhdGgvdG8vbW9kZWwub2JqJyxcbiAqICBtdGw6IHRydWUgfCAncGF0aC90by9tb2RlbC5tdGwnLFxuICogIGRvd25sb2FkTXRsVGV4dHVyZXM6IHRydWUgfCBmYWxzZVxuICogIG10bFRleHR1cmVSb290OiAnL21vZGVscy9zdXphbm5lL21hcHMnXG4gKiAgbmFtZTogJ3N1emFubmUnXG4gKiB9XG4gKlxuICogVGhlIGBvYmpgIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCBhbmQgc2hvdWxkIGJlIHRoZSBwYXRoIHRvIHRoZVxuICogbW9kZWwncyAub2JqIGZpbGUgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcmVwbyAoYWJzb2x1dGUgVVJMcyBhcmVcbiAqIHN1Z2dlc3RlZCkuXG4gKlxuICogVGhlIGBtdGxgIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgY2FuIGVpdGhlciBiZSBhIGJvb2xlYW4gb3JcbiAqIGEgcGF0aCB0byB0aGUgbW9kZWwncyAubXRsIGZpbGUgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgVVJMLiBJZlxuICogdGhlIHZhbHVlIGlzIGB0cnVlYCwgdGhlbiB0aGUgcGF0aCBhbmQgYmFzZW5hbWUgZ2l2ZW4gZm9yIHRoZSBgb2JqYFxuICogYXR0cmlidXRlIGlzIHVzZWQgcmVwbGFjaW5nIHRoZSAub2JqIHN1ZmZpeCBmb3IgLm10bFxuICogRS5nLjoge29iajogJ21vZGVscy9mb28ub2JqJywgbXRsOiB0cnVlfSB3b3VsZCBzZWFyY2ggZm9yICdtb2RlbHMvZm9vLm10bCdcbiAqXG4gKiBUaGUgYG5hbWVgIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgaXMgYSBodW1hbiBmcmllbmRseSBuYW1lIHRvIGJlXG4gKiBpbmNsdWRlZCB3aXRoIHRoZSBwYXJzZWQgT0JKIGFuZCBNVEwgZmlsZXMuIElmIG5vdCBnaXZlbiwgdGhlIGJhc2UgLm9ialxuICogZmlsZW5hbWUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIFRoZSBgZG93bmxvYWRNdGxUZXh0dXJlc2AgYXR0cmlidXRlIGlzIGEgZmxhZyBmb3IgYXV0b21hdGljYWxseSBkb3dubG9hZGluZ1xuICogYW55IGltYWdlcyBmb3VuZCBpbiB0aGUgTVRMIGZpbGUgYW5kIGF0dGFjaGluZyB0aGVtIHRvIGVhY2ggTWF0ZXJpYWxcbiAqIGNyZWF0ZWQgZnJvbSB0aGF0IGZpbGUuIEZvciBleGFtcGxlLCBpZiBtYXRlcmlhbC5tYXBEaWZmdXNlIGlzIHNldCAodGhlcmVcbiAqIHdhcyBkYXRhIGluIHRoZSBNVEwgZmlsZSksIHRoZW4gbWF0ZXJpYWwubWFwRGlmZnVzZS50ZXh0dXJlIHdpbGwgY29udGFpblxuICogdGhlIGRvd25sb2FkZWQgaW1hZ2UuIFRoaXMgb3B0aW9uIGRlZmF1bHRzIHRvIGB0cnVlYC4gQnkgZGVmYXVsdCwgdGhlIE1UTCdzXG4gKiBVUkwgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgbG9jYXRpb24gb2YgdGhlIGltYWdlcy5cbiAqXG4gKiBUaGUgYG10bFRleHR1cmVSb290YCBhdHRyaWJ1dGUgaXMgb3B0aW9uYWwgYW5kIHNob3VsZCBwb2ludCB0byB0aGUgbG9jYXRpb25cbiAqIG9uIHRoZSBzZXJ2ZXIgdGhhdCB0aGlzIE1UTCdzIHRleHR1cmUgZmlsZXMgYXJlIGxvY2F0ZWQuIFRoZSBkZWZhdWx0IGlzIHRvXG4gKiB1c2UgdGhlIE1UTCBmaWxlJ3MgbG9jYXRpb24uXG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IHRoZSByZXN1bHQgb2YgZG93bmxvYWRpbmcgdGhlIGdpdmVuIGxpc3Qgb2YgbW9kZWxzLiBUaGVcbiAqIHByb21pc2Ugd2lsbCByZXNvbHZlIHdpdGggYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBuYW1lcyBvZiB0aGUgbW9kZWxzXG4gKiBhbmQgdGhlIHZhbHVlIGlzIGl0cyBNZXNoIG9iamVjdC4gRWFjaCBNZXNoIG9iamVjdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGhhdmUgaXRzIGFkZE1hdGVyaWFsTGlicmFyeSgpIG1ldGhvZCBjYWxsZWQgdG8gc2V0IHRoZSBnaXZlbiBNVEwgZGF0YSAoaWYgZ2l2ZW4pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRNb2RlbHMobW9kZWxzOiBEb3dubG9hZE1vZGVsc09wdGlvbnNbXSk6IFByb21pc2U8TWVzaE1hcD4ge1xuICAgIGNvbnN0IGZpbmlzaGVkID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICBpZiAoIW1vZGVsLm9iaikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdcIm9ialwiIGF0dHJpYnV0ZSBvZiBtb2RlbCBvYmplY3Qgbm90IHNldC4gVGhlIC5vYmogZmlsZSBpcyByZXF1aXJlZCB0byBiZSBzZXQgJyArXG4gICAgICAgICAgICAgICAgICAgIFwiaW4gb3JkZXIgdG8gdXNlIGRvd25sb2FkTW9kZWxzKClcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgaW5kaWNlc1Blck1hdGVyaWFsOiAhIW1vZGVsLmluZGljZXNQZXJNYXRlcmlhbCxcbiAgICAgICAgICAgIGNhbGNUYW5nZW50c0FuZEJpdGFuZ2VudHM6ICEhbW9kZWwuY2FsY1RhbmdlbnRzQW5kQml0YW5nZW50cyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpZiB0aGUgbmFtZSBpcyBub3QgcHJvdmlkZWQsIGRlcnZpdmUgaXQgZnJvbSB0aGUgZ2l2ZW4gT0JKXG4gICAgICAgIGxldCBuYW1lID0gbW9kZWwubmFtZTtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG1vZGVsLm9iai5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0ucmVwbGFjZShcIi5vYmpcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobmFtZSk7XG5cbiAgICAgICAgY29uc3QgbWVzaFByb21pc2UgPSBmZXRjaChtb2RlbC5vYmopXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1lc2goZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbXRsUHJvbWlzZTtcbiAgICAgICAgLy8gRG93bmxvYWQgTWF0ZXJpYWxMaWJyYXJ5IGZpbGU/XG4gICAgICAgIGlmIChtb2RlbC5tdGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG10bCA9IGdldE10bChtb2RlbCk7XG4gICAgICAgICAgICBtdGxQcm9taXNlID0gZmV0Y2gobXRsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKGRhdGE6IHN0cmluZyk6IFByb21pc2U8W01hdGVyaWFsTGlicmFyeSwgYW55XT4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWF0ZXJpYWxMaWJyYXJ5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRvd25sb2FkTXRsVGV4dHVyZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvb3QgPSBtb2RlbC5tdGxUZXh0dXJlUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXJlY3Rvcnkgb2YgdGhlIE1UTCBmaWxlIGFzIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdCA9IG10bC5zdWJzdHIoMCwgbXRsLmxhc3RJbmRleE9mKFwiL1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvd25sb2FkTXRsVGV4dHVyZXMgcmV0dXJucyBhIFByb21pc2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIHJlc29sdmVkIG9uY2UgYWxsIG9mIHRoZSBpbWFnZXMgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyBhcmUgZG93bmxvYWRlZC4gVGhlc2UgYXJlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRhY2hlZCB0byB0aGUgbWFwIGRhdGEgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbUHJvbWlzZS5yZXNvbHZlKG1hdGVyaWFsKSwgZG93bmxvYWRNdGxUZXh0dXJlcyhtYXRlcmlhbCwgcm9vdCldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbUHJvbWlzZS5yZXNvbHZlKG1hdGVyaWFsKSwgdW5kZWZpbmVkXSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogW01hdGVyaWFsTGlicmFyeSwgYW55XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQ6IE1vZGVsUHJvbWlzZXMgPSBbbmFtZVByb21pc2UsIG1lc2hQcm9taXNlLCBtdGxQcm9taXNlXTtcbiAgICAgICAgZmluaXNoZWQucHVzaChQcm9taXNlLmFsbDxzdHJpbmcsIE1lc2gsIE1hdGVyaWFsTGlicmFyeSB8IHVuZGVmaW5lZD4ocGFyc2VkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGZpbmlzaGVkKS50aGVuKG1zID0+IHtcbiAgICAgICAgLy8gdGhlIFwiZmluaXNoZWRcIiBwcm9taXNlIGlzIGEgbGlzdCBvZiBuYW1lLCBNZXNoIGluc3RhbmNlLFxuICAgICAgICAvLyBhbmQgTWF0ZXJpYWxMaWJhcnkgaW5zdGFuY2UuIFRoaXMgdW5wYWNrcyBhbmQgcmV0dXJucyBhblxuICAgICAgICAvLyBvYmplY3QgbWFwcGluZyBuYW1lIHRvIE1lc2ggKE1lc2ggcG9pbnRzIHRvIE1UTCkuXG4gICAgICAgIGNvbnN0IG1vZGVsczogTWVzaE1hcCA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBtZXNoLCBtdGxdID0gbW9kZWw7XG4gICAgICAgICAgICBtZXNoLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKG10bCkge1xuICAgICAgICAgICAgICAgIG1lc2guYWRkTWF0ZXJpYWxMaWJyYXJ5KG10bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbHNbbmFtZV0gPSBtZXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGVscztcbiAgICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW1lQW5kVXJscyB7XG4gICAgW21lc2hOYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGFrZXMgaW4gYW4gb2JqZWN0IG9mIGBtZXNoX25hbWVgLCBgJy91cmwvdG8vT0JKL2ZpbGUnYCBwYWlycyBhbmQgYSBjYWxsYmFja1xuICogZnVuY3Rpb24uIEVhY2ggT0JKIGZpbGUgd2lsbCBiZSBhamF4ZWQgaW4gYW5kIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvXG4gKiBhbiBPQkouTWVzaC4gV2hlbiBhbGwgZmlsZXMgaGF2ZSBzdWNjZXNzZnVsbHkgZG93bmxvYWRlZCB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHByb3ZpZGVkIHdpbGwgYmUgY2FsbGVkIGFuZCBwYXNzZWQgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAqIHRoZSBuZXdseSBjcmVhdGVkIG1lc2hlcy5cbiAqXG4gKiAqKk5vdGU6KiogSW4gb3JkZXIgdG8gdXNlIHRoaXMgZnVuY3Rpb24gYXMgYSB3YXkgdG8gZG93bmxvYWQgbWVzaGVzLCBhXG4gKiB3ZWJzZXJ2ZXIgb2Ygc29tZSBzb3J0IG11c3QgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZUFuZEF0dHJzIGFuIG9iamVjdCB3aGVyZSB0aGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBtZXNoIGFuZCB0aGUgdmFsdWUgaXMgdGhlIHVybCB0byB0aGF0IG1lc2gncyBPQkogZmlsZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRpb25DYWxsYmFjayBzaG91bGQgY29udGFpbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB0YWtlIG9uZSBwYXJhbWV0ZXI6IGFuIG9iamVjdCBhcnJheSB3aGVyZSB0aGUga2V5cyB3aWxsIGJlIHRoZSB1bmlxdWUgb2JqZWN0IG5hbWUgYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIGEgTWVzaCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzaGVzIEluIGNhc2Ugb3RoZXIgbWVzaGVzIGFyZSBsb2FkZWQgc2VwYXJhdGVseSBvciBpZiBhIHByZXZpb3VzbHkgZGVjbGFyZWQgdmFyaWFibGUgaXMgZGVzaXJlZCB0byBiZSB1c2VkLCBwYXNzIGluIGEgKHBvc3NpYmx5IGVtcHR5KSBqc29uIG9iamVjdCBvZiB0aGUgcGF0dGVybjogeyAnPG1lc2hfbmFtZT4nOiBPQkouTWVzaCB9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRNZXNoZXMoXG4gICAgbmFtZUFuZFVSTHM6IE5hbWVBbmRVcmxzLFxuICAgIGNvbXBsZXRpb25DYWxsYmFjazogKG1lc2hlczogTWVzaE1hcCkgPT4gdm9pZCxcbiAgICBtZXNoZXM6IE1lc2hNYXAsXG4pIHtcbiAgICBpZiAobWVzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVzaGVzID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVkOiBQcm9taXNlPFtzdHJpbmcsIE1lc2hdPltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1lc2hfbmFtZSBpbiBuYW1lQW5kVVJMcykge1xuICAgICAgICBpZiAoIW5hbWVBbmRVUkxzLmhhc093blByb3BlcnR5KG1lc2hfbmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IG5hbWVBbmRVUkxzW21lc2hfbmFtZV07XG4gICAgICAgIGNvbXBsZXRlZC5wdXNoKFxuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFttZXNoX25hbWUsIG5ldyBNZXNoKGRhdGEpXSBhcyBbc3RyaW5nLCBNZXNoXTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLmFsbChjb21wbGV0ZWQpLnRoZW4obXMgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZXNoXSBvZiBtcykge1xuICAgICAgICAgICAgbWVzaGVzW25hbWVdID0gbWVzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wbGV0aW9uQ2FsbGJhY2sobWVzaGVzKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZEdMQnVmZmVyIGV4dGVuZHMgV2ViR0xCdWZmZXIge1xuICAgIGl0ZW1TaXplOiBudW1iZXI7XG4gICAgbnVtSXRlbXM6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gX2J1aWxkQnVmZmVyKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IEdMZW51bSwgZGF0YTogbnVtYmVyW10sIGl0ZW1TaXplOiBudW1iZXIpOiBFeHRlbmRlZEdMQnVmZmVyIHtcbiAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSBhcyBFeHRlbmRlZEdMQnVmZmVyO1xuICAgIGNvbnN0IGFycmF5VmlldyA9IHR5cGUgPT09IGdsLkFSUkFZX0JVRkZFUiA/IEZsb2F0MzJBcnJheSA6IFVpbnQxNkFycmF5O1xuICAgIGdsLmJpbmRCdWZmZXIodHlwZSwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKHR5cGUsIG5ldyBhcnJheVZpZXcoZGF0YSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICBidWZmZXIuaXRlbVNpemUgPSBpdGVtU2l6ZTtcbiAgICBidWZmZXIubnVtSXRlbXMgPSBkYXRhLmxlbmd0aCAvIGl0ZW1TaXplO1xuICAgIHJldHVybiBidWZmZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzaFdpdGhCdWZmZXJzIGV4dGVuZHMgTWVzaCB7XG4gICAgbm9ybWFsQnVmZmVyOiBFeHRlbmRlZEdMQnVmZmVyO1xuICAgIHRleHR1cmVCdWZmZXI6IEV4dGVuZGVkR0xCdWZmZXI7XG4gICAgdmVydGV4QnVmZmVyOiBFeHRlbmRlZEdMQnVmZmVyO1xuICAgIGluZGV4QnVmZmVyOiBFeHRlbmRlZEdMQnVmZmVyO1xufVxuXG4vKipcbiAqIFRha2VzIGluIHRoZSBXZWJHTCBjb250ZXh0IGFuZCBhIE1lc2gsIHRoZW4gY3JlYXRlcyBhbmQgYXBwZW5kcyB0aGUgYnVmZmVyc1xuICogdG8gdGhlIG1lc2ggb2JqZWN0IGFzIGF0dHJpYnV0ZXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBgY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJylgIGNvbnRleHQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7TWVzaH0gbWVzaCBhIHNpbmdsZSBgT0JKLk1lc2hgIGluc3RhbmNlXG4gKlxuICogVGhlIG5ld2x5IGNyZWF0ZWQgbWVzaCBhdHRyaWJ1dGVzIGFyZTpcbiAqXG4gKiBBdHRyYnV0ZSB8IERlc2NyaXB0aW9uXG4gKiA6LS0tIHwgLS0tXG4gKiAqKm5vcm1hbEJ1ZmZlcioqICAgICAgIHxjb250YWlucyB0aGUgbW9kZWwmIzM5O3MgVmVydGV4IE5vcm1hbHNcbiAqIG5vcm1hbEJ1ZmZlci5pdGVtU2l6ZSAgfHNldCB0byAzIGl0ZW1zXG4gKiBub3JtYWxCdWZmZXIubnVtSXRlbXMgIHx0aGUgdG90YWwgbnVtYmVyIG9mIHZlcnRleCBub3JtYWxzXG4gKiB8XG4gKiAqKnRleHR1cmVCdWZmZXIqKiAgICAgIHxjb250YWlucyB0aGUgbW9kZWwmIzM5O3MgVGV4dHVyZSBDb29yZGluYXRlc1xuICogdGV4dHVyZUJ1ZmZlci5pdGVtU2l6ZSB8c2V0IHRvIDIgaXRlbXNcbiAqIHRleHR1cmVCdWZmZXIubnVtSXRlbXMgfHRoZSBudW1iZXIgb2YgdGV4dHVyZSBjb29yZGluYXRlc1xuICogfFxuICogKip2ZXJ0ZXhCdWZmZXIqKiAgICAgICB8Y29udGFpbnMgdGhlIG1vZGVsJiMzOTtzIFZlcnRleCBQb3NpdGlvbiBDb29yZGluYXRlcyAoZG9lcyBub3QgaW5jbHVkZSB3KVxuICogdmVydGV4QnVmZmVyLml0ZW1TaXplICB8c2V0IHRvIDMgaXRlbXNcbiAqIHZlcnRleEJ1ZmZlci5udW1JdGVtcyAgfHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGljZXNcbiAqIHxcbiAqICoqaW5kZXhCdWZmZXIqKiAgICAgICAgfGNvbnRhaW5zIHRoZSBpbmRpY2VzIG9mIHRoZSBmYWNlc1xuICogaW5kZXhCdWZmZXIuaXRlbVNpemUgICB8aXMgc2V0IHRvIDFcbiAqIGluZGV4QnVmZmVyLm51bUl0ZW1zICAgfHRoZSB0b3RhbCBudW1iZXIgb2YgaW5kaWNlc1xuICpcbiAqIEEgc2ltcGxlIGV4YW1wbGUgKGEgbG90IG9mIHN0ZXBzIGFyZSBtaXNzaW5nLCBzbyBkb24ndCBjb3B5IGFuZCBwYXN0ZSk6XG4gKlxuICogICAgIGNvbnN0IGdsICAgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSxcbiAqICAgICAgICAgbWVzaCA9IE9CSi5NZXNoKG9ial9maWxlX2RhdGEpO1xuICogICAgIC8vIGNvbXBpbGUgdGhlIHNoYWRlcnMgYW5kIGNyZWF0ZSBhIHNoYWRlciBwcm9ncmFtXG4gKiAgICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAqICAgICAvLyBjb21waWxhdGlvbiBzdHVmZiBoZXJlXG4gKiAgICAgLi4uXG4gKiAgICAgLy8gbWFrZSBzdXJlIHlvdSBoYXZlIHZlcnRleCwgdmVydGV4IG5vcm1hbCwgYW5kIHRleHR1cmUgY29vcmRpbmF0ZVxuICogICAgIC8vIGF0dHJpYnV0ZXMgbG9jYXRlZCBpbiB5b3VyIHNoYWRlcnMgYW5kIGF0dGFjaCB0aGVtIHRvIHRoZSBzaGFkZXIgcHJvZ3JhbVxuICogICAgIHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlKTtcbiAqXG4gKiAgICAgc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcImFWZXJ0ZXhOb3JtYWxcIik7XG4gKiAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGUpO1xuICpcbiAqICAgICBzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVRleHR1cmVDb29yZFwiKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSk7XG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSB0aGUgdmVydGV4LCB2ZXJ0ZXggbm9ybWFsLCBhbmQgdGV4dHVyZSBjb29yZGluYXRlIGJ1ZmZlcnNcbiAqICAgICAvLyBhbmQgc2F2ZSBvbiB0byB0aGUgbWVzaCBvYmplY3RcbiAqICAgICBPQkouaW5pdE1lc2hCdWZmZXJzKGdsLCBtZXNoKTtcbiAqXG4gKiAgICAgLy8gbm93IHRvIHJlbmRlciB0aGUgbWVzaFxuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnZlcnRleEJ1ZmZlcik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCBtZXNoLnZlcnRleEJ1ZmZlci5pdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAqICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIG1lc2ggZG9lc24ndCBjb250YWluXG4gKiAgICAgLy8gYW55IHRleHR1cmUgY29vcmRpbmF0ZXMgKGUuZy4gc3V6YW5uZS5vYmogaW4gdGhlIGRldmVsb3BtZW50IGJyYW5jaCkuXG4gKiAgICAgLy8gaW4gdGhpcyBjYXNlLCB0aGUgdGV4dHVyZSB2ZXJ0ZXhBdHRyaWJBcnJheSB3aWxsIG5lZWQgdG8gYmUgZGlzYWJsZWRcbiAqICAgICAvLyBiZWZvcmUgdGhlIGNhbGwgdG8gZHJhd0VsZW1lbnRzXG4gKiAgICAgaWYoIW1lc2gudGV4dHVyZXMubGVuZ3RoKXtcbiAqICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSk7XG4gKiAgICAgfVxuICogICAgIGVsc2V7XG4gKiAgICAgICAvLyBpZiB0aGUgdGV4dHVyZSB2ZXJ0ZXhBdHRyaWJBcnJheSBoYXMgYmVlbiBwcmV2aW91c2x5XG4gKiAgICAgICAvLyBkaXNhYmxlZCwgdGhlbiBpdCBuZWVkcyB0byBiZSByZS1lbmFibGVkXG4gKiAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSk7XG4gKiAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbWVzaC50ZXh0dXJlQnVmZmVyKTtcbiAqICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS50ZXh0dXJlQ29vcmRBdHRyaWJ1dGUsIG1lc2gudGV4dHVyZUJ1ZmZlci5pdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAqICAgICB9XG4gKlxuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLm5vcm1hbEJ1ZmZlcik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleE5vcm1hbEF0dHJpYnV0ZSwgbWVzaC5ub3JtYWxCdWZmZXIuaXRlbVNpemUsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gKlxuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG1vZGVsLm1lc2guaW5kZXhCdWZmZXIpO1xuICogICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIG1vZGVsLm1lc2guaW5kZXhCdWZmZXIubnVtSXRlbXMsIGdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXNoQnVmZmVycyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBtZXNoOiBNZXNoKTogTWVzaFdpdGhCdWZmZXJzIHtcbiAgICAobWVzaCBhcyBNZXNoV2l0aEJ1ZmZlcnMpLm5vcm1hbEJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnZlcnRleE5vcm1hbHMsIDMpO1xuICAgIChtZXNoIGFzIE1lc2hXaXRoQnVmZmVycykudGV4dHVyZUJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnRleHR1cmVzLCBtZXNoLnRleHR1cmVTdHJpZGUpO1xuICAgIChtZXNoIGFzIE1lc2hXaXRoQnVmZmVycykudmVydGV4QnVmZmVyID0gX2J1aWxkQnVmZmVyKGdsLCBnbC5BUlJBWV9CVUZGRVIsIG1lc2gudmVydGljZXMsIDMpO1xuICAgIChtZXNoIGFzIE1lc2hXaXRoQnVmZmVycykuaW5kZXhCdWZmZXIgPSBfYnVpbGRCdWZmZXIoZ2wsIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBtZXNoLmluZGljZXMsIDEpO1xuXG4gICAgcmV0dXJuIG1lc2ggYXMgTWVzaFdpdGhCdWZmZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTWVzaEJ1ZmZlcnMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgbWVzaDogTWVzaFdpdGhCdWZmZXJzKSB7XG4gICAgZ2wuZGVsZXRlQnVmZmVyKG1lc2gubm9ybWFsQnVmZmVyKTtcbiAgICBnbC5kZWxldGVCdWZmZXIobWVzaC50ZXh0dXJlQnVmZmVyKTtcbiAgICBnbC5kZWxldGVCdWZmZXIobWVzaC52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmRlbGV0ZUJ1ZmZlcihtZXNoLmluZGV4QnVmZmVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=