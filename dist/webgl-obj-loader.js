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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(28);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(44);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(41)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(21)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(11);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(28);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Layout = undefined;var _classCallCheck2 = __webpack_require__(17);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                            */var
Layout =
/**
          * Create a Layout object. This constructor will throw if any duplicate
          * attributes are given.
          * @param {Array} ...attributes - An ordered list of attributes that
          *        describe the desired memory layout for each vertex attribute.
          *        <p>
          *
          * @see {@link Mesh}
          */exports.Layout =
function Layout() {(0, _classCallCheck3.default)(this, Layout);for (var _len = arguments.length, attributes = Array(_len), _key = 0; _key < _len; _key++) {attributes[_key] = arguments[_key];}
    this.attributes = attributes;
    var offset = 0;
    var maxStrideMultiple = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var attribute = _step.value;
            if (this[attribute.key]) {
                throw new DuplicateAttributeException(attribute);
            }
            // Add padding to satisfy WebGL's requirement that all
            // vertexAttribPointer calls have an offset that is a multiple of
            // the type size.
            if (offset % attribute.sizeOfType !== 0) {
                offset += attribute.sizeOfType - offset % attribute.sizeOfType;
                console.warn('Layout requires padding before ' + attribute.key + ' attribute');
            }
            this[attribute.key] = {
                'attribute': attribute,
                'size': attribute.size,
                'type': attribute.type,
                'normalized': attribute.normalized,
                'offset': offset };

            offset += attribute.sizeInBytes;
            maxStrideMultiple = Math.max(
            maxStrideMultiple,
            attribute.sizeOfType);
        }
        // Add padding to the end to satisfy WebGL's requirement that all
        // vertexAttribPointer calls have a stride that is a multiple of the
        // type size. Because we're putting differently sized attributes into
        // the same buffer, it must be padded to a multiple of the largest
        // type size.
    } catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}if (offset % maxStrideMultiple !== 0) {
        offset += maxStrideMultiple - offset % maxStrideMultiple;
        console.warn('Layout requires padding at the back');
    }
    this.stride = offset;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
        for (var _iterator2 = attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _attribute = _step2.value;
            this[_attribute.key].stride = this.stride;
        }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
};



/**
    * An exception for when two or more of the same attributes are found in the
    * same layout.
    * @private
    */var
DuplicateAttributeException =
/**
                               * Create a DuplicateAttributeException
                               * @param {Attribute} attribute - The attribute that was found more than
                               *        once in the {@link Layout}
                               */
function DuplicateAttributeException(attribute) {(0, _classCallCheck3.default)(this, DuplicateAttributeException);
    this.message = 'found duplicate attribute: ' + attribute.key;
};


/**
    * Represents how a vertex attribute should be packed into an buffer.
    * @private
    */var
Attribute =
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
function Attribute(key, size, type) {var normalized = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;(0, _classCallCheck3.default)(this, Attribute);
    this.key = key;
    this.size = size;
    this.type = type;
    this.normalized = false;
    this.sizeOfType = sizeInBytesOfType(type);
    this.sizeInBytes = this.sizeOfType * size;
};


/**
    * @param {string} type - A type accepted by {@link Attribute}.
    * @return The size (in bytes) for a given type.
    * @see {@link Attribute}
    * @private
    */
function sizeInBytesOfType(type) {
    switch (type) {
        case 'BYTE':
        case 'UNSIGNED_BYTE':
            return 1;
        case 'SHORT':
        case 'UNSIGNED_SHORT':
            return 2;
        case 'FLOAT':
            return 4;}

}

// Geometry attributes
/**
 * Attribute layout to pack a vertex's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.POSITION = new Attribute('position', 3, 'FLOAT');

/**
                                                          * Attribute layout to pack a vertex's normal's x, y, & z as floats
                                                          *
                                                          * @see {@link Layout}
                                                          */
Layout.NORMAL = new Attribute('normal', 3, 'FLOAT');

/**
                                                      * Attribute layout to pack a vertex's normal's x, y, & z as floats.
                                                      * <p>
                                                      * This value will be computed on-the-fly based on the texture coordinates.
                                                      * If no texture coordinates are available, the generated value will default to
                                                      * 0, 0, 0.
                                                      *
                                                      * @see {@link Layout}
                                                      */
Layout.TANGENT = new Attribute('tangent', 3, 'FLOAT');

/**
                                                        * Attribute layout to pack a vertex's normal's bitangent x, y, & z as floats.
                                                        * <p>
                                                        * This value will be computed on-the-fly based on the texture coordinates.
                                                        * If no texture coordinates are available, the generated value will default to
                                                        * 0, 0, 0.
                                                        * @see {@link Layout}
                                                        */
Layout.BITANGENT = new Attribute('bitangent', 3, 'FLOAT');

/**
                                                            * Attribute layout to pack a vertex's texture coordinates' u & v as floats
                                                            *
                                                            * @see {@link Layout}
                                                            */
Layout.UV = new Attribute('uv', 2, 'FLOAT');

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
Layout.MATERIAL_INDEX = new Attribute('materialIndex', 1, 'SHORT');
Layout.MATERIAL_ENABLED = new Attribute('materialEnabled', 1, 'UNSIGNED_SHORT');
Layout.AMBIENT = new Attribute('ambient', 3, 'FLOAT');
Layout.DIFFUSE = new Attribute('diffuse', 3, 'FLOAT');
Layout.SPECULAR = new Attribute('specular', 3, 'FLOAT');
Layout.SPECULAR_EXPONENT = new Attribute('specularExponent', 3, 'FLOAT');
Layout.EMISSIVE = new Attribute('emissive', 3, 'FLOAT');
Layout.TRANSMISSION_FILTER = new Attribute('transmissionFilter', 3, 'FLOAT');
Layout.DISSOLVE = new Attribute('dissolve', 1, 'FLOAT');
Layout.ILLUMINATION = new Attribute('illumination', 1, 'UNSIGNED_SHORT');
Layout.REFRACTION_INDEX = new Attribute('refractionIndex', 1, 'FLOAT');
Layout.SHARPNESS = new Attribute('sharpness', 1, 'FLOAT');
Layout.MAP_DIFFUSE = new Attribute('mapDiffuse', 1, 'SHORT');
Layout.MAP_AMBIENT = new Attribute('mapAmbient', 1, 'SHORT');
Layout.MAP_SPECULAR = new Attribute('mapSpecular', 1, 'SHORT');
Layout.MAP_SPECULAR_EXPONENT = new Attribute('mapSpecularExponent', 1, 'SHORT');
Layout.MAP_DISSOLVE = new Attribute('mapDissolve', 1, 'SHORT');
Layout.ANTI_ALIASING = new Attribute('antiAliasing', 1, 'UNSIGNED_SHORT');
Layout.MAP_BUMP = new Attribute('mapBump', 1, 'SHORT');
Layout.MAP_DISPLACEMENT = new Attribute('mapDisplacement', 1, 'SHORT');
Layout.MAP_DECAL = new Attribute('mapDecal', 1, 'SHORT');
Layout.MAP_EMISSIVE = new Attribute('mapEmissive', 1, 'SHORT');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _toConsumableArray2 = __webpack_require__(39);var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _classCallCheck2 = __webpack_require__(17);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(34);var _createClass3 = _interopRequireDefault(_createClass2);var _regenerator = __webpack_require__(65);var _regenerator2 = _interopRequireDefault(_regenerator);var _layout = __webpack_require__(18);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _marked = /*#__PURE__*/_regenerator2.default.mark(

triangulate);function triangulate(elements) {return _regenerator2.default.wrap(function triangulate$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                    elements.length <= 3)) {_context.next = 5;break;}_context.next = 3;return (
                        elements);case 3:_context.next = 14;break;case 5:if (!(
                    elements.length == 4)) {_context.next = 12;break;}_context.next = 8;return (
                        [elements[0], elements[1], elements[2]]);case 8:_context.next = 10;return (
                        [elements[2], elements[3], elements[0]]);case 10:_context.next = 14;break;case 12:_context.next = 14;return (

                        [elements[0], elements[1], elements[2]]);case 14:case 'end':return _context.stop();}}}, _marked, this);}



/**
                                                                                                                                  * The main Mesh class. The constructor will parse through the OBJ file data
                                                                                                                                  * and collect the vertex, vertex normal, texture, and face information. This
                                                                                                                                  * information can then be used later on when creating your VBOs. See
                                                                                                                                  * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
                                                                                                                                  */var
Mesh = function () {
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
                     */
    function Mesh(objectData, options) {(0, _classCallCheck3.default)(this, Mesh);
        options = options || {};
        options.materials = options.materials || {};
        options.enableWTextureCoord = !!options.enableWTextureCoord;

        var self = this;
        // the list of unique vertex, normal, texture, attributes
        self.vertices = [];
        self.vertexNormals = [];
        self.textures = [];
        // the indicies to draw the faces
        self.indices = [];
        self.textureStride = options.enableWTextureCoord ? 3 : 2;

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











        this.name = '';
        var verts = [];
        var vertNormals = [];
        var textures = [];
        var unpacked = {};
        var materialNamesByIndex = [];
        var materialIndicesByName = {};
        // keep track of what material we've seen last
        var currentMaterialIndex = -1;
        // unpacking stuff
        unpacked.verts = [];
        unpacked.norms = [];
        unpacked.textures = [];
        unpacked.hashindices = {};
        unpacked.indices = [];
        unpacked.materialIndices = [];
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
            if (!line || line.startsWith('#')) {
                continue;
            }
            var elements = line.split(WHITESPACE_RE);
            elements.shift();

            if (VERTEX_RE.test(line)) {
                // if this is a vertex
                verts.push.apply(verts, (0, _toConsumableArray3.default)(elements));
            } else if (NORMAL_RE.test(line)) {
                // if this is a vertex normal
                vertNormals.push.apply(vertNormals, (0, _toConsumableArray3.default)(elements));
            } else if (TEXTURE_RE.test(line)) {
                var coords = elements;
                // by default, the loader will only look at the U and V
                // coordinates of the vt declaration. So, this truncates the
                // elements to only those 2 values. If W texture coordinate
                // support is enabled, then the texture coordinate is
                // expected to have three values in it.
                if (elements.length > 2 && !options.enableWTextureCoord) {
                    coords = elements.slice(0, 1);
                }
                // If for some reason W texture coordinate support is enabled
                // and only the U and V coordinates are given, then we supply
                // the default value of 0 so that the stride length is correct
                // when the textures are unpacked below.
                else if (elements.length === 2 && options.enableWTextureCoord) {
                        coords.push(0);
                    }
                textures.push.apply(textures, (0, _toConsumableArray3.default)(coords));
            } else if (USE_MATERIAL_RE.test(line)) {
                var materialName = elements[0];

                // check to see if we've ever seen it before
                if (!(materialName in materialIndicesByName)) {
                    // new material we've never seen
                    materialNamesByIndex.push(materialName);
                    materialIndicesByName[materialName] = materialNamesByIndex.length - 1;
                }

                // keep track of the current material index
                currentMaterialIndex = materialIndicesByName[materialName];
            } else if (FACE_RE.test(line)) {
                // if this is a face
                /*
                split this face into an array of Vertex groups
                for example:
                   f 16/92/11 14/101/22 1/69/1
                becomes:
                  ['16/92/11', '14/101/22', '1/69/1'];
                */
                var triangles = triangulate(elements);var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                    for (var _iterator = triangles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _elements = _step.value;
                        for (var j = 0, eleLen = _elements.length; j < eleLen; j++) {
                            var hash0 = _elements[0] + ',' + currentMaterialIndex;
                            var hash = _elements[j] + ',' + currentMaterialIndex;
                            if (hash in unpacked.hashindices) {
                                unpacked.indices.push(unpacked.hashindices[hash]);
                            } else {
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
                                var vertex = _elements[j].split('/');
                                // it's possible for faces to only specify the vertex
                                // and the normal. In this case, vertex will only have
                                // a length of 2 and not 3 and the normal will be the
                                // second item in the list with an index of 1.
                                var normalIndex = vertex.length - 1;
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
                                    var stride = options.enableWTextureCoord ? 3 : 2;
                                    unpacked.textures.push(+textures[(vertex[1] - 1) * stride + 0]);
                                    unpacked.textures.push(+textures[(vertex[1] - 1) * stride + 1]);
                                    if (options.enableWTextureCoord) {
                                        unpacked.textures.push(+textures[(vertex[1] - 1) * stride + 2]);
                                    }
                                }
                                // Vertex normals
                                unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 0]);
                                unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 1]);
                                unpacked.norms.push(+vertNormals[(vertex[normalIndex] - 1) * 3 + 2]);
                                // Vertex material indices
                                unpacked.materialIndices.push(currentMaterialIndex);
                                // add the newly created Vertex to the list of indices
                                unpacked.hashindices[hash] = unpacked.index;
                                unpacked.indices.push(unpacked.index);
                                // increment the counter
                                unpacked.index += 1;
                            }
                        }
                    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
            }
        }
        self.vertices = unpacked.verts;
        self.vertexNormals = unpacked.norms;
        self.textures = unpacked.textures;
        self.vertexMaterialIndices = unpacked.materialIndices;
        self.indices = unpacked.indices;

        self.materialNames = materialNamesByIndex;
        self.materialIndices = materialIndicesByName;
        self.materialsByIndex = {};
    }

    /**
       * @param {Layout} layout - A {@link Layout} object that describes the
       * desired memory layout of the generated buffer
       * @return {ArrayBuffer} The packed array in the ... TODO
       */(0, _createClass3.default)(Mesh, [{ key: 'makeBufferData', value: function makeBufferData(
        layout) {
            var numItems = this.vertices.length / 3;
            var buffer = new ArrayBuffer(layout.stride * numItems);
            buffer.numItems = numItems;
            var dataView = new DataView(buffer);
            for (var i = 0, vertexOffset = 0; i < numItems; i++) {
                vertexOffset = i * layout.stride;
                // copy in the vertex data in the order and format given by the
                // layout param
                var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = layout.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var attribute = _step2.value;
                        var offset = vertexOffset + layout[attribute.key].offset;
                        switch (attribute.key) {
                            case _layout.Layout.POSITION.key:
                                dataView.setFloat32(offset, this.vertices[i * 3], true);
                                dataView.setFloat32(offset + 4, this.vertices[i * 3 + 1], true);
                                dataView.setFloat32(offset + 8, this.vertices[i * 3 + 2], true);
                                break;
                            case _layout.Layout.UV.key:
                                dataView.setFloat32(offset, this.textures[i * 2], true);
                                dataView.setFloat32(offset + 4, this.vertices[i * 2 + 1], true);
                                break;
                            case _layout.Layout.NORMAL.key:
                                dataView.setFloat32(offset, this.vertexNormals[i * 3], true);
                                dataView.setFloat32(offset + 4, this.vertexNormals[i * 3 + 1], true);
                                dataView.setFloat32(offset + 8, this.vertexNormals[i * 3 + 2], true);
                                break;
                            case _layout.Layout.MATERIAL_INDEX.key:
                                dataView.setInt16(offset, this.vertexMaterialIndices[i], true);
                                break;
                            case _layout.Layout.AMBIENT.key:{
                                    var materialIndex = this.vertexMaterialIndices[i];
                                    var material = this.materialsByIndex[materialIndex];
                                    if (!material) {
                                        console.warn('Material "' + this.materialNames[materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, material.ambient[0], true);
                                    dataView.setFloat32(offset + 4, material.ambient[1], true);
                                    dataView.setFloat32(offset + 8, material.ambient[2], true);
                                    break;
                                }
                            case _layout.Layout.DIFFUSE.key:{
                                    var _materialIndex = this.vertexMaterialIndices[i];
                                    var _material = this.materialsByIndex[_materialIndex];
                                    if (!_material) {
                                        console.warn('Material "' + this.materialNames[_materialIndex] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material.diffuse[0], true);
                                    dataView.setFloat32(offset + 4, _material.diffuse[1], true);
                                    dataView.setFloat32(offset + 8, _material.diffuse[2], true);
                                    break;
                                }
                            case _layout.Layout.SPECULAR.key:{
                                    var _materialIndex2 = this.vertexMaterialIndices[i];
                                    var _material2 = this.materialsByIndex[_materialIndex2];
                                    if (!_material2) {
                                        console.warn('Material "' + this.materialNames[_materialIndex2] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material2.specular[0], true);
                                    dataView.setFloat32(offset + 4, _material2.specular[1], true);
                                    dataView.setFloat32(offset + 8, _material2.specular[2], true);
                                    break;
                                }
                            case _layout.Layout.SPECULAR_EXPONENT.key:{
                                    var _materialIndex3 = this.vertexMaterialIndices[i];
                                    var _material3 = this.materialsByIndex[_materialIndex3];
                                    if (!_material3) {
                                        console.warn('Material "' + this.materialNames[_materialIndex3] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material3.specularExponent, true);
                                    break;
                                }
                            case _layout.Layout.EMISSIVE.key:{
                                    var _materialIndex4 = this.vertexMaterialIndices[i];
                                    var _material4 = this.materialsByIndex[_materialIndex4];
                                    if (!_material4) {
                                        console.warn('Material "' + this.materialNames[_materialIndex4] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material4.emissive[0], true);
                                    dataView.setFloat32(offset + 4, _material4.emissive[1], true);
                                    dataView.setFloat32(offset + 8, _material4.emissive[2], true);
                                    break;
                                }
                            case _layout.Layout.TRANSMISSION_FILTER.key:{
                                    var _materialIndex5 = this.vertexMaterialIndices[i];
                                    var _material5 = this.materialsByIndex[_materialIndex5];
                                    if (!_material5) {
                                        console.warn('Material "' + this.materialNames[_materialIndex5] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material5.transmissionFilter[0], true);
                                    dataView.setFloat32(offset + 4, _material5.transmissionFilter[1], true);
                                    dataView.setFloat32(offset + 8, _material5.transmissionFilter[2], true);
                                    break;
                                }
                            case _layout.Layout.DISSOLVE.key:{
                                    var _materialIndex6 = this.vertexMaterialIndices[i];
                                    var _material6 = this.materialsByIndex[_materialIndex6];
                                    if (!_material6) {
                                        console.warn('Material "' + this.materialNames[_materialIndex6] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material6.dissolve, true);
                                    break;
                                }
                            case _layout.Layout.ILLUMINATION.key:{
                                    var _materialIndex7 = this.vertexMaterialIndices[i];
                                    var _material7 = this.materialsByIndex[_materialIndex7];
                                    if (!_material7) {
                                        console.warn('Material "' + this.materialNames[_materialIndex7] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setInt16(offset, _material7.illumination, true);
                                    break;
                                }
                            case _layout.Layout.REFRACTION_INDEX.key:{
                                    var _materialIndex8 = this.vertexMaterialIndices[i];
                                    var _material8 = this.materialsByIndex[_materialIndex8];
                                    if (!_material8) {
                                        console.warn('Material "' + this.materialNames[_materialIndex8] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material8.refractionIndex, true);
                                    break;
                                }
                            case _layout.Layout.SHARPNESS.key:{
                                    var _materialIndex9 = this.vertexMaterialIndices[i];
                                    var _material9 = this.materialsByIndex[_materialIndex9];
                                    if (!_material9) {
                                        console.warn('Material "' + this.materialNames[_materialIndex9] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setFloat32(offset, _material9.sharpness, true);
                                    break;
                                }
                            case _layout.Layout.ANTI_ALIASING.key:{
                                    var _materialIndex10 = this.vertexMaterialIndices[i];
                                    var _material10 = this.materialsByIndex[_materialIndex10];
                                    if (!_material10) {
                                        console.warn('Material "' + this.materialNames[_materialIndex10] + '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                                        break;
                                    }
                                    dataView.setInt16(offset, _material10.antiAliasing, true);
                                    break;
                                }}

                    }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
            }
            return buffer;
        } }, { key: 'makeIndexBufferData', value: function makeIndexBufferData()

        {
            var buffer = new Uint16Array(this.indices);
            buffer.numItems = this.indices.length;
            return buffer;
        } }, { key: 'addMaterialLibrary', value: function addMaterialLibrary(

        mtl) {
            for (var name in mtl.materials) {
                if (!(name in this.materialIndices)) {
                    // This material is not referenced by the mesh
                    continue;
                }

                var material = mtl.materials[name];

                // Find the material index for this material
                var materialIndex = this.materialIndices[material.name];

                // Put the material into the materialsByIndex object at the right
                // spot as determined when the obj file was parsed
                this.materialsByIndex[materialIndex] = material;
            }
        } }]);return Mesh;}();exports.default = Mesh;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(4);
var has = __webpack_require__(8);
var Iterators = __webpack_require__(3);
var $iterCreate = __webpack_require__(47);
var setToStringTag = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(43);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(10);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(11);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(33);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(3);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.MaterialLibrary = exports.Material = undefined;var _toArray2 = __webpack_require__(68);var _toArray3 = _interopRequireDefault(_toArray2);var _createClass2 = __webpack_require__(34);var _createClass3 = _interopRequireDefault(_createClass2);var _classCallCheck2 = __webpack_require__(17);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * The Material class.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var
Material =
/**
            * Constructor
            * @param {String} name the unique name of the material
            */exports.Material =
function Material(name) {(0, _classCallCheck3.default)(this, Material);
  // the unique material ID.
  this.name = name;
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
  this.mapDiffuse = null;
  // map_Ka
  this.mapAmbient = null;
  // map_Ks
  this.mapSpecular = null;
  // map_Ns
  this.mapSpecularExponent = null;
  // map_d
  this.mapDissolve = null;
  // map_aat
  this.antiAliasing = false;
  // map_bump or bump
  this.mapBump = null;
  // disp
  this.mapDisplacement = null;
  // decal
  this.mapDecal = null;
  // map_Ke
  this.mapEmissive = null;
  // refl - when the reflection type is a cube, there will be multiple refl
  //        statements for each side of the cube. If it's a spherical
  //        reflection, there should only ever be one.
  this.mapReflections = [];
};


/**
    * https://en.wikipedia.org/wiki/Wavefront_.obj_file
    * http://paulbourke.net/dataformats/mtl/
    */var
MaterialLibrary = exports.MaterialLibrary = function () {
  /**
                                                          * Constructs the Material Parser
                                                          * @param {String} mtlData the MTL file contents
                                                          */
  function MaterialLibrary(mtlData) {(0, _classCallCheck3.default)(this, MaterialLibrary);
    this.data = mtlData;
    this.currentMaterial = null;
    this.materials = {};

    this.parse();
  }

  /* eslint-disable camelcase */
  /* the function names here disobey camelCase conventions
                                    to make parsing/routing easier. see the parse function
                                    documentation for more information. */

  /**
                                                                            * Creates a new Material object and adds to the registry.
                                                                            * @param {string[]} tokens the tokens associated with the directive
                                                                            */(0, _createClass3.default)(MaterialLibrary, [{ key: 'parse_newmtl', value: function parse_newmtl(
    tokens) {
      var name = tokens[0];
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
       * @param {string[]} tokens the tokens associated with the directive
       * @return {*} a 3 element array containing the R, G, and B values
       * of the color.
       */ }, { key: 'parseColor', value: function parseColor(
    tokens) {
      if (tokens[0] == 'spectral') {
        console.error(
        'The MTL parser does not support spectral curve files. You will ' +
        'need to convert the MTL colors to either RGB or CIEXYZ.');

        return;
      }

      if (tokens[0] == 'xyz') {
        console.warn('TODO: convert XYZ to RGB');
        return;
      }

      // from my understanding of the spec, RGB values at this point
      // will either be 3 floats or exactly 1 float, so that's the check
      // that i'm going to perform here
      if (tokens.length == 3) {
        return tokens.map(parseFloat);
      }

      // Since tokens at this point has a length of 3, we're going to assume
      // it's exactly 1, skipping the check for 2.
      var value = parseFloat(tokens[0]);
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Ka', value: function parse_Ka(
    tokens) {
      this.currentMaterial.ambient = this.parseColor(tokens);
    }

    /**
       * Diffuse Reflectivity
       *
       * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules
       * are the same
       *
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Kd', value: function parse_Kd(
    tokens) {
      this.currentMaterial.diffuse = this.parseColor(tokens);
    }

    /**
       * Spectral Reflectivity
       *
       * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules
       * are the same
       *
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Ks', value: function parse_Ks(
    tokens) {
      this.currentMaterial.specular = this.parseColor(tokens);
    }

    /**
       * Emissive
       *
       * The amount and color of light emitted by the object.
       *
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Ke', value: function parse_Ke(
    tokens) {
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Tf', value: function parse_Tf(
    tokens) {
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_d', value: function parse_d(
    tokens) {
      // this ignores the -halo option as I can't find any documentation on what
      // it's supposed to be.
      this.currentMaterial.dissolve = parseFloat(tokens.pop());
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_illum', value: function parse_illum(
    tokens) {
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Ni', value: function parse_Ni(
    tokens) {
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_Ns', value: function parse_Ns(
    tokens) {
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
       * @param {string[]} tokens the tokens associated with the directive
       */ }, { key: 'parse_sharpness', value: function parse_sharpness(
    tokens) {
      this.currentMaterial.sharpness = parseInt(tokens[0]);
    }

    /**
       * Parses the -cc flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -cc flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_cc', value: function parse_cc(
    values, options) {
      options.colorCorrection = values[0] == 'on';
    }

    /**
       * Parses the -blendu flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -blendu flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_blendu', value: function parse_blendu(
    values, options) {
      options.horizontalBlending = values[0] == 'on';
    }

    /**
       * Parses the -blendv flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -blendv flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_blendv', value: function parse_blendv(
    values, options) {
      options.verticalBlending = values[0] == 'on';
    }

    /**
       * Parses the -boost flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -boost flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_boost', value: function parse_boost(
    values, options) {
      options.boostMipMapSharpness = parseFloat(values[0]);
    }

    /**
       * Parses the -mm flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -mm flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_mm', value: function parse_mm(
    values, options) {
      options.modifyTextureMap.brightness = parseFloat(values[0]);
      options.modifyTextureMap.contrast = parseFloat(values[1]);
    }

    /**
       * Parses and sets the -o, -s, and -t  u, v, and w values
       *
       * @param {string[]} values the values passed to the -o, -s, -t flag
       * @param {Object} option the Object of either the -o, -s, -t option
       * @param {Integer} defaultValue the Object of all image options
       */ }, { key: 'parse_ost', value: function parse_ost(
    values, option, defaultValue) {
      while (values.length < 3) {
        values.push(defaultValue);
      }

      option.u = parseFloat(values[0]);
      option.v = parseFloat(values[1]);
      option.w = parseFloat(values[2]);
    }

    /**
       * Parses the -o flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -o flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_o', value: function parse_o(
    values, options) {
      this.parse_ost(values, options.offset, 0);
    }

    /**
       * Parses the -s flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -s flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_s', value: function parse_s(
    values, options) {
      this.parse_ost(values, options.scale, 1);
    }

    /**
       * Parses the -t flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -t flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_t', value: function parse_t(
    values, options) {
      this.parse_ost(values, options.turbulence, 0);
    }

    /**
       * Parses the -texres flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -texres flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_texres', value: function parse_texres(
    values, options) {
      options.textureResolution = parseFloat(values[0]);
    }

    /**
       * Parses the -clamp flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -clamp flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_clamp', value: function parse_clamp(
    values, options) {
      options.clamp = values[0] == 'on';
    }

    /**
       * Parses the -bm flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -bm flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_bm', value: function parse_bm(
    values, options) {
      options.bumpMultiplier = parseFloat(values[0]);
    }

    /**
       * Parses the -imfchan flag and updates the options object with the values.
       *
       * @param {string[]} values the values passed to the -imfchan flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_imfchan', value: function parse_imfchan(
    values, options) {
      options.imfChan = values[0];
    }

    /**
       * This only exists for relection maps and denotes the type of reflection.
       *
       * @param {string[]} values the values passed to the -type flag
       * @param {Object} options the Object of all image options
       */ }, { key: 'parse_type', value: function parse_type(
    values, options) {
      options.reflectionType = values[0];
    }

    /**
       * Parses the texture's options and returns an options object with the info
       *
       * @param {string[]} tokens all of the option tokens to pass to the texture
       * @return {Object} a complete object of objects to apply to the texture
       */ }, { key: 'parseOptions', value: function parseOptions(
    tokens) {
      var options = {
        colorCorrection: false,
        horizontalBlending: true,
        verticalBlending: true,
        boostMipMapSharpness: 0,
        modifyTextureMap: {
          brightness: 0,
          contrast: 1 },

        offset: { u: 0, v: 0, w: 0 },
        scale: { u: 1, v: 1, w: 1 },
        turbulence: { u: 0, v: 0, w: 0 },
        clamp: false,
        textureResolution: null,
        bumpMultiplier: 1,
        imfChan: null };


      var option = void 0;
      var values = void 0;
      var optionsToValues = {};

      tokens.reverse();

      while (tokens.length) {
        var token = tokens.pop();

        if (token.startsWith('-')) {
          option = token.substr(1);
          optionsToValues[option] = [];
        } else {
          optionsToValues[option].push(token);
        }
      }

      for (option in optionsToValues) {
        if (!optionsToValues.hasOwnProperty(option)) {
          continue;
        }
        values = optionsToValues[option];
        var optionMethod = this['parse_' + option];
        if (optionMethod) {
          optionMethod.bind(this)(values, options);
        }
      }

      return options;
    }

    /**
       * Parses the given texture map line.
       *
       * @param {string[]} tokens all of the tokens representing the texture
       * @return {Object} a complete object of objects to apply to the texture
       */ }, { key: 'parseMap', value: function parseMap(
    tokens) {
      // according to wikipedia:
      // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)
      // there is at least one vendor that places the filename before the options
      // rather than after (which is to spec). All options start with a '-'
      // so if the first token doesn't start with a '-', we're going to assume
      // it's the name of the map file.
      var filename = void 0;
      var options = void 0;
      if (!tokens[0].startsWith('-')) {var _tokens = (0, _toArray3.default)(
        tokens);filename = _tokens[0];options = _tokens.slice(1);
      } else {
        filename = tokens.pop();
        options = tokens;
      }

      options = this.parseOptions(options);
      options['filename'] = filename;
      return options;
    }

    /**
       * Parses the ambient map.
       *
       * @param {string[]} tokens list of tokens for the map_Ka direcive
       */ }, { key: 'parse_map_Ka', value: function parse_map_Ka(
    tokens) {
      this.currentMaterial.mapAmbient = this.parseMap(tokens);
    }

    /**
       * Parses the diffuse map.
       *
       * @param {string[]} tokens list of tokens for the map_Kd direcive
       */ }, { key: 'parse_map_Kd', value: function parse_map_Kd(
    tokens) {
      this.currentMaterial.mapDiffuse = this.parseMap(tokens);
    }

    /**
       * Parses the specular map.
       *
       * @param {string[]} tokens list of tokens for the map_Ks direcive
       */ }, { key: 'parse_map_Ks', value: function parse_map_Ks(
    tokens) {
      this.currentMaterial.mapSpecular = this.parseMap(tokens);
    }

    /**
       * Parses the emissive map.
       *
       * @param {string[]} tokens list of tokens for the map_Ke direcive
       */ }, { key: 'parse_map_Ke', value: function parse_map_Ke(
    tokens) {
      this.currentMaterial.mapEmissive = this.parseMap(tokens);
    }

    /**
       * Parses the specular exponent map.
       *
       * @param {string[]} tokens list of tokens for the map_Ns direcive
       */ }, { key: 'parse_map_Ns', value: function parse_map_Ns(
    tokens) {
      this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);
    }

    /**
       * Parses the dissolve map.
       *
       * @param {string[]} tokens list of tokens for the map_d direcive
       */ }, { key: 'parse_map_d', value: function parse_map_d(
    tokens) {
      this.currentMaterial.mapDissolve = this.parseMap(tokens);
    }

    /**
       * Parses the anti-aliasing option.
       *
       * @param {string[]} tokens list of tokens for the map_aat direcive
       */ }, { key: 'parse_map_aat', value: function parse_map_aat(
    tokens) {
      this.currentMaterial.antiAliasing = tokens[0] == 'on';
    }

    /**
       * Parses the bump map.
       *
       * @param {string[]} tokens list of tokens for the map_bump direcive
       */ }, { key: 'parse_map_bump', value: function parse_map_bump(
    tokens) {
      this.currentMaterial.mapBump = this.parseMap(tokens);
    }

    /**
       * Parses the bump map.
       *
       * @param {string[]} tokens list of tokens for the bump direcive
       */ }, { key: 'parse_bump', value: function parse_bump(
    tokens) {
      this.parse_map_bump(tokens);
    }

    /**
       * Parses the disp map.
       *
       * @param {string[]} tokens list of tokens for the disp direcive
       */ }, { key: 'parse_disp', value: function parse_disp(
    tokens) {
      this.currentMaterial.mapDisplacement = this.parseMap(tokens);
    }

    /**
       * Parses the decal map.
       *
       * @param {string[]} tokens list of tokens for the map_decal direcive
       */ }, { key: 'parse_decal', value: function parse_decal(
    tokens) {
      this.currentMaterial.mapDecal = this.parseMap(tokens);
    }

    /**
       * Parses the refl map.
       *
       * @param {string[]} tokens list of tokens for the refl direcive
       */ }, { key: 'parse_refl', value: function parse_refl(
    tokens) {
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
       */ }, { key: 'parse', value: function parse()
    {
      var lines = this.data.split(/\r?\n/);var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var line = _step.value;
          line = line.trim();
          if (!line || line.startsWith('#')) {
            continue;
          }

          var tokens = line.split(/\s/);
          var directive = void 0;var _tokens2 =
          tokens;var _tokens3 = (0, _toArray3.default)(_tokens2);directive = _tokens3[0];tokens = _tokens3.slice(1);

          var parseMethod = this['parse_' + directive];

          if (!parseMethod) {
            console.warn('Don\'t know how to parse the directive: "' + directive + '"');
            continue;
          }

          // console.log(`Parsing "${directive}" with tokens: ${tokens}`);
          parseMethod.bind(this)(tokens);
        }

        // some cleanup. These don't need to be exposed as public data.
      } catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}delete this.data;
      this.currentMaterial = null;
    }

    /* eslint-enable camelcase*/ }]);return MaterialLibrary;}();
;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var global = __webpack_require__(1);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(3);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.deleteMeshBuffers = exports.initMeshBuffers = exports.downloadMeshes = exports.downloadModels = exports.Layout = exports.MaterialLibrary = exports.Material = exports.Mesh = undefined;var _mesh = __webpack_require__(19);var _mesh2 = _interopRequireDefault(_mesh);
var _material = __webpack_require__(35);
var _layout = __webpack_require__(18);
var _utils = __webpack_require__(69);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



/**
                                                                                                                               * @namespace
                                                                                                                               */exports.

Mesh = _mesh2.default;exports.
Material = _material.Material;exports.
MaterialLibrary = _material.MaterialLibrary;exports.
Layout = _layout.Layout;exports.

downloadModels = _utils.downloadModels;exports.
downloadMeshes = _utils.downloadMeshes;exports.
initMeshBuffers = _utils.initMeshBuffers;exports.
deleteMeshBuffers = _utils.deleteMeshBuffers;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(20);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(57);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var defined = __webpack_require__(11);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(30);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(29);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(24)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(55).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(50);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(26);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(31);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(22);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(31);
var call = __webpack_require__(58);
var isArrayIter = __webpack_require__(59);
var toLength = __webpack_require__(26);
var createProperty = __webpack_require__(60);
var getIterFn = __webpack_require__(32);

$export($export.S + $export.F * !__webpack_require__(61)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(3);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(5);
var createDesc = __webpack_require__(14);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(67);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(20);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(70);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);exports.






































































































downloadModels = downloadModels;exports.








































































































downloadMeshes = downloadMeshes;exports.


















































































































initMeshBuffers = initMeshBuffers;exports.






deleteMeshBuffers = deleteMeshBuffers;var _mesh = __webpack_require__(19);var _mesh2 = _interopRequireDefault(_mesh);var _material = __webpack_require__(35);var _layout = __webpack_require__(18);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function downloadMtlTextures(mtl, root) {var mapAttributes = ['mapDiffuse', 'mapAmbient', 'mapSpecular', 'mapDissolve', 'mapBump', 'mapDisplacement', 'mapDecal', 'mapEmissive'];if (!root.endsWith('/')) {root += '/';}var textures = [];for (var material in mtl.materials) {if (!mtl.materials.hasOwnProperty(material)) {continue;}material = mtl.materials[material];var _loop = function _loop(attr) {var mapData = material[attr];if (!mapData) {return 'continue';}var url = root + mapData.filename;textures.push(fetch(url).then(function (response) {if (!response.ok) {throw new Error();}return response.blob();}).then(function (data) {var image = new Image();image.src = URL.createObjectURL(data);mapData.texture = image;}).catch(function () {console.error('Unable to download texture: ' + url);}));};var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = mapAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var attr = _step.value;var _ret = _loop(attr);if (_ret === 'continue') continue;}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}}return Promise.all(textures);} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */function downloadModels(models) {var finished = [];var _loop2 = function _loop2(model) {var parsed = [];if (!model.obj) {throw new Error('"obj" attribute of model object not set. The .obj file is required to be set ' + 'in order to use downloadModels()');} // if the name is not provided, dervive it from the given OBJ
    var name = model.name;if (!name) {var parts = model.obj.split('/');name = parts[parts.length - 1].replace('.obj', '');}parsed.push(Promise.resolve(name));parsed.push(fetch(model.obj).then(function (response) {return response.text();}).then(function (data) {return new _mesh2.default(data);})); // Download MaterialLibrary file?
    if (model.mtl) {var mtl = model.mtl;if (typeof mtl === 'boolean') {mtl = model.obj.replace(/\.obj$/, '.mtl');}parsed.push(fetch(mtl).then(function (response) {return response.text();}).then(function (data) {var material = new _material.MaterialLibrary(data);if (model.downloadMtlTextures !== false) {var root = model.mtlTextureRoot;if (!root) {// get the directory of the MTL file as default
            root = mtl.substr(0, mtl.lastIndexOf("/"));} // downloadMtlTextures returns a Promise that
          // is resolved once all of the images it
          // contains are downloaded. These are then
          // attached to the map data objects
          return Promise.all([Promise.resolve(material), downloadMtlTextures(material, root)]);}return Promise.all(Promise.resolve(material));}).then(function (value) {return value[0];}));}finished.push(Promise.all(parsed));};var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = models[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var model = _step2.value;_loop2(model);}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}return Promise.all(finished).then(function (ms) {// the "finished" promise is a list of name, Mesh instance,
    // and MaterialLibary instance. This unpacks and returns an
    // object mapping name to Mesh (Mesh points to MTL).
    var models = {};var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {for (var _iterator3 = ms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var model = _step3.value;var _model = (0, _slicedToArray3.default)(model, 3),_name = _model[0],mesh = _model[1],mtl = _model[2];mesh.name = _name;if (mtl) {mesh.addMaterialLibrary(mtl);}models[_name] = mesh;}} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3.return) {_iterator3.return();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}return models;});} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */function downloadMeshes(nameAndURLs, completionCallback, meshes) {if (meshes === undefined) {meshes = {};}var completed = [];var _loop3 = function _loop3(mesh_name) {if (!nameAndURLs.hasOwnProperty(mesh_name)) {return 'continue';}var url = nameAndURLs[mesh_name];completed.push(fetch(url).then(function (response) {return response.text();}).then(function (data) {return [mesh_name, new _mesh2.default(data)];}));};for (var mesh_name in nameAndURLs) {var _ret3 = _loop3(mesh_name);if (_ret3 === 'continue') continue;}Promise.all(completed).then(function (ms) {var _iteratorNormalCompletion4 = true;var _didIteratorError4 = false;var _iteratorError4 = undefined;try {for (var _iterator4 = ms[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {var _ref = _step4.value;var _ref2 = (0, _slicedToArray3.default)(_ref, 2);var _name2 = _ref2[0];var mesh = _ref2[1];meshes[_name2] = mesh;}} catch (err) {_didIteratorError4 = true;_iteratorError4 = err;} finally {try {if (!_iteratorNormalCompletion4 && _iterator4.return) {_iterator4.return();}} finally {if (_didIteratorError4) {throw _iteratorError4;}}}return completionCallback(meshes);});}var _buildBuffer = function _buildBuffer(gl, type, data, itemSize) {var buffer = gl.createBuffer();var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;gl.bindBuffer(type, buffer);gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);buffer.itemSize = itemSize;buffer.numItems = data.length / itemSize;return buffer;}; /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */function initMeshBuffers(gl, mesh) {mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, mesh.textureStride);mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);};function deleteMeshBuffers(gl, mesh) {gl.deleteBuffer(mesh.normalBuffer);gl.deleteBuffer(mesh.textureBuffer);gl.deleteBuffer(mesh.vertexBuffer);gl.deleteBuffer(mesh.indexBuffer);}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(71);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(77);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(9);
module.exports = __webpack_require__(76);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(74);
var step = __webpack_require__(75);
var Iterators = __webpack_require__(3);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(21)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(33);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(3);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(9);
module.exports = __webpack_require__(79);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var get = __webpack_require__(32);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZTRlZWIyMmVhM2IyZGNiNTY0NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJhdHRyaWJ1dGVzIiwib2Zmc2V0IiwibWF4U3RyaWRlTXVsdGlwbGUiLCJhdHRyaWJ1dGUiLCJrZXkiLCJEdXBsaWNhdGVBdHRyaWJ1dGVFeGNlcHRpb24iLCJzaXplT2ZUeXBlIiwiY29uc29sZSIsIndhcm4iLCJzaXplIiwidHlwZSIsIm5vcm1hbGl6ZWQiLCJzaXplSW5CeXRlcyIsIk1hdGgiLCJtYXgiLCJzdHJpZGUiLCJtZXNzYWdlIiwiQXR0cmlidXRlIiwic2l6ZUluQnl0ZXNPZlR5cGUiLCJQT1NJVElPTiIsIk5PUk1BTCIsIlRBTkdFTlQiLCJCSVRBTkdFTlQiLCJVViIsIk1BVEVSSUFMX0lOREVYIiwiTUFURVJJQUxfRU5BQkxFRCIsIkFNQklFTlQiLCJESUZGVVNFIiwiU1BFQ1VMQVIiLCJTUEVDVUxBUl9FWFBPTkVOVCIsIkVNSVNTSVZFIiwiVFJBTlNNSVNTSU9OX0ZJTFRFUiIsIkRJU1NPTFZFIiwiSUxMVU1JTkFUSU9OIiwiUkVGUkFDVElPTl9JTkRFWCIsIlNIQVJQTkVTUyIsIk1BUF9ESUZGVVNFIiwiTUFQX0FNQklFTlQiLCJNQVBfU1BFQ1VMQVIiLCJNQVBfU1BFQ1VMQVJfRVhQT05FTlQiLCJNQVBfRElTU09MVkUiLCJBTlRJX0FMSUFTSU5HIiwiTUFQX0JVTVAiLCJNQVBfRElTUExBQ0VNRU5UIiwiTUFQX0RFQ0FMIiwiTUFQX0VNSVNTSVZFIiwidHJpYW5ndWxhdGUiLCJlbGVtZW50cyIsImxlbmd0aCIsIk1lc2giLCJvYmplY3REYXRhIiwib3B0aW9ucyIsIm1hdGVyaWFscyIsImVuYWJsZVdUZXh0dXJlQ29vcmQiLCJzZWxmIiwidmVydGljZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidGV4dHVyZXMiLCJpbmRpY2VzIiwidGV4dHVyZVN0cmlkZSIsIm5hbWUiLCJ2ZXJ0cyIsInZlcnROb3JtYWxzIiwidW5wYWNrZWQiLCJtYXRlcmlhbE5hbWVzQnlJbmRleCIsIm1hdGVyaWFsSW5kaWNlc0J5TmFtZSIsImN1cnJlbnRNYXRlcmlhbEluZGV4Iiwibm9ybXMiLCJoYXNoaW5kaWNlcyIsIm1hdGVyaWFsSW5kaWNlcyIsImluZGV4IiwiVkVSVEVYX1JFIiwiTk9STUFMX1JFIiwiVEVYVFVSRV9SRSIsIkZBQ0VfUkUiLCJXSElURVNQQUNFX1JFIiwiVVNFX01BVEVSSUFMX1JFIiwibGluZXMiLCJzcGxpdCIsImkiLCJsaW5lIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInRlc3QiLCJwdXNoIiwiY29vcmRzIiwic2xpY2UiLCJtYXRlcmlhbE5hbWUiLCJ0cmlhbmdsZXMiLCJqIiwiZWxlTGVuIiwiaGFzaDAiLCJoYXNoIiwidmVydGV4Iiwibm9ybWFsSW5kZXgiLCJ2ZXJ0ZXhNYXRlcmlhbEluZGljZXMiLCJtYXRlcmlhbE5hbWVzIiwibWF0ZXJpYWxzQnlJbmRleCIsImxheW91dCIsIm51bUl0ZW1zIiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJkYXRhVmlldyIsIkRhdGFWaWV3IiwidmVydGV4T2Zmc2V0Iiwic2V0RmxvYXQzMiIsInNldEludDE2IiwibWF0ZXJpYWxJbmRleCIsIm1hdGVyaWFsIiwiYW1iaWVudCIsImRpZmZ1c2UiLCJzcGVjdWxhciIsInNwZWN1bGFyRXhwb25lbnQiLCJlbWlzc2l2ZSIsInRyYW5zbWlzc2lvbkZpbHRlciIsImRpc3NvbHZlIiwiaWxsdW1pbmF0aW9uIiwicmVmcmFjdGlvbkluZGV4Iiwic2hhcnBuZXNzIiwiYW50aUFsaWFzaW5nIiwiVWludDE2QXJyYXkiLCJtdGwiLCJNYXRlcmlhbCIsInRyYW5zcGFyZW5jeSIsIm1hcERpZmZ1c2UiLCJtYXBBbWJpZW50IiwibWFwU3BlY3VsYXIiLCJtYXBTcGVjdWxhckV4cG9uZW50IiwibWFwRGlzc29sdmUiLCJtYXBCdW1wIiwibWFwRGlzcGxhY2VtZW50IiwibWFwRGVjYWwiLCJtYXBFbWlzc2l2ZSIsIm1hcFJlZmxlY3Rpb25zIiwiTWF0ZXJpYWxMaWJyYXJ5IiwibXRsRGF0YSIsImRhdGEiLCJjdXJyZW50TWF0ZXJpYWwiLCJwYXJzZSIsInRva2VucyIsImVycm9yIiwibWFwIiwicGFyc2VGbG9hdCIsInZhbHVlIiwicGFyc2VDb2xvciIsInBvcCIsInBhcnNlSW50IiwidmFsdWVzIiwiY29sb3JDb3JyZWN0aW9uIiwiaG9yaXpvbnRhbEJsZW5kaW5nIiwidmVydGljYWxCbGVuZGluZyIsImJvb3N0TWlwTWFwU2hhcnBuZXNzIiwibW9kaWZ5VGV4dHVyZU1hcCIsImJyaWdodG5lc3MiLCJjb250cmFzdCIsIm9wdGlvbiIsImRlZmF1bHRWYWx1ZSIsInUiLCJ2IiwidyIsInBhcnNlX29zdCIsInNjYWxlIiwidHVyYnVsZW5jZSIsInRleHR1cmVSZXNvbHV0aW9uIiwiY2xhbXAiLCJidW1wTXVsdGlwbGllciIsImltZkNoYW4iLCJyZWZsZWN0aW9uVHlwZSIsIm9wdGlvbnNUb1ZhbHVlcyIsInJldmVyc2UiLCJ0b2tlbiIsInN1YnN0ciIsImhhc093blByb3BlcnR5Iiwib3B0aW9uTWV0aG9kIiwiYmluZCIsImZpbGVuYW1lIiwicGFyc2VPcHRpb25zIiwicGFyc2VNYXAiLCJwYXJzZV9tYXBfYnVtcCIsImRpcmVjdGl2ZSIsInBhcnNlTWV0aG9kIiwiZG93bmxvYWRNb2RlbHMiLCJkb3dubG9hZE1lc2hlcyIsImluaXRNZXNoQnVmZmVycyIsImRlbGV0ZU1lc2hCdWZmZXJzIiwiZG93bmxvYWRNdGxUZXh0dXJlcyIsInJvb3QiLCJtYXBBdHRyaWJ1dGVzIiwiZW5kc1dpdGgiLCJhdHRyIiwibWFwRGF0YSIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImJsb2IiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidGV4dHVyZSIsImNhdGNoIiwiUHJvbWlzZSIsImFsbCIsIm1vZGVscyIsImZpbmlzaGVkIiwibW9kZWwiLCJwYXJzZWQiLCJvYmoiLCJwYXJ0cyIsInJlcGxhY2UiLCJyZXNvbHZlIiwidGV4dCIsIm10bFRleHR1cmVSb290IiwibGFzdEluZGV4T2YiLCJtcyIsIm1lc2giLCJhZGRNYXRlcmlhbExpYnJhcnkiLCJuYW1lQW5kVVJMcyIsImNvbXBsZXRpb25DYWxsYmFjayIsIm1lc2hlcyIsInVuZGVmaW5lZCIsImNvbXBsZXRlZCIsIm1lc2hfbmFtZSIsIl9idWlsZEJ1ZmZlciIsImdsIiwiaXRlbVNpemUiLCJjcmVhdGVCdWZmZXIiLCJhcnJheVZpZXciLCJBUlJBWV9CVUZGRVIiLCJGbG9hdDMyQXJyYXkiLCJiaW5kQnVmZmVyIiwiYnVmZmVyRGF0YSIsIlNUQVRJQ19EUkFXIiwibm9ybWFsQnVmZmVyIiwidGV4dHVyZUJ1ZmZlciIsInZlcnRleEJ1ZmZlciIsImluZGV4QnVmZmVyIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJkZWxldGVCdWZmZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOzs7Ozs7O0FDTHpDLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7QUNEdkM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJB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QTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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QUFrQix3RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IndlYmdsLW9iai1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk9CSlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPQkpcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiT0JKXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFlNGVlYjIyZWEzYjJkY2I1NjQ0IiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIGNsYXNzIHRvIHJlcHJlc2VudCB0aGUgbWVtb3J5IGxheW91dCBmb3IgYSB2ZXJ0ZXggYXR0cmlidXRlIGFycmF5LiBVc2VkIGJ5XG4gKiB7QGxpbmsgTWVzaH0ncyBUQkQoLi4uKSBtZXRob2QgdG8gZ2VuZXJhdGUgYSBwYWNrZWQgYXJyYXkgZnJvbSBtZXNoIGRhdGEuXG4gKiA8cD5cbiAqIExheW91dCBjYW4gc29ydCBvZiBiZSB0aG91Z2h0IG9mIGFzIGEgQy1zdHlsZSBzdHJ1Y3QgZGVjbGFyYXRpb24uXG4gKiB7QGxpbmsgTWVzaH0ncyBUQkQoLi4uKSBtZXRob2Qgd2lsbCB1c2UgdGhlIHtAbGluayBMYXlvdXR9IGluc3RhbmNlIHRvXG4gKiBwYWNrIGFuIGFycmF5IGluIHRoZSBnaXZlbiBhdHRyaWJ1dGUgb3JkZXIuXG4gKiA8cD5cbiAqIExheW91dCBhbHNvIGlzIHZlcnkgaGVscGZ1bCB3aGVuIGNhbGxpbmcgYSBXZWJHTCBjb250ZXh0J3NcbiAqIDxjb2RlPnZlcnRleEF0dHJpYlBvaW50ZXI8L2NvZGU+IG1ldGhvZC4gSWYgeW91J3ZlIGNyZWF0ZWQgYSBidWZmZXIgdXNpbmdcbiAqIGEgTGF5b3V0IGluc3RhbmNlLCB0aGVuIHRoZSBzYW1lIExheW91dCBpbnN0YW5jZSBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmVcbiAqIHRoZSBzaXplLCB0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIGFuZCBvZmZzZXQgcGFyYW1ldGVycyBmb3JcbiAqIDxjb2RlPnZlcnRleEF0dHJpYlBvaW50ZXI8L2NvZGU+LlxuICogPHA+XG4gKiBGb3IgZXhhbXBsZTpcbiAqIDxwcmU+PGNvZGU+XG4gKlxuICogY29uc3QgaW5kZXggPSBnbGN0eC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcInBvc1wiKTtcbiAqIGdsY3R4LnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gKiAgIGxheW91dC5wb3NpdGlvbi5zaXplLFxuICogICBnbGN0eFtsYXlvdXQucG9zaXRpb24udHlwZV0sXG4gKiAgIGxheW91dC5wb3NpdGlvbi5ub3JtYWxpemVkLFxuICogICBsYXlvdXQucG9zaXRpb24uc3RyaWRlLFxuICogICBsYXlvdXQucG9zaXRpb24ub2Zmc2V0KTtcbiAqIDwvY29kZT48L3ByZT5cbiAqIEBzZWUge0BsaW5rIE1lc2h9XG4gKi9cbmV4cG9ydCBjbGFzcyBMYXlvdXQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIExheW91dCBvYmplY3QuIFRoaXMgY29uc3RydWN0b3Igd2lsbCB0aHJvdyBpZiBhbnkgZHVwbGljYXRlXG4gICAgICogYXR0cmlidXRlcyBhcmUgZ2l2ZW4uXG4gICAgICogQHBhcmFtIHtBcnJheX0gLi4uYXR0cmlidXRlcyAtIEFuIG9yZGVyZWQgbGlzdCBvZiBhdHRyaWJ1dGVzIHRoYXRcbiAgICAgKiAgICAgICAgZGVzY3JpYmUgdGhlIGRlc2lyZWQgbWVtb3J5IGxheW91dCBmb3IgZWFjaCB2ZXJ0ZXggYXR0cmlidXRlLlxuICAgICAqICAgICAgICA8cD5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIE1lc2h9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgbGV0IG1heFN0cmlkZU11bHRpcGxlID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKHRoaXNbYXR0cmlidXRlLmtleV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlQXR0cmlidXRlRXhjZXB0aW9uKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgcGFkZGluZyB0byBzYXRpc2Z5IFdlYkdMJ3MgcmVxdWlyZW1lbnQgdGhhdCBhbGxcbiAgICAgICAgICAgIC8vIHZlcnRleEF0dHJpYlBvaW50ZXIgY2FsbHMgaGF2ZSBhbiBvZmZzZXQgdGhhdCBpcyBhIG11bHRpcGxlIG9mXG4gICAgICAgICAgICAvLyB0aGUgdHlwZSBzaXplLlxuICAgICAgICAgICAgaWYgKG9mZnNldCAlIGF0dHJpYnV0ZS5zaXplT2ZUeXBlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGF0dHJpYnV0ZS5zaXplT2ZUeXBlIC0gb2Zmc2V0ICUgYXR0cmlidXRlLnNpemVPZlR5cGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdMYXlvdXQgcmVxdWlyZXMgcGFkZGluZyBiZWZvcmUgJyArIGF0dHJpYnV0ZS5rZXkgKyAnIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1thdHRyaWJ1dGUua2V5XSA9IHtcbiAgICAgICAgICAgICAgICAnYXR0cmlidXRlJzogYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgICdzaXplJzogYXR0cmlidXRlLnNpemUsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiBhdHRyaWJ1dGUudHlwZSxcbiAgICAgICAgICAgICAgICAnbm9ybWFsaXplZCc6IGF0dHJpYnV0ZS5ub3JtYWxpemVkLFxuICAgICAgICAgICAgICAgICdvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGF0dHJpYnV0ZS5zaXplSW5CeXRlcztcbiAgICAgICAgICAgIG1heFN0cmlkZU11bHRpcGxlID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgbWF4U3RyaWRlTXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlLnNpemVPZlR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBwYWRkaW5nIHRvIHRoZSBlbmQgdG8gc2F0aXNmeSBXZWJHTCdzIHJlcXVpcmVtZW50IHRoYXQgYWxsXG4gICAgICAgIC8vIHZlcnRleEF0dHJpYlBvaW50ZXIgY2FsbHMgaGF2ZSBhIHN0cmlkZSB0aGF0IGlzIGEgbXVsdGlwbGUgb2YgdGhlXG4gICAgICAgIC8vIHR5cGUgc2l6ZS4gQmVjYXVzZSB3ZSdyZSBwdXR0aW5nIGRpZmZlcmVudGx5IHNpemVkIGF0dHJpYnV0ZXMgaW50b1xuICAgICAgICAvLyB0aGUgc2FtZSBidWZmZXIsIGl0IG11c3QgYmUgcGFkZGVkIHRvIGEgbXVsdGlwbGUgb2YgdGhlIGxhcmdlc3RcbiAgICAgICAgLy8gdHlwZSBzaXplLlxuICAgICAgICBpZiAob2Zmc2V0ICUgbWF4U3RyaWRlTXVsdGlwbGUgIT09IDApIHtcbiAgICAgICAgICAgIG9mZnNldCArPSBtYXhTdHJpZGVNdWx0aXBsZSAtIG9mZnNldCAlIG1heFN0cmlkZU11bHRpcGxlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdMYXlvdXQgcmVxdWlyZXMgcGFkZGluZyBhdCB0aGUgYmFjaycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RyaWRlID0gb2Zmc2V0O1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJpYnV0ZS5rZXldLnN0cmlkZSA9IHRoaXMuc3RyaWRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogQW4gZXhjZXB0aW9uIGZvciB3aGVuIHR3byBvciBtb3JlIG9mIHRoZSBzYW1lIGF0dHJpYnV0ZXMgYXJlIGZvdW5kIGluIHRoZVxuICogc2FtZSBsYXlvdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEdXBsaWNhdGVBdHRyaWJ1dGVFeGNlcHRpb24ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIER1cGxpY2F0ZUF0dHJpYnV0ZUV4Y2VwdGlvblxuICAgICAqIEBwYXJhbSB7QXR0cmlidXRlfSBhdHRyaWJ1dGUgLSBUaGUgYXR0cmlidXRlIHRoYXQgd2FzIGZvdW5kIG1vcmUgdGhhblxuICAgICAqICAgICAgICBvbmNlIGluIHRoZSB7QGxpbmsgTGF5b3V0fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnZm91bmQgZHVwbGljYXRlIGF0dHJpYnV0ZTogJyArIGF0dHJpYnV0ZS5rZXk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgaG93IGEgdmVydGV4IGF0dHJpYnV0ZSBzaG91bGQgYmUgcGFja2VkIGludG8gYW4gYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQXR0cmlidXRlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlLiBEbyBub3QgY2FsbCB0aGlzIGRpcmVjdGx5LCB1c2UgdGhlIHByZWRlZmluZWRcbiAgICAgKiBjb25zdGFudHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoaXMgYXR0cmlidXRlIGFzIGlmIGl0IHdlcmUgYSBrZXkgaW5cbiAgICAgKiAgICAgICAgYW4gT2JqZWN0LiBVc2UgdGhlIGNhbWVsIGNhc2UgdmVyc2lvbiBvZiB0aGUgdXBwZXIgc25ha2UgY2FzZVxuICAgICAqICAgICAgICBjb25zdCBuYW1lLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gVGhlIG51bWJlciBvZiBjb21wb25lbnRzIHBlciB2ZXJ0ZXggYXR0cmlidXRlLlxuICAgICAqICAgICAgICBNdXN0IGJlIDEsIDIsIDMsIG9yIDQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZGF0YSB0eXBlIG9mIGVhY2ggY29tcG9uZW50IGZvciB0aGlzXG4gICAgICogICAgICAgIGF0dHJpYnV0ZS4gUG9zc2libGUgdmFsdWVzOjxici8+XG4gICAgICogICAgICAgIFwiQllURVwiOiBzaWduZWQgOC1iaXQgaW50ZWdlciwgd2l0aCB2YWx1ZXMgaW4gWy0xMjgsIDEyN108YnIvPlxuICAgICAqICAgICAgICBcIlNIT1JUXCI6IHNpZ25lZCAxNi1iaXQgaW50ZWdlciwgd2l0aCB2YWx1ZXMgaW5cbiAgICAgKiAgICAgICAgICAgIFstMzI3NjgsIDMyNzY3XTxici8+XG4gICAgICogICAgICAgIFwiVU5TSUdORURfQllURVwiOiB1bnNpZ25lZCA4LWJpdCBpbnRlZ2VyLCB3aXRoIHZhbHVlcyBpblxuICAgICAqICAgICAgICAgICAgWzAsIDI1NV08YnIvPlxuICAgICAqICAgICAgICBcIlVOU0lHTkVEX1NIT1JUXCI6IHVuc2lnbmVkIDE2LWJpdCBpbnRlZ2VyLCB3aXRoIHZhbHVlcyBpblxuICAgICAqICAgICAgICAgICAgWzAsIDY1NTM1XTxici8+XG4gICAgICogICAgICAgIFwiRkxPQVRcIjogMzItYml0IGZsb2F0aW5nIHBvaW50IG51bWJlclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9ybWFsaXplZCAtIFdoZXRoZXIgaW50ZWdlciBkYXRhIHZhbHVlcyBzaG91bGQgYmVcbiAgICAgKiAgICAgICAgbm9ybWFsaXplZCB3aGVuIGJlaW5nIGNhc3RlZCB0byBhIGZsb2F0Ljxici8+XG4gICAgICogICAgICAgIElmIHRydWUsIHNpZ25lZCBpbnRlZ2VycyBhcmUgbm9ybWFsaXplZCB0byBbLTEsIDFdLjxici8+XG4gICAgICogICAgICAgIElmIHRydWUsIHVuc2lnbmVkIGludGVnZXJzIGFyZSBub3JtYWxpemVkIHRvIFswLCAxXS48YnIvPlxuICAgICAqICAgICAgICBGb3IgdHlwZSBcIkZMT0FUXCIsIHRoaXMgcGFyYW1ldGVyIGhhcyBubyBlZmZlY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioa2V5LCBzaXplLCB0eXBlLCBub3JtYWxpemVkPWZhbHNlKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vcm1hbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaXplT2ZUeXBlID0gc2l6ZUluQnl0ZXNPZlR5cGUodHlwZSk7XG4gICAgICAgIHRoaXMuc2l6ZUluQnl0ZXMgPSB0aGlzLnNpemVPZlR5cGUgKiBzaXplO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIEEgdHlwZSBhY2NlcHRlZCBieSB7QGxpbmsgQXR0cmlidXRlfS5cbiAqIEByZXR1cm4gVGhlIHNpemUgKGluIGJ5dGVzKSBmb3IgYSBnaXZlbiB0eXBlLlxuICogQHNlZSB7QGxpbmsgQXR0cmlidXRlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2l6ZUluQnl0ZXNPZlR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdCWVRFJzpcbiAgICAgICAgY2FzZSAnVU5TSUdORURfQllURSc6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAnU0hPUlQnOlxuICAgICAgICBjYXNlICdVTlNJR05FRF9TSE9SVCc6XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgY2FzZSAnRkxPQVQnOlxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxufVxuXG4vLyBHZW9tZXRyeSBhdHRyaWJ1dGVzXG4vKipcbiAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIHgsIHksICYgeiBhcyBmbG9hdHNcbiAqXG4gKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gKi9cbkxheW91dC5QT1NJVElPTiA9IG5ldyBBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgMywgJ0ZMT0FUJyk7XG5cbi8qKlxuICogQXR0cmlidXRlIGxheW91dCB0byBwYWNrIGEgdmVydGV4J3Mgbm9ybWFsJ3MgeCwgeSwgJiB6IGFzIGZsb2F0c1xuICpcbiAqIEBzZWUge0BsaW5rIExheW91dH1cbiAqL1xuTGF5b3V0Lk5PUk1BTCA9IG5ldyBBdHRyaWJ1dGUoJ25vcm1hbCcsIDMsICdGTE9BVCcpO1xuXG4vKipcbiAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIG5vcm1hbCdzIHgsIHksICYgeiBhcyBmbG9hdHMuXG4gKiA8cD5cbiAqIFRoaXMgdmFsdWUgd2lsbCBiZSBjb21wdXRlZCBvbi10aGUtZmx5IGJhc2VkIG9uIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzLlxuICogSWYgbm8gdGV4dHVyZSBjb29yZGluYXRlcyBhcmUgYXZhaWxhYmxlLCB0aGUgZ2VuZXJhdGVkIHZhbHVlIHdpbGwgZGVmYXVsdCB0b1xuICogMCwgMCwgMC5cbiAqXG4gKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gKi9cbkxheW91dC5UQU5HRU5UID0gbmV3IEF0dHJpYnV0ZSgndGFuZ2VudCcsIDMsICdGTE9BVCcpO1xuXG4vKipcbiAqIEF0dHJpYnV0ZSBsYXlvdXQgdG8gcGFjayBhIHZlcnRleCdzIG5vcm1hbCdzIGJpdGFuZ2VudCB4LCB5LCAmIHogYXMgZmxvYXRzLlxuICogPHA+XG4gKiBUaGlzIHZhbHVlIHdpbGwgYmUgY29tcHV0ZWQgb24tdGhlLWZseSBiYXNlZCBvbiB0aGUgdGV4dHVyZSBjb29yZGluYXRlcy5cbiAqIElmIG5vIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIGdlbmVyYXRlZCB2YWx1ZSB3aWxsIGRlZmF1bHQgdG9cbiAqIDAsIDAsIDAuXG4gKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gKi9cbkxheW91dC5CSVRBTkdFTlQgPSBuZXcgQXR0cmlidXRlKCdiaXRhbmdlbnQnLCAzLCAnRkxPQVQnKTtcblxuLyoqXG4gKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYSB2ZXJ0ZXgncyB0ZXh0dXJlIGNvb3JkaW5hdGVzJyB1ICYgdiBhcyBmbG9hdHNcbiAqXG4gKiBAc2VlIHtAbGluayBMYXlvdXR9XG4gKi9cbkxheW91dC5VViA9IG5ldyBBdHRyaWJ1dGUoJ3V2JywgMiwgJ0ZMT0FUJyk7XG5cbi8vIE1hdGVyaWFsIGF0dHJpYnV0ZXNcblxuLyoqXG4gKiBBdHRyaWJ1dGUgbGF5b3V0IHRvIHBhY2sgYW4gdW5zaWduZWQgc2hvcnQgdG8gYmUgaW50ZXJwcmV0ZWQgYXMgYSB0aGUgaW5kZXhcbiAqIGludG8gYSB7QGxpbmsgTWVzaH0ncyBtYXRlcmlhbHMgbGlzdC5cbiAqIDxwPlxuICogVGhlIGludGVudGlvbiBvZiB0aGlzIHZhbHVlIGlzIHRvIHNlbmQgYWxsIG9mIHRoZSB7QGxpbmsgTWVzaH0ncyBtYXRlcmlhbHNcbiAqIGludG8gbXVsdGlwbGUgc2hhZGVyIHVuaWZvcm1zIGFuZCB0aGVuIHJlZmVyZW5jZSB0aGUgY3VycmVudCBvbmUgYnkgdGhpc1xuICogdmVydGV4IGF0dHJpYnV0ZS5cbiAqIDxwPlxuICogZXhhbXBsZSBnbHNsIGNvZGU6XG4gKlxuICogPHByZT48Y29kZT5cbiAqICAvLyB0aGlzIGlzIGJvdW5kIHVzaW5nIE1BVEVSSUFMX0lOREVYXG4gKiAgYXR0cmlidXRlIGludCBtYXRlcmlhbEluZGV4O1xuICpcbiAqICBzdHJ1Y3QgTWF0ZXJpYWwge1xuICogICAgdmVjMyBkaWZmdXNlO1xuICogICAgdmVjMyBzcGVjdWxhcjtcbiAqICAgIHZlYzMgc3BlY3VsYXJFeHBvbmVudDtcbiAqICB9O1xuICpcbiAqICB1bmlmb3JtIE1hdGVyaWFsIG1hdGVyaWFsc1tNQVhfTUFURVJJQUxTXTtcbiAqXG4gKiAgLy8gLi4uXG4gKlxuICogIHZlYzMgZGlmZnVzZSA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcbiAqXG4gKiA8L2NvZGU+PC9wcmU+XG4gKiBUT0RPOiBNb3JlIGRlc2NyaXB0aW9uICYgdGVzdCB0byBtYWtlIHN1cmUgc3Vic2NyaXB0aW5nIGJ5IGF0dHJpYnV0ZXMgZXZlblxuICogd29ya3MgZm9yIHdlYmdsXG4gKlxuICogQHNlZSB7QGxpbmsgTGF5b3V0fVxuICovXG5MYXlvdXQuTUFURVJJQUxfSU5ERVggPSBuZXcgQXR0cmlidXRlKCdtYXRlcmlhbEluZGV4JywgMSwgJ1NIT1JUJyk7XG5MYXlvdXQuTUFURVJJQUxfRU5BQkxFRCA9IG5ldyBBdHRyaWJ1dGUoJ21hdGVyaWFsRW5hYmxlZCcsIDEsICdVTlNJR05FRF9TSE9SVCcpO1xuTGF5b3V0LkFNQklFTlQgPSBuZXcgQXR0cmlidXRlKCdhbWJpZW50JywgMywgJ0ZMT0FUJyk7XG5MYXlvdXQuRElGRlVTRSA9IG5ldyBBdHRyaWJ1dGUoJ2RpZmZ1c2UnLCAzLCAnRkxPQVQnKTtcbkxheW91dC5TUEVDVUxBUiA9IG5ldyBBdHRyaWJ1dGUoJ3NwZWN1bGFyJywgMywgJ0ZMT0FUJyk7XG5MYXlvdXQuU1BFQ1VMQVJfRVhQT05FTlQgPSBuZXcgQXR0cmlidXRlKCdzcGVjdWxhckV4cG9uZW50JywgMywgJ0ZMT0FUJyk7XG5MYXlvdXQuRU1JU1NJVkUgPSBuZXcgQXR0cmlidXRlKCdlbWlzc2l2ZScsIDMsICdGTE9BVCcpO1xuTGF5b3V0LlRSQU5TTUlTU0lPTl9GSUxURVIgPSBuZXcgQXR0cmlidXRlKCd0cmFuc21pc3Npb25GaWx0ZXInLCAzLCAnRkxPQVQnKTtcbkxheW91dC5ESVNTT0xWRSA9IG5ldyBBdHRyaWJ1dGUoJ2Rpc3NvbHZlJywgMSwgJ0ZMT0FUJyk7XG5MYXlvdXQuSUxMVU1JTkFUSU9OID0gbmV3IEF0dHJpYnV0ZSgnaWxsdW1pbmF0aW9uJywgMSwgJ1VOU0lHTkVEX1NIT1JUJyk7XG5MYXlvdXQuUkVGUkFDVElPTl9JTkRFWCA9IG5ldyBBdHRyaWJ1dGUoJ3JlZnJhY3Rpb25JbmRleCcsIDEsICdGTE9BVCcpO1xuTGF5b3V0LlNIQVJQTkVTUyA9IG5ldyBBdHRyaWJ1dGUoJ3NoYXJwbmVzcycsIDEsICdGTE9BVCcpO1xuTGF5b3V0Lk1BUF9ESUZGVVNFID0gbmV3IEF0dHJpYnV0ZSgnbWFwRGlmZnVzZScsIDEsICdTSE9SVCcpO1xuTGF5b3V0Lk1BUF9BTUJJRU5UID0gbmV3IEF0dHJpYnV0ZSgnbWFwQW1iaWVudCcsIDEsICdTSE9SVCcpO1xuTGF5b3V0Lk1BUF9TUEVDVUxBUiA9IG5ldyBBdHRyaWJ1dGUoJ21hcFNwZWN1bGFyJywgMSwgJ1NIT1JUJyk7XG5MYXlvdXQuTUFQX1NQRUNVTEFSX0VYUE9ORU5UID0gbmV3IEF0dHJpYnV0ZSgnbWFwU3BlY3VsYXJFeHBvbmVudCcsIDEsICdTSE9SVCcpO1xuTGF5b3V0Lk1BUF9ESVNTT0xWRSA9IG5ldyBBdHRyaWJ1dGUoJ21hcERpc3NvbHZlJywgMSwgJ1NIT1JUJyk7XG5MYXlvdXQuQU5USV9BTElBU0lORyA9IG5ldyBBdHRyaWJ1dGUoJ2FudGlBbGlhc2luZycsIDEsICdVTlNJR05FRF9TSE9SVCcpO1xuTGF5b3V0Lk1BUF9CVU1QID0gbmV3IEF0dHJpYnV0ZSgnbWFwQnVtcCcsIDEsICdTSE9SVCcpO1xuTGF5b3V0Lk1BUF9ESVNQTEFDRU1FTlQgPSBuZXcgQXR0cmlidXRlKCdtYXBEaXNwbGFjZW1lbnQnLCAxLCAnU0hPUlQnKTtcbkxheW91dC5NQVBfREVDQUwgPSBuZXcgQXR0cmlidXRlKCdtYXBEZWNhbCcsIDEsICdTSE9SVCcpO1xuTGF5b3V0Lk1BUF9FTUlTU0lWRSA9IG5ldyBBdHRyaWJ1dGUoJ21hcEVtaXNzaXZlJywgMSwgJ1NIT1JUJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuL2xheW91dFwiXG5cbmZ1bmN0aW9uKiB0cmlhbmd1bGF0ZShlbGVtZW50cykge1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPD0gMykge1xuICAgICAgICB5aWVsZCBlbGVtZW50cztcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIHlpZWxkIFtlbGVtZW50c1swXSwgZWxlbWVudHNbMV0sIGVsZW1lbnRzWzJdXTtcbiAgICAgICAgeWllbGQgW2VsZW1lbnRzWzJdLCBlbGVtZW50c1szXSwgZWxlbWVudHNbMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIFtlbGVtZW50c1swXSwgZWxlbWVudHNbMV0sIGVsZW1lbnRzWzJdXTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIG1haW4gTWVzaCBjbGFzcy4gVGhlIGNvbnN0cnVjdG9yIHdpbGwgcGFyc2UgdGhyb3VnaCB0aGUgT0JKIGZpbGUgZGF0YVxuICogYW5kIGNvbGxlY3QgdGhlIHZlcnRleCwgdmVydGV4IG5vcm1hbCwgdGV4dHVyZSwgYW5kIGZhY2UgaW5mb3JtYXRpb24uIFRoaXNcbiAqIGluZm9ybWF0aW9uIGNhbiB0aGVuIGJlIHVzZWQgbGF0ZXIgb24gd2hlbiBjcmVhdGluZyB5b3VyIFZCT3MuIFNlZVxuICogT0JKLmluaXRNZXNoQnVmZmVycyBmb3IgYW4gZXhhbXBsZSBvZiBob3cgdG8gdXNlIHRoZSBuZXdseSBjcmVhdGVkIE1lc2hcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzaCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgTWVzaFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmplY3REYXRhIC0gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gT0JKIGZpbGUgd2l0aFxuICAgICAqICAgICBuZXdsaW5lcyBwcmVzZXJ2ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhIEpTIG9iamVjdCBjb250YWluaW5nIHZhbGlkIG9wdGlvbnMuIFNlZSBjbGFzc1xuICAgICAqICAgICBkb2N1bWVudGF0aW9uIGZvciBvcHRpb25zLlxuICAgICAqIEBwYXJhbSB7Ym9vbH0gb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkIC0gVGV4dHVyZSBjb29yZGluYXRlcyBjYW4gaGF2ZVxuICAgICAqICAgICBhbiBvcHRpb25hbCBcIndcIiBjb29yZGluYXRlIGFmdGVyIHRoZSB1IGFuZCB2IGNvb3JkaW5hdGVzLiBUaGlzIGV4dHJhXG4gICAgICogICAgIHZhbHVlIGNhbiBiZSB1c2VkIGluIG9yZGVyIHRvIHBlcmZvcm0gZmFuY3kgdHJhbnNmb3JtYXRpb25zIG9uIHRoZVxuICAgICAqICAgICB0ZXh0dXJlcyB0aGVtc2VsdmVzLiBEZWZhdWx0IGlzIHRvIHRydW5jYXRlIHRvIG9ubHkgdGhlIHUgYW4gdlxuICAgICAqICAgICBjb29yZGluYXRlcy4gUGFzc2luZyB0cnVlIHdpbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMCBpbiB0aGVcbiAgICAgKiAgICAgZXZlbnQgdGhhdCBhbnkgb3IgYWxsIHRleHR1cmUgY29vcmRpbmF0ZXMgZG9uJ3QgcHJvdmlkZSBhIHcgdmFsdWUuXG4gICAgICogICAgIEFsd2F5cyB1c2UgdGhlIHRleHR1cmVTdHJpZGUgYXR0cmlidXRlIGluIG9yZGVyIHRvIGRldGVybWluZSB0aGVcbiAgICAgKiAgICAgc3RyaWRlIGxlbmd0aCBvZiB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudFxuICAgICAqICAgICBhcnJheS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvYmplY3REYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRpb25zLm1hdGVyaWFscyA9IG9wdGlvbnMubWF0ZXJpYWxzIHx8IHt9O1xuICAgICAgICBvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQgPSAhIW9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZDtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHRoZSBsaXN0IG9mIHVuaXF1ZSB2ZXJ0ZXgsIG5vcm1hbCwgdGV4dHVyZSwgYXR0cmlidXRlc1xuICAgICAgICBzZWxmLnZlcnRpY2VzID0gW107XG4gICAgICAgIHNlbGYudmVydGV4Tm9ybWFscyA9IFtdO1xuICAgICAgICBzZWxmLnRleHR1cmVzID0gW107XG4gICAgICAgIC8vIHRoZSBpbmRpY2llcyB0byBkcmF3IHRoZSBmYWNlc1xuICAgICAgICBzZWxmLmluZGljZXMgPSBbXTtcbiAgICAgICAgc2VsZi50ZXh0dXJlU3RyaWRlID0gb3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkPyAzIDogMjtcblxuICAgICAgICAvKlxuICAgICAgICBUaGUgT0JKIGZpbGUgZm9ybWF0IGRvZXMgYSBzb3J0IG9mIGNvbXByZXNzaW9uIHdoZW4gc2F2aW5nIGEgbW9kZWwgaW4gYVxuICAgICAgICBwcm9ncmFtIGxpa2UgQmxlbmRlci4gVGhlcmUgYXJlIGF0IGxlYXN0IDMgc2VjdGlvbnMgKDQgaW5jbHVkaW5nIHRleHR1cmVzKVxuICAgICAgICB3aXRoaW4gdGhlIGZpbGUuIEVhY2ggbGluZSBpbiBhIHNlY3Rpb24gYmVnaW5zIHdpdGggdGhlIHNhbWUgc3RyaW5nOlxuICAgICAgICAgICogJ3YnOiBpbmRpY2F0ZXMgdmVydGV4IHNlY3Rpb25cbiAgICAgICAgICAqICd2bic6IGluZGljYXRlcyB2ZXJ0ZXggbm9ybWFsIHNlY3Rpb25cbiAgICAgICAgICAqICdmJzogaW5kaWNhdGVzIHRoZSBmYWNlcyBzZWN0aW9uXG4gICAgICAgICAgKiAndnQnOiBpbmRpY2F0ZXMgdmVydGV4IHRleHR1cmUgc2VjdGlvbiAoaWYgdGV4dHVyZXMgd2VyZSB1c2VkIG9uIHRoZSBtb2RlbClcbiAgICAgICAgRWFjaCBvZiB0aGUgYWJvdmUgc2VjdGlvbnMgKGV4Y2VwdCBmb3IgdGhlIGZhY2VzIHNlY3Rpb24pIGlzIGEgbGlzdC9zZXQgb2ZcbiAgICAgICAgdW5pcXVlIHZlcnRpY2VzLlxuXG4gICAgICAgIEVhY2ggbGluZSBvZiB0aGUgZmFjZXMgc2VjdGlvbiBjb250YWlucyBhIGxpc3Qgb2ZcbiAgICAgICAgKHZlcnRleCwgW3RleHR1cmVdLCBub3JtYWwpIGdyb3Vwcy5cblxuICAgICAgICAqKk5vdGU6KiogVGhlIGZvbGxvd2luZyBkb2N1bWVudGF0aW9uIHdpbGwgdXNlIGEgY2FwaXRhbCBcIlZcIiBWZXJ0ZXggdG9cbiAgICAgICAgZGVub3RlIHRoZSBhYm92ZSAodmVydGV4LCBbdGV4dHVyZV0sIG5vcm1hbCkgZ3JvdXBzIHdoZXJlYXMgYSBsb3dlcmNhc2VcbiAgICAgICAgXCJ2XCIgdmVydGV4IGlzIHVzZWQgdG8gZGVub3RlIGFuIFgsIFksIFogY29vcmRpbmF0ZS5cblxuICAgICAgICBTb21lIGV4YW1wbGVzOlxuICAgICAgICAgICAgLy8gdGhlIHRleHR1cmUgaW5kZXggaXMgb3B0aW9uYWwsIGJvdGggZm9ybWF0cyBhcmUgcG9zc2libGUgZm9yIG1vZGVsc1xuICAgICAgICAgICAgLy8gd2l0aG91dCBhIHRleHR1cmUgYXBwbGllZFxuICAgICAgICAgICAgZiAxLzI1IDE4LzQ2IDEyLzMxXG4gICAgICAgICAgICBmIDEvLzI1IDE4Ly80NiAxMi8vMzFcblxuICAgICAgICAgICAgLy8gQSAzIHZlcnRleCBmYWNlIHdpdGggdGV4dHVyZSBpbmRpY2VzXG4gICAgICAgICAgICBmIDE2LzkyLzExIDE0LzEwMS8yMiAxLzY5LzFcblxuICAgICAgICAgICAgLy8gQSA0IHZlcnRleCBmYWNlXG4gICAgICAgICAgICBmIDE2LzkyLzExIDQwLzEwOS80MCAzOC8xMTQvMzggMTQvMTAxLzIyXG5cbiAgICAgICAgVGhlIGZpcnN0IHR3byBsaW5lcyBhcmUgZXhhbXBsZXMgb2YgYSAzIHZlcnRleCBmYWNlIHdpdGhvdXQgYSB0ZXh0dXJlIGFwcGxpZWQuXG4gICAgICAgIFRoZSBzZWNvbmQgaXMgYW4gZXhhbXBsZSBvZiBhIDMgdmVydGV4IGZhY2Ugd2l0aCBhIHRleHR1cmUgYXBwbGllZC5cbiAgICAgICAgVGhlIHRoaXJkIGlzIGFuIGV4YW1wbGUgb2YgYSA0IHZlcnRleCBmYWNlLiBOb3RlOiBhIGZhY2UgY2FuIGNvbnRhaW4gTlxuICAgICAgICBudW1iZXIgb2YgdmVydGljZXMuXG5cbiAgICAgICAgRWFjaCBudW1iZXIgdGhhdCBhcHBlYXJzIGluIG9uZSBvZiB0aGUgZ3JvdXBzIGlzIGEgMS1iYXNlZCBpbmRleFxuICAgICAgICBjb3JyZXNwb25kaW5nIHRvIGFuIGl0ZW0gZnJvbSB0aGUgb3RoZXIgc2VjdGlvbnMgKG1lYW5pbmcgdGhhdCBpbmRleGluZ1xuICAgICAgICBzdGFydHMgYXQgb25lIGFuZCAqbm90KiB6ZXJvKS5cblxuICAgICAgICBGb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIGBmIDE2LzkyLzExYCBpcyBzYXlpbmcgdG9cbiAgICAgICAgICAgICAgLSB0YWtlIHRoZSAxNnRoIGVsZW1lbnQgZnJvbSB0aGUgW3ZdIHZlcnRleCBhcnJheVxuICAgICAgICAgICAgICAtIHRha2UgdGhlIDkybmQgZWxlbWVudCBmcm9tIHRoZSBbdnRdIHRleHR1cmUgYXJyYXlcbiAgICAgICAgICAgICAgLSB0YWtlIHRoZSAxMXRoIGVsZW1lbnQgZnJvbSB0aGUgW3ZuXSBub3JtYWwgYXJyYXlcbiAgICAgICAgICAgIGFuZCB0b2dldGhlciB0aGV5IG1ha2UgYSB1bmlxdWUgdmVydGV4LlxuICAgICAgICBVc2luZyBhbGwgMysgdW5pcXVlIFZlcnRpY2VzIGZyb20gdGhlIGZhY2UgbGluZSB3aWxsIHByb2R1Y2UgYSBwb2x5Z29uLlxuXG4gICAgICAgIE5vdywgeW91IGNvdWxkIGp1c3QgZ28gdGhyb3VnaCB0aGUgT0JKIGZpbGUgYW5kIGNyZWF0ZSBhIG5ldyB2ZXJ0ZXggZm9yXG4gICAgICAgIGVhY2ggZmFjZSBsaW5lIGFuZCBXZWJHTCB3aWxsIGRyYXcgd2hhdCBhcHBlYXJzIHRvIGJlIHRoZSBzYW1lIG1vZGVsLlxuICAgICAgICBIb3dldmVyLCB2ZXJ0aWNlcyB3aWxsIGJlIG92ZXJsYXBwZWQgYW5kIGR1cGxpY2F0ZWQgYWxsIG92ZXIgdGhlIHBsYWNlLlxuXG4gICAgICAgIENvbnNpZGVyIGEgY3ViZSBpbiAzRCBzcGFjZSBjZW50ZXJlZCBhYm91dCB0aGUgb3JpZ2luIGFuZCBlYWNoIHNpZGUgaXNcbiAgICAgICAgMiB1bml0cyBsb25nLiBUaGUgZnJvbnQgZmFjZSAod2l0aCB0aGUgcG9zaXRpdmUgWi1heGlzIHBvaW50aW5nIHRvd2FyZHNcbiAgICAgICAgeW91KSB3b3VsZCBoYXZlIGEgVG9wIFJpZ2h0IHZlcnRleCAobG9va2luZyBvcnRob2dvbmFsIHRvIGl0cyBub3JtYWwpXG4gICAgICAgIG1hcHBlZCBhdCAoMSwxLDEpIFRoZSByaWdodCBmYWNlIHdvdWxkIGhhdmUgYSBUb3AgTGVmdCB2ZXJ0ZXggKGxvb2tpbmdcbiAgICAgICAgb3J0aG9nb25hbCB0byBpdHMgbm9ybWFsKSBhdCAoMSwxLDEpIGFuZCB0aGUgdG9wIGZhY2Ugd291bGQgaGF2ZSBhIEJvdHRvbVxuICAgICAgICBSaWdodCB2ZXJ0ZXggKGxvb2tpbmcgb3J0aG9nb25hbCB0byBpdHMgbm9ybWFsKSBhdCAoMSwxLDEpLiBFYWNoIGZhY2VcbiAgICAgICAgaGFzIGEgdmVydGV4IGF0IHRoZSBzYW1lIGNvb3JkaW5hdGVzLCBob3dldmVyLCB0aHJlZSBkaXN0aW5jdCB2ZXJ0aWNlc1xuICAgICAgICB3aWxsIGJlIGRyYXduIGF0IHRoZSBzYW1lIHNwb3QuXG5cbiAgICAgICAgVG8gc29sdmUgdGhlIGlzc3VlIG9mIGR1cGxpY2F0ZSBWZXJ0aWNlcyAodGhlIGAodmVydGV4LCBbdGV4dHVyZV0sIG5vcm1hbClgXG4gICAgICAgIGdyb3VwcyksIHdoaWxlIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBmYWNlIGxpbmVzLCB3aGVuIGEgZ3JvdXAgaXMgZW5jb3VudGVyZWRcbiAgICAgICAgdGhlIHdob2xlIGdyb3VwIHN0cmluZyAoJzE2LzkyLzExJykgaXMgY2hlY2tlZCB0byBzZWUgaWYgaXQgZXhpc3RzIGluIHRoZVxuICAgICAgICBwYWNrZWQuaGFzaGluZGljZXMgb2JqZWN0LCBhbmQgaWYgaXQgZG9lc24ndCwgdGhlIGluZGljZXMgaXQgc3BlY2lmaWVzXG4gICAgICAgIGFyZSB1c2VkIHRvIGxvb2sgdXAgZWFjaCBhdHRyaWJ1dGUgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIGFycmF5c1xuICAgICAgICBhbHJlYWR5IGNyZWF0ZWQuIFRoZSB2YWx1ZXMgYXJlIHRoZW4gY29waWVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIHVucGFja2VkXG4gICAgICAgIGFycmF5IChmbGF0dGVuZWQgdG8gcGxheSBuaWNlIHdpdGggV2ViR0wncyBFTEVNRU5UX0FSUkFZX0JVRkZFUiBpbmRleGluZyksXG4gICAgICAgIHRoZSBncm91cCBzdHJpbmcgaXMgYWRkZWQgdG8gdGhlIGhhc2hpbmRpY2VzIHNldCBhbmQgdGhlIGN1cnJlbnQgdW5wYWNrZWRcbiAgICAgICAgaW5kZXggaXMgdXNlZCBhcyB0aGlzIGhhc2hpbmRpY2VzIHZhbHVlIHNvIHRoYXQgdGhlIGdyb3VwIG9mIGVsZW1lbnRzIGNhblxuICAgICAgICBiZSByZXVzZWQuIFRoZSB1bnBhY2tlZCBpbmRleCBpcyBpbmNyZW1lbnRlZC4gSWYgdGhlIGdyb3VwIHN0cmluZyBhbHJlYWR5XG4gICAgICAgIGV4aXN0cyBpbiB0aGUgaGFzaGluZGljZXMgb2JqZWN0LCBpdHMgY29ycmVzcG9uZGluZyB2YWx1ZSBpcyB0aGUgaW5kZXggb2ZcbiAgICAgICAgdGhhdCBncm91cCBhbmQgaXMgYXBwZW5kZWQgdG8gdGhlIHVucGFja2VkIGluZGljZXMgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIGNvbnN0IHZlcnRzID0gW107XG4gICAgICAgIGNvbnN0IHZlcnROb3JtYWxzID0gW107XG4gICAgICAgIGNvbnN0IHRleHR1cmVzID0gW107XG4gICAgICAgIGNvbnN0IHVucGFja2VkID0ge307XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZXNCeUluZGV4ID0gW107XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kaWNlc0J5TmFtZSA9IHt9O1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXQgbWF0ZXJpYWwgd2UndmUgc2VlbiBsYXN0XG4gICAgICAgIGxldCBjdXJyZW50TWF0ZXJpYWxJbmRleCA9IC0xO1xuICAgICAgICAvLyB1bnBhY2tpbmcgc3R1ZmZcbiAgICAgICAgdW5wYWNrZWQudmVydHMgPSBbXTtcbiAgICAgICAgdW5wYWNrZWQubm9ybXMgPSBbXTtcbiAgICAgICAgdW5wYWNrZWQudGV4dHVyZXMgPSBbXTtcbiAgICAgICAgdW5wYWNrZWQuaGFzaGluZGljZXMgPSB7fTtcbiAgICAgICAgdW5wYWNrZWQuaW5kaWNlcyA9IFtdO1xuICAgICAgICB1bnBhY2tlZC5tYXRlcmlhbEluZGljZXMgPSBbXTtcbiAgICAgICAgdW5wYWNrZWQuaW5kZXggPSAwO1xuXG4gICAgICAgIGNvbnN0IFZFUlRFWF9SRSA9IC9edlxccy87XG4gICAgICAgIGNvbnN0IE5PUk1BTF9SRSA9IC9edm5cXHMvO1xuICAgICAgICBjb25zdCBURVhUVVJFX1JFID0gL152dFxccy87XG4gICAgICAgIGNvbnN0IEZBQ0VfUkUgPSAvXmZcXHMvO1xuICAgICAgICBjb25zdCBXSElURVNQQUNFX1JFID0gL1xccysvO1xuICAgICAgICBjb25zdCBVU0VfTUFURVJJQUxfUkUgPSAvXnVzZW10bC87XG5cbiAgICAgICAgLy8gYXJyYXkgb2YgbGluZXMgc2VwYXJhdGVkIGJ5IHRoZSBuZXdsaW5lXG4gICAgICAgIGNvbnN0IGxpbmVzID0gb2JqZWN0RGF0YS5zcGxpdCgnXFxuJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghbGluZSB8fCBsaW5lLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBsaW5lLnNwbGl0KFdISVRFU1BBQ0VfUkUpO1xuICAgICAgICAgICAgZWxlbWVudHMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKFZFUlRFWF9SRS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHZlcnRleFxuICAgICAgICAgICAgICAgIHZlcnRzLnB1c2goLi4uZWxlbWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChOT1JNQUxfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSB2ZXJ0ZXggbm9ybWFsXG4gICAgICAgICAgICAgICAgdmVydE5vcm1hbHMucHVzaCguLi5lbGVtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFRFWFRVUkVfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBlbGVtZW50cztcbiAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0LCB0aGUgbG9hZGVyIHdpbGwgb25seSBsb29rIGF0IHRoZSBVIGFuZCBWXG4gICAgICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgb2YgdGhlIHZ0IGRlY2xhcmF0aW9uLiBTbywgdGhpcyB0cnVuY2F0ZXMgdGhlXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudHMgdG8gb25seSB0aG9zZSAyIHZhbHVlcy4gSWYgVyB0ZXh0dXJlIGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICAvLyBzdXBwb3J0IGlzIGVuYWJsZWQsIHRoZW4gdGhlIHRleHR1cmUgY29vcmRpbmF0ZSBpc1xuICAgICAgICAgICAgICAgIC8vIGV4cGVjdGVkIHRvIGhhdmUgdGhyZWUgdmFsdWVzIGluIGl0LlxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAyICYmICFvcHRpb25zLmVuYWJsZVdUZXh0dXJlQ29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gZWxlbWVudHMuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGZvciBzb21lIHJlYXNvbiBXIHRleHR1cmUgY29vcmRpbmF0ZSBzdXBwb3J0IGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAvLyBhbmQgb25seSB0aGUgVSBhbmQgViBjb29yZGluYXRlcyBhcmUgZ2l2ZW4sIHRoZW4gd2Ugc3VwcGx5XG4gICAgICAgICAgICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgb2YgMCBzbyB0aGF0IHRoZSBzdHJpZGUgbGVuZ3RoIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB0ZXh0dXJlcyBhcmUgdW5wYWNrZWQgYmVsb3cuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyICYmIG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZCkge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dHVyZXMucHVzaCguLi5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChVU0VfTUFURVJJQUxfUkUudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IGVsZW1lbnRzWzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHdlJ3ZlIGV2ZXIgc2VlbiBpdCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoIShtYXRlcmlhbE5hbWUgaW4gbWF0ZXJpYWxJbmRpY2VzQnlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgbWF0ZXJpYWwgd2UndmUgbmV2ZXIgc2VlblxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWVzQnlJbmRleC5wdXNoKG1hdGVyaWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kaWNlc0J5TmFtZVttYXRlcmlhbE5hbWVdID0gbWF0ZXJpYWxOYW1lc0J5SW5kZXgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IG1hdGVyaWFsIGluZGV4XG4gICAgICAgICAgICAgICAgY3VycmVudE1hdGVyaWFsSW5kZXggPSBtYXRlcmlhbEluZGljZXNCeU5hbWVbbWF0ZXJpYWxOYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoRkFDRV9SRS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGZhY2VcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIHNwbGl0IHRoaXMgZmFjZSBpbnRvIGFuIGFycmF5IG9mIFZlcnRleCBncm91cHNcbiAgICAgICAgICAgICAgICBmb3IgZXhhbXBsZTpcbiAgICAgICAgICAgICAgICAgICBmIDE2LzkyLzExIDE0LzEwMS8yMiAxLzY5LzFcbiAgICAgICAgICAgICAgICBiZWNvbWVzOlxuICAgICAgICAgICAgICAgICAgWycxNi85Mi8xMScsICcxNC8xMDEvMjInLCAnMS82OS8xJ107XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCB0cmlhbmdsZXMgPSB0cmlhbmd1bGF0ZShlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudHMgb2YgdHJpYW5nbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBlbGVMZW4gPSBlbGVtZW50cy5sZW5ndGg7IGogPCBlbGVMZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaDAgPSBlbGVtZW50c1swXSArICcsJyArIGN1cnJlbnRNYXRlcmlhbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGVsZW1lbnRzW2pdICsgJywnICsgY3VycmVudE1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaCBpbiB1bnBhY2tlZC5oYXNoaW5kaWNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLmluZGljZXMucHVzaCh1bnBhY2tlZC5oYXNoaW5kaWNlc1toYXNoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBlbGVtZW50IG9mIHRoZSBmYWNlIGxpbmUgYXJyYXkgaXMgYSBWZXJ0ZXggd2hpY2ggaGFzIGl0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgZGVsaW1pdGVkIGJ5IGEgZm9yd2FyZCBzbGFzaC4gVGhpcyB3aWxsIHNlcGFyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFjaCBhdHRyaWJ1dGUgaW50byBhbm90aGVyIGFycmF5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMTkvOTIvMTEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVjb21lczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVydGV4ID0gWycxOScsICc5MicsICcxMSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnRleFswXSBpcyB0aGUgdmVydGV4IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnRleFsxXSBpcyB0aGUgdGV4dHVyZSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhbMl0gaXMgdGhlIG5vcm1hbCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGZhY2VzIGhhdmluZyBWZXJ0aWNlcyB3aGljaCBhcmUgY29tcHJpc2VkIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgbG9jYXRpb24gKHYpLCB0ZXh0dXJlICh2dCksIGFuZCBub3JtYWwgKHZuKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBlbGVtZW50c1tqXS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgZm9yIGZhY2VzIHRvIG9ubHkgc3BlY2lmeSB0aGUgdmVydGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBub3JtYWwuIEluIHRoaXMgY2FzZSwgdmVydGV4IHdpbGwgb25seSBoYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBsZW5ndGggb2YgMiBhbmQgbm90IDMgYW5kIHRoZSBub3JtYWwgd2lsbCBiZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgaXRlbSBpbiB0aGUgbGlzdCB3aXRoIGFuIGluZGV4IG9mIDEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vcm1hbEluZGV4ID0gdmVydGV4Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdmVydHMsIHRleHR1cmVzLCBhbmQgdmVydE5vcm1hbHMgYXJyYXlzIGVhY2ggY29udGFpbiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmQgYXJyYXkgb2YgY29vcmRpbmF0ZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIGl0IGdldHMgY29uZnVzaW5nIGJ5IHJlZmVycmluZyB0byBWZXJ0ZXggYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggKGJvdGggYXJlIGRpZmZlcmVudCBpbiBteSBkZXNjcmlwdGlvbnMpIEkgd2lsbCBleHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hhdCdzIGdvaW5nIG9uIHVzaW5nIHRoZSB2ZXJ0ZXhOb3JtYWxzIGFycmF5OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4WzJdIHdpbGwgY29udGFpbiB0aGUgb25lLWJhc2VkIGluZGV4IG9mIHRoZSB2ZXJ0ZXhOb3JtYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiAodm4pLiBPbmUgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgaW5kZXggbnVtYmVyIHRvIHBsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNlIHdpdGggamF2YXNjcmlwdCdzIHplcm8tYmFzZWQgYXJyYXkgaW5kZXhpbmcuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWNhdXNlIHZlcnRleE5vcm1hbCBpcyBhIGZsYXR0ZW5lZCBhcnJheSBvZiB4LCB5LCB6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGUgcG9pbnRlciBhcml0aG1ldGljIGlzIHVzZWQgdG8gc2tpcCB0byB0aGUgc3RhcnQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsLCB0aGVuIHRoZSBvZmZzZXQgaXMgYWRkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiArMCBpcyB4LCArMSBpcyB5LCArMiBpcyB6LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYW1lIHByb2Nlc3MgaXMgcmVwZWF0ZWQgZm9yIHZlcnRzIGFuZCB0ZXh0dXJlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRleCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnZlcnRzLnB1c2goK3ZlcnRzWyh2ZXJ0ZXhbMF0gLSAxKSAqIDMgKyAwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQudmVydHMucHVzaCgrdmVydHNbKHZlcnRleFswXSAtIDEpICogMyArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC52ZXJ0cy5wdXNoKCt2ZXJ0c1sodmVydGV4WzBdIC0gMSkgKiAzICsgMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRleCB0ZXh0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cmlkZSA9IG9wdGlvbnMuZW5hYmxlV1RleHR1cmVDb29yZD8gMyA6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLnRleHR1cmVzLnB1c2goK3RleHR1cmVzWyh2ZXJ0ZXhbMV0gLSAxKSAqIHN0cmlkZSArIDBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQudGV4dHVyZXMucHVzaCgrdGV4dHVyZXNbKHZlcnRleFsxXSAtIDEpICogc3RyaWRlICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVXVGV4dHVyZUNvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC50ZXh0dXJlcy5wdXNoKCt0ZXh0dXJlc1sodmVydGV4WzFdIC0gMSkgKiBzdHJpZGUgKyAyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVydGV4IG5vcm1hbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1sodmVydGV4W25vcm1hbEluZGV4XSAtIDEpICogMyArIDBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1sodmVydGV4W25vcm1hbEluZGV4XSAtIDEpICogMyArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5ub3Jtcy5wdXNoKCt2ZXJ0Tm9ybWFsc1sodmVydGV4W25vcm1hbEluZGV4XSAtIDEpICogMyArIDJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0ZXggbWF0ZXJpYWwgaW5kaWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLm1hdGVyaWFsSW5kaWNlcy5wdXNoKGN1cnJlbnRNYXRlcmlhbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIG5ld2x5IGNyZWF0ZWQgVmVydGV4IHRvIHRoZSBsaXN0IG9mIGluZGljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZC5oYXNoaW5kaWNlc1toYXNoXSA9IHVucGFja2VkLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGFja2VkLmluZGljZXMucHVzaCh1bnBhY2tlZC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wYWNrZWQuaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnZlcnRpY2VzID0gdW5wYWNrZWQudmVydHM7XG4gICAgICAgIHNlbGYudmVydGV4Tm9ybWFscyA9IHVucGFja2VkLm5vcm1zO1xuICAgICAgICBzZWxmLnRleHR1cmVzID0gdW5wYWNrZWQudGV4dHVyZXM7XG4gICAgICAgIHNlbGYudmVydGV4TWF0ZXJpYWxJbmRpY2VzID0gdW5wYWNrZWQubWF0ZXJpYWxJbmRpY2VzO1xuICAgICAgICBzZWxmLmluZGljZXMgPSB1bnBhY2tlZC5pbmRpY2VzO1xuXG4gICAgICAgIHNlbGYubWF0ZXJpYWxOYW1lcyA9IG1hdGVyaWFsTmFtZXNCeUluZGV4O1xuICAgICAgICBzZWxmLm1hdGVyaWFsSW5kaWNlcyA9IG1hdGVyaWFsSW5kaWNlc0J5TmFtZTtcbiAgICAgICAgc2VsZi5tYXRlcmlhbHNCeUluZGV4ID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtMYXlvdXR9IGxheW91dCAtIEEge0BsaW5rIExheW91dH0gb2JqZWN0IHRoYXQgZGVzY3JpYmVzIHRoZVxuICAgICAqIGRlc2lyZWQgbWVtb3J5IGxheW91dCBvZiB0aGUgZ2VuZXJhdGVkIGJ1ZmZlclxuICAgICAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBUaGUgcGFja2VkIGFycmF5IGluIHRoZSAuLi4gVE9ET1xuICAgICAqL1xuICAgIG1ha2VCdWZmZXJEYXRhKGxheW91dCkge1xuICAgICAgICBjb25zdCBudW1JdGVtcyA9IHRoaXMudmVydGljZXMubGVuZ3RoIC8gMztcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxheW91dC5zdHJpZGUgKiBudW1JdGVtcyk7XG4gICAgICAgIGJ1ZmZlci5udW1JdGVtcyA9IG51bUl0ZW1zO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgdmVydGV4T2Zmc2V0ID0gMDsgaSA8IG51bUl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleE9mZnNldCA9IGkgKiBsYXlvdXQuc3RyaWRlO1xuICAgICAgICAgICAgLy8gY29weSBpbiB0aGUgdmVydGV4IGRhdGEgaW4gdGhlIG9yZGVyIGFuZCBmb3JtYXQgZ2l2ZW4gYnkgdGhlXG4gICAgICAgICAgICAvLyBsYXlvdXQgcGFyYW1cbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGxheW91dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVydGV4T2Zmc2V0ICsgbGF5b3V0W2F0dHJpYnV0ZS5rZXldLm9mZnNldDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuUE9TSVRJT04ua2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIHRoaXMudmVydGljZXNbaSAqIDNdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgdGhpcy52ZXJ0aWNlc1tpICogMyArIDFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgdGhpcy52ZXJ0aWNlc1tpICogMyArIDJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5VVi5rZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdGhpcy50ZXh0dXJlc1tpICogMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCB0aGlzLnZlcnRpY2VzW2kgKiAyICsgMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0Lk5PUk1BTC5rZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgdGhpcy52ZXJ0ZXhOb3JtYWxzW2kgKiAzXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIHRoaXMudmVydGV4Tm9ybWFsc1tpICogMyArIDFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgdGhpcy52ZXJ0ZXhOb3JtYWxzW2kgKiAzICsgMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0Lk1BVEVSSUFMX0lOREVYLmtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LkFNQklFTlQua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsIFwiJyArIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLmFtYmllbnRbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCBtYXRlcmlhbC5hbWJpZW50WzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgOCwgbWF0ZXJpYWwuYW1iaWVudFsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5ESUZGVVNFLmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYXRlcmlhbCBcIicgKyB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gKyAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0LCBtYXRlcmlhbC5kaWZmdXNlWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgbWF0ZXJpYWwuZGlmZnVzZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLmRpZmZ1c2VbMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuU1BFQ1VMQVIua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsIFwiJyArIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnNwZWN1bGFyWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEZsb2F0MzIob2Zmc2V0ICsgNCwgbWF0ZXJpYWwuc3BlY3VsYXJbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA4LCBtYXRlcmlhbC5zcGVjdWxhclsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5TUEVDVUxBUl9FWFBPTkVOVC5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWF0ZXJpYWwgXCInICsgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICsgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5FTUlTU0lWRS5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWF0ZXJpYWwgXCInICsgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICsgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuZW1pc3NpdmVbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQgKyA0LCBtYXRlcmlhbC5lbWlzc2l2ZVsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLmVtaXNzaXZlWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LlRSQU5TTUlTU0lPTl9GSUxURVIua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsIFwiJyArIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclswXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDQsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclsxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCArIDgsIG1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlclsyXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5ESVNTT0xWRS5rZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSB0aGlzLnZlcnRleE1hdGVyaWFsSW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNCeUluZGV4W21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWF0ZXJpYWwgXCInICsgdGhpcy5tYXRlcmlhbE5hbWVzW21hdGVyaWFsSW5kZXhdICsgJ1wiIG5vdCBmb3VuZCBpbiBtZXNoLiBEaWQgeW91IGZvcmdldCB0byBjYWxsIGFkZE1hdGVyaWFsTGlicmFyeSguLi4pP1wiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmlldy5zZXRGbG9hdDMyKG9mZnNldCwgbWF0ZXJpYWwuZGlzc29sdmUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXlvdXQuSUxMVU1JTkFUSU9OLmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYXRlcmlhbCBcIicgKyB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gKyAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgbWF0ZXJpYWwuaWxsdW1pbmF0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGF5b3V0LlJFRlJBQ1RJT05fSU5ERVgua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsIFwiJyArIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnJlZnJhY3Rpb25JbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5TSEFSUE5FU1Mua2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy52ZXJ0ZXhNYXRlcmlhbEluZGljZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzQnlJbmRleFttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hdGVyaWFsIFwiJyArIHRoaXMubWF0ZXJpYWxOYW1lc1ttYXRlcmlhbEluZGV4XSArICdcIiBub3QgZm91bmQgaW4gbWVzaC4gRGlkIHlvdSBmb3JnZXQgdG8gY2FsbCBhZGRNYXRlcmlhbExpYnJhcnkoLi4uKT9cIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0RmxvYXQzMihvZmZzZXQsIG1hdGVyaWFsLnNoYXJwbmVzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIExheW91dC5BTlRJX0FMSUFTSU5HLmtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9IHRoaXMudmVydGV4TWF0ZXJpYWxJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNYXRlcmlhbCBcIicgKyB0aGlzLm1hdGVyaWFsTmFtZXNbbWF0ZXJpYWxJbmRleF0gKyAnXCIgbm90IGZvdW5kIGluIG1lc2guIERpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYWRkTWF0ZXJpYWxMaWJyYXJ5KC4uLik/XCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDE2KG9mZnNldCwgbWF0ZXJpYWwuYW50aUFsaWFzaW5nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgbWFrZUluZGV4QnVmZmVyRGF0YSgpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuaW5kaWNlcyk7XG4gICAgICAgIGJ1ZmZlci5udW1JdGVtcyA9IHRoaXMuaW5kaWNlcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgYWRkTWF0ZXJpYWxMaWJyYXJ5IChtdGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG10bC5tYXRlcmlhbHMpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy5tYXRlcmlhbEluZGljZXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBtYXRlcmlhbCBpcyBub3QgcmVmZXJlbmNlZCBieSB0aGUgbWVzaFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG10bC5tYXRlcmlhbHNbbmFtZV07XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIG1hdGVyaWFsIGluZGV4IGZvciB0aGlzIG1hdGVyaWFsXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5tYXRlcmlhbEluZGljZXNbbWF0ZXJpYWwubmFtZV1cblxuICAgICAgICAgICAgLy8gUHV0IHRoZSBtYXRlcmlhbCBpbnRvIHRoZSBtYXRlcmlhbHNCeUluZGV4IG9iamVjdCBhdCB0aGUgcmlnaHRcbiAgICAgICAgICAgIC8vIHNwb3QgYXMgZGV0ZXJtaW5lZCB3aGVuIHRoZSBvYmogZmlsZSB3YXMgcGFyc2VkXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsc0J5SW5kZXhbbWF0ZXJpYWxJbmRleF0gPSBtYXRlcmlhbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBNYXRlcmlhbCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hdGVyaWFsIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSB1bmlxdWUgbmFtZSBvZiB0aGUgbWF0ZXJpYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAvLyB0aGUgdW5pcXVlIG1hdGVyaWFsIElELlxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgLy8gVGhlIHZhbHVlcyBmb3IgdGhlIGZvbGxvd2luZyBhdHRpYnV0ZXNcbiAgICAvLyBhcmUgYW4gYXJyYXkgb2YgUiwgRywgQiBub3JtYWxpemVkIHZhbHVlcy5cbiAgICAvLyBLYSAtIEFtYmllbnQgUmVmbGVjdGl2aXR5XG4gICAgdGhpcy5hbWJpZW50ID0gWzAsIDAsIDBdO1xuICAgIC8vIEtkIC0gRGVmdXNlIFJlZmxlY3Rpdml0eVxuICAgIHRoaXMuZGlmZnVzZSA9IFswLCAwLCAwXTtcbiAgICAvLyBLc1xuICAgIHRoaXMuc3BlY3VsYXIgPSBbMCwgMCwgMF07XG4gICAgLy8gS2VcbiAgICB0aGlzLmVtaXNzaXZlID0gWzAsIDAsIDBdO1xuICAgIC8vIFRmXG4gICAgdGhpcy50cmFuc21pc3Npb25GaWx0ZXIgPSBbMCwgMCwgMF07XG4gICAgLy8gZFxuICAgIHRoaXMuZGlzc29sdmUgPSAwO1xuICAgIC8vIHZhbGlkIHJhbmdlIGlzIGJldHdlZW4gMCBhbmQgMTAwMFxuICAgIHRoaXMuc3BlY3VsYXJFeHBvbmVudCA9IDA7XG4gICAgLy8gZWl0aGVyIGQgb3IgVHI7IHZhbGlkIHZhbHVlcyBhcmUgbm9ybWFsaXplZFxuICAgIHRoaXMudHJhbnNwYXJlbmN5ID0gMDtcbiAgICAvLyBpbGx1bSAtIHRoZSBlbnVtIG9mIHRoZSBpbGx1bWluYXRpb24gbW9kZWwgdG8gdXNlXG4gICAgdGhpcy5pbGx1bWluYXRpb24gPSAwO1xuICAgIC8vIE5pIC0gU2V0IHRvIFwibm9ybWFsXCIgKGFpcikuXG4gICAgdGhpcy5yZWZyYWN0aW9uSW5kZXggPSAxO1xuICAgIC8vIHNoYXJwbmVzc1xuICAgIHRoaXMuc2hhcnBuZXNzID0gMDtcbiAgICAvLyBtYXBfS2RcbiAgICB0aGlzLm1hcERpZmZ1c2UgPSBudWxsO1xuICAgIC8vIG1hcF9LYVxuICAgIHRoaXMubWFwQW1iaWVudCA9IG51bGw7XG4gICAgLy8gbWFwX0tzXG4gICAgdGhpcy5tYXBTcGVjdWxhciA9IG51bGw7XG4gICAgLy8gbWFwX05zXG4gICAgdGhpcy5tYXBTcGVjdWxhckV4cG9uZW50ID0gbnVsbDtcbiAgICAvLyBtYXBfZFxuICAgIHRoaXMubWFwRGlzc29sdmUgPSBudWxsO1xuICAgIC8vIG1hcF9hYXRcbiAgICB0aGlzLmFudGlBbGlhc2luZyA9IGZhbHNlO1xuICAgIC8vIG1hcF9idW1wIG9yIGJ1bXBcbiAgICB0aGlzLm1hcEJ1bXAgPSBudWxsO1xuICAgIC8vIGRpc3BcbiAgICB0aGlzLm1hcERpc3BsYWNlbWVudCA9IG51bGw7XG4gICAgLy8gZGVjYWxcbiAgICB0aGlzLm1hcERlY2FsID0gbnVsbDtcbiAgICAvLyBtYXBfS2VcbiAgICB0aGlzLm1hcEVtaXNzaXZlID0gbnVsbDtcbiAgICAvLyByZWZsIC0gd2hlbiB0aGUgcmVmbGVjdGlvbiB0eXBlIGlzIGEgY3ViZSwgdGhlcmUgd2lsbCBiZSBtdWx0aXBsZSByZWZsXG4gICAgLy8gICAgICAgIHN0YXRlbWVudHMgZm9yIGVhY2ggc2lkZSBvZiB0aGUgY3ViZS4gSWYgaXQncyBhIHNwaGVyaWNhbFxuICAgIC8vICAgICAgICByZWZsZWN0aW9uLCB0aGVyZSBzaG91bGQgb25seSBldmVyIGJlIG9uZS5cbiAgICB0aGlzLm1hcFJlZmxlY3Rpb25zID0gW107XG4gIH1cbn1cblxuLyoqXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XYXZlZnJvbnRfLm9ial9maWxlXG4gKiBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZGF0YWZvcm1hdHMvbXRsL1xuICovXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxMaWJyYXJ5IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgdGhlIE1hdGVyaWFsIFBhcnNlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXRsRGF0YSB0aGUgTVRMIGZpbGUgY29udGVudHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG10bERhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBtdGxEYXRhO1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsID0gbnVsbDtcbiAgICB0aGlzLm1hdGVyaWFscyA9IHt9O1xuXG4gICAgdGhpcy5wYXJzZSgpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIC8qIHRoZSBmdW5jdGlvbiBuYW1lcyBoZXJlIGRpc29iZXkgY2FtZWxDYXNlIGNvbnZlbnRpb25zXG4gICAgIHRvIG1ha2UgcGFyc2luZy9yb3V0aW5nIGVhc2llci4gc2VlIHRoZSBwYXJzZSBmdW5jdGlvblxuICAgICBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLiAqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE1hdGVyaWFsIG9iamVjdCBhbmQgYWRkcyB0byB0aGUgcmVnaXN0cnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAqL1xuICBwYXJzZV9uZXdtdGwodG9rZW5zKSB7XG4gICAgbGV0IG5hbWUgPSB0b2tlbnNbMF07XG4gICAgLy8gY29uc29sZS5pbmZvKCdQYXJzaW5nIG5ldyBNYXRlcmlhbDonLCBuYW1lKTtcblxuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsID0gbmV3IE1hdGVyaWFsKG5hbWUpO1xuICAgIHRoaXMubWF0ZXJpYWxzW25hbWVdID0gdGhpcy5jdXJyZW50TWF0ZXJpYWw7XG4gIH1cblxuICAvKipcbiAgICogU2VlIHRoZSBkb2N1bWVuYXRpb24gZm9yIHBhcnNlX0thIGJlbG93IGZvciBhIGJldHRlciB1bmRlcnN0YW5kaW5nLlxuICAgKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgcG9zc2libGUgY29sb3IgdG9rZW5zLCByZXR1cm5zIGFuIGFycmF5IG9mIFIsIEcsIGFuZCBCXG4gICAqIGNvbG9yIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICogQHJldHVybiB7Kn0gYSAzIGVsZW1lbnQgYXJyYXkgY29udGFpbmluZyB0aGUgUiwgRywgYW5kIEIgdmFsdWVzXG4gICAqIG9mIHRoZSBjb2xvci5cbiAgICovXG4gIHBhcnNlQ29sb3IodG9rZW5zKSB7XG4gICAgaWYgKHRva2Vuc1swXSA9PSAnc3BlY3RyYWwnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnVGhlIE1UTCBwYXJzZXIgZG9lcyBub3Qgc3VwcG9ydCBzcGVjdHJhbCBjdXJ2ZSBmaWxlcy4gWW91IHdpbGwgJyArXG4gICAgICAgICduZWVkIHRvIGNvbnZlcnQgdGhlIE1UTCBjb2xvcnMgdG8gZWl0aGVyIFJHQiBvciBDSUVYWVouJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodG9rZW5zWzBdID09ICd4eXonKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1RPRE86IGNvbnZlcnQgWFlaIHRvIFJHQicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZyb20gbXkgdW5kZXJzdGFuZGluZyBvZiB0aGUgc3BlYywgUkdCIHZhbHVlcyBhdCB0aGlzIHBvaW50XG4gICAgLy8gd2lsbCBlaXRoZXIgYmUgMyBmbG9hdHMgb3IgZXhhY3RseSAxIGZsb2F0LCBzbyB0aGF0J3MgdGhlIGNoZWNrXG4gICAgLy8gdGhhdCBpJ20gZ29pbmcgdG8gcGVyZm9ybSBoZXJlXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPT0gMykge1xuICAgICAgcmV0dXJuIHRva2Vucy5tYXAocGFyc2VGbG9hdCk7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdG9rZW5zIGF0IHRoaXMgcG9pbnQgaGFzIGEgbGVuZ3RoIG9mIDMsIHdlJ3JlIGdvaW5nIHRvIGFzc3VtZVxuICAgIC8vIGl0J3MgZXhhY3RseSAxLCBza2lwcGluZyB0aGUgY2hlY2sgZm9yIDIuXG4gICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdCh0b2tlbnNbMF0pO1xuICAgIC8vIGluIHRoaXMgY2FzZSwgYWxsIHZhbHVlcyBhcmUgZXF1aXZhbGVudFxuICAgIHJldHVybiBbdmFsdWUsIHZhbHVlLCB2YWx1ZV07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGFtYmllbnQgcmVmbGVjdGl2aXR5XG4gICAqXG4gICAqIEEgS2EgZGlyZWN0aXZlIGNhbiB0YWtlIG9uZSBvZiB0aHJlZSBmb3JtczpcbiAgICogICAtIEthIHIgZyBiXG4gICAqICAgLSBLYSBzcGVjdHJhbCBmaWxlLnJmbFxuICAgKiAgIC0gS2EgeHl6IHggeSB6XG4gICAqIFRoZXNlIHRocmVlIGZvcm1zIGFyZSBtdXR1YWxseSBleGNsdXNpdmUgaW4gdGhhdCBvbmx5IG9uZVxuICAgKiBkZWNsYXJhdGlvbiBjYW4gZXhpc3QgcGVyIG1hdGVyaWFsLiBJdCBpcyBjb25zaWRlcmVkIGEgc3ludGF4XG4gICAqIGVycm9yIG90aGVyd2lzZS5cbiAgICpcbiAgICogVGhlIFwiS2FcIiBmb3JtIHNwZWNpZmllcyB0aGUgYW1iaWVudCByZWZsZWN0aXZpdHkgdXNpbmcgUkdCIHZhbHVlcy5cbiAgICogVGhlIFwiZ1wiIGFuZCBcImJcIiB2YWx1ZXMgYXJlIG9wdGlvbmFsLiBJZiBvbmx5IHRoZSBcInJcIiB2YWx1ZSBpc1xuICAgKiBzcGVjaWZpZWQsIHRoZW4gdGhlIFwiZ1wiIGFuZCBcImJcIiB2YWx1ZXMgYXJlIGFzc2lnbmVkIHRoZSB2YWx1ZSBvZlxuICAgKiBcInJcIi4gVmFsdWVzIGFyZSBub3JtYWxseSBpbiB0aGUgcmFuZ2UgMC4wIHRvIDEuMC4gVmFsdWVzIG91dHNpZGVcbiAgICogb2YgdGhpcyByYW5nZSBpbmNyZWFzZSBvciBkZWNyZWFzZSB0aGUgcmVmbGVjdGl2aXR5IGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBUaGUgXCJLYSBzcGVjdHJhbFwiIGZvcm0gc3BlY2lmaWVzIHRoZSBhbWJpZW50IHJlZmxlY3Rpdml0eSB1c2luZyBhXG4gICAqIHNwZWN0cmFsIGN1cnZlLiBcImZpbGUucmZsXCIgaXMgdGhlIG5hbWUgb2YgdGhlIFwiLnJmbFwiIGZpbGUgY29udGFpbmluZ1xuICAgKiB0aGUgY3VydmUgZGF0YS4gXCJmYWN0b3JcIiBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB3aGljaCBpcyBhIG11bHRpcGxpZXJcbiAgICogZm9yIHRoZSB2YWx1ZXMgaW4gdGhlIC5yZmwgZmlsZSBhbmQgZGVmYXVsdHMgdG8gMS4wIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoZSBcIkthIHh5elwiIGZvcm0gc3BlY2lmaWVzIHRoZSBhbWJpZW50IHJlZmxlY3Rpdml0eSB1c2luZyBDSUVYWVogdmFsdWVzLlxuICAgKiBcInggeSB6XCIgYXJlIHRoZSB2YWx1ZXMgb2YgdGhlIENJRVhZWiBjb2xvciBzcGFjZS4gVGhlIFwieVwiIGFuZCBcInpcIiBhcmd1bWVudHNcbiAgICogYXJlIG9wdGlvbmFsIGFuZCB0YWtlIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJ4XCIgY29tcG9uZW50IGlmIG9ubHkgXCJ4XCIgaXNcbiAgICogc3BlY2lmaWVkLiBUaGUgXCJ4IHkgelwiIHZhbHVlcyBhcmUgbm9ybWFsbHkgaW4gdGhlIHJhbmdlIG9mIDAuMCB0byAxLjAgYW5kXG4gICAqIGluY3JlYXNlIG9yIGRlY3JlYXNlIGFtYmllbnQgcmVmbGVjdGl2aXR5IGFjY29yZGluZ2x5IG91dHNpZGUgb2YgdGhhdFxuICAgKiByYW5nZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICovXG4gIHBhcnNlX0thKHRva2Vucykge1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmFtYmllbnQgPSB0aGlzLnBhcnNlQ29sb3IodG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaWZmdXNlIFJlZmxlY3Rpdml0eVxuICAgKlxuICAgKiBTaW1pbGFyIHRvIHRoZSBLYSBkaXJlY3RpdmUuIFNpbXBseSByZXBsYWNlIFwiS2FcIiB3aXRoIFwiS2RcIiBhbmQgdGhlIHJ1bGVzXG4gICAqIGFyZSB0aGUgc2FtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgKi9cbiAgcGFyc2VfS2QodG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuZGlmZnVzZSA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWN0cmFsIFJlZmxlY3Rpdml0eVxuICAgKlxuICAgKiBTaW1pbGFyIHRvIHRoZSBLYSBkaXJlY3RpdmUuIFNpbXBseSByZXBsYWNlIFwiS3NcIiB3aXRoIFwiS2RcIiBhbmQgdGhlIHJ1bGVzXG4gICAqIGFyZSB0aGUgc2FtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgKi9cbiAgcGFyc2VfS3ModG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuc3BlY3VsYXIgPSB0aGlzLnBhcnNlQ29sb3IodG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWlzc2l2ZVxuICAgKlxuICAgKiBUaGUgYW1vdW50IGFuZCBjb2xvciBvZiBsaWdodCBlbWl0dGVkIGJ5IHRoZSBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAqL1xuICBwYXJzZV9LZSh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5lbWlzc2l2ZSA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbWlzc2lvbiBGaWx0ZXJcbiAgICpcbiAgICogQW55IGxpZ2h0IHBhc3NpbmcgdGhyb3VnaCB0aGUgb2JqZWN0IGlzIGZpbHRlcmVkIGJ5IHRoZSB0cmFuc21pc3Npb25cbiAgICogZmlsdGVyLCB3aGljaCBvbmx5IGFsbG93cyBzcGVjaWZpYyBjb2xvcnMgdG8gcGFzcyB0aHJvdWdoLiBGb3IgZXhhbXBsZSwgVGZcbiAgICogMCAxIDAgYWxsb3dzIGFsbCBvZiB0aGUgZ3JlZW4gdG8gcGFzcyB0aHJvdWdoIGFuZCBmaWx0ZXJzIG91dCBhbGwgb2YgdGhlXG4gICAqIHJlZCBhbmQgYmx1ZS5cbiAgICpcbiAgICogU2ltaWxhciB0byB0aGUgS2EgZGlyZWN0aXZlLiBTaW1wbHkgcmVwbGFjZSBcIktzXCIgd2l0aCBcIlRmXCIgYW5kIHRoZSBydWxlc1xuICAgKiBhcmUgdGhlIHNhbWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICovXG4gIHBhcnNlX1RmKHRva2Vucykge1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLnRyYW5zbWlzc2lvbkZpbHRlciA9IHRoaXMucGFyc2VDb2xvcih0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZGlzc29sdmUgZm9yIHRoZSBjdXJyZW50IG1hdGVyaWFsLlxuICAgKlxuICAgKiBTdGF0ZW1lbnQ6IGQgWy1oYWxvXSBgZmFjdG9yYFxuICAgKlxuICAgKiBFeGFtcGxlOiBcImQgMC41XCJcbiAgICpcbiAgICogVGhlIGZhY3RvciBpcyB0aGUgYW1vdW50IHRoaXMgbWF0ZXJpYWwgZGlzc29sdmVzIGludG8gdGhlIGJhY2tncm91bmQuIEFcbiAgICogZmFjdG9yIG9mIDEuMCBpcyBmdWxseSBvcGFxdWUuIFRoaXMgaXMgdGhlIGRlZmF1bHQgd2hlbiBhIG5ldyBtYXRlcmlhbCBpc1xuICAgKiBjcmVhdGVkLiBBIGZhY3RvciBvZiAwLjAgaXMgZnVsbHkgZGlzc29sdmVkIChjb21wbGV0ZWx5IHRyYW5zcGFyZW50KS5cbiAgICpcbiAgICogVW5saWtlIGEgcmVhbCB0cmFuc3BhcmVudCBtYXRlcmlhbCwgdGhlIGRpc3NvbHZlIGRvZXMgbm90IGRlcGVuZCB1cG9uXG4gICAqIG1hdGVyaWFsIHRoaWNrbmVzcyBub3IgZG9lcyBpdCBoYXZlIGFueSBzcGVjdHJhbCBjaGFyYWN0ZXIuIERpc3NvbHZlIHdvcmtzXG4gICAqIG9uIGFsbCBpbGx1bWluYXRpb24gbW9kZWxzLlxuICAgKlxuICAgKiBUaGUgZGlzc29sdmUgc3RhdGVtZW50IGFsbG93cyBmb3IgYW4gb3B0aW9uYWwgXCItaGFsb1wiIGZsYWcgd2hpY2ggaW5kaWNhdGVzXG4gICAqIHRoYXQgYSBkaXNzb2x2ZSBpcyBkZXBlbmRlbnQgb24gdGhlIHN1cmZhY2Ugb3JpZW50YXRpb24gcmVsYXRpdmUgdG8gdGhlXG4gICAqIHZpZXdlci4gRm9yIGV4YW1wbGUsIGEgc3BoZXJlIHdpdGggdGhlIGZvbGxvd2luZyBkaXNzb2x2ZSwgXCJkIC1oYWxvIDAuMFwiLFxuICAgKiB3aWxsIGJlIGZ1bGx5IGRpc3NvbHZlZCBhdCBpdHMgY2VudGVyIGFuZCB3aWxsIGFwcGVhciBncmFkdWFsbHkgbW9yZSBvcGFxdWVcbiAgICogdG93YXJkIGl0cyBlZGdlLlxuICAgKlxuICAgKiBcImZhY3RvclwiIGlzIHRoZSBtaW5pbXVtIGFtb3VudCBvZiBkaXNzb2x2ZSBhcHBsaWVkIHRvIHRoZSBtYXRlcmlhbC4gVGhlXG4gICAqIGFtb3VudCBvZiBkaXNzb2x2ZSB3aWxsIHZhcnkgYmV0d2VlbiAxLjAgKGZ1bGx5IG9wYXF1ZSkgYW5kIHRoZSBzcGVjaWZpZWRcbiAgICogXCJmYWN0b3JcIi4gVGhlIGZvcm11bGEgaXM6XG4gICAqXG4gICAqICAgIGRpc3NvbHZlID0gMS4wIC0gKE4qdikoMS4wLWZhY3RvcilcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICovXG4gIHBhcnNlX2QodG9rZW5zKSB7XG4gICAgLy8gdGhpcyBpZ25vcmVzIHRoZSAtaGFsbyBvcHRpb24gYXMgSSBjYW4ndCBmaW5kIGFueSBkb2N1bWVudGF0aW9uIG9uIHdoYXRcbiAgICAvLyBpdCdzIHN1cHBvc2VkIHRvIGJlLlxuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmRpc3NvbHZlID0gcGFyc2VGbG9hdCh0b2tlbnMucG9wKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBcImlsbHVtXCIgc3RhdGVtZW50IHNwZWNpZmllcyB0aGUgaWxsdW1pbmF0aW9uIG1vZGVsIHRvIHVzZSBpbiB0aGVcbiAgICogbWF0ZXJpYWwuIElsbHVtaW5hdGlvbiBtb2RlbHMgYXJlIG1hdGhlbWF0aWNhbCBlcXVhdGlvbnMgdGhhdCByZXByZXNlbnRcbiAgICogdmFyaW91cyBtYXRlcmlhbCBsaWdodGluZyBhbmQgc2hhZGluZyBlZmZlY3RzLlxuICAgKlxuICAgKiBUaGUgaWxsdW1pbmF0aW9uIG51bWJlciBjYW4gYmUgYSBudW1iZXIgZnJvbSAwIHRvIDEwLiBUaGUgZm9sbG93aW5nIGFyZVxuICAgKiB0aGUgbGlzdCBvZiBpbGx1bWluYXRpb24gZW51bWVyYXRpb25zIGFuZCB0aGVpciBzdW1tYXJpZXM6XG4gICAqIDAuIENvbG9yIG9uIGFuZCBBbWJpZW50IG9mZlxuICAgKiAxLiBDb2xvciBvbiBhbmQgQW1iaWVudCBvblxuICAgKiAyLiBIaWdobGlnaHQgb25cbiAgICogMy4gUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9uXG4gICAqIDQuIFRyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvblxuICAgKiA1LiBSZWZsZWN0aW9uOiBGcmVzbmVsIG9uIGFuZCBSYXkgdHJhY2Ugb25cbiAgICogNi4gVHJhbnNwYXJlbmN5OiBSZWZyYWN0aW9uIG9uLCBSZWZsZWN0aW9uOiBGcmVzbmVsIG9mZiBhbmQgUmF5IHRyYWNlIG9uXG4gICAqIDcuIFRyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXG4gICAqIDguIFJlZmxlY3Rpb24gb24gYW5kIFJheSB0cmFjZSBvZmZcbiAgICogOS4gVHJhbnNwYXJlbmN5OiBHbGFzcyBvbiwgUmVmbGVjdGlvbjogUmF5IHRyYWNlIG9mZlxuICAgKiAxMC4gQ2FzdHMgc2hhZG93cyBvbnRvIGludmlzaWJsZSBzdXJmYWNlc1xuICAgKlxuICAgKiBFeGFtcGxlOiBcImlsbHVtIDJcIiB0byBzcGVjaWZ5IHRoZSBcIkhpZ2hsaWdodCBvblwiIG1vZGVsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAqL1xuICBwYXJzZV9pbGx1bSh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5pbGx1bWluYXRpb24gPSBwYXJzZUludCh0b2tlbnNbMF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGljYWwgRGVuc2l0eSAoQUtBIEluZGV4IG9mIFJlZnJhY3Rpb24pXG4gICAqXG4gICAqIFN0YXRlbWVudDogTmkgYGluZGV4YFxuICAgKlxuICAgKiBFeGFtcGxlOiBOaSAxLjBcbiAgICpcbiAgICogU3BlY2lmaWVzIHRoZSBvcHRpY2FsIGRlbnNpdHkgZm9yIHRoZSBzdXJmYWNlLiBgaW5kZXhgIGlzIHRoZSB2YWx1ZVxuICAgKiBmb3IgdGhlIG9wdGljYWwgZGVuc2l0eS4gVGhlIHZhbHVlcyBjYW4gcmFuZ2UgZnJvbSAwLjAwMSB0byAxMC4gIEEgdmFsdWUgb2ZcbiAgICogMS4wIG1lYW5zIHRoYXQgbGlnaHQgZG9lcyBub3QgYmVuZCBhcyBpdCBwYXNzZXMgdGhyb3VnaCBhbiBvYmplY3QuXG4gICAqIEluY3JlYXNpbmcgdGhlIG9wdGljYWxfZGVuc2l0eSBpbmNyZWFzZXMgdGhlIGFtb3VudCBvZiBiZW5kaW5nLiBHbGFzcyBoYXNcbiAgICogYW4gaW5kZXggb2YgcmVmcmFjdGlvbiBvZiBhYm91dCAxLjUuIFZhbHVlcyBvZiBsZXNzIHRoYW4gMS4wIHByb2R1Y2VcbiAgICogYml6YXJyZSByZXN1bHRzIGFuZCBhcmUgbm90IHJlY29tbWVuZGVkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyB0aGUgdG9rZW5zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGlyZWN0aXZlXG4gICAqL1xuICBwYXJzZV9OaSh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5yZWZyYWN0aW9uSW5kZXggPSBwYXJzZUZsb2F0KHRva2Vuc1swXSk7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzcGVjdWxhciBleHBvbmVudCBmb3IgdGhlIGN1cnJlbnQgbWF0ZXJpYWwuIFRoaXMgZGVmaW5lcyB0aGVcbiAgICogZm9jdXMgb2YgdGhlIHNwZWN1bGFyIGhpZ2hsaWdodC5cbiAgICpcbiAgICogU3RhdGVtZW50OiBOcyBgZXhwb25lbnRgXG4gICAqXG4gICAqIEV4YW1wbGU6IFwiTnMgMjUwXCJcbiAgICpcbiAgICogYGV4cG9uZW50YCBpcyB0aGUgdmFsdWUgZm9yIHRoZSBzcGVjdWxhciBleHBvbmVudC4gQSBoaWdoIGV4cG9uZW50IHJlc3VsdHNcbiAgICogaW4gYSB0aWdodCwgY29uY2VudHJhdGVkIGhpZ2hsaWdodC4gTnMgVmFsdWVzIG5vcm1hbGx5IHJhbmdlIGZyb20gMCB0b1xuICAgKiAxMDAwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgdGhlIHRva2VucyBhc3NvY2lhdGVkIHdpdGggdGhlIGRpcmVjdGl2ZVxuICAgKi9cbiAgcGFyc2VfTnModG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHBhcnNlSW50KHRva2Vuc1swXSk7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzaGFycG5lc3Mgb2YgdGhlIHJlZmxlY3Rpb25zIGZyb20gdGhlIGxvY2FsIHJlZmxlY3Rpb24gbWFwLlxuICAgKlxuICAgKiBTdGF0ZW1lbnQ6IHNoYXJwbmVzcyBgdmFsdWVgXG4gICAqXG4gICAqIEV4YW1wbGU6IFwic2hhcnBuZXNzIDEwMFwiXG4gICAqXG4gICAqIElmIGEgbWF0ZXJpYWwgZG9lcyBub3QgaGF2ZSBhIGxvY2FsIHJlZmxlY3Rpb24gbWFwIGRlZmluZWQgaW4gaXRzIG1hdGVyaWFsXG4gICAqIGRlZmludGlvbnMsIHNoYXJwbmVzcyB3aWxsIGFwcGx5IHRvIHRoZSBnbG9iYWwgcmVmbGVjdGlvbiBtYXAgZGVmaW5lZCBpblxuICAgKiBQcmVWaWV3LlxuICAgKlxuICAgKiBgdmFsdWVgIGNhbiBiZSBhIG51bWJlciBmcm9tIDAgdG8gMTAwMC4gVGhlIGRlZmF1bHQgaXMgNjAuIEEgaGlnaCB2YWx1ZVxuICAgKiByZXN1bHRzIGluIGEgY2xlYXIgcmVmbGVjdGlvbiBvZiBvYmplY3RzIGluIHRoZSByZWZsZWN0aW9uIG1hcC5cbiAgICpcbiAgICogVGlwOiBzaGFycG5lc3MgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxMDAgaW50cm9kdWNlIGFsaWFzaW5nIGVmZmVjdHMgaW5cbiAgICogZmxhdCBzdXJmYWNlcyB0aGF0IGFyZSB2aWV3ZWQgYXQgYSBzaGFycCBhbmdsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIHRoZSB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBkaXJlY3RpdmVcbiAgICovXG4gIHBhcnNlX3NoYXJwbmVzcyh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5zaGFycG5lc3MgPSBwYXJzZUludCh0b2tlbnNbMF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgLWNjIGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtY2MgZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV9jYyh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmNvbG9yQ29ycmVjdGlvbiA9IHZhbHVlc1swXSA9PSAnb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgLWJsZW5kdSBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJsZW5kdSBmbGFnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICovXG4gIHBhcnNlX2JsZW5kdSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmhvcml6b250YWxCbGVuZGluZyA9IHZhbHVlc1swXSA9PSAnb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgLWJsZW5kdiBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJsZW5kdiBmbGFnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICovXG4gIHBhcnNlX2JsZW5kdih2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLnZlcnRpY2FsQmxlbmRpbmcgPSB2YWx1ZXNbMF0gPT0gJ29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIC1ib29zdCBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWJvb3N0IGZsYWdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgKi9cbiAgcGFyc2VfYm9vc3QodmFsdWVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5ib29zdE1pcE1hcFNoYXJwbmVzcyA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIC1tbSBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLW1tIGZsYWdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgKi9cbiAgcGFyc2VfbW0odmFsdWVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5tb2RpZnlUZXh0dXJlTWFwLmJyaWdodG5lc3MgPSBwYXJzZUZsb2F0KHZhbHVlc1swXSk7XG4gICAgb3B0aW9ucy5tb2RpZnlUZXh0dXJlTWFwLmNvbnRyYXN0ID0gcGFyc2VGbG9hdCh2YWx1ZXNbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbmQgc2V0cyB0aGUgLW8sIC1zLCBhbmQgLXQgIHUsIHYsIGFuZCB3IHZhbHVlc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1vLCAtcywgLXQgZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uIHRoZSBPYmplY3Qgb2YgZWl0aGVyIHRoZSAtbywgLXMsIC10IG9wdGlvblxuICAgKiBAcGFyYW0ge0ludGVnZXJ9IGRlZmF1bHRWYWx1ZSB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV9vc3QodmFsdWVzLCBvcHRpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIHdoaWxlICh2YWx1ZXMubGVuZ3RoIDwgMykge1xuICAgICAgdmFsdWVzLnB1c2goZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICBvcHRpb24udSA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgICBvcHRpb24udiA9IHBhcnNlRmxvYXQodmFsdWVzWzFdKTtcbiAgICBvcHRpb24udyA9IHBhcnNlRmxvYXQodmFsdWVzWzJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIC1vIGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtbyBmbGFnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICovXG4gIHBhcnNlX28odmFsdWVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5wYXJzZV9vc3QodmFsdWVzLCBvcHRpb25zLm9mZnNldCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSAtcyBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLXMgZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV9zKHZhbHVlcywgb3B0aW9ucykge1xuICAgIHRoaXMucGFyc2Vfb3N0KHZhbHVlcywgb3B0aW9ucy5zY2FsZSwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSAtdCBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLXQgZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV90KHZhbHVlcywgb3B0aW9ucykge1xuICAgIHRoaXMucGFyc2Vfb3N0KHZhbHVlcywgb3B0aW9ucy50dXJidWxlbmNlLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIC10ZXhyZXMgZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC10ZXhyZXMgZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV90ZXhyZXModmFsdWVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy50ZXh0dXJlUmVzb2x1dGlvbiA9IHBhcnNlRmxvYXQodmFsdWVzWzBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIC1jbGFtcCBmbGFnIGFuZCB1cGRhdGVzIHRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgLWNsYW1wIGZsYWdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgKi9cbiAgcGFyc2VfY2xhbXAodmFsdWVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5jbGFtcCA9IHZhbHVlc1swXSA9PSAnb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgLWJtIGZsYWcgYW5kIHVwZGF0ZXMgdGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtYm0gZmxhZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgT2JqZWN0IG9mIGFsbCBpbWFnZSBvcHRpb25zXG4gICAqL1xuICBwYXJzZV9ibSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmJ1bXBNdWx0aXBsaWVyID0gcGFyc2VGbG9hdCh2YWx1ZXNbMF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgLWltZmNoYW4gZmxhZyBhbmQgdXBkYXRlcyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2YWx1ZXMgdGhlIHZhbHVlcyBwYXNzZWQgdG8gdGhlIC1pbWZjaGFuIGZsYWdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdGhlIE9iamVjdCBvZiBhbGwgaW1hZ2Ugb3B0aW9uc1xuICAgKi9cbiAgcGFyc2VfaW1mY2hhbih2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmltZkNoYW4gPSB2YWx1ZXNbMF07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgcmVsZWN0aW9uIG1hcHMgYW5kIGRlbm90ZXMgdGhlIHR5cGUgb2YgcmVmbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSAtdHlwZSBmbGFnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRoZSBPYmplY3Qgb2YgYWxsIGltYWdlIG9wdGlvbnNcbiAgICovXG4gIHBhcnNlX3R5cGUodmFsdWVzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5yZWZsZWN0aW9uVHlwZSA9IHZhbHVlc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIHRleHR1cmUncyBvcHRpb25zIGFuZCByZXR1cm5zIGFuIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIGluZm9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIGFsbCBvZiB0aGUgb3B0aW9uIHRva2VucyB0byBwYXNzIHRvIHRoZSB0ZXh0dXJlXG4gICAqIEByZXR1cm4ge09iamVjdH0gYSBjb21wbGV0ZSBvYmplY3Qgb2Ygb2JqZWN0cyB0byBhcHBseSB0byB0aGUgdGV4dHVyZVxuICAgKi9cbiAgcGFyc2VPcHRpb25zKHRva2Vucykge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29sb3JDb3JyZWN0aW9uOiBmYWxzZSxcbiAgICAgIGhvcml6b250YWxCbGVuZGluZzogdHJ1ZSxcbiAgICAgIHZlcnRpY2FsQmxlbmRpbmc6IHRydWUsXG4gICAgICBib29zdE1pcE1hcFNoYXJwbmVzczogMCxcbiAgICAgIG1vZGlmeVRleHR1cmVNYXA6IHtcbiAgICAgICAgYnJpZ2h0bmVzczogMCxcbiAgICAgICAgY29udHJhc3Q6IDEsXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7dTogMCwgdjogMCwgdzogMH0sXG4gICAgICBzY2FsZToge3U6IDEsIHY6IDEsIHc6IDF9LFxuICAgICAgdHVyYnVsZW5jZToge3U6IDAsIHY6IDAsIHc6IDB9LFxuICAgICAgY2xhbXA6IGZhbHNlLFxuICAgICAgdGV4dHVyZVJlc29sdXRpb246IG51bGwsXG4gICAgICBidW1wTXVsdGlwbGllcjogMSxcbiAgICAgIGltZkNoYW46IG51bGwsXG4gICAgfTtcblxuICAgIGxldCBvcHRpb247XG4gICAgbGV0IHZhbHVlcztcbiAgICBsZXQgb3B0aW9uc1RvVmFsdWVzID0ge307XG5cbiAgICB0b2tlbnMucmV2ZXJzZSgpO1xuXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zLnBvcCgpO1xuXG4gICAgICBpZiAodG9rZW4uc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgICAgIG9wdGlvbiA9IHRva2VuLnN1YnN0cigxKTtcbiAgICAgICAgb3B0aW9uc1RvVmFsdWVzW29wdGlvbl0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnNUb1ZhbHVlc1tvcHRpb25dLnB1c2godG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAob3B0aW9uIGluIG9wdGlvbnNUb1ZhbHVlcykge1xuICAgICAgaWYgKCFvcHRpb25zVG9WYWx1ZXMuaGFzT3duUHJvcGVydHkob3B0aW9uKSl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFsdWVzID0gb3B0aW9uc1RvVmFsdWVzW29wdGlvbl07XG4gICAgICBsZXQgb3B0aW9uTWV0aG9kID0gdGhpc1tgcGFyc2VfJHtvcHRpb259YF07XG4gICAgICBpZiAob3B0aW9uTWV0aG9kKSB7XG4gICAgICAgIG9wdGlvbk1ldGhvZC5iaW5kKHRoaXMpKHZhbHVlcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiB0ZXh0dXJlIG1hcCBsaW5lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgYWxsIG9mIHRoZSB0b2tlbnMgcmVwcmVzZW50aW5nIHRoZSB0ZXh0dXJlXG4gICAqIEByZXR1cm4ge09iamVjdH0gYSBjb21wbGV0ZSBvYmplY3Qgb2Ygb2JqZWN0cyB0byBhcHBseSB0byB0aGUgdGV4dHVyZVxuICAgKi9cbiAgcGFyc2VNYXAodG9rZW5zKSB7XG4gICAgLy8gYWNjb3JkaW5nIHRvIHdpa2lwZWRpYTpcbiAgICAvLyAoaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2F2ZWZyb250Xy5vYmpfZmlsZSNWZW5kb3Jfc3BlY2lmaWNfYWx0ZXJhdGlvbnMpXG4gICAgLy8gdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHZlbmRvciB0aGF0IHBsYWNlcyB0aGUgZmlsZW5hbWUgYmVmb3JlIHRoZSBvcHRpb25zXG4gICAgLy8gcmF0aGVyIHRoYW4gYWZ0ZXIgKHdoaWNoIGlzIHRvIHNwZWMpLiBBbGwgb3B0aW9ucyBzdGFydCB3aXRoIGEgJy0nXG4gICAgLy8gc28gaWYgdGhlIGZpcnN0IHRva2VuIGRvZXNuJ3Qgc3RhcnQgd2l0aCBhICctJywgd2UncmUgZ29pbmcgdG8gYXNzdW1lXG4gICAgLy8gaXQncyB0aGUgbmFtZSBvZiB0aGUgbWFwIGZpbGUuXG4gICAgbGV0IGZpbGVuYW1lO1xuICAgIGxldCBvcHRpb25zO1xuICAgIGlmICghdG9rZW5zWzBdLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgW2ZpbGVuYW1lLCAuLi5vcHRpb25zXSA9IHRva2VucztcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZW5hbWUgPSB0b2tlbnMucG9wKCk7XG4gICAgICBvcHRpb25zID0gdG9rZW5zO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSB0aGlzLnBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgICBvcHRpb25zWydmaWxlbmFtZSddID0gZmlsZW5hbWU7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBhbWJpZW50IG1hcC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX0thIGRpcmVjaXZlXG4gICAqL1xuICBwYXJzZV9tYXBfS2EodG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwQW1iaWVudCA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGRpZmZ1c2UgbWFwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfS2QgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX21hcF9LZCh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBEaWZmdXNlID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgc3BlY3VsYXIgbWFwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfS3MgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX21hcF9Lcyh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBTcGVjdWxhciA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGVtaXNzaXZlIG1hcC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGUgbWFwX0tlIGRpcmVjaXZlXG4gICAqL1xuICBwYXJzZV9tYXBfS2UodG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRW1pc3NpdmUgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBzcGVjdWxhciBleHBvbmVudCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9OcyBkaXJlY2l2ZVxuICAgKi9cbiAgcGFyc2VfbWFwX05zKHRva2Vucykge1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcFNwZWN1bGFyRXhwb25lbnQgPSB0aGlzLnBhcnNlTWFwKHRva2Vucyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBkaXNzb2x2ZSBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9kIGRpcmVjaXZlXG4gICAqL1xuICBwYXJzZV9tYXBfZCh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBEaXNzb2x2ZSA9IHRoaXMucGFyc2VNYXAodG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGFudGktYWxpYXNpbmcgb3B0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfYWF0IGRpcmVjaXZlXG4gICAqL1xuICBwYXJzZV9tYXBfYWF0KHRva2Vucykge1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLmFudGlBbGlhc2luZyA9IHRva2Vuc1swXSA9PSAnb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgYnVtcCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIG1hcF9idW1wIGRpcmVjaXZlXG4gICAqL1xuICBwYXJzZV9tYXBfYnVtcCh0b2tlbnMpIHtcbiAgICB0aGlzLmN1cnJlbnRNYXRlcmlhbC5tYXBCdW1wID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgYnVtcCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIGJ1bXAgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX2J1bXAodG9rZW5zKSB7XG4gICAgdGhpcy5wYXJzZV9tYXBfYnVtcCh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZGlzcCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIGRpc3AgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX2Rpc3AodG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwRGlzcGxhY2VtZW50ID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZGVjYWwgbWFwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnMgbGlzdCBvZiB0b2tlbnMgZm9yIHRoZSBtYXBfZGVjYWwgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX2RlY2FsKHRva2Vucykge1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsLm1hcERlY2FsID0gdGhpcy5wYXJzZU1hcCh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgcmVmbCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2VucyBsaXN0IG9mIHRva2VucyBmb3IgdGhlIHJlZmwgZGlyZWNpdmVcbiAgICovXG4gIHBhcnNlX3JlZmwodG9rZW5zKSB7XG4gICAgdGhpcy5jdXJyZW50TWF0ZXJpYWwubWFwUmVmbGVjdGlvbnMucHVzaCh0aGlzLnBhcnNlTWFwKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgTVRMIGZpbGUuXG4gICAqIFxuICAgKiBJdGVyYXRlcyBsaW5lIGJ5IGxpbmUgcGFyc2luZyBlYWNoIE1UTCBkaXJlY3RpdmUuXG4gICAqIFxuICAgKiBUaGlzIGZ1bmN0aW9uIGV4cGVjdHMgdGhlIGZpcnN0IHRva2VuIGluIHRoZSBsaW5lXG4gICAqIHRvIGJlIGEgdmFsaWQgTVRMIGRpcmVjdGl2ZS4gVGhhdCB0b2tlbiBpcyB0aGVuIHVzZWRcbiAgICogdG8gdHJ5IGFuZCBydW4gYSBtZXRob2Qgb24gdGhpcyBjbGFzcy4gcGFyc2VfW2RpcmVjdGl2ZV1cbiAgICogRS5nLiwgdGhlIGBuZXdtdGxgIGRpcmVjdGl2ZSB3b3VsZCB0cnkgdG8gY2FsbCB0aGUgbWV0aG9kXG4gICAqIHBhcnNlX25ld210bC4gRWFjaCBwYXJzaW5nIGZ1bmN0aW9uIHRha2VzIGluIHRoZSByZW1haW5pbmdcbiAgICogbGlzdCBvZiB0b2tlbnMgYW5kIHVwZGF0ZXMgdGhlIGN1cnJlbnRNYXRlcmlhbCBjbGFzcyB3aXRoXG4gICAqIHRoZSBhdHRyaWJ1dGVzIHByb3ZpZGVkLlxuICAgKi9cbiAgcGFyc2UoKSB7XG4gICAgbGV0IGxpbmVzID0gdGhpcy5kYXRhLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgaWYgKCFsaW5lIHx8IGxpbmUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5zcGxpdCgvXFxzLyk7XG4gICAgICBsZXQgZGlyZWN0aXZlO1xuICAgICAgW2RpcmVjdGl2ZSwgLi4udG9rZW5zXSA9IHRva2VucztcblxuICAgICAgbGV0IHBhcnNlTWV0aG9kID0gdGhpc1tgcGFyc2VfJHtkaXJlY3RpdmV9YF07XG5cbiAgICAgIGlmICghcGFyc2VNZXRob2QpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEb24ndCBrbm93IGhvdyB0byBwYXJzZSB0aGUgZGlyZWN0aXZlOiBcIiR7ZGlyZWN0aXZlfVwiYCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhgUGFyc2luZyBcIiR7ZGlyZWN0aXZlfVwiIHdpdGggdG9rZW5zOiAke3Rva2Vuc31gKTtcbiAgICAgIHBhcnNlTWV0aG9kLmJpbmQodGhpcykodG9rZW5zKTtcbiAgICB9XG5cbiAgICAvLyBzb21lIGNsZWFudXAuIFRoZXNlIGRvbid0IG5lZWQgdG8gYmUgZXhwb3NlZCBhcyBwdWJsaWMgZGF0YS5cbiAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgIHRoaXMuY3VycmVudE1hdGVyaWFsID0gbnVsbDtcbiAgfVxuXG4gIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlKi9cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGVyaWFsLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNZXNoIGZyb20gJy4vbWVzaCc7XG5pbXBvcnQge01hdGVyaWFsLCBNYXRlcmlhbExpYnJhcnl9IGZyb20gJy4vbWF0ZXJpYWwnO1xuaW1wb3J0IHtMYXlvdXR9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7ZG93bmxvYWRNb2RlbHMsIGRvd25sb2FkTWVzaGVzLFxuICAgICAgICBpbml0TWVzaEJ1ZmZlcnMsIGRlbGV0ZU1lc2hCdWZmZXJzfSBmcm9tICcuL3V0aWxzJztcblxuXG4vKipcbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IHtcbiAgICBNZXNoLFxuICAgIE1hdGVyaWFsLFxuICAgIE1hdGVyaWFsTGlicmFyeSxcbiAgICBMYXlvdXQsXG5cbiAgICBkb3dubG9hZE1vZGVscyxcbiAgICBkb3dubG9hZE1lc2hlcyxcbiAgICBpbml0TWVzaEJ1ZmZlcnMsXG4gICAgZGVsZXRlTWVzaEJ1ZmZlcnNcblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6ICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IE1lc2ggZnJvbSAnLi9tZXNoJztcbmltcG9ydCB7TWF0ZXJpYWwsIE1hdGVyaWFsTGlicmFyeX0gZnJvbSAnLi9tYXRlcmlhbCc7XG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi9sYXlvdXQnO1xuXG5cbmZ1bmN0aW9uIGRvd25sb2FkTXRsVGV4dHVyZXMgKG10bCwgcm9vdCkge1xuICBjb25zdCBtYXBBdHRyaWJ1dGVzID0gW1xuICAgICdtYXBEaWZmdXNlJyxcbiAgICAnbWFwQW1iaWVudCcsXG4gICAgJ21hcFNwZWN1bGFyJyxcbiAgICAnbWFwRGlzc29sdmUnLFxuICAgICdtYXBCdW1wJyxcbiAgICAnbWFwRGlzcGxhY2VtZW50JyxcbiAgICAnbWFwRGVjYWwnLFxuICAgICdtYXBFbWlzc2l2ZScsXG4gIF07XG4gIGlmICghcm9vdC5lbmRzV2l0aCgnLycpKSB7XG4gICAgcm9vdCArPSAnLyc7XG4gIH1cbiAgbGV0IHRleHR1cmVzID0gW107XG5cbiAgZm9yIChsZXQgbWF0ZXJpYWwgaW4gbXRsLm1hdGVyaWFscykge1xuICAgIGlmICghbXRsLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBtYXRlcmlhbCA9IG10bC5tYXRlcmlhbHNbbWF0ZXJpYWxdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBvZiBtYXBBdHRyaWJ1dGVzKSB7XG4gICAgICBsZXQgbWFwRGF0YSA9IG1hdGVyaWFsW2F0dHJdO1xuICAgICAgaWYgKCFtYXBEYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXJsID0gcm9vdCArIG1hcERhdGEuZmlsZW5hbWU7XG4gICAgICB0ZXh0dXJlcy5wdXNoKFxuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xuICAgICAgICAgICAgbWFwRGF0YS50ZXh0dXJlID0gaW1hZ2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGRvd25sb2FkIHRleHR1cmU6ICR7dXJsfWApO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHRleHR1cmVzKTtcbn1cblxuXG4vKipcbiAqIEFjY2VwdHMgYSBsaXN0IG9mIG1vZGVsIHJlcXVlc3Qgb2JqZWN0cyBhbmQgcmV0dXJucyBhIFByb21pc2UgdGhhdFxuICogcmVzb2x2ZXMgd2hlbiBhbGwgbW9kZWxzIGhhdmUgYmVlbiBkb3dubG9hZGVkIGFuZCBwYXJzZWQuXG4gKlxuICogVGhlIGxpc3Qgb2YgbW9kZWwgb2JqZWN0cyBmb2xsb3cgdGhpcyBpbnRlcmZhY2U6XG4gKiB7XG4gKiAgb2JqOiAncGF0aC90by9tb2RlbC5vYmonLFxuICogIG10bDogdHJ1ZSB8ICdwYXRoL3RvL21vZGVsLm10bCcsXG4gKiAgZG93bmxvYWRNdGxUZXh0dXJlczogdHJ1ZSB8IGZhbHNlXG4gKiAgbXRsVGV4dHVyZVJvb3Q6ICcvbW9kZWxzL3N1emFubmUvbWFwcydcbiAqICBuYW1lOiAnc3V6YW5uZSdcbiAqIH1cbiAqXG4gKiBUaGUgYG9iamAgYXR0cmlidXRlIGlzIHJlcXVpcmVkIGFuZCBzaG91bGQgYmUgdGhlIHBhdGggdG8gdGhlXG4gKiBtb2RlbCdzIC5vYmogZmlsZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCByZXBvIChhYnNvbHV0ZSBVUkxzIGFyZVxuICogc3VnZ2VzdGVkKS5cbiAqXG4gKiBUaGUgYG10bGAgYXR0cmlidXRlIGlzIG9wdGlvbmFsIGFuZCBjYW4gZWl0aGVyIGJlIGEgYm9vbGVhbiBvclxuICogYSBwYXRoIHRvIHRoZSBtb2RlbCdzIC5tdGwgZmlsZSByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBVUkwuIElmXG4gKiB0aGUgdmFsdWUgaXMgYHRydWVgLCB0aGVuIHRoZSBwYXRoIGFuZCBiYXNlbmFtZSBnaXZlbiBmb3IgdGhlIGBvYmpgXG4gKiBhdHRyaWJ1dGUgaXMgdXNlZCByZXBsYWNpbmcgdGhlIC5vYmogc3VmZml4IGZvciAubXRsXG4gKiBFLmcuOiB7b2JqOiAnbW9kZWxzL2Zvby5vYmonLCBtdGw6IHRydWV9IHdvdWxkIHNlYXJjaCBmb3IgJ21vZGVscy9mb28ubXRsJ1xuICpcbiAqIFRoZSBgbmFtZWAgYXR0cmlidXRlIGlzIG9wdGlvbmFsIGFuZCBpcyBhIGh1bWFuIGZyaWVuZGx5IG5hbWUgdG8gYmVcbiAqIGluY2x1ZGVkIHdpdGggdGhlIHBhcnNlZCBPQkogYW5kIE1UTCBmaWxlcy4gSWYgbm90IGdpdmVuLCB0aGUgYmFzZSAub2JqXG4gKiBmaWxlbmFtZSB3aWxsIGJlIHVzZWQuXG4gKlxuICogVGhlIGBkb3dubG9hZE10bFRleHR1cmVzYCBhdHRyaWJ1dGUgaXMgYSBmbGFnIGZvciBhdXRvbWF0aWNhbGx5IGRvd25sb2FkaW5nXG4gKiBhbnkgaW1hZ2VzIGZvdW5kIGluIHRoZSBNVEwgZmlsZSBhbmQgYXR0YWNoaW5nIHRoZW0gdG8gZWFjaCBNYXRlcmlhbFxuICogY3JlYXRlZCBmcm9tIHRoYXQgZmlsZS4gRm9yIGV4YW1wbGUsIGlmIG1hdGVyaWFsLm1hcERpZmZ1c2UgaXMgc2V0ICh0aGVyZVxuICogd2FzIGRhdGEgaW4gdGhlIE1UTCBmaWxlKSwgdGhlbiBtYXRlcmlhbC5tYXBEaWZmdXNlLnRleHR1cmUgd2lsbCBjb250YWluXG4gKiB0aGUgZG93bmxvYWRlZCBpbWFnZS4gVGhpcyBvcHRpb24gZGVmYXVsdHMgdG8gYHRydWVgLiBCeSBkZWZhdWx0LCB0aGUgTVRMJ3NcbiAqIFVSTCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBsb2NhdGlvbiBvZiB0aGUgaW1hZ2VzLlxuICpcbiAqIFRoZSBgbXRsVGV4dHVyZVJvb3RgIGF0dHJpYnV0ZSBpcyBvcHRpb25hbCBhbmQgc2hvdWxkIHBvaW50IHRvIHRoZSBsb2NhdGlvblxuICogb24gdGhlIHNlcnZlciB0aGF0IHRoaXMgTVRMJ3MgdGV4dHVyZSBmaWxlcyBhcmUgbG9jYXRlZC4gVGhlIGRlZmF1bHQgaXMgdG9cbiAqIHVzZSB0aGUgTVRMIGZpbGUncyBsb2NhdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gdGhlIHJlc3VsdCBvZiBkb3dubG9hZGluZyB0aGUgZ2l2ZW4gbGlzdCBvZiBtb2RlbHMuIFRoZVxuICogcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgdGhlIG5hbWVzIG9mIHRoZSBtb2RlbHNcbiAqIGFuZCB0aGUgdmFsdWUgaXMgaXRzIE1lc2ggb2JqZWN0LiBFYWNoIE1lc2ggb2JqZWN0IHdpbGwgYXV0b21hdGljYWxseVxuICogaGF2ZSBpdHMgYWRkTWF0ZXJpYWxMaWJyYXJ5KCkgbWV0aG9kIGNhbGxlZCB0byBzZXQgdGhlIGdpdmVuIE1UTCBkYXRhIChpZiBnaXZlbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE1vZGVscyAobW9kZWxzKSB7XG4gIGNvbnN0IGZpbmlzaGVkID0gW107XG5cbiAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBbXTtcblxuICAgIGlmICghbW9kZWwub2JqKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdcIm9ialwiIGF0dHJpYnV0ZSBvZiBtb2RlbCBvYmplY3Qgbm90IHNldC4gVGhlIC5vYmogZmlsZSBpcyByZXF1aXJlZCB0byBiZSBzZXQgJyArXG4gICAgICAgICdpbiBvcmRlciB0byB1c2UgZG93bmxvYWRNb2RlbHMoKSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG5hbWUgaXMgbm90IHByb3ZpZGVkLCBkZXJ2aXZlIGl0IGZyb20gdGhlIGdpdmVuIE9CSlxuICAgIGxldCBuYW1lID0gbW9kZWwubmFtZTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIGxldCBwYXJ0cyA9IG1vZGVsLm9iai5zcGxpdCgnLycpO1xuICAgICAgbmFtZSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLnJlcGxhY2UoJy5vYmonLCAnJyk7XG4gICAgfVxuICAgIHBhcnNlZC5wdXNoKFByb21pc2UucmVzb2x2ZShuYW1lKSlcblxuICAgIHBhcnNlZC5wdXNoKFxuICAgICAgZmV0Y2gobW9kZWwub2JqKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IE1lc2goZGF0YSk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIERvd25sb2FkIE1hdGVyaWFsTGlicmFyeSBmaWxlP1xuICAgIGlmIChtb2RlbC5tdGwpIHtcbiAgICAgIGxldCBtdGwgPSBtb2RlbC5tdGw7XG4gICAgICBpZiAodHlwZW9mIG10bCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG10bCA9IG1vZGVsLm9iai5yZXBsYWNlKC9cXC5vYmokLywgJy5tdGwnKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkLnB1c2goXG4gICAgICAgIGZldGNoKG10bClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IE1hdGVyaWFsTGlicmFyeShkYXRhKTtcbiAgICAgICAgICAgIGlmIChtb2RlbC5kb3dubG9hZE10bFRleHR1cmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBsZXQgcm9vdCA9IG1vZGVsLm10bFRleHR1cmVSb290O1xuICAgICAgICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRpcmVjdG9yeSBvZiB0aGUgTVRMIGZpbGUgYXMgZGVmYXVsdFxuICAgICAgICAgICAgICAgIHJvb3QgPSBtdGwuc3Vic3RyKDAsIG10bC5sYXN0SW5kZXhPZihcIi9cIikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGRvd25sb2FkTXRsVGV4dHVyZXMgcmV0dXJucyBhIFByb21pc2UgdGhhdFxuICAgICAgICAgICAgICAvLyBpcyByZXNvbHZlZCBvbmNlIGFsbCBvZiB0aGUgaW1hZ2VzIGl0XG4gICAgICAgICAgICAgIC8vIGNvbnRhaW5zIGFyZSBkb3dubG9hZGVkLiBUaGVzZSBhcmUgdGhlblxuICAgICAgICAgICAgICAvLyBhdHRhY2hlZCB0byB0aGUgbWFwIGRhdGEgb2JqZWN0c1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShtYXRlcmlhbCksXG4gICAgICAgICAgICAgICAgZG93bmxvYWRNdGxUZXh0dXJlcyhtYXRlcmlhbCwgcm9vdClcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoUHJvbWlzZS5yZXNvbHZlKG1hdGVyaWFsKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVswXTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmaW5pc2hlZC5wdXNoKFByb21pc2UuYWxsKHBhcnNlZCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKGZpbmlzaGVkKVxuICAgIC50aGVuKChtcykgPT4ge1xuICAgICAgLy8gdGhlIFwiZmluaXNoZWRcIiBwcm9taXNlIGlzIGEgbGlzdCBvZiBuYW1lLCBNZXNoIGluc3RhbmNlLFxuICAgICAgLy8gYW5kIE1hdGVyaWFsTGliYXJ5IGluc3RhbmNlLiBUaGlzIHVucGFja3MgYW5kIHJldHVybnMgYW5cbiAgICAgIC8vIG9iamVjdCBtYXBwaW5nIG5hbWUgdG8gTWVzaCAoTWVzaCBwb2ludHMgdG8gTVRMKS5cbiAgICAgIGNvbnN0IG1vZGVscyA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1zKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBtZXNoLCBtdGxdID0gbW9kZWw7XG4gICAgICAgIG1lc2gubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChtdGwpIHtcbiAgICAgICAgICBtZXNoLmFkZE1hdGVyaWFsTGlicmFyeShtdGwpO1xuICAgICAgICB9XG4gICAgICAgIG1vZGVsc1tuYW1lXSA9IG1lc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfSk7XG59XG5cblxuLyoqXG4gKiBUYWtlcyBpbiBhbiBvYmplY3Qgb2YgYG1lc2hfbmFtZWAsIGAnL3VybC90by9PQkovZmlsZSdgIHBhaXJzIGFuZCBhIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi4gRWFjaCBPQkogZmlsZSB3aWxsIGJlIGFqYXhlZCBpbiBhbmQgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG9cbiAqIGFuIE9CSi5NZXNoLiBXaGVuIGFsbCBmaWxlcyBoYXZlIHN1Y2Nlc3NmdWxseSBkb3dubG9hZGVkIHRoZSBjYWxsYmFja1xuICogZnVuY3Rpb24gcHJvdmlkZWQgd2lsbCBiZSBjYWxsZWQgYW5kIHBhc3NlZCBpbiBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIG5ld2x5IGNyZWF0ZWQgbWVzaGVzLlxuICpcbiAqICoqTm90ZToqKiBJbiBvcmRlciB0byB1c2UgdGhpcyBmdW5jdGlvbiBhcyBhIHdheSB0byBkb3dubG9hZCBtZXNoZXMsIGFcbiAqIHdlYnNlcnZlciBvZiBzb21lIHNvcnQgbXVzdCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lQW5kQXR0cnMgYW4gb2JqZWN0IHdoZXJlIHRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIG1lc2ggYW5kIHRoZSB2YWx1ZSBpcyB0aGUgdXJsIHRvIHRoYXQgbWVzaCdzIE9CSiBmaWxlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGlvbkNhbGxiYWNrIHNob3VsZCBjb250YWluIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHRha2Ugb25lIHBhcmFtZXRlcjogYW4gb2JqZWN0IGFycmF5IHdoZXJlIHRoZSBrZXlzIHdpbGwgYmUgdGhlIHVuaXF1ZSBvYmplY3QgbmFtZSBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgYSBNZXNoIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNoZXMgSW4gY2FzZSBvdGhlciBtZXNoZXMgYXJlIGxvYWRlZCBzZXBhcmF0ZWx5IG9yIGlmIGEgcHJldmlvdXNseSBkZWNsYXJlZCB2YXJpYWJsZSBpcyBkZXNpcmVkIHRvIGJlIHVzZWQsIHBhc3MgaW4gYSAocG9zc2libHkgZW1wdHkpIGpzb24gb2JqZWN0IG9mIHRoZSBwYXR0ZXJuOiB7ICc8bWVzaF9uYW1lPic6IE9CSi5NZXNoIH1cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE1lc2hlcyAobmFtZUFuZFVSTHMsIGNvbXBsZXRpb25DYWxsYmFjaywgbWVzaGVzKSB7XG4gIGlmIChtZXNoZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG1lc2hlcyA9IHt9O1xuICB9XG5cbiAgY29uc3QgY29tcGxldGVkID0gW107XG5cbiAgZm9yIChjb25zdCBtZXNoX25hbWUgaW4gbmFtZUFuZFVSTHMpIHtcbiAgICBpZiAoIW5hbWVBbmRVUkxzLmhhc093blByb3BlcnR5KG1lc2hfbmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuYW1lQW5kVVJMc1ttZXNoX25hbWVdO1xuICAgIGNvbXBsZXRlZC5wdXNoKFxuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gW21lc2hfbmFtZSwgbmV3IE1lc2goZGF0YSldO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBQcm9taXNlLmFsbChjb21wbGV0ZWQpXG4gICAgLnRoZW4oKG1zKSA9PiB7XG4gICAgICBmb3IgKGxldCBbbmFtZSwgbWVzaF0gb2YgbXMpIHtcbiAgICAgICAgbWVzaGVzW25hbWVdID0gbWVzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBsZXRpb25DYWxsYmFjayhtZXNoZXMpO1xuICAgIH0pO1xufVxuXG52YXIgX2J1aWxkQnVmZmVyID0gZnVuY3Rpb24oIGdsLCB0eXBlLCBkYXRhLCBpdGVtU2l6ZSApe1xuICB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIHZhciBhcnJheVZpZXcgPSB0eXBlID09PSBnbC5BUlJBWV9CVUZGRVIgPyBGbG9hdDMyQXJyYXkgOiBVaW50MTZBcnJheTtcbiAgZ2wuYmluZEJ1ZmZlcih0eXBlLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKHR5cGUsIG5ldyBhcnJheVZpZXcoZGF0YSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgYnVmZmVyLml0ZW1TaXplID0gaXRlbVNpemU7XG4gIGJ1ZmZlci5udW1JdGVtcyA9IGRhdGEubGVuZ3RoIC8gaXRlbVNpemU7XG4gIHJldHVybiBidWZmZXI7XG59O1xuXG4vKipcbiAqIFRha2VzIGluIHRoZSBXZWJHTCBjb250ZXh0IGFuZCBhIE1lc2gsIHRoZW4gY3JlYXRlcyBhbmQgYXBwZW5kcyB0aGUgYnVmZmVyc1xuICogdG8gdGhlIG1lc2ggb2JqZWN0IGFzIGF0dHJpYnV0ZXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBgY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJylgIGNvbnRleHQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7TWVzaH0gbWVzaCBhIHNpbmdsZSBgT0JKLk1lc2hgIGluc3RhbmNlXG4gKlxuICogVGhlIG5ld2x5IGNyZWF0ZWQgbWVzaCBhdHRyaWJ1dGVzIGFyZTpcbiAqXG4gKiBBdHRyYnV0ZSB8IERlc2NyaXB0aW9uXG4gKiA6LS0tIHwgLS0tXG4gKiAqKm5vcm1hbEJ1ZmZlcioqICAgICAgIHxjb250YWlucyB0aGUgbW9kZWwmIzM5O3MgVmVydGV4IE5vcm1hbHNcbiAqIG5vcm1hbEJ1ZmZlci5pdGVtU2l6ZSAgfHNldCB0byAzIGl0ZW1zXG4gKiBub3JtYWxCdWZmZXIubnVtSXRlbXMgIHx0aGUgdG90YWwgbnVtYmVyIG9mIHZlcnRleCBub3JtYWxzXG4gKiB8XG4gKiAqKnRleHR1cmVCdWZmZXIqKiAgICAgIHxjb250YWlucyB0aGUgbW9kZWwmIzM5O3MgVGV4dHVyZSBDb29yZGluYXRlc1xuICogdGV4dHVyZUJ1ZmZlci5pdGVtU2l6ZSB8c2V0IHRvIDIgaXRlbXNcbiAqIHRleHR1cmVCdWZmZXIubnVtSXRlbXMgfHRoZSBudW1iZXIgb2YgdGV4dHVyZSBjb29yZGluYXRlc1xuICogfFxuICogKip2ZXJ0ZXhCdWZmZXIqKiAgICAgICB8Y29udGFpbnMgdGhlIG1vZGVsJiMzOTtzIFZlcnRleCBQb3NpdGlvbiBDb29yZGluYXRlcyAoZG9lcyBub3QgaW5jbHVkZSB3KVxuICogdmVydGV4QnVmZmVyLml0ZW1TaXplICB8c2V0IHRvIDMgaXRlbXNcbiAqIHZlcnRleEJ1ZmZlci5udW1JdGVtcyAgfHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGljZXNcbiAqIHxcbiAqICoqaW5kZXhCdWZmZXIqKiAgICAgICAgfGNvbnRhaW5zIHRoZSBpbmRpY2VzIG9mIHRoZSBmYWNlc1xuICogaW5kZXhCdWZmZXIuaXRlbVNpemUgICB8aXMgc2V0IHRvIDFcbiAqIGluZGV4QnVmZmVyLm51bUl0ZW1zICAgfHRoZSB0b3RhbCBudW1iZXIgb2YgaW5kaWNlc1xuICpcbiAqIEEgc2ltcGxlIGV4YW1wbGUgKGEgbG90IG9mIHN0ZXBzIGFyZSBtaXNzaW5nLCBzbyBkb24ndCBjb3B5IGFuZCBwYXN0ZSk6XG4gKlxuICogICAgIHZhciBnbCAgID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJyksXG4gKiAgICAgICAgIG1lc2ggPSBPQkouTWVzaChvYmpfZmlsZV9kYXRhKTtcbiAqICAgICAvLyBjb21waWxlIHRoZSBzaGFkZXJzIGFuZCBjcmVhdGUgYSBzaGFkZXIgcHJvZ3JhbVxuICogICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICogICAgIC8vIGNvbXBpbGF0aW9uIHN0dWZmIGhlcmVcbiAqICAgICAuLi5cbiAqICAgICAvLyBtYWtlIHN1cmUgeW91IGhhdmUgdmVydGV4LCB2ZXJ0ZXggbm9ybWFsLCBhbmQgdGV4dHVyZSBjb29yZGluYXRlXG4gKiAgICAgLy8gYXR0cmlidXRlcyBsb2NhdGVkIGluIHlvdXIgc2hhZGVycyBhbmQgYXR0YWNoIHRoZW0gdG8gdGhlIHNoYWRlciBwcm9ncmFtXG4gKiAgICAgc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVZlcnRleFBvc2l0aW9uXCIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUpO1xuICpcbiAqICAgICBzaGFkZXJQcm9ncmFtLnZlcnRleE5vcm1hbEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVZlcnRleE5vcm1hbFwiKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnZlcnRleE5vcm1hbEF0dHJpYnV0ZSk7XG4gKlxuICogICAgIHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgXCJhVGV4dHVyZUNvb3JkXCIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqXG4gKiAgICAgLy8gY3JlYXRlIGFuZCBpbml0aWFsaXplIHRoZSB2ZXJ0ZXgsIHZlcnRleCBub3JtYWwsIGFuZCB0ZXh0dXJlIGNvb3JkaW5hdGUgYnVmZmVyc1xuICogICAgIC8vIGFuZCBzYXZlIG9uIHRvIHRoZSBtZXNoIG9iamVjdFxuICogICAgIE9CSi5pbml0TWVzaEJ1ZmZlcnMoZ2wsIG1lc2gpO1xuICpcbiAqICAgICAvLyBub3cgdG8gcmVuZGVyIHRoZSBtZXNoXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG1lc2gudmVydGV4QnVmZmVyKTtcbiAqICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIG1lc2gudmVydGV4QnVmZmVyLml0ZW1TaXplLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICogICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGUgbWVzaCBkb2Vzbid0IGNvbnRhaW5cbiAqICAgICAvLyBhbnkgdGV4dHVyZSBjb29yZGluYXRlcyAoZS5nLiBzdXphbm5lLm9iaiBpbiB0aGUgZGV2ZWxvcG1lbnQgYnJhbmNoKS5cbiAqICAgICAvLyBpbiB0aGlzIGNhc2UsIHRoZSB0ZXh0dXJlIHZlcnRleEF0dHJpYkFycmF5IHdpbGwgbmVlZCB0byBiZSBkaXNhYmxlZFxuICogICAgIC8vIGJlZm9yZSB0aGUgY2FsbCB0byBkcmF3RWxlbWVudHNcbiAqICAgICBpZighbWVzaC50ZXh0dXJlcy5sZW5ndGgpe1xuICogICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqICAgICB9XG4gKiAgICAgZWxzZXtcbiAqICAgICAgIC8vIGlmIHRoZSB0ZXh0dXJlIHZlcnRleEF0dHJpYkFycmF5IGhhcyBiZWVuIHByZXZpb3VzbHlcbiAqICAgICAgIC8vIGRpc2FibGVkLCB0aGVuIGl0IG5lZWRzIHRvIGJlIHJlLWVuYWJsZWRcbiAqICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udGV4dHVyZUNvb3JkQXR0cmlidXRlKTtcbiAqICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnRleHR1cmVCdWZmZXIpO1xuICogICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnRleHR1cmVDb29yZEF0dHJpYnV0ZSwgbWVzaC50ZXh0dXJlQnVmZmVyLml0ZW1TaXplLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICogICAgIH1cbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG1lc2gubm9ybWFsQnVmZmVyKTtcbiAqICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4Tm9ybWFsQXR0cmlidXRlLCBtZXNoLm5vcm1hbEJ1ZmZlci5pdGVtU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbW9kZWwubWVzaC5pbmRleEJ1ZmZlcik7XG4gKiAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgbW9kZWwubWVzaC5pbmRleEJ1ZmZlci5udW1JdGVtcywgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lc2hCdWZmZXJzICggZ2wsIG1lc2ggKSB7XG4gIG1lc2gubm9ybWFsQnVmZmVyID0gX2J1aWxkQnVmZmVyKGdsLCBnbC5BUlJBWV9CVUZGRVIsIG1lc2gudmVydGV4Tm9ybWFscywgMyk7XG4gIG1lc2gudGV4dHVyZUJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnRleHR1cmVzLCBtZXNoLnRleHR1cmVTdHJpZGUpO1xuICBtZXNoLnZlcnRleEJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuQVJSQVlfQlVGRkVSLCBtZXNoLnZlcnRpY2VzLCAzKTtcbiAgbWVzaC5pbmRleEJ1ZmZlciA9IF9idWlsZEJ1ZmZlcihnbCwgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG1lc2guaW5kaWNlcywgMSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTWVzaEJ1ZmZlcnMgKCBnbCwgbWVzaCApIHtcbiAgZ2wuZGVsZXRlQnVmZmVyKG1lc2gubm9ybWFsQnVmZmVyKTtcbiAgZ2wuZGVsZXRlQnVmZmVyKG1lc2gudGV4dHVyZUJ1ZmZlcik7XG4gIGdsLmRlbGV0ZUJ1ZmZlcihtZXNoLnZlcnRleEJ1ZmZlcik7XG4gIGdsLmRlbGV0ZUJ1ZmZlcihtZXNoLmluZGV4QnVmZmVyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=