// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/@thi.ng/checks/exists-not-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsAndNotNull = void 0;

const existsAndNotNull = x => x != null;

exports.existsAndNotNull = existsAndNotNull;
},{}],"../../node_modules/@thi.ng/checks/exists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = void 0;

const exists = t => t !== undefined;

exports.exists = exists;
},{}],"../../node_modules/@thi.ng/checks/has-crypto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCrypto = void 0;

const hasCrypto = () => typeof window !== "undefined" && window["crypto"] !== undefined;

exports.hasCrypto = hasCrypto;
},{}],"../../node_modules/@thi.ng/checks/has-max-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMaxLength = void 0;

const hasMaxLength = (len, x) => x != null && x.length <= len;

exports.hasMaxLength = hasMaxLength;
},{}],"../../node_modules/@thi.ng/checks/has-min-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinLength = void 0;

const hasMinLength = (len, x) => x != null && x.length >= len;

exports.hasMinLength = hasMinLength;
},{}],"../../node_modules/@thi.ng/checks/is-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

const isFunction = x => typeof x === "function";

exports.isFunction = isFunction;
},{}],"../../node_modules/@thi.ng/checks/has-performance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPerformance = void 0;

var _isFunction = require("./is-function");

const hasPerformance = () => typeof performance !== "undefined" && (0, _isFunction.isFunction)(performance.now);

exports.hasPerformance = hasPerformance;
},{"./is-function":"../../node_modules/@thi.ng/checks/is-function.js"}],"../../node_modules/@thi.ng/checks/has-wasm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWASM = void 0;

const hasWASM = () => typeof window !== "undefined" && typeof window["WebAssembly"] !== "undefined" || typeof global !== "undefined" && typeof global["WebAssembly"] !== "undefined";

exports.hasWASM = hasWASM;
},{}],"../../node_modules/@thi.ng/checks/has-webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebGL = void 0;

const hasWebGL = () => {
  try {
    document.createElement("canvas").getContext("webgl");
    return true;
  } catch (e) {
    return false;
  }
};

exports.hasWebGL = hasWebGL;
},{}],"../../node_modules/@thi.ng/checks/has-websocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebSocket = void 0;

const hasWebSocket = () => typeof WebSocket !== "undefined";

exports.hasWebSocket = hasWebSocket;
},{}],"../../node_modules/@thi.ng/checks/implements-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementsFunction = void 0;

const implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

exports.implementsFunction = implementsFunction;
},{}],"../../node_modules/@thi.ng/checks/is-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;
const isArray = Array.isArray;
exports.isArray = isArray;
},{}],"../../node_modules/@thi.ng/checks/is-arraylike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

const isArrayLike = x => x != null && typeof x !== "function" && x.length !== undefined;

exports.isArrayLike = isArrayLike;
},{}],"../../node_modules/@thi.ng/checks/is-blob.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlob = void 0;

const isBlob = x => x instanceof Blob;

exports.isBlob = isBlob;
},{}],"../../node_modules/@thi.ng/checks/is-boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = void 0;

const isBoolean = x => typeof x === "boolean";

exports.isBoolean = isBoolean;
},{}],"../../node_modules/@thi.ng/checks/is-chrome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChrome = void 0;

const isChrome = () => typeof window !== "undefined" && !!window["chrome"];

exports.isChrome = isChrome;
},{}],"../../node_modules/@thi.ng/checks/is-date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = void 0;

const isDate = x => x instanceof Date;

exports.isDate = isDate;
},{}],"../../node_modules/@thi.ng/checks/is-even.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEven = void 0;

const isEven = x => x % 2 === 0;

exports.isEven = isEven;
},{}],"../../node_modules/@thi.ng/checks/is-false.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = void 0;

const isFalse = x => x === false;

exports.isFalse = isFalse;
},{}],"../../node_modules/@thi.ng/checks/is-file.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = void 0;

const isFile = x => x instanceof File;

exports.isFile = isFile;
},{}],"../../node_modules/@thi.ng/checks/is-firefox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFirefox = void 0;

const isFirefox = () => typeof window !== "undefined" && !!window["InstallTrigger"];

exports.isFirefox = isFirefox;
},{}],"../../node_modules/@thi.ng/checks/is-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

const isString = x => typeof x === "string";

exports.isString = isString;
},{}],"../../node_modules/@thi.ng/checks/is-hex-color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHexColor = void 0;

var _isString = require("./is-string");

const RE = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;

const isHexColor = x => (0, _isString.isString)(x) && RE.test(x);

exports.isHexColor = isHexColor;
},{"./is-string":"../../node_modules/@thi.ng/checks/is-string.js"}],"../../node_modules/@thi.ng/checks/is-ie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = void 0;

const isIE = () => typeof document !== "undefined" && (typeof document["documentMode"] !== "undefined" || navigator.userAgent.indexOf("MSIE") > 0);

exports.isIE = isIE;
},{}],"../../node_modules/@thi.ng/checks/is-in-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInRange = void 0;

const isInRange = (min, max, x) => x >= min && x <= max;

exports.isInRange = isInRange;
},{}],"../../node_modules/@thi.ng/checks/is-int32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInt32 = void 0;

const isInt32 = x => typeof x === "number" && (x | 0) === x;

exports.isInt32 = isInt32;
},{}],"../../node_modules/@thi.ng/checks/is-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = void 0;

const isIterable = x => x != null && typeof x[Symbol.iterator] === "function";

exports.isIterable = isIterable;
},{}],"../../node_modules/@thi.ng/checks/is-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMap = void 0;

const isMap = x => x instanceof Map;

exports.isMap = isMap;
},{}],"../../node_modules/@thi.ng/checks/is-mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;

const isMobile = () => typeof navigator !== "undefined" && /mobile|tablet|ip(ad|hone|od)|android|silk|crios/i.test(navigator.userAgent);

exports.isMobile = isMobile;
},{}],"../../node_modules/@thi.ng/checks/is-nan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN = void 0;

const isNaN = x => x !== x;

exports.isNaN = isNaN;
},{}],"../../node_modules/@thi.ng/checks/is-negative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNegative = void 0;

const isNegative = x => typeof x === "number" && x < 0;

exports.isNegative = isNegative;
},{}],"../../node_modules/@thi.ng/checks/is-nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNil = void 0;

/**
 * Checks if x is null or undefined.
 *
 */
const isNil = x => x == null;

exports.isNil = isNil;
},{}],"../../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../../node_modules/@thi.ng/checks/is-node.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = void 0;

const isNode = () => {
  if (typeof process === "object") {
    if (typeof process.versions === "object") {
      if (typeof process.versions.node !== "undefined") {
        return true;
      }
    }
  }

  return false;
};

exports.isNode = isNode;
},{"process":"../../node_modules/parcel-bundler/src/builtins/_empty.js"}],"../../node_modules/@thi.ng/checks/is-not-string-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotStringAndIterable = void 0;

const isNotStringAndIterable = x => x != null && typeof x !== "string" && typeof x[Symbol.iterator] === "function";

exports.isNotStringAndIterable = isNotStringAndIterable;
},{}],"../../node_modules/@thi.ng/checks/is-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = void 0;

const isNull = x => x === null;

exports.isNull = isNull;
},{}],"../../node_modules/@thi.ng/checks/is-number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

const isNumber = x => typeof x === "number";

exports.isNumber = isNumber;
},{}],"../../node_modules/@thi.ng/checks/is-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

const isObject = x => x !== null && typeof x === "object";

exports.isObject = isObject;
},{}],"../../node_modules/@thi.ng/checks/is-odd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = void 0;

const isOdd = x => x % 2 !== 0;

exports.isOdd = isOdd;
},{}],"../../node_modules/@thi.ng/checks/is-plain-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;
const OBJP = Object.getPrototypeOf;
/**
 * Similar to `isObject()`, but also checks if prototype is that of
 * `Object` (or `null`).
 *
 * @param x
 */

const isPlainObject = x => {
  let p;
  return x != null && typeof x === "object" && ((p = OBJP(x)) === null || OBJP(p) === null);
};

exports.isPlainObject = isPlainObject;
},{}],"../../node_modules/@thi.ng/checks/is-positive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPosititve = void 0;

const isPosititve = x => typeof x === "number" && x > 0;

exports.isPosititve = isPosititve;
},{}],"../../node_modules/@thi.ng/checks/is-primitive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimitive = void 0;

const isPrimitive = x => {
  const t = typeof x;
  return t === "string" || t === "number";
};

exports.isPrimitive = isPrimitive;
},{}],"../../node_modules/@thi.ng/checks/is-promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = void 0;

const isPromise = x => x instanceof Promise;

exports.isPromise = isPromise;
},{}],"../../node_modules/@thi.ng/checks/is-promiselike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromiseLike = void 0;

var _implementsFunction = require("./implements-function");

const isPromiseLike = x => x instanceof Promise || (0, _implementsFunction.implementsFunction)(x, "then") && (0, _implementsFunction.implementsFunction)(x, "catch");

exports.isPromiseLike = isPromiseLike;
},{"./implements-function":"../../node_modules/@thi.ng/checks/implements-function.js"}],"../../node_modules/@thi.ng/checks/is-regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegExp = void 0;

const isRegExp = x => x instanceof RegExp;

exports.isRegExp = isRegExp;
},{}],"../../node_modules/@thi.ng/checks/is-safari.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;

var _isChrome = require("./is-chrome");

const isSafari = () => typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !(0, _isChrome.isChrome)();

exports.isSafari = isSafari;
},{"./is-chrome":"../../node_modules/@thi.ng/checks/is-chrome.js"}],"../../node_modules/@thi.ng/checks/is-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSet = void 0;

const isSet = x => x instanceof Set;

exports.isSet = isSet;
},{}],"../../node_modules/@thi.ng/checks/is-symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSymbol = void 0;

const isSymbol = x => typeof x === "symbol";

exports.isSymbol = isSymbol;
},{}],"../../node_modules/@thi.ng/checks/is-transferable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTransferable = void 0;

const isTransferable = x => x instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && x instanceof SharedArrayBuffer || typeof MessagePort !== "undefined" && x instanceof MessagePort;

exports.isTransferable = isTransferable;
},{}],"../../node_modules/@thi.ng/checks/is-true.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = void 0;

const isTrue = x => x === true;

exports.isTrue = isTrue;
},{}],"../../node_modules/@thi.ng/checks/is-typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypedArray = void 0;

const isTypedArray = x => x && (x.constructor === Float32Array || x.constructor === Uint32Array || x.constructor === Uint8Array || x.constructor === Uint8ClampedArray || x.constructor === Int8Array || x.constructor === Uint16Array || x.constructor === Int16Array || x.constructor === Int32Array || x.constructor === Float64Array);

exports.isTypedArray = isTypedArray;
},{}],"../../node_modules/@thi.ng/checks/is-uint32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUint32 = void 0;

const isUint32 = x => typeof x === "number" && x >>> 0 === x;

exports.isUint32 = isUint32;
},{}],"../../node_modules/@thi.ng/checks/is-undefined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = void 0;

const isUndefined = x => x === undefined;

exports.isUndefined = isUndefined;
},{}],"../../node_modules/@thi.ng/checks/is-uuid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUID = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const isUUID = x => RE.test(x);

exports.isUUID = isUUID;
},{}],"../../node_modules/@thi.ng/checks/is-uuid4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUIDv4 = void 0;
const RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const isUUIDv4 = x => RE.test(x);

exports.isUUIDv4 = isUUIDv4;
},{}],"../../node_modules/@thi.ng/checks/is-zero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZero = void 0;

const isZero = x => x === 0;

exports.isZero = isZero;
},{}],"../../node_modules/@thi.ng/checks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _existsNotNull = require("./exists-not-null");

Object.keys(_existsNotNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _existsNotNull[key];
    }
  });
});

var _exists = require("./exists");

Object.keys(_exists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exists[key];
    }
  });
});

var _hasCrypto = require("./has-crypto");

Object.keys(_hasCrypto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasCrypto[key];
    }
  });
});

var _hasMaxLength = require("./has-max-length");

Object.keys(_hasMaxLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMaxLength[key];
    }
  });
});

var _hasMinLength = require("./has-min-length");

Object.keys(_hasMinLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMinLength[key];
    }
  });
});

var _hasPerformance = require("./has-performance");

Object.keys(_hasPerformance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasPerformance[key];
    }
  });
});

var _hasWasm = require("./has-wasm");

Object.keys(_hasWasm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWasm[key];
    }
  });
});

var _hasWebgl = require("./has-webgl");

Object.keys(_hasWebgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebgl[key];
    }
  });
});

var _hasWebsocket = require("./has-websocket");

Object.keys(_hasWebsocket).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebsocket[key];
    }
  });
});

var _implementsFunction = require("./implements-function");

Object.keys(_implementsFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _implementsFunction[key];
    }
  });
});

var _isArray = require("./is-array");

Object.keys(_isArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArray[key];
    }
  });
});

var _isArraylike = require("./is-arraylike");

Object.keys(_isArraylike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArraylike[key];
    }
  });
});

var _isBlob = require("./is-blob");

Object.keys(_isBlob).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBlob[key];
    }
  });
});

var _isBoolean = require("./is-boolean");

Object.keys(_isBoolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBoolean[key];
    }
  });
});

var _isChrome = require("./is-chrome");

Object.keys(_isChrome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isChrome[key];
    }
  });
});

var _isDate = require("./is-date");

Object.keys(_isDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isDate[key];
    }
  });
});

var _isEven = require("./is-even");

Object.keys(_isEven).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEven[key];
    }
  });
});

var _isFalse = require("./is-false");

Object.keys(_isFalse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFalse[key];
    }
  });
});

var _isFile = require("./is-file");

Object.keys(_isFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFile[key];
    }
  });
});

var _isFirefox = require("./is-firefox");

Object.keys(_isFirefox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFirefox[key];
    }
  });
});

var _isFunction = require("./is-function");

Object.keys(_isFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFunction[key];
    }
  });
});

var _isHexColor = require("./is-hex-color");

Object.keys(_isHexColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isHexColor[key];
    }
  });
});

var _isIe = require("./is-ie");

Object.keys(_isIe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIe[key];
    }
  });
});

var _isInRange = require("./is-in-range");

Object.keys(_isInRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInRange[key];
    }
  });
});

var _isInt = require("./is-int32");

Object.keys(_isInt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInt[key];
    }
  });
});

var _isIterable = require("./is-iterable");

Object.keys(_isIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIterable[key];
    }
  });
});

var _isMap = require("./is-map");

Object.keys(_isMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMap[key];
    }
  });
});

var _isMobile = require("./is-mobile");

Object.keys(_isMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMobile[key];
    }
  });
});

var _isNan = require("./is-nan");

Object.keys(_isNan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNan[key];
    }
  });
});

var _isNegative = require("./is-negative");

Object.keys(_isNegative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNegative[key];
    }
  });
});

var _isNil = require("./is-nil");

Object.keys(_isNil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNil[key];
    }
  });
});

var _isNode = require("./is-node");

Object.keys(_isNode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNode[key];
    }
  });
});

var _isNotStringIterable = require("./is-not-string-iterable");

Object.keys(_isNotStringIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNotStringIterable[key];
    }
  });
});

var _isNull = require("./is-null");

Object.keys(_isNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNull[key];
    }
  });
});

var _isNumber = require("./is-number");

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNumber[key];
    }
  });
});

var _isObject = require("./is-object");

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isObject[key];
    }
  });
});

var _isOdd = require("./is-odd");

Object.keys(_isOdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isOdd[key];
    }
  });
});

var _isPlainObject = require("./is-plain-object");

Object.keys(_isPlainObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPlainObject[key];
    }
  });
});

var _isPositive = require("./is-positive");

Object.keys(_isPositive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPositive[key];
    }
  });
});

var _isPrimitive = require("./is-primitive");

Object.keys(_isPrimitive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPrimitive[key];
    }
  });
});

var _isPromise = require("./is-promise");

Object.keys(_isPromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromise[key];
    }
  });
});

var _isPromiselike = require("./is-promiselike");

Object.keys(_isPromiselike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromiselike[key];
    }
  });
});

var _isRegexp = require("./is-regexp");

Object.keys(_isRegexp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isRegexp[key];
    }
  });
});

var _isSafari = require("./is-safari");

Object.keys(_isSafari).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSafari[key];
    }
  });
});

var _isSet = require("./is-set");

Object.keys(_isSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSet[key];
    }
  });
});

var _isString = require("./is-string");

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isString[key];
    }
  });
});

var _isSymbol = require("./is-symbol");

Object.keys(_isSymbol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSymbol[key];
    }
  });
});

var _isTransferable = require("./is-transferable");

Object.keys(_isTransferable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTransferable[key];
    }
  });
});

var _isTrue = require("./is-true");

Object.keys(_isTrue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTrue[key];
    }
  });
});

var _isTypedarray = require("./is-typedarray");

Object.keys(_isTypedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTypedarray[key];
    }
  });
});

var _isUint = require("./is-uint32");

Object.keys(_isUint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUint[key];
    }
  });
});

var _isUndefined = require("./is-undefined");

Object.keys(_isUndefined).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUndefined[key];
    }
  });
});

var _isUuid = require("./is-uuid");

Object.keys(_isUuid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid[key];
    }
  });
});

var _isUuid2 = require("./is-uuid4");

Object.keys(_isUuid2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid2[key];
    }
  });
});

var _isZero = require("./is-zero");

Object.keys(_isZero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isZero[key];
    }
  });
});
},{"./exists-not-null":"../../node_modules/@thi.ng/checks/exists-not-null.js","./exists":"../../node_modules/@thi.ng/checks/exists.js","./has-crypto":"../../node_modules/@thi.ng/checks/has-crypto.js","./has-max-length":"../../node_modules/@thi.ng/checks/has-max-length.js","./has-min-length":"../../node_modules/@thi.ng/checks/has-min-length.js","./has-performance":"../../node_modules/@thi.ng/checks/has-performance.js","./has-wasm":"../../node_modules/@thi.ng/checks/has-wasm.js","./has-webgl":"../../node_modules/@thi.ng/checks/has-webgl.js","./has-websocket":"../../node_modules/@thi.ng/checks/has-websocket.js","./implements-function":"../../node_modules/@thi.ng/checks/implements-function.js","./is-array":"../../node_modules/@thi.ng/checks/is-array.js","./is-arraylike":"../../node_modules/@thi.ng/checks/is-arraylike.js","./is-blob":"../../node_modules/@thi.ng/checks/is-blob.js","./is-boolean":"../../node_modules/@thi.ng/checks/is-boolean.js","./is-chrome":"../../node_modules/@thi.ng/checks/is-chrome.js","./is-date":"../../node_modules/@thi.ng/checks/is-date.js","./is-even":"../../node_modules/@thi.ng/checks/is-even.js","./is-false":"../../node_modules/@thi.ng/checks/is-false.js","./is-file":"../../node_modules/@thi.ng/checks/is-file.js","./is-firefox":"../../node_modules/@thi.ng/checks/is-firefox.js","./is-function":"../../node_modules/@thi.ng/checks/is-function.js","./is-hex-color":"../../node_modules/@thi.ng/checks/is-hex-color.js","./is-ie":"../../node_modules/@thi.ng/checks/is-ie.js","./is-in-range":"../../node_modules/@thi.ng/checks/is-in-range.js","./is-int32":"../../node_modules/@thi.ng/checks/is-int32.js","./is-iterable":"../../node_modules/@thi.ng/checks/is-iterable.js","./is-map":"../../node_modules/@thi.ng/checks/is-map.js","./is-mobile":"../../node_modules/@thi.ng/checks/is-mobile.js","./is-nan":"../../node_modules/@thi.ng/checks/is-nan.js","./is-negative":"../../node_modules/@thi.ng/checks/is-negative.js","./is-nil":"../../node_modules/@thi.ng/checks/is-nil.js","./is-node":"../../node_modules/@thi.ng/checks/is-node.js","./is-not-string-iterable":"../../node_modules/@thi.ng/checks/is-not-string-iterable.js","./is-null":"../../node_modules/@thi.ng/checks/is-null.js","./is-number":"../../node_modules/@thi.ng/checks/is-number.js","./is-object":"../../node_modules/@thi.ng/checks/is-object.js","./is-odd":"../../node_modules/@thi.ng/checks/is-odd.js","./is-plain-object":"../../node_modules/@thi.ng/checks/is-plain-object.js","./is-positive":"../../node_modules/@thi.ng/checks/is-positive.js","./is-primitive":"../../node_modules/@thi.ng/checks/is-primitive.js","./is-promise":"../../node_modules/@thi.ng/checks/is-promise.js","./is-promiselike":"../../node_modules/@thi.ng/checks/is-promiselike.js","./is-regexp":"../../node_modules/@thi.ng/checks/is-regexp.js","./is-safari":"../../node_modules/@thi.ng/checks/is-safari.js","./is-set":"../../node_modules/@thi.ng/checks/is-set.js","./is-string":"../../node_modules/@thi.ng/checks/is-string.js","./is-symbol":"../../node_modules/@thi.ng/checks/is-symbol.js","./is-transferable":"../../node_modules/@thi.ng/checks/is-transferable.js","./is-true":"../../node_modules/@thi.ng/checks/is-true.js","./is-typedarray":"../../node_modules/@thi.ng/checks/is-typedarray.js","./is-uint32":"../../node_modules/@thi.ng/checks/is-uint32.js","./is-undefined":"../../node_modules/@thi.ng/checks/is-undefined.js","./is-uuid":"../../node_modules/@thi.ng/checks/is-uuid.js","./is-uuid4":"../../node_modules/@thi.ng/checks/is-uuid4.js","./is-zero":"../../node_modules/@thi.ng/checks/is-zero.js"}],"../../node_modules/@thi.ng/strings/case.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camel = exports.snake = exports.kebab = exports.capitalize = exports.lower = exports.upper = void 0;

/**
 * Uppercase string formatter.
 *
 * @param x string to transform
 */
const upper = x => x.toUpperCase();
/**
 * Lowercase string formatter.
 *
 * @param x string to transform
 */


exports.upper = upper;

const lower = x => x.toLowerCase();
/**
 * String formatter which capitalizes first character.
 *
 * @param x string to transform
 */


exports.lower = lower;

const capitalize = x => x[0].toUpperCase() + x.substr(1);
/**
 * Converts a CamelCase string into kebab case, with optional custom
 * delimiter (`-` by default).
 *
 * TODO: Switch back to currently broken Regex w/ positive lookbehind,
 * once avail in FF & Safari (currently TC39 stage 4)
 *
 * https://github.com/tc39/proposal-regexp-lookbehind
 *
 * ```
 * kebab("FooBar23Baz");
 * // "foo-bar23-baz"
 * ```
 *
 * @param x
 * @param delim
 */


exports.capitalize = capitalize;

const kebab = (x, delim = "-") => lower(x.replace( // TC39
// /(?<=[a-z0-9\u00e0-\u00fd])(?=[A-Z\u00c0-\u00dd])/g,
// (_, i) => (i ? delim : "")
/([a-z0-9\u00e0-\u00fd])([A-Z\u00c0-\u00dd])/g, (_, a, b) => a + delim + b));
/**
 * Short for `kebab` using `_` as delimiter.
 *
 * @param x
 */


exports.kebab = kebab;

const snake = x => kebab(x, "_");
/**
 * Converts a kebab-case or snake_case string into CamelCase. Uses `-`
 * as default delimiter.
 *
 * @param x
 * @param delim
 */


exports.snake = snake;

const camel = (x, delim = "-") => lower(x).replace(new RegExp(`\\${delim}+(\\w)`, "g"), (_, c) => upper(c));

exports.camel = camel;
},{}],"../../node_modules/@thi.ng/memoize/defonce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defonce = void 0;
const cache = {};
/**
 * Lightweight named singleton factory, intended for hot-module
 * replacement situations. Takes a (preferably globally unique) `id` and
 * `factory` function. If there's no value defined for `id` yet, calls
 * `factory` to produce the singleton value and caches it. Returns
 * singleton value.
 *
 * Note: All created values will remain in the private cache until the
 * JS process terminates or this module itself has been reloaded (though
 * the latter shouldn't happen in an HMR workflow).
 *
 * @param id
 * @param factory
 */

const defonce = (id, factory) => cache.hasOwnProperty(id) ? cache[id] : cache[id] = factory();

exports.defonce = defonce;
},{}],"../../node_modules/@thi.ng/memoize/memoize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoize = memoize;

function memoize(fn, cache) {
  return (...args) => {
    let res;
    return cache.has(args) ? cache.get(args) : (cache.set(args, res = fn.apply(null, args)), res);
  };
}
},{}],"../../node_modules/@thi.ng/memoize/memoize1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoize1 = memoize1;

/**
 * Optimized memoization for single arg functions. If the function
 * expects args other than strings or numbers, you MUST provide a `Map`
 * implementation which supports value (rather than object) equality,
 * e.g. one of those provided by thi.ng/associative. Using a native
 * `Map` type here will lead to memory leaks! Alternatively, use
 * `memoizeJ`.
 *
 * @param fn
 * @param cache
 */
function memoize1(fn, cache) {
  !cache && (cache = new Map());
  return x => {
    let res;
    return cache.has(x) ? cache.get(x) : (cache.set(x, res = fn(x)), res);
  };
}
},{}],"../../node_modules/@thi.ng/memoize/memoizej.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoizeJ = memoizeJ;

function memoizeJ(fn, cache) {
  !cache && (cache = {});
  return (...args) => {
    const key = JSON.stringify(args);

    if (key !== undefined) {
      return key in cache ? cache[key] : cache[key] = fn.apply(null, args);
    }

    return fn.apply(null, args);
  };
}
},{}],"../../node_modules/@thi.ng/memoize/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defonce = require("./defonce");

Object.keys(_defonce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defonce[key];
    }
  });
});

var _memoize = require("./memoize");

Object.keys(_memoize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _memoize[key];
    }
  });
});

var _memoize2 = require("./memoize1");

Object.keys(_memoize2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _memoize2[key];
    }
  });
});

var _memoizej = require("./memoizej");

Object.keys(_memoizej).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _memoizej[key];
    }
  });
});
},{"./defonce":"../../node_modules/@thi.ng/memoize/defonce.js","./memoize":"../../node_modules/@thi.ng/memoize/memoize.js","./memoize1":"../../node_modules/@thi.ng/memoize/memoize1.js","./memoizej":"../../node_modules/@thi.ng/memoize/memoizej.js"}],"../../node_modules/@thi.ng/strings/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = void 0;

var _memoize = require("@thi.ng/memoize");

/**
 * @param ch character
 * @param n repeat count
 */
const repeat = (0, _memoize.memoizeJ)((ch, n) => ch.repeat(n));
exports.repeat = repeat;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js"}],"../../node_modules/@thi.ng/strings/truncate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncate = void 0;

var _memoize = require("@thi.ng/memoize");

const truncate = (0, _memoize.memoizeJ)((n, suffix = "") => x => x.length > n ? x.substr(0, n - suffix.length) + suffix : x);
exports.truncate = truncate;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js"}],"../../node_modules/@thi.ng/strings/center.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.center = void 0;

var _memoize = require("@thi.ng/memoize");

var _repeat = require("./repeat");

var _truncate = require("./truncate");

/**
 * Returns stringer which pads given input with `ch` (default: space) on
 * both sides and returns fixed width string of given `lineWidth`.
 * Returns string of only pad characters for any `null` or `undefined`
 * values. If the string version of an input is > `lineWidth`, no
 * centering is performed, but the string will be truncated to
 * `lineWidth`.
 *
 * Note: The padding string can contain multiple characters.
 *
 * ```
 * center(20, "<>")(wrap(" ")("thi.ng"))
 * // "<><><> thi.ng <><><>"
 * ```
 *
 * @param lineWidth target length
 * @param pad pad character(s)
 */
const center = (0, _memoize.memoizeJ)((n, pad = " ") => {
  const buf = (0, _repeat.repeat)(String(pad), n);
  return x => {
    if (x == null) return buf;
    x = x.toString();
    const r = (n - x.length) / 2;
    return x.length < n ? buf.substr(0, r) + x + buf.substr(0, r + ((n & 1) === (x.length & 1) ? 0 : 1)) : (0, _truncate.truncate)(n)(x);
  };
});
exports.center = center;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","./repeat":"../../node_modules/@thi.ng/strings/repeat.js","./truncate":"../../node_modules/@thi.ng/strings/truncate.js"}],"../../node_modules/@thi.ng/strings/pad-left.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Z4 = exports.Z3 = exports.Z2 = exports.padLeft = void 0;

var _memoize = require("@thi.ng/memoize");

var _repeat = require("./repeat");

/**
 * @param n target length
 * @param ch pad character(s)
 */
const padLeft = (0, _memoize.memoizeJ)((n, ch = " ") => {
  const buf = (0, _repeat.repeat)(String(ch), n);
  return x => x != null ? (x = x.toString(), x.length < n ? buf.substr(x.length) + x : x) : buf;
});
/**
 * Zero-padded 2 digit formatter.
 */

exports.padLeft = padLeft;
const Z2 = padLeft(2, "0");
/**
 * Zero-padded 3 digit formatter.
 */

exports.Z2 = Z2;
const Z3 = padLeft(3, "0");
/**
 * Zero-padded 4 digit formatter.
 */

exports.Z3 = Z3;
const Z4 = padLeft(4, "0");
exports.Z4 = Z4;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","./repeat":"../../node_modules/@thi.ng/strings/repeat.js"}],"../../node_modules/@thi.ng/strings/float.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatFixedWidth = exports.float = void 0;

var _memoize = require("@thi.ng/memoize");

var _padLeft = require("./pad-left");

/**
 * Returns `Stringer` which formats numbers to given precision.
 * Exceptions:
 *
 * - NaN => "NaN"
 * - Infinity => "+/-∞"
 *
 * @param len number of fractional digits
 * @kind function
 */
const float = (0, _memoize.memoizeJ)(prec => x => nanOrInf(x) || x.toFixed(prec));
/**
 * Similar to `float`, returns `Stringer` which formats numbers to given
 * character width & precision. Uses scientific notation if needed.
 *
 * Default precision: 3 fractional digits
 */

exports.float = float;
const floatFixedWidth = (0, _memoize.memoizeJ)((width, prec = 3) => {
  const l = width - prec - 1;
  const pl = Math.pow(10, l);
  const pln = -Math.pow(10, l - 1);
  const pr = Math.pow(10, -(prec - 1));
  const pad = (0, _padLeft.padLeft)(width);
  return x => {
    const ax = Math.abs(x);
    return pad(nanOrInf(x) || (x === 0 ? "0" : ax < pr || ax >= pl ? exp(x, width) : x.toFixed(prec - (x < pln ? 1 : 0))));
  };
});
exports.floatFixedWidth = floatFixedWidth;

const exp = (x, w) => x.toExponential(Math.max(w - 4 - (Math.log(Math.abs(x)) / Math.LN10 >= 10 ? 2 : 1) - (x < 0 ? 1 : 0), 0));

const nanOrInf = x => isNaN(x) ? "NaN" : x === Infinity ? "+∞" : x === -Infinity ? "-∞" : undefined;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","./pad-left":"../../node_modules/@thi.ng/strings/pad-left.js"}],"../../node_modules/@thi.ng/strings/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = void 0;

const format = (fmt, ...args) => {
  const acc = [];

  for (let i = 0, j = 0, n = fmt.length; i < n; i++) {
    const f = fmt[i];
    const t = typeof f;
    acc.push(t === "function" ? f(args[j++]) : t === "object" ? f[args[j++]] : f);
  }

  return acc.join("");
};

exports.format = format;
},{}],"../../node_modules/@thi.ng/strings/hollerith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hstr = void 0;

/**
 * Formats given value `x` as Fortran style Hollerith string.
 *
 * ```
 * hstr("abc")  // "3Habc"
 * hstr(123.45) // "6H123.45"
 * hstr("")     // "0H"
 * hstr(null)   // ""
 * ```
 *
 * https://en.wikipedia.org/wiki/Hollerith_constant
 *
 * @param x
 */
const hstr = x => x != null ? (x = x.toString(), `${x.length}H${x}`) : "";

exports.hstr = hstr;
},{}],"../../node_modules/@thi.ng/strings/pad-right.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padRight = void 0;

var _memoize = require("@thi.ng/memoize");

var _repeat = require("./repeat");

/**
 * @param n target length
 * @param ch pad character(s)
 */
const padRight = (0, _memoize.memoizeJ)((n, ch = " ") => {
  const buf = (0, _repeat.repeat)(String(ch), n);
  return x => x != null ? (x = x.toString(), x.length < n ? x + buf.substr(x.length) : x) : buf;
});
exports.padRight = padRight;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","./repeat":"../../node_modules/@thi.ng/strings/repeat.js"}],"../../node_modules/@thi.ng/strings/parse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeParseFloat = exports.maybeParseInt = void 0;

const maybeParseInt = (x, defaultVal = 0, radix = 10) => {
  const n = parseInt(x, radix);
  return isNaN(n) ? defaultVal : n;
};

exports.maybeParseInt = maybeParseInt;

const maybeParseFloat = (x, defaultVal = 0) => {
  const n = parseFloat(x);
  return isNaN(n) ? defaultVal : n;
};

exports.maybeParseFloat = maybeParseFloat;
},{}],"../../node_modules/@thi.ng/strings/percent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.percent = void 0;

/**
 * Returns `Stringer` which formats given fractions as percentage (e.g.
 * `0.1234 => 12.34%`).
 *
 * @param prec number of fractional digits (default: 0)
 */
const percent = (prec = 0) => x => (x * 100).toFixed(prec) + "%";

exports.percent = percent;
},{}],"../../node_modules/@thi.ng/strings/radix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.U64 = exports.U32 = exports.U24 = exports.U16 = exports.U8 = exports.B32 = exports.B16 = exports.B8 = exports.radix = void 0;

var _memoize = require("@thi.ng/memoize");

var _repeat = require("./repeat");

/**
 * Returns a `Stringer` which formats given numbers to `radix`, `len`
 * and with optional prefix (not included in `len`).
 *
 * @param radix
 * @param len
 * @param prefix
 */
const radix = (0, _memoize.memoizeJ)((radix, n, prefix = "") => {
  const buf = (0, _repeat.repeat)("0", n);
  return x => {
    x = (x >>> 0).toString(radix);
    return prefix + (x.length < n ? buf.substr(x.length) + x : x);
  };
});
/**
 * 8bit binary conversion preset.
 */

exports.radix = radix;
const B8 = radix(2, 8);
/**
 * 16bit binary conversion preset.
 */

exports.B8 = B8;
const B16 = radix(2, 16);
/**
 * 32bit binary conversion preset.
 */

exports.B16 = B16;
const B32 = radix(2, 32);
/**
 * 8bit hex conversion preset.
 * Assumes unsigned inputs.
 */

exports.B32 = B32;
const U8 = radix(16, 2);
/**
 * 16bit hex conversion preset.
 * Assumes unsigned inputs.
 */

exports.U8 = U8;
const U16 = radix(16, 4);
/**
 * 24bit hex conversion preset.
 * Assumes unsigned inputs.
 */

exports.U16 = U16;
const U24 = radix(16, 6);
/**
 * 32bit hex conversion preset.
 * Assumes unsigned inputs.
 */

exports.U24 = U24;
const U32 = radix(16, 8);
/**
 * 64bit hex conversion preset (2x 32bit ints)
 * Assumes unsigned inputs.
 */

exports.U32 = U32;

const U64 = (hi, lo) => U32(hi) + U32(lo);

exports.U64 = U64;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","./repeat":"../../node_modules/@thi.ng/strings/repeat.js"}],"../../node_modules/@thi.ng/strings/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.charRange = charRange;

/**
 * Yields iterator of characters [`from`..`to`] (inclusive). Uses
 * reverse ordering if `to` < `from`.
 *
 * @param from
 * @param to
 */
function* charRange(from, to) {
  let i = typeof from === "string" ? from.charCodeAt(0) : from;
  const end = typeof to === "string" ? to.charCodeAt(0) : to;

  if (i <= end) {
    for (; i <= end; i++) {
      yield String.fromCharCode(i);
    }
  } else {
    for (; i >= end; i--) {
      yield String.fromCharCode(i);
    }
  }
}
},{}],"../../node_modules/@thi.ng/strings/slugify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slugify = void 0;
const src = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
const dest = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
const re = new RegExp(src.split("").join("|"), "g");
/**
 * Based on:
 * https://medium.com/@matthagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
 *
 * @param str
 */

const slugify = str => {
  return str.toLowerCase().replace(/\s+/g, "-").replace(re, c => dest[src.indexOf(c)]).replace(/&+/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-{2,}/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};

exports.slugify = slugify;
},{}],"../../node_modules/@thi.ng/errors/deferror.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defError = void 0;

const defError = (prefix, suffix = msg => msg !== undefined ? ": " + msg : "") => class extends Error {
  constructor(msg) {
    super(prefix(msg) + suffix(msg));
  }

};

exports.defError = defError;
},{}],"../../node_modules/@thi.ng/errors/illegal-arguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArgs = exports.IllegalArgumentError = void 0;

var _deferror = require("./deferror");

const IllegalArgumentError = (0, _deferror.defError)(() => "illegal argument(s)");
exports.IllegalArgumentError = IllegalArgumentError;

const illegalArgs = msg => {
  throw new IllegalArgumentError(msg);
};

exports.illegalArgs = illegalArgs;
},{"./deferror":"../../node_modules/@thi.ng/errors/deferror.js"}],"../../node_modules/@thi.ng/errors/illegal-arity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArity = exports.IllegalArityError = void 0;

var _deferror = require("./deferror");

const IllegalArityError = (0, _deferror.defError)(() => "illegal arity");
exports.IllegalArityError = IllegalArityError;

const illegalArity = n => {
  throw new IllegalArityError(n);
};

exports.illegalArity = illegalArity;
},{"./deferror":"../../node_modules/@thi.ng/errors/deferror.js"}],"../../node_modules/@thi.ng/errors/illegal-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalState = exports.IllegalStateError = void 0;

var _deferror = require("./deferror");

const IllegalStateError = (0, _deferror.defError)(() => "illegal state");
exports.IllegalStateError = IllegalStateError;

const illegalState = msg => {
  throw new IllegalStateError(msg);
};

exports.illegalState = illegalState;
},{"./deferror":"../../node_modules/@thi.ng/errors/deferror.js"}],"../../node_modules/@thi.ng/errors/unsupported.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupported = exports.UnsupportedOperationError = void 0;

var _deferror = require("./deferror");

const UnsupportedOperationError = (0, _deferror.defError)(() => "unsupported operation");
exports.UnsupportedOperationError = UnsupportedOperationError;

const unsupported = msg => {
  throw new UnsupportedOperationError(msg);
};

exports.unsupported = unsupported;
},{"./deferror":"../../node_modules/@thi.ng/errors/deferror.js"}],"../../node_modules/@thi.ng/errors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferror = require("./deferror");

Object.keys(_deferror).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deferror[key];
    }
  });
});

var _illegalArguments = require("./illegal-arguments");

Object.keys(_illegalArguments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArguments[key];
    }
  });
});

var _illegalArity = require("./illegal-arity");

Object.keys(_illegalArity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArity[key];
    }
  });
});

var _illegalState = require("./illegal-state");

Object.keys(_illegalState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalState[key];
    }
  });
});

var _unsupported = require("./unsupported");

Object.keys(_unsupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unsupported[key];
    }
  });
});
},{"./deferror":"../../node_modules/@thi.ng/errors/deferror.js","./illegal-arguments":"../../node_modules/@thi.ng/errors/illegal-arguments.js","./illegal-arity":"../../node_modules/@thi.ng/errors/illegal-arity.js","./illegal-state":"../../node_modules/@thi.ng/errors/illegal-state.js","./unsupported":"../../node_modules/@thi.ng/errors/unsupported.js"}],"../../node_modules/@thi.ng/strings/splice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splice = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Forms a new strings which inserts given `insert` string into `src`
 * string at `from` position and appends remaining `src` chars from
 * original `to` position. If `from` and `to` are equal (`to` by default
 * is), the operation is a pure insertion. If not, then some chars from
 * `src` will be removed in the new string. If either position is
 * negative, it'll be considered relative to the end of the `src`.
 *
 * @param src
 * @param insert
 * @param from
 * @param to
 */
const splice = (src, insert, from, to = from) => {
  if (from < 0) {
    from += src.length;
  }

  if (to < 0) {
    to += src.length;
  }

  if (from > to) {
    (0, _errors.illegalArgs)("'from' index must be <= 'to'");
  }

  to = Math.max(to, 0);
  return from <= 0 ? insert + src.substr(to) : from >= src.length ? src + insert : src.substr(0, from) + insert + src.substr(to);
};

exports.splice = splice;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/strings/truncate-left.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateLeft = void 0;

var _memoize = require("@thi.ng/memoize");

const truncateLeft = (0, _memoize.memoizeJ)((n, prefix = "") => x => x.length > n ? prefix + x.substr(x.length - n + prefix.length) : x);
exports.truncateLeft = truncateLeft;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js"}],"../../node_modules/@thi.ng/strings/units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grams = exports.meters = exports.seconds = exports.bytes = exports.bits = exports.units = void 0;

var _memoize = require("@thi.ng/memoize");

const units = (0, _memoize.memoizeJ)((exp, base, prec = 2) => {
  const groups = exp.map(x => [x[0], x[2] != null ? x[2] : prec, x[1]]).sort((a, b) => a[0] - b[0]);
  return x => {
    if (x === 0) {
      return `0${base}`;
    }

    const absX = Math.abs(x);

    for (let i = groups.length; --i >= 0;) {
      const g = groups[i];

      if (absX >= g[0] || i === 0) {
        return (x / g[0]).toFixed(g[1]) + g[2];
      }
    }

    return "";
  };
});
exports.units = units;
const KB = 1024;
const MB = 1024 * 1024;
const bits = units([[1, " bits", 0], [KB, " Kb"], [MB, " Mb"], [KB * MB, " Gb"]], " bits", 2);
exports.bits = bits;
const bytes = units([[1, " bytes", 0], [KB, " KB"], [MB, " MB"], [KB * MB, " GB"], [MB * MB, " TB"], [KB * MB * MB, " PB"]], " bytes", 2);
exports.bytes = bytes;
const seconds = units([[1e-12, " ps"], [1e-9, " ns"], [1e-6, " µs"], [1e-3, " ms"], [1, " secs"], [60, " mins"], [60 * 60, " hours"], [24 * 60 * 60, " days"]], " secs", 3);
exports.seconds = seconds;
const meters = units([[1e-12, " pm"], [1e-9, " nm"], [1e-6, " µm"], [1e-3, " mm"], [1e-2, " cm"], [1, " m"], [1e3, " km"]], " m", 2);
exports.meters = meters;
const grams = units([[1e-12, " pg"], [1e-9, " ng"], [1e-6, " µg"], [1e-3, " mg"], [1, " g"], [1e3, " kg"], [1e6, " t"], [1e9, " kt"], [1e12, " Mt"]], " g", 2);
exports.grams = grams;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js"}],"../../node_modules/@thi.ng/strings/wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = void 0;

var _memoize = require("@thi.ng/memoize");

/**
 * Returns a `Stringer` which wrap inputs with given `pad` string on
 * both sides.
 */
const wrap = (0, _memoize.memoizeJ)(pad => x => pad + x + pad);
exports.wrap = wrap;
},{"@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js"}],"../../node_modules/@thi.ng/strings/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _case = require("./case");

Object.keys(_case).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _case[key];
    }
  });
});

var _center = require("./center");

Object.keys(_center).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _center[key];
    }
  });
});

var _float = require("./float");

Object.keys(_float).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _float[key];
    }
  });
});

var _format = require("./format");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});

var _hollerith = require("./hollerith");

Object.keys(_hollerith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hollerith[key];
    }
  });
});

var _padLeft = require("./pad-left");

Object.keys(_padLeft).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padLeft[key];
    }
  });
});

var _padRight = require("./pad-right");

Object.keys(_padRight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padRight[key];
    }
  });
});

var _parse = require("./parse");

Object.keys(_parse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parse[key];
    }
  });
});

var _percent = require("./percent");

Object.keys(_percent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _percent[key];
    }
  });
});

var _radix = require("./radix");

Object.keys(_radix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _radix[key];
    }
  });
});

var _range = require("./range");

Object.keys(_range).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range[key];
    }
  });
});

var _repeat = require("./repeat");

Object.keys(_repeat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeat[key];
    }
  });
});

var _slugify = require("./slugify");

Object.keys(_slugify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _slugify[key];
    }
  });
});

var _splice = require("./splice");

Object.keys(_splice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _splice[key];
    }
  });
});

var _truncate = require("./truncate");

Object.keys(_truncate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _truncate[key];
    }
  });
});

var _truncateLeft = require("./truncate-left");

Object.keys(_truncateLeft).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _truncateLeft[key];
    }
  });
});

var _units = require("./units");

Object.keys(_units).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _units[key];
    }
  });
});

var _wrap = require("./wrap");

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrap[key];
    }
  });
});
},{"./case":"../../node_modules/@thi.ng/strings/case.js","./center":"../../node_modules/@thi.ng/strings/center.js","./float":"../../node_modules/@thi.ng/strings/float.js","./format":"../../node_modules/@thi.ng/strings/format.js","./hollerith":"../../node_modules/@thi.ng/strings/hollerith.js","./pad-left":"../../node_modules/@thi.ng/strings/pad-left.js","./pad-right":"../../node_modules/@thi.ng/strings/pad-right.js","./parse":"../../node_modules/@thi.ng/strings/parse.js","./percent":"../../node_modules/@thi.ng/strings/percent.js","./radix":"../../node_modules/@thi.ng/strings/radix.js","./range":"../../node_modules/@thi.ng/strings/range.js","./repeat":"../../node_modules/@thi.ng/strings/repeat.js","./slugify":"../../node_modules/@thi.ng/strings/slugify.js","./splice":"../../node_modules/@thi.ng/strings/splice.js","./truncate":"../../node_modules/@thi.ng/strings/truncate.js","./truncate-left":"../../node_modules/@thi.ng/strings/truncate-left.js","./units":"../../node_modules/@thi.ng/strings/units.js","./wrap":"../../node_modules/@thi.ng/strings/wrap.js"}],"../../node_modules/@thi.ng/color/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INV8BIT = exports.PC = exports.FF = exports.XYZ_RGB = exports.RGB_XYZ = exports.SRGB_ALPHA = exports.Hue = exports.RGB_LUMINANCE = exports.YELLOW = exports.MAGENTA = exports.CYAN = exports.BLUE = exports.GREEN = exports.RED = exports.WHITE = exports.BLACK = exports.ColorMode = void 0;

var _strings = require("@thi.ng/strings");

var ColorMode;
exports.ColorMode = ColorMode;

(function (ColorMode) {
  ColorMode[ColorMode["RGBA"] = 0] = "RGBA";
  ColorMode[ColorMode["HCYA"] = 1] = "HCYA";
  ColorMode[ColorMode["HSVA"] = 2] = "HSVA";
  ColorMode[ColorMode["HSLA"] = 3] = "HSLA";
  ColorMode[ColorMode["HSIA"] = 4] = "HSIA";
  ColorMode[ColorMode["INT32"] = 5] = "INT32";
  ColorMode[ColorMode["CSS"] = 6] = "CSS";
  ColorMode[ColorMode["XYZA"] = 7] = "XYZA";
  ColorMode[ColorMode["YCBCRA"] = 8] = "YCBCRA";
})(ColorMode || (exports.ColorMode = ColorMode = {})); // RGBA constants


const BLACK = Object.freeze([0, 0, 0, 1]);
exports.BLACK = BLACK;
const WHITE = Object.freeze([1, 1, 1, 1]);
exports.WHITE = WHITE;
const RED = Object.freeze([1, 0, 0, 1]);
exports.RED = RED;
const GREEN = Object.freeze([0, 1, 0, 1]);
exports.GREEN = GREEN;
const BLUE = Object.freeze([0, 0, 1, 1]);
exports.BLUE = BLUE;
const CYAN = Object.freeze([0, 1, 1, 1]);
exports.CYAN = CYAN;
const MAGENTA = Object.freeze([1, 0, 1, 1]);
exports.MAGENTA = MAGENTA;
const YELLOW = Object.freeze([1, 1, 0, 1]);
exports.YELLOW = YELLOW;
const RGB_LUMINANCE = [0.299, 0.587, 0.114]; // Hue names

exports.RGB_LUMINANCE = RGB_LUMINANCE;
var Hue;
exports.Hue = Hue;

(function (Hue) {
  Hue[Hue["RED"] = 0] = "RED";
  Hue[Hue["ORANGE"] = 1] = "ORANGE";
  Hue[Hue["YELLOW"] = 2] = "YELLOW";
  Hue[Hue["CHARTREUSE"] = 3] = "CHARTREUSE";
  Hue[Hue["GREEN"] = 4] = "GREEN";
  Hue[Hue["SPRING_GREEN"] = 5] = "SPRING_GREEN";
  Hue[Hue["CYAN"] = 6] = "CYAN";
  Hue[Hue["AZURE"] = 7] = "AZURE";
  Hue[Hue["BLUE"] = 8] = "BLUE";
  Hue[Hue["VIOLET"] = 9] = "VIOLET";
  Hue[Hue["MAGENTA"] = 10] = "MAGENTA";
  Hue[Hue["ROSE"] = 11] = "ROSE";
})(Hue || (exports.Hue = Hue = {})); // internal helpers


const SRGB_ALPHA = 0.055;
exports.SRGB_ALPHA = SRGB_ALPHA;
const RGB_XYZ = [0.4124564, 0.3575761, 0.1804375, 0.2126729, 0.7151522, 0.072175, 0.0193339, 0.119192, 0.9503041];
exports.RGB_XYZ = RGB_XYZ;
const XYZ_RGB = [3.2404542, -1.5371385, -0.4985314, -0.969266, 1.8760108, 0.041556, 0.0556434, -0.2040259, 1.0572252];
exports.XYZ_RGB = XYZ_RGB;
const FF = (0, _strings.float)(2);
exports.FF = FF;
const PC = (0, _strings.percent)(2);
exports.PC = PC;
const INV8BIT = 1 / 0xff;
exports.INV8BIT = INV8BIT;
},{"@thi.ng/strings":"../../node_modules/@thi.ng/strings/index.js"}],"../../node_modules/@thi.ng/color/names.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSS_NAMES = void 0;
const CSS_NAMES = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  grey: "808080",
  green: "008000",
  greenyellow: "adff2f",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
exports.CSS_NAMES = CSS_NAMES;
},{}],"../../node_modules/@thi.ng/math/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crossing = exports.EPS = exports.SIXTH = exports.TWO_THIRD = exports.THIRD = exports.SQRT2_3 = exports.SQRT2_2 = exports.SQRT3 = exports.SQRT2 = exports.PHI = exports.RAD2DEG = exports.DEG2RAD = exports.INV_HALF_PI = exports.INV_TAU = exports.INV_PI = exports.SIXTH_PI = exports.QUARTER_PI = exports.THIRD_PI = exports.HALF_PI = exports.TAU = exports.PI = void 0;
const PI = Math.PI;
exports.PI = PI;
const TAU = PI * 2;
exports.TAU = TAU;
const HALF_PI = PI / 2;
exports.HALF_PI = HALF_PI;
const THIRD_PI = PI / 3;
exports.THIRD_PI = THIRD_PI;
const QUARTER_PI = PI / 4;
exports.QUARTER_PI = QUARTER_PI;
const SIXTH_PI = PI / 6;
exports.SIXTH_PI = SIXTH_PI;
const INV_PI = 1 / PI;
exports.INV_PI = INV_PI;
const INV_TAU = 1 / TAU;
exports.INV_TAU = INV_TAU;
const INV_HALF_PI = 1 / HALF_PI;
exports.INV_HALF_PI = INV_HALF_PI;
const DEG2RAD = PI / 180;
exports.DEG2RAD = DEG2RAD;
const RAD2DEG = 180 / PI;
exports.RAD2DEG = RAD2DEG;
const PHI = (1 + Math.sqrt(5)) / 2;
exports.PHI = PHI;
const SQRT2 = Math.SQRT2;
exports.SQRT2 = SQRT2;
const SQRT3 = Math.sqrt(3);
exports.SQRT3 = SQRT3;
const SQRT2_2 = SQRT2 / 2;
exports.SQRT2_2 = SQRT2_2;
const SQRT2_3 = SQRT3 / 2;
exports.SQRT2_3 = SQRT2_3;
const THIRD = 1 / 3;
exports.THIRD = THIRD;
const TWO_THIRD = 2 / 3;
exports.TWO_THIRD = TWO_THIRD;
const SIXTH = 1 / 6;
exports.SIXTH = SIXTH;
let EPS = 1e-6;
exports.EPS = EPS;
var Crossing;
exports.Crossing = Crossing;

(function (Crossing) {
  /**
   * lines A & B are equal
   */
  Crossing[Crossing["EQUAL"] = 0] = "EQUAL";
  /**
   * lines A & B are flat (all same values)
   */

  Crossing[Crossing["FLAT"] = 1] = "FLAT";
  /**
   * line A crossed under B
   */

  Crossing[Crossing["UNDER"] = 2] = "UNDER";
  /**
   * line A crossed over B
   */

  Crossing[Crossing["OVER"] = 3] = "OVER";
  Crossing[Crossing["OTHER"] = 4] = "OTHER";
})(Crossing || (exports.Crossing = Crossing = {}));
},{}],"../../node_modules/@thi.ng/math/abs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = exports.absDiff = void 0;

var _api = require("./api");

const absDiff = (x, y) => Math.abs(x - y);

exports.absDiff = absDiff;

const sign = (x, eps = _api.EPS) => x > eps ? 1 : x < -eps ? -1 : 0;

exports.sign = sign;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/angle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastSin = exports.fastCos = exports.normCos = exports.loc = exports.cot = exports.sec = exports.csc = exports.rad = exports.deg = exports.quadrant = exports.atan2Abs = exports.angleDist = exports.absInnerAngle = exports.absTheta = exports.cossin = exports.sincos = void 0;

var _api = require("./api");

/**
 * Returns vector of `[sin(theta)*n, cos(theta)*n]`.
 *
 * @param theta
 * @param n
 */
const sincos = (theta, n = 1) => [Math.sin(theta) * n, Math.cos(theta) * n];
/**
 * Returns vector of `[cos(theta)*n, sin(theta)*n]`.
 *
 * @param theta
 * @param n
 */


exports.sincos = sincos;

const cossin = (theta, n = 1) => [Math.cos(theta) * n, Math.sin(theta) * n];
/**
 * Projects `theta` into [0 .. 2π] interval.
 *
 * @param theta
 */


exports.cossin = cossin;

const absTheta = theta => (theta %= _api.TAU, theta < 0 ? _api.TAU + theta : theta);

exports.absTheta = absTheta;

const absInnerAngle = theta => (theta = Math.abs(theta), theta > _api.PI ? _api.TAU - theta : theta);
/**
 * Returns smallest absolute angle difference between `a` and `b`.
 * Result will be in [0 .. π] interval.
 *
 * @param a
 * @param b
 */


exports.absInnerAngle = absInnerAngle;

const angleDist = (a, b) => absInnerAngle(absTheta(b % _api.TAU - a % _api.TAU));
/**
 * Like `Math.atan2`, but always returns angle in [0 .. TAU) interval.
 *
 * @param y
 * @param x
 */


exports.angleDist = angleDist;

const atan2Abs = (y, x) => absTheta(Math.atan2(y, x));
/**
 * Returns quadrant ID (0-3) of given angle (in radians).
 *
 * @param theta
 */


exports.atan2Abs = atan2Abs;

const quadrant = theta => absTheta(theta) * _api.INV_HALF_PI | 0;
/**
 * Converts angle to degrees.
 *
 * @param theta angle in radians
 */


exports.quadrant = quadrant;

const deg = theta => theta * _api.RAD2DEG;
/**
 * Converts angle to radians.
 *
 * @param theta angle in degrees
 */


exports.deg = deg;

const rad = theta => theta * _api.DEG2RAD;
/**
 * Cosecant. Approaches `±Infinity` for `theta` near multiples of π.
 *
 * @param theta angle in radians
 */


exports.rad = rad;

const csc = theta => 1 / Math.sin(theta);
/**
 * Secant. Approaches `±Infinity` for `theta` near π/2 ± nπ
 *
 * @param theta angle in radians
 */


exports.csc = csc;

const sec = theta => 1 / Math.cos(theta);
/**
 * Cotangent. Approaches `±Infinity` for `theta` near multiples of π.
 *
 * @param theta angle in radians
 */


exports.sec = sec;

const cot = theta => 1 / Math.tan(theta);
/**
 * Law of Cosines. Takes length of two sides of a triangle and the inner
 * angle (in radians) between them. Returns length of third side.
 *
 * @param a
 * @param b
 * @param gamma
 */


exports.cot = cot;

const loc = (a, b, gamma) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(gamma));
/**
 * Approximates cos(xπ) for x in [-1,1]
 *
 * @param x
 */


exports.loc = loc;

const normCos = x => {
  const x2 = x * x;
  return 1.0 + x2 * (-4 + 2 * x2);
};

exports.normCos = normCos;

const __fastCos = x => {
  const x2 = x * x;
  return 0.99940307 + x2 * (-0.49558072 + 0.03679168 * x2);
};
/**
 * Fast cosine approximation using `normCos()` (polynomial). Max. error
 * ~0.00059693
 *
 * In [0 .. 2π] interval, approx. 18-20% faster than `Math.cos` on V8.
 *
 * @param theta in radians
 */


const fastCos = theta => {
  theta %= _api.TAU;
  theta < 0 && (theta = -theta);

  switch (theta * _api.INV_HALF_PI | 0) {
    case 0:
      return __fastCos(theta);

    case 1:
      return -__fastCos(_api.PI - theta);

    case 2:
      return -__fastCos(theta - _api.PI);

    default:
      return __fastCos(_api.TAU - theta);
  }
};
/**
 * @see fastCos
 *
 * @param theta in radians
 */


exports.fastCos = fastCos;

const fastSin = theta => fastCos(_api.HALF_PI - theta);

exports.fastSin = fastSin;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/eqdelta.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eqDeltaFixed = exports.eqDelta = void 0;

var _api = require("./api");

const abs = Math.abs;
const max = Math.max;
/**
 * Checks if `|a - b| <= ε` and adapts given epsilon value to the given
 * arguments:
 *
 * ε is factored with the largest absolute value of `a` or `b` (but
 * never lesser than the given `eps` value):
 *
 * `ε = ε * max(1, |a|, |b|)`
 *
 * @param a left value
 * @param b right value
 * @param eps epsilon / tolerance, default `1e-6`
 */

const eqDelta = (a, b, eps = _api.EPS) => abs(a - b) <= eps * max(1, abs(a), abs(b));
/**
 * Similar to `eqDelta()`, but used given `eps` as is.
 *
 * @param a left value
 * @param b right value
 * @param eps epsilon / tolerance, default `1e-6`
 */


exports.eqDelta = eqDelta;

const eqDeltaFixed = (a, b, eps = _api.EPS) => abs(a - b) <= eps;

exports.eqDeltaFixed = eqDeltaFixed;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/crossing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classifyCrossing = exports.isCrossUnder = exports.isCrossOver = void 0;

var _api = require("./api");

var _eqdelta = require("./eqdelta");

/**
 * Returns true if line A rises up over B.
 *
 * ```
 * b1  a2
 *   \/
 *   /\
 * a1  b2
 * ```
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 */
const isCrossOver = (a1, a2, b1, b2) => a1 < b1 && a2 > b2;
/**
 * Returns true if line A rises up over B.
 *
 * ```
 * a1  b2
 *   \/
 *   /\
 * b1  a2
 * ```
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 */


exports.isCrossOver = isCrossOver;

const isCrossUnder = (a1, a2, b1, b2) => a1 > b1 && a2 < b2;
/**
 * Returns `Crossing` classifier indicating the relationship of line A
 * to line B. The optional epsilon value is used to determine if both
 * lines are considered equal or flat.
 *
 * @see isCrossUp
 * @see isCrossDown
 * @see Crossing
 *
 * @param a1
 * @param a2
 * @param b1
 * @param b2
 * @param eps
 */


exports.isCrossUnder = isCrossUnder;

const classifyCrossing = (a1, a2, b1, b2, eps = _api.EPS) => {
  if (isCrossOver(a1, a2, b1, b2)) {
    return 3
    /* OVER */
    ;
  } else if (isCrossUnder(a1, a2, b1, b2)) {
    return 2
    /* UNDER */
    ;
  }

  return (0, _eqdelta.eqDelta)(a1, b1, eps) && (0, _eqdelta.eqDelta)(a2, b2, eps) ? (0, _eqdelta.eqDelta)(a1, b2, eps) ? 1
  /* FLAT */
  : 0
  /* EQUAL */
  : 4
  /* OTHER */
  ;
};

exports.classifyCrossing = classifyCrossing;
},{"./api":"../../node_modules/@thi.ng/math/api.js","./eqdelta":"../../node_modules/@thi.ng/math/eqdelta.js"}],"../../node_modules/@thi.ng/math/extrema.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maximaIndices = exports.minimaIndices = exports.maximaIndex = exports.minimaIndex = exports.isMaxima = exports.isMinima = void 0;

/**
 * Returns true if `b` is a local minima, i.e. iff a > b and b < c.
 *
 * @param a
 * @param b
 * @param c
 */
const isMinima = (a, b, c) => a > b && b < c;
/**
 * Returns true if `b` is a local maxima, i.e. iff a < b and b > c.
 *
 * @param a
 * @param b
 * @param c
 */


exports.isMinima = isMinima;

const isMaxima = (a, b, c) => a < b && b > c;

exports.isMaxima = isMaxima;

const index = (pred, values, from = 0, to = values.length) => {
  to--;

  for (let i = from + 1; i < to; i++) {
    if (pred(values[i - 1], values[i], values[i + 1])) {
      return i;
    }
  }

  return -1;
};
/**
 * Returns index of the first local & internal minima found in given
 * `values` array, or -1 if no such minima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


const minimaIndex = (values, from = 0, to = values.length) => index(isMinima, values, from, to);
/**
 * Returns index of the first local & internal maxima found in given
 * `values` array, or -1 if no such maxima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


exports.minimaIndex = minimaIndex;

const maximaIndex = (values, from = 0, to = values.length) => index(isMaxima, values, from, to);

exports.maximaIndex = maximaIndex;

function* indices(fn, vals, from = 0, to = vals.length) {
  while (from < to) {
    const i = fn(vals, from, to);
    if (i < 0) return;
    yield i;
    from = i + 1;
  }
}
/**
 * Returns an iterator yielding all minima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


const minimaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);
/**
 * Returns an iterator yielding all maxima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values
 * @param from
 * @param to
 */


exports.minimaIndices = minimaIndices;

const maximaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);

exports.maximaIndices = maximaIndices;
},{}],"../../node_modules/@thi.ng/math/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inOpenRange = exports.inRange = exports.foldback = exports.absMax = exports.absMin = exports.sclamp = exports.smax = exports.smin = exports.max4id = exports.max3id = exports.max2id = exports.min4id = exports.min3id = exports.min2id = exports.wrap11 = exports.wrap01 = exports.wrap = exports.clamp11 = exports.clamp01 = exports.clamp = void 0;

/**
 * Clamps value `x` to given closed interval.
 *
 * @param x value to clamp
 * @param min lower bound
 * @param max upper bound
 */
const clamp = (x, min, max) => x < min ? min : x > max ? max : x;

exports.clamp = clamp;

const clamp01 = x => x < 0 ? 0 : x > 1 ? 1 : x;

exports.clamp01 = clamp01;

const clamp11 = x => x < -1 ? -1 : x > 1 ? 1 : x;

exports.clamp11 = clamp11;

const wrap = (x, min, max) => x < min ? x - min + max : x >= max ? x - max + min : x;

exports.wrap = wrap;

const wrap01 = x => x < 0 ? x + 1 : x >= 1 ? x - 1 : x;

exports.wrap01 = wrap01;

const wrap11 = x => x < -1 ? x + 2 : x >= 1 ? x - 2 : x;

exports.wrap11 = wrap11;

const min2id = (a, b) => a <= b ? 0 : 1;

exports.min2id = min2id;

const min3id = (a, b, c) => a <= b ? a <= c ? 0 : 2 : b <= c ? 1 : 2;

exports.min3id = min3id;

const min4id = (a, b, c, d) => a <= b ? a <= c ? a <= d ? 0 : 3 : c <= d ? 2 : 3 : b <= c ? b <= d ? 1 : 3 : c <= d ? 2 : 3;

exports.min4id = min4id;

const max2id = (a, b) => a >= b ? 0 : 1;

exports.max2id = max2id;

const max3id = (a, b, c) => a >= b ? a >= c ? 0 : 2 : b >= c ? 1 : 2;

exports.max3id = max3id;

const max4id = (a, b, c, d) => a >= b ? a >= c ? a >= d ? 0 : 3 : c >= d ? 2 : 3 : b >= c ? b >= d ? 1 : 3 : c >= d ? 2 : 3;
/**
 * See `smax()`.
 *
 * @param a
 * @param b
 * @param k smooth exponent (MUST be > 0)
 */


exports.max4id = max4id;

const smin = (a, b, k) => smax(a, b, -k);
/**
 * Smooth maximum. Note: Result values will be slightly larger than max
 * value near max(a,b) + eps due to exponential decay. Higher `k` values
 * reduce the error, but also reduce the smoothing. Recommended k=16.
 *
 * https://en.wikipedia.org/wiki/Smooth_maximum
 *
 * @param a
 * @param b
 * @param k smooth exponent (MUST be > 0)
 */


exports.smin = smin;

const smax = (a, b, k) => {
  const ea = Math.exp(a * k);
  const eb = Math.exp(b * k);
  return (a * ea + b * eb) / (ea + eb);
};
/**
 * Same as `smin(smax(x, min, k), max, k)`.
 *
 * @param x
 * @param min
 * @param max
 * @param k
 */


exports.smax = smax;

const sclamp = (x, min, max, k) => smin(smax(x, min, k), max, k);

exports.sclamp = sclamp;

const absMin = (a, b) => Math.abs(a) < Math.abs(b) ? a : b;

exports.absMin = absMin;

const absMax = (a, b) => Math.abs(a) > Math.abs(b) ? a : b;
/**
 * http://www.musicdsp.org/showone.php?id=203
 *
 * @param e
 * @param x
 */


exports.absMax = absMax;

const foldback = (e, x) => x < -e || x > e ? Math.abs(Math.abs((x - e) % (4 * e)) - 2 * e) - e : x;
/**
 * Returns true iff `x` is in closed interval `[min .. max]`
 *
 * @param x
 * @param min
 * @param max
 */


exports.foldback = foldback;

const inRange = (x, min, max) => x >= min && x <= max;
/**
 * Returns true iff `x` is in open interval `(min .. max)`
 *
 * @param x
 * @param min
 * @param max
 */


exports.inRange = inRange;

const inOpenRange = (x, min, max) => x > min && x < max;

exports.inOpenRange = inOpenRange;
},{}],"../../node_modules/@thi.ng/math/fit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fit11 = exports.fit10 = exports.fit01 = exports.fitClamped = exports.fit = exports.norm = void 0;

var _interval = require("./interval");

/**
 * Returns normalized value of `x` WRT to interval `a .. b`. If `a`
 * equals `b`, returns 0.
 *
 * @param x
 * @param a
 * @param b
 */
const norm = (x, a, b) => b !== a ? (x - a) / (b - a) : 0;

exports.norm = norm;

const fit = (x, a, b, c, d) => c + (d - c) * norm(x, a, b);

exports.fit = fit;

const fitClamped = (x, a, b, c, d) => c + (d - c) * (0, _interval.clamp01)(norm(x, a, b));

exports.fitClamped = fitClamped;

const fit01 = (x, a, b) => a + (b - a) * (0, _interval.clamp01)(x);

exports.fit01 = fit01;

const fit10 = (x, a, b) => b + (a - b) * (0, _interval.clamp01)(x);

exports.fit10 = fit10;

const fit11 = (x, a, b) => a + (b - a) * (0.5 + 0.5 * (0, _interval.clamp11)(x));

exports.fit11 = fit11;
},{"./interval":"../../node_modules/@thi.ng/math/interval.js"}],"../../node_modules/@thi.ng/math/int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rshiftu32 = exports.lshiftu32 = exports.notu32 = exports.xoru32 = exports.oru32 = exports.andu32 = exports.subu32 = exports.mulu32 = exports.divu32 = exports.addu32 = exports.rshiftu16 = exports.lshiftu16 = exports.notu16 = exports.xoru16 = exports.oru16 = exports.andu16 = exports.subu16 = exports.mulu16 = exports.divu16 = exports.addu16 = exports.rshiftu8 = exports.lshiftu8 = exports.notu8 = exports.xoru8 = exports.oru8 = exports.andu8 = exports.subu8 = exports.mulu8 = exports.divu8 = exports.addu8 = exports.noti32 = exports.rshifti32 = exports.lshifti32 = exports.xori32 = exports.ori32 = exports.andi32 = exports.subi32 = exports.muli32 = exports.divi32 = exports.addi32 = exports.rshifti16 = exports.lshifti16 = exports.noti16 = exports.xori16 = exports.ori16 = exports.andi16 = exports.subi16 = exports.muli16 = exports.divi16 = exports.addi16 = exports.rshifti8 = exports.lshifti8 = exports.noti8 = exports.xori8 = exports.ori8 = exports.andi8 = exports.subi8 = exports.muli8 = exports.divi8 = exports.addi8 = exports.signExtend16 = exports.signExtend8 = void 0;
const M8 = 0xff;
const M16 = 0xffff;

const signExtend8 = a => (a &= M8, a & 0x80 ? a | ~M8 : a);

exports.signExtend8 = signExtend8;

const signExtend16 = a => (a &= M16, a & 0x8000 ? a | ~M16 : a);

exports.signExtend16 = signExtend16;

const addi8 = (a, b) => signExtend8((a | 0) + (b | 0));

exports.addi8 = addi8;

const divi8 = (a, b) => signExtend8((a | 0) / (b | 0));

exports.divi8 = divi8;

const muli8 = (a, b) => signExtend8((a | 0) * (b | 0));

exports.muli8 = muli8;

const subi8 = (a, b) => signExtend8((a | 0) - (b | 0));

exports.subi8 = subi8;

const andi8 = (a, b) => signExtend8((a | 0) & (b | 0));

exports.andi8 = andi8;

const ori8 = (a, b) => signExtend8(a | 0 | (b | 0));

exports.ori8 = ori8;

const xori8 = (a, b) => signExtend8((a | 0) ^ (b | 0));

exports.xori8 = xori8;

const noti8 = a => signExtend8(~a); // prettier-ignore


exports.noti8 = noti8;

const lshifti8 = (a, b) => signExtend8((a | 0) << (b | 0)); // prettier-ignore


exports.lshifti8 = lshifti8;

const rshifti8 = (a, b) => signExtend8((a | 0) >> (b | 0));

exports.rshifti8 = rshifti8;

const addi16 = (a, b) => signExtend16((a | 0) + (b | 0));

exports.addi16 = addi16;

const divi16 = (a, b) => signExtend16((a | 0) / (b | 0));

exports.divi16 = divi16;

const muli16 = (a, b) => signExtend16((a | 0) * (b | 0));

exports.muli16 = muli16;

const subi16 = (a, b) => signExtend16((a | 0) - (b | 0));

exports.subi16 = subi16;

const andi16 = (a, b) => signExtend16((a | 0) & (b | 0));

exports.andi16 = andi16;

const ori16 = (a, b) => signExtend16(a | 0 | (b | 0));

exports.ori16 = ori16;

const xori16 = (a, b) => signExtend16((a | 0) ^ (b | 0));

exports.xori16 = xori16;

const noti16 = a => signExtend16(~a); // prettier-ignore


exports.noti16 = noti16;

const lshifti16 = (a, b) => signExtend16((a | 0) << (b | 0)); // prettier-ignore


exports.lshifti16 = lshifti16;

const rshifti16 = (a, b) => signExtend16((a | 0) >> (b | 0));

exports.rshifti16 = rshifti16;

const addi32 = (a, b) => (a | 0) + (b | 0) | 0;

exports.addi32 = addi32;

const divi32 = (a, b) => (a | 0) / (b | 0) | 0;

exports.divi32 = divi32;

const muli32 = (a, b) => (a | 0) * (b | 0) | 0;

exports.muli32 = muli32;

const subi32 = (a, b) => (a | 0) - (b | 0) | 0;

exports.subi32 = subi32;

const andi32 = (a, b) => (a | 0) & (b | 0);

exports.andi32 = andi32;

const ori32 = (a, b) => a | 0 | (b | 0);

exports.ori32 = ori32;

const xori32 = (a, b) => (a | 0) ^ (b | 0);

exports.xori32 = xori32;

const lshifti32 = (a, b) => (a | 0) << (b | 0);

exports.lshifti32 = lshifti32;

const rshifti32 = (a, b) => (a | 0) >> (b | 0);

exports.rshifti32 = rshifti32;

const noti32 = a => ~a; // prettier-ignore


exports.noti32 = noti32;

const addu8 = (a, b) => (a & M8) + (b & M8) & M8; // prettier-ignore


exports.addu8 = addu8;

const divu8 = (a, b) => (a & M8) / (b & M8) & M8; // prettier-ignore


exports.divu8 = divu8;

const mulu8 = (a, b) => (a & M8) * (b & M8) & M8; // prettier-ignore


exports.mulu8 = mulu8;

const subu8 = (a, b) => (a & M8) - (b & M8) & M8; // prettier-ignore


exports.subu8 = subu8;

const andu8 = (a, b) => a & M8 & (b & M8) & M8; // prettier-ignore


exports.andu8 = andu8;

const oru8 = (a, b) => (a & M8 | b & M8) & M8; // prettier-ignore


exports.oru8 = oru8;

const xoru8 = (a, b) => (a & M8 ^ b & M8) & M8;

exports.xoru8 = xoru8;

const notu8 = a => ~a & M8;

exports.notu8 = notu8;

const lshiftu8 = (a, b) => (a & M8) << (b & M8) & M8;

exports.lshiftu8 = lshiftu8;

const rshiftu8 = (a, b) => (a & M8) >>> (b & M8) & M8; // prettier-ignore


exports.rshiftu8 = rshiftu8;

const addu16 = (a, b) => (a & M16) + (b & M16) & M16; // prettier-ignore


exports.addu16 = addu16;

const divu16 = (a, b) => (a & M16) / (b & M16) & M16; // prettier-ignore


exports.divu16 = divu16;

const mulu16 = (a, b) => (a & M16) * (b & M16) & M16; // prettier-ignore


exports.mulu16 = mulu16;

const subu16 = (a, b) => (a & M16) - (b & M16) & M16; // prettier-ignore


exports.subu16 = subu16;

const andu16 = (a, b) => a & M16 & (b & M16) & M16; // prettier-ignore


exports.andu16 = andu16;

const oru16 = (a, b) => (a & M16 | b & M16) & M16; // prettier-ignore


exports.oru16 = oru16;

const xoru16 = (a, b) => (a & M16 ^ b & M16) & M16;

exports.xoru16 = xoru16;

const notu16 = a => ~a & M16; // prettier-ignore


exports.notu16 = notu16;

const lshiftu16 = (a, b) => (a & M16) << (b & M16) & M16; // prettier-ignore


exports.lshiftu16 = lshiftu16;

const rshiftu16 = (a, b) => (a & M16) >>> (b & M16) & M16;

exports.rshiftu16 = rshiftu16;

const addu32 = (a, b) => (a >>> 0) + (b >>> 0) >>> 0;

exports.addu32 = addu32;

const divu32 = (a, b) => (a >>> 0) / (b >>> 0) >>> 0;

exports.divu32 = divu32;

const mulu32 = (a, b) => (a >>> 0) * (b >>> 0) >>> 0;

exports.mulu32 = mulu32;

const subu32 = (a, b) => (a >>> 0) - (b >>> 0) >>> 0;

exports.subu32 = subu32;

const andu32 = (a, b) => (a >>> 0 & b >>> 0) >>> 0;

exports.andu32 = andu32;

const oru32 = (a, b) => (a >>> 0 | b >>> 0) >>> 0;

exports.oru32 = oru32;

const xoru32 = (a, b) => (a >>> 0 ^ b >>> 0) >>> 0;

exports.xoru32 = xoru32;

const notu32 = a => ~a >>> 0; // prettier-ignore


exports.notu32 = notu32;

const lshiftu32 = (a, b) => a >>> 0 << (b >>> 0) >>> 0; // prettier-ignore


exports.lshiftu32 = lshiftu32;

const rshiftu32 = (a, b) => a >>> 0 >>> (b >>> 0) >>> 0;

exports.rshiftu32 = rshiftu32;
},{}],"../../node_modules/@thi.ng/math/min-error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minError = void 0;

var _api = require("./api");

/**
 * Recursively evaluates function `fn` for `res` uniformly spaced values
 * `t` in the closed parametric interval `[start,end]` and computes
 * corresponding sample values `p`. For each `p` then calls `error`
 * function to compute the error to query target value `q` and
 * eventually returns the `t` producing the overall minimum error. At
 * each level of recursion the search interval is increasingly narrowed
 * / centered around the best `t` of the current iteration.
 *
 * The search is terminated early if the best error value is less than
 * `eps`.
 *
 * The interval end points `start` and `end` MUST be normalized values
 * in the closed [0,1] interval.
 *
 * @param fn function to evaluate
 * @param error error function
 * @param q target value
 * @param res number of samples per interval
 * @param iter max number of iterations / recursion limit
 * @param start interval start
 * @param end interval end
 */
const minError = (fn, error, q, res = 16, iter = 8, start = 0, end = 1, eps = _api.EPS) => {
  if (iter <= 0) return (start + end) / 2;
  const delta = (end - start) / res;
  let minT = start;
  let minE = Infinity;

  for (let i = 0; i <= res; i++) {
    const t = start + i * delta;
    const e = error(q, fn(t));

    if (e < minE) {
      if (e <= eps) return t;
      minE = e;
      minT = t;
    }
  }

  return minError(fn, error, q, res, iter - 1, Math.max(minT - delta, 0), Math.min(minT + delta, 1));
};

exports.minError = minError;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigmoid11 = exports.sigmoid = exports.sinc = exports.cubicPulse = exports.parabola = exports.gain = exports.impulse = exports.ease = exports.bounce = exports.decimated = exports.cosine = exports.circular = exports.tween = exports.mixCubic = exports.mixQuadratic = exports.mixBilinear = exports.mix = void 0;

var _api = require("./api");

const mix = (a, b, t) => a + (b - a) * t;
/**
 * ```
 * c    d
 * +----+
 * |    |
 * +----+
 * a    b
 * ```
 *
 * @param a BL value
 * @param b BR value
 * @param c TL value
 * @param d TR value
 * @param u 1st interpolation factor
 * @param v 2nd interpolation factor
 */


exports.mix = mix;

const mixBilinear = (a, b, c, d, u, v) => mix(mix(a, b, u), mix(c, d, u), v);

exports.mixBilinear = mixBilinear;

const mixQuadratic = (a, b, c, t) => {
  const s = 1 - t;
  return a * s * s + b * 2 * s * t + c * t * t;
};

exports.mixQuadratic = mixQuadratic;

const mixCubic = (a, b, c, d, t) => {
  const t2 = t * t;
  const s = 1 - t;
  const s2 = s * s;
  return a * s2 * s + b * 3 * s2 * t + c * 3 * t2 * s + d * t2 * t;
};

exports.mixCubic = mixCubic;

const tween = (f, from, to) => t => mix(from, to, f(t));
/**
 * Circular interpolation: `sqrt(1 - (1 - t)^2)`
 *
 * @param t interpolation factor (0.0 .. 1.0)
 */


exports.tween = tween;

const circular = t => {
  t = 1 - t;
  return Math.sqrt(1 - t * t);
};

exports.circular = circular;

const cosine = t => 1 - (Math.cos(t * _api.PI) * 0.5 + 0.5);

exports.cosine = cosine;

const decimated = (n, t) => Math.floor(t * n) / n;

exports.decimated = decimated;

const bounce = (k, amp, t) => {
  const tk = t * k;
  return 1 - amp * Math.sin(tk) / tk * Math.cos(t * _api.HALF_PI);
};
/**
 * HOF exponential easing.
 *
 * - `ease = 1` -> linear
 * - `ease > 1` -> ease in
 * - `ease < 1` -> ease out
 *
 * @param ease easing behavior [0.0 .. ∞]
 * @param t
 */


exports.bounce = bounce;

const ease = (ease, t) => Math.pow(t, ease);
/**
 * HOF impulse generator. Peaks at `t=1/k`
 *
 * @param k impulse width (higher values => shorter impulse)
 */


exports.ease = ease;

const impulse = (k, t) => {
  const h = k * t;
  return h * Math.exp(1 - h);
};

exports.impulse = impulse;

const gain = (k, t) => t < 0.5 ? 0.5 * Math.pow(2 * t, k) : 1 - 0.5 * Math.pow(2 - 2 * t, k);

exports.gain = gain;

const parabola = (k, t) => Math.pow(4.0 * t * (1.0 - t), k);

exports.parabola = parabola;

const cubicPulse = (w, c, t) => {
  t = Math.abs(t - c);
  return t > w ? 0 : (t /= w, 1 - t * t * (3 - 2 * t));
};

exports.cubicPulse = cubicPulse;

const sinc = (k, t) => {
  t = _api.PI * (k * t - 1.0);
  return Math.sin(t) / t;
};
/**
 * Sigmoid function for inputs in [0..1] interval.
 *
 * @param k
 * @param t
 */


exports.sinc = sinc;

const sigmoid = (k, t) => 1 / (1 + Math.exp(-k * (2 * t - 1)));
/**
 * Sigmoid function for inputs in [-1..+1] interval.
 *
 * @param k
 * @param t
 */


exports.sigmoid = sigmoid;

const sigmoid11 = (k, t) => 1 / (1 + Math.exp(-k * t));

exports.sigmoid11 = sigmoid11;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/prec.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundEps = exports.roundTo = exports.trunc = exports.fract = exports.fmod = void 0;

var _api = require("./api");

/**
 * Returns `a - b * floor(a/b)`
 *
 * @param a
 * @param b
 */
const fmod = (a, b) => a - b * Math.floor(a / b);

exports.fmod = fmod;

const fract = x => x - Math.floor(x);

exports.fract = fract;

const trunc = x => x < 0 ? Math.ceil(x) : Math.floor(x);

exports.trunc = trunc;

const roundTo = (x, prec = 1) => Math.round(x / prec) * prec;
/**
 * Only rounds `x` to nearest int if `fract(x)` < `eps` or > `1-eps`.
 *
 * @param x
 * @param eps
 */


exports.roundTo = roundTo;

const roundEps = (x, eps = _api.EPS) => {
  const f = fract(x);
  return f <= eps || f >= 1 - eps ? Math.round(x) : x;
};

exports.roundEps = roundEps;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/ratio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyRatio = void 0;

const simplifyRatio = (num, denom) => {
  let e1 = Math.abs(num);
  let e2 = Math.abs(denom);

  while (true) {
    if (e1 < e2) {
      const t = e1;
      e1 = e2;
      e2 = t;
    }

    const r = e1 % e2;

    if (r) {
      e1 = r;
    } else {
      return [num / e2, denom / e2];
    }
  }
};

exports.simplifyRatio = simplifyRatio;
},{}],"../../node_modules/@thi.ng/math/solve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solveCubic = exports.solveQuadratic = exports.solveLinear = exports.derivative = void 0;

var _api = require("./api");

/**
 * Produces a new function which computes derivative of the given
 * single-arg function. The extra optional arg `eps` is used to
 * define the step width for computing derived values:
 *
 * `f'(x) = (f(x + eps) - f(x)) / eps`
 *
 * The original function is assumed to be fully differentiable
 * in the interval the returned function is going to be used.
 * No validity checks of any form are done.
 *
 * https://en.wikipedia.org/wiki/Derivative#Continuity_and_differentiability
 *
 * @param fn
 * @param eps
 */
const derivative = (f, eps = _api.EPS) => x => (f(x + eps) - f(x)) / eps;
/**
 * Computes solution for linear equation: `ax + b = 0`.
 *
 * Note: `a` MUST NOT be zero.
 *
 * @param a slope
 * @param b constant offset
 */


exports.derivative = derivative;

const solveLinear = (a, b) => -b / a;
/**
 * Computes solutions for quadratic equation: `ax^2 + bx + c = 0`.
 * Returns array of real solutions.
 * Note: `a` MUST NOT be zero. If the quadratic term is missing,
 * use `solveLinear` instead.
 *
 * https://en.wikipedia.org/wiki/Quadratic_function
 * https://en.wikipedia.org/wiki/Quadratic_equation
 *
 * @param a quadratic coefficient
 * @param b linear coefficient
 * @param c constant offset
 * @param eps tolerance to determine multiple roots
 */


exports.solveLinear = solveLinear;

const solveQuadratic = (a, b, c, eps = 1e-9) => {
  const d = 2 * a;
  let r = b * b - 4 * a * c;
  return r < 0 ? [] : r < eps ? [-b / d] : (r = Math.sqrt(r), [(-b - r) / d, (-b + r) / d]);
};
/**
 * Computes solutions for quadratic equation: `ax^3 + bx^2 + c*x + d = 0`.
 * Returns array of solutions, both real & imaginary.
 * Note: `a` MUST NOT be zero. If the cubic term is missing (i.e. zero),
 * use `solveQuadratic` or `solveLinear` instead.
 *
 * https://en.wikipedia.org/wiki/Cubic_function
 *
 * @param a cubic coefficient
 * @param b quadratic coefficient
 * @param c linear coefficient
 * @param d constant offset
 * @param eps tolerance to determine multiple roots
 */


exports.solveQuadratic = solveQuadratic;

const solveCubic = (a, b, c, d, eps = 1e-9) => {
  const aa = a * a;
  const bb = b * b;
  const ba3 = b / (3 * a);
  const p = (3 * a * c - bb) / (3 * aa);
  const q = (2 * bb * b - 9 * a * b * c + 27 * aa * d) / (27 * aa * a);

  if (Math.abs(p) < eps) {
    return [Math.cbrt(-q) - ba3];
  } else if (Math.abs(q) < eps) {
    return p < 0 ? [-Math.sqrt(-p) - ba3, -ba3, Math.sqrt(-p) - ba3] : [-ba3];
  } else {
    const denom = q * q / 4 + p * p * p / 27;

    if (Math.abs(denom) < eps) {
      return [-1.5 * q / p - ba3, 3 * q / p - ba3];
    } else if (denom > 0) {
      const u = Math.cbrt(-q / 2 - Math.sqrt(denom));
      return [u - p / (3 * u) - ba3];
    } else {
      const u = 2 * Math.sqrt(-p / 3),
            t = Math.acos(3 * q / p / u) / 3,
            k = 2 * Math.PI / 3;
      return [u * Math.cos(t) - ba3, u * Math.cos(t - k) - ba3, u * Math.cos(t - 2 * k) - ba3];
    }
  }
};

exports.solveCubic = solveCubic;
},{"./api":"../../node_modules/@thi.ng/math/api.js"}],"../../node_modules/@thi.ng/math/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expStep = exports.smootherStep = exports.smoothStep = exports.step = void 0;

var _interval = require("./interval");

/**
 * Step/threshold function.
 *
 * @param edge threshold
 * @param x test value
 * @returns 0, if `x < e`, else 1
 */
const step = (edge, x) => x < edge ? 0 : 1;
/**
 * GLSL-style smoothStep threshold function.
 *
 * @param edge lower threshold
 * @param edge2 upper threshold
 * @param x test value
 * @returns 0, if `x < edge1`, 1 if `x > edge2`, else sigmoid interpolation
 */


exports.step = step;

const smoothStep = (edge, edge2, x) => {
  x = (0, _interval.clamp01)((x - edge) / (edge2 - edge));
  return (3 - 2 * x) * x * x;
};
/**
 * Similar to `smoothStep()` but using different polynomial.
 *
 * @param edge
 * @param edge2
 * @param x
 */


exports.smoothStep = smoothStep;

const smootherStep = (edge, edge2, x) => {
  x = (0, _interval.clamp01)((x - edge) / (edge2 - edge));
  return x * x * x * (x * (x * 6 - 15) + 10);
};
/**
 * Exponential ramp with variable shape, e.g.
 *
 * - S-curve: k=8, n=4
 * - Step near 1.0: k=8, n=20
 * - Pulse: k=0.005, n=-10
 * - Ease-in: k=0.5, n=0.25
 *
 * @param k
 * @param n
 * @param x
 */


exports.smootherStep = smootherStep;

const expStep = (k, n, x) => 1 - Math.exp(-k * Math.pow(x, n));

exports.expStep = expStep;
},{"./interval":"../../node_modules/@thi.ng/math/interval.js"}],"../../node_modules/@thi.ng/math/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _abs = require("./abs");

Object.keys(_abs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _abs[key];
    }
  });
});

var _angle = require("./angle");

Object.keys(_angle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _angle[key];
    }
  });
});

var _crossing = require("./crossing");

Object.keys(_crossing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _crossing[key];
    }
  });
});

var _eqdelta = require("./eqdelta");

Object.keys(_eqdelta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eqdelta[key];
    }
  });
});

var _extrema = require("./extrema");

Object.keys(_extrema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _extrema[key];
    }
  });
});

var _fit = require("./fit");

Object.keys(_fit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fit[key];
    }
  });
});

var _int = require("./int");

Object.keys(_int).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _int[key];
    }
  });
});

var _interval = require("./interval");

Object.keys(_interval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interval[key];
    }
  });
});

var _minError = require("./min-error");

Object.keys(_minError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minError[key];
    }
  });
});

var _mix = require("./mix");

Object.keys(_mix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mix[key];
    }
  });
});

var _prec = require("./prec");

Object.keys(_prec).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _prec[key];
    }
  });
});

var _ratio = require("./ratio");

Object.keys(_ratio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ratio[key];
    }
  });
});

var _solve = require("./solve");

Object.keys(_solve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _solve[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/math/api.js","./abs":"../../node_modules/@thi.ng/math/abs.js","./angle":"../../node_modules/@thi.ng/math/angle.js","./crossing":"../../node_modules/@thi.ng/math/crossing.js","./eqdelta":"../../node_modules/@thi.ng/math/eqdelta.js","./extrema":"../../node_modules/@thi.ng/math/extrema.js","./fit":"../../node_modules/@thi.ng/math/fit.js","./int":"../../node_modules/@thi.ng/math/int.js","./interval":"../../node_modules/@thi.ng/math/interval.js","./min-error":"../../node_modules/@thi.ng/math/min-error.js","./mix":"../../node_modules/@thi.ng/math/mix.js","./prec":"../../node_modules/@thi.ng/math/prec.js","./ratio":"../../node_modules/@thi.ng/math/ratio.js","./solve":"../../node_modules/@thi.ng/math/solve.js","./step":"../../node_modules/@thi.ng/math/step.js"}],"../../node_modules/@thi.ng/vectors/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.W4 = exports.Z4 = exports.Y4 = exports.X4 = exports.ZERO4 = exports.ONE4 = exports.MAX4 = exports.MIN4 = exports.Z3 = exports.Y3 = exports.X3 = exports.ZERO3 = exports.ONE3 = exports.MAX3 = exports.MIN3 = exports.Y2 = exports.X2 = exports.ZERO2 = exports.ONE2 = exports.MAX2 = exports.MIN2 = void 0;
const mi = -Infinity;
const mx = Infinity;
const MIN2 = Object.freeze([mi, mi]);
exports.MIN2 = MIN2;
const MAX2 = Object.freeze([mx, mx]);
exports.MAX2 = MAX2;
const ONE2 = Object.freeze([1, 1]);
exports.ONE2 = ONE2;
const ZERO2 = Object.freeze([0, 0]);
exports.ZERO2 = ZERO2;
const X2 = Object.freeze([1, 0]);
exports.X2 = X2;
const Y2 = Object.freeze([0, 1]);
exports.Y2 = Y2;
const MIN3 = Object.freeze([mi, mi, mi]);
exports.MIN3 = MIN3;
const MAX3 = Object.freeze([mx, mx, mx]);
exports.MAX3 = MAX3;
const ONE3 = Object.freeze([1, 1, 1]);
exports.ONE3 = ONE3;
const ZERO3 = Object.freeze([0, 0, 0]);
exports.ZERO3 = ZERO3;
const X3 = Object.freeze([1, 0, 0]);
exports.X3 = X3;
const Y3 = Object.freeze([0, 1, 0]);
exports.Y3 = Y3;
const Z3 = Object.freeze([0, 0, 1]);
exports.Z3 = Z3;
const MIN4 = Object.freeze([mi, mi, mi, mi]);
exports.MIN4 = MIN4;
const MAX4 = Object.freeze([mx, mx, mx, mx]);
exports.MAX4 = MAX4;
const ONE4 = Object.freeze([1, 1, 1, 1]);
exports.ONE4 = ONE4;
const ZERO4 = Object.freeze([0, 0, 0, 0]);
exports.ZERO4 = ZERO4;
const X4 = Object.freeze([1, 0, 0, 0]);
exports.X4 = X4;
const Y4 = Object.freeze([0, 1, 0, 0]);
exports.Y4 = Y4;
const Z4 = Object.freeze([0, 0, 1, 0]);
exports.Z4 = Z4;
const W4 = Object.freeze([0, 0, 0, 1]);
exports.W4 = W4;
},{}],"../../node_modules/@thi.ng/vectors/internal/accessors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.declareIndices = exports.declareIndex = void 0;

const declareIndex = (proto, id, idx, strided = true, defNumeric = true) => {
  const get = strided ? function () {
    return this.buf[this.offset + idx * this.stride];
  } : function () {
    return this.buf[this.offset + idx];
  };
  const set = strided ? function (n) {
    this.buf[this.offset + idx * this.stride] = n;
  } : function (n) {
    this.buf[this.offset + idx] = n;
  };
  defNumeric && Object.defineProperty(proto, idx, {
    get,
    set,
    enumerable: true
  });
  Object.defineProperty(proto, id, {
    get,
    set,
    enumerable: true
  });
};

exports.declareIndex = declareIndex;

const declareIndices = (proto, props, strided, defNumeric) => props.forEach((id, i) => declareIndex(proto, id, i, strided, defNumeric));

exports.declareIndices = declareIndices;
},{}],"../../node_modules/@thi.ng/vectors/internal/avec.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVec = void 0;

class AVec {
  constructor(buf, offset = 0, stride = 1) {
    this.buf = buf;
    this.offset = offset;
    this.stride = stride;
  }

}

exports.AVec = AVec;
},{}],"../../node_modules/@thi.ng/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogLevel = exports.SIZEOF = exports.Type = exports.NO_OP = exports.SEMAPHORE = exports.EVENT_DISABLE = exports.EVENT_ENABLE = exports.EVENT_ALL = exports.DEFAULT_EPS = void 0;
const DEFAULT_EPS = 1e-6;
exports.DEFAULT_EPS = DEFAULT_EPS;
const EVENT_ALL = "*";
exports.EVENT_ALL = EVENT_ALL;
const EVENT_ENABLE = "enable";
exports.EVENT_ENABLE = EVENT_ENABLE;
const EVENT_DISABLE = "disable";
/**
 * Internal use only. **Do NOT use in user land code!**
 */

exports.EVENT_DISABLE = EVENT_DISABLE;
const SEMAPHORE = Symbol();
/**
 * No-effect placeholder function.
 */

exports.SEMAPHORE = SEMAPHORE;

const NO_OP = () => {};

exports.NO_OP = NO_OP;
var Type;
exports.Type = Type;

(function (Type) {
  Type[Type["U8"] = 0] = "U8";
  Type[Type["U8C"] = 1] = "U8C";
  Type[Type["I8"] = 2] = "I8";
  Type[Type["U16"] = 3] = "U16";
  Type[Type["I16"] = 4] = "I16";
  Type[Type["U32"] = 5] = "U32";
  Type[Type["I32"] = 6] = "I32";
  Type[Type["F32"] = 7] = "F32";
  Type[Type["F64"] = 8] = "F64";
})(Type || (exports.Type = Type = {}));

const SIZEOF = {
  [0
  /* U8 */
  ]: 1,
  [1
  /* U8C */
  ]: 1,
  [2
  /* I8 */
  ]: 1,
  [3
  /* U16 */
  ]: 2,
  [4
  /* I16 */
  ]: 2,
  [5
  /* U32 */
  ]: 4,
  [6
  /* I32 */
  ]: 4,
  [7
  /* F32 */
  ]: 4,
  [8
  /* F64 */
  ]: 8
};
exports.SIZEOF = SIZEOF;
var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["FINE"] = 0] = "FINE";
  LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["SEVERE"] = 4] = "SEVERE";
  LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
},{}],"../../node_modules/@thi.ng/api/assert.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = void 0;

var _api = require("./api");

/**
 * Takes a `test` result or predicate function without args and throws
 * error with given `msg` if test failed (i.e. is falsy). The function
 * is only enabled if `NODE_ENV != "production"` or if
 * `UMBRELLA_ASSERTS = 1`.
 */
const assert = typeof process === "undefined" || "development" !== "production" || undefined === "1" ? (test, msg = "assertion failed") => {
  if (typeof test === "function" && !test() || !test) {
    throw new Error(typeof msg === "function" ? msg() : msg);
  }
} : _api.NO_OP;
exports.assert = assert;
},{"./api":"../../node_modules/@thi.ng/api/api.js","process":"../../node_modules/parcel-bundler/src/builtins/_empty.js"}],"../../node_modules/@thi.ng/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogger = exports.NULL_LOGGER = void 0;

var _api = require("./api");

const NULL_LOGGER = Object.freeze({
  level: _api.LogLevel.NONE,

  fine() {},

  debug() {},

  info() {},

  warn() {},

  severe() {}

});
exports.NULL_LOGGER = NULL_LOGGER;

class ConsoleLogger {
  constructor(id, level = _api.LogLevel.FINE) {
    this.id = id;
    this.level = level;
  }

  fine(...args) {
    this.level <= _api.LogLevel.FINE && this.log("FINE", args);
  }

  debug(...args) {
    this.level <= _api.LogLevel.DEBUG && this.log("DEBUG", args);
  }

  info(...args) {
    this.level <= _api.LogLevel.INFO && this.log("INFO", args);
  }

  warn(...args) {
    this.level <= _api.LogLevel.WARN && this.log("WARN", args);
  }

  severe(...args) {
    this.level <= _api.LogLevel.SEVERE && this.log("SEVERE", args);
  }

  log(level, args) {
    console.log(`[${level}] ${this.id}:`, ...args);
  }

}

exports.ConsoleLogger = ConsoleLogger;
},{"./api":"../../node_modules/@thi.ng/api/api.js"}],"../../node_modules/@thi.ng/api/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = void 0;

/**
 * Class behavior mixin based on:
 * http://raganwald.com/2015/06/26/decorators-in-es7.html
 *
 * Additionally only injects/overwrites properties in target, which are
 * NOT marked with `@nomixin` (i.e. haven't set their `configurable`
 * property descriptor flag to `false`)
 *
 * @param behaviour to mixin
 * @param sharedBehaviour
 * @returns decorator function
 */
const mixin = (behaviour, sharedBehaviour = {}) => {
  const instanceKeys = Reflect.ownKeys(behaviour);
  const sharedKeys = Reflect.ownKeys(sharedBehaviour);
  const typeTag = Symbol("isa");

  function _mixin(clazz) {
    for (let key of instanceKeys) {
      const existing = Object.getOwnPropertyDescriptor(clazz.prototype, key);

      if (!existing || existing.configurable) {
        Object.defineProperty(clazz.prototype, key, {
          value: behaviour[key],
          writable: true
        });
      } else {
        console.log(`not patching: ${clazz.name}.${key.toString()}`);
      }
    }

    Object.defineProperty(clazz.prototype, typeTag, {
      value: true
    });
    return clazz;
  }

  for (let key of sharedKeys) {
    Object.defineProperty(_mixin, key, {
      value: sharedBehaviour[key],
      enumerable: sharedBehaviour.propertyIsEnumerable(key)
    });
  }

  Object.defineProperty(_mixin, Symbol.hasInstance, {
    value: x => !!x[typeTag]
  });
  return _mixin;
};

exports.mixin = mixin;
},{}],"../../node_modules/@thi.ng/api/decorators/configurable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurable = void 0;

/**
 * Property decorator factory. Sets `configurable` flag of PropertyDescriptor
 * to given state.
 *
 * @param state
 */
const configurable = state => function (_, __, descriptor) {
  descriptor.configurable = state;
};

exports.configurable = configurable;
},{}],"../../node_modules/@thi.ng/api/decorators/deprecated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecated = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Method property decorator factory. Augments original method with
 * deprecation message (via console), shown when method is invoked.
 * Accepts optional message arg. Throws error if assigned property
 * is not a function.
 *
 * @param msg deprecation message
 */
const deprecated = (msg, log = console.log) => function (target, prop, descriptor) {
  const signature = `${target.constructor.name}#${prop.toString()}`;
  const fn = descriptor.value;

  if (typeof fn !== "function") {
    (0, _errors.illegalArgs)(`${signature} is not a function`);
  }

  descriptor.value = function () {
    log(`DEPRECATED ${signature}: ${msg || "will be removed soon"}`);
    return fn.apply(this, arguments);
  };

  return descriptor;
};

exports.deprecated = deprecated;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/api/decorators/nomixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nomixin = void 0;

/**
 * Method property decorator. Sets `configurable` flag of
 * PropertyDescriptor to `false` (same as `@configurable(false)`).
 * Intended to be used in combination with mixin decorators to enable
 * partial implementations of mixed-in behaviors in target class and
 * avoid them being overidden by mixed-in behaviour.
 */
const nomixin = (_, __, descriptor) => {
  descriptor.configurable = false;
};

exports.nomixin = nomixin;
},{}],"../../node_modules/@thi.ng/api/decorators/sealed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sealed = void 0;

/**
 * Class decorator. Seals both constructor and prototype.
 *
 * @param constructor
 */
const sealed = constructor => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

exports.sealed = sealed;
},{}],"../../node_modules/@thi.ng/api/mixins/ienable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEnableMixin = void 0;

var _api = require("../api");

var _mixin = require("../mixin");

/**
 * Mixin class decorator, injects IEnable default implementation, incl.
 * a `_enabled` property. If the target also implements the `INotify`
 * interface, `enable()` and `disable()` will automatically emit the
 * respective events.
 */
const IEnableMixin = (0, _mixin.mixin)({
  _enabled: true,

  isEnabled() {
    return this._enabled;
  },

  enable() {
    this._enabled = true;

    if (this.notify) {
      this.notify({
        id: _api.EVENT_ENABLE,
        target: this
      });
    }
  },

  disable() {
    this._enabled = false;

    if (this.notify) {
      this.notify({
        id: _api.EVENT_DISABLE,
        target: this
      });
    }
  },

  toggle() {
    this._enabled ? this.disable() : this.enable();
    return this._enabled;
  }

});
exports.IEnableMixin = IEnableMixin;
},{"../api":"../../node_modules/@thi.ng/api/api.js","../mixin":"../../node_modules/@thi.ng/api/mixin.js"}],"../../node_modules/@thi.ng/api/mixins/inotify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INotifyMixin = exports.inotify_dispatch = void 0;

var _api = require("../api");

var _mixin = require("../mixin");

const inotify_dispatch = (listeners, e) => {
  if (!listeners) return;

  for (let i = 0, n = listeners.length, l; i < n; i++) {
    l = listeners[i];
    l[0].call(l[1], e);

    if (e.canceled) {
      return;
    }
  }
};
/**
 * Mixin class decorator, injects INotify default implementation, incl.
 * a lazily instantiated `_listeners` property object, storing
 * registered listeners.
 */


exports.inotify_dispatch = inotify_dispatch;
const INotifyMixin = (0, _mixin.mixin)({
  addListener(id, fn, scope) {
    let l = (this._listeners = this._listeners || {})[id];

    if (!l) {
      l = this._listeners[id] = [];
    }

    if (this.__listener(l, fn, scope) === -1) {
      l.push([fn, scope]);
      return true;
    }

    return false;
  },

  removeListener(id, fn, scope) {
    if (!this._listeners) return false;
    const l = this._listeners[id];

    if (l) {
      const idx = this.__listener(l, fn, scope);

      if (idx !== -1) {
        l.splice(idx, 1);
        return true;
      }
    }

    return false;
  },

  notify(e) {
    if (!this._listeners) return;
    e.target === undefined && (e.target = this);
    inotify_dispatch(this._listeners[e.id], e);
    inotify_dispatch(this._listeners[_api.EVENT_ALL], e);
  },

  __listener(listeners, f, scope) {
    let i = listeners.length;

    while (--i >= 0) {
      const l = listeners[i];

      if (l[0] === f && l[1] === scope) {
        break;
      }
    }

    return i;
  }

});
exports.INotifyMixin = INotifyMixin;
},{"../api":"../../node_modules/@thi.ng/api/api.js","../mixin":"../../node_modules/@thi.ng/api/mixin.js"}],"../../node_modules/@thi.ng/api/mixins/iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterable = void 0;

var _mixin = require("../mixin");

const iterable = prop => (0, _mixin.mixin)({
  *[Symbol.iterator]() {
    yield* this[prop];
  }

});

exports.iterable = iterable;
},{"../mixin":"../../node_modules/@thi.ng/api/mixin.js"}],"../../node_modules/@thi.ng/api/mixins/iwatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IWatchMixin = void 0;

var _mixin = require("../mixin");

const IWatchMixin = (0, _mixin.mixin)({
  addWatch(id, fn) {
    this._watches = this._watches || {};

    if (this._watches[id]) {
      return false;
    }

    this._watches[id] = fn;
    return true;
  },

  removeWatch(id) {
    if (!this._watches) return;

    if (this._watches[id]) {
      delete this._watches[id];
      return true;
    }

    return false;
  },

  notifyWatches(oldState, newState) {
    if (!this._watches) return;
    const w = this._watches;

    for (let id in w) {
      w[id](id, oldState, newState);
    }
  }

});
exports.IWatchMixin = IWatchMixin;
},{"../mixin":"../../node_modules/@thi.ng/api/mixin.js"}],"../../node_modules/@thi.ng/api/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _assert = require("./assert");

Object.keys(_assert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assert[key];
    }
  });
});

var _logger = require("./logger");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});

var _mixin = require("./mixin");

Object.keys(_mixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixin[key];
    }
  });
});

var _configurable = require("./decorators/configurable");

Object.keys(_configurable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _configurable[key];
    }
  });
});

var _deprecated = require("./decorators/deprecated");

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deprecated[key];
    }
  });
});

var _nomixin = require("./decorators/nomixin");

Object.keys(_nomixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nomixin[key];
    }
  });
});

var _sealed = require("./decorators/sealed");

Object.keys(_sealed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sealed[key];
    }
  });
});

var _ienable = require("./mixins/ienable");

Object.keys(_ienable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ienable[key];
    }
  });
});

var _inotify = require("./mixins/inotify");

Object.keys(_inotify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inotify[key];
    }
  });
});

var _iterable = require("./mixins/iterable");

Object.keys(_iterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterable[key];
    }
  });
});

var _iwatch = require("./mixins/iwatch");

Object.keys(_iwatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iwatch[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/api/api.js","./assert":"../../node_modules/@thi.ng/api/assert.js","./logger":"../../node_modules/@thi.ng/api/logger.js","./mixin":"../../node_modules/@thi.ng/api/mixin.js","./decorators/configurable":"../../node_modules/@thi.ng/api/decorators/configurable.js","./decorators/deprecated":"../../node_modules/@thi.ng/api/decorators/deprecated.js","./decorators/nomixin":"../../node_modules/@thi.ng/api/decorators/nomixin.js","./decorators/sealed":"../../node_modules/@thi.ng/api/decorators/sealed.js","./mixins/ienable":"../../node_modules/@thi.ng/api/mixins/ienable.js","./mixins/inotify":"../../node_modules/@thi.ng/api/mixins/inotify.js","./mixins/iterable":"../../node_modules/@thi.ng/api/mixins/iterable.js","./mixins/iwatch":"../../node_modules/@thi.ng/api/mixins/iwatch.js"}],"../../node_modules/@thi.ng/transducers/reduced.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreduced = exports.ensureReduced = exports.isReduced = exports.reduced = exports.Reduced = void 0;

class Reduced {
  constructor(val) {
    this.value = val;
  }

  deref() {
    return this.value;
  }

}

exports.Reduced = Reduced;

const reduced = x => new Reduced(x);

exports.reduced = reduced;

const isReduced = x => x instanceof Reduced;

exports.isReduced = isReduced;

const ensureReduced = x => x instanceof Reduced ? x : new Reduced(x);

exports.ensureReduced = ensureReduced;

const unreduced = x => x instanceof Reduced ? x.deref() : x;

exports.unreduced = unreduced;
},{}],"../../node_modules/@thi.ng/transducers/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;
exports.$$reduce = exports.reducer = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _reduced = require("./reduced");

const parseArgs = args => args.length === 2 ? [undefined, args[1]] : args.length === 3 ? [args[1], args[2]] : (0, _errors.illegalArity)(args.length);

function reduce(...args) {
  const rfn = args[0];
  const init = rfn[0];
  const complete = rfn[1];
  const reduce = rfn[2];
  args = parseArgs(args);
  const acc = args[0] == null ? init() : args[0];
  const xs = args[1];
  return (0, _reduced.unreduced)(complete((0, _checks.implementsFunction)(xs, "$reduce") ? xs.$reduce(reduce, acc) : (0, _checks.isArrayLike)(xs) ? reduceArray(reduce, acc, xs) : reduceIterable(reduce, acc, xs)));
}

const reduceArray = (rfn, acc, xs) => {
  for (let i = 0, n = xs.length; i < n; i++) {
    acc = rfn(acc, xs[i]);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};

const reduceIterable = (rfn, acc, xs) => {
  for (let x of xs) {
    acc = rfn(acc, x);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};
/**
 * Convenience helper for building a full `Reducer` using the identity
 * function (i.e. `(x) => x`) as completion step (true for 90% of all
 * bundled transducers).
 *
 * @param init init step of reducer
 * @param rfn reduction step of reducer
 */


const reducer = (init, rfn) => [init, acc => acc, rfn];

exports.reducer = reducer;

const $$reduce = (rfn, args) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? reduce(rfn.apply(null, args.slice(0, n)), args[n]) : reduce(rfn(), args[0]) : undefined;
};

exports.$$reduce = $$reduce;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/rfn/push.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;

var _reduce = require("../reduce");

function push(xs) {
  return xs ? [...xs] : (0, _reduce.reducer)(() => [], (acc, x) => (acc.push(x), acc));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterator = iterator;
exports.iterator1 = iterator1;
exports.$iter = void 0;

var _api = require("@thi.ng/api");

var _checks = require("@thi.ng/checks");

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Takes a transducer and input iterable. Returns iterator of
 * transformed results.
 *
 * @param xform
 * @param xs
 */
function* iterator(xform, xs) {
  const rfn = xform((0, _push.push)());
  const complete = rfn[1];
  const reduce = rfn[2];

  for (let x of xs) {
    const y = reduce([], x);

    if ((0, _reduced.isReduced)(y)) {
      yield* (0, _reduced.unreduced)(complete(y.deref()));
      return;
    }

    if (y.length) {
      yield* y;
    }
  }

  yield* (0, _reduced.unreduced)(complete([]));
}
/**
 * Optimized version of `iterator()` for transducers which are
 * guaranteed to:
 *
 * 1) Only produce none or a single result per input
 * 2) Do not require a `completion` reduction step
 *
 * @param xform
 * @param xs
 */


function* iterator1(xform, xs) {
  const reduce = xform([_api.NO_OP, _api.NO_OP, (_, x) => x])[2];

  for (let x of xs) {
    let y = reduce(_api.SEMAPHORE, x);

    if ((0, _reduced.isReduced)(y)) {
      y = (0, _reduced.unreduced)(y.deref());

      if (y !== _api.SEMAPHORE) {
        yield y;
      }

      return;
    }

    if (y !== _api.SEMAPHORE) {
      yield y;
    }
  }
}
/**
 * Helper function used by various transducers to wrap themselves as
 * transforming iterators. Delegates to `iterator1()` by default.
 *
 * @param xform
 * @param args
 * @param impl
 */


const $iter = (xform, args, impl = iterator1) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? impl(xform.apply(null, args.slice(0, n)), args[n]) : impl(xform(), args[0]) : undefined;
};

exports.$iter = $iter;
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./reduced":"../../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../../node_modules/@thi.ng/transducers/rfn/push.js"}],"../../node_modules/@thi.ng/transducers/func/compr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compR = void 0;

/**
 * Reducer composition helper. Takes existing reducer `rfn` (a 3-tuple)
 * and a reducing function `fn`. Returns a new reducer tuple of this
 * form:
 *
 * ```
 * [rfn[0], rfn[1], fn]
 * ```
 *
 * `rfn[2]` reduces values of type `B` into an accumulator of type `A`.
 * `fn` accepts values of type `C` and produces interim results of type
 * `B`, which are then (possibly) passed to the "inner" `rfn[2]`
 * function. Therefore the resulting reducer takes inputs of `C` and an
 * accumulator of type `A`.
 *
 * It is assumed that `fn` internally calls `rfn[2]` to pass its own
 * results for further processing by the nested reducer `rfn`.
 *
 * @param rfn
 * @param fn
 */
const compR = (rfn, fn) => [rfn[0], rfn[1], fn];

exports.compR = compR;
},{}],"../../node_modules/@thi.ng/transducers/xform/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function map(fn, src) {
  return src ? (0, _iterator.iterator1)(map(fn), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(x)));
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/transduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transduce = transduce;

var _errors = require("@thi.ng/errors");

var _reduce = require("./reduce");

var _map = require("./xform/map");

function transduce(...args) {
  let acc, xs;

  switch (args.length) {
    case 4:
      xs = args[3];
      acc = args[2];
      break;

    case 3:
      xs = args[2];
      break;

    case 2:
      return (0, _map.map)(x => transduce(args[0], args[1], x));

    default:
      (0, _errors.illegalArity)(args.length);
  }

  return (0, _reduce.reduce)(args[0](args[1]), acc, xs);
}
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./reduce":"../../node_modules/@thi.ng/transducers/reduce.js","./xform/map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/run.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _api = require("@thi.ng/api");

var _transduce = require("./transduce");

const NO_OP_REDUCER = [_api.NO_OP, _api.NO_OP, _api.NO_OP];

function run(tx, ...args) {
  if (args.length === 1) {
    (0, _transduce.transduce)(tx, NO_OP_REDUCER, args[0]);
  } else {
    const fx = args[0];
    (0, _transduce.transduce)(tx, [_api.NO_OP, _api.NO_OP, (_, x) => fx(x)], args[1]);
  }
}
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","./transduce":"../../node_modules/@thi.ng/transducers/transduce.js"}],"../../node_modules/@thi.ng/transducers/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.step = void 0;

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Single-step transducer execution wrapper.
 * Returns array if transducer produces multiple results
 * and undefined if there was no output. Else returns single
 * result value.
 *
 * Likewise, once a transducer has produced a final / reduced
 * value, all further invocations of the stepper function will
 * return undefined.
 *
 * ```
 * // single result
 * step(map(x => x * 10))(1);
 * // 10
 *
 * // multiple results
 * step(mapcat(x => [x, x + 1, x + 2]))(1)
 * // [ 1, 2, 3 ]
 *
 * // no result
 * f = step(filter((x) => !(x & 1)))
 * f(1); // undefined
 * f(2); // 2
 *
 * // reduced value termination
 * f = step(take(2));
 * f(1); // 1
 * f(1); // 1
 * f(1); // undefined
 * f(1); // undefined
 * ```
 *
 * @param tx
 */
const step = tx => {
  const [_, complete, reduce] = tx((0, _push.push)());
  _;
  let done = false;
  return x => {
    if (!done) {
      let acc = reduce([], x);
      done = (0, _reduced.isReduced)(acc);

      if (done) {
        acc = complete(acc.deref());
      }

      return acc.length === 1 ? acc[0] : acc.length > 0 ? acc : undefined;
    }
  };
};

exports.step = step;
},{"./reduced":"../../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../../node_modules/@thi.ng/transducers/rfn/push.js"}],"../../node_modules/@thi.ng/transducers/internal/mathop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__mathop = void 0;

var _reduce = require("../reduce");

const __mathop = (rfn, fn, initDefault, args) => {
  const res = (0, _reduce.$$reduce)(rfn, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0] || initDefault;
  return (0, _reduce.reducer)(() => init, fn);
};

exports.__mathop = __mathop;
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _mathop = require("../internal/mathop");

function add(...args) {
  return (0, _mathop.__mathop)(add, (acc, x) => acc + x, 0, args);
}
},{"../internal/mathop":"../../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../../node_modules/@thi.ng/transducers/rfn/assoc-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocMap = assocMap;

var _reduce = require("../reduce");

function assocMap(xs) {
  return xs ? (0, _reduce.reduce)(assocMap(), xs) : (0, _reduce.reducer)(() => new Map(), (acc, [k, v]) => acc.set(k, v));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/assoc-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocObj = assocObj;

var _reduce = require("../reduce");

function assocObj(xs) {
  return xs ? (0, _reduce.reduce)(assocObj(), xs) : (0, _reduce.reducer)(() => ({}), (acc, [k, v]) => (acc[k] = v, acc));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/conj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conj = conj;

var _reduce = require("../reduce");

function conj(xs) {
  return xs ? (0, _reduce.reduce)(conj(), xs) : (0, _reduce.reducer)(() => new Set(), (acc, x) => acc.add(x));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var _reduce = require("../reduce");

function count(...args) {
  const res = (0, _reduce.$$reduce)(count, args);

  if (res !== undefined) {
    return res;
  }

  let offset = args[0] || 0;
  let step = args[1] || 1;
  return (0, _reduce.reducer)(() => offset, (acc, _) => acc + step);
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/div.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = div;

var _reduce = require("../reduce");

function div(init, xs) {
  return xs ? (0, _reduce.reduce)(div(init), xs) : (0, _reduce.reducer)(() => init, (acc, x) => acc / x);
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function every(...args) {
  const res = (0, _reduce.$$reduce)(every, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => true, pred ? (acc, x) => pred(x) ? acc : (0, _reduced.reduced)(false) : (acc, x) => x ? acc : (0, _reduced.reduced)(false));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/rfn/fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;
exports.fillN = fillN;

var _reduce = require("../reduce");

function fill(...args) {
  const res = (0, _reduce.$$reduce)(fill, args);

  if (res !== undefined) {
    return res;
  }

  let start = args[0] || 0;
  return (0, _reduce.reducer)(() => [], (acc, x) => (acc[start++] = x, acc));
}

function fillN(...args) {
  return fill(...args);
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/compose/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;
exports.compL = compL;
exports.compI = void 0;

var _errors = require("@thi.ng/errors");

function comp(...fns) {
  let [a, b, c, d, e, f, g, h, i, j] = fns;

  switch (fns.length) {
    case 0:
      (0, _errors.illegalArity)(0);

    case 1:
      return a;

    case 2:
      return (...xs) => a(b(...xs));

    case 3:
      return (...xs) => a(b(c(...xs)));

    case 4:
      return (...xs) => a(b(c(d(...xs))));

    case 5:
      return (...xs) => a(b(c(d(e(...xs)))));

    case 6:
      return (...xs) => a(b(c(d(e(f(...xs))))));

    case 7:
      return (...xs) => a(b(c(d(e(f(g(...xs)))))));

    case 8:
      return (...xs) => a(b(c(d(e(f(g(h(...xs))))))));

    case 9:
      return (...xs) => a(b(c(d(e(f(g(h(i(...xs)))))))));

    case 10:
    default:
      const fn = (...xs) => a(b(c(d(e(f(g(h(i(j(...xs))))))))));

      return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
  }
}

function compL(...fns) {
  return comp.apply(null, fns.reverse());
}
/**
 * @deprecated renamed to `compL`
 */


const compI = compL;
exports.compI = compI;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/compose/complement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complement = complement;

function complement(f) {
  return (...xs) => !f(...xs);
}
},{}],"../../node_modules/@thi.ng/compose/constantly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constantly = void 0;

const constantly = x => () => x;

exports.constantly = constantly;
},{}],"../../node_modules/@thi.ng/compose/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delay = exports.delay = void 0;

const delay = body => new Delay(body);

exports.delay = delay;

class Delay {
  constructor(body) {
    this.body = body;
    this.realized = false;
  }

  deref() {
    if (!this.realized) {
      this.value = this.body();
      this.realized = true;
    }

    return this.value;
  }

  isRealized() {
    return this.realized;
  }

}

exports.Delay = Delay;
},{}],"../../node_modules/@thi.ng/compose/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

const delayed = (x, t) => new Promise(resolve => setTimeout(() => resolve(x), t));

exports.delayed = delayed;
},{}],"../../node_modules/@thi.ng/compose/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

const identity = x => x;

exports.identity = identity;
},{}],"../../node_modules/@thi.ng/compose/ifdef.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifDef = void 0;

/**
 * Returns f(x) iff `x` is not null or undefined.
 *
 * @param f
 * @param x
 */
const ifDef = (f, x) => x != null ? f(x) : undefined;

exports.ifDef = ifDef;
},{}],"../../node_modules/@thi.ng/compose/juxt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxt = juxt;

function juxt(...fns) {
  const [a, b, c, d, e, f, g, h] = fns;

  switch (fns.length) {
    case 1:
      return x => [a(x)];

    case 2:
      return x => [a(x), b(x)];

    case 3:
      return x => [a(x), b(x), c(x)];

    case 4:
      return x => [a(x), b(x), c(x), d(x)];

    case 5:
      return x => [a(x), b(x), c(x), d(x), e(x)];

    case 6:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x)];

    case 7:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x)];

    case 8:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x), h(x)];

    default:
      return x => {
        let res = new Array(fns.length);

        for (let i = fns.length; --i >= 0;) {
          res[i] = fns[i](x);
        }

        return res;
      };
  }
}
},{}],"../../node_modules/@thi.ng/compose/partial.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partial = partial;
exports.foo = void 0;

var _errors = require("@thi.ng/errors");

function partial(fn, ...args) {
  let [a, b, c, d, e, f, g, h] = args;

  switch (args.length) {
    case 1:
      return (...xs) => fn(a, ...xs);

    case 2:
      return (...xs) => fn(a, b, ...xs);

    case 3:
      return (...xs) => fn(a, b, c, ...xs);

    case 4:
      return (...xs) => fn(a, b, c, d, ...xs);

    case 5:
      return (...xs) => fn(a, b, c, d, e, ...xs);

    case 6:
      return (...xs) => fn(a, b, c, d, e, f, ...xs);

    case 7:
      return (...xs) => fn(a, b, c, d, e, f, g, ...xs);

    case 8:
      return (...xs) => fn(a, b, c, d, e, f, g, h, ...xs);

    default:
      (0, _errors.illegalArgs)();
  }
}

const foo = partial((a, b) => a + b, "a");
exports.foo = foo;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/compose/thread-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadFirst = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as first argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadFirst(
 *   5,
 *   neg,       // -5
 *   [sub, 20], // -5 - 20 = -25
 *   [div, 10]  // -25 / 10 = -2.5
 * );
 *
 * // -2.5
 * ```
 *
 * @see threadLast
 *
 * @param init
 * @param fns
 */
const threadFirst = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](acc, ...expr.slice(1)), init);

exports.threadFirst = threadFirst;
},{}],"../../node_modules/@thi.ng/compose/thread-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadLast = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as last argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadLast(
 *   5,
 *   neg,       // -5
 *   [sub, 10], // 20 - (-5) = 25
 *   [div, 10]  // 10 / 25 = 0.4
 * );
 *
 * // 0.4
 * ```
 *
 * @see threadFirst
 *
 * @param init
 * @param fns
 */
const threadLast = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](...expr.slice(1), acc), init);

exports.threadLast = threadLast;
},{}],"../../node_modules/@thi.ng/compose/trampoline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trampoline = void 0;

/**
 * Takes a function returning either a no-arg function (thunk) or its
 * already realized (non-function) result. Re-executes thunk for as long
 * as it returns another function/thunk. Once a non-function result has
 * been produced, `trampoline` returns that value itself. If the final
 * result should be function, it needs to wrapped (e.g. as a 1-elem
 * array).
 *
 * This function should be used for non-stack consuming recursion. I.e.
 * a trampoline is a form of continuation passing style and only ever
 * consumes max. 2 extra stack frames, independent from recursion depth.
 *
 * ```
 * const countdown = (acc, x) =>
 *   x >= 0 ?
 *     () => (acc.push(x), countdown(acc, x-1)) :
 *     acc;
 *
 * trampoline(countdown([], 4))
 * // [ 4, 3, 2, 1, 0 ]
 *
 * trampoline(countdown([], -1))
 * // []
 * ```
 *
 * @param f
 */
const trampoline = f => {
  while (typeof f === "function") {
    f = f();
  }

  return f;
};

exports.trampoline = trampoline;
},{}],"../../node_modules/@thi.ng/compose/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comp = require("./comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _complement = require("./complement");

Object.keys(_complement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _complement[key];
    }
  });
});

var _constantly = require("./constantly");

Object.keys(_constantly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constantly[key];
    }
  });
});

var _delay = require("./delay");

Object.keys(_delay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delay[key];
    }
  });
});

var _delayed = require("./delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _identity = require("./identity");

Object.keys(_identity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _identity[key];
    }
  });
});

var _ifdef = require("./ifdef");

Object.keys(_ifdef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ifdef[key];
    }
  });
});

var _juxt = require("./juxt");

Object.keys(_juxt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxt[key];
    }
  });
});

var _partial = require("./partial");

Object.keys(_partial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partial[key];
    }
  });
});

var _threadFirst = require("./thread-first");

Object.keys(_threadFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadFirst[key];
    }
  });
});

var _threadLast = require("./thread-last");

Object.keys(_threadLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadLast[key];
    }
  });
});

var _trampoline = require("./trampoline");

Object.keys(_trampoline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trampoline[key];
    }
  });
});
},{"./comp":"../../node_modules/@thi.ng/compose/comp.js","./complement":"../../node_modules/@thi.ng/compose/complement.js","./constantly":"../../node_modules/@thi.ng/compose/constantly.js","./delay":"../../node_modules/@thi.ng/compose/delay.js","./delayed":"../../node_modules/@thi.ng/compose/delayed.js","./identity":"../../node_modules/@thi.ng/compose/identity.js","./ifdef":"../../node_modules/@thi.ng/compose/ifdef.js","./juxt":"../../node_modules/@thi.ng/compose/juxt.js","./partial":"../../node_modules/@thi.ng/compose/partial.js","./thread-first":"../../node_modules/@thi.ng/compose/thread-first.js","./thread-last":"../../node_modules/@thi.ng/compose/thread-last.js","./trampoline":"../../node_modules/@thi.ng/compose/trampoline.js"}],"../../node_modules/@thi.ng/transducers/internal/group-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__groupByOpts = void 0;

var _compose = require("@thi.ng/compose");

var _push = require("../rfn/push");

/**
 * Shared helper function for groupBy* reducers
 *
 * @param opts
 */
const __groupByOpts = opts => Object.assign({
  key: _compose.identity,
  group: (0, _push.push)()
}, opts);

exports.__groupByOpts = __groupByOpts;
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","../rfn/push":"../../node_modules/@thi.ng/transducers/rfn/push.js"}],"../../node_modules/@thi.ng/transducers/rfn/group-by-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByMap = groupByMap;

var _groupOpts = require("../internal/group-opts");

var _reduce = require("../reduce");

function groupByMap(...args) {
  const res = (0, _reduce.$$reduce)(groupByMap, args);

  if (res !== undefined) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [init, _, reduce] = opts.group;
  _; // ignore

  return (0, _reduce.reducer)(() => new Map(), (acc, x) => {
    const k = opts.key(x);
    return acc.set(k, acc.has(k) ? reduce(acc.get(k), x) : reduce(init(), x));
  });
}
},{"../internal/group-opts":"../../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/frequencies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frequencies = frequencies;

var _compose = require("@thi.ng/compose");

var _reduce = require("../reduce");

var _count = require("./count");

var _groupByMap = require("./group-by-map");

function frequencies(...args) {
  return (0, _reduce.$$reduce)(frequencies, args) || (0, _groupByMap.groupByMap)({
    key: args[0] || _compose.identity,
    group: (0, _count.count)()
  });
}
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js","./count":"../../node_modules/@thi.ng/transducers/rfn/count.js","./group-by-map":"../../node_modules/@thi.ng/transducers/rfn/group-by-map.js"}],"../../node_modules/@thi.ng/transducers/rfn/group-by-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByObj = groupByObj;

var _groupOpts = require("../internal/group-opts");

var _reduce2 = require("../reduce");

function groupByObj(...args) {
  const res = (0, _reduce2.$$reduce)(groupByObj, args);

  if (res) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [_init, _, _reduce] = opts.group;
  _; // ignore

  return (0, _reduce2.reducer)(() => ({}), (acc, x) => {
    const k = opts.key(x);
    acc[k] = acc[k] ? _reduce(acc[k], x) : _reduce(_init(), x);
    return acc;
  });
}
},{"../internal/group-opts":"../../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/group-binary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBinary = void 0;

var _groupByObj = require("./group-by-obj");

var _push = require("./push");

const branchPred = (key, b, l, r) => x => key(x) & b ? r : l;
/**
 * Creates a bottom-up, unbalanced binary tree of desired depth and
 * choice of data structures. Any value can be indexed, as long as a
 * numeric representation (key) can be obtained. This numeric key is
 * produced by the supplied `key` function. IMPORTANT: the returned
 * values MUST be unsigned and less than the provided bit length (i.e.
 * `0 .. (2^bits) - 1` range).
 *
 * By default the tree is constructed using plain objects for branches,
 * with left branches stored as "l" and right ones as "r". The original
 * values are stored at the lowest tree level using a customizable
 * nested reducer. By default leaves are collected in arrays (using the
 * `push()` reducer), but any suitable reducer can be used (e.g.
 * `conj()` to collect values into sets).
 *
 * Index by lowest 4-bits of ID value:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, x => x.id & 0xf),
 *   [{id: 3}, {id: 8}, {id: 15}, {id: 0}]
 * )
 *
 * tree.l.l.l.l
 * // [ { id: 0 } ]
 * tree.r.r.r.r
 * // [ { id: 15 } ]
 * tree.l.l.r.r
 * // [ { id: 3 } ]
 * ```
 *
 * Collecting as array:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, identity, ()=>[], push(), 0, 1),
 *   [1,2,3,4,5,6,7]
 * )
 *
 * tree[0][1][0][1] // 0101 == 5 in binary
 * // [ 5 ]
 *
 * tree[0][1][1]    // 011* == branch
 * // [ [ 6 ], [ 7 ] ]
 * ```
 *
 * Using `frequencies` as leaf reducer:
 *
 * ```
 * tree = reduce(
 *   groupBinary(3, (x: string) => x.length, null, frequencies()),
 *   "aa bbb dddd ccccc bbb eeee fff".split(" ")
 * )
 * // [ [ undefined,
 * //     [ Map { 'aa' => 1 },
 * //       Map { 'bbb' => 2, 'fff' => 1 } ] ],
 * //   [ [ Map { 'dddd' => 1, 'eeee' => 1 },
 * //       Map { 'ccccc' => 1 } ] ] ]
 *
 * tree[0][1][1]
 * // Map { 'bbb' => 2, 'fff' => 1 }
 * ```
 *
 * @param bits index range (always from 0)
 * @param key key function
 * @param branch function to create a new branch container (object or
 * array)
 * @param leaf reducer for leaf collection
 * @param left key for storing left branches (e.g. `0` for arrays)
 * @param right key for storing right branches (e.g. `1` for arrays)
 */


const groupBinary = (bits, key, branch, leaf, left = "l", right = "r") => {
  const init = branch || (() => ({}));

  let rfn = (0, _groupByObj.groupByObj)({
    key: branchPred(key, 1, left, right),
    group: leaf || (0, _push.push)()
  });

  for (let i = 2, maxIndex = 1 << bits; i < maxIndex; i <<= 1) {
    rfn = (0, _groupByObj.groupByObj)({
      key: branchPred(key, i, left, right),
      group: [init, rfn[1], rfn[2]]
    });
  }

  return [init, rfn[1], rfn[2]];
};

exports.groupBinary = groupBinary;
},{"./group-by-obj":"../../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./push":"../../node_modules/@thi.ng/transducers/rfn/push.js"}],"../../node_modules/@thi.ng/transducers/rfn/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _api = require("@thi.ng/api");

var _reduce = require("../reduce");

function last(xs) {
  return xs ? (0, _reduce.reduce)(last(), xs) : (0, _reduce.reducer)(_api.NO_OP, (_, x) => x);
}
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/compare/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = void 0;

const compare = (a, b) => {
  if (a === b) {
    return 0;
  }

  if (a == null) {
    return b == null ? 0 : -1;
  }

  if (b == null) {
    return a == null ? 0 : 1;
  }

  if (typeof a.compare === "function") {
    return a.compare(b);
  }

  if (typeof b.compare === "function") {
    return -b.compare(a);
  }

  return a < b ? -1 : a > b ? 1 : 0;
};

exports.compare = compare;
},{}],"../../node_modules/@thi.ng/transducers/rfn/max-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxCompare = maxCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function maxCompare(...args) {
  const res = (0, _reduce.$$reduce)(maxCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) >= 0 ? acc : x);
}
},{"@thi.ng/compare":"../../node_modules/@thi.ng/compare/index.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("../reduce");

function max(xs) {
  return xs ? (0, _reduce.reduce)(max(), xs) : (0, _reduce.reducer)(() => -Infinity, (acc, x) => Math.max(acc, x));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/mean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mean = mean;

var _reduce = require("../reduce");

function mean(xs) {
  let n = 1;
  return xs ? (0, _reduce.reduce)(mean(), xs) : [() => n = 0, acc => n > 1 ? acc / n : acc, (acc, x) => (n++, acc + x)];
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/min-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minCompare = minCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function minCompare(...args) {
  const res = (0, _reduce.$$reduce)(minCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) <= 0 ? acc : x);
}
},{"@thi.ng/compare":"../../node_modules/@thi.ng/compare/index.js","../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("../reduce");

function min(xs) {
  return xs ? (0, _reduce.reduce)(min(), xs) : (0, _reduce.reducer)(() => Infinity, (acc, x) => Math.min(acc, x));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/mul.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;

var _mathop = require("../internal/mathop");

function mul(...args) {
  return (0, _mathop.__mathop)(mul, (acc, x) => acc * x, 1, args);
}
},{"../internal/mathop":"../../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../../node_modules/@thi.ng/transducers/rfn/push-copy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushCopy = void 0;

var _reduce = require("../reduce");

const pushCopy = () => (0, _reduce.reducer)(() => [], (acc, x) => ((acc = acc.slice()).push(x), acc));

exports.pushCopy = pushCopy;
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/reductions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reductions = reductions;

var _reduce2 = require("../reduce");

var _reduced = require("../reduced");

function reductions(rfn, xs) {
  const [init, complete, _reduce] = rfn;
  return xs ? (0, _reduce2.reduce)(reductions(rfn), xs) : [() => [init()], acc => (acc[acc.length - 1] = complete(acc[acc.length - 1]), acc), (acc, x) => {
    const res = _reduce(acc[acc.length - 1], x);

    if ((0, _reduced.isReduced)(res)) {
      acc.push(res.deref());
      return (0, _reduced.reduced)(acc);
    }

    acc.push(res);
    return acc;
  }];
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/rfn/some.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function some(...args) {
  const res = (0, _reduce.$$reduce)(some, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => false, pred ? (acc, x) => pred(x) ? (0, _reduced.reduced)(true) : acc : (acc, x) => x ? (0, _reduced.reduced)(true) : acc);
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/rfn/str.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str = str;

var _reduce = require("../reduce");

function str(sep, xs) {
  sep = sep || "";
  let first = true;
  return xs ? [...xs].join(sep) : (0, _reduce.reducer)(() => "", (acc, x) => (acc = first ? acc + x : acc + sep + x, first = false, acc));
}
},{"../reduce":"../../node_modules/@thi.ng/transducers/reduce.js"}],"../../node_modules/@thi.ng/transducers/rfn/sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = sub;

var _mathop = require("../internal/mathop");

function sub(...args) {
  return (0, _mathop.__mathop)(sub, (acc, x) => acc - x, 0, args);
}
},{"../internal/mathop":"../../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../../node_modules/@thi.ng/transducers/xform/benchmark.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.benchmark = benchmark;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function benchmark(src) {
  return src ? (0, _iterator.iterator1)(benchmark(), src) : rfn => {
    const r = rfn[2];
    let prev = Date.now();
    return (0, _compr.compR)(rfn, (acc, _) => {
      const t = Date.now();
      const x = t - prev;
      prev = t;
      return r(acc, x);
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/cat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cat = void 0;

var _compr = require("../func/compr");

var _reduced = require("../reduced");

/**
 * Transducer to concatenate iterable values. Iterates over each input
 * and emits individual values down stream, therefore removing one level
 * of nesting from the input. If, during processing, the transducer is
 * given a wrapped `reduced()` input iterable, it will still be
 * processed as normal, but then immediately triggers early termination
 * by wrapping its own result in `reduced()`. E.g. this behavior allows
 * a `mapcat()` user functions to benefit from `reduced` results.
 *
 * ```
 * [...iterator(comp(map((x) => [x, x]), cat()), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2, 3, 3, 4, 4 ]
 *
 * [...iterator(
 *   comp(
 *     mapIndexed((i, x) => [[i], [x, x]]),
 *     cat(),
 *     cat()
 *   ),
 *   "abc"
 * )]
 * // [ 0, 'a', 'a', 1, 'b', 'b', 2, 'c', 'c' ]
 *
 * [...mapcat((x)=>(x > 1 ? reduced([x, x]) : [x, x]), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2 ]
 * ```
 *
 * @see thi.ng/transducers/iter/concat
 * @see thi.ng/transducers/xform/mapcat
 */
const cat = () => rfn => {
  const r = rfn[2];
  return (0, _compr.compR)(rfn, (acc, x) => {
    if (x) {
      for (let y of (0, _reduced.unreduced)(x)) {
        acc = r(acc, y);

        if ((0, _reduced.isReduced)(acc)) {
          break;
        }
      }
    }

    return (0, _reduced.isReduced)(x) ? (0, _reduced.ensureReduced)(acc) : acc;
  });
};

exports.cat = cat;
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/converge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.converge = converge;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function converge(...args) {
  return (0, _iterator.$iter)(converge, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let prev = _api.SEMAPHORE;
    let done = false;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (done || prev !== _api.SEMAPHORE && pred(prev, x)) {
        done = true;
        return (0, _reduced.ensureReduced)(r(acc, x));
      }

      prev = x;
      return r(acc, x);
    });
  });
}
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/iter/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.Range = void 0;

var _reduced = require("../reduced");

function range(from, to, step) {
  return new Range(from, to, step);
}
/**
 * Simple class wrapper around given range interval and implementing
 * `Iterable` and `IReducible` interfaces, the latter is used to
 * accelerate use with `reduce`.
 */


class Range {
  constructor(from, to, step) {
    if (from === undefined) {
      from = 0;
      to = Infinity;
    } else if (to === undefined) {
      to = from;
      from = 0;
    }

    step = step === undefined ? from < to ? 1 : -1 : step;
    this.from = from;
    this.to = to;
    this.step = step;
  }

  *[Symbol.iterator]() {
    const step = this.step;
    const to = this.to;
    let from = this.from;

    if (step > 0) {
      while (from < to) {
        yield from;
        from += step;
      }
    } else if (step < 0) {
      while (from > to) {
        yield from;
        from += step;
      }
    }
  }

  $reduce(rfn, acc) {
    const step = this.step;

    if (step > 0) {
      for (let i = this.from, n = this.to; i < n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    } else {
      for (let i = this.from, n = this.to; i > n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    }

    return acc;
  }

}

exports.Range = Range;
},{"../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/iter/range2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range2d = range2d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range2d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;

  switch (args.length) {
    case 6:
      stepX = args[4];
      stepY = args[5];

    case 4:
      [fromX, toX, fromY, toY] = args;
      break;

    case 2:
      [toX, toY] = args;
      fromX = fromY = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);

  for (let y of (0, _range.range)(fromY, toY, stepY)) {
    for (let x of rx) {
      yield [x, y];
    }
  }
}
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./range":"../../node_modules/@thi.ng/transducers/iter/range.js"}],"../../node_modules/@thi.ng/transducers/iter/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.tuples = void 0;

function* zip(...src) {
  const iters = src.map(s => s[Symbol.iterator]());

  while (true) {
    const tuple = [];

    for (let i of iters) {
      let v = i.next();

      if (v.done) {
        return;
      }

      tuple.push(v.value);
    }

    yield tuple;
  }
}
/**
 * @deprecated renamed to `zip`
 */


const tuples = zip;
exports.tuples = tuples;
},{}],"../../node_modules/@thi.ng/transducers/xform/convolve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convolve1d = convolve1d;
exports.convolve2d = convolve2d;
exports.buildKernel2d = exports.buildKernel1d = void 0;

var _errors = require("@thi.ng/errors");

var _range = require("../iter/range");

var _range2d = require("../iter/range2d");

var _zip = require("../iter/zip");

var _iterator = require("../iterator");

var _add = require("../rfn/add");

var _transduce = require("../transduce");

var _map = require("./map");

const buildKernel1d = (weights, w) => {
  const w2 = w >> 1;
  return [...(0, _zip.zip)(weights, (0, _range.range)(-w2, w2 + 1))];
};

exports.buildKernel1d = buildKernel1d;

const buildKernel2d = (weights, w, h) => {
  const w2 = w >> 1;
  const h2 = h >> 1;
  return [...(0, _zip.zip)(weights, (0, _range2d.range2d)(-w2, w2 + 1, -h2, h2 + 1))];
};

exports.buildKernel2d = buildKernel2d;

const kernelLookup1d = (src, x, width, wrap, border) => wrap ? ({
  0: w,
  1: ox
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  return w * src[xx];
} : ({
  0: w,
  1: ox
}) => {
  return x < -ox || x >= width - ox ? border : w * src[x + ox];
};

const kernelLookup2d = (src, x, y, width, height, wrap, border) => wrap ? ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  const yy = y < -oy ? height + oy : y >= height - oy ? oy - 1 : y + oy;
  return w * src[yy * width + xx];
} : ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  return x < -ox || y < -oy || x >= width - ox || y >= height - oy ? border : w * src[(y + oy) * width + x + ox];
};

const kernelError = () => (0, _errors.illegalArgs)(`no kernel or kernel config`);

function convolve1d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve1d(opts), indices);
  }

  const {
    src,
    width
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth) && kernelError();
    kernel = buildKernel1d(opts.weights, opts.kwidth);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup1d(src, p, width, wrap, border)), rfn(), kernel));
}

function convolve2d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve2d(opts), indices);
  }

  const {
    src,
    width,
    height
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth && opts.kheight) && kernelError();
    kernel = buildKernel2d(opts.weights, opts.kwidth, opts.kheight);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup2d(src, p[0], p[1], width, height, wrap, border)), rfn(), kernel));
}
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","../iter/range":"../../node_modules/@thi.ng/transducers/iter/range.js","../iter/range2d":"../../node_modules/@thi.ng/transducers/iter/range2d.js","../iter/zip":"../../node_modules/@thi.ng/transducers/iter/zip.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../rfn/add":"../../node_modules/@thi.ng/transducers/rfn/add.js","../transduce":"../../node_modules/@thi.ng/transducers/transduce.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/dedupe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedupe = dedupe;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dedupe(...args) {
  return (0, _iterator.$iter)(dedupe, args) || (rfn => {
    const r = rfn[2];
    const equiv = args[0];
    let prev = _api.SEMAPHORE;
    return (0, _compr.compR)(rfn, equiv ? (acc, x) => {
      acc = prev !== _api.SEMAPHORE && equiv(prev, x) ? acc : r(acc, x);
      prev = x;
      return acc;
    } : (acc, x) => {
      acc = prev === x ? acc : r(acc, x);
      prev = x;
      return acc;
    });
  });
}
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

var _compose = require("@thi.ng/compose");

var _map = require("./map");

/**
 * Yields transducer which wraps incoming values in promises, which each
 * resolve after specified delay time (in ms).
 *
 * **Only to be used in async contexts and NOT with `transduce`
 * directly.**
 *
 * @param t
 */
const delayed = t => (0, _map.map)(x => (0, _compose.delayed)(x, t));

exports.delayed = delayed;
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function distinct(...args) {
  return (0, _iterator.$iter)(distinct, args) || (rfn => {
    const r = rfn[2];
    const opts = args[0] || {};
    const key = opts.key;

    const seen = (opts.cache || (() => new Set()))();

    return (0, _compr.compR)(rfn, key ? (acc, x) => {
      const k = key(x);
      return !seen.has(k) ? (seen.add(k), r(acc, x)) : acc;
    } : (acc, x) => !seen.has(x) ? (seen.add(x), r(acc, x)) : acc);
  });
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function throttle(pred, src) {
  return src ? (0, _iterator.iterator1)(throttle(pred), src) : rfn => {
    const r = rfn[2];

    const _pred = pred();

    return (0, _compr.compR)(rfn, (acc, x) => _pred(x) ? r(acc, x) : acc);
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/drop-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropNth = dropNth;

var _throttle = require("./throttle");

var _iterator = require("../iterator");

function dropNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(dropNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = n;
    return () => skip-- > 0 ? true : (skip = n, false);
  });
}
},{"./throttle":"../../node_modules/@thi.ng/transducers/xform/throttle.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/drop-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropWhile = dropWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dropWhile(...args) {
  return (0, _iterator.$iter)(dropWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? acc : r(acc, x));
  });
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function drop(n, src) {
  return src ? (0, _iterator.iterator1)(drop(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => m > 0 ? (m--, acc) : r(acc, x));
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/duplicate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicate = duplicate;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function duplicate(n = 1, src) {
  return src ? (0, _iterator.iterator)(duplicate(n), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => {
      for (let i = n; i >= 0 && !(0, _reduced.isReduced)(acc); i--) {
        acc = r(acc, x);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _iterator = require("../iterator");

var _compr = require("../func/compr");

function filter(pred, src) {
  return src ? (0, _iterator.iterator1)(filter(pred), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) ? r(acc, x) : acc);
  };
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js"}],"../../node_modules/@thi.ng/arrays/binary-search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = void 0;

var _compare = require("@thi.ng/compare");

/**
 * Returns the supposed index of `x` in pre-sorted array-like collection
 * `buf`. If `x` can't be found, returns `-index-1`.
 *
 * The optional `key` function is used to obtain the actual sort value
 * of `x` and each array item (default: identity).
 *
 * The optional `cmp` comparator (default: thi.ng/compare) is then used
 * to identify the index of `x`. The sort order of `buf` MUST be
 * compatible with that of `cmp`.
 *
 * @param buf
 * @param x
 * @param key
 * @param cmp
 */
const binarySearch = (buf, x, key = x => x, cmp = _compare.compare) => {
  const kx = key(x);
  let low = 0;
  let high = buf.length - 1;

  while (low <= high) {
    const mid = low + high >>> 1;
    const c = cmp(key(buf[mid]), kx);

    if (c < 0) {
      low = mid + 1;
    } else if (c > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -low - 1;
};

exports.binarySearch = binarySearch;
},{"@thi.ng/compare":"../../node_modules/@thi.ng/compare/index.js"}],"../../node_modules/@thi.ng/equiv/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivObject = exports.equivMap = exports.equivSet = exports.equivArrayLike = exports.equiv = void 0;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string";

const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return equivObject(a, b);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return equivArrayLike(a, b);
  }

  if (a instanceof Set && b instanceof Set) {
    return equivSet(a, b);
  }

  if (a instanceof Map && b instanceof Map) {
    return equivMap(a, b);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;

const equivArrayLike = (a, b, _equiv = equiv) => {
  let l = a.length;

  if (l === b.length) {
    while (--l >= 0 && _equiv(a[l], b[l]));
  }

  return l < 0;
};

exports.equivArrayLike = equivArrayLike;

const equivSet = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a.keys()].sort(), [...b.keys()].sort());

exports.equivSet = equivSet;

const equivMap = (a, b, _equiv = equiv) => a.size === b.size && _equiv([...a].sort(), [...b].sort());

exports.equivMap = equivMap;

const equivObject = (a, b, _equiv = equiv) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let k in a) {
    if (!b.hasOwnProperty(k) || !_equiv(a[k], b[k])) {
      return false;
    }
  }

  return true;
};

exports.equivObject = equivObject;
},{}],"../../node_modules/@thi.ng/arrays/ends-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endsWith = void 0;

var _equiv = require("@thi.ng/equiv");

const endsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (--i, --j >= 0 && equiv(buf[i], needle[j])) {}

  return j < 0;
};

exports.endsWith = endsWith;
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/arrays/ensure-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureIterable = void 0;

var _errors = require("@thi.ng/errors");

const ensureIterable = x => {
  if (!(x != null && x[Symbol.iterator])) {
    (0, _errors.illegalArgs)(`value is not iterable: ${x}`);
  }

  return x;
};

exports.ensureIterable = ensureIterable;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/arrays/ensure-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureArrayLike = exports.ensureArray = void 0;

var _checks = require("@thi.ng/checks");

var _ensureIterable = require("./ensure-iterable");

/**
 * Helper function to avoid unnecessary copying if `x` is already an
 * array. First checks if `x` is an array and if so returns it. Else
 * attempts to obtain an iterator from `x` and if successful collects it
 * as array and returns it. Throws error if `x` isn't iterable.
 *
 * @param x
 */
const ensureArray = x => (0, _checks.isArray)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];

exports.ensureArray = ensureArray;

const ensureArrayLike = x => (0, _checks.isArrayLike)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];

exports.ensureArrayLike = ensureArrayLike;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./ensure-iterable":"../../node_modules/@thi.ng/arrays/ensure-iterable.js"}],"../../node_modules/@thi.ng/arrays/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = exports.find = void 0;

var _equiv2 = require("@thi.ng/equiv");

/**
 * Similar to `Array.find()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */
const find = (src, x, equiv = _equiv2.equiv) => {
  const i = findIndex(src, x, equiv);
  return i !== -1 ? src[i] : undefined;
};
/**
 * Similar to `Array.findIndex()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */


exports.find = find;

const findIndex = (src, x, equiv = _equiv2.equiv) => {
  for (let i = src.length; --i >= 0;) {
    if (equiv(x, src[i])) return i;
  }

  return -1;
};

exports.findIndex = findIndex;
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/arrays/fuzzy-match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuzzyMatch = void 0;

var _equiv = require("@thi.ng/equiv");

/**
 * Performs a fuzzy search of `query` in `domain` and returns `true` if
 * successful.
 *
 * The optional `equiv` predicate can be used to customize
 * item equality checking. Uses @thi.ng/equiv by default.
 *
 * Adapted and generalized from:
 * https://github.com/bevacqua/fufuzzyzzysearch (MIT)
 *
 * @see thi.ng/transducers/xform/filterFuzzy
 *
 * @param domain
 * @param query
 * @param equiv
 */
const fuzzyMatch = (domain, query, equiv = _equiv.equiv) => {
  const nd = domain.length;
  const nq = query.length;

  if (nq > nd) {
    return false;
  }

  if (nq === nd) {
    return equiv(query, domain);
  }

  next: for (let i = 0, j = 0; i < nq; i++) {
    const q = query[i];

    while (j < nd) {
      if (equiv(domain[j++], q)) {
        continue next;
      }
    }

    return false;
  }

  return true;
};

exports.fuzzyMatch = fuzzyMatch;
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/arrays/peek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peek = void 0;

/**
 * Returns last element of given array or `undefined` if array is empty.
 *
 * @param x
 */
const peek = x => x[x.length - 1];

exports.peek = peek;
},{}],"../../node_modules/@thi.ng/random/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ARandom = void 0;
const INV_MAX = 1 / 0xffffffff;

class ARandom {
  float(norm = 1) {
    return this.int() * INV_MAX * norm;
  }

  norm(norm = 1) {
    return this.int() * INV_MAX * norm * 2 - norm;
  }

  minmax(min, max) {
    return this.float() * (max - min) + min;
  }
  /**
   * Returns approx. normal distribution using CLT.
   *
   * https://en.wikipedia.org/wiki/Central_limit_theorem
   *
   * @param n
   * @param offset
   * @param scale
   */


  gaussian(n = 10, offset = -0.5, scale = 1) {
    let sum = 0;
    let m = n;

    while (m-- > 0) sum += this.float(scale);

    return sum / n + offset;
  }

}

exports.ARandom = ARandom;
},{}],"../../node_modules/@thi.ng/random/smush32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smush32 = void 0;

var _api = require("./api");

// https://github.com/thi-ng/ct-head/blob/master/random.h
// https://gist.github.com/voidqk/d112165a26b45244a65298933c0349a4
const DEFAULT_SEED = 0xdecafbad;

class Smush32 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array([seed, 0]);
  }

  copy() {
    const gen = new Smush32();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(s) {
    this.buffer.set([s, 0]);
    return this;
  }

  int() {
    const b = this.buffer;
    const m = 0x5bd1e995;
    const k = b[1]++ * m >>> 0;
    const s = b[0] = (k ^ k >> 24 ^ b[0] * m >>> 0) * m >>> 0;
    return (s ^ s >>> 13) >>> 0;
  }

}

exports.Smush32 = Smush32;
},{"./api":"../../node_modules/@thi.ng/random/api.js"}],"../../node_modules/@thi.ng/random/system.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYSTEM = exports.SystemRandom = void 0;

var _api = require("./api");

const random = Math.random;

class SystemRandom extends _api.ARandom {
  int() {
    return random() * 0xffffffff >>> 0;
  }

  float(norm = 1) {
    return random() * norm;
  }

}

exports.SystemRandom = SystemRandom;
const SYSTEM = new SystemRandom();
exports.SYSTEM = SYSTEM;
},{"./api":"../../node_modules/@thi.ng/random/api.js"}],"../../node_modules/@thi.ng/random/xorshift128.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorShift128 = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a];

class XorShift128 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  copy() {
    return new XorShift128(this.buffer);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t << 11;
    t ^= t >>> 8;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    return s[0] = (t ^ w ^ w >>> 19) >>> 0;
  }

}

exports.XorShift128 = XorShift128;
},{"./api":"../../node_modules/@thi.ng/random/api.js"}],"../../node_modules/@thi.ng/random/xorwow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorWow = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift#xorwow
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a, 0xf69a5c71];

class XorWow extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(5);
    this.seed(seed);
  }

  copy() {
    return new XorWow(this.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t >>> 2;
    t ^= t << 1;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    t ^= w;
    t ^= w << 4;
    s[0] = t;
    return t + (s[4] += 0x587c5) >>> 0;
  }

}

exports.XorWow = XorWow;
},{"./api":"../../node_modules/@thi.ng/random/api.js"}],"../../node_modules/@thi.ng/random/xsadd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XsAdd = void 0;

var _api = require("./api");

// https://github.com/MersenneTwister-Lab/XSadd/blob/master/xsadd.h
const DEFAULT_SEED = 0xdecafbad;

class XsAdd extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  copy() {
    const gen = new XsAdd();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(seed) {
    const s = this.buffer;
    s.set([seed, 0, 0, 0]);

    for (let j = 0, i = 1; i < 8; j = i++) {
      let x = (s[j & 3] ^ s[j & 3] >>> 30) >>> 0;
      x = 0x8965 * x + ((0x6c07 * x & 0xffff) << 16) >>> 0;
      s[i & 3] ^= i + x >>> 0;
    }

    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[0];
    t ^= t << 15;
    t ^= t >>> 18;
    t ^= s[3] << 11;
    s[0] = s[1];
    s[1] = s[2];
    s[2] = s[3];
    s[3] = t;
    return t + s[2] >>> 0;
  }

}

exports.XsAdd = XsAdd;
},{"./api":"../../node_modules/@thi.ng/random/api.js"}],"../../node_modules/@thi.ng/random/random-id.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomID = void 0;

var _system = require("./system");

/**
 * Generates and returns a random string of `len` characters (default
 * 4), plus optional given `prefix` and using only provided `syms`
 * characters (default lowercase a-z).
 *
 * ```
 * randomID()
 * "qgdt"
 *
 * randomID(8, "id-", "0123456789ABCDEF")
 * "id-94EF6E1A"
 * ```
 *
 * @param len
 * @param prefix
 * @param syms
 * @param rnd
 */
const randomID = (len = 4, prefix = "", syms = "abcdefghijklmnopqrstuvwxyz", rnd = _system.SYSTEM) => {
  for (const n = syms.length; --len >= 0;) {
    prefix += syms[rnd.float(n) | 0];
  }

  return prefix;
};

exports.randomID = randomID;
},{"./system":"../../node_modules/@thi.ng/random/system.js"}],"../../node_modules/@thi.ng/random/weighted-random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weightedRandom = void 0;

var _system = require("./system");

/**
 * Returns a no-arg function which produces a random choice of given
 * weighted `choices` and using given `IRandom` instance (default:
 * `SYSTEM`). If `weights` are given, it must be the same size as
 * `choices`. If omitted, each choice will have same probability.
 *
 * https://www.electricmonk.nl/log/2009/12/23/weighted-random-distribution/
 *
 * @param choices
 * @param weights
 */
const weightedRandom = (choices, weights, rnd = _system.SYSTEM) => {
  const opts = choices.map(weights ? (x, i) => [x, weights[i]] : x => [x, 1]).sort((a, b) => b[1] - a[1]);
  const n = choices.length;
  let total = 0,
      i,
      r,
      sum;

  for (i = 0; i < n; i++) {
    total += opts[i][1];
  }

  return () => {
    r = rnd.float(total);
    sum = total;

    for (i = 0; i < n; i++) {
      sum -= opts[i][1];

      if (sum <= r) {
        return opts[i][0];
      }
    }
  };
};

exports.weightedRandom = weightedRandom;
},{"./system":"../../node_modules/@thi.ng/random/system.js"}],"../../node_modules/@thi.ng/random/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _smush = require("./smush32");

Object.keys(_smush).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _smush[key];
    }
  });
});

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _system[key];
    }
  });
});

var _xorshift = require("./xorshift128");

Object.keys(_xorshift).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorshift[key];
    }
  });
});

var _xorwow = require("./xorwow");

Object.keys(_xorwow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorwow[key];
    }
  });
});

var _xsadd = require("./xsadd");

Object.keys(_xsadd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xsadd[key];
    }
  });
});

var _randomId = require("./random-id");

Object.keys(_randomId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _randomId[key];
    }
  });
});

var _weightedRandom = require("./weighted-random");

Object.keys(_weightedRandom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _weightedRandom[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/random/api.js","./smush32":"../../node_modules/@thi.ng/random/smush32.js","./system":"../../node_modules/@thi.ng/random/system.js","./xorshift128":"../../node_modules/@thi.ng/random/xorshift128.js","./xorwow":"../../node_modules/@thi.ng/random/xorwow.js","./xsadd":"../../node_modules/@thi.ng/random/xsadd.js","./random-id":"../../node_modules/@thi.ng/random/random-id.js","./weighted-random":"../../node_modules/@thi.ng/random/weighted-random.js"}],"../../node_modules/@thi.ng/arrays/shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = void 0;

var _random = require("@thi.ng/random");

/**
 * Shuffles the first `n` items of given array, using Fisher-yates and
 * optional `rnd` PRNG. If `n` is `undefined`, the entire array will be
 * shuffled.
 *
 *
 * @param buf
 * @param n
 * @param rnd
 */
const shuffle = (buf, n = buf.length, rnd = _random.SYSTEM) => {
  n = Math.min(n, buf.length);
  const l = n;

  if (l > 1) {
    n = Math.min(n, l);

    while (--n >= 0) {
      const a = rnd.float(l) | 0;
      const b = rnd.float(l) | 0;
      const t = buf[a];
      buf[a] = buf[b];
      buf[b] = t;
    }
  }

  return buf;
};

exports.shuffle = shuffle;
},{"@thi.ng/random":"../../node_modules/@thi.ng/random/index.js"}],"../../node_modules/@thi.ng/arrays/starts-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = void 0;

var _equiv = require("@thi.ng/equiv");

const startsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (-j >= 0 && equiv(buf[j], needle[j])) {}

  return j < 0;
};

exports.startsWith = startsWith;
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/arrays/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = void 0;

/**
 * Returns optimized function to immutably select, repeat, reshape and /
 * or reorder array / object values in the specified index order. Fast
 * paths for up to 8 indices are provided, before a loop based approach
 * is used.
 *
 * ```
 * swizzle([0, 0, 0])([1, 2, 3, 4])    // [ 1, 1, 1 ]
 * swizzle([1, 1, 3, 3])([1, 2, 3, 4]) // [ 2, 2, 4, 4 ]
 * swizzle([2, 0])([1, 2, 3])          // [ 3, 1 ]
 * ```
 *
 * Objects can be used as input to the generated function, but the
 * result will always be in array form.
 *
 * ```
 * swizzle(["a", "c", "b"])({a: 1, b: 2, c: 3}) // [ 1, 3, 2 ]
 * ```
 *
 * @param order indices
 */
const swizzle = order => {
  const [a, b, c, d, e, f, g, h] = order;

  switch (order.length) {
    case 0:
      return () => [];

    case 1:
      return x => [x[a]];

    case 2:
      return x => [x[a], x[b]];

    case 3:
      return x => [x[a], x[b], x[c]];

    case 4:
      return x => [x[a], x[b], x[c], x[d]];

    case 5:
      return x => [x[a], x[b], x[c], x[d], x[e]];

    case 6:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f]];

    case 7:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g]];

    case 8:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g], x[h]];

    default:
      return x => {
        const res = [];

        for (let i = order.length; --i >= 0;) {
          res[i] = x[order[i]];
        }

        return res;
      };
  }
};

exports.swizzle = swizzle;
},{}],"../../node_modules/@thi.ng/arrays/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _binarySearch = require("./binary-search");

Object.keys(_binarySearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _binarySearch[key];
    }
  });
});

var _endsWith = require("./ends-with");

Object.keys(_endsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endsWith[key];
    }
  });
});

var _ensureArray = require("./ensure-array");

Object.keys(_ensureArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureArray[key];
    }
  });
});

var _ensureIterable = require("./ensure-iterable");

Object.keys(_ensureIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureIterable[key];
    }
  });
});

var _find = require("./find");

Object.keys(_find).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _find[key];
    }
  });
});

var _fuzzyMatch = require("./fuzzy-match");

Object.keys(_fuzzyMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fuzzyMatch[key];
    }
  });
});

var _peek = require("./peek");

Object.keys(_peek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _peek[key];
    }
  });
});

var _shuffle = require("./shuffle");

Object.keys(_shuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shuffle[key];
    }
  });
});

var _startsWith = require("./starts-with");

Object.keys(_startsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startsWith[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});
},{"./binary-search":"../../node_modules/@thi.ng/arrays/binary-search.js","./ends-with":"../../node_modules/@thi.ng/arrays/ends-with.js","./ensure-array":"../../node_modules/@thi.ng/arrays/ensure-array.js","./ensure-iterable":"../../node_modules/@thi.ng/arrays/ensure-iterable.js","./find":"../../node_modules/@thi.ng/arrays/find.js","./fuzzy-match":"../../node_modules/@thi.ng/arrays/fuzzy-match.js","./peek":"../../node_modules/@thi.ng/arrays/peek.js","./shuffle":"../../node_modules/@thi.ng/arrays/shuffle.js","./starts-with":"../../node_modules/@thi.ng/arrays/starts-with.js","./swizzle":"../../node_modules/@thi.ng/arrays/swizzle.js"}],"../../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterFuzzy = filterFuzzy;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _filter = require("./filter");

function filterFuzzy(...args) {
  const iter = args.length > 1 && (0, _iterator.$iter)(filterFuzzy, args);

  if (iter) {
    return iter;
  }

  const query = args[0];
  const {
    key,
    equiv
  } = args[1] || {};
  return (0, _filter.filter)(x => (0, _arrays.fuzzyMatch)(key != null ? key(x) : x, query, equiv));
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./filter":"../../node_modules/@thi.ng/transducers/xform/filter.js"}],"../../node_modules/@thi.ng/transducers/xform/flatten-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenWith = flattenWith;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function flattenWith(fn, src) {
  return src ? (0, _iterator.iterator)(flattenWith(fn), src) : rfn => {
    const reduce = rfn[2];

    const flatten = (acc, x) => {
      const xx = fn(x);

      if (xx) {
        for (let y of xx) {
          acc = flatten(acc, y);

          if ((0, _reduced.isReduced)(acc)) {
            break;
          }
        }

        return acc;
      }

      return reduce(acc, x);
    };

    return (0, _compr.compR)(rfn, flatten);
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/flatten.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;

var _flattenWith = require("./flatten-with");

function flatten(src) {
  return (0, _flattenWith.flattenWith)(x => x != null && x[Symbol.iterator] && typeof x !== "string" ? x : undefined, src);
}
},{"./flatten-with":"../../node_modules/@thi.ng/transducers/xform/flatten-with.js"}],"../../node_modules/@thi.ng/transducers/xform/map-indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapIndexed = mapIndexed;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapIndexed(...args) {
  return (0, _iterator.$iter)(mapIndexed, args) || (rfn => {
    const r = rfn[2];
    const fn = args[0];
    let i = args[1] || 0;
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(i++, x)));
  });
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexed = indexed;

var _iterator = require("../iterator");

var _mapIndexed = require("./map-indexed");

function indexed(...args) {
  const iter = (0, _iterator.$iter)(indexed, args);

  if (iter) {
    return iter;
  }

  const from = args[0] || 0;
  return (0, _mapIndexed.mapIndexed)((i, x) => [from + i, x]);
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map-indexed":"../../node_modules/@thi.ng/transducers/xform/map-indexed.js"}],"../../node_modules/@thi.ng/transducers/xform/interleave.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interleave = interleave;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interleave(sep, src) {
  return src ? (0, _iterator.iterator)(interleave(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    return (0, _compr.compR)(rfn, (acc, x) => {
      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/interpose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpose = interpose;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interpose(sep, src) {
  return src ? (0, _iterator.iterator)(interpose(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    let first = true;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (first) {
        first = false;
        return r(acc, x);
      }

      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/keep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keep = keep;

var _compose = require("@thi.ng/compose");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function keep(...args) {
  return (0, _iterator.$iter)(keep, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0] || _compose.identity;
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) != null ? r(acc, x) : acc);
  });
}
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/labeled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labeled = labeled;

var _checks = require("@thi.ng/checks");

var _iterator = require("../iterator");

var _map = require("./map");

function labeled(id, src) {
  return src ? (0, _iterator.iterator1)(labeled(id), src) : (0, _map.map)((0, _checks.isFunction)(id) ? x => [id(x), x] : x => [id, x]);
}
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/func/deep-transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepTransform = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Higher-order deep object transformer. Accepts a nested `spec`
 * array reflecting same key structure as the object to be mapped,
 * but with functions or sub-specs as their values.
 * Returns a new function, which when called, recursively applies
 * nested transformers in post-order traversal (child transformers
 * are run first) and returns the result of the root transformer.
 *
 * The transform specs are given as arrays in this format:
 *
 * ```
 * [tx-function, {key1: [tx-function, {...}], key2: tx-fn}]
 * ```
 *
 * If a key in the spec has no further sub maps, its transform
 * function can be given directly without having to wrap it into
 * the usual array structure.
 *
 * ```
 * // source object to be transformed
 * src = {
 *    meta: {
 *      author: { name: "Alice", email: "a@b.com" },
 *      date: 1041510896000
 *    },
 *    type: "post",
 *    title: "Hello world",
 *    body: "Ratione necessitatibus doloremque itaque."
 * };
 *
 * // deep transformation spec
 * spec = [
 *    // root transform (called last)
 *    ({type, meta, title, body}) => ["div", {class: type}, title, meta, body],
 *    // object of transform sub-specs
 *    {
 *      meta: [
 *        ({author, date}) => ["div.meta", author, `(${date})`],
 *        {
 *          author: ({email, name}) => ["a", {href: `mailto:${email}`}, name],
 *          date: (d) => new Date(d).toLocaleString()
 *        }
 *      ],
 *      title: (title) => ["h1", title]
 *    }
 * ];
 *
 * // build transformer & apply to src
 * deepTransform(spec)(src);
 *
 * // [ "div",
 * //   { class: "article" },
 * //   [ "h1", "Hello world" ],
 * //   [ "div.meta",
 * //     [ "a", { href: "mailto:a@.b.com" }, "Alice" ],
 * //     "(1/2/2003, 12:34:56 PM)" ],
 * //   "Ratione necessitatibus doloremque itaque." ]
 * ```
 *
 * @param spec transformation spec
 */
const deepTransform = spec => {
  if ((0, _checks.isFunction)(spec)) {
    return spec;
  }

  const mapfns = Object.keys(spec[1] || {}).reduce((acc, k) => (acc[k] = deepTransform(spec[1][k]), acc), {});
  return x => {
    const res = Object.assign({}, x);

    for (let k in mapfns) {
      res[k] = mapfns[k](res[k]);
    }

    return spec[0](res);
  };
};

exports.deepTransform = deepTransform;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js"}],"../../node_modules/@thi.ng/transducers/xform/map-deep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDeep = mapDeep;

var _deepTransform = require("../func/deep-transform");

var _iterator = require("../iterator");

var _map = require("./map");

function mapDeep(spec, src) {
  return src ? (0, _iterator.iterator1)(mapDeep(spec), src) : (0, _map.map)((0, _deepTransform.deepTransform)(spec));
}
},{"../func/deep-transform":"../../node_modules/@thi.ng/transducers/func/deep-transform.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/map-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;

var _iterator = require("../iterator");

var _map = require("./map");

function mapKeys(...args) {
  const iter = (0, _iterator.$iter)(mapKeys, args);

  if (iter) {
    return iter;
  }

  const keys = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? Object.assign({}, x) : x;

    for (let k in keys) {
      res[k] = keys[k](x[k]);
    }

    return res;
  });
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/map-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNth = mapNth;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapNth(...args) {
  const iter = (0, _iterator.$iter)(mapNth, args);

  if (iter) {
    return iter;
  }

  let n = args[0] - 1;
  let offset;
  let fn;

  if (typeof args[1] === "number") {
    offset = args[1];
    fn = args[2];
  } else {
    fn = args[1];
    offset = 0;
  }

  return rfn => {
    const r = rfn[2];
    let skip = 0,
        off = offset;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (off === 0) {
        if (skip === 0) {
          skip = n;
          return r(acc, fn(x));
        }

        skip--;
      } else {
        off--;
      }

      return r(acc, x);
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/map-vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapVals = mapVals;

var _iterator = require("../iterator");

var _map = require("./map");

function mapVals(...args) {
  const iter = (0, _iterator.$iter)(mapVals, args);

  if (iter) {
    return iter;
  }

  const fn = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? {} : x;

    for (let k in x) {
      res[k] = fn(x[k]);
    }

    return res;
  });
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/func/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;

var _compose = require("@thi.ng/compose");

function comp(...fns) {
  return _compose.comp.apply(null, fns);
}
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js"}],"../../node_modules/@thi.ng/transducers/xform/mapcat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapcat = mapcat;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _cat = require("./cat");

var _map = require("./map");

function mapcat(fn, src) {
  return src ? (0, _iterator.iterator)(mapcat(fn), src) : (0, _comp.comp)((0, _map.map)(fn), (0, _cat.cat)());
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./cat":"../../node_modules/@thi.ng/transducers/xform/cat.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function take(n, src) {
  return src ? (0, _iterator.iterator)(take(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => --m > 0 ? r(acc, x) : m === 0 ? (0, _reduced.ensureReduced)(r(acc, x)) : (0, _reduced.reduced)(acc));
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/match-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchFirst = matchFirst;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _take = require("./take");

function matchFirst(pred, src) {
  return src ? [...(0, _iterator.iterator1)(matchFirst(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _take.take)(1));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./filter":"../../node_modules/@thi.ng/transducers/xform/filter.js","./take":"../../node_modules/@thi.ng/transducers/xform/take.js"}],"../../node_modules/@thi.ng/transducers/internal/drain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__drain = void 0;

var _reduced = require("../reduced");

/**
 * Helper HOF yielding a buffer drain completion function for some
 * transducers.
 *
 * @param buf
 * @param complete
 * @param reduce
 */
const __drain = (buf, complete, reduce) => acc => {
  while (buf.length && !(0, _reduced.isReduced)(acc)) {
    acc = reduce(acc, buf.shift());
  }

  return complete(acc);
};

exports.__drain = __drain;
},{"../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/take-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var _drain = require("../internal/drain");

var _iterator = require("../iterator");

function takeLast(n, src) {
  return src ? (0, _iterator.iterator)(takeLast(n), src) : ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      if (buf.length === n) {
        buf.shift();
      }

      buf.push(x);
      return acc;
    }];
  };
}
},{"../internal/drain":"../../node_modules/@thi.ng/transducers/internal/drain.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/match-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchLast = matchLast;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _takeLast = require("./take-last");

function matchLast(pred, src) {
  return src ? [...(0, _iterator.iterator)(matchLast(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _takeLast.takeLast)(1));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./filter":"../../node_modules/@thi.ng/transducers/xform/filter.js","./take-last":"../../node_modules/@thi.ng/transducers/xform/take-last.js"}],"../../node_modules/@thi.ng/transducers/xform/moving-average.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingAverage = movingAverage;

var _errors = require("@thi.ng/errors");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function movingAverage(period, src) {
  return src ? (0, _iterator.iterator1)(movingAverage(period), src) : rfn => {
    period |= 0;
    period < 2 && (0, _errors.illegalArgs)("period must be >= 2");
    const reduce = rfn[2];
    const window = [];
    let sum = 0;
    return (0, _compr.compR)(rfn, (acc, x) => {
      const n = window.push(x);
      sum += x;
      n > period && (sum -= window.shift());
      return n >= period ? reduce(acc, sum / period) : acc;
    });
  };
}
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/internal/sort-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__sortOpts = void 0;

var _compare = require("@thi.ng/compare");

var _compose = require("@thi.ng/compose");

const __sortOpts = opts => Object.assign({
  key: _compose.identity,
  compare: _compare.compare
}, opts);

exports.__sortOpts = __sortOpts;
},{"@thi.ng/compare":"../../node_modules/@thi.ng/compare/index.js","@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js"}],"../../node_modules/@thi.ng/transducers/xform/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _iterator = require("../iterator");

function partition(...args) {
  const iter = (0, _iterator.$iter)(partition, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  let size = args[0],
      all,
      step;

  if (typeof args[1] == "number") {
    step = args[1];
    all = args[2];
  } else {
    step = size;
    all = args[1];
  }

  return ([init, complete, reduce]) => {
    let buf = [];
    let skip = 0;
    return [init, acc => {
      if (all && buf.length > 0) {
        acc = reduce(acc, buf);
        buf = [];
      }

      return complete(acc);
    }, (acc, x) => {
      if (skip <= 0) {
        if (buf.length < size) {
          buf.push(x);
        }

        if (buf.length === size) {
          acc = reduce(acc, buf);
          buf = step < size ? buf.slice(step) : [];
          skip = step - size;
        }
      } else {
        skip--;
      }

      return acc;
    }];
  };
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/moving-median.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingMedian = movingMedian;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _map = require("./map");

var _partition = require("./partition");

function movingMedian(...args) {
  const iter = (0, _iterator.$iter)(movingMedian, args);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  const m = n >> 1;
  return (0, _comp.comp)((0, _partition.partition)(n, 1, true), (0, _map.map)(window => window.slice().sort((a, b) => compare(key(a), key(b)))[m]));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js","./partition":"../../node_modules/@thi.ng/transducers/xform/partition.js"}],"../../node_modules/@thi.ng/transducers/xform/multiplex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplex = multiplex;

var _compose = require("@thi.ng/compose");

var _step = require("../step");

var _map = require("./map");

function multiplex(...args) {
  return (0, _map.map)(_compose.juxt.apply(null, args.map(_step.step)));
}
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","../step":"../../node_modules/@thi.ng/transducers/step.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/func/renamer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renamer = void 0;

const renamer = kmap => {
  const ks = Object.keys(kmap);
  const [a2, b2, c2] = ks;
  const [a1, b1, c1] = ks.map(k => kmap[k]);

  switch (ks.length) {
    case 3:
      return x => {
        const res = {};
        let v;
        v = x[c1], v !== undefined && (res[c2] = v);
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 2:
      return x => {
        const res = {};
        let v;
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 1:
      return x => {
        const res = {};
        let v = x[a1];
        v !== undefined && (res[a2] = v);
        return res;
      };

    default:
      return x => {
        let k, v;
        const res = {};

        for (let i = ks.length - 1; i >= 0; i--) {
          k = ks[i], v = x[kmap[k]], v !== undefined && (res[k] = v);
        }

        return res;
      };
  }
};

exports.renamer = renamer;
},{}],"../../node_modules/@thi.ng/transducers/xform/rename.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rename = rename;

var _checks = require("@thi.ng/checks");

var _comp = require("../func/comp");

var _renamer = require("../func/renamer");

var _iterator = require("../iterator");

var _transduce = require("../transduce");

var _filter = require("./filter");

var _map = require("./map");

function rename(...args) {
  const iter = args.length > 2 && (0, _iterator.$iter)(rename, args);

  if (iter) {
    return iter;
  }

  let kmap = args[0];

  if ((0, _checks.isArray)(kmap)) {
    kmap = kmap.reduce((acc, k, i) => (acc[k] = i, acc), {});
  }

  if (args[1]) {
    const ks = Object.keys(kmap);
    return (0, _map.map)(y => (0, _transduce.transduce)((0, _comp.comp)((0, _map.map)(k => [k, y[kmap[k]]]), (0, _filter.filter)(x => x[1] !== undefined)), args[1], ks));
  } else {
    return (0, _map.map)((0, _renamer.renamer)(kmap));
  }
}
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../func/renamer":"../../node_modules/@thi.ng/transducers/func/renamer.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../transduce":"../../node_modules/@thi.ng/transducers/transduce.js","./filter":"../../node_modules/@thi.ng/transducers/xform/filter.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/multiplex-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplexObj = multiplexObj;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _multiplex = require("./multiplex");

var _rename = require("./rename");

function multiplexObj(...args) {
  const iter = (0, _iterator.$iter)(multiplexObj, args);

  if (iter) {
    return iter;
  }

  const [xforms, rfn] = args;
  const ks = Object.keys(xforms);
  return (0, _comp.comp)(_multiplex.multiplex.apply(null, ks.map(k => xforms[k])), (0, _rename.rename)(ks, rfn));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./multiplex":"../../node_modules/@thi.ng/transducers/xform/multiplex.js","./rename":"../../node_modules/@thi.ng/transducers/xform/rename.js"}],"../../node_modules/@thi.ng/transducers/xform/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = void 0;

/**
 * No-op / pass-through transducer, essentially the same as:
 * `map(identity)`, but faster. Useful for testing and / or to keep
 * existing values in a `multiplex()` tuple lane.
 */
const noop = () => rfn => rfn;

exports.noop = noop;
},{}],"../../node_modules/@thi.ng/transducers/xform/pad-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padLast = padLast;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function padLast(n, fill, src) {
  return src ? (0, _iterator.iterator)(padLast(n, fill), src) : ([init, complete, reduce]) => {
    let m = 0;
    return [init, acc => {
      let rem = m % n;

      if (rem > 0) {
        while (++rem <= n && !(0, _reduced.isReduced)(acc)) {
          acc = reduce(acc, fill);
        }
      }

      return complete(acc);
    }, (acc, x) => (m++, reduce(acc, x))];
  };
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/page.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = page;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _drop = require("./drop");

var _take = require("./take");

function page(...args) {
  return (0, _iterator.$iter)(page, args) || (0, _comp.comp)((0, _drop.drop)(args[0] * (args[1] || 10)), (0, _take.take)(args[1] || 10));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./drop":"../../node_modules/@thi.ng/transducers/xform/drop.js","./take":"../../node_modules/@thi.ng/transducers/xform/take.js"}],"../../node_modules/@thi.ng/transducers/xform/partition-by.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionBy = partitionBy;

var _api = require("@thi.ng/api");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function partitionBy(...args) {
  return (0, _iterator.$iter)(partitionBy, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const fn = args[0];
    const f = args[1] === true ? fn() : fn;
    let prev = _api.SEMAPHORE;
    let chunk;
    return [init, acc => {
      if (chunk && chunk.length) {
        acc = reduce(acc, chunk);
        chunk = null;
      }

      return complete(acc);
    }, (acc, x) => {
      const curr = f(x);

      if (prev === _api.SEMAPHORE) {
        prev = curr;
        chunk = [x];
      } else if (curr === prev) {
        chunk.push(x);
      } else {
        chunk && (acc = reduce(acc, chunk));
        chunk = (0, _reduced.isReduced)(acc) ? null : [x];
        prev = curr;
      }

      return acc;
    }];
  });
}
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/partition-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionOf = partitionOf;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function partitionOf(sizes, src) {
  return src ? (0, _iterator.iterator)(partitionOf(sizes), src) : (0, _partitionBy.partitionBy)(() => {
    let i = 0,
        j = 0;
    return () => {
      if (i++ === sizes[j]) {
        i = 1;
        j = (j + 1) % sizes.length;
      }

      return j;
    };
  }, true);
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../../node_modules/@thi.ng/transducers/xform/partition-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSort = partitionSort;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _mapcat = require("./mapcat");

var _partition = require("./partition");

function partitionSort(...args) {
  const iter = (0, _iterator.$iter)(partitionSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  return (0, _comp.comp)((0, _partition.partition)(args[0], true), (0, _mapcat.mapcat)(window => window.slice().sort((a, b) => compare(key(a), key(b)))));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./mapcat":"../../node_modules/@thi.ng/transducers/xform/mapcat.js","./partition":"../../node_modules/@thi.ng/transducers/xform/partition.js"}],"../../node_modules/@thi.ng/transducers/xform/partition-sync.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSync = partitionSync;

var _checks = require("@thi.ng/checks");

var _compose = require("@thi.ng/compose");

var _iterator = require("../iterator");

function partitionSync(...args) {
  return (0, _iterator.$iter)(partitionSync, args, _iterator.iterator) || (([init, complete, reduce]) => {
    let curr = {};
    let first = true;
    const currKeys = new Set();
    const {
      key,
      mergeOnly,
      reset,
      all
    } = Object.assign({
      key: _compose.identity,
      mergeOnly: false,
      reset: true,
      all: true
    }, args[1]);
    const ks = (0, _checks.isArray)(args[0]) ? new Set(args[0]) : args[0];
    return [init, acc => {
      if (reset && all && currKeys.size > 0 || !reset && first) {
        acc = reduce(acc, curr);
        curr = undefined;
        currKeys.clear();
        first = false;
      }

      return complete(acc);
    }, (acc, x) => {
      const k = key(x);

      if (ks.has(k)) {
        curr[k] = x;
        currKeys.add(k);

        if (mergeOnly || requiredInputs(ks, currKeys)) {
          acc = reduce(acc, curr);
          first = false;

          if (reset) {
            curr = {};
            currKeys.clear();
          } else {
            curr = Object.assign({}, curr);
          }
        }
      }

      return acc;
    }];
  });
}

const requiredInputs = (required, curr) => {
  if (curr.size < required.size) return false;

  for (let id of required) {
    if (!curr.has(id)) return false;
  }

  return true;
};
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _iterator = require("../iterator");

var _map = require("./map");

function pluck(key, src) {
  return src ? (0, _iterator.iterator1)(pluck(key), src) : (0, _map.map)(x => x[key]);
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var _random = require("@thi.ng/random");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function sample(...args) {
  const iter = (0, _iterator.$iter)(sample, args);

  if (iter) {
    return iter;
  }

  const prob = args[0];
  const rnd = args[1] || _random.SYSTEM;
  return rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => rnd.float() < prob ? r(acc, x) : acc);
  };
}
},{"@thi.ng/random":"../../node_modules/@thi.ng/random/index.js","../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function scan(...args) {
  return args.length > 2 && (0, _iterator.$iter)(scan, args, _iterator.iterator) || (([inito, completeo, reduceo]) => {
    const [initi, completei, reducei] = args[0];
    let acc = args.length > 1 && args[1] != null ? args[1] : initi();
    return [inito, _acc => {
      let a = completei(acc);

      if (a !== acc) {
        _acc = (0, _reduced.unreduced)(reduceo(_acc, a));
      }

      acc = a;
      return completeo(_acc);
    }, (_acc, x) => {
      acc = reducei(acc, x);

      if ((0, _reduced.isReduced)(acc)) {
        return (0, _reduced.ensureReduced)(reduceo(_acc, acc.deref()));
      }

      return reduceo(_acc, acc);
    }];
  });
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/func/key-selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keySelector = void 0;

var _renamer = require("./renamer");

const keySelector = keys => (0, _renamer.renamer)(keys.reduce((acc, x) => (acc[x] = x, acc), {}));

exports.keySelector = keySelector;
},{"./renamer":"../../node_modules/@thi.ng/transducers/func/renamer.js"}],"../../node_modules/@thi.ng/transducers/xform/select-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectKeys = selectKeys;

var _keySelector = require("../func/key-selector");

var _iterator = require("../iterator");

var _map = require("./map");

function selectKeys(keys, src) {
  return src ? (0, _iterator.iterator1)(selectKeys(keys), src) : (0, _map.map)((0, _keySelector.keySelector)(keys));
}
},{"../func/key-selector":"../../node_modules/@thi.ng/transducers/func/key-selector.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/side-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sideEffect = void 0;

var _map = require("./map");

/**
 * Helper transducer. Applies given `fn` to each input value, presumably
 * for side effects. Discards function's result and yields original
 * inputs.
 *
 * @param fn side effect
 */
const sideEffect = fn => (0, _map.map)(x => (fn(x), x));

exports.sideEffect = sideEffect;
},{"./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/sliding-window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slidingWindow = slidingWindow;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function slidingWindow(...args) {
  const iter = (0, _iterator.$iter)(slidingWindow, args);

  if (iter) {
    return iter;
  }

  const size = args[0];
  const partial = args[1] !== false;
  return rfn => {
    const reduce = rfn[2];
    let buf = [];
    return (0, _compr.compR)(rfn, (acc, x) => {
      buf.push(x);

      if (partial || buf.length === size) {
        acc = reduce(acc, buf);
        buf = buf.slice(buf.length === size ? 1 : 0);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/stream-shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamShuffle = streamShuffle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function streamShuffle(...args) {
  return (0, _iterator.$iter)(streamShuffle, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const n = args[0];
    const maxSwaps = args[1] || n;
    const buf = [];
    return [init, acc => {
      while (buf.length && !(0, _reduced.isReduced)(acc)) {
        (0, _arrays.shuffle)(buf, maxSwaps);
        acc = reduce(acc, buf.shift());
      }

      acc = complete(acc);
      return acc;
    }, (acc, x) => {
      buf.push(x);
      (0, _arrays.shuffle)(buf, maxSwaps);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  });
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/stream-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamSort = streamSort;

var _arrays = require("@thi.ng/arrays");

var _drain = require("../internal/drain");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

function streamSort(...args) {
  const iter = (0, _iterator.$iter)(streamSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  return ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      const idx = (0, _arrays.binarySearch)(buf, x, key, compare);
      buf.splice(idx < 0 ? -(idx + 1) : idx, 0, x);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  };
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","../internal/drain":"../../node_modules/@thi.ng/transducers/internal/drain.js","../internal/sort-opts":"../../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/struct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.struct = struct;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _mapKeys = require("./map-keys");

var _partition = require("./partition");

var _partitionOf = require("./partition-of");

var _rename = require("./rename");

function struct(fields, src) {
  return src ? (0, _iterator.iterator)(struct(fields), src) : (0, _comp.comp)((0, _partitionOf.partitionOf)(fields.map(f => f[1])), (0, _partition.partition)(fields.length), (0, _rename.rename)(fields.map(f => f[0])), (0, _mapKeys.mapKeys)(fields.reduce((acc, f) => f[2] ? (acc[f[0]] = f[2], acc) : acc, {}), false));
}
},{"../func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map-keys":"../../node_modules/@thi.ng/transducers/xform/map-keys.js","./partition":"../../node_modules/@thi.ng/transducers/xform/partition.js","./partition-of":"../../node_modules/@thi.ng/transducers/xform/partition-of.js","./rename":"../../node_modules/@thi.ng/transducers/xform/rename.js"}],"../../node_modules/@thi.ng/transducers/xform/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = swizzle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _map = require("./map");

function swizzle(order, src) {
  return src ? (0, _iterator.iterator1)(swizzle(order), src) : (0, _map.map)((0, _arrays.swizzle)(order));
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./map":"../../node_modules/@thi.ng/transducers/xform/map.js"}],"../../node_modules/@thi.ng/transducers/xform/take-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeNth = takeNth;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function takeNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(takeNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = 0;
    return () => skip === 0 ? (skip = n, true) : (skip--, false);
  });
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../../node_modules/@thi.ng/transducers/xform/take-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function takeWhile(...args) {
  return (0, _iterator.$iter)(takeWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? r(acc, x) : (0, _reduced.reduced)(acc));
  });
}
},{"../func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/xform/throttle-time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function throttleTime(delay, src) {
  return src ? (0, _iterator.iterator1)(throttleTime(delay), src) : (0, _throttle.throttle)(() => {
    let last = 0;
    return () => {
      const t = Date.now();
      return t - last >= delay ? (last = t, true) : false;
    };
  });
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../../node_modules/@thi.ng/transducers/xform/toggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

var _iterator = require("../iterator");

function toggle(on, off, initial = false, src) {
  return src ? (0, _iterator.iterator1)(toggle(on, off, initial), src) : ([init, complete, reduce]) => {
    let state = initial;
    return [init, complete, acc => reduce(acc, (state = !state) ? on : off)];
  };
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js"}],"../../node_modules/@thi.ng/transducers/xform/trace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trace = void 0;

var _sideEffect = require("./side-effect");

const trace = (prefix = "") => (0, _sideEffect.sideEffect)(x => console.log(prefix, x));

exports.trace = trace;
},{"./side-effect":"../../node_modules/@thi.ng/transducers/xform/side-effect.js"}],"../../node_modules/@thi.ng/transducers/xform/word-wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordWrap = wordWrap;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function wordWrap(...args) {
  const iter = (0, _iterator.$iter)(wordWrap, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const lineLength = args[0];
  const {
    delim,
    always
  } = Object.assign({
    delim: 1,
    always: true
  }, args[1]);
  return (0, _partitionBy.partitionBy)(() => {
    let n = 0;
    let flag = false;
    return w => {
      n += w.length + delim;

      if (n > lineLength + (always ? 0 : delim)) {
        flag = !flag;
        n = w.length + delim;
      }

      return flag;
    };
  }, true);
}
},{"../iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../../node_modules/@thi.ng/transducers/func/juxtr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxtR = juxtR;

var _reduced = require("../reduced");

function juxtR(...rs) {
  let [a, b, c] = rs;
  const n = rs.length;

  switch (n) {
    case 1:
      {
        const r = a[2];
        return [() => [a[0]()], acc => [a[1](acc[0])], (acc, x) => {
          const aa1 = r(acc[0], x);

          if ((0, _reduced.isReduced)(aa1)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1)]);
          }

          return [aa1];
        }];
      }

    case 2:
      {
        const ra = a[2];
        const rb = b[2];
        return [() => [a[0](), b[0]()], acc => [a[1](acc[0]), b[1](acc[1])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2)]);
          }

          return [aa1, aa2];
        }];
      }

    case 3:
      {
        const ra = a[2];
        const rb = b[2];
        const rc = c[2];
        return [() => [a[0](), b[0](), c[0]()], acc => [a[1](acc[0]), b[1](acc[1]), c[1](acc[2])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);
          const aa3 = rc(acc[2], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2) || (0, _reduced.isReduced)(aa3)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2), (0, _reduced.unreduced)(aa3)]);
          }

          return [aa1, aa2, aa3];
        }];
      }

    default:
      return [() => rs.map(r => r[0]()), acc => rs.map((r, i) => r[1](acc[i])), (acc, x) => {
        let done = false;
        const res = [];

        for (let i = 0; i < n; i++) {
          let a = rs[i][2](acc[i], x);

          if ((0, _reduced.isReduced)(a)) {
            done = true;
            a = (0, _reduced.unreduced)(a);
          }

          res[i] = a;
        }

        return done ? (0, _reduced.reduced)(res) : res;
      }];
  }
}
},{"../reduced":"../../node_modules/@thi.ng/transducers/reduced.js"}],"../../node_modules/@thi.ng/transducers/func/lookup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookup3d = exports.lookup2d = exports.lookup1d = void 0;

/**
 * Returns function accepting a single index arg used to
 * lookup value in given array. No bounds checks are done.
 *
 * ```
 * [...map(lookup1d([10, 20, 30]), [2,0,1])]
 * // [ 30, 10, 20 ]
 * ```
 *
 * @param src source data
 */
const lookup1d = src => i => src[i];
/**
 * Returns function accepting a single `[x, y]` index tuple,
 * used to lookup value in given array. Useful for transducers
 * processing 2D data. **Note**: The source data MUST be in
 * row major linearized format, i.e. 1D representation of 2D data
 * (pixel buffer). No bounds checks are done.
 *
 * ```
 * [...map(lookup2d([...range(9)], 3), range2d(2, -1, 0, 3))]
 * // [ 2, 1, 0, 5, 4, 3, 8, 7, 6 ]
 * ```
 *
 * @param src source data
 * @param width number of items along X (columns)
 */


exports.lookup1d = lookup1d;

const lookup2d = (src, width) => i => src[i[0] + i[1] * width];
/**
 * Same as `lookup2d()`, but for 3D data. The index ordering of the
 * source data MUST be in Z, Y, X order (i.e. a stack of row major 2D slices).
 * No bounds checks are done.
 *
 * @param src source data
 * @param width number of items along X (columns)
 * @param height number of items along Y (rows)
 */


exports.lookup2d = lookup2d;

const lookup3d = (src, width, height) => {
  const stridez = width * height;
  return i => src[i[0] + i[1] * width + i[2] * stridez];
};

exports.lookup3d = lookup3d;
},{}],"../../node_modules/@thi.ng/transducers/iter/as-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asIterable = asIterable;

/**
 * Helper function to (re)provide given iterable in iterator form.
 *
 * @param src
 */
function* asIterable(src) {
  yield* src;
}
},{}],"../../node_modules/@thi.ng/transducers/iter/repeatedly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatedly = repeatedly;

function* repeatedly(fn, n = Infinity) {
  while (n-- > 0) {
    yield fn();
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/choices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choices = void 0;

var _arrays = require("@thi.ng/arrays");

var _random = require("@thi.ng/random");

var _repeatedly = require("./repeatedly");

/**
 * Returns an infinite iterator of random choices and their (optional)
 * weights. If `weights` is given, it must have at least the same size
 * as `choices`. If omitted, each choice will have same probability.
 *
 * ```
 * transduce(take(1000), frequencies(), choices("abcd", [1, 0.5, 0.25, 0.125]))
 * // Map { 'c' => 132, 'a' => 545, 'b' => 251, 'd' => 72 }
 * ```
 *
 * @see weightedRandom
 *
 * @param choices
 * @param weights
 */
const choices = (choices, weights, rnd = _random.SYSTEM) => (0, _repeatedly.repeatedly)(weights ? (0, _random.weightedRandom)((0, _arrays.ensureArray)(choices), weights, rnd) : () => choices[rnd.float(choices.length) | 0]);

exports.choices = choices;
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","@thi.ng/random":"../../node_modules/@thi.ng/random/index.js","./repeatedly":"../../node_modules/@thi.ng/transducers/iter/repeatedly.js"}],"../../node_modules/@thi.ng/transducers/iter/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator producing concatenation of given iterables.
 * Undefined & null inputs are silently ignored, however any
 * such values produced or contained in an input will remain.
 *
 * ```
 * [...concat([1, 2, 3], null, [4, 5])]
 * // [ 1, 2, 3, 4, 5 ]
 *
 * [...concat([1, 2, 3, undefined], null, [4, 5])]
 * // [ 1, 2, 3, undefined, 4, 5 ]
 * ```
 *
 * @param xs
 */
function* concat(...xs) {
  for (let x of xs) {
    x != null && (yield* (0, _arrays.ensureIterable)(x));
  }
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js"}],"../../node_modules/@thi.ng/transducers/iter/cycle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;

function* cycle(input) {
  let cache = [];

  for (let i of input) {
    cache.push(i);
    yield i;
  }

  if (cache.length > 0) {
    while (true) {
      yield* cache;
    }
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/norm-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normRange = normRange;

/**
 * Yields sequence of `n+1` monotonically increasing numbers in the
 * closed interval (0.0 .. 1.0). If `n <= 0`, yields nothing.
 *
 * ```
 * [...normRange(4)]
 * // [0, 0.25, 0.5, 0.75, 1.0]
 * ```
 *
 * @param n number of steps
 * @param inclLast include last value (i.e. `1.0`)
 */
function* normRange(n, inclLast = true) {
  if (n > 0) {
    for (let i = 0, m = inclLast ? n + 1 : n; i < m; i++) {
      yield i / n;
    }
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

function* repeat(x, n = Infinity) {
  while (n-- > 0) {
    yield x;
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/interpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;

var _normRange = require("./norm-range");

var _repeat = require("./repeat");

/**
 * Takes a number of keyframe tuples (`stops`) and yields a sequence of
 * `n+1` equally spaced, interpolated values. Keyframes are defined as
 * `[pos, value]`. Only values in the closed `minPos` .. `maxPos`
 * interval will be computed.
 *
 * Interpolation happens in two stages: First the given `init` function
 * is called to transform/prepare pairs of consecutive keyframes into a
 * single interval (user defined). Then to produce each interpolated
 * value calls `mix` with the currently active interval and
 * interpolation time value `t` (re-normalized and relative to current
 * interval). The iterator yields results of these `mix()` function
 * calls.
 *
 * Depending on the overall number of samples requested and the distance
 * between keyframes, some keyframes MIGHT be skipped. E.g. if
 * requesting 10 samples within [0,1], the interval between two
 * successive keyframes at 0.12 and 0.19 would be skipped entirely,
 * since samples will only be taken at multiples of `1/n` (0.0, 0.1,
 * 0.2... in this example).
 *
 * The given keyframe positions can lie outside the `minPos`/`maxPos`
 * range and also don't need to cover the range fully. In the latter
 * case, interpolated values before the first or after the last keyframe
 * will yield the value of the 1st/last keyframe. If only a single
 * keyframe is given in total, all `n` yielded samples will be that
 * keyframe's transformed value.
 *
 * ```
 * [...interpolate(
 *   10,
 *   0,
 *   100,
 *   (a, b) => [a, b],
 *   ([a, b], t) => Math.floor(a + (b - a) * t),
 *   [20, 100],
 *   [50, 200],
 *   [80, 0]
 * )]
 * // [ 100, 100, 100, 133, 166, 200, 133, 66, 0, 0, 0 ]
 * ```
 *
 * Using easing functions (e.g. from thi.ng/math), non-linear
 * interpolation within each keyframe interval can be achieved:
 *
 * ```
 * import { mix, smoothStep } from "@thi.ng/math"
 *
 * [...interpolate(
 *   10,
 *   0,
 *   100,
 *   (a, b) => [a, b],
 *   ([a, b], t) => Math.floor(mix(a, b, smoothStep(0.1, 0.9, t))),
 *   [20, 100],
 *   [50, 200],
 *   [80, 0]
 * )]
 * // [ 100, 100, 100, 120, 179, 200, 158, 41, 0, 0, 0 ]
 * ```
 *
 * @param n
 * @param minPos
 * @param maxPos
 * @param init interval producer (from 2 keyframe values)
 * @param mix interval interpolator
 * @param stops keyframe / stops
 */
function* interpolate(n, minPos, maxPos, init, mix, ...stops) {
  let l = stops.length;
  if (l < 1) return;

  if (l === 1) {
    yield* (0, _repeat.repeat)(mix(init(stops[0][1], stops[0][1]), 0), n);
  }

  stops.sort((a, b) => a[0] - b[0]);

  if (stops[l - 1][0] < maxPos) {
    stops.push([maxPos, stops[l - 1][1]]);
  }

  if (stops[0][0] > minPos) {
    stops.unshift([minPos, stops[0][1]]);
  }

  const range = maxPos - minPos;
  let start = stops[0][0];
  let end = stops[1][0];
  let delta = end - start;
  let interval = init(stops[0][1], stops[1][1]);
  let i = 1;
  l = stops.length;

  for (let t of (0, _normRange.normRange)(n)) {
    t = minPos + range * t;

    if (t > end) {
      while (i < l && t > stops[i][0]) i++;

      start = stops[i - 1][0];
      end = stops[i][0];
      delta = end - start;
      interval = init(stops[i - 1][1], stops[i][1]);
    }

    yield mix(interval, delta !== 0 ? (t - start) / delta : 0);
  }
}
},{"./norm-range":"../../node_modules/@thi.ng/transducers/iter/norm-range.js","./repeat":"../../node_modules/@thi.ng/transducers/iter/repeat.js"}],"../../node_modules/@thi.ng/transducers/iter/iterate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterate = iterate;

/**
 * Yields an infinite iterator of the inductive sequence:
 *
 * f(x+1) = f(f(x))
 *
 * The first value emitted always is `seed` itself, then f(seed),
 * f(f(seed)) etc. The given function is called with the current
 * iteration counter as 2nd arg.
 *
 * ```
 * [...take(5, iterate((x) => x * 2, 1))]
 * // [ 1, 2, 4, 8, 16 ]
 *
 * [...take(8, iterate((x, i) => x * 10 + i, 0))]
 * // [ 0, 1, 12, 123, 1234, 12345, 123456, 1234567 ]
 * ```
 *
 * @param fn
 * @param seed
 */
function* iterate(fn, seed) {
  let i = 0;

  while (true) {
    yield seed;
    seed = fn(seed, ++i);
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = keys;

function* keys(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield k;
    }
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;

function* pairs(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield [k, x[k]];
    }
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/permutations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutations = permutations;
exports.permutationsN = void 0;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* permutations(...src) {
  const n = src.length - 1;

  if (n < 0) {
    return;
  }

  const step = new Array(n + 1).fill(0);
  const realized = src.map(_arrays.ensureArrayLike);
  const total = realized.reduce((acc, x) => acc * x.length, 1);

  for (let i = 0; i < total; i++) {
    const tuple = [];

    for (let j = n; j >= 0; j--) {
      const r = realized[j];
      let s = step[j];

      if (s === r.length) {
        step[j] = s = 0;
        j > 0 && step[j - 1]++;
      }

      tuple[j] = r[s];
    }

    step[n]++;
    yield tuple;
  }
}
/**
 * Iterator yielding the Cartesian Product for `n` items of `m` values
 * each. If `m` is not given, defaults to value of `n`. The range of `m`
 * is `0..m-1`. The optional `offsets` array can be used to define start
 * values for each dimension.
 *
 * ```
 * [...permutationsN(2)]
 * // [ [0, 0], [0, 1], [1, 0], [1, 1] ]
 *
 * [...permutationsN(2, 3)]
 * // [ [0, 0], [0, 1], [0, 2],
 * //   [1, 0], [1, 1], [1, 2],
 * //   [2, 0], [2, 1], [2, 2] ]
 *
 * [...permutationsN(2, 3, [10, 20])]
 * // [ [ 10, 20 ], [ 10, 21 ], [ 11, 20 ], [ 11, 21 ] ]
 * ```
 *
 * @param n
 * @param m
 * @param offsets
 */


const permutationsN = (n, m = n, offsets) => {
  if (offsets && offsets.length < n) {
    (0, _errors.illegalArgs)(`insufficient offsets, got ${offsets.length}, needed ${n}`);
  }

  const seqs = [];

  while (--n >= 0) {
    const o = offsets ? offsets[n] : 0;
    seqs[n] = (0, _range.range)(o, o + m);
  }

  return permutations.apply(null, seqs);
};

exports.permutationsN = permutationsN;
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./range":"../../node_modules/@thi.ng/transducers/iter/range.js"}],"../../node_modules/@thi.ng/transducers/iter/range3d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range3d = range3d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range3d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;
  let fromZ, toZ, stepZ;

  switch (args.length) {
    case 9:
      stepX = args[6];
      stepY = args[7];
      stepZ = args[8];

    case 6:
      [fromX, toX, fromY, toY, fromZ, toZ] = args;
      break;

    case 3:
      [toX, toY, toZ] = args;
      fromX = fromY = fromZ = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);
  const ry = (0, _range.range)(fromY, toY, stepY);

  for (let z of (0, _range.range)(fromZ, toZ, stepZ)) {
    for (let y of ry) {
      for (let x of rx) {
        yield [x, y, z];
      }
    }
  }
}
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./range":"../../node_modules/@thi.ng/transducers/iter/range.js"}],"../../node_modules/@thi.ng/transducers/iter/reverse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = reverse;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator which consumes input and yield its values in reverse
 * order. Important: Input MUST be finite.
 *
 * ```
 * [...tx.reverse("hello world")]
 * // [ "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h" ]
 * ```
 *
 * @param input
 */
function* reverse(input) {
  const _input = (0, _arrays.ensureArray)(input);

  let n = _input.length;

  while (--n >= 0) {
    yield _input[n];
  }
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js"}],"../../node_modules/@thi.ng/transducers/iter/vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vals = vals;

function* vals(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield x[k];
    }
  }
}
},{}],"../../node_modules/@thi.ng/transducers/iter/wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = wrap;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

/**
 * Yields iterator of `src` with the last `n` values of `src` prepended
 * at the beginning (if `left` is truthy) and/or the first `n` values
 * appended at the end (if `right` is truthy). Wraps both sides by
 * default and throws error if `n` < 0 or larger than `src.length`.
 *
 * @param src
 * @param n
 * @param left
 * @param right
 */
function* wrap(src, n = 1, left = true, right = true) {
  const _src = (0, _arrays.ensureArray)(src);

  (n < 0 || n > _src.length) && (0, _errors.illegalArgs)(`wrong number of wrap items: got ${n}, but max: ${_src.length}`);

  if (left) {
    for (let m = _src.length, i = m - n; i < m; i++) {
      yield _src[i];
    }
  }

  yield* _src;

  if (right) {
    for (let i = 0; i < n; i++) {
      yield _src[i];
    }
  }
}
},{"@thi.ng/arrays":"../../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/transducers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iterator = require("./iterator");

Object.keys(_iterator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterator[key];
    }
  });
});

var _reduce = require("./reduce");

Object.keys(_reduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduce[key];
    }
  });
});

var _reduced = require("./reduced");

Object.keys(_reduced).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduced[key];
    }
  });
});

var _run = require("./run");

Object.keys(_run).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _run[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});

var _transduce = require("./transduce");

Object.keys(_transduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transduce[key];
    }
  });
});

var _add = require("./rfn/add");

Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _add[key];
    }
  });
});

var _assocMap = require("./rfn/assoc-map");

Object.keys(_assocMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocMap[key];
    }
  });
});

var _assocObj = require("./rfn/assoc-obj");

Object.keys(_assocObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocObj[key];
    }
  });
});

var _conj = require("./rfn/conj");

Object.keys(_conj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _conj[key];
    }
  });
});

var _count = require("./rfn/count");

Object.keys(_count).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _count[key];
    }
  });
});

var _div = require("./rfn/div");

Object.keys(_div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _div[key];
    }
  });
});

var _every = require("./rfn/every");

Object.keys(_every).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _every[key];
    }
  });
});

var _fill = require("./rfn/fill");

Object.keys(_fill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fill[key];
    }
  });
});

var _frequencies = require("./rfn/frequencies");

Object.keys(_frequencies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _frequencies[key];
    }
  });
});

var _groupBinary = require("./rfn/group-binary");

Object.keys(_groupBinary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupBinary[key];
    }
  });
});

var _groupByMap = require("./rfn/group-by-map");

Object.keys(_groupByMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByMap[key];
    }
  });
});

var _groupByObj = require("./rfn/group-by-obj");

Object.keys(_groupByObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByObj[key];
    }
  });
});

var _last = require("./rfn/last");

Object.keys(_last).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _last[key];
    }
  });
});

var _maxCompare = require("./rfn/max-compare");

Object.keys(_maxCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _maxCompare[key];
    }
  });
});

var _max = require("./rfn/max");

Object.keys(_max).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _max[key];
    }
  });
});

var _mean = require("./rfn/mean");

Object.keys(_mean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mean[key];
    }
  });
});

var _minCompare = require("./rfn/min-compare");

Object.keys(_minCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minCompare[key];
    }
  });
});

var _min = require("./rfn/min");

Object.keys(_min).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _min[key];
    }
  });
});

var _mul = require("./rfn/mul");

Object.keys(_mul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mul[key];
    }
  });
});

var _pushCopy = require("./rfn/push-copy");

Object.keys(_pushCopy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pushCopy[key];
    }
  });
});

var _push = require("./rfn/push");

Object.keys(_push).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _push[key];
    }
  });
});

var _reductions = require("./rfn/reductions");

Object.keys(_reductions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reductions[key];
    }
  });
});

var _some = require("./rfn/some");

Object.keys(_some).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _some[key];
    }
  });
});

var _str = require("./rfn/str");

Object.keys(_str).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _str[key];
    }
  });
});

var _sub = require("./rfn/sub");

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sub[key];
    }
  });
});

var _benchmark = require("./xform/benchmark");

Object.keys(_benchmark).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _benchmark[key];
    }
  });
});

var _cat = require("./xform/cat");

Object.keys(_cat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cat[key];
    }
  });
});

var _converge = require("./xform/converge");

Object.keys(_converge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _converge[key];
    }
  });
});

var _convolve = require("./xform/convolve");

Object.keys(_convolve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convolve[key];
    }
  });
});

var _dedupe = require("./xform/dedupe");

Object.keys(_dedupe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dedupe[key];
    }
  });
});

var _delayed = require("./xform/delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _distinct = require("./xform/distinct");

Object.keys(_distinct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distinct[key];
    }
  });
});

var _dropNth = require("./xform/drop-nth");

Object.keys(_dropNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropNth[key];
    }
  });
});

var _dropWhile = require("./xform/drop-while");

Object.keys(_dropWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropWhile[key];
    }
  });
});

var _drop = require("./xform/drop");

Object.keys(_drop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _drop[key];
    }
  });
});

var _duplicate = require("./xform/duplicate");

Object.keys(_duplicate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _duplicate[key];
    }
  });
});

var _filter = require("./xform/filter");

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filter[key];
    }
  });
});

var _filterFuzzy = require("./xform/filter-fuzzy");

Object.keys(_filterFuzzy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filterFuzzy[key];
    }
  });
});

var _flattenWith = require("./xform/flatten-with");

Object.keys(_flattenWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flattenWith[key];
    }
  });
});

var _flatten = require("./xform/flatten");

Object.keys(_flatten).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flatten[key];
    }
  });
});

var _indexed = require("./xform/indexed");

Object.keys(_indexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _indexed[key];
    }
  });
});

var _interleave = require("./xform/interleave");

Object.keys(_interleave).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interleave[key];
    }
  });
});

var _interpose = require("./xform/interpose");

Object.keys(_interpose).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpose[key];
    }
  });
});

var _keep = require("./xform/keep");

Object.keys(_keep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keep[key];
    }
  });
});

var _labeled = require("./xform/labeled");

Object.keys(_labeled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _labeled[key];
    }
  });
});

var _mapDeep = require("./xform/map-deep");

Object.keys(_mapDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapDeep[key];
    }
  });
});

var _mapIndexed = require("./xform/map-indexed");

Object.keys(_mapIndexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapIndexed[key];
    }
  });
});

var _mapKeys = require("./xform/map-keys");

Object.keys(_mapKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapKeys[key];
    }
  });
});

var _mapNth = require("./xform/map-nth");

Object.keys(_mapNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapNth[key];
    }
  });
});

var _mapVals = require("./xform/map-vals");

Object.keys(_mapVals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapVals[key];
    }
  });
});

var _map = require("./xform/map");

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _map[key];
    }
  });
});

var _mapcat = require("./xform/mapcat");

Object.keys(_mapcat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapcat[key];
    }
  });
});

var _matchFirst = require("./xform/match-first");

Object.keys(_matchFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchFirst[key];
    }
  });
});

var _matchLast = require("./xform/match-last");

Object.keys(_matchLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchLast[key];
    }
  });
});

var _movingAverage = require("./xform/moving-average");

Object.keys(_movingAverage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingAverage[key];
    }
  });
});

var _movingMedian = require("./xform/moving-median");

Object.keys(_movingMedian).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingMedian[key];
    }
  });
});

var _multiplex = require("./xform/multiplex");

Object.keys(_multiplex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplex[key];
    }
  });
});

var _multiplexObj = require("./xform/multiplex-obj");

Object.keys(_multiplexObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplexObj[key];
    }
  });
});

var _noop = require("./xform/noop");

Object.keys(_noop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _noop[key];
    }
  });
});

var _padLast = require("./xform/pad-last");

Object.keys(_padLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padLast[key];
    }
  });
});

var _page = require("./xform/page");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _page[key];
    }
  });
});

var _partitionBy = require("./xform/partition-by");

Object.keys(_partitionBy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionBy[key];
    }
  });
});

var _partitionOf = require("./xform/partition-of");

Object.keys(_partitionOf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionOf[key];
    }
  });
});

var _partitionSort = require("./xform/partition-sort");

Object.keys(_partitionSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSort[key];
    }
  });
});

var _partitionSync = require("./xform/partition-sync");

Object.keys(_partitionSync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSync[key];
    }
  });
});

var _partition = require("./xform/partition");

Object.keys(_partition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partition[key];
    }
  });
});

var _pluck = require("./xform/pluck");

Object.keys(_pluck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pluck[key];
    }
  });
});

var _rename = require("./xform/rename");

Object.keys(_rename).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rename[key];
    }
  });
});

var _sample = require("./xform/sample");

Object.keys(_sample).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sample[key];
    }
  });
});

var _scan = require("./xform/scan");

Object.keys(_scan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scan[key];
    }
  });
});

var _selectKeys = require("./xform/select-keys");

Object.keys(_selectKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectKeys[key];
    }
  });
});

var _sideEffect = require("./xform/side-effect");

Object.keys(_sideEffect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sideEffect[key];
    }
  });
});

var _slidingWindow = require("./xform/sliding-window");

Object.keys(_slidingWindow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _slidingWindow[key];
    }
  });
});

var _streamShuffle = require("./xform/stream-shuffle");

Object.keys(_streamShuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamShuffle[key];
    }
  });
});

var _streamSort = require("./xform/stream-sort");

Object.keys(_streamSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamSort[key];
    }
  });
});

var _struct = require("./xform/struct");

Object.keys(_struct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _struct[key];
    }
  });
});

var _swizzle = require("./xform/swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});

var _takeNth = require("./xform/take-nth");

Object.keys(_takeNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeNth[key];
    }
  });
});

var _takeLast = require("./xform/take-last");

Object.keys(_takeLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeLast[key];
    }
  });
});

var _takeWhile = require("./xform/take-while");

Object.keys(_takeWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeWhile[key];
    }
  });
});

var _take = require("./xform/take");

Object.keys(_take).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _take[key];
    }
  });
});

var _throttle = require("./xform/throttle");

Object.keys(_throttle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttle[key];
    }
  });
});

var _throttleTime = require("./xform/throttle-time");

Object.keys(_throttleTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttleTime[key];
    }
  });
});

var _toggle = require("./xform/toggle");

Object.keys(_toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toggle[key];
    }
  });
});

var _trace = require("./xform/trace");

Object.keys(_trace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trace[key];
    }
  });
});

var _wordWrap = require("./xform/word-wrap");

Object.keys(_wordWrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wordWrap[key];
    }
  });
});

var _comp = require("./func/comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _compr = require("./func/compr");

Object.keys(_compr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compr[key];
    }
  });
});

var _deepTransform = require("./func/deep-transform");

Object.keys(_deepTransform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deepTransform[key];
    }
  });
});

var _juxtr = require("./func/juxtr");

Object.keys(_juxtr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxtr[key];
    }
  });
});

var _keySelector = require("./func/key-selector");

Object.keys(_keySelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keySelector[key];
    }
  });
});

var _lookup = require("./func/lookup");

Object.keys(_lookup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lookup[key];
    }
  });
});

var _renamer = require("./func/renamer");

Object.keys(_renamer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renamer[key];
    }
  });
});

var _asIterable = require("./iter/as-iterable");

Object.keys(_asIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _asIterable[key];
    }
  });
});

var _choices = require("./iter/choices");

Object.keys(_choices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _choices[key];
    }
  });
});

var _concat = require("./iter/concat");

Object.keys(_concat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _concat[key];
    }
  });
});

var _cycle = require("./iter/cycle");

Object.keys(_cycle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cycle[key];
    }
  });
});

var _interpolate = require("./iter/interpolate");

Object.keys(_interpolate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpolate[key];
    }
  });
});

var _iterate = require("./iter/iterate");

Object.keys(_iterate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterate[key];
    }
  });
});

var _keys = require("./iter/keys");

Object.keys(_keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keys[key];
    }
  });
});

var _normRange = require("./iter/norm-range");

Object.keys(_normRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normRange[key];
    }
  });
});

var _pairs = require("./iter/pairs");

Object.keys(_pairs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pairs[key];
    }
  });
});

var _permutations = require("./iter/permutations");

Object.keys(_permutations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _permutations[key];
    }
  });
});

var _range = require("./iter/range");

Object.keys(_range).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range[key];
    }
  });
});

var _range2d = require("./iter/range2d");

Object.keys(_range2d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range2d[key];
    }
  });
});

var _range3d = require("./iter/range3d");

Object.keys(_range3d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range3d[key];
    }
  });
});

var _repeat = require("./iter/repeat");

Object.keys(_repeat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeat[key];
    }
  });
});

var _repeatedly = require("./iter/repeatedly");

Object.keys(_repeatedly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeatedly[key];
    }
  });
});

var _reverse = require("./iter/reverse");

Object.keys(_reverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reverse[key];
    }
  });
});

var _vals = require("./iter/vals");

Object.keys(_vals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vals[key];
    }
  });
});

var _wrap = require("./iter/wrap");

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrap[key];
    }
  });
});

var _zip = require("./iter/zip");

Object.keys(_zip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _zip[key];
    }
  });
});
},{"./iterator":"../../node_modules/@thi.ng/transducers/iterator.js","./reduce":"../../node_modules/@thi.ng/transducers/reduce.js","./reduced":"../../node_modules/@thi.ng/transducers/reduced.js","./run":"../../node_modules/@thi.ng/transducers/run.js","./step":"../../node_modules/@thi.ng/transducers/step.js","./transduce":"../../node_modules/@thi.ng/transducers/transduce.js","./rfn/add":"../../node_modules/@thi.ng/transducers/rfn/add.js","./rfn/assoc-map":"../../node_modules/@thi.ng/transducers/rfn/assoc-map.js","./rfn/assoc-obj":"../../node_modules/@thi.ng/transducers/rfn/assoc-obj.js","./rfn/conj":"../../node_modules/@thi.ng/transducers/rfn/conj.js","./rfn/count":"../../node_modules/@thi.ng/transducers/rfn/count.js","./rfn/div":"../../node_modules/@thi.ng/transducers/rfn/div.js","./rfn/every":"../../node_modules/@thi.ng/transducers/rfn/every.js","./rfn/fill":"../../node_modules/@thi.ng/transducers/rfn/fill.js","./rfn/frequencies":"../../node_modules/@thi.ng/transducers/rfn/frequencies.js","./rfn/group-binary":"../../node_modules/@thi.ng/transducers/rfn/group-binary.js","./rfn/group-by-map":"../../node_modules/@thi.ng/transducers/rfn/group-by-map.js","./rfn/group-by-obj":"../../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./rfn/last":"../../node_modules/@thi.ng/transducers/rfn/last.js","./rfn/max-compare":"../../node_modules/@thi.ng/transducers/rfn/max-compare.js","./rfn/max":"../../node_modules/@thi.ng/transducers/rfn/max.js","./rfn/mean":"../../node_modules/@thi.ng/transducers/rfn/mean.js","./rfn/min-compare":"../../node_modules/@thi.ng/transducers/rfn/min-compare.js","./rfn/min":"../../node_modules/@thi.ng/transducers/rfn/min.js","./rfn/mul":"../../node_modules/@thi.ng/transducers/rfn/mul.js","./rfn/push-copy":"../../node_modules/@thi.ng/transducers/rfn/push-copy.js","./rfn/push":"../../node_modules/@thi.ng/transducers/rfn/push.js","./rfn/reductions":"../../node_modules/@thi.ng/transducers/rfn/reductions.js","./rfn/some":"../../node_modules/@thi.ng/transducers/rfn/some.js","./rfn/str":"../../node_modules/@thi.ng/transducers/rfn/str.js","./rfn/sub":"../../node_modules/@thi.ng/transducers/rfn/sub.js","./xform/benchmark":"../../node_modules/@thi.ng/transducers/xform/benchmark.js","./xform/cat":"../../node_modules/@thi.ng/transducers/xform/cat.js","./xform/converge":"../../node_modules/@thi.ng/transducers/xform/converge.js","./xform/convolve":"../../node_modules/@thi.ng/transducers/xform/convolve.js","./xform/dedupe":"../../node_modules/@thi.ng/transducers/xform/dedupe.js","./xform/delayed":"../../node_modules/@thi.ng/transducers/xform/delayed.js","./xform/distinct":"../../node_modules/@thi.ng/transducers/xform/distinct.js","./xform/drop-nth":"../../node_modules/@thi.ng/transducers/xform/drop-nth.js","./xform/drop-while":"../../node_modules/@thi.ng/transducers/xform/drop-while.js","./xform/drop":"../../node_modules/@thi.ng/transducers/xform/drop.js","./xform/duplicate":"../../node_modules/@thi.ng/transducers/xform/duplicate.js","./xform/filter":"../../node_modules/@thi.ng/transducers/xform/filter.js","./xform/filter-fuzzy":"../../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js","./xform/flatten-with":"../../node_modules/@thi.ng/transducers/xform/flatten-with.js","./xform/flatten":"../../node_modules/@thi.ng/transducers/xform/flatten.js","./xform/indexed":"../../node_modules/@thi.ng/transducers/xform/indexed.js","./xform/interleave":"../../node_modules/@thi.ng/transducers/xform/interleave.js","./xform/interpose":"../../node_modules/@thi.ng/transducers/xform/interpose.js","./xform/keep":"../../node_modules/@thi.ng/transducers/xform/keep.js","./xform/labeled":"../../node_modules/@thi.ng/transducers/xform/labeled.js","./xform/map-deep":"../../node_modules/@thi.ng/transducers/xform/map-deep.js","./xform/map-indexed":"../../node_modules/@thi.ng/transducers/xform/map-indexed.js","./xform/map-keys":"../../node_modules/@thi.ng/transducers/xform/map-keys.js","./xform/map-nth":"../../node_modules/@thi.ng/transducers/xform/map-nth.js","./xform/map-vals":"../../node_modules/@thi.ng/transducers/xform/map-vals.js","./xform/map":"../../node_modules/@thi.ng/transducers/xform/map.js","./xform/mapcat":"../../node_modules/@thi.ng/transducers/xform/mapcat.js","./xform/match-first":"../../node_modules/@thi.ng/transducers/xform/match-first.js","./xform/match-last":"../../node_modules/@thi.ng/transducers/xform/match-last.js","./xform/moving-average":"../../node_modules/@thi.ng/transducers/xform/moving-average.js","./xform/moving-median":"../../node_modules/@thi.ng/transducers/xform/moving-median.js","./xform/multiplex":"../../node_modules/@thi.ng/transducers/xform/multiplex.js","./xform/multiplex-obj":"../../node_modules/@thi.ng/transducers/xform/multiplex-obj.js","./xform/noop":"../../node_modules/@thi.ng/transducers/xform/noop.js","./xform/pad-last":"../../node_modules/@thi.ng/transducers/xform/pad-last.js","./xform/page":"../../node_modules/@thi.ng/transducers/xform/page.js","./xform/partition-by":"../../node_modules/@thi.ng/transducers/xform/partition-by.js","./xform/partition-of":"../../node_modules/@thi.ng/transducers/xform/partition-of.js","./xform/partition-sort":"../../node_modules/@thi.ng/transducers/xform/partition-sort.js","./xform/partition-sync":"../../node_modules/@thi.ng/transducers/xform/partition-sync.js","./xform/partition":"../../node_modules/@thi.ng/transducers/xform/partition.js","./xform/pluck":"../../node_modules/@thi.ng/transducers/xform/pluck.js","./xform/rename":"../../node_modules/@thi.ng/transducers/xform/rename.js","./xform/sample":"../../node_modules/@thi.ng/transducers/xform/sample.js","./xform/scan":"../../node_modules/@thi.ng/transducers/xform/scan.js","./xform/select-keys":"../../node_modules/@thi.ng/transducers/xform/select-keys.js","./xform/side-effect":"../../node_modules/@thi.ng/transducers/xform/side-effect.js","./xform/sliding-window":"../../node_modules/@thi.ng/transducers/xform/sliding-window.js","./xform/stream-shuffle":"../../node_modules/@thi.ng/transducers/xform/stream-shuffle.js","./xform/stream-sort":"../../node_modules/@thi.ng/transducers/xform/stream-sort.js","./xform/struct":"../../node_modules/@thi.ng/transducers/xform/struct.js","./xform/swizzle":"../../node_modules/@thi.ng/transducers/xform/swizzle.js","./xform/take-nth":"../../node_modules/@thi.ng/transducers/xform/take-nth.js","./xform/take-last":"../../node_modules/@thi.ng/transducers/xform/take-last.js","./xform/take-while":"../../node_modules/@thi.ng/transducers/xform/take-while.js","./xform/take":"../../node_modules/@thi.ng/transducers/xform/take.js","./xform/throttle":"../../node_modules/@thi.ng/transducers/xform/throttle.js","./xform/throttle-time":"../../node_modules/@thi.ng/transducers/xform/throttle-time.js","./xform/toggle":"../../node_modules/@thi.ng/transducers/xform/toggle.js","./xform/trace":"../../node_modules/@thi.ng/transducers/xform/trace.js","./xform/word-wrap":"../../node_modules/@thi.ng/transducers/xform/word-wrap.js","./func/comp":"../../node_modules/@thi.ng/transducers/func/comp.js","./func/compr":"../../node_modules/@thi.ng/transducers/func/compr.js","./func/deep-transform":"../../node_modules/@thi.ng/transducers/func/deep-transform.js","./func/juxtr":"../../node_modules/@thi.ng/transducers/func/juxtr.js","./func/key-selector":"../../node_modules/@thi.ng/transducers/func/key-selector.js","./func/lookup":"../../node_modules/@thi.ng/transducers/func/lookup.js","./func/renamer":"../../node_modules/@thi.ng/transducers/func/renamer.js","./iter/as-iterable":"../../node_modules/@thi.ng/transducers/iter/as-iterable.js","./iter/choices":"../../node_modules/@thi.ng/transducers/iter/choices.js","./iter/concat":"../../node_modules/@thi.ng/transducers/iter/concat.js","./iter/cycle":"../../node_modules/@thi.ng/transducers/iter/cycle.js","./iter/interpolate":"../../node_modules/@thi.ng/transducers/iter/interpolate.js","./iter/iterate":"../../node_modules/@thi.ng/transducers/iter/iterate.js","./iter/keys":"../../node_modules/@thi.ng/transducers/iter/keys.js","./iter/norm-range":"../../node_modules/@thi.ng/transducers/iter/norm-range.js","./iter/pairs":"../../node_modules/@thi.ng/transducers/iter/pairs.js","./iter/permutations":"../../node_modules/@thi.ng/transducers/iter/permutations.js","./iter/range":"../../node_modules/@thi.ng/transducers/iter/range.js","./iter/range2d":"../../node_modules/@thi.ng/transducers/iter/range2d.js","./iter/range3d":"../../node_modules/@thi.ng/transducers/iter/range3d.js","./iter/repeat":"../../node_modules/@thi.ng/transducers/iter/repeat.js","./iter/repeatedly":"../../node_modules/@thi.ng/transducers/iter/repeatedly.js","./iter/reverse":"../../node_modules/@thi.ng/transducers/iter/reverse.js","./iter/vals":"../../node_modules/@thi.ng/transducers/iter/vals.js","./iter/wrap":"../../node_modules/@thi.ng/transducers/iter/wrap.js","./iter/zip":"../../node_modules/@thi.ng/transducers/iter/zip.js"}],"../../node_modules/@thi.ng/vectors/internal/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBM_N = exports.SUBM = exports.MIX_N = exports.MIX = exports.MADD_N = exports.MADD = exports.ADDM_N = exports.ADDM = exports.SET_N = exports.SET = exports.DOT_G = exports.DOT = exports.FN_N = exports.FN5 = exports.FN3 = exports.FN2 = exports.FN = exports.UNSIGNED_N = exports.SIGNED_N = exports.UNSIGNED = exports.SIGNED = exports.MATH_N = exports.MATH = void 0;

// prettier-ignore
const MATH = op => ([o, a, b]) => `${o}=${a}${op}${b};`; // prettier-ignore


exports.MATH = MATH;

const MATH_N = op => ([o, a]) => `${o}=${a}${op}n;`; // prettier-ignore


exports.MATH_N = MATH_N;

const SIGNED = op => ([o, a, b]) => `${o}=(${a}${op}${b})|0;`; // prettier-ignore


exports.SIGNED = SIGNED;

const UNSIGNED = op => ([o, a, b]) => `${o}=(${a}${op}${b})>>>0;`; // prettier-ignore


exports.UNSIGNED = UNSIGNED;

const SIGNED_N = op => ([o, a]) => `${o}=(${a}${op}n)|0;`; // prettier-ignore


exports.SIGNED_N = SIGNED_N;

const UNSIGNED_N = op => ([o, a]) => `${o}=(${a}${op}n)>>>0;`; // prettier-ignore


exports.UNSIGNED_N = UNSIGNED_N;

const FN = (op = "op") => ([o, a]) => `${o}=${op}(${a});`; // prettier-ignore


exports.FN = FN;

const FN2 = (op = "op") => ([o, a, b]) => `${o}=${op}(${a},${b});`; // prettier-ignore


exports.FN2 = FN2;

const FN3 = (op = "op") => ([o, a, b, c]) => `${o}=${op}(${a},${b},${c});`; // prettier-ignore


exports.FN3 = FN3;

const FN5 = (op = "op") => ([o, a, b, c, d, e]) => `${o}=${op}(${a},${b},${c},${d},${e});`; // prettier-ignore


exports.FN5 = FN5;

const FN_N = (op = "op") => ([o, a]) => `${o}=${op}(${a},n);`;

exports.FN_N = FN_N;

const DOT = ([a, b]) => `${a}*${b}`;

exports.DOT = DOT;

const DOT_G = ([a, b]) => `s+=${a}*${b};`;

exports.DOT_G = DOT_G;

const SET = ([o, a]) => `${o}=${a};`;

exports.SET = SET;

const SET_N = ([a]) => `${a}=n;`;

exports.SET_N = SET_N;

const ADDM = ([o, a, b, c]) => `${o}=(${a}+${b})*${c};`;

exports.ADDM = ADDM;

const ADDM_N = ([o, a, b]) => `${o}=(${a}+${b})*n;`;

exports.ADDM_N = ADDM_N;

const MADD = ([o, a, b, c]) => `${o}=${a}*${b}+${c};`;

exports.MADD = MADD;

const MADD_N = ([o, a, b]) => `${o}=${a}*n+${b};`;

exports.MADD_N = MADD_N;

const MIX = ([o, a, b, c]) => `${o}=${a}+(${b}-${a})*${c};`;

exports.MIX = MIX;

const MIX_N = ([o, a, b]) => `${o}=${a}+(${b}-${a})*n;`;

exports.MIX_N = MIX_N;

const SUBM = ([o, a, b, c]) => `${o}=(${a}-${b})*${c};`;

exports.SUBM = SUBM;

const SUBM_N = ([o, a, b]) => `${o}=(${a}-${b})*n;`;

exports.SUBM_N = SUBM_N;
},{}],"../../node_modules/@thi.ng/vectors/internal/vop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vop = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Specialized / optimized version of `@thi.ng/defmulti` for vector
 * operations. Uses simplified logic to dispatch on length (vector size)
 * of `dispatch` argument.
 *
 * @param dispatch arg index
 */
const vop = (dispatch = 0) => {
  const impls = new Array(5);
  let fallback;

  const fn = (...args) => {
    const g = impls[args[dispatch].length] || fallback;
    return g ? g(...args) : (0, _errors.unsupported)(`no impl for vec size ${args[dispatch].length}`);
  };

  fn.add = (dim, fn) => impls[dim] = fn;

  fn.default = fn => fallback = fn; // fn.impls = impls;


  return fn;
};

exports.vop = vop;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/vectors/internal/codegen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defBitOpN = exports.defBitOp = exports.defMathOpN = exports.defMathOp = exports.defOpS = exports.defHofOp = exports.defFnOp = exports.defOp = exports.compileGHOF = exports.compileG = exports.compileHOF = exports.compile = exports.defaultOut = exports.NEW_OUT = exports.DEFAULT_OUT = exports.SARGS_VVV = exports.SARGS_VV = exports.SARGS_V = exports.ARGS_VVN = exports.ARGS_VNV = exports.ARGS_VN = exports.ARGS_VVV = exports.ARGS_VV = exports.ARGS_V = void 0;

var _transducers = require("@thi.ng/transducers");

var _templates = require("./templates");

var _vop = require("./vop");

const ARGS_V = "o,a";
exports.ARGS_V = ARGS_V;
const ARGS_VV = "o,a,b";
exports.ARGS_VV = ARGS_VV;
const ARGS_VVV = "o,a,b,c";
exports.ARGS_VVV = ARGS_VVV;
const ARGS_VN = "o,a,n";
exports.ARGS_VN = ARGS_VN;
const ARGS_VNV = "o,a,n,b";
exports.ARGS_VNV = ARGS_VNV;
const ARGS_VVN = "o,a,b,n";
exports.ARGS_VVN = ARGS_VVN;
const SARGS_V = "io=0,ia=0,so=1,sa=1";
exports.SARGS_V = SARGS_V;
const SARGS_VV = "io=0,ia=0,ib=0,so=1,sa=1,sb=1";
exports.SARGS_VV = SARGS_VV;
const SARGS_VVV = "io=0,ia=0,ib=0,ic=0,so=1,sa=1,sb=1,sc=1";
exports.SARGS_VVV = SARGS_VVV;
const DEFAULT_OUT = "!o&&(o=a);";
exports.DEFAULT_OUT = DEFAULT_OUT;
const NEW_OUT = "!o&&(o=[]);";
/**
 * HOF array index lookup gen to provide optimized versions of:
 *
 * ```
 * lookup("a")(0) // a[ia]
 * lookup("a")(1) // a[ia * sa]
 * lookup("a")(2) // a[ia + 2 * sa]
 * ```
 *
 * @param sym
 */

exports.NEW_OUT = NEW_OUT;

const lookup = sym => i => i > 1 ? `${sym}[i${sym}+${i}*s${sym}]` : i == 1 ? `${sym}[i${sym}+s${sym}]` : `${sym}[i${sym}]`;
/**
 * Infinite iterator of strided index lookups for `sym`.
 *
 * @param sym
 */


const indicesStrided = sym => (0, _transducers.map)(lookup(sym), (0, _transducers.range)());
/**
 * Infinite iterator of simple (non-strided) index lookups for `sym`.
 *
 * @param sym
 */


const indices = sym => (0, _transducers.map)(i => `${sym}[${i}]`, (0, _transducers.range)());
/**
 * Code generator for loop-unrolled vector operations. Takes a vector
 * size `dim`, a code template function `tpl` and an array of symbol
 * names participating in the template. For each symbol, creates
 * iterator of index lookups (e.g. `a[0]` or `a[ia+k*sa]`), forms them
 * into tuples and passes them to template to generate code and joins
 * generated result with `opJoin` separator (default:
 * `""`).
 *
 * If the optional `ret` arg is not `null` (default `"a"`), appends a
 * `return` statement to the result array, using `ret` as return value.
 * Returns array of source code lines.
 *
 * The optional `pre` and `post` strings can be used to wrap the
 * generated code. `post` will be injected **before** the generated
 * return statement (if not suppressed).
 *
 * @param dim
 * @param tpl
 * @param syms
 * @param ret
 * @param opJoin
 * @param pre
 * @param post
 * @param strided
 */


const assemble = (dim, tpl, syms, ret = "a", opJoin = "", pre = "", post = "", strided = false) => [pre, (0, _transducers.transduce)((0, _transducers.comp)((0, _transducers.take)(dim), (0, _transducers.mapIndexed)((i, x) => tpl(x, i))), (0, _transducers.str)(opJoin), _transducers.zip.apply(null, syms.split(",").map(strided ? indicesStrided : indices))), post, ret !== "" ? `return ${ret};` : ""];

const assembleG = (tpl, syms, ret = "a", pre, post, strided = false) => [pre, "for(let i=a.length;--i>=0;) {", tpl(syms.split(",").map(strided ? x => `${x}[i${x}+i*s${x}]` : x => `${x}[i]`)), "}", post, ret !== null ? `return ${ret};` : ""];

const defaultOut = (o, args) => `!${o} && (${o}=${args.split(",")[1]});`;

exports.defaultOut = defaultOut;

const compile = (dim, tpl, args, syms = args, ret = "a", opJoin, pre, post, strided = false) => new Function(args, assemble(dim, tpl, syms, ret, opJoin, pre, post, strided).join(""));

exports.compile = compile;

const compileHOF = (dim, fns, tpl, hofArgs, args, syms = args, ret = "a", opJoin = "", pre, post, strided = false) => {
  return new Function(hofArgs, `return (${args})=>{${assemble(dim, tpl, syms, ret, opJoin, pre, post, strided).join("")}}`)(...fns);
};

exports.compileHOF = compileHOF;

const compileG = (tpl, args, syms = args, ret = "a", pre, post, strided = false) => new Function(args, assembleG(tpl, syms, ret, pre, post, strided).join(""));

exports.compileG = compileG;

const compileGHOF = (fns, tpl, hofArgs, args, syms = args, ret = "a", pre, post, strided = false) => new Function(hofArgs, `return (${args})=>{${assembleG(tpl, syms, ret, pre, post, strided).join("")}}`)(...fns);

exports.compileGHOF = compileGHOF;

const defOp = (tpl, args = ARGS_VV, syms, ret = "o", dispatch = 1, pre) => {
  syms = syms || args;
  pre = pre != null ? pre : defaultOut(ret, args);
  const fn = (0, _vop.vop)(dispatch);

  const $ = dim => fn.add(dim, compile(dim, tpl, args, syms, ret, "", pre));

  fn.default(compileG(tpl, args, syms, ret, pre));
  return [fn, $(2), $(3), $(4)];
};

exports.defOp = defOp;

const defFnOp = op => defOp((0, _templates.FN)(op), ARGS_V);

exports.defFnOp = defFnOp;

const defHofOp = (op, tpl, args = ARGS_V, syms, ret = "o", dispatch = 1, pre) => {
  const _tpl = tpl || (0, _templates.FN)("op");

  syms = syms || args;
  pre = pre != null ? pre : defaultOut(ret, args);

  const $ = dim => compileHOF(dim, [op], _tpl, "op", args, syms, ret, "", pre);

  const fn = (0, _vop.vop)(dispatch);
  fn.default(compileGHOF([op], _tpl, "op", args, syms, ret, pre));
  return [fn, $(2), $(3), $(4)];
};

exports.defHofOp = defHofOp;

const defOpS = (tpl, args = `${ARGS_VV},${SARGS_VV}`, syms = ARGS_VV, ret = "o", pre, sizes = [2, 3, 4]) => sizes.map(dim => compile(dim, tpl, args, syms, ret, "", pre != null ? pre : defaultOut(ret, args), "", true));

exports.defOpS = defOpS;

const defMathOp = op => defOp((0, _templates.MATH)(op));

exports.defMathOp = defMathOp;

const defMathOpN = op => defOp((0, _templates.MATH_N)(op), ARGS_VN);

exports.defMathOpN = defMathOpN;

const defBitOp = (op, signed = false) => defOp((signed ? _templates.SIGNED : _templates.UNSIGNED)(op));

exports.defBitOp = defBitOp;

const defBitOpN = (op, signed = false) => defOp((signed ? _templates.SIGNED_N : _templates.UNSIGNED_N)(op), ARGS_VN);

exports.defBitOpN = defBitOpN;
},{"@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","./templates":"../../node_modules/@thi.ng/vectors/internal/templates.js","./vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/internal/vec-utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vecIterator = vecIterator;
exports.values = values;
exports.intoBuffer = exports.mapBuffer = void 0;

const mapBuffer = (ctor, buf, num, start, cstride, estride) => {
  const res = [];

  while (--num >= 0) {
    res.push(new ctor(buf, start, cstride));
    start += estride;
  }

  return res;
};

exports.mapBuffer = mapBuffer;

const intoBuffer = (set, buf, src, start, cstride, estride) => {
  for (let v of src) {
    set(buf, v, start, 0, cstride, 1);
    start += estride;
  }

  return buf;
};

exports.intoBuffer = intoBuffer;

function* vecIterator(ctor, buf, num, start, cstride, estride) {
  while (num-- > 0) {
    yield new ctor(buf, start, cstride);
    start += estride;
  }
}

function* values(buf, num, start, stride) {
  while (num-- > 0) {
    yield buf[start];
    start += stride;
  }
}
},{}],"../../node_modules/@thi.ng/vectors/eqdelta.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInArray = exports.eqDeltaArray = exports.eqDeltaS = exports.eqDelta4 = exports.eqDelta3 = exports.eqDelta2 = exports.eqDelta = void 0;

var _checks = require("@thi.ng/checks");

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _vop = require("./internal/vop");

const $ = dim => eqDelta.add(dim, (0, _codegen.compileHOF)(dim, [_math.eqDelta, _math.EPS], ([a, b]) => `eq(${a},${b},eps)`, "eq,_eps", "a,b,eps=_eps", "a,b", "", "&&", "return a.length === b.length && ", ";"));

const eqDelta = (0, _vop.vop)();
exports.eqDelta = eqDelta;
eqDelta.default((v1, v2, eps = _math.EPS) => {
  if ((0, _checks.implementsFunction)(v1, "eqDelta")) {
    return v1.eqDelta(v2, eps);
  }

  if ((0, _checks.implementsFunction)(v2, "eqDelta")) {
    return v2.eqDelta(v1, eps);
  }

  return eqDeltaS(v1, v2, v1.length, eps);
});
const eqDelta2 = $(2);
exports.eqDelta2 = eqDelta2;
const eqDelta3 = $(3);
exports.eqDelta3 = eqDelta3;
const eqDelta4 = $(4);
/**
 * Similar to `equiv()`, but takes tolerance `eps` into account for
 * equality checks.
 *
 * @param a first vector
 * @param b second vector
 * @param n number of elements
 * @param eps tolerance
 * @param ia start index a
 * @param ib start index b
 * @param sa stride a
 * @param sb stride b
 */

exports.eqDelta4 = eqDelta4;

const eqDeltaS = (a, b, n, eps = _math.EPS, ia = 0, ib = 0, sa = 1, sb = 1) => {
  for (; n > 0; n--, ia += sa, ib += sb) {
    if (!(0, _math.eqDelta)(a[ia], b[ib], eps)) {
      return false;
    }
  }

  return true;
};

exports.eqDeltaS = eqDeltaS;

const eqDeltaArray = (a, b, eps = _math.EPS) => {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  for (let i = a.length; --i >= 0;) {
    if (!eqDelta(a[i], b[i], eps)) {
      return false;
    }
  }

  return true;
};

exports.eqDeltaArray = eqDeltaArray;

const isInArray = (p, pts, eps = _math.EPS) => {
  for (let i = pts.length; --i >= 0;) {
    if (eqDelta(p, pts[i], eps)) {
      return true;
    }
  }

  return false;
};

exports.isInArray = isInArray;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/binary/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MASKS = void 0;
const MASKS = new Array(33).fill(0).map((_, i) => Math.pow(2, i) - 1);
exports.MASKS = MASKS;
},{}],"../../node_modules/@thi.ng/binary/align.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAligned = exports.align = void 0;

/**
 * Aligns `addr` to next multiple of `size`. The latter must be a power
 * of 2.
 *
 * @param addr
 * @param size
 */
const align = (addr, size) => (size--, addr + size & ~size);
/**
 * Returns true if `addr` is aligned to wordsize `size`.
 */


exports.align = align;

const isAligned = (addr, size) => !(addr & size - 1);

exports.isAligned = isAligned;
},{}],"../../node_modules/@thi.ng/binary/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctz32 = exports.clz32 = exports.hammingDist = exports.popCount = void 0;

/**
 * Returns number of 1 bits in `x`.
 *
 * @param x
 */
const popCount = x => (x = x - (x >>> 1 & 0x55555555), x = (x & 0x33333333) + (x >>> 2 & 0x33333333), (x + (x >>> 4) & 0xf0f0f0f) * 0x1010101 >>> 24);
/**
 * https://en.wikipedia.org/wiki/Hamming_distance
 *
 * @param x
 * @param y
 */


exports.popCount = popCount;

const hammingDist = (x, y) => popCount(x ^ y);
/**
 * Math.clz32() polyfill (corrected).
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32$revision/1426816
 *
 * @param x
 */


exports.hammingDist = hammingDist;

const clz32 = x => x !== 0 ? 31 - (Math.log(x >>> 0) / Math.LN2 | 0) : 32;

exports.clz32 = clz32;

const ctz32 = x => {
  let c = 32;
  x &= -x;
  x && c--;
  x & 0x0000ffff && (c -= 16);
  x & 0x00ff00ff && (c -= 8);
  x & 0x0f0f0f0f && (c -= 4);
  x & 0x33333333 && (c -= 2);
  x & 0x55555555 && (c -= 1);
  return c;
};

exports.ctz32 = ctz32;
},{}],"../../node_modules/@thi.ng/binary/mask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskH = exports.maskL = exports.defMask = void 0;

var _api = require("./api");

/**
 * Creates bit mask by enabling bit `a` to bit `b-1`, both in range
 * 0-32. `b` MUST be >= `a`.
 *
 * ```
 * defMask(1,31).toString(16) // 7ffffffe
 * defMask(3,8).toString(16)  // f8
 * ```
 *
 * @param a
 * @param b
 */
const defMask = (a, b) => (~_api.MASKS[a] & _api.MASKS[b]) >>> 0;
/**
 * Returns unsigned version of `x` with only lowest `n` bits.
 *
 * @param n
 * @param x
 */


exports.defMask = defMask;

const maskL = (n, x) => (x & _api.MASKS[n]) >>> 0;
/**
 * Returns unsigned version of `x` with only highest `n` bits.
 *
 * @param n
 * @param x
 */


exports.maskL = maskL;

const maskH = (n, x) => (x & ~_api.MASKS[n]) >>> 0;

exports.maskH = maskH;
},{"./api":"../../node_modules/@thi.ng/binary/api.js"}],"../../node_modules/@thi.ng/binary/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitClearWindow = exports.bitSetWindow = exports.bitSet = exports.bitFlip = exports.bitClear = void 0;

var _mask = require("./mask");

/**
 * Clears bit in given uint `x`.
 *
 * @param x value
 * @param bit bit number (0..31)
 */
const bitClear = (x, bit) => (x & ~(1 << bit)) >>> 0;
/**
 * Toggles bit in given uint `x`.
 *
 * @param x
 * @param bit
 */


exports.bitClear = bitClear;

const bitFlip = (x, bit) => (x ^ 1 << bit) >>> 0;
/**
 * Sets bit in given uint `x`.
 *
 * @param x value
 * @param bit bit number (0..31)
 */


exports.bitFlip = bitFlip;

const bitSet = (x, bit) => (x | 1 << bit) >>> 0;

exports.bitSet = bitSet;

const bitSetWindow = (x, y, from, to) => {
  const m = (0, _mask.defMask)(from, to);
  return x & ~m | y << (1 << from) & m;
};

exports.bitSetWindow = bitSetWindow;

const bitClearWindow = (x, from, to) => x & ~(0, _mask.defMask)(from, to);

exports.bitClearWindow = bitClearWindow;
},{"./mask":"../../node_modules/@thi.ng/binary/mask.js"}],"../../node_modules/@thi.ng/binary/float.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatToSortableInt = exports.uintBitsToFloat = exports.intBitsToFloat = exports.floatToUintBits = exports.floatToIntBits = void 0;
const F32 = new Float32Array(1);
const I32 = new Int32Array(F32.buffer);
const U32 = new Uint32Array(F32.buffer);

const floatToIntBits = x => (F32[0] = x, I32[0]);

exports.floatToIntBits = floatToIntBits;

const floatToUintBits = x => (F32[0] = x, U32[0]);

exports.floatToUintBits = floatToUintBits;

const intBitsToFloat = x => (I32[0] = x, F32[0]);

exports.intBitsToFloat = intBitsToFloat;

const uintBitsToFloat = x => (U32[0] = x, F32[0]);
/**
 * Converts given float into a sortable integer representation, using
 * raw bitwise conversion via `floatToIntBits()`.
 *
 * https://github.com/tzaeschke/phtree/blob/master/PhTreeRevisited.pdf
 * (page 3)
 *
 * @param x
 */


exports.uintBitsToFloat = uintBitsToFloat;

const floatToSortableInt = x => {
  if (x === -0) x = 0;
  const i = floatToIntBits(x);
  return x < 0 ? ~i | 1 << 31 : i;
};

exports.floatToSortableInt = floatToSortableInt;
},{}],"../../node_modules/@thi.ng/binary/gray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeGray32 = exports.encodeGray32 = void 0;

/**
 * Converts 32bit unsigned int to Gray code (reflected binary). Gray
 * codes of successive values always have a Hamming distance of 1 (i.e.
 * only 1 bit changes at a time).
 *
 * https://en.wikipedia.org/wiki/Gray_code
 *
 * @param x u32
 */
const encodeGray32 = x => (x ^ x >>> 1) >>> 0;
/**
 * Converts 32bit Gray code to binary / unsigned int.
 *
 * https://en.wikipedia.org/wiki/Gray_code
 */


exports.encodeGray32 = encodeGray32;

const decodeGray32 = x => {
  x = x ^ x >>> 16;
  x = x ^ x >>> 8;
  x = x ^ x >>> 4;
  x = x ^ x >>> 2;
  x = x ^ x >>> 1;
  return x >>> 0;
};

exports.decodeGray32 = decodeGray32;
},{}],"../../node_modules/@thi.ng/binary/logic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitDemux = exports.bitMux = exports.bitOai22 = exports.bitAoi22 = exports.bitOai21 = exports.bitAoi21 = exports.bitImply = exports.bitXnor = exports.bitXor = exports.bitNor = exports.bitOr = exports.bitNand = exports.bitAnd = exports.bitNot = void 0;

var _mask = require("./mask");

const bitNot = (n, x) => (0, _mask.maskL)(n, ~x);

exports.bitNot = bitNot;

const bitAnd = (n, a, b) => (0, _mask.maskL)(n, a & b);

exports.bitAnd = bitAnd;

const bitNand = (n, a, b) => (0, _mask.maskL)(n, ~(a & b));

exports.bitNand = bitNand;

const bitOr = (n, a, b) => (0, _mask.maskL)(n, a | b);

exports.bitOr = bitOr;

const bitNor = (n, a, b) => (0, _mask.maskL)(n, ~(a & b));

exports.bitNor = bitNor;

const bitXor = (n, a, b) => (0, _mask.maskL)(n, a ^ b);

exports.bitXor = bitXor;

const bitXnor = (n, a, b) => (0, _mask.maskL)(n, ~(a ^ b));

exports.bitXnor = bitXnor;

const bitImply = (n, a, b) => (0, _mask.maskL)(n, ~a | b);

exports.bitImply = bitImply;

const bitAoi21 = (n, a, b, c) => (0, _mask.maskL)(n, ~(a | b & c));

exports.bitAoi21 = bitAoi21;

const bitOai21 = (n, a, b, c) => (0, _mask.maskL)(n, ~(a & (b | c)));

exports.bitOai21 = bitOai21;

const bitAoi22 = (n, a, b, c, d) => (0, _mask.maskL)(n, ~(a & b | c & d));

exports.bitAoi22 = bitAoi22;

const bitOai22 = (n, a, b, c, d) => (0, _mask.maskL)(n, ~((a | b) & (c | d)));

exports.bitOai22 = bitOai22;

const bitMux = (n, a, b, s) => (0, _mask.maskL)(n, a & ~s | b & s);

exports.bitMux = bitMux;

const bitDemux = (n, a, b, s) => [(0, _mask.maskL)(n, a & ~s), (0, _mask.maskL)(n, b & s)];

exports.bitDemux = bitDemux;
},{"./mask":"../../node_modules/@thi.ng/binary/mask.js"}],"../../node_modules/@thi.ng/binary/pow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floorPow2 = exports.ceilPow2 = exports.isPow2 = void 0;

// http://graphics.stanford.edu/~seander/bithacks.html
const isPow2 = x => !!x && !(x & x - 1);

exports.isPow2 = isPow2;

const ceilPow2 = x => {
  x += x === 0;
  --x;
  x |= x >>> 1;
  x |= x >>> 2;
  x |= x >>> 4;
  x |= x >>> 8;
  x |= x >>> 16;
  return x + 1;
};

exports.ceilPow2 = ceilPow2;

const floorPow2 = x => {
  x |= x >>> 1;
  x |= x >>> 2;
  x |= x >>> 4;
  x |= x >>> 8;
  x |= x >>> 16;
  return x - (x >>> 1);
};

exports.floorPow2 = floorPow2;
},{}],"../../node_modules/@thi.ng/binary/rotate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateRight = exports.rotateLeft = void 0;

/**
 * Rotates `x` `n` bits to the left.
 *
 * @param x
 * @param n
 */
const rotateLeft = (x, n) => (x << n | x >>> 32 - n) >>> 0;
/**
 * Rotates `x` `n` bits to the right.
 *
 * @param x
 * @param n
 */


exports.rotateLeft = rotateLeft;

const rotateRight = (x, n) => (x >>> n | x << 32 - n) >>> 0;

exports.rotateRight = rotateRight;
},{}],"../../node_modules/@thi.ng/binary/splat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.same8 = exports.same4 = exports.splat16_32 = exports.splat8_32 = exports.splat8_24 = exports.splat4_32 = exports.splat4_24 = void 0;

/**
 * Repeats lowest nibble of `x` as 24 bit uint.
 *
 * @param x
 */
const splat4_24 = x => (x & 0xf) * 0x111111;
/**
 * Repeats lowest nibble of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat4_24 = splat4_24;

const splat4_32 = x => (x & 0xf) * 0x11111111 >>> 0;
/**
 * Repeats lowest byte of `x` as 24 bit uint.
 *
 * @param x
 */


exports.splat4_32 = splat4_32;

const splat8_24 = x => (x & 0xff) * 0x010101;
/**
 * Repeats lowest byte of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat8_24 = splat8_24;

const splat8_32 = x => (x & 0xff) * 0x01010101 >>> 0;
/**
 * Repeats lowest 16bit of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat8_32 = splat8_32;

const splat16_32 = x => (x &= 0xffff, (x << 16 | x) >>> 0);
/**
 * Returns true if bits 0-3 are same as bits 4-7.
 *
 * @param x
 */


exports.splat16_32 = splat16_32;

const same4 = x => (x >> 4 & 0xf) === (x & 0xf);
/**
 * Returns true if bits 0-7 are same as bits 8-15.
 *
 * @param x
 */


exports.same4 = same4;

const same8 = x => (x >> 8 & 0xff) === (x & 0xff);

exports.same8 = same8;
},{}],"../../node_modules/@thi.ng/binary/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipBytes = exports.swizzle4 = exports.swizzle8 = exports.setLane2 = exports.setLane4 = exports.setLane8 = exports.lane2 = exports.lane4 = exports.lane8 = void 0;

/**
 * Extracts 8-bit lane from given 32bit uint.
 *
 * - Lane #0: bits 24-31
 * - Lane #1: bits 16-23
 * - Lane #2: bits 8-15
 * - Lane #3: bits 0-7
 *
 * @param x
 * @param lane
 */
const lane8 = (x, lane) => x >>> (3 - lane << 3) & 0xff;
/**
 * Extracts 4-bit lane from given 32bit uint.
 *
 * - Lane #0: bits 28-31
 * - Lane #1: bits 24-27
 * - Lane #2: bits 20-23
 * - Lane #3: bits 16-19
 * - Lane #4: bits 12-15
 * - Lane #5: bits 8-11
 * - Lane #6: bits 4-7
 * - Lane #7: bits 0-3
 *
 * @param x
 * @param lane
 */


exports.lane8 = lane8;

const lane4 = (x, lane) => x >>> (7 - lane << 2) & 0xf;

exports.lane4 = lane4;

const lane2 = (x, lane) => x >>> (15 - lane << 1) & 0x3;
/**
 * Sets 8-bit `lane` with value`y` in `x`.
 *
 * @see lane8
 *
 * @param x
 * @param y
 * @param lane
 */


exports.lane2 = lane2;

const setLane8 = (x, y, lane) => {
  const l = 3 - lane << 3;
  return (~(0xff << l) & x | (y & 0xff) << l) >>> 0;
};
/**
 * Sets 4-bit `lane` with value `y` in `x`.
 *
 * @see lane4
 *
 * @param x
 * @param y
 * @param lane
 */


exports.setLane8 = setLane8;

const setLane4 = (x, y, lane) => {
  const l = 7 - lane << 2;
  return (~(0xf << l) & x | (y & 0xf) << l) >>> 0;
};
/**
 * Sets 2-bit `lane` with value `y` in `x`.
 *
 * @see lane2
 *
 * @param x
 * @param y
 * @param lane
 */


exports.setLane4 = setLane4;

const setLane2 = (x, y, lane) => {
  const l = 15 - lane << 1;
  return (~(0x3 << l) & x | (y & 0x3) << l) >>> 0;
};
/**
 * Re-orders byte lanes in given order (MSB).
 *
 * ```
 * swizzle(0x12345678, 3, 2, 1, 0) // 0x78563412
 * swizzle(0x12345678, 1, 0, 3, 2) // 0x34127856
 * swizzle(0x12345678, 2, 2, 0, 0) // 0x56561212
 * ```
 *
 * @param x
 * @param a
 * @param b
 * @param c
 * @param d
 */


exports.setLane2 = setLane2;

const swizzle8 = (x, a, b, c, d) => (lane8(x, a) << 24 | lane8(x, b) << 16 | lane8(x, c) << 8 | lane8(x, d)) >>> 0;
/**
 *
 * @param x
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @param f
 * @param g
 * @param h
 */


exports.swizzle8 = swizzle8;

const swizzle4 = (x, a, b, c, d, e, f, g, h) => (lane4(x, a) << 28 | lane4(x, b) << 24 | lane4(x, c) << 20 | lane4(x, d) << 16 | lane4(x, e) << 12 | lane4(x, f) << 8 | lane4(x, g) << 4 | lane4(x, h)) >>> 0;
/**
 * Same as `swizzle8(x, 3, 2, 1, 0)`, but faster.
 *
 * @param x
 */


exports.swizzle4 = swizzle4;

const flipBytes = x => (x >>> 24 | x >> 8 & 0xff00 | (x & 0xff00) << 8 | x << 24) >>> 0;

exports.flipBytes = flipBytes;
},{}],"../../node_modules/@thi.ng/binary/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _align = require("./align");

Object.keys(_align).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _align[key];
    }
  });
});

var _count = require("./count");

Object.keys(_count).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _count[key];
    }
  });
});

var _edit = require("./edit");

Object.keys(_edit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _edit[key];
    }
  });
});

var _float = require("./float");

Object.keys(_float).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _float[key];
    }
  });
});

var _gray = require("./gray");

Object.keys(_gray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gray[key];
    }
  });
});

var _logic = require("./logic");

Object.keys(_logic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logic[key];
    }
  });
});

var _mask = require("./mask");

Object.keys(_mask).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mask[key];
    }
  });
});

var _pow = require("./pow");

Object.keys(_pow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pow[key];
    }
  });
});

var _rotate = require("./rotate");

Object.keys(_rotate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rotate[key];
    }
  });
});

var _splat = require("./splat");

Object.keys(_splat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _splat[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/binary/api.js","./align":"../../node_modules/@thi.ng/binary/align.js","./count":"../../node_modules/@thi.ng/binary/count.js","./edit":"../../node_modules/@thi.ng/binary/edit.js","./float":"../../node_modules/@thi.ng/binary/float.js","./gray":"../../node_modules/@thi.ng/binary/gray.js","./logic":"../../node_modules/@thi.ng/binary/logic.js","./mask":"../../node_modules/@thi.ng/binary/mask.js","./pow":"../../node_modules/@thi.ng/binary/pow.js","./rotate":"../../node_modules/@thi.ng/binary/rotate.js","./splat":"../../node_modules/@thi.ng/binary/splat.js","./swizzle":"../../node_modules/@thi.ng/binary/swizzle.js"}],"../../node_modules/@thi.ng/vectors/hash.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = void 0;

var _binary = require("@thi.ng/binary");

/**
 * Returns an unsigned 32-bit hash code for the given vector. The hash
 * is the reduction of `hash = H * hash + murmur(x)`, where `murmur(x)` is
 * the partial Murmur3 hash of a single vector component's bitwise
 * representation and `H` an optional hash factor, by default Knuth's
 * 0x9e3779b1 (see TAOCP, section 6.4, page 516). If the vector `v` is
 * empty (length 0), the function returns -1.
 *
 * Hashes for zero-vectors:
 *
 * - `[0]`: 1209856430
 * - `[0, 0]`: 3623989185
 * - `[0, 0, 0]`: 4192292821
 * - `[0, 0, 0, 0]`: 2558592725
 *
 * Hash collisions:
 *
 * ```
 * // integer grid coords
 * uniq = tx.transduce(tx.map(v.hash32), tx.conj(), tx.range2d(0x1000, 0x1000)).size
 * // 16744420
 *
 * // collision rate
 * (1 - uniq / (0x1000 ** 2)) * 100
 * // 0.1955 %
 *
 * // normalized grid coords
 * uniq = tx.transduce(
 *   tx.map(v.hash32),
 *   tx.conj(),
 *   tx.permutations(tx.normRange(1000), tx.normRange(1000))
 * ).size
 * // 1001895
 *
 * // collision rate
 * (1 - uniq / (1001 ** 2)) * 100
 * // 0.0106 %
 * ```
 *
 * @see https://github.com/thi-ng/c-thing/blob/master/src/math/hashfn.c
 * @see thi.ng/morton for Z-curve ordered hashing
 *
 * @param v vector
 * @param hash hash factor
 */
const hash = (v, H = 0x9e3779b1) => {
  let hash = -1;

  for (let i = v.length; --i >= 0;) {
    hash = Math.imul(H, hash) + mix(hash, (0, _binary.floatToUintBits)(v[i])) >>> 0;
  }

  return hash;
};

exports.hash = hash;
const M1 = 0xcc9e2d51;
const M2 = 0x1b873593;
const M3 = 0xe6546b64;

const mix = (h, k) => {
  k = Math.imul((0, _binary.rotateLeft)(Math.imul(k, M1) >>> 0, 15), M2) >>> 0;
  return (Math.imul((0, _binary.rotateLeft)(h ^ k, 13), 5) >>> 0) + M3 >>> 0;
};
},{"@thi.ng/binary":"../../node_modules/@thi.ng/binary/index.js"}],"../../node_modules/@thi.ng/vectors/sets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setS = exports.setS4 = exports.setS3 = exports.setS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [setS2, setS3, setS4] = (0, _codegen.defOpS)(_templates.SET, `o,a,${_codegen.SARGS_V}`, "o,a", "o", _codegen.NEW_OUT);
exports.setS4 = setS4;
exports.setS3 = setS3;
exports.setS2 = setS2;

const setS = (out, a, n, io = 0, ia = 0, so = 1, sa = 1) => {
  for (let i = 0; i < n; i++) {
    out[io + i * so] = a[ia + i * sa];
  }

  return out;
};

exports.setS = setS;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/vec2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asVec2 = exports.vec2n = exports.vec2 = exports.Vec2 = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _eqdelta = require("./eqdelta");

var _hash = require("./hash");

var _accessors = require("./internal/accessors");

var _avec = require("./internal/avec");

var _vecUtils = require("./internal/vec-utils");

var _sets = require("./sets");

class Vec2 extends _avec.AVec {
  constructor(buf, offset = 0, stride = 1) {
    super(buf || [0, 0], offset, stride);
  }
  /**
   * Returns array of memory mapped `Vec2` instances using given
   * backing array and stride settings: The `cstride` is the step size
   * between individual XY vector components. `estride` is the step
   * size between successive vectors. This arrangement allows for
   * different storage approaches, incl. SOA, AOS, striped /
   * interleaved etc.
   *
   * @param buf backing array
   * @param num num vectors
   * @param start  start index
   * @param cstride component stride
   * @param estride element stride
   */


  static mapBuffer(buf, num = buf.length >> 1, start = 0, cstride = 1, estride = 2) {
    return (0, _vecUtils.mapBuffer)(Vec2, buf, num, start, cstride, estride);
  }
  /**
   * Merges given `src` iterable of `Vec2`s into single array `buf`.
   * Vectors will be arranged according to given component and element
   * strides, starting at `start` index. It's the user's
   * responsibility to ensure the target buffer has sufficient
   * capacity to hold the input vectors. See `Vec2.mapBuffer` for the
   * inverse operation. Returns `buf`.
   *
   * @param buf
   * @param src
   * @param start
   * @param cstride
   * @param estride
   */


  static intoBuffer(buf, src, start = 0, cstride = 1, estride = 2) {
    return (0, _vecUtils.intoBuffer)(_sets.setS2, buf, src, start, cstride, estride);
  }

  static iterator(buf, num, start = 0, cstride = 1, estride = 2) {
    return (0, _vecUtils.vecIterator)(Vec2, buf, num, start, cstride, estride);
  }

  [Symbol.iterator]() {
    return (0, _vecUtils.values)(this.buf, 2, this.offset, this.stride);
  }

  get length() {
    return 2;
  }

  copy() {
    return new Vec2([this.x, this.y]);
  }

  copyView() {
    return new Vec2(this.buf, this.offset, this.stride);
  }

  empty() {
    return new Vec2();
  }

  eqDelta(v, eps = _math.EPS) {
    return (0, _eqdelta.eqDelta2)(this, v, eps);
  }

  hash() {
    return (0, _hash.hash)(this);
  }

  toJSON() {
    return [this.x, this.y];
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

}

exports.Vec2 = Vec2;
Vec2.X_AXIS = new Vec2(_api.X2);
Vec2.Y_AXIS = new Vec2(_api.Y2);
Vec2.MIN = new Vec2(_api.MIN2);
Vec2.MAX = new Vec2(_api.MAX2);
Vec2.ZERO = new Vec2(_api.ZERO2);
Vec2.ONE = new Vec2(_api.ONE2);
(0, _accessors.declareIndices)(Vec2.prototype, ["x", "y"]);

const vec2 = (x = 0, y = 0) => new Vec2([x, y]);

exports.vec2 = vec2;

const vec2n = n => new Vec2([n, n]);

exports.vec2n = vec2n;

const asVec2 = x => x instanceof Vec2 ? x : new Vec2(x.length >= 2 ? x : [x[0] || 0, x[1] || 0]);

exports.asVec2 = asVec2;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/vectors/api.js","./eqdelta":"../../node_modules/@thi.ng/vectors/eqdelta.js","./hash":"../../node_modules/@thi.ng/vectors/hash.js","./internal/accessors":"../../node_modules/@thi.ng/vectors/internal/accessors.js","./internal/avec":"../../node_modules/@thi.ng/vectors/internal/avec.js","./internal/vec-utils":"../../node_modules/@thi.ng/vectors/internal/vec-utils.js","./sets":"../../node_modules/@thi.ng/vectors/sets.js"}],"../../node_modules/@thi.ng/vectors/vec3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asVec3 = exports.vec3n = exports.vec3 = exports.Vec3 = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _eqdelta = require("./eqdelta");

var _hash = require("./hash");

var _accessors = require("./internal/accessors");

var _avec = require("./internal/avec");

var _vecUtils = require("./internal/vec-utils");

var _sets = require("./sets");

class Vec3 extends _avec.AVec {
  constructor(buf, offset = 0, stride = 1) {
    super(buf || [0, 0, 0], offset, stride);
  }
  /**
   * Returns array of memory mapped `Vec3` instances using given
   * backing array and stride settings: The `cstride` is the step size
   * between individual XYZ vector components. `estride` is the step
   * size between successive vectors. This arrangement allows for
   * different storage approaches, incl. SOA, AOS, striped /
   * interleaved etc.
   *
   * @param buf backing array
   * @param num num vectors
   * @param start  start index
   * @param cstride component stride
   * @param estride element stride
   */


  static mapBuffer(buf, num = buf.length / 3 | 0, start = 0, cstride = 1, estride = 3) {
    return (0, _vecUtils.mapBuffer)(Vec3, buf, num, start, cstride, estride);
  }
  /**
   * Merges given `src` iterable of `Vec3`s into single array `buf`.
   * Vectors will be arranged according to given component and element
   * strides, starting at `start` index. It's the user's
   * responsibility to ensure the target buffer has sufficient
   * capacity to hold the input vectors. See `Vec3.mapBuffer` for the
   * inverse operation. Returns `buf`.
   *
   * @param buf
   * @param src
   * @param start
   * @param cstride
   * @param estride
   */


  static intoBuffer(buf, src, start = 0, cstride = 1, estride = 3) {
    return (0, _vecUtils.intoBuffer)(_sets.setS3, buf, src, start, cstride, estride);
  }

  static iterator(buf, num, start = 0, cstride = 1, estride = 3) {
    return (0, _vecUtils.vecIterator)(Vec3, buf, num, start, cstride, estride);
  }

  [Symbol.iterator]() {
    return (0, _vecUtils.values)(this.buf, 3, this.offset, this.stride);
  }

  get length() {
    return 3;
  }

  copy() {
    return new Vec3([this.x, this.y, this.z]);
  }

  copyView() {
    return new Vec3(this.buf, this.offset, this.stride);
  }

  empty() {
    return new Vec3();
  }

  eqDelta(v, eps = _math.EPS) {
    return (0, _eqdelta.eqDelta3)(this, v, eps);
  }

  hash() {
    return (0, _hash.hash)(this);
  }

  toJSON() {
    return [this.x, this.y, this.z];
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  }

}

exports.Vec3 = Vec3;
Vec3.X_AXIS = new Vec3(_api.X3);
Vec3.Y_AXIS = new Vec3(_api.Y3);
Vec3.Z_AXIS = new Vec3(_api.Z3);
Vec3.MIN = new Vec3(_api.MIN3);
Vec3.MAX = new Vec3(_api.MAX3);
Vec3.ZERO = new Vec3(_api.ZERO3);
Vec3.ONE = new Vec3(_api.ONE3);
(0, _accessors.declareIndices)(Vec3.prototype, ["x", "y", "z"]);

const vec3 = (x = 0, y = 0, z = 0) => new Vec3([x, y, z]);

exports.vec3 = vec3;

const vec3n = n => new Vec3([n, n, n]);

exports.vec3n = vec3n;

const asVec3 = x => x instanceof Vec3 ? x : new Vec3(x.length >= 3 ? x : [x[0] || 0, x[1] || 0, x[2] || 0]);

exports.asVec3 = asVec3;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/vectors/api.js","./eqdelta":"../../node_modules/@thi.ng/vectors/eqdelta.js","./hash":"../../node_modules/@thi.ng/vectors/hash.js","./internal/accessors":"../../node_modules/@thi.ng/vectors/internal/accessors.js","./internal/avec":"../../node_modules/@thi.ng/vectors/internal/avec.js","./internal/vec-utils":"../../node_modules/@thi.ng/vectors/internal/vec-utils.js","./sets":"../../node_modules/@thi.ng/vectors/sets.js"}],"../../node_modules/@thi.ng/vectors/vec4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asVec4 = exports.vec4n = exports.vec4 = exports.Vec4 = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _eqdelta = require("./eqdelta");

var _hash = require("./hash");

var _accessors = require("./internal/accessors");

var _avec = require("./internal/avec");

var _vecUtils = require("./internal/vec-utils");

var _sets = require("./sets");

class Vec4 extends _avec.AVec {
  constructor(buf, offset = 0, stride = 1) {
    super(buf || [0, 0, 0, 0], offset, stride);
  }
  /**
   * Returns array of memory mapped `Vec4` instances using given
   * backing array and stride settings: The `cstride` is the step size
   * between individual XYZ vector components. `estride` is the step
   * size between successive vectors. This arrangement allows for
   * different storage approaches, incl. SOA, AOS, striped /
   * interleaved etc.
   *
   * @param buf backing array
   * @param num num vectors
   * @param start  start index
   * @param cstride component stride
   * @param estride element stride
   */


  static mapBuffer(buf, num = buf.length >> 2, start = 0, cstride = 1, estride = 4) {
    return (0, _vecUtils.mapBuffer)(Vec4, buf, num, start, cstride, estride);
  }
  /**
   * Merges given `src` iterable of `Vec4`s into single array `buf`.
   * Vectors will be arranged according to given component and element
   * strides, starting at `start` index. It's the user's
   * responsibility to ensure the target buffer has sufficient
   * capacity to hold the input vectors. See `Vec4.mapBuffer` for the
   * inverse operation. Returns `buf`.
   *
   * @param buf
   * @param src
   * @param start
   * @param cstride
   * @param estride
   */


  static intoBuffer(buf, src, start = 0, cstride = 1, estride = 4) {
    return (0, _vecUtils.intoBuffer)(_sets.setS4, buf, src, start, cstride, estride);
  }

  static *iterator(buf, num, start = 0, cstride = 1, estride = 4) {
    return (0, _vecUtils.vecIterator)(Vec4, buf, num, start, cstride, estride);
  }

  [Symbol.iterator]() {
    return (0, _vecUtils.values)(this.buf, 4, this.offset, this.stride);
  }

  get length() {
    return 4;
  }

  copy() {
    return new Vec4([this.x, this.y, this.z, this.w]);
  }

  copyView() {
    return new Vec4(this.buf, this.offset, this.stride);
  }

  empty() {
    return new Vec4();
  }

  eqDelta(v, eps = _math.EPS) {
    return (0, _eqdelta.eqDelta4)(this, v, eps);
  }

  hash() {
    return (0, _hash.hash)(this);
  }

  toJSON() {
    return [this.x, this.y, this.z, this.w];
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.z}, ${this.w}]`;
  }

}

exports.Vec4 = Vec4;
Vec4.X_AXIS = new Vec4(_api.X4);
Vec4.Y_AXIS = new Vec4(_api.Y4);
Vec4.Z_AXIS = new Vec4(_api.Z4);
Vec4.MIN = new Vec4(_api.MIN4);
Vec4.MAX = new Vec4(_api.MAX4);
Vec4.ZERO = new Vec4(_api.ZERO4);
Vec4.ONE = new Vec4(_api.ONE4);
(0, _accessors.declareIndices)(Vec4.prototype, ["x", "y", "z", "w"]);

const vec4 = (x = 0, y = 0, z = 0, w = 0) => new Vec4([x, y, z, w]);

exports.vec4 = vec4;

const vec4n = n => new Vec4([n, n, n, n]);

exports.vec4n = vec4n;

const asVec4 = x => x instanceof Vec4 ? x : new Vec4(x.length >= 4 ? x : [x[0] || 0, x[1] || 0, x[2] || 0, x[3] || 0]);

exports.asVec4 = asVec4;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/vectors/api.js","./eqdelta":"../../node_modules/@thi.ng/vectors/eqdelta.js","./hash":"../../node_modules/@thi.ng/vectors/hash.js","./internal/accessors":"../../node_modules/@thi.ng/vectors/internal/accessors.js","./internal/avec":"../../node_modules/@thi.ng/vectors/internal/avec.js","./internal/vec-utils":"../../node_modules/@thi.ng/vectors/internal/vec-utils.js","./sets":"../../node_modules/@thi.ng/vectors/sets.js"}],"../../node_modules/@thi.ng/vectors/abs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs4 = exports.abs3 = exports.abs2 = exports.abs = void 0;

var _codegen = require("./internal/codegen");

const [abs, abs2, abs3, abs4] = (0, _codegen.defFnOp)("Math.abs");
exports.abs4 = abs4;
exports.abs3 = abs3;
exports.abs2 = abs2;
exports.abs = abs;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/acos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acos4 = exports.acos3 = exports.acos2 = exports.acos = void 0;

var _codegen = require("./internal/codegen");

const [acos, acos2, acos3, acos4] = (0, _codegen.defFnOp)("Math.acos");
exports.acos4 = acos4;
exports.acos3 = acos3;
exports.acos2 = acos2;
exports.acos = acos;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/maddn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maddN4 = exports.maddN3 = exports.maddN2 = exports.maddN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = a * n + b`.
 *
 * @param out vec
 * @param a vec
 * @param n scalar
 * @param b vec
 */
const [maddN, maddN2, maddN3, maddN4] = (0, _codegen.defOp)(_templates.MADD_N, _codegen.ARGS_VNV, _codegen.ARGS_VV);
exports.maddN4 = maddN4;
exports.maddN3 = maddN3;
exports.maddN2 = maddN2;
exports.maddN = maddN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/muln.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mulN4 = exports.mulN3 = exports.mulN2 = exports.mulN = void 0;

var _codegen = require("./internal/codegen");

const [mulN, mulN2, mulN3, mulN4] = (0, _codegen.defMathOpN)("*");
exports.mulN4 = mulN4;
exports.mulN3 = mulN3;
exports.mulN2 = mulN2;
exports.mulN = mulN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/addw.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addW5 = exports.addW4 = exports.addW3 = exports.addW2 = void 0;

var _maddn = require("./maddn");

var _muln = require("./muln");

const addW2 = (out, a, b, wa, wb) => (!out && (out = a), (0, _maddn.maddN)(out, b, wb, (0, _muln.mulN)(out, a, wa)));

exports.addW2 = addW2;

const addW3 = (out, a, b, c, wa, wb, wc) => (!out && (out = a), (0, _maddn.maddN)(out, c, wc, (0, _maddn.maddN)(out, b, wb, (0, _muln.mulN)(out, a, wa))));

exports.addW3 = addW3;

const addW4 = (out, a, b, c, d, wa, wb, wc, wd) => (!out && (out = a), (0, _maddn.maddN)(out, d, wd, (0, _maddn.maddN)(out, c, wc, (0, _maddn.maddN)(out, b, wb, (0, _muln.mulN)(out, a, wa)))));

exports.addW4 = addW4;

const addW5 = (out, a, b, c, d, e, wa, wb, wc, wd, we) => (!out && (out = a), (0, _maddn.maddN)(out, e, we, (0, _maddn.maddN)(out, d, wd, (0, _maddn.maddN)(out, c, wc, (0, _maddn.maddN)(out, b, wb, (0, _muln.mulN)(out, a, wa))))));

exports.addW5 = addW5;
},{"./maddn":"../../node_modules/@thi.ng/vectors/maddn.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js"}],"../../node_modules/@thi.ng/vectors/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add4 = exports.add3 = exports.add2 = exports.add = void 0;

var _codegen = require("./internal/codegen");

const [add, add2, add3, add4] = (0, _codegen.defMathOp)("+");
exports.add4 = add4;
exports.add3 = add3;
exports.add2 = add2;
exports.add = add;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/addi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNU4 = exports.addNU3 = exports.addNU2 = exports.addNU = exports.addNI4 = exports.addNI3 = exports.addNI2 = exports.addNI = exports.addU4 = exports.addU3 = exports.addU2 = exports.addU = exports.addI4 = exports.addI3 = exports.addI2 = exports.addI = void 0;

var _codegen = require("./internal/codegen");

const [addI, addI2, addI3, addI4] = (0, _codegen.defBitOp)("+", true);
exports.addI4 = addI4;
exports.addI3 = addI3;
exports.addI2 = addI2;
exports.addI = addI;
const [addU, addU2, addU3, addU4] = (0, _codegen.defBitOp)("+");
exports.addU4 = addU4;
exports.addU3 = addU3;
exports.addU2 = addU2;
exports.addU = addU;
const [addNI, addNI2, addNI3, addNI4] = (0, _codegen.defBitOpN)("+", true);
exports.addNI4 = addNI4;
exports.addNI3 = addNI3;
exports.addNI2 = addNI2;
exports.addNI = addNI;
const [addNU, addNU2, addNU3, addNU4] = (0, _codegen.defBitOpN)("+");
exports.addNU4 = addNU4;
exports.addNU3 = addNU3;
exports.addNU2 = addNU2;
exports.addNU = addNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/addm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addm4 = exports.addm3 = exports.addm2 = exports.addm = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = (a + b) * c`.
 *
 * @see madd
 * @see subm
 */
const [addm, addm2, addm3, addm4] = (0, _codegen.defOp)(_templates.ADDM, _codegen.ARGS_VVV);
exports.addm4 = addm4;
exports.addm3 = addm3;
exports.addm2 = addm2;
exports.addm = addm;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/addmn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addmN4 = exports.addmN3 = exports.addmN2 = exports.addmN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = (a + b) * n`.
 */
const [addmN, addmN2, addmN3, addmN4] = (0, _codegen.defOp)(_templates.ADDM_N, _codegen.ARGS_VVN);
exports.addmN4 = addmN4;
exports.addmN3 = addmN3;
exports.addmN2 = addmN2;
exports.addmN = addmN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/addn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addN4 = exports.addN3 = exports.addN2 = exports.addN = void 0;

var _codegen = require("./internal/codegen");

const [addN, addN2, addN3, addN4] = (0, _codegen.defMathOpN)("+");
exports.addN4 = addN4;
exports.addN3 = addN3;
exports.addN2 = addN2;
exports.addN = addN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/adds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addS4 = exports.addS3 = exports.addS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [addS2, addS3, addS4] = (0, _codegen.defOpS)((0, _templates.MATH)("+"));
exports.addS4 = addS4;
exports.addS3 = addS3;
exports.addS2 = addS2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/setc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setC = exports.setC6 = exports.setC4 = exports.setC3 = exports.setC2 = void 0;

const setC2 = (out, x, y) => (!out && (out = []), out[0] = x, out[1] = y, out);

exports.setC2 = setC2;

const setC3 = (out, x, y, z) => (!out && (out = []), out[0] = x, out[1] = y, out[2] = z, out);

exports.setC3 = setC3;

const setC4 = (out, x, y, z, w) => (!out && (out = []), out[0] = x, out[1] = y, out[2] = z, out[3] = w, out);

exports.setC4 = setC4;

const setC6 = (out, a, b, c, d, e, f) => (!out && (out = []), out[0] = a, out[1] = b, out[2] = c, out[3] = d, out[4] = e, out[5] = f, out);

exports.setC6 = setC6;

const setC = (out, ...xs) => {
  !out && (out = []);

  for (let i = 0, n = xs.length; i < n; i++) {
    out[i] = xs[i];
  }

  return out;
};

exports.setC = setC;
},{}],"../../node_modules/@thi.ng/vectors/cross.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cross3 = exports.cross2 = void 0;

var _setc = require("./setc");

const cross2 = (a, b) => a[0] * b[1] - a[1] * b[0];

exports.cross2 = cross2;

const cross3 = (out, a, b) => (0, _setc.setC3)(out || a, a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]);

exports.cross3 = cross3;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/dot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dot4 = exports.dot3 = exports.dot2 = exports.dot = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

var _vop = require("./internal/vop");

const $ = dim => dot.add(dim, (0, _codegen.compile)(dim, _templates.DOT, "a,b", undefined, "", "+", "return ", ";"));

const dot = (0, _vop.vop)();
exports.dot = dot;
dot.default((0, _codegen.compileG)(_templates.DOT_G, "a,b", undefined, "s", "let s=0;"));
const dot2 = $(2);
exports.dot2 = dot2;
const dot3 = $(3);
exports.dot3 = dot3;
const dot4 = $(4);
exports.dot4 = dot4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/magsq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.magSq4 = exports.magSq3 = exports.magSq2 = exports.magSq = void 0;

var _codegen = require("./internal/codegen");

var _vop = require("./internal/vop");

const $ = dim => magSq.add(dim, (0, _codegen.compile)(dim, ([a]) => `${a}*${a}`, "a", "a", "", "+", "return ", ";"));

const magSq = (0, _vop.vop)();
exports.magSq = magSq;
magSq.default((0, _codegen.compileG)(([a]) => `sum+=${a}*${a};`, "a", undefined, "sum", "let sum=0;"));
const magSq2 = $(2);
exports.magSq2 = magSq2;
const magSq3 = $(3);
exports.magSq3 = magSq3;
const magSq4 = $(4);
exports.magSq4 = magSq4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/mag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mag = void 0;

var _magsq = require("./magsq");

const mag = v => Math.sqrt((0, _magsq.magSq)(v));

exports.mag = mag;
},{"./magsq":"../../node_modules/@thi.ng/vectors/magsq.js"}],"../../node_modules/@thi.ng/vectors/angle-between.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angleBetween3 = exports.angleBetween2 = exports.angleRatio = void 0;

var _math = require("@thi.ng/math");

var _cross = require("./cross");

var _dot = require("./dot");

var _mag = require("./mag");

const angleRatio = (a, b) => (0, _dot.dot)(a, b) / ((0, _mag.mag)(a) * (0, _mag.mag)(b));

exports.angleRatio = angleRatio;

const angleBetween2 = (a, b, absInner = false) => {
  const t = Math.atan2((0, _cross.cross2)(a, b), (0, _dot.dot)(a, b));
  return absInner ? (0, _math.absInnerAngle)(t) : t;
};

exports.angleBetween2 = angleBetween2;

const angleBetween3 = (a, b, normalize = true, absInner = false) => {
  const t = normalize ? Math.acos(angleRatio(a, b)) : Math.acos((0, _dot.dot)(a, b));
  return absInner ? (0, _math.absInnerAngle)(t) : t;
};

exports.angleBetween3 = angleBetween3;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./cross":"../../node_modules/@thi.ng/vectors/cross.js","./dot":"../../node_modules/@thi.ng/vectors/dot.js","./mag":"../../node_modules/@thi.ng/vectors/mag.js"}],"../../node_modules/@thi.ng/vectors/asin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asin4 = exports.asin3 = exports.asin2 = exports.asin = void 0;

var _codegen = require("./internal/codegen");

const [asin, asin2, asin3, asin4] = (0, _codegen.defFnOp)("Math.asin");
exports.asin4 = asin4;
exports.asin3 = asin3;
exports.asin2 = asin2;
exports.asin = asin;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/atan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atan_24 = exports.atan_23 = exports.atan_22 = exports.atan_2 = exports.atan4 = exports.atan3 = exports.atan2 = exports.atan = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [atan, atan2, atan3, atan4] = (0, _codegen.defFnOp)("Math.atan");
exports.atan4 = atan4;
exports.atan3 = atan3;
exports.atan2 = atan2;
exports.atan = atan;
const [atan_2, atan_22, atan_23, atan_24] = (0, _codegen.defOp)((0, _templates.FN2)("Math.atan2"), _codegen.ARGS_VV);
exports.atan_24 = atan_24;
exports.atan_23 = atan_23;
exports.atan_22 = atan_22;
exports.atan_2 = atan_2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/heading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = exports.headingYZ = exports.headingXZ = exports.headingXY = void 0;

var _math = require("@thi.ng/math");

/**
 * Returns orientation angle (in radians) of vector `a` in XY plane.
 *
 * @param a
 */
const headingXY = a => (0, _math.atan2Abs)(a[1], a[0]);
/**
 * Returns orientation angle (in radians) of vector `a` in XZ plane.
 *
 * @param a
 */


exports.headingXY = headingXY;

const headingXZ = a => (0, _math.atan2Abs)(a[2], a[0]);
/**
 * Returns orientation angle (in radians) of vector `a` in ZY plane.
 *
 * @param a
 */


exports.headingXZ = headingXZ;

const headingYZ = a => (0, _math.atan2Abs)(a[2], a[1]);
/**
 * Same as `headingXY`
 */


exports.headingYZ = headingYZ;
const heading = headingXY;
exports.heading = heading;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js"}],"../../node_modules/@thi.ng/vectors/bisect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bisect2 = void 0;

var _math = require("@thi.ng/math");

var _heading = require("./heading");

const bisect2 = (a, b) => {
  const theta = ((0, _heading.headingXY)(a) + (0, _heading.headingXY)(b)) / 2;
  return theta <= _math.HALF_PI ? theta : _math.PI - theta;
};

exports.bisect2 = bisect2;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./heading":"../../node_modules/@thi.ng/vectors/heading.js"}],"../../node_modules/@thi.ng/vectors/bit-and.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitAndNU4 = exports.bitAndNU3 = exports.bitAndNU2 = exports.bitAndNU = exports.bitAndNI4 = exports.bitAndNI3 = exports.bitAndNI2 = exports.bitAndNI = exports.bitAndU4 = exports.bitAndU3 = exports.bitAndU2 = exports.bitAndU = exports.bitAndI4 = exports.bitAndI3 = exports.bitAndI2 = exports.bitAndI = void 0;

var _codegen = require("./internal/codegen");

const [bitAndI, bitAndI2, bitAndI3, bitAndI4] = (0, _codegen.defBitOp)("&", true);
exports.bitAndI4 = bitAndI4;
exports.bitAndI3 = bitAndI3;
exports.bitAndI2 = bitAndI2;
exports.bitAndI = bitAndI;
const [bitAndU, bitAndU2, bitAndU3, bitAndU4] = (0, _codegen.defBitOp)("&");
exports.bitAndU4 = bitAndU4;
exports.bitAndU3 = bitAndU3;
exports.bitAndU2 = bitAndU2;
exports.bitAndU = bitAndU;
const [bitAndNI, bitAndNI2, bitAndNI3, bitAndNI4] = (0, _codegen.defBitOpN)("&", true);
exports.bitAndNI4 = bitAndNI4;
exports.bitAndNI3 = bitAndNI3;
exports.bitAndNI2 = bitAndNI2;
exports.bitAndNI = bitAndNI;
const [bitAndNU, bitAndNU2, bitAndNU3, bitAndNU4] = (0, _codegen.defBitOpN)("&");
exports.bitAndNU4 = bitAndNU4;
exports.bitAndNU3 = bitAndNU3;
exports.bitAndNU2 = bitAndNU2;
exports.bitAndNU = bitAndNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/bit-not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitNotU4 = exports.bitNotU3 = exports.bitNotU2 = exports.bitNotU = exports.bitNotI4 = exports.bitNotI3 = exports.bitNotI2 = exports.bitNotI = void 0;

var _codegen = require("./internal/codegen");

const [bitNotI, bitNotI2, bitNotI3, bitNotI4] = (0, _codegen.defOp)(([o, a]) => `${o}=(~${a})|0;`, _codegen.ARGS_V);
exports.bitNotI4 = bitNotI4;
exports.bitNotI3 = bitNotI3;
exports.bitNotI2 = bitNotI2;
exports.bitNotI = bitNotI;
const [bitNotU, bitNotU2, bitNotU3, bitNotU4] = (0, _codegen.defOp)(([o, a]) => `${o}=(~${a})>>>0;`, _codegen.ARGS_V);
exports.bitNotU4 = bitNotU4;
exports.bitNotU3 = bitNotU3;
exports.bitNotU2 = bitNotU2;
exports.bitNotU = bitNotU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/bit-or.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitOrNU4 = exports.bitOrNU3 = exports.bitOrNU2 = exports.bitOrNU = exports.bitOrNI4 = exports.bitOrNI3 = exports.bitOrNI2 = exports.bitOrNI = exports.bitOrU4 = exports.bitOrU3 = exports.bitOrU2 = exports.bitOrU = exports.bitOrI4 = exports.bitOrI3 = exports.bitOrI2 = exports.bitOrI = void 0;

var _codegen = require("./internal/codegen");

const [bitOrI, bitOrI2, bitOrI3, bitOrI4] = (0, _codegen.defBitOp)("|", true);
exports.bitOrI4 = bitOrI4;
exports.bitOrI3 = bitOrI3;
exports.bitOrI2 = bitOrI2;
exports.bitOrI = bitOrI;
const [bitOrU, bitOrU2, bitOrU3, bitOrU4] = (0, _codegen.defBitOp)("|");
exports.bitOrU4 = bitOrU4;
exports.bitOrU3 = bitOrU3;
exports.bitOrU2 = bitOrU2;
exports.bitOrU = bitOrU;
const [bitOrNI, bitOrNI2, bitOrNI3, bitOrNI4] = (0, _codegen.defBitOpN)("|", true);
exports.bitOrNI4 = bitOrNI4;
exports.bitOrNI3 = bitOrNI3;
exports.bitOrNI2 = bitOrNI2;
exports.bitOrNI = bitOrNI;
const [bitOrNU, bitOrNU2, bitOrNU3, bitOrNU4] = (0, _codegen.defBitOpN)("|");
exports.bitOrNU4 = bitOrNU4;
exports.bitOrNU3 = bitOrNU3;
exports.bitOrNU2 = bitOrNU2;
exports.bitOrNU = bitOrNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/bit-xor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitXorNU4 = exports.bitXorNU3 = exports.bitXorNU2 = exports.bitXorNU = exports.bitXorNI4 = exports.bitXorNI3 = exports.bitXorNI2 = exports.bitXorNI = exports.bitXorU4 = exports.bitXorU3 = exports.bitXorU2 = exports.bitXorU = exports.bitXorI4 = exports.bitXorI3 = exports.bitXorI2 = exports.bitXorI = void 0;

var _codegen = require("./internal/codegen");

const [bitXorI, bitXorI2, bitXorI3, bitXorI4] = (0, _codegen.defBitOp)("^", true);
exports.bitXorI4 = bitXorI4;
exports.bitXorI3 = bitXorI3;
exports.bitXorI2 = bitXorI2;
exports.bitXorI = bitXorI;
const [bitXorU, bitXorU2, bitXorU3, bitXorU4] = (0, _codegen.defBitOp)("^");
exports.bitXorU4 = bitXorU4;
exports.bitXorU3 = bitXorU3;
exports.bitXorU2 = bitXorU2;
exports.bitXorU = bitXorU;
const [bitXorNI, bitXorNI2, bitXorNI3, bitXorNI4] = (0, _codegen.defBitOpN)("^", true);
exports.bitXorNI4 = bitXorNI4;
exports.bitXorNI3 = bitXorNI3;
exports.bitXorNI2 = bitXorNI2;
exports.bitXorNI = bitXorNI;
const [bitXorNU, bitXorNU2, bitXorNU3, bitXorNU4] = (0, _codegen.defBitOpN)("^");
exports.bitXorNU4 = bitXorNU4;
exports.bitXorNU3 = bitXorNU3;
exports.bitXorNU2 = bitXorNU2;
exports.bitXorNU = bitXorNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/cartesian.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartesian3 = exports.cartesian2 = exports.cartesian = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _vop = require("./internal/vop");

var _maddn = require("./maddn");

var _setc = require("./setc");

const cos = Math.cos;
const sin = Math.sin;
/**
 * Converts polar vector `v` to cartesian coordinates and adds optional
 * `offset`. See `polar()` for reverse operation. If `out` is null,
 * modifies `v` in place.
 *
 * @param out
 * @param v
 * @param offset
 */

const cartesian = (0, _vop.vop)(1);
/**
 * Converts 2D polar vector `v` to cartesian coordinates and adds
 * optional `offset`. See `polar()` for reverse operation. If `out` is
 * null, modifies `v` in place.
 *
 * @param out
 * @param v
 * @param offset
 */

exports.cartesian = cartesian;
const cartesian2 = cartesian.add(2, (out, a, b = _api.ZERO2) => (0, _maddn.maddN2)(out || a, (0, _math.cossin)(a[1]), a[0], b));
/**
 * Converts 3D polar vector `v` to cartesian coordinates and adds
 * optional `offset`. See `polar()` for reverse operation. If `out` is
 * null, modifies `v` in place.
 *
 * @param out
 * @param v
 * @param offset
 */

exports.cartesian2 = cartesian2;
const cartesian3 = cartesian.add(3, (out, a, b = _api.ZERO3) => {
  const r = a[0];
  const theta = a[1];
  const phi = a[2];
  const ct = cos(theta);
  return (0, _setc.setC3)(out || a, r * ct * cos(phi) + b[0], r * ct * sin(phi) + b[1], r * sin(theta) + b[2]);
});
exports.cartesian3 = cartesian3;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/vectors/api.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js","./maddn":"../../node_modules/@thi.ng/vectors/maddn.js","./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/ceil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ceil4 = exports.ceil3 = exports.ceil2 = exports.ceil = void 0;

var _codegen = require("./internal/codegen");

const [ceil, ceil2, ceil3, ceil4] = (0, _codegen.defFnOp)("Math.ceil");
exports.ceil4 = ceil4;
exports.ceil3 = ceil3;
exports.ceil2 = ceil2;
exports.ceil = ceil;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/clamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp11_4 = exports.clamp11_3 = exports.clamp11_2 = exports.clamp11 = exports.clamp01_4 = exports.clamp01_3 = exports.clamp01_2 = exports.clamp01 = exports.clamp4 = exports.clamp3 = exports.clamp2 = exports.clamp = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [clamp, clamp2, clamp3, clamp4] = (0, _codegen.defHofOp)(_math.clamp, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.clamp4 = clamp4;
exports.clamp3 = clamp3;
exports.clamp2 = clamp2;
exports.clamp = clamp;
const [clamp01, clamp01_2, clamp01_3, clamp01_4] = (0, _codegen.defHofOp)(_math.clamp01, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.clamp01_4 = clamp01_4;
exports.clamp01_3 = clamp01_3;
exports.clamp01_2 = clamp01_2;
exports.clamp01 = clamp01;
const [clamp11, clamp11_2, clamp11_3, clamp11_4] = (0, _codegen.defHofOp)(_math.clamp11, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.clamp11_4 = clamp11_4;
exports.clamp11_3 = clamp11_3;
exports.clamp11_2 = clamp11_2;
exports.clamp11 = clamp11;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/clampn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clampN4 = exports.clampN3 = exports.clampN2 = exports.clampN = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

const [clampN, clampN2, clampN3, clampN4] = (0, _codegen.defHofOp)(_math.clamp, ([o, a]) => `${o}=op(${a},n,m);`, "o,a,n,m", "o,a");
exports.clampN4 = clampN4;
exports.clampN3 = clampN3;
exports.clampN2 = clampN2;
exports.clampN = clampN;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/signed-area.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signedAreaC2 = exports.signedArea2 = void 0;

/**
 * Returns area * 2 of the 2D triangle defined by the input vectors.
 * This is a useful classifier for many geometry processing tasks. In
 * addition to the triangle area, the result can also be interpreted as
 * follows:
 *
 * - `> 0`: points are ordered counterclockwise
 * - `< 0`: points are ordered clockwise
 * - `0`: points are co-linear
 *
 * Same as: `cross2(sub2([], b, a), sub2([], c, a))`
 *
 * @see corner2
 * @see clockwise2
 * @see cross2
 *
 * @param a
 * @param b
 * @param c
 */
const signedArea2 = (a, b, c) => {
  const ax = a[0];
  const ay = a[1];
  return (b[0] - ax) * (c[1] - ay) - (c[0] - ax) * (b[1] - ay);
};
/**
 * Same as `signedArea2`, but expects individual vector component args,
 * instead of vectors.
 *
 * @param ax
 * @param ay
 * @param bx
 * @param by
 * @param cx
 * @param cy
 */


exports.signedArea2 = signedArea2;

const signedAreaC2 = (ax, ay, bx, by, cx, cy) => (bx - ax) * (cy - ay) - (cx - ax) * (by - ay);

exports.signedAreaC2 = signedAreaC2;
},{}],"../../node_modules/@thi.ng/vectors/clockwise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clockwise2 = exports.corner2 = void 0;

var _math = require("@thi.ng/math");

var _signedArea = require("./signed-area");

/**
 * Syntax sugar for `sign(signedArea2(a, b, c))`.
 *
 * @see thi.ng/math/sign
 * @see signedArea2
 *
 * @param a
 * @param b
 * @param c
 * @param eps zero tolerance for sign computation
 */
const corner2 = (a, b, c, eps = _math.EPS) => (0, _math.sign)((0, _signedArea.signedArea2)(a, b, c), eps);
/**
 * Returns true, if the triangle `a`, `b`, `c` is in clockwise order,
 * i.e. if `corner2(a,b,c)` returned -1.
 *
 * @param a
 * @param b
 * @param c
 * @param eps
 */


exports.corner2 = corner2;

const clockwise2 = (a, b, c, eps = _math.EPS) => corner2(a, b, c, eps) < 0;

exports.clockwise2 = clockwise2;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./signed-area":"../../node_modules/@thi.ng/vectors/signed-area.js"}],"../../node_modules/@thi.ng/vectors/compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparator4 = exports.comparator3 = exports.comparator2 = void 0;

/**
 * Returns a new 2D vector comparator using given component order. The
 * comparator returns the signed index+1 of the first differing
 * component, e.g. if order is `0,1`, a return value of -2 means that
 * `a.y < b.y`.
 *
 * @param o1
 * @param o2
 */
const comparator2 = (o1, o2) => (a, b) => {
  const ax = a[o1];
  const ay = a[o2];
  const bx = b[o1];
  const by = b[o2];
  return ax === bx ? ay === by ? 0 : ay < by ? -2 : 2 : ax < bx ? -1 : 1;
};
/**
 * Returns a new 3D vector comparator using given component order. The
 * comparator returns the signed index+1 of the first differing
 * component, e.g. if order is `0,1,2`, a return value of -3 means that
 * `a.z < b.z`.
 *
 * @param o1
 * @param o2
 * @param o3
 */


exports.comparator2 = comparator2;

const comparator3 = (o1, o2, o3) => (a, b) => {
  const ax = a[o1];
  const ay = a[o2];
  const az = a[o3];
  const bx = b[o1];
  const by = b[o2];
  const bz = b[o3];
  return ax === bx ? ay === by ? az === bz ? 0 : az < bz ? -3 : 3 : ay < by ? -2 : 2 : ax < bx ? -1 : 1;
};
/**
 * Returns a new 4D vector comparator using given component order. The
 * comparator returns the signed index+1 of the first differing
 * component, e.g. if order is `0,1,2,3`, a return value of -4 means
 * that `a.w < b.w`.
 *
 * @param o1
 * @param o2
 * @param o3
 * @param o4
 */


exports.comparator3 = comparator3;

const comparator4 = (o1, o2, o3, o4) => (a, b) => {
  const ax = a[o1];
  const ay = a[o2];
  const az = a[o3];
  const aw = b[o4];
  const bx = b[o1];
  const by = b[o2];
  const bz = b[o3];
  const bw = b[o4];
  return ax === bx ? ay === by ? az === bz ? aw === bw ? 0 : aw < bw ? -4 : 4 : az < bz ? -3 : 3 : ay < by ? -2 : 2 : ax < bx ? -1 : 1;
};

exports.comparator4 = comparator4;
},{}],"../../node_modules/@thi.ng/vectors/set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set4 = exports.set3 = exports.set2 = exports.set = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [set, set2, set3, set4] = (0, _codegen.defOp)(_templates.SET, "o,a", undefined, "o", 1, _codegen.NEW_OUT);
exports.set4 = set4;
exports.set3 = set3;
exports.set2 = set2;
exports.set = set;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/copy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyVectors = exports.copy = void 0;

var _checks = require("@thi.ng/checks");

var _set = require("./set");

const copy = v => (0, _checks.implementsFunction)(v, "copy") ? v.copy() : (0, _set.set)([], v);

exports.copy = copy;

const copyVectors = pts => pts.map(copy);

exports.copyVectors = copyVectors;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./set":"../../node_modules/@thi.ng/vectors/set.js"}],"../../node_modules/@thi.ng/vectors/cos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cos4 = exports.cos3 = exports.cos2 = exports.cos = void 0;

var _codegen = require("./internal/codegen");

const [cos, cos2, cos3, cos4] = (0, _codegen.defFnOp)("Math.cos");
exports.cos4 = cos4;
exports.cos3 = cos3;
exports.cos2 = cos2;
exports.cos = cos;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/cosh.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosh4 = exports.cosh3 = exports.cosh2 = exports.cosh = void 0;

var _codegen = require("./internal/codegen");

const [cosh, cosh2, cosh3, cosh4] = (0, _codegen.defFnOp)("Math.cosh");
exports.cosh4 = cosh4;
exports.cosh3 = cosh3;
exports.cosh2 = cosh2;
exports.cosh = cosh;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/degrees.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.degrees4 = exports.degrees3 = exports.degrees2 = exports.degrees = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [degrees, degrees2, degrees3, degrees4] = (0, _codegen.defHofOp)(_math.deg, (0, _templates.FN)("op"));
exports.degrees4 = degrees4;
exports.degrees3 = degrees3;
exports.degrees2 = degrees2;
exports.degrees = degrees;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = void 0;

var _math = require("@thi.ng/math");

var _mag = require("./mag");

var _muln = require("./muln");

var _set = require("./set");

/**
 * Normalizes vector to given (optional) length (default: 1). If `out`
 * is null, modifies `v` in place.
 *
 * @param out
 * @param v
 * @param n
 */
const normalize = (out, v, n = 1) => {
  !out && (out = v);
  const m = (0, _mag.mag)(v);
  return m >= _math.EPS ? (0, _muln.mulN)(out, v, n / m) : out !== v ? (0, _set.set)(out, v) : out;
};

exports.normalize = normalize;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./mag":"../../node_modules/@thi.ng/vectors/mag.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js","./set":"../../node_modules/@thi.ng/vectors/set.js"}],"../../node_modules/@thi.ng/vectors/sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub4 = exports.sub3 = exports.sub2 = exports.sub = void 0;

var _codegen = require("./internal/codegen");

const [sub, sub2, sub3, sub4] = (0, _codegen.defMathOp)("-");
exports.sub4 = sub4;
exports.sub3 = sub3;
exports.sub2 = sub2;
exports.sub = sub;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/direction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.direction = void 0;

var _normalize = require("./normalize");

var _sub = require("./sub");

/**
 * Computes direction vector `a` -> `b`, normalized to length `n`
 * (default 1).
 *
 * @param a
 * @param b
 * @param n
 */
const direction = (out, a, b, n = 1) => (0, _normalize.normalize)(null, (0, _sub.sub)(out || a, b, a), n);

exports.direction = direction;
},{"./normalize":"../../node_modules/@thi.ng/vectors/normalize.js","./sub":"../../node_modules/@thi.ng/vectors/sub.js"}],"../../node_modules/@thi.ng/vectors/distsq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distSq4 = exports.distSq3 = exports.distSq2 = exports.distSq = void 0;

var _codegen = require("./internal/codegen");

var _vop = require("./internal/vop");

const tpl = ([a, b]) => `t=${a}-${b};s+=t*t;`;

const pre = "let t,s=0;";

const $ = dim => distSq.add(dim, (0, _codegen.compile)(dim, tpl, "a,b", undefined, "s", "", pre));

const distSq = (0, _vop.vop)();
exports.distSq = distSq;
distSq.default((0, _codegen.compileG)(tpl, "a,b", undefined, "s", pre));
const distSq2 = $(2);
exports.distSq2 = distSq2;
const distSq3 = $(3);
exports.distSq3 = distSq3;
const distSq4 = $(4);
exports.distSq4 = distSq4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/dist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dist = void 0;

var _distsq = require("./distsq");

const dist = (a, b) => Math.sqrt((0, _distsq.distSq)(a, b));

exports.dist = dist;
},{"./distsq":"../../node_modules/@thi.ng/vectors/distsq.js"}],"../../node_modules/@thi.ng/vectors/dist-chebyshev.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distChebyshev4 = exports.distChebyshev3 = exports.distChebyshev2 = exports.distChebyshev = void 0;

var _codegen = require("./internal/codegen");

var _vop = require("./internal/vop");

const $ = dim => distChebyshev.add(dim, (0, _codegen.compile)(dim, ([a, b]) => `Math.abs(${a}-${b})`, "a,b", undefined, "", ",", "return Math.max(", ");"));

const distChebyshev = (0, _vop.vop)();
exports.distChebyshev = distChebyshev;
distChebyshev.default((a, b) => {
  let max = 0;

  for (let i = a.length; --i >= 0;) {
    max = Math.max(max, Math.abs(a[i] - b[i]));
  }

  return max;
});
const distChebyshev2 = $(2);
exports.distChebyshev2 = distChebyshev2;
const distChebyshev3 = $(3);
exports.distChebyshev3 = distChebyshev3;
const distChebyshev4 = $(4);
exports.distChebyshev4 = distChebyshev4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/dist-manhattan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distManhattan4 = exports.distManhattan3 = exports.distManhattan2 = exports.distManhattan = void 0;

var _codegen = require("./internal/codegen");

var _vop = require("./internal/vop");

const $ = dim => distManhattan.add(dim, (0, _codegen.compile)(dim, ([a, b]) => `Math.abs(${a}-${b})`, "a,b", undefined, "", "+", "return ", ";"));

const distManhattan = (0, _vop.vop)();
exports.distManhattan = distManhattan;
distManhattan.default((0, _codegen.compileG)(([a, b]) => `sum+=Math.abs(${a}-${b});`, "a,b", undefined, "sum", "let sum=0;"));
const distManhattan2 = $(2);
exports.distManhattan2 = distManhattan2;
const distManhattan3 = $(3);
exports.distManhattan3 = distManhattan3;
const distManhattan4 = $(4);
exports.distManhattan4 = distManhattan4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/div.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div4 = exports.div3 = exports.div2 = exports.div = void 0;

var _codegen = require("./internal/codegen");

const [div, div2, div3, div4] = (0, _codegen.defMathOp)("/");
exports.div4 = div4;
exports.div3 = div3;
exports.div2 = div2;
exports.div = div;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/divi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divNU4 = exports.divNU3 = exports.divNU2 = exports.divNU = exports.divNI4 = exports.divNI3 = exports.divNI2 = exports.divNI = exports.divU4 = exports.divU3 = exports.divU2 = exports.divU = exports.divI4 = exports.divI3 = exports.divI2 = exports.divI = void 0;

var _codegen = require("./internal/codegen");

const [divI, divI2, divI3, divI4] = (0, _codegen.defBitOp)("/", true);
exports.divI4 = divI4;
exports.divI3 = divI3;
exports.divI2 = divI2;
exports.divI = divI;
const [divU, divU2, divU3, divU4] = (0, _codegen.defBitOp)("/");
exports.divU4 = divU4;
exports.divU3 = divU3;
exports.divU2 = divU2;
exports.divU = divU;
const [divNI, divNI2, divNI3, divNI4] = (0, _codegen.defBitOpN)("/", true);
exports.divNI4 = divNI4;
exports.divNI3 = divNI3;
exports.divNI2 = divNI2;
exports.divNI = divNI;
const [divNU, divNU2, divNU3, divNU4] = (0, _codegen.defBitOpN)("/");
exports.divNU4 = divNU4;
exports.divNU3 = divNU3;
exports.divNU2 = divNU2;
exports.divNU = divNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/divn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divN4 = exports.divN3 = exports.divN2 = exports.divN = void 0;

var _codegen = require("./internal/codegen");

const [divN, divN2, divN3, divN4] = (0, _codegen.defMathOpN)("/");
exports.divN4 = divN4;
exports.divN3 = divN3;
exports.divN2 = divN2;
exports.divN = divN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/divs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divS4 = exports.divS3 = exports.divS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [divS2, divS3, divS4] = (0, _codegen.defOpS)((0, _templates.MATH)("/"));
exports.divS4 = divS4;
exports.divS3 = divS3;
exports.divS2 = divS2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/dotc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotC8 = exports.dotC6 = exports.dotC4 = void 0;

/**
 * Returns pairwise product sum of given components.
 *
 * @param a
 * @param b
 * @param c
 * @param d
 */
const dotC4 = (a, b, c, d) => a * b + c * d;
/**
 * Returns pairwise product sum of given components.
 *
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @param f
 */


exports.dotC4 = dotC4;

const dotC6 = (a, b, c, d, e, f) => a * b + c * d + e * f;
/**
 * Returns pairwise product sum of given components.
 *
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @param f
 * @param g
 * @param h
 */


exports.dotC6 = dotC6;

const dotC8 = (a, b, c, d, e, f, g, h) => a * b + c * d + e * f + g * h;

exports.dotC8 = dotC8;
},{}],"../../node_modules/@thi.ng/vectors/dots.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotS4 = exports.dotS3 = exports.dotS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const $ = dim => (0, _codegen.compile)(dim, _templates.DOT, `o,a,${_codegen.SARGS_V}`, "o,a", "", "+", "return ", ";", true);

const dotS2 = $(2);
exports.dotS2 = dotS2;
const dotS3 = $(3);
exports.dotS3 = dotS3;
const dotS4 = $(4);
exports.dotS4 = dotS4;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/setn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ones = exports.zeroes = exports.one = exports.zero = exports.setN4 = exports.setN3 = exports.setN2 = exports.setN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [setN, setN2, setN3, setN4] = (0, _codegen.defOp)(_templates.SET_N, "a,n", "a", "a", 0, "");
exports.setN4 = setN4;
exports.setN3 = setN3;
exports.setN2 = setN2;
exports.setN = setN;

const zero = a => setN(a, 0);

exports.zero = zero;

const one = a => setN(a, 1);

exports.one = one;

const zeroes = n => new Array(n).fill(0);

exports.zeroes = zeroes;

const ones = n => new Array(n).fill(1);

exports.ones = ones;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = void 0;

var _checks = require("@thi.ng/checks");

var _setn = require("./setn");

const empty = v => (0, _checks.implementsFunction)(v, "empty") ? v.empty() : (0, _setn.zeroes)(v.length);

exports.empty = empty;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./setn":"../../node_modules/@thi.ng/vectors/setn.js"}],"../../node_modules/@thi.ng/vectors/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every4 = exports.every3 = exports.every2 = exports.every = void 0;

var _vop = require("./internal/vop");

/**
 * Returns returns true if all vector components in `v` are truthy.
 *
 * @param v
 */
const every = (0, _vop.vop)();
exports.every = every;
every.default(v => {
  for (let i = v.length; --i >= 0;) {
    if (!v[i]) return false;
  }

  return true;
});
const every2 = every.add(2, a => a[0] && a[1]);
exports.every2 = every2;
const every3 = every.add(3, a => a[0] && a[1] && a[2]);
exports.every3 = every3;
const every4 = every.add(4, a => a[0] && a[1] && a[2] && a[3]);
exports.every4 = every4;
},{"./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/exp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exp4 = exports.exp3 = exports.exp2 = exports.exp = void 0;

var _codegen = require("./internal/codegen");

const [exp, exp2, exp3, exp4] = (0, _codegen.defFnOp)("Math.exp");
exports.exp4 = exp4;
exports.exp3 = exp3;
exports.exp2 = exp2;
exports.exp = exp;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/exp_2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exp_24 = exports.exp_23 = exports.exp_22 = exports.exp_2 = void 0;

var _codegen = require("./internal/codegen");

/**
 * Componentwise 2^x
 */
const [exp_2, exp_22, exp_23, exp_24] = (0, _codegen.defOp)(([o, a]) => `${o}=Math.pow(2,${a});`, _codegen.ARGS_V);
exports.exp_24 = exp_24;
exports.exp_23 = exp_23;
exports.exp_22 = exp_22;
exports.exp_2 = exp_2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/face-forward.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.faceForward = void 0;

var _dot = require("./dot");

var _muln = require("./muln");

var _set = require("./set");

const faceForward = (out, n, i, nref) => {
  !out && (out = n);
  return (0, _dot.dot)(nref, i) < 0 ? out !== n ? (0, _set.set)(out, n) : out : (0, _muln.mulN)(out, n, -1);
};

exports.faceForward = faceForward;
},{"./dot":"../../node_modules/@thi.ng/vectors/dot.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js","./set":"../../node_modules/@thi.ng/vectors/set.js"}],"../../node_modules/@thi.ng/vectors/fit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fit11_4 = exports.fit11_3 = exports.fit11_2 = exports.fit11 = exports.fit01_4 = exports.fit01_3 = exports.fit01_2 = exports.fit01 = exports.fit4 = exports.fit3 = exports.fit2 = exports.fit = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [fit, fit2, fit3, fit4] = (0, _codegen.defHofOp)(_math.fit, (0, _templates.FN5)(), "o,a,b,c,d,e");
exports.fit4 = fit4;
exports.fit3 = fit3;
exports.fit2 = fit2;
exports.fit = fit;
const [fit01, fit01_2, fit01_3, fit01_4] = (0, _codegen.defHofOp)(_math.fit01, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.fit01_4 = fit01_4;
exports.fit01_3 = fit01_3;
exports.fit01_2 = fit01_2;
exports.fit01 = fit01;
const [fit11, fit11_2, fit11_3, fit11_4] = (0, _codegen.defHofOp)(_math.fit11, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.fit11_4 = fit11_4;
exports.fit11_3 = fit11_3;
exports.fit11_2 = fit11_2;
exports.fit11 = fit11;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/floor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floor4 = exports.floor3 = exports.floor2 = exports.floor = void 0;

var _codegen = require("./internal/codegen");

const [floor, floor2, floor3, floor4] = (0, _codegen.defFnOp)("Math.floor");
exports.floor4 = floor4;
exports.floor3 = floor3;
exports.floor2 = floor2;
exports.floor = floor;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/fmod.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fmod4 = exports.fmod3 = exports.fmod2 = exports.fmod = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * This version of mod uses the same logic as in GLSL, whereas `mod`
 * merely uses JavaScript's `%` modulo operator, yielding different
 * results for negative values.
 *
 * `a - b * floor(a/b)`
 *
 */
const [fmod, fmod2, fmod3, fmod4] = (0, _codegen.defHofOp)(_math.fmod, (0, _templates.FN2)("op"), _codegen.ARGS_VV);
exports.fmod4 = fmod4;
exports.fmod3 = fmod3;
exports.fmod2 = fmod2;
exports.fmod = fmod;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/fmodn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fmodN4 = exports.fmodN3 = exports.fmodN2 = exports.fmodN = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Same as `fmod`, but 2nd operand is a single scalar (uniform domain
 * for all vector components).
 */
const [fmodN, fmodN2, fmodN3, fmodN4] = (0, _codegen.defHofOp)(_math.fmod, (0, _templates.FN_N)("op"), _codegen.ARGS_VN, _codegen.ARGS_V);
exports.fmodN4 = fmodN4;
exports.fmodN3 = fmodN3;
exports.fmodN2 = fmodN2;
exports.fmodN = fmodN;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/fract.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fract4 = exports.fract3 = exports.fract2 = exports.fract = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

const [fract, fract2, fract3, fract4] = (0, _codegen.defHofOp)(_math.fract);
exports.fract4 = fract4;
exports.fract3 = fract3;
exports.fract2 = fract2;
exports.fract = fract;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/gvec.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gvec = void 0;

var _math = require("@thi.ng/math");

var _memoize = require("@thi.ng/memoize");

var _transducers = require("@thi.ng/transducers");

var _eqdelta = require("./eqdelta");

var _vecUtils = require("./internal/vec-utils");

var _setn = require("./setn");

var _sets = require("./sets");

const SYM_B = "buf";
const SYM_L = "length";
const SYM_O = "offset";
const SYM_S = "stride";
const SYM_C = "copy";
const SYM_CV = "copyView";
const SYM_EMPTY = "empty";
const SYM_EQD = "eqDelta";
const SYM_STR = "toString";
const PROPS = new Set([SYM_B, SYM_C, SYM_CV, SYM_EMPTY, SYM_EQD, SYM_L, SYM_O, SYM_S, SYM_STR, Symbol.iterator]);
const keys = (0, _memoize.memoize1)(size => [...(0, _transducers.map)(String, (0, _transducers.range)(size)), ...PROPS]);
/**
 * Wrapper for strided, arbitrary length vectors. Wraps given buffer in
 * ES6 `Proxy` with custom property getters/setters and implements the
 * following interfaces:
 *
 * - `Iterable` (ES6)
 * - `ICopy`
 * - `IEmpty`
 * - `IEqualsDelta`
 * - `IVector`
 * - `Object.toString()`
 *
 * Read/write access for the following properties:
 *
 * - array indices in the [0 .. `size`) interval
 * - `offset` - start index
 * - `stride` - component stride
 * - `buf` - backing buffer (readonly)
 * - `length` - vector size
 *
 * Array index access uses bounds checking against the [0 .. `size`)
 * interval, but, for performance reasons, **not** against the actual
 * wrapped buffer.
 *
 * Note: ES6 proxies are ~10x slower than standard array accesses. If
 * several computations are to be performed on such vectors it will be
 * much more efficient to first copy them to compact arrays and then
 * copy result back if needed.
 *
 * ```
 * // 3D vector w/ stride length of 4
 * a = gvec([1,0,0,0,2,0,0,0,3,0,0,0], 3, 0, 4);
 * a[0] // 1
 * a[1] // 2
 * a[2] // 3
 *
 * a.stride
 * // 4
 *
 * [...a]
 * // [1, 2, 3]
 *
 * a.toString()
 * // "[1,2,3]"
 *
 * add([], a, a)
 * // [2, 4, 6]
 *
 * copy(a)
 * // [1, 2, 3]
 *
 * a.copyView()
 * // Proxy [ [ 1, 0, 2, 0, 3, 0 ], ... }
 *
 * eqDelta(a, [1, 2, 3])
 * // true
 * ```
 *
 * @param buf
 * @param size
 * @param offset
 * @param stride
 */

const gvec = (buf, size, offset = 0, stride = 1) => new Proxy(buf, {
  get(obj, id) {
    switch (id) {
      case Symbol.iterator:
        return () => (0, _vecUtils.values)(obj, size, offset, stride);

      case SYM_L:
        return size;

      case SYM_B:
        return buf;

      case SYM_O:
        return offset;

      case SYM_S:
        return stride;

      case SYM_C:
        return () => (0, _sets.setS)([], obj, size, 0, offset, 1, stride);

      case SYM_CV:
        return () => gvec(obj, size, offset, stride);

      case SYM_EMPTY:
        return () => (0, _setn.zeroes)(size);

      case SYM_EQD:
        return (o, eps = _math.EPS) => (0, _eqdelta.eqDeltaS)(buf, o, size, eps, offset, 0, stride, 1);

      case SYM_STR:
        return () => JSON.stringify([...(0, _vecUtils.values)(obj, size, offset, stride)]);

      default:
        const j = parseInt(id);
        return !isNaN(j) && j >= 0 && j < size ? obj[offset + j * stride] : undefined;
    }
  },

  set(obj, id, value) {
    const j = parseInt(id);

    if (!isNaN(j) && j >= 0 && j < size) {
      obj[offset + (id | 0) * stride] = value;
    } else {
      switch (id) {
        case SYM_O:
          offset = value;
          break;

        case SYM_S:
          stride = value;
          break;

        case SYM_L:
          size = value;
          break;

        default:
          return false;
      }
    }

    return true;
  },

  has(_, id) {
    return id >= 0 && id < size || PROPS.has(id);
  },

  ownKeys() {
    return keys(size);
  }

});

exports.gvec = gvec;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/memoize":"../../node_modules/@thi.ng/memoize/index.js","@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","./eqdelta":"../../node_modules/@thi.ng/vectors/eqdelta.js","./internal/vec-utils":"../../node_modules/@thi.ng/vectors/internal/vec-utils.js","./setn":"../../node_modules/@thi.ng/vectors/setn.js","./sets":"../../node_modules/@thi.ng/vectors/sets.js"}],"../../node_modules/@thi.ng/vectors/heading-segment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headingSegment = exports.headingSegmentYZ = exports.headingSegmentXZ = exports.headingSegmentXY = void 0;

var _math = require("@thi.ng/math");

/**
 * Computes direction angle (in radians) of line segment `a` -> `b` in
 * XY plane.
 *
 * @param a
 * @param b
 */
const headingSegmentXY = (a, b) => (0, _math.atan2Abs)(b[1] - a[1], b[0] - a[0]);
/**
 * Computes direction angle (in radians) of line segment `a` -> `b` in
 * XZ plane.
 *
 * @param a
 * @param b
 */


exports.headingSegmentXY = headingSegmentXY;

const headingSegmentXZ = (a, b) => (0, _math.atan2Abs)(b[2] - a[2], b[0] - a[0]);
/**
 * Computes direction angle (in radians) of line segment `a` -> `b` in
 * ZY plane.
 *
 * @param a
 * @param b
 */


exports.headingSegmentXZ = headingSegmentXZ;

const headingSegmentYZ = (a, b) => (0, _math.atan2Abs)(b[2] - a[2], b[1] - a[1]);
/**
 * Same as `headingSegmentXY`.
 */


exports.headingSegmentYZ = headingSegmentYZ;
const headingSegment = headingSegmentXY;
exports.headingSegment = headingSegment;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js"}],"../../node_modules/@thi.ng/vectors/homogeneous.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromHomogeneous4 = exports.fromHomogeneous3 = exports.fromHomogeneous = void 0;

var _vop = require("./internal/vop");

var _setc = require("./setc");

const fromHomogeneous = (0, _vop.vop)(1);
exports.fromHomogeneous = fromHomogeneous;
const fromHomogeneous3 = fromHomogeneous.add(3, (out, [x, y, w]) => (0, _setc.setC2)(out || [], x / w, y / w));
exports.fromHomogeneous3 = fromHomogeneous3;
const fromHomogeneous4 = fromHomogeneous.add(4, (out, [x, y, z, w]) => (0, _setc.setC3)(out || [], x / w, y / w, z / w));
exports.fromHomogeneous4 = fromHomogeneous4;
},{"./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js","./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/invert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert4 = exports.invert3 = exports.invert2 = exports.invert = void 0;

var _codegen = require("./internal/codegen");

const [invert, invert2, invert3, invert4] = (0, _codegen.defOp)(([o, a]) => `${o}=1/${a};`);
exports.invert4 = invert4;
exports.invert3 = invert3;
exports.invert2 = invert2;
exports.invert = invert;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/invsqrt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invSqrt4 = exports.invSqrt3 = exports.invSqrt2 = exports.invSqrt = void 0;

var _codegen = require("./internal/codegen");

const [invSqrt, invSqrt2, invSqrt3, invSqrt4] = (0, _codegen.defOp)(([o, a]) => `${o}=1/Math.sqrt(${a});`);
exports.invSqrt4 = invSqrt4;
exports.invSqrt3 = invSqrt3;
exports.invSqrt2 = invSqrt2;
exports.invSqrt = invSqrt;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/is-inf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInf4 = exports.isInf3 = exports.isInf2 = exports.isInf = void 0;

var _codegen = require("./internal/codegen");

const [isInf, isInf2, isInf3, isInf4] = (0, _codegen.defFnOp)("!isFinite");
exports.isInf4 = isInf4;
exports.isInf3 = isInf3;
exports.isInf2 = isInf2;
exports.isInf = isInf;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/is-nan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN4 = exports.isNaN3 = exports.isNaN2 = exports.isNaN = void 0;

var _codegen = require("./internal/codegen");

const [isNaN, isNaN2, isNaN3, isNaN4] = (0, _codegen.defFnOp)("isNaN");
exports.isNaN4 = isNaN4;
exports.isNaN3 = isNaN3;
exports.isNaN2 = isNaN2;
exports.isNaN = isNaN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randMinMax4 = exports.randMinMax3 = exports.randMinMax2 = exports.randMinMax = exports.randNorm = exports.random4 = exports.random3 = exports.random2 = exports.random = void 0;

var _random = require("@thi.ng/random");

var _codegen = require("./internal/codegen");

var _normalize = require("./normalize");

/**
 * Sets `v` to random vector, with each component in interval `[n..m)`.
 * If no `rnd` instance is given, uses `SYSTEM`, i.e. `Math.random`.
 *
 * @param v
 * @param n default -1
 * @param m default 1
 * @param rnd
 */
const [random, random2, random3, random4] = (0, _codegen.defHofOp)(_random.SYSTEM, ([a]) => `${a}=rnd.minmax(n,m);`, "a,n=-1,m=1,rnd=op", "a", "a", 0, "");
/**
 * Sets `v` to random vector, normalized to length `n` (default: 1). If no
 * `rnd` instance is given, uses `SYSTEM`, i.e. `Math.random`.
 *
 * @param v
 * @param n
 * @param rnd
 */

exports.random4 = random4;
exports.random3 = random3;
exports.random2 = random2;
exports.random = random;

const randNorm = (v, n = 1, rnd = _random.SYSTEM) => {
  v = random(v, -1, 1, rnd);
  return (0, _normalize.normalize)(v, v, n);
};
/**
 * Sets `out` to random vector with each component in the semi-open
 * interval defined by [min,max).
 *
 * @param out
 * @param min
 * @param max
 * @param rnd
 */


exports.randNorm = randNorm;
const [randMinMax, randMinMax2, randMinMax3, randMinMax4] = (0, _codegen.defHofOp)(_random.SYSTEM, ([o, a, b]) => `${o}=rnd.minmax(${a},${b});`, "o,a,b,rnd=op", "o,a,b");
exports.randMinMax4 = randMinMax4;
exports.randMinMax3 = randMinMax3;
exports.randMinMax2 = randMinMax2;
exports.randMinMax = randMinMax;
},{"@thi.ng/random":"../../node_modules/@thi.ng/random/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./normalize":"../../node_modules/@thi.ng/vectors/normalize.js"}],"../../node_modules/@thi.ng/vectors/jitter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jitter = void 0;

var _random = require("@thi.ng/random");

var _add = require("./add");

var _random2 = require("./random");

const jitter = (out, a, n = 1, rnd = _random.SYSTEM) => (0, _add.add)(out, a, (0, _random2.randNorm)(new Array(a.length), n, rnd));

exports.jitter = jitter;
},{"@thi.ng/random":"../../node_modules/@thi.ng/random/index.js","./add":"../../node_modules/@thi.ng/vectors/add.js","./random":"../../node_modules/@thi.ng/vectors/random.js"}],"../../node_modules/@thi.ng/vectors/limit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.limit = void 0;

var _mag = require("./mag");

var _muln = require("./muln");

var _set = require("./set");

const limit = (out, v, n) => {
  !out && (out = v);
  const m = (0, _mag.mag)(v);
  return m > n ? (0, _muln.mulN)(out, v, n / m) : out !== v ? (0, _set.set)(out, v) : out;
};

exports.limit = limit;
},{"./mag":"../../node_modules/@thi.ng/vectors/mag.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js","./set":"../../node_modules/@thi.ng/vectors/set.js"}],"../../node_modules/@thi.ng/vectors/log.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log4 = exports.log3 = exports.log2 = exports.log = void 0;

var _codegen = require("./internal/codegen");

const [log, log2, log3, log4] = (0, _codegen.defFnOp)("Math.log");
exports.log4 = log4;
exports.log3 = log3;
exports.log2 = log2;
exports.log = log;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/log_2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log_24 = exports.log_23 = exports.log_22 = exports.log_2 = void 0;

var _codegen = require("./internal/codegen");

/**
 * Componentwise Math.log2
 */
const [log_2, log_22, log_23, log_24] = (0, _codegen.defFnOp)("Math.log2");
exports.log_24 = log_24;
exports.log_23 = log_23;
exports.log_22 = log_22;
exports.log_2 = log_2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/logic-and.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logicAndN4 = exports.logicAndN3 = exports.logicAndN2 = exports.logicAndN = exports.logicAnd4 = exports.logicAnd3 = exports.logicAnd2 = exports.logicAnd = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [logicAnd, logicAnd2, logicAnd3, logicAnd4] = (0, _codegen.defOp)((0, _templates.MATH)("&&"));
exports.logicAnd4 = logicAnd4;
exports.logicAnd3 = logicAnd3;
exports.logicAnd2 = logicAnd2;
exports.logicAnd = logicAnd;
const [logicAndN, logicAndN2, logicAndN3, logicAndN4] = (0, _codegen.defOp)((0, _templates.MATH_N)("&&"), _codegen.ARGS_VN);
exports.logicAndN4 = logicAndN4;
exports.logicAndN3 = logicAndN3;
exports.logicAndN2 = logicAndN2;
exports.logicAndN = logicAndN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/logic-not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logicNot4 = exports.logicNot3 = exports.logicNot2 = exports.logicNot = void 0;

var _codegen = require("./internal/codegen");

const [logicNot, logicNot2, logicNot3, logicNot4] = (0, _codegen.defFnOp)("!");
exports.logicNot4 = logicNot4;
exports.logicNot3 = logicNot3;
exports.logicNot2 = logicNot2;
exports.logicNot = logicNot;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/logic-or.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logicOrN4 = exports.logicOrN3 = exports.logicOrN2 = exports.logicOrN = exports.logicOr4 = exports.logicOr3 = exports.logicOr2 = exports.logicOr = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [logicOr, logicOr2, logicOr3, logicOr4] = (0, _codegen.defOp)((0, _templates.MATH)("||"));
exports.logicOr4 = logicOr4;
exports.logicOr3 = logicOr3;
exports.logicOr2 = logicOr2;
exports.logicOr = logicOr;
const [logicOrN, logicOrN2, logicOrN3, logicOrN4] = (0, _codegen.defOp)((0, _templates.MATH_N)("||"), _codegen.ARGS_VN);
exports.logicOrN4 = logicOrN4;
exports.logicOrN3 = logicOrN3;
exports.logicOrN2 = logicOrN2;
exports.logicOrN = logicOrN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/lshift.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lshiftNU4 = exports.lshiftNU3 = exports.lshiftNU2 = exports.lshiftNU = exports.lshiftNI4 = exports.lshiftNI3 = exports.lshiftNI2 = exports.lshiftNI = exports.lshiftU4 = exports.lshiftU3 = exports.lshiftU2 = exports.lshiftU = exports.lshiftI4 = exports.lshiftI3 = exports.lshiftI2 = exports.lshiftI = void 0;

var _codegen = require("./internal/codegen");

const [lshiftI, lshiftI2, lshiftI3, lshiftI4] = (0, _codegen.defBitOp)("<<", true);
exports.lshiftI4 = lshiftI4;
exports.lshiftI3 = lshiftI3;
exports.lshiftI2 = lshiftI2;
exports.lshiftI = lshiftI;
const [lshiftU, lshiftU2, lshiftU3, lshiftU4] = (0, _codegen.defBitOp)("<<"); // prettier-ignore

exports.lshiftU4 = lshiftU4;
exports.lshiftU3 = lshiftU3;
exports.lshiftU2 = lshiftU2;
exports.lshiftU = lshiftU;
const [lshiftNI, lshiftNI2, lshiftNI3, lshiftNI4] = (0, _codegen.defBitOpN)("<<", true);
exports.lshiftNI4 = lshiftNI4;
exports.lshiftNI3 = lshiftNI3;
exports.lshiftNI2 = lshiftNI2;
exports.lshiftNI = lshiftNI;
const [lshiftNU, lshiftNU2, lshiftNU3, lshiftNU4] = (0, _codegen.defBitOpN)("<<");
exports.lshiftNU4 = lshiftNU4;
exports.lshiftNU3 = lshiftNU3;
exports.lshiftNU2 = lshiftNU2;
exports.lshiftNU = lshiftNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/madd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.madd4 = exports.madd3 = exports.madd2 = exports.madd = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = a * b + c`.
 *
 * @see addm
 * @see maddN
 *
 * @param out
 * @param a
 * @param b
 * @param c
 */
const [madd, madd2, madd3, madd4] = (0, _codegen.defOp)(_templates.MADD, _codegen.ARGS_VVV);
exports.madd4 = madd4;
exports.madd3 = madd3;
exports.madd2 = madd2;
exports.madd = madd;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/major.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.major4 = exports.major3 = exports.major2 = exports.major = void 0;

var _math = require("@thi.ng/math");

var _vop = require("./internal/vop");

const abs = Math.abs;
/**
 * Returns index of major component/axis in `v`, i.e. where `|v[i]|` is
 * the largest.
 *
 * @param v
 */

const major = (0, _vop.vop)();
exports.major = major;
major.default(a => {
  let id = -1;
  let max = -Infinity;

  for (let i = a.length; --i >= 0;) {
    const x = abs(a[i]);

    if (x > max) {
      max = x;
      id = i;
    }
  }

  return id;
});
const major2 = major.add(2, a => (0, _math.max2id)(abs(a[0]), abs(a[1])));
exports.major2 = major2;
const major3 = major.add(3, a => (0, _math.max3id)(abs(a[0]), abs(a[1]), abs(a[2])));
exports.major3 = major3;
const major4 = major.add(4, a => (0, _math.max4id)(abs(a[0]), abs(a[1]), abs(a[2]), abs(a[3])));
exports.major4 = major4;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapVVN = exports.mapVVV = exports.mapVN = exports.mapV = exports.mapVV = void 0;

/**
 * Vec2/3/4 view based buffer transformation for `VecOpVV` type ops and
 * supporting arbitrary component and element layouts of all input and
 * output buffers. The given pre-initialized vectors MUST be separate
 * instances, are used as sliding cursors / views of their respective
 * backing buffers and will be modified as part of the transformation
 * process (though the input buffers themselves are treated as
 * immutable, unless `out` is configured to use one of the input
 * buffers).
 *
 * In each iteration `op` is called via `op(out, a, b)`, followed by
 * cursor updates to process the next vector view. No bounds checking is
 * performed.
 *
 * This function returns `out`'s backing buffer.
 *
 * ```
 * // each input buffer contains 2 2D vectors, but using
 * // different strided data layouts
 * mapVV(
 *   // transformation function
 *   add,
 *   // init output buffer view
 *   new Vec2(),
 *   // wrap 1st input buffer & configure offset & component stride
 *   new Vec2([1,0,2,0,0,0,0,0,3,0,4,0,0,0,0,0], 0, 2),
 *   // wrap 2nd input buffer
 *   new Vec2([0,10,0,0,20,0,0,30,0,0,40], 1, 3),
 *   2, // num vectors
 *   2, // output element stride
 *   8, // input #1 element stride
 *   6  // input #2 element stride
 * );
 * // [ 11, 22, 33, 44 ]
 * ```
 *
 * Alternatively, `Vec2/3/4.iterator()` combined with transducers can be
 * used to achieve the same (and more flexible) transformations, but
 * will incur more intermediate object allocations. `mapV*()`
 * functions only use (and mutate) the provided vector instances and do
 * not allocate any further objects.
 *
 * ```
 * // output buffer
 * const out = new Array(4);
 *
 * tx.run(
 *   tx.map(([o, a, b]) => add(o, a, b)),
 *   tx.zip(
 *      Vec2.iterator(out, 2),
 *      Vec2.iterator([1,0,2,0,0,0,0,0,3,0,4,0,0,0,0,0], 2, 0, 2, 8),
 *      Vec2.iterator([0,10,0,0,20,0,0,30,0,0,40], 2, 1, 3, 6),
 *   )
 * );
 *
 * out
 * // [ 11, 22, 33, 44 ]
 * ```
 *
 * @param op
 * @param out
 * @param a
 * @param b
 * @param num
 * @param so
 * @param sa
 * @param sb
 */
const mapVV = (op, out, a, b, num, so = out.length * out.stride, sa = a.length * a.stride, sb = b.length * b.stride) => {
  while (num-- > 0) {
    op(out, a, b);
    out.offset += so;
    a.offset += sa;
    b.offset += sb;
  }

  return out.buf;
};
/**
 * Like `mapVV`, but for `VecOpV` type ops and hence only using
 * single input.
 *
 * ```
 * // 4x 2D vectors in SOA layout
 * // i.e. [x1, x2, x3, x4, y1, y2, y3, y4]
 * buf = [1, 3, 5, 7, 2, 4, 6, 8];
 *
 * // use `swapXY` to swizzle each vector and use AOS for output
 * res = mapV(swapXY, new Vec2(), new Vec2(buf, 0, 4), 4, 2, 1);
 * // [ 2, 1, 4, 3, 6, 5, 8, 7 ]
 *
 * // unpack result for demonstration purposes
 * [...Vec2.iterator(res, 4)].map(v => [...v]);
 * // [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ], [ 8, 7 ] ]
 * ```
 *
 * @param op
 * @param out
 * @param a
 * @param num
 * @param so
 * @param sa
 */


exports.mapVV = mapVV;

const mapV = (op, out, a, num, so = out.length * out.stride, sa = a.length * a.stride) => {
  while (num-- > 0) {
    op(out, a);
    out.offset += so;
    a.offset += sa;
  }

  return out.buf;
};
/**
 * Like `mapVV`, but for `VecOpVN` type ops and hence using a single
 * vector input buffer `a` and a scalar `n`.
 *
 * @param op
 * @param out
 * @param a
 * @param n
 * @param num
 * @param so
 * @param sa
 */


exports.mapV = mapV;

const mapVN = (op, out, a, n, num, so = out.length * out.stride, sa = a.length * a.stride) => {
  while (num-- > 0) {
    op(out, a, n);
    out.offset += so;
    a.offset += sa;
  }

  return out.buf;
};
/**
 * Like `mapVV`, but for `VecOpVVV` type ops and hence using three
 * vector input buffers `a`, `b`, `c`.
 *
 * @param op
 * @param out
 * @param a
 * @param b
 * @param c
 * @param num
 * @param so
 * @param sa
 * @param sb
 * @param sc
 */


exports.mapVN = mapVN;

const mapVVV = (op, out, a, b, c, num, so = out.length * out.stride, sa = a.length * a.stride, sb = b.length * b.stride, sc = c.length * c.stride) => {
  while (num-- > 0) {
    op(out, a, b, c);
    out.offset += so;
    a.offset += sa;
    b.offset += sb;
    c.offset += sc;
  }

  return out.buf;
};
/**
 * Like `mapVV`, but for `VecOpVVN` type ops and hence using two
 * vector input buffers `a`, `b` and a scalar `n`.
 *
 * @param op
 * @param out
 * @param a
 * @param b
 * @param n
 * @param num
 * @param so
 * @param sa
 * @param sb
 */


exports.mapVVV = mapVVV;

const mapVVN = (op, out, a, b, n, num, so = out.length * out.stride, sa = a.length * a.stride, sb = b.length * b.stride) => {
  while (num-- > 0) {
    op(out, a, b, n);
    out.offset += so;
    a.offset += sa;
    b.offset += sb;
  }

  return out.buf;
};

exports.mapVVN = mapVVN;
},{}],"../../node_modules/@thi.ng/vectors/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max4 = exports.max3 = exports.max2 = exports.max = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [max, max2, max3, max4] = (0, _codegen.defOp)((0, _templates.FN2)("Math.max"));
exports.max4 = max4;
exports.max3 = max3;
exports.max2 = max2;
exports.max = max;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min4 = exports.min3 = exports.min2 = exports.min = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [min, min2, min3, min4] = (0, _codegen.defOp)((0, _templates.FN2)("Math.min"));
exports.min4 = min4;
exports.min3 = min3;
exports.min2 = min2;
exports.min = min;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/minor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minor4 = exports.minor3 = exports.minor2 = exports.minor = void 0;

var _math = require("@thi.ng/math");

var _vop = require("./internal/vop");

const abs = Math.abs;
/**
 * Returns index of minor component/axis in `v`, i.e. where `|v[i]|` is
 * the smallest.
 *
 * @param v
 */

const minor = (0, _vop.vop)();
exports.minor = minor;
minor.default(a => {
  let id = -1;
  let min = Infinity;

  for (let i = a.length; --i >= 0;) {
    const x = abs(a[i]);

    if (x < min) {
      min = x;
      id = i;
    }
  }

  return id;
});
const minor2 = minor.add(2, a => (0, _math.min2id)(abs(a[0]), abs(a[1])));
exports.minor2 = minor2;
const minor3 = minor.add(3, a => (0, _math.min3id)(abs(a[0]), abs(a[1]), abs(a[2])));
exports.minor3 = minor3;
const minor4 = minor.add(4, a => (0, _math.min4id)(abs(a[0]), abs(a[1]), abs(a[2]), abs(a[3])));
exports.minor4 = minor4;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/mix-bilinear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixBilinear4 = exports.mixBilinear3 = exports.mixBilinear2 = exports.mixBilinear = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

const [mixBilinear, mixBilinear2, mixBilinear3, mixBilinear4] = (0, _codegen.defHofOp)(_math.mixBilinear, ([o, a, b, c, d]) => `${o}=op(${a},${b},${c},${d},u,v);`, "o,a,b,c,d,u,v");
exports.mixBilinear4 = mixBilinear4;
exports.mixBilinear3 = mixBilinear3;
exports.mixBilinear2 = mixBilinear2;
exports.mixBilinear = mixBilinear;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/mix-cubic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixCubic = void 0;

var _addw = require("./addw");

const mixCubic = (out, a, b, c, d, t) => {
  const s = 1 - t;
  const s2 = s * s;
  const t2 = t * t;
  return (0, _addw.addW4)(out, a, b, c, d, s2 * s, 3 * s2 * t, 3 * t2 * s, t2 * t);
};

exports.mixCubic = mixCubic;
},{"./addw":"../../node_modules/@thi.ng/vectors/addw.js"}],"../../node_modules/@thi.ng/vectors/mix-quadratic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixQuadratic = void 0;

var _addw = require("./addw");

const mixQuadratic = (out, a, b, c, t) => {
  const s = 1 - t;
  return (0, _addw.addW3)(out, a, b, c, s * s, 2 * s * t, t * t);
};

exports.mixQuadratic = mixQuadratic;
},{"./addw":"../../node_modules/@thi.ng/vectors/addw.js"}],"../../node_modules/@thi.ng/vectors/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mix4 = exports.mix3 = exports.mix2 = exports.mix = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [mix, mix2, mix3, mix4] = (0, _codegen.defOp)(_templates.MIX, _codegen.ARGS_VVV);
exports.mix4 = mix4;
exports.mix3 = mix3;
exports.mix2 = mix2;
exports.mix = mix;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/mixn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixN4 = exports.mixN3 = exports.mixN2 = exports.mixN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [mixN, mixN2, mixN3, mixN4] = (0, _codegen.defOp)(_templates.MIX_N, _codegen.ARGS_VVN);
exports.mixN4 = mixN4;
exports.mixN3 = mixN3;
exports.mixN2 = mixN2;
exports.mixN = mixN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/mod.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mod4 = exports.mod3 = exports.mod2 = exports.mod = void 0;

var _codegen = require("./internal/codegen");

const [mod, mod2, mod3, mod4] = (0, _codegen.defMathOp)("%");
exports.mod4 = mod4;
exports.mod3 = mod3;
exports.mod2 = mod2;
exports.mod = mod;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/modn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modN4 = exports.modN3 = exports.modN2 = exports.modN = void 0;

var _codegen = require("./internal/codegen");

const [modN, modN2, modN3, modN4] = (0, _codegen.defMathOpN)("%");
exports.modN4 = modN4;
exports.modN3 = modN3;
exports.modN2 = modN2;
exports.modN = modN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/mul.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul4 = exports.mul3 = exports.mul2 = exports.mul = void 0;

var _codegen = require("./internal/codegen");

const [mul, mul2, mul3, mul4] = (0, _codegen.defMathOp)("*");
exports.mul4 = mul4;
exports.mul3 = mul3;
exports.mul2 = mul2;
exports.mul = mul;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/muli.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mulNU4 = exports.mulNU3 = exports.mulNU2 = exports.mulNU = exports.mulNI4 = exports.mulNI3 = exports.mulNI2 = exports.mulNI = exports.mulU4 = exports.mulU3 = exports.mulU2 = exports.mulU = exports.mulI4 = exports.mulI3 = exports.mulI2 = exports.mulI = void 0;

var _codegen = require("./internal/codegen");

const [mulI, mulI2, mulI3, mulI4] = (0, _codegen.defBitOp)("*", true);
exports.mulI4 = mulI4;
exports.mulI3 = mulI3;
exports.mulI2 = mulI2;
exports.mulI = mulI;
const [mulU, mulU2, mulU3, mulU4] = (0, _codegen.defBitOp)("*");
exports.mulU4 = mulU4;
exports.mulU3 = mulU3;
exports.mulU2 = mulU2;
exports.mulU = mulU;
const [mulNI, mulNI2, mulNI3, mulNI4] = (0, _codegen.defBitOpN)("*", true);
exports.mulNI4 = mulNI4;
exports.mulNI3 = mulNI3;
exports.mulNI2 = mulNI2;
exports.mulNI = mulNI;
const [mulNU, mulNU2, mulNU3, mulNU4] = (0, _codegen.defBitOpN)("*");
exports.mulNU4 = mulNU4;
exports.mulNU3 = mulNU3;
exports.mulNU2 = mulNU2;
exports.mulNU = mulNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/muls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mulS4 = exports.mulS3 = exports.mulS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [mulS2, mulS3, mulS4] = (0, _codegen.defOpS)((0, _templates.MATH)("*"));
exports.mulS4 = mulS4;
exports.mulS3 = mulS3;
exports.mulS2 = mulS2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/neg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.neg = void 0;

var _muln = require("./muln");

const neg = (out, v) => (0, _muln.mulN)(out, v, -1);

exports.neg = neg;
},{"./muln":"../../node_modules/@thi.ng/vectors/muln.js"}],"../../node_modules/@thi.ng/vectors/perpendicular.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perpendicularCW = exports.perpendicularCCW = void 0;

var _setc = require("./setc");

/**
 * 2D only. Produces a perpendicular vector to `v`, i.e. `[-y,x]`.
 * Assumes positive Y-up.
 *
 * @param out
 * @param v
 */
const perpendicularCCW = (out, a) => (0, _setc.setC2)(out || a, -a[1], a[0]);
/**
 * 2D only. Produces a clockwise perpendicular vector to `v`, i.e.
 * `[y,-x]`. Assumes positive Y-up.
 *
 * @param out
 * @param v
 */


exports.perpendicularCCW = perpendicularCCW;

const perpendicularCW = (out, a) => (0, _setc.setC2)(out || a, a[1], -a[0]);

exports.perpendicularCW = perpendicularCW;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/normal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalCW = exports.normalCCW = void 0;

var _direction = require("./direction");

var _perpendicular = require("./perpendicular");

/**
 * Computes 2D normal by rotating direction vector `a` -> `b`, 90 deg
 * counterclockwise, normalized to length `n` (default: 1). If `out` is
 * null, creates new vector.
 *
 * @param out
 * @param a
 * @param b
 * @param n
 */
const normalCCW = (out, a, b, n = 1) => (0, _perpendicular.perpendicularCCW)(null, (0, _direction.direction)(out || [], a, b, n));
/**
 * Computes 2D normal by rotating direction vector `a` -> `b`, 90 deg
 * clockwise, normalized to length `n` (default: 1). If `out` is null,
 * creates new vector.
 *
 * @param out
 * @param a
 * @param b
 * @param n
 */


exports.normalCCW = normalCCW;

const normalCW = (out, a, b, n = 1) => (0, _perpendicular.perpendicularCW)(null, (0, _direction.direction)(out || [], a, b, n));

exports.normalCW = normalCW;
},{"./direction":"../../node_modules/@thi.ng/vectors/direction.js","./perpendicular":"../../node_modules/@thi.ng/vectors/perpendicular.js"}],"../../node_modules/@thi.ng/vectors/ortho-normal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orthoNormal3 = void 0;

var _cross = require("./cross");

var _normalize = require("./normalize");

var _sub = require("./sub");

/**
 * Produces a vector which is perpendicular/normal to the plane spanned
 * by given 3 input vectors. If `normalize` is true (default), the
 * result vector will be normalized.
 *
 * ```
 * orthoNormal3([], [0, 0, 0], [1, 0, 0], [0, 1, 0])
 * // [0, 0, 1]
 * ```
 *
 * @param out
 * @param a
 * @param b
 * @param c
 * @param normalize
 */
const orthoNormal3 = (out, a, b, c, doNormalize = true) => {
  out = (0, _cross.cross3)(null, (0, _sub.sub3)(out || a, b, a), (0, _sub.sub3)([], c, a));
  return doNormalize ? (0, _normalize.normalize)(out, out) : out;
};

exports.orthoNormal3 = orthoNormal3;
},{"./cross":"../../node_modules/@thi.ng/vectors/cross.js","./normalize":"../../node_modules/@thi.ng/vectors/normalize.js","./sub":"../../node_modules/@thi.ng/vectors/sub.js"}],"../../node_modules/@thi.ng/vectors/polar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polar3 = exports.polar2 = exports.polar = void 0;

var _vop = require("./internal/vop");

var _mag = require("./mag");

var _setc = require("./setc");

const sqrt = Math.sqrt;
const asin = Math.asin;
const atan2 = Math.atan2;
/**
 * Converts cartesian vector `v` to polar coordinates. See `cartesian()`
 * for reverse operation. If `out` is null, modifies `v` in place.
 *
 * @param out
 * @param v
 */

const polar = (0, _vop.vop)(1);
/**
 * Converts 2D cartesian vector `v` to polar coordinates, i.e. `[r,θ]`
 * (angle in radians). See `cartesian()` for reverse operation. If `out`
 * is null, modifies `v` in place.
 *
 * @param out
 * @param v
 */

exports.polar = polar;
const polar2 = polar.add(2, (out, a) => (0, _setc.setC2)(out || a, (0, _mag.mag)(a), atan2(a[1], a[0])));
/**
 * Converts 3D cartesian vector `v` to spherical coordinates, i.e.
 * `[r,θ,ϕ]` (angles in radians). See `cartesian()` for reverse
 * operation. If `out` is null, modifies `v` in place.
 *
 * @param out
 * @param v
 */

exports.polar2 = polar2;
const polar3 = polar.add(3, (out, a) => {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const r = sqrt(x * x + y * y + z * z);
  return (0, _setc.setC3)(out || a, r, asin(z / r), atan2(y, x));
});
exports.polar3 = polar3;
},{"./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js","./mag":"../../node_modules/@thi.ng/vectors/mag.js","./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/pow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow4 = exports.pow3 = exports.pow2 = exports.pow = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [pow, pow2, pow3, pow4] = (0, _codegen.defOp)((0, _templates.FN2)("Math.pow"));
exports.pow4 = pow4;
exports.pow3 = pow3;
exports.pow2 = pow2;
exports.pow = pow;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/pown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.powN4 = exports.powN3 = exports.powN2 = exports.powN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [powN, powN2, powN3, powN4] = (0, _codegen.defOp)((0, _templates.FN_N)("Math.pow"), _codegen.ARGS_VN);
exports.powN4 = powN4;
exports.powN3 = powN3;
exports.powN2 = powN2;
exports.powN = powN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/project.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.project = void 0;

var _dot = require("./dot");

var _magsq = require("./magsq");

var _muln = require("./muln");

/**
 * Returns vector projection of `v` onto `dir`.
 *
 * https://en.wikipedia.org/wiki/Vector_projection
 *
 * @param v
 * @param dir
 */
const project = (out, v, dir) => (0, _muln.mulN)(out || v, dir, (0, _dot.dot)(v, dir) / (0, _magsq.magSq)(dir));

exports.project = project;
},{"./dot":"../../node_modules/@thi.ng/vectors/dot.js","./magsq":"../../node_modules/@thi.ng/vectors/magsq.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js"}],"../../node_modules/@thi.ng/vectors/radians.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radians4 = exports.radians3 = exports.radians2 = exports.radians = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [radians, radians2, radians3, radians4] = (0, _codegen.defHofOp)(_math.rad, (0, _templates.FN)("op"));
exports.radians4 = radians4;
exports.radians3 = radians3;
exports.radians2 = radians2;
exports.radians = radians;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/reflect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reflect = void 0;

var _dot = require("./dot");

var _maddn = require("./maddn");

const reflect = (out, a, b) => (0, _maddn.maddN)(out || a, b, -2 * (0, _dot.dot)(a, b), a);

exports.reflect = reflect;
},{"./dot":"../../node_modules/@thi.ng/vectors/dot.js","./maddn":"../../node_modules/@thi.ng/vectors/maddn.js"}],"../../node_modules/@thi.ng/vectors/refract.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refract = void 0;

var _dot = require("./dot");

var _maddn = require("./maddn");

var _muln = require("./muln");

var _setn = require("./setn");

const refract = (out, a, n, eta) => {
  !out && (out = a);
  const d = (0, _dot.dot)(a, n);
  const k = 1 - eta * eta * (1 - d * d);
  return k < 0 ? (0, _setn.zero)(out) : (0, _maddn.maddN)(out, n, -(eta * d + Math.sqrt(k)), (0, _muln.mulN)(out, a, eta));
};

exports.refract = refract;
},{"./dot":"../../node_modules/@thi.ng/vectors/dot.js","./maddn":"../../node_modules/@thi.ng/vectors/maddn.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js","./setn":"../../node_modules/@thi.ng/vectors/setn.js"}],"../../node_modules/@thi.ng/vectors/rotate-around-axis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateAroundAxis3 = void 0;

var _setc = require("./setc");

const rotateAroundAxis3 = (out, v, axis, theta) => {
  const x = v[0];
  const y = v[1];
  const z = v[2];
  const ax = axis[0];
  const ay = axis[1];
  const az = axis[2];
  const ux = ax * x;
  const uy = ax * y;
  const uz = ax * z;
  const vx = ay * x;
  const vy = ay * y;
  const vz = ay * z;
  const wx = az * x;
  const wy = az * y;
  const wz = az * z;
  const uvw = ux + vy + wz;
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return (0, _setc.setC3)(out || v, ax * uvw + (x * (ay * ay + az * az) - ax * (vy + wz)) * c + (-wy + vz) * s, ay * uvw + (y * (ax * ax + az * az) - ay * (ux + wz)) * c + (wx - uz) * s, az * uvw + (z * (ax * ax + ay * ay) - az * (ux + vy)) * c + (-vx + uy) * s);
};

exports.rotateAroundAxis3 = rotateAroundAxis3;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/rotate-around-point.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateAroundPoint2 = void 0;

var _setc = require("./setc");

const rotateAroundPoint2 = (out, v, p, theta) => {
  const x = v[0] - p[0];
  const y = v[1] - p[1];
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return (0, _setc.setC2)(out || v, x * c - y * s + p[0], x * s + y * c + p[1]);
};

exports.rotateAroundPoint2 = rotateAroundPoint2;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/rotate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateZ = exports.rotateY = exports.rotateX = void 0;

var _set = require("./set");

const _rotate = (u, v) => (out, a, theta) => {
  out ? out !== a && (0, _set.set)(out, a) : out = a;
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  const x = a[u];
  const y = a[v];
  out[u] = x * c - y * s;
  out[v] = x * s + y * c;
  return out;
};

const rotateX = _rotate(1, 2);

exports.rotateX = rotateX;

const rotateY = _rotate(2, 0);

exports.rotateY = rotateY;

const rotateZ = _rotate(0, 1);

exports.rotateZ = rotateZ;
},{"./set":"../../node_modules/@thi.ng/vectors/set.js"}],"../../node_modules/@thi.ng/vectors/round.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round4 = exports.round3 = exports.round2 = exports.round = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [round, round2, round3, round4] = (0, _codegen.defHofOp)(_math.roundTo, (0, _templates.FN_N)("op"), "o,a,n=1", "o,a");
exports.round4 = round4;
exports.round3 = round3;
exports.round2 = round2;
exports.round = round;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/rshift.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rshiftNU4 = exports.rshiftNU3 = exports.rshiftNU2 = exports.rshiftNU = exports.rshiftNI4 = exports.rshiftNI3 = exports.rshiftNI2 = exports.rshiftNI = exports.rshiftU4 = exports.rshiftU3 = exports.rshiftU2 = exports.rshiftU = exports.rshiftI4 = exports.rshiftI3 = exports.rshiftI2 = exports.rshiftI = void 0;

var _codegen = require("./internal/codegen");

const [rshiftI, rshiftI2, rshiftI3, rshiftI4] = (0, _codegen.defBitOp)(">>", true);
exports.rshiftI4 = rshiftI4;
exports.rshiftI3 = rshiftI3;
exports.rshiftI2 = rshiftI2;
exports.rshiftI = rshiftI;
const [rshiftU, rshiftU2, rshiftU3, rshiftU4] = (0, _codegen.defBitOp)(">>>"); // prettier-ignore

exports.rshiftU4 = rshiftU4;
exports.rshiftU3 = rshiftU3;
exports.rshiftU2 = rshiftU2;
exports.rshiftU = rshiftU;
const [rshiftNI, rshiftNI2, rshiftNI3, rshiftNI4] = (0, _codegen.defBitOpN)(">>", true);
exports.rshiftNI4 = rshiftNI4;
exports.rshiftNI3 = rshiftNI3;
exports.rshiftNI2 = rshiftNI2;
exports.rshiftNI = rshiftNI;
const [rshiftNU, rshiftNU2, rshiftNU3, rshiftNU4] = (0, _codegen.defBitOpN)(">>>");
exports.rshiftNU4 = rshiftNU4;
exports.rshiftNU3 = rshiftNU3;
exports.rshiftNU2 = rshiftNU2;
exports.rshiftNU = rshiftNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/setsn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSN4 = exports.setSN3 = exports.setSN2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [setSN2, setSN3, setSN4] = (0, _codegen.defOpS)(_templates.SET_N, "o,n,io=0,so=1", "o", "o", "");
exports.setSN4 = setSN4;
exports.setSN3 = setSN3;
exports.setSN2 = setSN2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/setvn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVN4 = exports.setVN3 = void 0;

var _setc = require("./setc");

/**
 * Sets `out` to `[a.x, a.y, n]`
 *
 * @param out
 * @param a
 * @param n
 */
const setVN3 = (out, a, n) => (0, _setc.setC3)(out, a[0], a[1], n);
/**
 * Sets `out` to `[a.x, a.y, a.z, n]`
 *
 * @param out
 * @param a
 * @param n
 */


exports.setVN3 = setVN3;

const setVN4 = (out, a, n) => (0, _setc.setC4)(out, a[0], a[1], a[2], n);

exports.setVN4 = setVN4;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/setvv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVV16 = exports.setVV9 = exports.setVV6 = exports.setVV4 = void 0;

var _setc = require("./setc");

/**
 * Sets `out` to `[a.x, a.y, b.x, b.y]`
 *
 * @param out
 * @param a
 * @param b
 */
const setVV4 = (out, a, b) => (0, _setc.setC4)(out, a[0], a[1], b[0], b[1]);
/**
 * Sets `out` to `[a.x, a.y, b.x, b.y, c.x, c.y]`
 *
 * @param out
 * @param a
 * @param b
 * @param c
 */


exports.setVV4 = setVV4;

const setVV6 = (out, a, b, c) => (0, _setc.setC6)(out, a[0], a[1], b[0], b[1], c[0], c[1]);
/**
 * Sets `out` to:
 * `[a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z]`
 *
 * @param out
 * @param a
 * @param b
 * @param c
 */


exports.setVV6 = setVV6;

const setVV9 = (out, a, b, c) => (0, _setc.setC)(out, a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
/**
 * Sets `out` to:
 *
 * ```
 * [a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w,
 *  c.x, c.y, c.z, c.w, d.x, d.y, d.z, d.w]
 * ```
 *
 * @param out
 * @param a
 * @param b
 * @param c
 */


exports.setVV9 = setVV9;

const setVV16 = (out, a, b, c, d) => (0, _setc.setC)(out, a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], c[0], c[1], c[2], c[3], d[0], d[1], d[2], d[3]);

exports.setVV16 = setVV16;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/sign.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign4 = exports.sign3 = exports.sign2 = exports.sign = void 0;

var _codegen = require("./internal/codegen");

const [sign, sign2, sign3, sign4] = (0, _codegen.defFnOp)("Math.sign");
exports.sign4 = sign4;
exports.sign3 = sign3;
exports.sign2 = sign2;
exports.sign = sign;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/sin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sin4 = exports.sin3 = exports.sin2 = exports.sin = void 0;

var _codegen = require("./internal/codegen");

const [sin, sin2, sin3, sin4] = (0, _codegen.defFnOp)("Math.sin");
exports.sin4 = sin4;
exports.sin3 = sin3;
exports.sin2 = sin2;
exports.sin = sin;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/sinh.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sinh4 = exports.sinh3 = exports.sinh2 = exports.sinh = void 0;

var _codegen = require("./internal/codegen");

const [sinh, sinh2, sinh3, sinh4] = (0, _codegen.defFnOp)("Math.sinh");
exports.sinh4 = sinh4;
exports.sinh3 = sinh3;
exports.sinh2 = sinh2;
exports.sinh = sinh;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/some.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some4 = exports.some3 = exports.some2 = exports.some = void 0;

var _vop = require("./internal/vop");

/**
 * Returns returns true if at least one vector component in `v` is
 * truthy.
 *
 * @param v
 */
const some = (0, _vop.vop)();
exports.some = some;
some.default(v => {
  for (let i = v.length; --i >= 0;) {
    if (v[i]) return true;
  }

  return false;
});
const some2 = some.add(2, a => a[0] || a[1]);
exports.some2 = some2;
const some3 = some.add(3, a => a[0] || a[1] || a[2]);
exports.some3 = some3;
const some4 = some.add(4, a => a[0] || a[1] || a[2] || a[3]);
exports.some4 = some4;
},{"./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/sqrt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqrt4 = exports.sqrt3 = exports.sqrt2 = exports.sqrt = void 0;

var _codegen = require("./internal/codegen");

const [sqrt, sqrt2, sqrt3, sqrt4] = (0, _codegen.defFnOp)("Math.sqrt");
exports.sqrt4 = sqrt4;
exports.sqrt3 = sqrt3;
exports.sqrt2 = sqrt2;
exports.sqrt = sqrt;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.step4 = exports.step3 = exports.step2 = exports.step = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Like GLSL `step()`
 *
 * @param out
 * @param e
 * @param v
 */
const [step, step2, step3, step4] = (0, _codegen.defHofOp)(_math.step, (0, _templates.FN2)("op"), "o,e,a", undefined, "o", 2, _codegen.DEFAULT_OUT);
exports.step4 = step4;
exports.step3 = step3;
exports.step2 = step2;
exports.step = step;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/smoothstep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoothStep4 = exports.smoothStep3 = exports.smoothStep2 = exports.smoothStep = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Like GLSL `smoothstep()`
 *
 * @param out
 * @param e1
 * @param e2
 * @param v
 */
const [smoothStep, smoothStep2, smoothStep3, smoothStep4] = (0, _codegen.defHofOp)(_math.smoothStep, (0, _templates.FN3)(), "o,e1,e2,a", undefined, "o", 3, _codegen.DEFAULT_OUT);
exports.smoothStep4 = smoothStep4;
exports.smoothStep3 = smoothStep3;
exports.smoothStep2 = smoothStep2;
exports.smoothStep = smoothStep;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/subi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subNU4 = exports.subNU3 = exports.subNU2 = exports.subNU = exports.subNI4 = exports.subNI3 = exports.subNI2 = exports.subNI = exports.subU4 = exports.subU3 = exports.subU2 = exports.subU = exports.subI4 = exports.subI3 = exports.subI2 = exports.subI = void 0;

var _codegen = require("./internal/codegen");

const [subI, subI2, subI3, subI4] = (0, _codegen.defBitOp)("-", true);
exports.subI4 = subI4;
exports.subI3 = subI3;
exports.subI2 = subI2;
exports.subI = subI;
const [subU, subU2, subU3, subU4] = (0, _codegen.defBitOp)("-");
exports.subU4 = subU4;
exports.subU3 = subU3;
exports.subU2 = subU2;
exports.subU = subU;
const [subNI, subNI2, subNI3, subNI4] = (0, _codegen.defBitOpN)("-", true);
exports.subNI4 = subNI4;
exports.subNI3 = subNI3;
exports.subNI2 = subNI2;
exports.subNI = subNI;
const [subNU, subNU2, subNU3, subNU4] = (0, _codegen.defBitOpN)("-");
exports.subNU4 = subNU4;
exports.subNU3 = subNU3;
exports.subNU2 = subNU2;
exports.subNU = subNU;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/subm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subm4 = exports.subm3 = exports.subm2 = exports.subm = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = (a - b) * c`.
 *
 * @see madd
 * @see addm
 */
const [subm, subm2, subm3, subm4] = (0, _codegen.defOp)(_templates.SUBM, _codegen.ARGS_VVV);
exports.subm4 = subm4;
exports.subm3 = subm3;
exports.subm2 = subm2;
exports.subm = subm;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/submn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submN4 = exports.submN3 = exports.submN2 = exports.submN = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

/**
 * Returns `out = (a - b) * n`.
 */
const [submN, submN2, submN3, submN4] = (0, _codegen.defOp)(_templates.SUBM_N, _codegen.ARGS_VVN);
exports.submN4 = submN4;
exports.submN3 = submN3;
exports.submN2 = submN2;
exports.submN = submN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/subn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subN4 = exports.subN3 = exports.subN2 = exports.subN = void 0;

var _codegen = require("./internal/codegen");

const [subN, subN2, subN3, subN4] = (0, _codegen.defMathOpN)("-");
exports.subN4 = subN4;
exports.subN3 = subN3;
exports.subN2 = subN2;
exports.subN = subN;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/subs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subS4 = exports.subS3 = exports.subS2 = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [subS2, subS3, subS4] = (0, _codegen.defOpS)((0, _templates.MATH)("-"));
exports.subS4 = subS4;
exports.subS3 = subS3;
exports.subS2 = subS2;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/sum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum4 = exports.sum3 = exports.sum2 = exports.sum = void 0;

var _transducers = require("@thi.ng/transducers");

var _vop = require("./internal/vop");

/**
 * Returns component sum of vector `v`.
 *
 * @param v
 */
const sum = (0, _vop.vop)();
exports.sum = sum;
sum.default(v => (0, _transducers.reduce)((0, _transducers.add)(), v));
const sum2 = sum.add(2, a => a[0] + a[1]);
exports.sum2 = sum2;
const sum3 = sum.add(3, a => a[0] + a[1] + a[2]);
exports.sum3 = sum3;
const sum4 = sum.add(4, a => a[0] + a[1] + a[2] + a[3]);
exports.sum4 = sum4;
},{"@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js"}],"../../node_modules/@thi.ng/vectors/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSwizzle4 = exports.setSwizzle3 = exports.setSwizzle2 = exports.setSwizzle1 = exports.swapYZ = exports.swapXZ = exports.swapXY = exports.swizzle4 = exports.swizzle3 = exports.swizzle2 = void 0;

var _setc = require("./setc");

/**
 * Places a re-ordered 2D version of vector `a` into `out`. The given
 * coord indices must be valid for `a`. No bounds checking.
 *
 * @param out
 * @param a
 * @param x new x coord index
 * @param y new y coord index
 */
const swizzle2 = (out, a, x, y) => (0, _setc.setC2)(out || a, a[x] || 0, a[y] || 0);
/**
 * Places a re-ordered 3D version of vector `a` into `out`. The given
 * coord indices must be valid for `a`. No bounds checking.
 *
 * @param out
 * @param a
 * @param x new x coord index
 * @param y new y coord index
 * @param z new z coord index
 */


exports.swizzle2 = swizzle2;

const swizzle3 = (out, a, x, y, z) => (0, _setc.setC3)(out || a, a[x] || 0, a[y] || 0, a[z] || 0);
/**
 * Places a re-ordered 4D version of vector `a` into `out`. The given
 * coord indices must be valid for `a`. No bounds checking.
 *
 * @param out
 * @param a
 * @param x new x coord index
 * @param y new y coord index
 * @param z new z coord index
 * @param w new w coord index
 */


exports.swizzle3 = swizzle3;

const swizzle4 = (out, a, x, y, z, w) => (0, _setc.setC4)(out || a, a[x] || 0, a[y] || 0, a[z] || 0, a[w] || 0);

exports.swizzle4 = swizzle4;

const swapXY = (out, v) => swizzle3(out, v, 1, 0, 2);

exports.swapXY = swapXY;

const swapXZ = (out, v) => swizzle3(out, v, 2, 1, 0);

exports.swapXZ = swapXZ;

const swapYZ = (out, v) => swizzle3(out, v, 0, 2, 1);
/**
 * Sets `out[a] = n`, returns `out`.
 *
 * @param out
 * @param n
 * @param a
 */


exports.swapYZ = swapYZ;

const setSwizzle1 = (out, n, a) => (out[a] = n, out);
/**
 * Sets `out[a] = v.x, out[b] = v.y`, returns `out`.
 *
 * @param out
 * @param v
 * @param a
 * @param b
 */


exports.setSwizzle1 = setSwizzle1;

const setSwizzle2 = (out, v, a, b) => ((out[a] = v[0], out[b] = v[1]), out);
/**
 * Sets `out[a] = v.x, out[b] = v.y, out[c] = v.z`, returns `out`.
 *
 * @param out
 * @param v
 * @param a
 * @param b
 * @param c
 */


exports.setSwizzle2 = setSwizzle2;

const setSwizzle3 = (out, v, a, b, c) => ((out[a] = v[0], out[b] = v[1], out[c] = v[2]), out);
/**
 * Sets `out[a] = v.x, out[b] = v.y, out[c] = v.z, out[d]=v.w`, returns `out`.
 *
 * @param out
 * @param v
 * @param a
 * @param b
 * @param c
 * @param d
 */


exports.setSwizzle3 = setSwizzle3;

const setSwizzle4 = (out, v, a, b, c, d) => ((out[a] = v[0], out[b] = v[1], out[c] = v[2], out[d] = v[3]), out);

exports.setSwizzle4 = setSwizzle4;
},{"./setc":"../../node_modules/@thi.ng/vectors/setc.js"}],"../../node_modules/@thi.ng/vectors/tan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tan4 = exports.tan3 = exports.tan2 = exports.tan = void 0;

var _codegen = require("./internal/codegen");

const [tan, tan2, tan3, tan4] = (0, _codegen.defFnOp)("Math.tan");
exports.tan4 = tan4;
exports.tan3 = tan3;
exports.tan2 = tan2;
exports.tan = tan;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/tanh.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tanh4 = exports.tanh3 = exports.tanh2 = exports.tanh = void 0;

var _codegen = require("./internal/codegen");

const [tanh, tanh2, tanh3, tanh4] = (0, _codegen.defFnOp)("Math.tanh");
exports.tanh4 = tanh4;
exports.tanh3 = tanh3;
exports.tanh2 = tanh2;
exports.tanh = tanh;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/trunc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trunc4 = exports.trunc3 = exports.trunc2 = exports.trunc = void 0;

var _codegen = require("./internal/codegen");

const [trunc, trunc2, trunc3, trunc4] = (0, _codegen.defFnOp)("Math.trunc");
exports.trunc4 = trunc4;
exports.trunc3 = trunc3;
exports.trunc2 = trunc2;
exports.trunc = trunc;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js"}],"../../node_modules/@thi.ng/vectors/vec-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vecOf = void 0;

/**
 * Returns new vector of `size` with all components set to `n`.
 *
 * @param size
 * @param n
 */
const vecOf = (size, n = 0) => new Array(size).fill(n);

exports.vecOf = vecOf;
},{}],"../../node_modules/@thi.ng/vectors/wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap4 = exports.wrap3 = exports.wrap2 = exports.wrap = void 0;

var _math = require("@thi.ng/math");

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [wrap, wrap2, wrap3, wrap4] = (0, _codegen.defHofOp)(_math.wrap, (0, _templates.FN3)(), _codegen.ARGS_VVV);
exports.wrap4 = wrap4;
exports.wrap3 = wrap3;
exports.wrap2 = wrap2;
exports.wrap = wrap;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/eq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eq4 = exports.eq3 = exports.eq2 = exports.eq = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [eq, eq2, eq3, eq4] = (0, _codegen.defOp)((0, _templates.MATH)("==="));
exports.eq4 = eq4;
exports.eq3 = eq3;
exports.eq2 = eq2;
exports.eq = eq;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/neq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.neq4 = exports.neq3 = exports.neq2 = exports.neq = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [neq, neq2, neq3, neq4] = (0, _codegen.defOp)((0, _templates.MATH)("!=="));
exports.neq4 = neq4;
exports.neq3 = neq3;
exports.neq2 = neq2;
exports.neq = neq;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/gt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gt4 = exports.gt3 = exports.gt2 = exports.gt = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [gt, gt2, gt3, gt4] = (0, _codegen.defOp)((0, _templates.MATH)(">"));
exports.gt4 = gt4;
exports.gt3 = gt3;
exports.gt2 = gt2;
exports.gt = gt;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/gte.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gte4 = exports.gte3 = exports.gte2 = exports.gte = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [gte, gte2, gte3, gte4] = (0, _codegen.defOp)((0, _templates.MATH)(">="));
exports.gte4 = gte4;
exports.gte3 = gte3;
exports.gte2 = gte2;
exports.gte = gte;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/lt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lt4 = exports.lt3 = exports.lt2 = exports.lt = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [lt, lt2, lt3, lt4] = (0, _codegen.defOp)((0, _templates.MATH)("<"));
exports.lt4 = lt4;
exports.lt3 = lt3;
exports.lt2 = lt2;
exports.lt = lt;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/lte.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lte4 = exports.lte3 = exports.lte2 = exports.lte = void 0;

var _codegen = require("./internal/codegen");

var _templates = require("./internal/templates");

const [lte, lte2, lte3, lte4] = (0, _codegen.defOp)((0, _templates.MATH)("<="));
exports.lte4 = lte4;
exports.lte3 = lte3;
exports.lte2 = lte2;
exports.lte = lte;
},{"./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js"}],"../../node_modules/@thi.ng/vectors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _accessors = require("./internal/accessors");

Object.keys(_accessors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _accessors[key];
    }
  });
});

var _avec = require("./internal/avec");

Object.keys(_avec).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _avec[key];
    }
  });
});

var _codegen = require("./internal/codegen");

Object.keys(_codegen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _codegen[key];
    }
  });
});

var _templates = require("./internal/templates");

Object.keys(_templates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _templates[key];
    }
  });
});

var _vecUtils = require("./internal/vec-utils");

Object.keys(_vecUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vecUtils[key];
    }
  });
});

var _vop = require("./internal/vop");

Object.keys(_vop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vop[key];
    }
  });
});

var _vec = require("./vec2");

Object.keys(_vec).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vec[key];
    }
  });
});

var _vec2 = require("./vec3");

Object.keys(_vec2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vec2[key];
    }
  });
});

var _vec3 = require("./vec4");

Object.keys(_vec3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vec3[key];
    }
  });
});

var _abs = require("./abs");

Object.keys(_abs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _abs[key];
    }
  });
});

var _acos = require("./acos");

Object.keys(_acos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _acos[key];
    }
  });
});

var _addw = require("./addw");

Object.keys(_addw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addw[key];
    }
  });
});

var _add = require("./add");

Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _add[key];
    }
  });
});

var _addi = require("./addi");

Object.keys(_addi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addi[key];
    }
  });
});

var _addm = require("./addm");

Object.keys(_addm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addm[key];
    }
  });
});

var _addmn = require("./addmn");

Object.keys(_addmn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addmn[key];
    }
  });
});

var _addn = require("./addn");

Object.keys(_addn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addn[key];
    }
  });
});

var _adds = require("./adds");

Object.keys(_adds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _adds[key];
    }
  });
});

var _angleBetween = require("./angle-between");

Object.keys(_angleBetween).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _angleBetween[key];
    }
  });
});

var _asin = require("./asin");

Object.keys(_asin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _asin[key];
    }
  });
});

var _atan = require("./atan");

Object.keys(_atan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _atan[key];
    }
  });
});

var _bisect = require("./bisect");

Object.keys(_bisect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bisect[key];
    }
  });
});

var _bitAnd = require("./bit-and");

Object.keys(_bitAnd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bitAnd[key];
    }
  });
});

var _bitNot = require("./bit-not");

Object.keys(_bitNot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bitNot[key];
    }
  });
});

var _bitOr = require("./bit-or");

Object.keys(_bitOr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bitOr[key];
    }
  });
});

var _bitXor = require("./bit-xor");

Object.keys(_bitXor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bitXor[key];
    }
  });
});

var _cartesian = require("./cartesian");

Object.keys(_cartesian).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cartesian[key];
    }
  });
});

var _ceil = require("./ceil");

Object.keys(_ceil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ceil[key];
    }
  });
});

var _clamp = require("./clamp");

Object.keys(_clamp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clamp[key];
    }
  });
});

var _clampn = require("./clampn");

Object.keys(_clampn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clampn[key];
    }
  });
});

var _clockwise = require("./clockwise");

Object.keys(_clockwise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clockwise[key];
    }
  });
});

var _compare = require("./compare");

Object.keys(_compare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compare[key];
    }
  });
});

var _copy = require("./copy");

Object.keys(_copy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _copy[key];
    }
  });
});

var _cos = require("./cos");

Object.keys(_cos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cos[key];
    }
  });
});

var _cosh = require("./cosh");

Object.keys(_cosh).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cosh[key];
    }
  });
});

var _cross = require("./cross");

Object.keys(_cross).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cross[key];
    }
  });
});

var _degrees = require("./degrees");

Object.keys(_degrees).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _degrees[key];
    }
  });
});

var _direction = require("./direction");

Object.keys(_direction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _direction[key];
    }
  });
});

var _dist = require("./dist");

Object.keys(_dist).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dist[key];
    }
  });
});

var _distChebyshev = require("./dist-chebyshev");

Object.keys(_distChebyshev).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distChebyshev[key];
    }
  });
});

var _distManhattan = require("./dist-manhattan");

Object.keys(_distManhattan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distManhattan[key];
    }
  });
});

var _distsq = require("./distsq");

Object.keys(_distsq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distsq[key];
    }
  });
});

var _div = require("./div");

Object.keys(_div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _div[key];
    }
  });
});

var _divi = require("./divi");

Object.keys(_divi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _divi[key];
    }
  });
});

var _divn = require("./divn");

Object.keys(_divn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _divn[key];
    }
  });
});

var _divs = require("./divs");

Object.keys(_divs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _divs[key];
    }
  });
});

var _dot = require("./dot");

Object.keys(_dot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dot[key];
    }
  });
});

var _dotc = require("./dotc");

Object.keys(_dotc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dotc[key];
    }
  });
});

var _dots = require("./dots");

Object.keys(_dots).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dots[key];
    }
  });
});

var _empty = require("./empty");

Object.keys(_empty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _empty[key];
    }
  });
});

var _eqdelta = require("./eqdelta");

Object.keys(_eqdelta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eqdelta[key];
    }
  });
});

var _every = require("./every");

Object.keys(_every).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _every[key];
    }
  });
});

var _exp = require("./exp");

Object.keys(_exp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exp[key];
    }
  });
});

var _exp_ = require("./exp_2");

Object.keys(_exp_).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exp_[key];
    }
  });
});

var _faceForward = require("./face-forward");

Object.keys(_faceForward).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _faceForward[key];
    }
  });
});

var _fit = require("./fit");

Object.keys(_fit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fit[key];
    }
  });
});

var _floor = require("./floor");

Object.keys(_floor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _floor[key];
    }
  });
});

var _fmod = require("./fmod");

Object.keys(_fmod).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fmod[key];
    }
  });
});

var _fmodn = require("./fmodn");

Object.keys(_fmodn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fmodn[key];
    }
  });
});

var _fract = require("./fract");

Object.keys(_fract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fract[key];
    }
  });
});

var _gvec = require("./gvec");

Object.keys(_gvec).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gvec[key];
    }
  });
});

var _hash = require("./hash");

Object.keys(_hash).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hash[key];
    }
  });
});

var _heading = require("./heading");

Object.keys(_heading).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _heading[key];
    }
  });
});

var _headingSegment = require("./heading-segment");

Object.keys(_headingSegment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _headingSegment[key];
    }
  });
});

var _homogeneous = require("./homogeneous");

Object.keys(_homogeneous).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _homogeneous[key];
    }
  });
});

var _invert = require("./invert");

Object.keys(_invert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invert[key];
    }
  });
});

var _invsqrt = require("./invsqrt");

Object.keys(_invsqrt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invsqrt[key];
    }
  });
});

var _isInf = require("./is-inf");

Object.keys(_isInf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInf[key];
    }
  });
});

var _isNan = require("./is-nan");

Object.keys(_isNan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNan[key];
    }
  });
});

var _jitter = require("./jitter");

Object.keys(_jitter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jitter[key];
    }
  });
});

var _limit = require("./limit");

Object.keys(_limit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _limit[key];
    }
  });
});

var _log = require("./log");

Object.keys(_log).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _log[key];
    }
  });
});

var _log_ = require("./log_2");

Object.keys(_log_).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _log_[key];
    }
  });
});

var _logicAnd = require("./logic-and");

Object.keys(_logicAnd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logicAnd[key];
    }
  });
});

var _logicNot = require("./logic-not");

Object.keys(_logicNot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logicNot[key];
    }
  });
});

var _logicOr = require("./logic-or");

Object.keys(_logicOr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logicOr[key];
    }
  });
});

var _lshift = require("./lshift");

Object.keys(_lshift).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lshift[key];
    }
  });
});

var _madd = require("./madd");

Object.keys(_madd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _madd[key];
    }
  });
});

var _maddn = require("./maddn");

Object.keys(_maddn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _maddn[key];
    }
  });
});

var _mag = require("./mag");

Object.keys(_mag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mag[key];
    }
  });
});

var _magsq = require("./magsq");

Object.keys(_magsq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _magsq[key];
    }
  });
});

var _major = require("./major");

Object.keys(_major).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _major[key];
    }
  });
});

var _map = require("./map");

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _map[key];
    }
  });
});

var _max = require("./max");

Object.keys(_max).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _max[key];
    }
  });
});

var _min = require("./min");

Object.keys(_min).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _min[key];
    }
  });
});

var _minor = require("./minor");

Object.keys(_minor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minor[key];
    }
  });
});

var _mixBilinear = require("./mix-bilinear");

Object.keys(_mixBilinear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixBilinear[key];
    }
  });
});

var _mixCubic = require("./mix-cubic");

Object.keys(_mixCubic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixCubic[key];
    }
  });
});

var _mixQuadratic = require("./mix-quadratic");

Object.keys(_mixQuadratic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixQuadratic[key];
    }
  });
});

var _mix = require("./mix");

Object.keys(_mix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mix[key];
    }
  });
});

var _mixn = require("./mixn");

Object.keys(_mixn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixn[key];
    }
  });
});

var _mod = require("./mod");

Object.keys(_mod).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mod[key];
    }
  });
});

var _modn = require("./modn");

Object.keys(_modn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modn[key];
    }
  });
});

var _mul = require("./mul");

Object.keys(_mul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mul[key];
    }
  });
});

var _muli = require("./muli");

Object.keys(_muli).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _muli[key];
    }
  });
});

var _muln = require("./muln");

Object.keys(_muln).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _muln[key];
    }
  });
});

var _muls = require("./muls");

Object.keys(_muls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _muls[key];
    }
  });
});

var _neg = require("./neg");

Object.keys(_neg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _neg[key];
    }
  });
});

var _normal = require("./normal");

Object.keys(_normal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normal[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _orthoNormal = require("./ortho-normal");

Object.keys(_orthoNormal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _orthoNormal[key];
    }
  });
});

var _perpendicular = require("./perpendicular");

Object.keys(_perpendicular).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _perpendicular[key];
    }
  });
});

var _polar = require("./polar");

Object.keys(_polar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _polar[key];
    }
  });
});

var _pow = require("./pow");

Object.keys(_pow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pow[key];
    }
  });
});

var _pown = require("./pown");

Object.keys(_pown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pown[key];
    }
  });
});

var _project = require("./project");

Object.keys(_project).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _project[key];
    }
  });
});

var _radians = require("./radians");

Object.keys(_radians).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _radians[key];
    }
  });
});

var _random = require("./random");

Object.keys(_random).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _random[key];
    }
  });
});

var _reflect = require("./reflect");

Object.keys(_reflect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reflect[key];
    }
  });
});

var _refract = require("./refract");

Object.keys(_refract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _refract[key];
    }
  });
});

var _rotateAroundAxis = require("./rotate-around-axis");

Object.keys(_rotateAroundAxis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rotateAroundAxis[key];
    }
  });
});

var _rotateAroundPoint = require("./rotate-around-point");

Object.keys(_rotateAroundPoint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rotateAroundPoint[key];
    }
  });
});

var _rotate = require("./rotate");

Object.keys(_rotate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rotate[key];
    }
  });
});

var _round = require("./round");

Object.keys(_round).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _round[key];
    }
  });
});

var _rshift = require("./rshift");

Object.keys(_rshift).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rshift[key];
    }
  });
});

var _set = require("./set");

Object.keys(_set).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _set[key];
    }
  });
});

var _setc = require("./setc");

Object.keys(_setc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setc[key];
    }
  });
});

var _setn = require("./setn");

Object.keys(_setn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setn[key];
    }
  });
});

var _sets = require("./sets");

Object.keys(_sets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sets[key];
    }
  });
});

var _setsn = require("./setsn");

Object.keys(_setsn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setsn[key];
    }
  });
});

var _setvn = require("./setvn");

Object.keys(_setvn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setvn[key];
    }
  });
});

var _setvv = require("./setvv");

Object.keys(_setvv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setvv[key];
    }
  });
});

var _sign = require("./sign");

Object.keys(_sign).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sign[key];
    }
  });
});

var _signedArea = require("./signed-area");

Object.keys(_signedArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _signedArea[key];
    }
  });
});

var _sin = require("./sin");

Object.keys(_sin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sin[key];
    }
  });
});

var _sinh = require("./sinh");

Object.keys(_sinh).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sinh[key];
    }
  });
});

var _some = require("./some");

Object.keys(_some).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _some[key];
    }
  });
});

var _sqrt = require("./sqrt");

Object.keys(_sqrt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sqrt[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});

var _smoothstep = require("./smoothstep");

Object.keys(_smoothstep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _smoothstep[key];
    }
  });
});

var _sub = require("./sub");

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sub[key];
    }
  });
});

var _subi = require("./subi");

Object.keys(_subi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subi[key];
    }
  });
});

var _subm = require("./subm");

Object.keys(_subm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subm[key];
    }
  });
});

var _submn = require("./submn");

Object.keys(_submn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _submn[key];
    }
  });
});

var _subn = require("./subn");

Object.keys(_subn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subn[key];
    }
  });
});

var _subs = require("./subs");

Object.keys(_subs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subs[key];
    }
  });
});

var _sum = require("./sum");

Object.keys(_sum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sum[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});

var _tan = require("./tan");

Object.keys(_tan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tan[key];
    }
  });
});

var _tanh = require("./tanh");

Object.keys(_tanh).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tanh[key];
    }
  });
});

var _trunc = require("./trunc");

Object.keys(_trunc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trunc[key];
    }
  });
});

var _vecOf = require("./vec-of");

Object.keys(_vecOf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vecOf[key];
    }
  });
});

var _wrap = require("./wrap");

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrap[key];
    }
  });
});

var _eq = require("./eq");

Object.keys(_eq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eq[key];
    }
  });
});

var _neq = require("./neq");

Object.keys(_neq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _neq[key];
    }
  });
});

var _gt = require("./gt");

Object.keys(_gt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gt[key];
    }
  });
});

var _gte = require("./gte");

Object.keys(_gte).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gte[key];
    }
  });
});

var _lt = require("./lt");

Object.keys(_lt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lt[key];
    }
  });
});

var _lte = require("./lte");

Object.keys(_lte).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lte[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/vectors/api.js","./internal/accessors":"../../node_modules/@thi.ng/vectors/internal/accessors.js","./internal/avec":"../../node_modules/@thi.ng/vectors/internal/avec.js","./internal/codegen":"../../node_modules/@thi.ng/vectors/internal/codegen.js","./internal/templates":"../../node_modules/@thi.ng/vectors/internal/templates.js","./internal/vec-utils":"../../node_modules/@thi.ng/vectors/internal/vec-utils.js","./internal/vop":"../../node_modules/@thi.ng/vectors/internal/vop.js","./vec2":"../../node_modules/@thi.ng/vectors/vec2.js","./vec3":"../../node_modules/@thi.ng/vectors/vec3.js","./vec4":"../../node_modules/@thi.ng/vectors/vec4.js","./abs":"../../node_modules/@thi.ng/vectors/abs.js","./acos":"../../node_modules/@thi.ng/vectors/acos.js","./addw":"../../node_modules/@thi.ng/vectors/addw.js","./add":"../../node_modules/@thi.ng/vectors/add.js","./addi":"../../node_modules/@thi.ng/vectors/addi.js","./addm":"../../node_modules/@thi.ng/vectors/addm.js","./addmn":"../../node_modules/@thi.ng/vectors/addmn.js","./addn":"../../node_modules/@thi.ng/vectors/addn.js","./adds":"../../node_modules/@thi.ng/vectors/adds.js","./angle-between":"../../node_modules/@thi.ng/vectors/angle-between.js","./asin":"../../node_modules/@thi.ng/vectors/asin.js","./atan":"../../node_modules/@thi.ng/vectors/atan.js","./bisect":"../../node_modules/@thi.ng/vectors/bisect.js","./bit-and":"../../node_modules/@thi.ng/vectors/bit-and.js","./bit-not":"../../node_modules/@thi.ng/vectors/bit-not.js","./bit-or":"../../node_modules/@thi.ng/vectors/bit-or.js","./bit-xor":"../../node_modules/@thi.ng/vectors/bit-xor.js","./cartesian":"../../node_modules/@thi.ng/vectors/cartesian.js","./ceil":"../../node_modules/@thi.ng/vectors/ceil.js","./clamp":"../../node_modules/@thi.ng/vectors/clamp.js","./clampn":"../../node_modules/@thi.ng/vectors/clampn.js","./clockwise":"../../node_modules/@thi.ng/vectors/clockwise.js","./compare":"../../node_modules/@thi.ng/vectors/compare.js","./copy":"../../node_modules/@thi.ng/vectors/copy.js","./cos":"../../node_modules/@thi.ng/vectors/cos.js","./cosh":"../../node_modules/@thi.ng/vectors/cosh.js","./cross":"../../node_modules/@thi.ng/vectors/cross.js","./degrees":"../../node_modules/@thi.ng/vectors/degrees.js","./direction":"../../node_modules/@thi.ng/vectors/direction.js","./dist":"../../node_modules/@thi.ng/vectors/dist.js","./dist-chebyshev":"../../node_modules/@thi.ng/vectors/dist-chebyshev.js","./dist-manhattan":"../../node_modules/@thi.ng/vectors/dist-manhattan.js","./distsq":"../../node_modules/@thi.ng/vectors/distsq.js","./div":"../../node_modules/@thi.ng/vectors/div.js","./divi":"../../node_modules/@thi.ng/vectors/divi.js","./divn":"../../node_modules/@thi.ng/vectors/divn.js","./divs":"../../node_modules/@thi.ng/vectors/divs.js","./dot":"../../node_modules/@thi.ng/vectors/dot.js","./dotc":"../../node_modules/@thi.ng/vectors/dotc.js","./dots":"../../node_modules/@thi.ng/vectors/dots.js","./empty":"../../node_modules/@thi.ng/vectors/empty.js","./eqdelta":"../../node_modules/@thi.ng/vectors/eqdelta.js","./every":"../../node_modules/@thi.ng/vectors/every.js","./exp":"../../node_modules/@thi.ng/vectors/exp.js","./exp_2":"../../node_modules/@thi.ng/vectors/exp_2.js","./face-forward":"../../node_modules/@thi.ng/vectors/face-forward.js","./fit":"../../node_modules/@thi.ng/vectors/fit.js","./floor":"../../node_modules/@thi.ng/vectors/floor.js","./fmod":"../../node_modules/@thi.ng/vectors/fmod.js","./fmodn":"../../node_modules/@thi.ng/vectors/fmodn.js","./fract":"../../node_modules/@thi.ng/vectors/fract.js","./gvec":"../../node_modules/@thi.ng/vectors/gvec.js","./hash":"../../node_modules/@thi.ng/vectors/hash.js","./heading":"../../node_modules/@thi.ng/vectors/heading.js","./heading-segment":"../../node_modules/@thi.ng/vectors/heading-segment.js","./homogeneous":"../../node_modules/@thi.ng/vectors/homogeneous.js","./invert":"../../node_modules/@thi.ng/vectors/invert.js","./invsqrt":"../../node_modules/@thi.ng/vectors/invsqrt.js","./is-inf":"../../node_modules/@thi.ng/vectors/is-inf.js","./is-nan":"../../node_modules/@thi.ng/vectors/is-nan.js","./jitter":"../../node_modules/@thi.ng/vectors/jitter.js","./limit":"../../node_modules/@thi.ng/vectors/limit.js","./log":"../../node_modules/@thi.ng/vectors/log.js","./log_2":"../../node_modules/@thi.ng/vectors/log_2.js","./logic-and":"../../node_modules/@thi.ng/vectors/logic-and.js","./logic-not":"../../node_modules/@thi.ng/vectors/logic-not.js","./logic-or":"../../node_modules/@thi.ng/vectors/logic-or.js","./lshift":"../../node_modules/@thi.ng/vectors/lshift.js","./madd":"../../node_modules/@thi.ng/vectors/madd.js","./maddn":"../../node_modules/@thi.ng/vectors/maddn.js","./mag":"../../node_modules/@thi.ng/vectors/mag.js","./magsq":"../../node_modules/@thi.ng/vectors/magsq.js","./major":"../../node_modules/@thi.ng/vectors/major.js","./map":"../../node_modules/@thi.ng/vectors/map.js","./max":"../../node_modules/@thi.ng/vectors/max.js","./min":"../../node_modules/@thi.ng/vectors/min.js","./minor":"../../node_modules/@thi.ng/vectors/minor.js","./mix-bilinear":"../../node_modules/@thi.ng/vectors/mix-bilinear.js","./mix-cubic":"../../node_modules/@thi.ng/vectors/mix-cubic.js","./mix-quadratic":"../../node_modules/@thi.ng/vectors/mix-quadratic.js","./mix":"../../node_modules/@thi.ng/vectors/mix.js","./mixn":"../../node_modules/@thi.ng/vectors/mixn.js","./mod":"../../node_modules/@thi.ng/vectors/mod.js","./modn":"../../node_modules/@thi.ng/vectors/modn.js","./mul":"../../node_modules/@thi.ng/vectors/mul.js","./muli":"../../node_modules/@thi.ng/vectors/muli.js","./muln":"../../node_modules/@thi.ng/vectors/muln.js","./muls":"../../node_modules/@thi.ng/vectors/muls.js","./neg":"../../node_modules/@thi.ng/vectors/neg.js","./normal":"../../node_modules/@thi.ng/vectors/normal.js","./normalize":"../../node_modules/@thi.ng/vectors/normalize.js","./ortho-normal":"../../node_modules/@thi.ng/vectors/ortho-normal.js","./perpendicular":"../../node_modules/@thi.ng/vectors/perpendicular.js","./polar":"../../node_modules/@thi.ng/vectors/polar.js","./pow":"../../node_modules/@thi.ng/vectors/pow.js","./pown":"../../node_modules/@thi.ng/vectors/pown.js","./project":"../../node_modules/@thi.ng/vectors/project.js","./radians":"../../node_modules/@thi.ng/vectors/radians.js","./random":"../../node_modules/@thi.ng/vectors/random.js","./reflect":"../../node_modules/@thi.ng/vectors/reflect.js","./refract":"../../node_modules/@thi.ng/vectors/refract.js","./rotate-around-axis":"../../node_modules/@thi.ng/vectors/rotate-around-axis.js","./rotate-around-point":"../../node_modules/@thi.ng/vectors/rotate-around-point.js","./rotate":"../../node_modules/@thi.ng/vectors/rotate.js","./round":"../../node_modules/@thi.ng/vectors/round.js","./rshift":"../../node_modules/@thi.ng/vectors/rshift.js","./set":"../../node_modules/@thi.ng/vectors/set.js","./setc":"../../node_modules/@thi.ng/vectors/setc.js","./setn":"../../node_modules/@thi.ng/vectors/setn.js","./sets":"../../node_modules/@thi.ng/vectors/sets.js","./setsn":"../../node_modules/@thi.ng/vectors/setsn.js","./setvn":"../../node_modules/@thi.ng/vectors/setvn.js","./setvv":"../../node_modules/@thi.ng/vectors/setvv.js","./sign":"../../node_modules/@thi.ng/vectors/sign.js","./signed-area":"../../node_modules/@thi.ng/vectors/signed-area.js","./sin":"../../node_modules/@thi.ng/vectors/sin.js","./sinh":"../../node_modules/@thi.ng/vectors/sinh.js","./some":"../../node_modules/@thi.ng/vectors/some.js","./sqrt":"../../node_modules/@thi.ng/vectors/sqrt.js","./step":"../../node_modules/@thi.ng/vectors/step.js","./smoothstep":"../../node_modules/@thi.ng/vectors/smoothstep.js","./sub":"../../node_modules/@thi.ng/vectors/sub.js","./subi":"../../node_modules/@thi.ng/vectors/subi.js","./subm":"../../node_modules/@thi.ng/vectors/subm.js","./submn":"../../node_modules/@thi.ng/vectors/submn.js","./subn":"../../node_modules/@thi.ng/vectors/subn.js","./subs":"../../node_modules/@thi.ng/vectors/subs.js","./sum":"../../node_modules/@thi.ng/vectors/sum.js","./swizzle":"../../node_modules/@thi.ng/vectors/swizzle.js","./tan":"../../node_modules/@thi.ng/vectors/tan.js","./tanh":"../../node_modules/@thi.ng/vectors/tanh.js","./trunc":"../../node_modules/@thi.ng/vectors/trunc.js","./vec-of":"../../node_modules/@thi.ng/vectors/vec-of.js","./wrap":"../../node_modules/@thi.ng/vectors/wrap.js","./eq":"../../node_modules/@thi.ng/vectors/eq.js","./neq":"../../node_modules/@thi.ng/vectors/neq.js","./gt":"../../node_modules/@thi.ng/vectors/gt.js","./gte":"../../node_modules/@thi.ng/vectors/gte.js","./lt":"../../node_modules/@thi.ng/vectors/lt.js","./lte":"../../node_modules/@thi.ng/vectors/lte.js"}],"../../node_modules/@thi.ng/color/internal/ensure-hue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureHue = void 0;

const ensureHue = x => (x = x % 1, x < 0 ? x + 1 : x);

exports.ensureHue = ensureHue;
},{}],"../../node_modules/@thi.ng/color/hue-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namedHueRgba = exports.hueRgba = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _ensureHue = require("./internal/ensure-hue");

/**
 * Converts a normalized hue to RGBA with given optional `alpha`
 * value (default: 1).
 *
 * @param out
 * @param hue
 */
const hueRgba = (out, hue, alpha = 1) => {
  hue = (0, _ensureHue.ensureHue)(hue) * 6;
  return (0, _vectors.setC4)(out || [], (0, _math.clamp01)(Math.abs(hue - 3) - 1), (0, _math.clamp01)(2 - Math.abs(hue - 2)), (0, _math.clamp01)(2 - Math.abs(hue - 4)), alpha);
};

exports.hueRgba = hueRgba;

const namedHueRgba = (out, hue, alpha = 1) => hueRgba(out, hue / 12, alpha);

exports.namedHueRgba = namedHueRgba;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/ensure-hue":"../../node_modules/@thi.ng/color/internal/ensure-hue.js"}],"../../node_modules/@thi.ng/color/internal/ensure-alpha.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAlpha = void 0;

var _math = require("@thi.ng/math");

const ensureAlpha = (x, def = 1) => x != undefined ? (0, _math.clamp01)(x) : def;

exports.ensureAlpha = ensureAlpha;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js"}],"../../node_modules/@thi.ng/color/hcya-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hcyaRgba = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

var _hueRgba = require("./hue-rgba");

var _ensureAlpha = require("./internal/ensure-alpha");

const hcyaRgba = (out, src) => {
  const h = src[0];
  let c = src[1];
  const y = src[2];
  const rgb = (0, _hueRgba.hueRgba)(out || src, h, (0, _ensureAlpha.ensureAlpha)(src[3]));
  const lum = (0, _vectors.dot3)(rgb, _api.RGB_LUMINANCE);

  if (y < lum) {
    c *= y / lum;
  } else if (lum < 1) {
    c *= (1 - y) / (1 - lum);
  }

  return (0, _vectors.setC3)(rgb, (0, _math.clamp01)((rgb[0] - lum) * c + y), (0, _math.clamp01)((rgb[1] - lum) * c + y), (0, _math.clamp01)((rgb[2] - lum) * c + y));
};

exports.hcyaRgba = hcyaRgba;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./hue-rgba":"../../node_modules/@thi.ng/color/hue-rgba.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/clamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clampH = exports.clamp = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _ensureAlpha = require("./internal/ensure-alpha");

var _ensureHue = require("./internal/ensure-hue");

/**
 * Clamps all color channels to [0,1] interval and calls `ensureAlpha()`
 * to ensure alpha channel is defined (if missing sets it to `alpha`
 * (default: 1)).
 *
 * @param out
 * @param src
 * @param alpha
 */
const clamp = (out, src, alpha = 1) => (0, _vectors.setC4)(out || src, (0, _math.clamp01)(src[0]), (0, _math.clamp01)(src[1]), (0, _math.clamp01)(src[2]), (0, _ensureAlpha.ensureAlpha)(src[3], alpha));
/**
 * Similar to `clamp`, but calls `ensureHue()` to fold (instead of
 * clamping) the hue into [0,1] interval.
 *
 * @param out
 * @param src
 * @param alpha
 */


exports.clamp = clamp;

const clampH = (out, src, alpha = 1) => (0, _vectors.setC4)(out || src, (0, _ensureHue.ensureHue)(src[0]), (0, _math.clamp01)(src[1]), (0, _math.clamp01)(src[2]), (0, _ensureAlpha.ensureAlpha)(src[3], alpha));

exports.clampH = clampH;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js","./internal/ensure-hue":"../../node_modules/@thi.ng/color/internal/ensure-hue.js"}],"../../node_modules/@thi.ng/color/hsia-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsiaRgba = void 0;

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

// https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSI
const hsiaRgba = (out, src) => {
  out = (0, _clamp.clampH)(out || src, src);
  const s = out[1];
  const i = out[2];

  if (s < 1e-6) {
    return (0, _vectors.setC3)(out, i, i, i);
  }

  const h = out[0] * 6 % 6;
  const m = i * (1 - s);
  const z = 1 - Math.abs(h % 2 - 1);
  let c = 3 * i * s / (1 + z);
  const x = c * z + m;
  c += m;

  switch (h | 0) {
    case 0:
      return (0, _vectors.setC3)(out, c, x, m);

    case 1:
      return (0, _vectors.setC3)(out, x, c, m);

    case 2:
      return (0, _vectors.setC3)(out, m, c, x);

    case 3:
      return (0, _vectors.setC3)(out, m, x, c);

    case 4:
      return (0, _vectors.setC3)(out, x, m, c);

    case 5:
      return (0, _vectors.setC3)(out, c, m, x);

    default:
      return (0, _vectors.setC3)(out, m, m, m);
  }
};

exports.hsiaRgba = hsiaRgba;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/hsla-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslaCss = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _ensureAlpha = require("./internal/ensure-alpha");

var _ensureHue = require("./internal/ensure-hue");

const hslaCss = src => {
  const h = (0, _api.FF)((0, _ensureHue.ensureHue)(src[0]) * 360);
  const s = (0, _api.PC)((0, _math.clamp01)(src[1]));
  const l = (0, _api.PC)((0, _math.clamp01)(src[2]));
  const a = (0, _ensureAlpha.ensureAlpha)(src[3]);
  return a < 1 ? `hsla(${h},${s},${l},${(0, _api.FF)(a)})` : `hsl(${h},${s},${l})`;
};

exports.hslaCss = hslaCss;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js","./internal/ensure-hue":"../../node_modules/@thi.ng/color/internal/ensure-hue.js"}],"../../node_modules/@thi.ng/color/hsla-hsva.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslaHsva = void 0;

var _clamp = require("./clamp");

const hslaHsva = (out, src) => {
  out = (0, _clamp.clampH)(out || src, src);
  const s = out[1];
  const l = out[2];
  const l2 = 2 * l;
  const v = (l2 + s * (1 - Math.abs(l2 - 1))) * 0.5;
  out[1] = 2 * (v - l) / v;
  out[2] = v;
  return out;
};

exports.hslaHsva = hslaHsva;
},{"./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/hsla-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslaRgba = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _hueRgba = require("./hue-rgba");

var _ensureAlpha = require("./internal/ensure-alpha");

const hslaRgba = (out, src) => {
  const s = (0, _math.clamp01)(src[1]);
  const l = (0, _math.clamp01)(src[2]);
  out = (0, _hueRgba.hueRgba)(out || src, src[0], (0, _ensureAlpha.ensureAlpha)(src[3]));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  return (0, _vectors.setC3)(out, (out[0] - 0.5) * c + l, (out[1] - 0.5) * c + l, (out[2] - 0.5) * c + l);
};

exports.hslaRgba = hslaRgba;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./hue-rgba":"../../node_modules/@thi.ng/color/hue-rgba.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/hsva-hsla.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsvaHsla = void 0;

var _clamp = require("./clamp");

const hsvaHsla = (out, src) => {
  out = (0, _clamp.clampH)(out || src, src);
  const s = out[1];
  const v = out[2];
  const l = (2 - s) * v / 2;
  out[2] = l;
  out[1] = l && l < 1 ? s * v / (l < 0.5 ? l * 2 : 2 - l * 2) : s;
  return out;
};

exports.hsvaHsla = hsvaHsla;
},{"./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/hsva-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsvaCss = void 0;

var _hsvaHsla = require("./hsva-hsla");

var _hslaCss = require("./hsla-css");

const hsvaCss = src => (0, _hslaCss.hslaCss)((0, _hsvaHsla.hsvaHsla)([], src));

exports.hsvaCss = hsvaCss;
},{"./hsva-hsla":"../../node_modules/@thi.ng/color/hsva-hsla.js","./hsla-css":"../../node_modules/@thi.ng/color/hsla-css.js"}],"../../node_modules/@thi.ng/color/hsva-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsvaRgba = void 0;

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

var _hueRgba = require("./hue-rgba");

const hsvaRgba = (out, src) => {
  out = (0, _clamp.clampH)(out || src, src);
  const s = out[1];
  const v = out[2];
  (0, _hueRgba.hueRgba)(out, src[0], out[3]);
  return (0, _vectors.setC3)(out, ((out[0] - 1) * s + 1) * v, ((out[1] - 1) * s + 1) * v, ((out[2] - 1) * s + 1) * v);
};

exports.hsvaRgba = hsvaRgba;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js","./hue-rgba":"../../node_modules/@thi.ng/color/hue-rgba.js"}],"../../node_modules/@thi.ng/color/int-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.int24Css = exports.int32Css = void 0;

var _strings = require("@thi.ng/strings");

var _api = require("./api");

const int32Css = src => {
  src = typeof src === "number" ? src : src.deref();
  const a = src >>> 24;
  return a < 255 ? `rgba(${src >> 16 & 0xff},${src >> 8 & 0xff},${src & 0xff},${(0, _api.FF)(a * _api.INV8BIT)})` : `#${(0, _strings.U24)(src & 0xffffff)}`;
};

exports.int32Css = int32Css;

const int24Css = src => {
  src = typeof src === "number" ? src : src.deref();
  return int32Css(src | 0xff000000);
};

exports.int24Css = int24Css;
},{"@thi.ng/strings":"../../node_modules/@thi.ng/strings/index.js","./api":"../../node_modules/@thi.ng/color/api.js"}],"../../node_modules/@thi.ng/color/int-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.int24Rgba = exports.int32Rgba = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const int32Rgba = (out, src) => {
  src = typeof src === "number" ? src : src.deref();
  return (0, _vectors.setC4)(out || [], (src >>> 16 & 0xff) * _api.INV8BIT, (src >>> 8 & 0xff) * _api.INV8BIT, (src & 0xff) * _api.INV8BIT, (src >>> 24 & 0xff) * _api.INV8BIT);
};

exports.int32Rgba = int32Rgba;

const int24Rgba = (out, src) => {
  src = typeof src === "number" ? src : src.deref();
  return int32Rgba(out, src | 0xff000000);
};

exports.int24Rgba = int24Rgba;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/color/api.js"}],"../../node_modules/@thi.ng/color/kelvin-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kelvinRgba = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

const G1 = -0.6088425710866344;
const G2 = -0.001748900018414868;
const G3 = 0.4097731842899564;
const G4 = 1.2762722061615583;
const G5 = 0.0003115080994769546;
const G6 = 0.11013841706194392;
const R1 = 1.3803015908551253;
const R2 = 0.0004478684462124118;
const R3 = -0.15785750232675008;
const B1 = -0.9990954974165059;
const B2 = 0.0032447435545127036;
const B3 = 0.453646839257496;
/**
 * Based on:
 * https://github.com/neilbartlett/color-temperature/blob/master/index.js
 * http://www.zombieprototypes.com/?p=210
 *
 * Uses adjusted coefficients to produce normalized RGB values.
 *
 * @param out
 * @param kelvin color temperature
 * @param alpha target alpha channel
 */

const kelvinRgba = (out, kelvin, alpha = 1) => {
  kelvin *= 0.01;
  let t;
  return kelvin < 66 ? (0, _vectors.setC4)(out || [], 1, (0, _math.clamp01)(G1 + G2 * (t = kelvin - 2) + G3 * Math.log(t)), kelvin < 20 ? 0 : (0, _math.clamp01)(B1 + B2 * (t = kelvin - 10) + B3 * Math.log(t)), alpha) : (0, _vectors.setC4)(out || [], (0, _math.clamp01)(R1 + R2 * (t = kelvin - 55) + R3 * Math.log(t)), (0, _math.clamp01)(G4 + G5 * (t = kelvin - 50) - G6 * Math.log(t)), 1, alpha);
};

exports.kelvinRgba = kelvinRgba;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/defmulti/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT = void 0;
const DEFAULT = Symbol();
exports.DEFAULT = DEFAULT;
},{}],"../../node_modules/@thi.ng/defmulti/defmulti.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defmulti = defmulti;

var _errors = require("@thi.ng/errors");

var _api = require("./api");

function defmulti(f, ancestors) {
  const impls = {};
  const rels = ancestors ? makeRels(ancestors) : {};

  const fn = (...args) => {
    const id = f(...args);

    const g = impls[id] || findImpl(impls, rels, id) || impls[_api.DEFAULT];

    return g ? g(...args) : (0, _errors.unsupported)(`missing implementation for: "${id.toString()}"`);
  };

  fn.add = (id, g) => {
    if (impls[id]) return false;
    impls[id] = g;
    return true;
  };

  fn.addAll = _impls => {
    let ok = true;

    for (let id in _impls) {
      ok = fn.add(id, _impls[id]) && ok;
    }

    return ok;
  };

  fn.remove = id => {
    if (!impls[id]) return false;
    delete impls[id];
    return true;
  };

  fn.callable = (...args) => {
    const id = f(...args);
    return !!(impls[id] || findImpl(impls, rels, id) || impls[_api.DEFAULT]);
  };

  fn.isa = (id, parent) => {
    let val = rels[id];
    !val && (rels[id] = val = new Set());
    val.add(parent);
  };

  fn.impls = () => {
    const res = new Set(Object.keys(impls));

    for (let id in rels) {
      findImpl(impls, rels, id) && res.add(id);
    }

    impls[_api.DEFAULT] && res.add(_api.DEFAULT);
    return res;
  };

  fn.rels = () => rels;

  fn.parents = id => rels[id];

  fn.ancestors = id => new Set(findAncestors([], rels, id));

  return fn;
}

const findImpl = (impls, rels, id) => {
  const parents = rels[id];
  if (!parents) return;

  for (let p of parents) {
    let impl = impls[p] || findImpl(impls, rels, p);
    if (impl) return impl;
  }
};

const findAncestors = (acc, rels, id) => {
  const parents = rels[id];

  if (parents) {
    for (let p of parents) {
      acc.push(p);
      findAncestors(acc, rels, p);
    }
  }

  return acc;
};

const makeRels = spec => {
  const rels = {};

  for (let k in spec) {
    const val = spec[k];
    rels[k] = val instanceof Set ? val : new Set(val);
  }

  return rels;
};
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./api":"../../node_modules/@thi.ng/defmulti/api.js"}],"../../node_modules/@thi.ng/defmulti/defmulti-n.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defmultiN = void 0;

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _defmulti = require("./defmulti");

/**
 * Returns a multi-dispatch function which delegates to one of the
 * provided implementations, based on the arity (number of args) when
 * the function is called. Internally uses `defmulti`, so new arities
 * can be dynamically added (or removed) at a later time. If no
 * `fallback` is provided, `defmultiN` also registers a `DEFAULT`
 * implementation which simply throws an `IllegalArityError` when
 * invoked.
 *
 * **Note:** Unlike `defmulti` no argument type checking is supported,
 * however you can specify the return type for the generated function.
 *
 * ```
 * const foo = defmultiN<string>({
 *   0: () => "zero",
 *   1: (x) => `one: ${x}`,
 *   3: (x, y, z) => `three: ${x}, ${y}, ${z}`
 * });
 *
 * foo();
 * // zero
 * foo(23);
 * // one: 23
 * foo(1, 2, 3);
 * // three: 1, 2, 3
 * foo(1, 2);
 * // Error: illegal arity: 2
 *
 * foo.add(2, (x, y) => `two: ${x}, ${y}`);
 * foo(1, 2);
 * // two: 1, 2
 * ```
 *
 * @param impls
 * @param fallback
 */
const defmultiN = (impls, fallback) => {
  const fn = (0, _defmulti.defmulti)((...args) => args.length);
  fn.add(_api.DEFAULT, fallback || ((...args) => (0, _errors.illegalArity)(args.length)));

  for (let id in impls) {
    fn.add(id, impls[id]);
  }

  return fn;
};

exports.defmultiN = defmultiN;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./api":"../../node_modules/@thi.ng/defmulti/api.js","./defmulti":"../../node_modules/@thi.ng/defmulti/defmulti.js"}],"../../node_modules/@thi.ng/defmulti/impls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementations = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Syntax-sugar intended for sets of multi-methods sharing same dispatch
 * values / logic. Takes a dispatch value, an object of "is-a"
 * relationships and a number of multi-methods, each with an
 * implementation for the given dispatch value.
 *
 * The relations object has dispatch values (parents) as keys and arrays
 * of multi-methods as their values. For each multi-method associates
 * the given `type` with the related parent dispatch value to delegate
 * to its implementation.
 *
 * The remaining implementations are associated with their related
 * multi-method and the given `type` dispatch value.
 *
 * ```
 * foo = defmulti((x) => x.id);
 * bar = defmulti((x) => x.id);
 * bax = defmulti((x) => x.id);
 * baz = defmulti((x) => x.id);
 *
 * // define impls for dispatch value `a`
 * implementations(
 *   "a",
 *
 *   // delegate bax & baz impls to dispatch val `b`
 *   {
 *      b: [bax, baz]
 *   },
 *
 *   // concrete multi-fn impls
 *   foo,
 *   (x) => `foo: ${x.val}`,
 *
 *   bar,
 *   (x) => `bar: ${x.val.toUpperCase()}`
 * );
 *
 * // add parent impls
 * bax.add("b", (x) => `bax: ${x.id}`);
 * baz.add("c", (x) => `baz: ${x.id}`);
 * // use "c" impl for "b"
 * baz.isa("b", "c");
 *
 * foo({ id: "a", val: "alice" }); // "foo: alice"
 * bar({ id: "a", val: "alice" }); // "bar: ALICE"
 * bax({ id: "a", val: "alice" }); // "bax: a"
 * baz({ id: "a", val: "alice" }); // "baz: a"
 *
 * baz.impls(); // Set { "c", "a", "b" }
 * ```
 *
 * @param type
 * @param impls
 */
const implementations = (type, rels, ...impls) => {
  impls.length & 1 && (0, _errors.illegalArgs)("expected an even number of implementation items");

  if (rels) {
    for (let parent in rels) {
      for (let fn of rels[parent]) {
        fn.isa(type, parent);
      }
    }
  }

  for (let i = 0; i < impls.length; i += 2) {
    impls[i].add(type, impls[i + 1]);
  }
};

exports.implementations = implementations;
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js"}],"../../node_modules/@thi.ng/defmulti/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _defmulti = require("./defmulti");

Object.keys(_defmulti).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defmulti[key];
    }
  });
});

var _defmultiN = require("./defmulti-n");

Object.keys(_defmultiN).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defmultiN[key];
    }
  });
});

var _impls = require("./impls");

Object.keys(_impls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _impls[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/defmulti/api.js","./defmulti":"../../node_modules/@thi.ng/defmulti/defmulti.js","./defmulti-n":"../../node_modules/@thi.ng/defmulti/defmulti-n.js","./impls":"../../node_modules/@thi.ng/defmulti/impls.js"}],"../../node_modules/@thi.ng/color/parse-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHex = exports.parseCss = void 0;

var _errors = require("@thi.ng/errors");

var _math = require("@thi.ng/math");

var _strings = require("@thi.ng/strings");

var _api = require("./api");

var _hslaRgba = require("./hsla-rgba");

var _intRgba = require("./int-rgba");

var _names = require("./names");

const RE_HEX = /^#?([0-9a-f]{3,8})$/i;
const RE_CSS = /^(rgb|hsl)a?\(\s*([0-9.]+?),\s*([0-9.]+%?),\s*([0-9.]+%?),?\s*([0-9.]+)?\s*\)$/;

const parseCss = col => {
  col = typeof col === "string" ? col : col.deref();

  if (col.charAt(0) === "#") {
    return (0, _intRgba.int32Rgba)([], parseHex(col));
  } else {
    const match = RE_CSS.exec(col);

    if (match) {
      if (match[1] === "rgb" || match[1] === "rgba") {
        return [parseChannel(match[2]), parseChannel(match[3]), parseChannel(match[4]), (0, _strings.maybeParseFloat)(match[5], 1)];
      } else {
        return (0, _hslaRgba.hslaRgba)(null, [(0, _strings.maybeParseFloat)(match[2]) / 360, parseChannel(match[3]), parseChannel(match[4]), (0, _strings.maybeParseFloat)(match[5], 1)]);
      }
    } else {
      const c = _names.CSS_NAMES[col];
      !c && (0, _errors.illegalArgs)(`invalid color: "${col}"`);
      return (0, _intRgba.int32Rgba)([], parseHex(c));
    }
  }
};

exports.parseCss = parseCss;

const parseHex = src => {
  const match = RE_HEX.exec(src);

  if (match) {
    const hex = match[1];

    switch (hex.length) {
      case 3:
        {
          const [r, g, b] = hex;
          return ((0, _strings.maybeParseInt)(`${r}${r}${g}${g}${b}${b}`, 0, 16) | 0xff000000) >>> 0;
        }

      case 4:
        {
          const [a, r, g, b] = hex;
          return (0, _strings.maybeParseInt)(`${a}${a}${r}${r}${g}${g}${b}${b}`, 0, 16) >>> 0;
        }

      case 6:
        return ((0, _strings.maybeParseInt)(hex, 0, 16) | 0xff000000) >>> 0;

      case 8:
        return (0, _strings.maybeParseInt)(hex, 0, 16) >>> 0;

      default:
    }
  }

  return (0, _errors.illegalArgs)(`invalid hex color: "${src}"`);
};

exports.parseHex = parseHex;

const parseChannel = c => (0, _math.clamp01)(c.indexOf("%") > 0 ? (0, _strings.maybeParseFloat)(c) * 0.01 : (0, _strings.maybeParseFloat)(c) * _api.INV8BIT);
},{"@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/strings":"../../node_modules/@thi.ng/strings/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./hsla-rgba":"../../node_modules/@thi.ng/color/hsla-rgba.js","./int-rgba":"../../node_modules/@thi.ng/color/int-rgba.js","./names":"../../node_modules/@thi.ng/color/names.js"}],"../../node_modules/@thi.ng/color/rgba-css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaCss = void 0;

var _math = require("@thi.ng/math");

var _strings = require("@thi.ng/strings");

var _api = require("./api");

var _ensureAlpha = require("./internal/ensure-alpha");

const rgbaCss = src => {
  const r = (0, _math.clamp01)(src[0]) * 0xff + 0.5 | 0;
  const g = (0, _math.clamp01)(src[1]) * 0xff + 0.5 | 0;
  const b = (0, _math.clamp01)(src[2]) * 0xff + 0.5 | 0;
  const a = (0, _ensureAlpha.ensureAlpha)(src[3]);
  return a < 1 ? `rgba(${r},${g},${b},${(0, _api.FF)(a)})` : `#${(0, _strings.U24)(r << 16 | g << 8 | b)}`;
};

exports.rgbaCss = rgbaCss;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/strings":"../../node_modules/@thi.ng/strings/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/luminance-rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.luminanceInt = exports.luminanceRGB = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const luminanceRGB = (rgb, weights = _api.RGB_LUMINANCE) => (0, _vectors.dot3)(rgb, weights);

exports.luminanceRGB = luminanceRGB;

const luminanceInt = rgb => ((rgb >>> 16 & 0xff) * 76 + (rgb >>> 8 & 0xff) * 150 + (rgb & 0xff) * 29) / 0xfe01;

exports.luminanceInt = luminanceInt;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/color/api.js"}],"../../node_modules/@thi.ng/color/rgba-hcva.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaHcva = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

/**
 * Based on:
 * https://github.com/tobspr/GLSL-Color-Spaces/blob/master/ColorSpaces.inc.glsl#L159
 *
 * @param out
 * @param src
 */
const rgbaHcva = (out, src) => {
  out = (0, _clamp.clamp)(out || src, src);
  const p = out[1] < out[2] ? [out[2], out[1], -1, 2 / 3] : [out[1], out[2], 0, -1 / 3];
  const q = out[0] < p[0] ? [p[0], p[1], p[3], out[0]] : [out[0], p[1], p[2], p[0]];
  const c = q[0] - Math.min(q[1], q[3]);
  return (0, _vectors.setC3)(out, (0, _math.clamp01)(Math.abs((q[3] - q[1]) / (6 * c + _math.EPS) + q[2])), (0, _math.clamp01)(c), (0, _math.clamp01)(q[0]));
};

exports.rgbaHcva = rgbaHcva;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/rgba-hcya.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaHcya = void 0;

var _math = require("@thi.ng/math");

var _hueRgba = require("./hue-rgba");

var _luminanceRgb = require("./luminance-rgb");

var _rgbaHcva = require("./rgba-hcva");

/**
 * Ported from:
 * https://github.com/tobspr/GLSL-Color-Spaces/blob/master/ColorSpaces.inc.glsl#L226
 *
 * @param out
 * @param src
 */
const rgbaHcya = (out, src) => {
  const y = (0, _luminanceRgb.luminanceRGB)(src);
  out = (0, _rgbaHcva.rgbaHcva)(out, src);
  const z = (0, _luminanceRgb.luminanceRGB)((0, _hueRgba.hueRgba)([], out[0]));
  out[1] *= y < z ? z / (y + _math.EPS) : (1 - z) / (1 + _math.EPS - y);
  out[2] = y;
  return out;
};

exports.rgbaHcya = rgbaHcya;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./hue-rgba":"../../node_modules/@thi.ng/color/hue-rgba.js","./luminance-rgb":"../../node_modules/@thi.ng/color/luminance-rgb.js","./rgba-hcva":"../../node_modules/@thi.ng/color/rgba-hcva.js"}],"../../node_modules/@thi.ng/color/rgba-hsia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaHsia = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

// https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma
const SQRT32 = _math.SQRT3 / 2;

const rgbaHsia = (out, src) => {
  out = (0, _clamp.clamp)(out || src, src);
  const r = out[0];
  const g = out[1];
  const b = out[2];
  const i = _math.THIRD * (r + g + b);
  return i < 1e-6 || r === g && r === b ? (0, _vectors.setC3)(out, 0, 0, i) : (0, _vectors.setC3)(out, (0, _math.atan2Abs)(SQRT32 * (g - b), 0.5 * (2 * r - g - b)) / _math.TAU, 1 - Math.min(r, g, b) / i, i);
};

exports.rgbaHsia = rgbaHsia;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/rgba-hsla.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaHsla = void 0;

var _math = require("@thi.ng/math");

var _rgbaHcva = require("./rgba-hcva");

const rgbaHsla = (out, src) => {
  out = (0, _rgbaHcva.rgbaHcva)(out, src);
  out[2] -= out[1] * 0.5;
  out[1] /= 1 + _math.EPS - Math.abs(out[2] * 2 - 1);
  return out;
};

exports.rgbaHsla = rgbaHsla;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./rgba-hcva":"../../node_modules/@thi.ng/color/rgba-hcva.js"}],"../../node_modules/@thi.ng/color/rgba-hsva.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaHsva = void 0;

var _math = require("@thi.ng/math");

var _rgbaHcva = require("./rgba-hcva");

const rgbaHsva = (out, src) => {
  out = (0, _rgbaHcva.rgbaHcva)(out, src);
  out[1] /= out[2] + _math.EPS;
  return out;
};

exports.rgbaHsva = rgbaHsva;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./rgba-hcva":"../../node_modules/@thi.ng/color/rgba-hcva.js"}],"../../node_modules/@thi.ng/color/rgba-int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaInt = void 0;

var _math = require("@thi.ng/math");

var _ensureAlpha = require("./internal/ensure-alpha");

const rgbaInt = src => ((0, _ensureAlpha.ensureAlpha)(src[3]) * 0xff + 0.5 << 24 | (0, _math.clamp01)(src[0]) * 0xff + 0.5 << 16 | (0, _math.clamp01)(src[1]) * 0xff + 0.5 << 8 | (0, _math.clamp01)(src[2]) * 0xff + 0.5) >>> 0;

exports.rgbaInt = rgbaInt;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/internal/matrix-ops.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mulM45 = exports.mulV45 = exports.mulV33 = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _ensureAlpha = require("./ensure-alpha");

const mulV33 = (out, mat, src, clampOut = true) => {
  const x = (0, _vectors.dotS3)(mat, src, 0, 0, 3);
  const y = (0, _vectors.dotS3)(mat, src, 1, 0, 3);
  const z = (0, _vectors.dotS3)(mat, src, 2, 0, 3);
  const a = (0, _ensureAlpha.ensureAlpha)(src[3]);
  return clampOut ? (0, _vectors.setC4)(out || src, (0, _math.clamp01)(x), (0, _math.clamp01)(y), (0, _math.clamp01)(z), a) : (0, _vectors.setC4)(out || src, x, y, z, a);
};

exports.mulV33 = mulV33;

const mulV45 = (out, mat, src, clampOut = true) => {
  out = (0, _vectors.setC4)(out || src, src[0], src[1], src[2], (0, _ensureAlpha.ensureAlpha)(src[3]));
  const x = (0, _vectors.dotS4)(out, mat, 0, 0) + mat[4];
  const y = (0, _vectors.dotS4)(out, mat, 0, 5) + mat[9];
  const z = (0, _vectors.dotS4)(out, mat, 0, 10) + mat[14];
  const w = (0, _vectors.dotS4)(out, mat, 0, 15) + mat[19];
  return clampOut ? (0, _vectors.setC4)(out, (0, _math.clamp01)(x), (0, _math.clamp01)(y), (0, _math.clamp01)(z), (0, _math.clamp01)(w)) : (0, _vectors.setC4)(out, x, y, z, w);
};

exports.mulV45 = mulV45;

const mulM45 = (a, b) => [(0, _vectors.dotS4)(b, a, 0, 0, 1, 5), (0, _vectors.dotS4)(b, a, 0, 1, 1, 5), (0, _vectors.dotS4)(b, a, 0, 2, 1, 5), (0, _vectors.dotS4)(b, a, 0, 3, 1, 5), (0, _vectors.dotS4)(b, a, 0, 4, 1, 5) + b[4], (0, _vectors.dotS4)(b, a, 5, 0, 1, 5), (0, _vectors.dotS4)(b, a, 5, 1, 1, 5), (0, _vectors.dotS4)(b, a, 5, 2, 1, 5), (0, _vectors.dotS4)(b, a, 5, 3, 1, 5), (0, _vectors.dotS4)(b, a, 5, 4, 1, 5) + b[9], (0, _vectors.dotS4)(b, a, 10, 0, 1, 5), (0, _vectors.dotS4)(b, a, 10, 1, 1, 5), (0, _vectors.dotS4)(b, a, 10, 2, 1, 5), (0, _vectors.dotS4)(b, a, 10, 3, 1, 5), (0, _vectors.dotS4)(b, a, 10, 4, 1, 5) + b[14], (0, _vectors.dotS4)(b, a, 15, 0, 1, 5), (0, _vectors.dotS4)(b, a, 15, 1, 1, 5), (0, _vectors.dotS4)(b, a, 15, 2, 1, 5), (0, _vectors.dotS4)(b, a, 15, 3, 1, 5), (0, _vectors.dotS4)(b, a, 15, 4, 1, 5) + b[19]];

exports.mulM45 = mulM45;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/rgba-xyza.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaXyza = void 0;

var _api = require("./api");

var _clamp = require("./clamp");

var _ensureAlpha = require("./internal/ensure-alpha");

var _matrixOps = require("./internal/matrix-ops");

/**
 * https://en.wikipedia.org/wiki/CIE_1931_color_space
 *
 * @param out
 * @param src
 */
const rgbaXyza = (out, src) => {
  out = (0, _matrixOps.mulV33)(null, _api.RGB_XYZ, (0, _clamp.clamp)(out || src, src), false);
  out[3] = (0, _ensureAlpha.ensureAlpha)(src[3]);
  return out;
};

exports.rgbaXyza = rgbaXyza;
},{"./api":"../../node_modules/@thi.ng/color/api.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js","./internal/matrix-ops":"../../node_modules/@thi.ng/color/internal/matrix-ops.js"}],"../../node_modules/@thi.ng/color/rgba-ycbcra.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaYcbcra = void 0;

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

var _luminanceRgb = require("./luminance-rgb");

const rgbaYcbcra = (out, src) => {
  out = (0, _clamp.clamp)(out || src, src);
  const y = (0, _luminanceRgb.luminanceRGB)(src);
  return (0, _vectors.setC3)(out, y, (src[2] - y) * 0.565, (src[0] - y) * 0.713);
};

exports.rgbaYcbcra = rgbaYcbcra;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js","./luminance-rgb":"../../node_modules/@thi.ng/color/luminance-rgb.js"}],"../../node_modules/@thi.ng/color/xyza-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xyzaRgba = void 0;

var _api = require("./api");

var _matrixOps = require("./internal/matrix-ops");

/**
 * https://en.wikipedia.org/wiki/CIE_1931_color_space
 *
 * @param out
 * @param src
 */
const xyzaRgba = (out, src) => (0, _matrixOps.mulV33)(out || src, _api.XYZ_RGB, src);

exports.xyzaRgba = xyzaRgba;
},{"./api":"../../node_modules/@thi.ng/color/api.js","./internal/matrix-ops":"../../node_modules/@thi.ng/color/internal/matrix-ops.js"}],"../../node_modules/@thi.ng/color/ycbcra-rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ycbcraRgba = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _ensureAlpha = require("./internal/ensure-alpha");

const ycbcraRgba = (out, src) => {
  const y = src[0];
  const b = src[1];
  const r = src[2];
  return (0, _vectors.setC4)(out || [], (0, _math.clamp01)(y + 1.403 * r), (0, _math.clamp01)(y - 0.344 * b - 0.714 * r), (0, _math.clamp01)(y + 1.77 * b), (0, _ensureAlpha.ensureAlpha)(src[3]));
};

exports.ycbcraRgba = ycbcraRgba;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/convert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asCSS = asCSS;
exports.asRGBA = asRGBA;
exports.asHCYA = asHCYA;
exports.asHSIA = asHSIA;
exports.asHSLA = asHSLA;
exports.asHSVA = asHSVA;
exports.asXYZA = asXYZA;
exports.asYCbCrA = asYCbCrA;
exports.convert = void 0;

var _defmulti = require("@thi.ng/defmulti");

var _errors = require("@thi.ng/errors");

var _hcyaRgba = require("./hcya-rgba");

var _hsiaRgba = require("./hsia-rgba");

var _hslaCss = require("./hsla-css");

var _hslaHsva = require("./hsla-hsva");

var _hslaRgba = require("./hsla-rgba");

var _hsvaCss = require("./hsva-css");

var _hsvaHsla = require("./hsva-hsla");

var _hsvaRgba = require("./hsva-rgba");

var _intCss = require("./int-css");

var _intRgba = require("./int-rgba");

var _parseCss = require("./parse-css");

var _rgbaCss = require("./rgba-css");

var _rgbaHcya = require("./rgba-hcya");

var _rgbaHsia = require("./rgba-hsia");

var _rgbaHsla = require("./rgba-hsla");

var _rgbaHsva = require("./rgba-hsva");

var _rgbaInt = require("./rgba-int");

var _rgbaXyza = require("./rgba-xyza");

var _rgbaYcbcra = require("./rgba-ycbcra");

var _xyzaRgba = require("./xyza-rgba");

var _ycbcraRgba = require("./ycbcra-rgba");

const convert = (0, _defmulti.defmulti)((col, mdest, msrc) => col.mode !== undefined ? `${mdest}-${col.mode}` : msrc !== undefined ? `${mdest}-${msrc}` : (0, _errors.illegalArgs)(`missing src color mode`));
exports.convert = convert;
convert.add(_defmulti.DEFAULT, (col, mdest, msrc) => col.mode !== undefined && col.mode === mdest || mdest === msrc ? col : (0, _errors.illegalArgs)(`missing conversion for mode ${msrc} -> ${mdest}`));

function asCSS(col, mode) {
  return convert(col, 6
  /* CSS */
  , mode);
}

function asRGBA(col, mode) {
  return convert(col, 0
  /* RGBA */
  , mode);
}

function asHCYA(col, mode) {
  return convert(col, 1
  /* HCYA */
  , mode);
}

function asHSIA(col, mode) {
  return convert(col, 4
  /* HSIA */
  , mode);
}

function asHSLA(col, mode) {
  return convert(col, 3
  /* HSLA */
  , mode);
}

function asHSVA(col, mode) {
  return convert(col, 2
  /* HSVA */
  , mode);
}

function asXYZA(col, mode) {
  return convert(col, 7
  /* XYZA */
  , mode);
}

function asYCbCrA(col, mode) {
  return convert(col, 8
  /* YCBCRA */
  , mode);
}

const defConversion = (dest, src, impl) => convert.add(`${dest}-${src}`, impl);

const defConversions = (src, toRGBA, ...dest) => {
  defConversion(0
  /* RGBA */
  , src, x => toRGBA([], x));
  dest.forEach(id => defConversion(id, src, x => convert(toRGBA([], x), id, 0
  /* RGBA */
  )));
}; // CSS


defConversion(0
/* RGBA */
, 6
/* CSS */
, x => (0, _parseCss.parseCss)(x));
[1
/* HCYA */
, 4
/* HSIA */
, 3
/* HSLA */
, 2
/* HSVA */
, 5
/* INT32 */
, 7
/* XYZA */
, 8
/* YCBCRA */
].forEach(id => defConversion(id, 6
/* CSS */
, x => convert((0, _parseCss.parseCss)(x), id, 0
/* RGBA */
))); // Int

defConversions(5
/* INT32 */
, _intRgba.int32Rgba, 1
/* HCYA */
, 4
/* HSIA */
, 3
/* HSLA */
, 2
/* HSVA */
, 7
/* XYZA */
, 8
/* YCBCRA */
);
defConversion(6
/* CSS */
, 5
/* INT32 */
, x => (0, _intCss.int32Css)(x)); // HCYA

defConversions(1
/* HCYA */
, _hcyaRgba.hcyaRgba, 6
/* CSS */
, 5
/* INT32 */
, 3
/* HSLA */
, 2
/* HSVA */
, 7
/* XYZA */
, 8
/* YCBCRA */
); // HSIA

defConversions(4
/* HSIA */
, _hsiaRgba.hsiaRgba, 6
/* CSS */
, 5
/* INT32 */
, 1
/* HCYA */
, 3
/* HSLA */
, 2
/* HSVA */
, 7
/* XYZA */
, 8
/* YCBCRA */
); // HSLA

defConversions(3
/* HSLA */
, _hslaRgba.hslaRgba, 1
/* HCYA */
, 4
/* HSIA */
, 5
/* INT32 */
, 7
/* XYZA */
, 8
/* YCBCRA */
);
defConversion(6
/* CSS */
, 3
/* HSLA */
, x => (0, _hslaCss.hslaCss)(x));
defConversion(2
/* HSVA */
, 3
/* HSLA */
, x => (0, _hslaHsva.hslaHsva)([], x)); // HSVA

defConversions(2
/* HSVA */
, _hsvaRgba.hsvaRgba, 1
/* HCYA */
, 4
/* HSIA */
, 5
/* INT32 */
, 7
/* XYZA */
, 8
/* YCBCRA */
);
defConversion(6
/* CSS */
, 2
/* HSVA */
, x => (0, _hsvaCss.hsvaCss)(x));
defConversion(3
/* HSLA */
, 2
/* HSVA */
, x => (0, _hsvaHsla.hsvaHsla)([], x)); // RGBA

[[1
/* HCYA */
, _rgbaHcya.rgbaHcya], [4
/* HSIA */
, _rgbaHsia.rgbaHsia], [3
/* HSLA */
, _rgbaHsla.rgbaHsla], [2
/* HSVA */
, _rgbaHsva.rgbaHsva], [7
/* XYZA */
, _rgbaXyza.rgbaXyza], [8
/* YCBCRA */
, _rgbaYcbcra.rgbaYcbcra]].forEach(([id, fn]) => defConversion(id, 0
/* RGBA */
, x => fn([], x)));
defConversion(6
/* CSS */
, 0
/* RGBA */
, x => (0, _rgbaCss.rgbaCss)(x));
defConversion(5
/* INT32 */
, 0
/* RGBA */
, x => (0, _rgbaInt.rgbaInt)(x)); // XYZA

defConversions(7
/* XYZA */
, _xyzaRgba.xyzaRgba, 6
/* CSS */
, 1
/* HCYA */
, 4
/* HSIA */
, 3
/* HSLA */
, 2
/* HSVA */
, 5
/* INT32 */
, 8
/* YCBCRA */
); // YCbCr

defConversions(8
/* YCBCRA */
, _ycbcraRgba.ycbcraRgba, 6
/* CSS */
, 1
/* HCYA */
, 4
/* HSIA */
, 3
/* HSLA */
, 2
/* HSVA */
, 5
/* INT32 */
, 7
/* XYZA */
);
},{"@thi.ng/defmulti":"../../node_modules/@thi.ng/defmulti/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./hcya-rgba":"../../node_modules/@thi.ng/color/hcya-rgba.js","./hsia-rgba":"../../node_modules/@thi.ng/color/hsia-rgba.js","./hsla-css":"../../node_modules/@thi.ng/color/hsla-css.js","./hsla-hsva":"../../node_modules/@thi.ng/color/hsla-hsva.js","./hsla-rgba":"../../node_modules/@thi.ng/color/hsla-rgba.js","./hsva-css":"../../node_modules/@thi.ng/color/hsva-css.js","./hsva-hsla":"../../node_modules/@thi.ng/color/hsva-hsla.js","./hsva-rgba":"../../node_modules/@thi.ng/color/hsva-rgba.js","./int-css":"../../node_modules/@thi.ng/color/int-css.js","./int-rgba":"../../node_modules/@thi.ng/color/int-rgba.js","./parse-css":"../../node_modules/@thi.ng/color/parse-css.js","./rgba-css":"../../node_modules/@thi.ng/color/rgba-css.js","./rgba-hcya":"../../node_modules/@thi.ng/color/rgba-hcya.js","./rgba-hsia":"../../node_modules/@thi.ng/color/rgba-hsia.js","./rgba-hsla":"../../node_modules/@thi.ng/color/rgba-hsla.js","./rgba-hsva":"../../node_modules/@thi.ng/color/rgba-hsva.js","./rgba-int":"../../node_modules/@thi.ng/color/rgba-int.js","./rgba-xyza":"../../node_modules/@thi.ng/color/rgba-xyza.js","./rgba-ycbcra":"../../node_modules/@thi.ng/color/rgba-ycbcra.js","./xyza-rgba":"../../node_modules/@thi.ng/color/xyza-rgba.js","./ycbcra-rgba":"../../node_modules/@thi.ng/color/ycbcra-rgba.js"}],"../../node_modules/@thi.ng/color/resolve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveAsCSS = void 0;

var _checks = require("@thi.ng/checks");

var _convert = require("./convert");

/**
 * Takes a color in one of the following formats and tries to convert it
 * to a CSS string:
 *
 * - any IColor instance
 * - raw RGBA vector
 * - number ((A)RGB int)
 * - string (unchanged)
 *
 * @param col
 */
const resolveAsCSS = col => (0, _checks.isArrayLike)(col) ? (0, _checks.isNumber)(col.mode) ? (0, _convert.asCSS)(col) : (0, _convert.asCSS)(col, 0
/* RGBA */
) : (0, _checks.isNumber)(col) ? (0, _convert.asCSS)(col, 5
/* INT32 */
) : col;

exports.resolveAsCSS = resolveAsCSS;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./convert":"../../node_modules/@thi.ng/color/convert.js"}],"../../node_modules/@thi.ng/color/srgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srgbaRgba = exports.rgbaSrgba = exports.srgbLinear = exports.linearSrgb = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

var _ensureAlpha = require("./internal/ensure-alpha");

/**
 * Maps a single linear RGB channel value to sRGB.
 *
 * https://en.wikipedia.org/wiki/SRGB
 *
 * @param x
 */
const linearSrgb = x => x <= 0.0031308 ? 12.92 * x : (1.0 + _api.SRGB_ALPHA) * Math.pow(x, 1.0 / 2.4) - _api.SRGB_ALPHA;
/**
 * Maps a single linear sRGB channel value to linear RGB.
 *
 * https://en.wikipedia.org/wiki/SRGB
 *
 * @param x
 */


exports.linearSrgb = linearSrgb;

const srgbLinear = x => x <= 0.04045 ? x / 12.92 : Math.pow((x + _api.SRGB_ALPHA) / (1 + _api.SRGB_ALPHA), 2.4);
/**
 * Converts linear RGB to sRGB.
 *
 * @param out
 * @param src
 */


exports.srgbLinear = srgbLinear;

const rgbaSrgba = (out, src) => (0, _vectors.setC4)(out || src, linearSrgb(src[0]), linearSrgb(src[1]), linearSrgb(src[2]), (0, _ensureAlpha.ensureAlpha)(src[3]));
/**
 * Converts sRGB to linear RGB.
 *
 * @param out
 * @param src
 */


exports.rgbaSrgba = rgbaSrgba;

const srgbaRgba = (out, src) => (0, _vectors.setC4)(out || src, srgbLinear(src[0]), srgbLinear(src[1]), srgbLinear(src[2]), (0, _ensureAlpha.ensureAlpha)(src[3]));

exports.srgbaRgba = srgbaRgba;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./internal/ensure-alpha":"../../node_modules/@thi.ng/color/internal/ensure-alpha.js"}],"../../node_modules/@thi.ng/color/int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Int32 = exports.int24 = exports.int32 = void 0;

/**
 * Returns new `Int32` wrapping given ARGB int.
 *
 * @param rgba
 */
const int32 = rgba => new Int32(rgba);
/**
 * Returns new `Int32` wrapping given 24bit RGB color and setting alpha
 * channel set to 100% opaque.
 *
 * @param rgb
 */


exports.int32 = int32;

const int24 = rgb => new Int32(rgb & 0xffffff | 0xff000000);

exports.int24 = int24;

class Int32 {
  constructor(col) {
    this.value = col >>> 0;
  }

  get mode() {
    return 5
    /* INT32 */
    ;
  }

  copy() {
    return new Int32(this.value);
  }

  deref() {
    return this.value;
  }

}

exports.Int32 = Int32;
},{}],"../../node_modules/@thi.ng/color/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSS = exports.css = void 0;

const css = col => new CSS(col);

exports.css = css;

class CSS {
  constructor(col) {
    this.value = col;
  }

  get mode() {
    return 6
    /* CSS */
    ;
  }

  copy() {
    return new CSS(this.value);
  }

  deref() {
    return this.value;
  }

}

exports.CSS = CSS;
},{}],"../../node_modules/@thi.ng/color/internal/acolor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AColor = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

class AColor {
  constructor(buf, offset = 0, stride = 1) {
    this.buf = buf || [0, 0, 0, 0];
    this.offset = offset;
    this.stride = stride;
  }

  [Symbol.iterator]() {
    return (0, _vectors.values)(this.buf, 4, this.offset, this.stride);
  }

  get length() {
    return 4;
  }

  deref() {
    return [this[0], this[1], this[2], this[3]];
  }

  eqDelta(o, eps = _math.EPS) {
    return (0, _vectors.eqDelta4)(this, o, eps);
  }

}

exports.AColor = AColor;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/color/internal/ensure-args.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureArgs = void 0;

const ensureArgs = args => {
  if (typeof args[0] === "number") {
    switch (args.length) {
      case 1:
        return args.push(0, 0, 1), [args];

      case 2:
        return args.push(0, 1), [args];

      case 3:
        return args.push(1), [args];

      default:
        return [args];
    }
  }

  return args;
};

exports.ensureArgs = ensureArgs;
},{}],"../../node_modules/@thi.ng/color/hcya.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hcya = hcya;
exports.HCYA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function hcya(...args) {
  return new HCYA(...(0, _ensureArgs.ensureArgs)(args));
}

class HCYA extends _acolor.AColor {
  get mode() {
    return 1
    /* HCYA */
    ;
  }

  copy() {
    return new HCYA(this.deref());
  }

  copyView() {
    return new HCYA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new HCYA();
  }

}

exports.HCYA = HCYA;
(0, _vectors.declareIndices)(HCYA.prototype, ["h", "c", "y", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/hsia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsia = hsia;
exports.HSIA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function hsia(...args) {
  return new HSIA(...(0, _ensureArgs.ensureArgs)(args));
}

class HSIA extends _acolor.AColor {
  get mode() {
    return 4
    /* HSIA */
    ;
  }

  copy() {
    return new HSIA(this.deref());
  }

  copyView() {
    return new HSIA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new HSIA();
  }

}

exports.HSIA = HSIA;
(0, _vectors.declareIndices)(HSIA.prototype, ["h", "s", "i", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/hsla.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsla = hsla;
exports.HSLA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function hsla(...args) {
  return new HSLA(...(0, _ensureArgs.ensureArgs)(args));
}

class HSLA extends _acolor.AColor {
  get mode() {
    return 3
    /* HSLA */
    ;
  }

  copy() {
    return new HSLA(this.deref());
  }

  copyView() {
    return new HSLA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new HSLA();
  }

}

exports.HSLA = HSLA;
(0, _vectors.declareIndices)(HSLA.prototype, ["h", "s", "l", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/hsva.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsva = hsva;
exports.HSVA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function hsva(...args) {
  return new HSVA(...(0, _ensureArgs.ensureArgs)(args));
}

class HSVA extends _acolor.AColor {
  get mode() {
    return 2
    /* HSVA */
    ;
  }

  copy() {
    return new HSVA(this.deref());
  }

  copyView() {
    return new HSVA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new HSVA();
  }

}

exports.HSVA = HSVA;
(0, _vectors.declareIndices)(HSVA.prototype, ["h", "s", "v", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgba = rgba;
exports.RGBA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function rgba(...args) {
  return new RGBA(...(0, _ensureArgs.ensureArgs)(args));
}

class RGBA extends _acolor.AColor {
  get mode() {
    return 0
    /* RGBA */
    ;
  }

  copy() {
    return new RGBA(this.deref());
  }

  copyView() {
    return new RGBA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new RGBA();
  }

}

exports.RGBA = RGBA;
(0, _vectors.declareIndices)(RGBA.prototype, ["r", "g", "b", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/xyza.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xyza = xyza;
exports.XYZA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function xyza(...args) {
  return new XYZA(...(0, _ensureArgs.ensureArgs)(args));
}

class XYZA extends _acolor.AColor {
  get mode() {
    return 7
    /* XYZA */
    ;
  }

  copy() {
    return new XYZA(this.deref());
  }

  copyView() {
    return new XYZA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new XYZA();
  }

}

exports.XYZA = XYZA;
(0, _vectors.declareIndices)(XYZA.prototype, ["x", "y", "z", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/ycbcr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ycbcra = ycbcra;
exports.YCbCrA = void 0;

var _vectors = require("@thi.ng/vectors");

var _acolor = require("./internal/acolor");

var _ensureArgs = require("./internal/ensure-args");

function ycbcra(...args) {
  return new YCbCrA(...(0, _ensureArgs.ensureArgs)(args));
}

class YCbCrA extends _acolor.AColor {
  get mode() {
    return 8
    /* YCBCRA */
    ;
  }

  copy() {
    return new YCbCrA(this.deref());
  }

  copyView() {
    return new YCbCrA(this.buf, this.offset, this.stride);
  }

  empty() {
    return new YCbCrA();
  }

}

exports.YCbCrA = YCbCrA;
(0, _vectors.declareIndices)(YCbCrA.prototype, ["y", "b", "r", "a"]);
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./internal/acolor":"../../node_modules/@thi.ng/color/internal/acolor.js","./internal/ensure-args":"../../node_modules/@thi.ng/color/internal/ensure-args.js"}],"../../node_modules/@thi.ng/color/alpha.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlpha = exports.alpha = void 0;

var _vectors = require("@thi.ng/vectors");

const alpha = src => src[3] !== undefined ? src[3] : 1;

exports.alpha = alpha;

const setAlpha = (out, src, alpha) => (0, _vectors.setC4)(out || src, src[0], src[1], src[2], alpha);

exports.setAlpha = setAlpha;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/color/closest-hue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closestPrimaryHue = exports.closestHue = void 0;

var _ensureHue = require("./internal/ensure-hue");

/**
 * Returns the `Hue` constant of the closest of 12 defined hues.
 *
 * @param h hue
 */
const closestHue = h => Math.round((0, _ensureHue.ensureHue)(h) * 12) % 12;
/**
 * Returns the `Hue` constant of the closest primary or secondary hue.
 *
 * @param h
 */


exports.closestHue = closestHue;

const closestPrimaryHue = h => Math.round((0, _ensureHue.ensureHue)(h) * 12) % 12 & 0xe;

exports.closestPrimaryHue = closestPrimaryHue;
},{"./internal/ensure-hue":"../../node_modules/@thi.ng/color/internal/ensure-hue.js"}],"../../node_modules/@thi.ng/color/cosine-gradients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiCosineGradient = exports.cosineCoeffs = exports.cosineGradient = exports.cosineColor = exports.GRADIENTS = void 0;

var _compose = require("@thi.ng/compose");

var _math = require("@thi.ng/math");

var _transducers = require("@thi.ng/transducers");

var _clamp = require("./clamp");

// see http://dev.thi.ng/gradients/ - unlike the clojure version, these
// presets are for RGBA (though the alpha channel is configured to
// always be 1.0)
const GRADIENTS = {
  "blue-cyan": [[0, 0.5, 0.5, 1], [0, 0.5, 0.5, 0], [0, 0.5, 0.3333, 0], [0, 0.5, 0.6666, 0]],
  "blue-magenta-orange": [[0.938, 0.328, 0.718, 1], [0.659, 0.438, 0.328, 0], [0.388, 0.388, 0.296, 0], [2.538, 2.478, 0.168, 0]],
  "blue-white-red": [[0.66, 0.56, 0.68, 1], [0.718, 0.438, 0.72, 0], [0.52, 0.8, 0.52, 0], [-0.43, -0.397, -0.083, 0]],
  "cyan-magenta": [[0.61, 0.498, 0.65, 1], [0.388, 0.498, 0.35, 0], [0.53, 0.498, 0.62, 0], [3.438, 3.012, 4.025, 0]],
  "green-blue-orange": [[0.892, 0.725, 0, 1], [0.878, 0.278, 0.725, 0], [0.332, 0.518, 0.545, 0], [2.44, 5.043, 0.732, 0]],
  "green-cyan": [[0, 0.5, 0.5, 1], [0, 0.5, 0.5, 0], [0, 0.3333, 0.5, 0], [0, 0.6666, 0.5, 0]],
  "green-magenta": [[0.6666, 0.5, 0.5, 1], [0.5, 0.6666, 0.5, 0], [0.6666, 0.666, 0.5, 0], [0.2, 0, 0.5, 0]],
  "green-red": [[0.5, 0.5, 0, 1], [0.5, 0.5, 0, 0], [0.5, 0.5, 0, 0], [0.5, 0, 0, 0]],
  "magenta-green": [[0.59, 0.811, 0.12, 1], [0.41, 0.392, 0.59, 0], [0.94, 0.548, 0.278, 0], [-4.242, -6.611, -4.045, 0]],
  "orange-blue": [[0.5, 0.5, 0.5, 1], [0.5, 0.5, 0.5, 0], [0.8, 0.8, 0.5, 0], [0, 0.2, 0.5, 0]],
  "orange-magenta-blue": [[0.821, 0.328, 0.242, 1], [0.659, 0.481, 0.896, 0], [0.612, 0.34, 0.296, 0], [2.82, 3.026, -0.273, 0]],
  rainbow1: [[0.5, 0.5, 0.5, 1], [0.5, 0.5, 0.5, 0], [1.0, 1.0, 1.0, 0], [0, 0.3333, 0.6666, 0]],
  rainbow2: [[0.5, 0.5, 0.5, 1], [0.666, 0.666, 0.666, 0], [1.0, 1.0, 1.0, 0], [0, 0.3333, 0.6666, 0]],
  rainbow3: [[0.5, 0.5, 0.5, 1], [0.75, 0.75, 0.75, 0], [1.0, 1.0, 1.0, 0], [0, 0.3333, 0.6666, 0]],
  rainbow4: [[0.5, 0.5, 0.5, 1], [1, 1, 1, 0], [1.0, 1.0, 1.0, 0], [0, 0.3333, 0.6666, 0]],
  "red-blue": [[0.5, 0, 0.5, 1], [0.5, 0, 0.5, 0], [0.5, 0, 0.5, 0], [0, 0, 0.5, 0]],
  "yellow-green-blue": [[0.65, 0.5, 0.31, 1], [-0.65, 0.5, 0.6, 0], [0.333, 0.278, 0.278, 0], [0.66, 0, 0.667, 0]],
  "yellow-magenta-cyan": [[1, 0.5, 0.5, 1], [0.5, 0.5, 0.5, 0], [0.75, 1.0, 0.6666, 0], [0.8, 1.0, 0.3333, 0]],
  "yellow-purple-magenta": [[0.731, 1.098, 0.192, 1], [0.358, 1.09, 0.657, 0], [1.077, 0.36, 0.328, 0], [0.965, 2.265, 0.837, 0]],
  "yellow-red": [[0.5, 0.5, 0, 1], [0.5, 0.5, 0, 0], [0.1, 0.5, 0, 0], [0, 0, 0, 0]]
};
exports.GRADIENTS = GRADIENTS;

const cosineColor = (spec, t) => (0, _transducers.transduce)((0, _transducers.map)(([a, b, c, d]) => (0, _math.clamp01)(a + b * Math.cos(_math.TAU * (c * t + d)))), (0, _transducers.push)(), (0, _transducers.zip)(...spec));

exports.cosineColor = cosineColor;

const cosineGradient = (n, spec) => (0, _transducers.transduce)((0, _transducers.map)((0, _compose.partial)(cosineColor, spec)), (0, _transducers.push)(), (0, _transducers.normRange)(n - 1));
/**
 * Returns coefficients to produce a cosine gradient between the two
 * given RGBA colors.
 *
 * @param from
 * @param to
 */


exports.cosineGradient = cosineGradient;

const cosineCoeffs = (from, to) => {
  from = (0, _clamp.clamp)([], from);
  to = (0, _clamp.clamp)([], to);
  const amp = [...(0, _transducers.map)(([a, b]) => 0.5 * (a - b), (0, _transducers.zip)(from, to))];
  return [[...(0, _transducers.map)(([s, a]) => s - a, (0, _transducers.zip)(from, amp))], amp, [-0.5, -0.5, -0.5, -0.5], [0, 0, 0, 0]];
};
/**
 * Multi-color cosine gradient generator using RGBA color stops. Returns
 * an array of `n+1` color samples.
 *
 * ```
 * multiCosineGradient(
 *   // num colors to produce
 *   10,
 *   // gradient stops (normalized positions)
 *   [0.1, [1, 0, 0, 1]], [0.5, [0, 1, 0, 1]], [0.9, [0, 0, 1, 1]]
 * )
 * ```
 *
 * @see thi.ng/transducers/iter/interpolate
 *
 * @param n
 * @param stops
 */


exports.cosineCoeffs = cosineCoeffs;

const multiCosineGradient = (n, ...stops) => [...(0, _transducers.interpolate)(n, 0, 1, cosineCoeffs, cosineColor, ...stops)];

exports.multiCosineGradient = multiCosineGradient;
},{"@thi.ng/compose":"../../node_modules/@thi.ng/compose/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/invert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertInt = exports.invertRGB = void 0;

var _vectors = require("@thi.ng/vectors");

var _clamp = require("./clamp");

/**
 * Inverts the RGB channels of an RGBA color.
 *
 * @param out
 * @param src
 */
const invertRGB = (out, src) => (out = (0, _clamp.clamp)(out || src, src), (0, _vectors.sub3)(out, _vectors.ONE3, out));
/**
 * Inverts the lowest 24 bits of an ARGB int.
 *
 * @param src
 */


exports.invertRGB = invertRGB;

const invertInt = src => src ^ 0xffffff;

exports.invertInt = invertInt;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js"}],"../../node_modules/@thi.ng/color/luminance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.luminance = void 0;

var _defmulti = require("@thi.ng/defmulti");

var _errors = require("@thi.ng/errors");

var _convert = require("./convert");

var _luminanceRgb = require("./luminance-rgb");

/**
 * Multi-method to compute relative luminance from any supported input
 * color format. Unless color already is an RGBA or ARGB int (plain or
 * wrapped), it will first be converted to RGBA.
 */
const luminance = (0, _defmulti.defmulti)((col, mode) => col.mode !== undefined ? col.mode : mode !== undefined ? mode : (0, _errors.illegalArgs)(`missing color mode`));
exports.luminance = luminance;
luminance.add(0
/* RGBA */
, x => (0, _luminanceRgb.luminanceRGB)(x));
luminance.add(5
/* INT32 */
, x => (0, _luminanceRgb.luminanceInt)(typeof x === "number" ? x : x.deref()));
luminance.add(_defmulti.DEFAULT, (x, mode) => (0, _luminanceRgb.luminanceRGB)((0, _convert.convert)(x, 0
/* RGBA */
, mode)));
},{"@thi.ng/defmulti":"../../node_modules/@thi.ng/defmulti/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./convert":"../../node_modules/@thi.ng/color/convert.js","./luminance-rgb":"../../node_modules/@thi.ng/color/luminance-rgb.js"}],"../../node_modules/@thi.ng/color/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixAlpha = exports.mix = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

const mix = _vectors.mixN4;
exports.mix = mix;

const mixAlpha = (out, a, b) => (0, _vectors.setC4)(out || a, (0, _math.mix)(a[0], b[0], a[3]), (0, _math.mix)(a[0], b[0], a[3]), (0, _math.mix)(a[0], b[0], a[3]), a[3]);

exports.mixAlpha = mixAlpha;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/color/transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.luminanceAlpha = exports.grayscale = exports.tint = exports.sepia = exports.temperature = exports.hueRotate = exports.saturation = exports.exposure = exports.contrast = exports.brightness = exports.subtract = exports.IDENTITY = exports.concat = exports.transform = void 0;

var _math = require("@thi.ng/math");

var _api = require("./api");

var _matrixOps = require("./internal/matrix-ops");

// https://drafts.fxtf.org/filter-effects/#feColorMatrixElement
const S0 = 0.072;
const S1 = 0.213;
const S2 = 0.285;
const S3 = 0.715;
const S4 = 0.787;
const S5 = 0.928;
const S6 = 0.14;
const S7 = 0.143;
const S8 = 0.283;
/**
 * Transforms `src` RGBA color with given matrix and stores result in
 * `out` (writes back to `src` if `out` is `null` or `undefined`).
 * Unless `clampOut` is false, the result color will be clamped to `[0,1]`
 * interval.
 *
 * @param out
 * @param mat
 * @param src
 * @param clampOut
 */

const transform = _matrixOps.mulV45;
/**
 * Concatenates given color matrices by pairwise multiplying them in
 * left-right order. Returns combined result matrix to be used with
 * `transform()`.
 *
 * Note: Using `concat()` is the recommended way when applying multiple
 * color transformations in sequence. Since the transforms are combined
 * into a single matrix, it is faster than multiple, individual
 * `transform()` calls and will also produce more correct results, since
 * result color clamping is only applied once at the end (by default,
 * unless disabled).
 *
 * @see transform
 * @param mat
 * @param xs
 */

exports.transform = transform;

const concat = (mat, ...xs) => xs.reduce(_matrixOps.mulM45, mat); // prettier-ignore


exports.concat = concat;
const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
/**
 * Returns a transformation matrix which subtracts user color from given
 * `src` color. With the default color white, this results in the
 * inverted color. Does NOT modify alpha channel.
 *
 * @param src
 */
// prettier-ignore

exports.IDENTITY = IDENTITY;

const subtract = (src = _api.WHITE) => [-1, 0, 0, 0, src[0], 0, -1, 0, 0, src[1], 0, 0, -1, 0, src[2], 0, 0, 0, 1, 0];
/**
 * Returns a transformation matrix which adds the given constant offset
 * `x` to RGB channels. Does NOT modify alpha channel.
 *
 * If `x < 0` results in darker color.
 * If `x > 0` results in brighter color.
 *
 * @param x
 */
// prettier-ignore


exports.subtract = subtract;

const brightness = x => [1, 0, 0, 0, x, 0, 1, 0, 0, x, 0, 0, 1, 0, x, 0, 0, 0, 1, 0]; // prettier-ignore


exports.brightness = brightness;

const contrast = (x, o = 0.5 * (1 - x)) => [x, 0, 0, 0, o, 0, x, 0, 0, o, 0, 0, x, 0, o, 0, 0, 0, 1, 0]; // prettier-ignore


exports.contrast = contrast;

const exposure = x => [x, 0, 0, 0, 0, 0, x, 0, 0, 0, 0, 0, x, 0, 0, 0, 0, 0, 1, 0]; // prettier-ignore


exports.exposure = exposure;

const saturation = x => [S1 + S4 * x, S3 - S3 * x, S0 - S0 * x, 0, 0, S1 - S1 * x, S3 + S2 * x, S0 - S0 * x, 0, 0, S1 - S1 * x, S3 - S3 * x, S0 + S5 * x, 0, 0, 0, 0, 0, 1, 0]; // prettier-ignore


exports.saturation = saturation;

const hueRotate = theta => {
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return [S1 + c * S4 - s * S1, S3 - c * S3 - s * S3, S0 - c * S0 + s * S5, 0, 0, S1 - c * S1 + s * S7, S3 + c * S2 + s * S6, S0 - c * S0 - s * S8, 0, 0, S1 - c * S1 - s * S4, S3 - c * S3 + s * S3, S0 + c * S5 + s * S0, 0, 0, 0, 0, 0, 1, 0];
}; // prettier-ignore


exports.hueRotate = hueRotate;

const temperature = x => [1 + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 - x, 0, 0, 0, 0, 0, 1, 0]; // prettier-ignore


exports.temperature = temperature;

const sepia = (x = 1) => [(0, _math.mix)(1, 0.393, x), 0.769 * x, 0.189 * x, 0, 0, 0.349 * x, (0, _math.mix)(1, 0.686, x), 0.168 * x, 0, 0, 0.272 * x, 0.534 * x, (0, _math.mix)(1, 0.131, x), 0, 0, 0, 0, 0, 1, 0]; // prettier-ignore


exports.sepia = sepia;

const tint = x => [1 + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 + x, 0, 0, 0, 0, 0, 1, 0];
/**
 * Returns transformation matrix which computes luminance of user color
 * (optionally with custom coefficients). Does NOT modify alpha channel.
 *
 * @param x
 * @param coeffs
 */
// prettier-ignore


exports.tint = tint;

const grayscale = (x = 0, [r, g, b] = _api.RGB_LUMINANCE) => [r, g, b, 0, x, r, g, b, 0, x, r, g, b, 0, x, 0, 0, 0, 1, 0];
/**
 * Returns transformation matrix which computes luminance of user color
 * (optionally with custom coefficients), uses result as alpha channel
 * and clears RGB channels (all set to zero).
 *
 * @param coeffs
 */
// prettier-ignore


exports.grayscale = grayscale;

const luminanceAlpha = ([r, g, b] = _api.RGB_LUMINANCE) => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r, g, b, 0, 0];

exports.luminanceAlpha = luminanceAlpha;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","./api":"../../node_modules/@thi.ng/color/api.js","./internal/matrix-ops":"../../node_modules/@thi.ng/color/internal/matrix-ops.js"}],"../../node_modules/@thi.ng/color/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _names = require("./names");

Object.keys(_names).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _names[key];
    }
  });
});

var _hcyaRgba = require("./hcya-rgba");

Object.keys(_hcyaRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hcyaRgba[key];
    }
  });
});

var _hsiaRgba = require("./hsia-rgba");

Object.keys(_hsiaRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsiaRgba[key];
    }
  });
});

var _hslaCss = require("./hsla-css");

Object.keys(_hslaCss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hslaCss[key];
    }
  });
});

var _hslaHsva = require("./hsla-hsva");

Object.keys(_hslaHsva).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hslaHsva[key];
    }
  });
});

var _hslaRgba = require("./hsla-rgba");

Object.keys(_hslaRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hslaRgba[key];
    }
  });
});

var _hsvaCss = require("./hsva-css");

Object.keys(_hsvaCss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsvaCss[key];
    }
  });
});

var _hsvaHsla = require("./hsva-hsla");

Object.keys(_hsvaHsla).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsvaHsla[key];
    }
  });
});

var _hsvaRgba = require("./hsva-rgba");

Object.keys(_hsvaRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsvaRgba[key];
    }
  });
});

var _hueRgba = require("./hue-rgba");

Object.keys(_hueRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hueRgba[key];
    }
  });
});

var _intCss = require("./int-css");

Object.keys(_intCss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intCss[key];
    }
  });
});

var _intRgba = require("./int-rgba");

Object.keys(_intRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intRgba[key];
    }
  });
});

var _kelvinRgba = require("./kelvin-rgba");

Object.keys(_kelvinRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _kelvinRgba[key];
    }
  });
});

var _resolve = require("./resolve");

Object.keys(_resolve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _resolve[key];
    }
  });
});

var _rgbaCss = require("./rgba-css");

Object.keys(_rgbaCss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaCss[key];
    }
  });
});

var _rgbaHcva = require("./rgba-hcva");

Object.keys(_rgbaHcva).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaHcva[key];
    }
  });
});

var _rgbaHcya = require("./rgba-hcya");

Object.keys(_rgbaHcya).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaHcya[key];
    }
  });
});

var _rgbaHsia = require("./rgba-hsia");

Object.keys(_rgbaHsia).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaHsia[key];
    }
  });
});

var _rgbaHsla = require("./rgba-hsla");

Object.keys(_rgbaHsla).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaHsla[key];
    }
  });
});

var _rgbaHsva = require("./rgba-hsva");

Object.keys(_rgbaHsva).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaHsva[key];
    }
  });
});

var _rgbaInt = require("./rgba-int");

Object.keys(_rgbaInt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaInt[key];
    }
  });
});

var _rgbaXyza = require("./rgba-xyza");

Object.keys(_rgbaXyza).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaXyza[key];
    }
  });
});

var _rgbaYcbcra = require("./rgba-ycbcra");

Object.keys(_rgbaYcbcra).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgbaYcbcra[key];
    }
  });
});

var _srgba = require("./srgba");

Object.keys(_srgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _srgba[key];
    }
  });
});

var _xyzaRgba = require("./xyza-rgba");

Object.keys(_xyzaRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xyzaRgba[key];
    }
  });
});

var _ycbcraRgba = require("./ycbcra-rgba");

Object.keys(_ycbcraRgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ycbcraRgba[key];
    }
  });
});

var _convert = require("./convert");

Object.keys(_convert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convert[key];
    }
  });
});

var _parseCss = require("./parse-css");

Object.keys(_parseCss).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseCss[key];
    }
  });
});

var _int = require("./int");

Object.keys(_int).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _int[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _hcya = require("./hcya");

Object.keys(_hcya).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hcya[key];
    }
  });
});

var _hsia = require("./hsia");

Object.keys(_hsia).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsia[key];
    }
  });
});

var _hsla = require("./hsla");

Object.keys(_hsla).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsla[key];
    }
  });
});

var _hsva = require("./hsva");

Object.keys(_hsva).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hsva[key];
    }
  });
});

var _rgba = require("./rgba");

Object.keys(_rgba).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rgba[key];
    }
  });
});

var _xyza = require("./xyza");

Object.keys(_xyza).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xyza[key];
    }
  });
});

var _ycbcr = require("./ycbcr");

Object.keys(_ycbcr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ycbcr[key];
    }
  });
});

var _alpha = require("./alpha");

Object.keys(_alpha).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alpha[key];
    }
  });
});

var _clamp = require("./clamp");

Object.keys(_clamp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clamp[key];
    }
  });
});

var _closestHue = require("./closest-hue");

Object.keys(_closestHue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _closestHue[key];
    }
  });
});

var _cosineGradients = require("./cosine-gradients");

Object.keys(_cosineGradients).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cosineGradients[key];
    }
  });
});

var _invert = require("./invert");

Object.keys(_invert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invert[key];
    }
  });
});

var _luminance = require("./luminance");

Object.keys(_luminance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _luminance[key];
    }
  });
});

var _luminanceRgb = require("./luminance-rgb");

Object.keys(_luminanceRgb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _luminanceRgb[key];
    }
  });
});

var _mix = require("./mix");

Object.keys(_mix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mix[key];
    }
  });
});

var _transform = require("./transform");

Object.keys(_transform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transform[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/color/api.js","./names":"../../node_modules/@thi.ng/color/names.js","./hcya-rgba":"../../node_modules/@thi.ng/color/hcya-rgba.js","./hsia-rgba":"../../node_modules/@thi.ng/color/hsia-rgba.js","./hsla-css":"../../node_modules/@thi.ng/color/hsla-css.js","./hsla-hsva":"../../node_modules/@thi.ng/color/hsla-hsva.js","./hsla-rgba":"../../node_modules/@thi.ng/color/hsla-rgba.js","./hsva-css":"../../node_modules/@thi.ng/color/hsva-css.js","./hsva-hsla":"../../node_modules/@thi.ng/color/hsva-hsla.js","./hsva-rgba":"../../node_modules/@thi.ng/color/hsva-rgba.js","./hue-rgba":"../../node_modules/@thi.ng/color/hue-rgba.js","./int-css":"../../node_modules/@thi.ng/color/int-css.js","./int-rgba":"../../node_modules/@thi.ng/color/int-rgba.js","./kelvin-rgba":"../../node_modules/@thi.ng/color/kelvin-rgba.js","./resolve":"../../node_modules/@thi.ng/color/resolve.js","./rgba-css":"../../node_modules/@thi.ng/color/rgba-css.js","./rgba-hcva":"../../node_modules/@thi.ng/color/rgba-hcva.js","./rgba-hcya":"../../node_modules/@thi.ng/color/rgba-hcya.js","./rgba-hsia":"../../node_modules/@thi.ng/color/rgba-hsia.js","./rgba-hsla":"../../node_modules/@thi.ng/color/rgba-hsla.js","./rgba-hsva":"../../node_modules/@thi.ng/color/rgba-hsva.js","./rgba-int":"../../node_modules/@thi.ng/color/rgba-int.js","./rgba-xyza":"../../node_modules/@thi.ng/color/rgba-xyza.js","./rgba-ycbcra":"../../node_modules/@thi.ng/color/rgba-ycbcra.js","./srgba":"../../node_modules/@thi.ng/color/srgba.js","./xyza-rgba":"../../node_modules/@thi.ng/color/xyza-rgba.js","./ycbcra-rgba":"../../node_modules/@thi.ng/color/ycbcra-rgba.js","./convert":"../../node_modules/@thi.ng/color/convert.js","./parse-css":"../../node_modules/@thi.ng/color/parse-css.js","./int":"../../node_modules/@thi.ng/color/int.js","./css":"../../node_modules/@thi.ng/color/css.js","./hcya":"../../node_modules/@thi.ng/color/hcya.js","./hsia":"../../node_modules/@thi.ng/color/hsia.js","./hsla":"../../node_modules/@thi.ng/color/hsla.js","./hsva":"../../node_modules/@thi.ng/color/hsva.js","./rgba":"../../node_modules/@thi.ng/color/rgba.js","./xyza":"../../node_modules/@thi.ng/color/xyza.js","./ycbcr":"../../node_modules/@thi.ng/color/ycbcr.js","./alpha":"../../node_modules/@thi.ng/color/alpha.js","./clamp":"../../node_modules/@thi.ng/color/clamp.js","./closest-hue":"../../node_modules/@thi.ng/color/closest-hue.js","./cosine-gradients":"../../node_modules/@thi.ng/color/cosine-gradients.js","./invert":"../../node_modules/@thi.ng/color/invert.js","./luminance":"../../node_modules/@thi.ng/color/luminance.js","./luminance-rgb":"../../node_modules/@thi.ng/color/luminance-rgb.js","./mix":"../../node_modules/@thi.ng/color/mix.js","./transform":"../../node_modules/@thi.ng/color/transform.js"}],"../../node_modules/@thi.ng/hiccup-svg/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fcolor = exports.fattribs = exports.fpoints = exports.fpoint = exports.ff = exports.setPrecision = void 0;

var _checks = require("@thi.ng/checks");

var _color = require("@thi.ng/color");

let PRECISION = 2;

const setPrecision = n => PRECISION = n;

exports.setPrecision = setPrecision;

const ff = x => x.toFixed(PRECISION);

exports.ff = ff;

const fpoint = p => ff(p[0]) + "," + ff(p[1]);

exports.fpoint = fpoint;

const fpoints = (pts, sep = " ") => pts ? pts.map(fpoint).join(sep) : "";
/**
 * Takes an attributes object and converts any `fill`, `stroke` or
 * transformation attributes, i.e. `transform`, `rotate`, `scale`,
 * `translate`. If the element has a `transform` attrib, conversion of
 * the other attribs will be skipped, else the values are assumed to be
 * either strings or:
 *
 * - `transform`: 6-element numeric array (mat23)
 * - `translate`: 2-element array
 * - `rotate`: number (angle in radians)
 * - `scale`: number (uniform scale) or 2-elem array
 *
 * If no `transform` is given, the resulting transformation order will
 * always be TRS. Any string values given will be used as-is and
 * therefore need to be complete, e.g. `{ rotate: "rotate(60)" }`
 *
 * For color related attribs (`fill`, `stroke`), if given value is
 * array-like, a number or an `IColor` instance, it will be converted
 * into a CSS color string using thi.ng/color's `asCSS()`.
 *
 * String color attribs prefixed with `$` are replaced with `url(#...)`
 * refs (used for referencing gradients).
 *
 * Returns updated attribs or `undefined` if `attribs` itself is
 * null-ish.
 *
 * @param attribs
 */


exports.fpoints = fpoints;

const fattribs = attribs => {
  if (!attribs) return;
  const res = ftransforms(attribs);
  let v;
  (v = attribs.fill) && (res.fill = fcolor(v));
  (v = attribs.stroke) && (res.stroke = fcolor(v));
  return res;
};
/**
 * Converts any transformation related attribs.
 *
 * @see fattribs
 *
 * @param attribs
 */


exports.fattribs = fattribs;

const ftransforms = attribs => {
  let v;

  if ((v = attribs.transform) || attribs.translate || attribs.scale || attribs.rotate) {
    if (v) {
      attribs.transform = !(0, _checks.isString)(v) ? `matrix(${[...v].map(ff).join(" ")})` : v;
      delete attribs.translate;
      delete attribs.rotate;
      delete attribs.scale;
    } else {
      attribs.transform = buildTransform(attribs);
    }
  }

  return attribs;
};

const buildTransform = attribs => {
  const tx = [];
  let v;

  if (v = attribs.translate) {
    tx.push((0, _checks.isString)(v) ? v : `translate(${ff(v[0])} ${ff(v[1])})`);
    delete attribs.translate;
  }

  if (v = attribs.rotate) {
    tx.push((0, _checks.isString)(v) ? v : `rotate(${ff(v * 180 / Math.PI)})`);
    delete attribs.rotate;
  }

  if (v = attribs.scale) {
    tx.push((0, _checks.isString)(v) ? v : (0, _checks.isArrayLike)(v) ? `scale(${ff(v[0])} ${ff(v[1])})` : `scale(${ff(v)})`);
    delete attribs.scale;
  }

  return tx.join(" ");
};
/**
 * Attempts to convert a single color attrib value.
 *
 * @see fattribs
 *
 * @param col
 */


const fcolor = col => (0, _checks.isString)(col) ? col[0] === "$" ? `url(#${col.substr(1)})` : col : (0, _color.resolveAsCSS)(col);

exports.fcolor = fcolor;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/color":"../../node_modules/@thi.ng/color/index.js"}],"../../node_modules/@thi.ng/hiccup-svg/circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circle = void 0;

var _format = require("./format");

const circle = (p, r, attribs) => ["circle", (0, _format.fattribs)(Object.assign({}, attribs, {
  cx: (0, _format.ff)(p[0]),
  cy: (0, _format.ff)(p[1]),
  r: (0, _format.ff)(r)
}))];

exports.circle = circle;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/defs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defs = void 0;

const defs = (...defs) => ["defs", {}, ...defs];

exports.defs = defs;
},{}],"../../node_modules/@thi.ng/hiccup-svg/gradients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radialGradient = exports.linearGradient = void 0;

var _format = require("./format");

const RE_ALPHA_COLOR = /(rgb|hsl)a\(([a-z0-9.-]+),([0-9.%]+),([0-9.%]+),([0-9.]+)\)/;

const gradient = (type, attribs, stops) => [type, (0, _format.fattribs)(attribs), ...stops.map(gradientStop)];

const gradientStop = ([offset, col]) => {
  col = (0, _format.fcolor)(col); // use stop-opacity attrib for safari compatibility
  // https://stackoverflow.com/a/26220870/294515

  let opacity;
  const parts = RE_ALPHA_COLOR.exec(col);

  if (parts) {
    col = `${parts[1]}(${parts[2]},${parts[3]},${parts[4]})`;
    opacity = parts[5];
  }

  return ["stop", {
    offset,
    "stop-color": col,
    "stop-opacity": opacity
  }];
};

const linearGradient = (id, from, to, stops, attribs) => gradient("linearGradient", Object.assign({}, attribs, {
  id,
  x1: (0, _format.ff)(from[0]),
  y1: (0, _format.ff)(from[1]),
  x2: (0, _format.ff)(to[0]),
  y2: (0, _format.ff)(to[1])
}), stops);

exports.linearGradient = linearGradient;

const radialGradient = (id, from, to, fr, r, stops, attribs) => gradient("radialGradient", Object.assign({}, attribs, {
  id,
  fx: (0, _format.ff)(from[0]),
  fy: (0, _format.ff)(from[1]),
  cx: (0, _format.ff)(to[0]),
  cy: (0, _format.ff)(to[1]),
  fr: (0, _format.ff)(fr),
  r: (0, _format.ff)(r)
}), stops);

exports.radialGradient = radialGradient;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/group.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.group = void 0;

var _format = require("./format");

const group = (attribs, ...body) => ["g", (0, _format.fattribs)(Object.assign({}, attribs)), ...body];

exports.group = group;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/line.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vline = exports.hline = exports.line = void 0;

var _format = require("./format");

const line = (a, b, attribs) => ["line", (0, _format.fattribs)(Object.assign({}, attribs, {
  x1: (0, _format.ff)(a[0]),
  y1: (0, _format.ff)(a[1]),
  x2: (0, _format.ff)(b[0]),
  y2: (0, _format.ff)(b[1])
}))];

exports.line = line;

const hline = (y, attribs) => line([-1e6, y], [1e6, y], attribs);

exports.hline = hline;

const vline = (x, attribs) => line([x, -1e6], [x, 1e6], attribs);

exports.vline = vline;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/path.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = void 0;

var _format = require("./format");

const DEG = 180 / Math.PI;

const path = (segments, attribs) => {
  let res = [];

  for (let seg of segments) {
    res.push(seg[0]);

    switch (seg[0].toLowerCase()) {
      case "a":
        res.push([// rx
        (0, _format.ff)(seg[1]), // ry
        (0, _format.ff)(seg[2]), // x-axis (theta)
        (0, _format.ff)(seg[3] * DEG), // xl
        seg[4] ? 1 : 0, // clockwise
        seg[5] ? 1 : 0, // target xy
        (0, _format.ff)(seg[6][0]), (0, _format.ff)(seg[6][1])].join(","));
        break;

      case "h":
      case "v":
        res.push((0, _format.ff)(seg[1]));
        break;

      case "m":
      case "l":
        res.push((0, _format.fpoint)(seg[1]));
        break;

      case "z":
        break;

      default:
        res.push((0, _format.fpoints)(seg.slice(1), ","));
    }
  }

  return ["path", (0, _format.fattribs)(Object.assign({}, attribs, {
    d: res.join("")
  }))];
};

exports.path = path;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/points.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.points = void 0;

var _format = require("./format");

/**
 * Shape instancing group. The `shape` can be an SVG shape `#id` defined
 * elsewhere in the document or set to `circle` or `rect` (default). The
 * `size` arg is only used for the latter two shape types and defines
 * the radius or width respectively.
 *
 * @param pts
 * @param shape
 * @param size
 * @param attribs
 */
const points = (pts, shape, size = 1, attribs) => {
  const group = ["g", (0, _format.fattribs)(Object.assign({}, attribs))];
  let href;

  if (!shape || shape[0] !== "#") {
    href = "_" + (Math.random() * 1e6 | 0).toString(36);
    group.push(["g", {
      opacity: 0
    }, buildShape(shape, href, size)]);
    href = "#" + href;
  } else {
    href = shape;
  }

  for (let p of pts) {
    // TODO replace w/ SVG2 `href` once Safari supports it
    group.push(["use", {
      "xlink:href": href,
      x: (0, _format.ff)(p[0]),
      y: (0, _format.ff)(p[1])
    }]);
  }

  return group;
};

exports.points = points;

const buildShape = (shape, id, r) => {
  const rf = (0, _format.ff)(r);

  if (shape === "circle") {
    return ["circle", {
      id,
      cx: 0,
      cy: 0,
      r: rf
    }];
  }

  const rf2 = (0, _format.ff)(-r / 2);
  return ["rect", {
    id,
    x: rf2,
    y: rf2,
    width: rf,
    height: rf
  }];
};
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/polygon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polygon = void 0;

var _format = require("./format");

const polygon = (pts, attribs) => ["polygon", (0, _format.fattribs)(Object.assign({}, attribs, {
  points: (0, _format.fpoints)(pts)
}))];

exports.polygon = polygon;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/polyline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyline = void 0;

var _format = require("./format");

const polyline = (pts, attribs) => ["polyline", (0, _format.fattribs)(Object.assign({
  fill: "none",
  points: (0, _format.fpoints)(pts)
}, attribs))];

exports.polyline = polyline;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/rect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundedRect = exports.rect = void 0;

var _format = require("./format");

const rect = (p, width, height, attribs) => roundedRect(p, width, height, 0, 0, attribs);

exports.rect = rect;

const roundedRect = (p, width, height, rx, ry, attribs) => {
  attribs = (0, _format.fattribs)(Object.assign({}, attribs, {
    x: (0, _format.ff)(p[0]),
    y: (0, _format.ff)(p[1]),
    width: (0, _format.ff)(width),
    height: (0, _format.ff)(height)
  }));

  if (rx > 0 || ry > 0) {
    attribs.rx = (0, _format.ff)(rx);
    attribs.ry = (0, _format.ff)(ry);
  }

  return ["rect", attribs];
};

exports.roundedRect = roundedRect;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOID_TAGS = exports.SVG_TAGS = exports.NO_SPANS = exports.COMMENT = exports.RE_ENTITY = exports.RE_TAG = exports.ENTITIES = exports.PROC_TAGS = exports.XHTML_NS = exports.XLINK_NS = exports.SVG_NS = void 0;
const SVG_NS = "http://www.w3.org/2000/svg";
exports.SVG_NS = SVG_NS;
const XLINK_NS = "http://www.w3.org/1999/xlink";
exports.XLINK_NS = XLINK_NS;
const XHTML_NS = "http://www.w3.org/1999/xhtml";
exports.XHTML_NS = XHTML_NS;
const PROC_TAGS = {
  "?xml": "?>\n",
  "!DOCTYPE": ">\n",
  "!ENTITY": ">\n",
  "!ELEMENT": ">\n",
  "!ATTLIST": ">\n"
};
exports.PROC_TAGS = PROC_TAGS;
const ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};
exports.ENTITIES = ENTITIES;
const RE_TAG = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/;
exports.RE_TAG = RE_TAG;
const RE_ENTITY = new RegExp(`[${Object.keys(ENTITIES).join("")}]`, "g");
exports.RE_ENTITY = RE_ENTITY;
const COMMENT = "__COMMENT__";
exports.COMMENT = COMMENT;
const NO_SPANS = {
  button: 1,
  option: 1,
  text: 1,
  textarea: 1
};
exports.NO_SPANS = NO_SPANS;

const tagMap = tags => tags.split(" ").reduce((acc, x) => (acc[x] = true, acc), {}); // tslint:disable-next-line


const SVG_TAGS = tagMap("animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view"); // tslint:disable-next-line

exports.SVG_TAGS = SVG_TAGS;
const VOID_TAGS = tagMap("area base br circle col command ellipse embed hr img input keygen line link meta param path polygon polyline rect source stop track use wbr ?xml");
exports.VOID_TAGS = VOID_TAGS;
},{}],"../../node_modules/@thi.ng/hiccup/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var _checks = require("@thi.ng/checks");

const css = rules => {
  let css = "",
      v;

  for (let r in rules) {
    v = rules[r];

    if ((0, _checks.isFunction)(v)) {
      v = v(rules);
    }

    v != null && (css += `${r}:${v};`);
  }

  return css;
};

exports.css = css;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js"}],"../../node_modules/@thi.ng/hiccup/deref.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derefContext = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Takes an arbitrary `ctx` object and array of `keys`. Attempts to call
 * `.deref()` on all given keys' values and stores result values instead
 * of original. Returns updated copy of `ctx` or original if `ctx` is
 * `null` or no keys were given.
 *
 * @param ctx
 * @param keys
 */
const derefContext = (ctx, keys) => {
  if (ctx == null || !keys || !keys.length) return ctx;
  const res = Object.assign({}, ctx);

  for (let k of keys) {
    const v = res[k];
    (0, _checks.implementsFunction)(v, "deref") && (res[k] = v.deref());
  }

  return res;
};

exports.derefContext = derefContext;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js"}],"../../node_modules/@thi.ng/hiccup/escape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escape = void 0;

var _api = require("./api");

const escape = x => x.replace(_api.RE_ENTITY, y => _api.ENTITIES[y]);

exports.escape = escape;
},{"./api":"../../node_modules/@thi.ng/hiccup/api.js"}],"../../node_modules/@thi.ng/hiccup/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _css = require("./css");

const normalize = tag => {
  let el = tag[0];
  let match;
  let id;
  let clazz;
  const hasAttribs = (0, _checks.isPlainObject)(tag[1]);
  const attribs = hasAttribs ? Object.assign({}, tag[1]) : {};

  if (!(0, _checks.isString)(el) || !(match = _api.RE_TAG.exec(el))) {
    (0, _errors.illegalArgs)(`"${el}" is not a valid tag name`);
  }

  el = match[1];
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  if (tag.length > 1) {
    if ((0, _checks.isPlainObject)(attribs.style)) {
      attribs.style = (0, _css.css)(attribs.style);
    }

    tag = tag.slice(hasAttribs ? 2 : 1).filter(x => x != null);

    if (tag.length > 0) {
      return [el, attribs, tag];
    }
  }

  return [el, attribs];
};

exports.normalize = normalize;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./api":"../../node_modules/@thi.ng/hiccup/api.js","./css":"../../node_modules/@thi.ng/hiccup/css.js"}],"../../node_modules/@thi.ng/hiccup/serialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _escape = require("./escape");

var _normalize = require("./normalize");

/**
 * Recursively normalizes and serializes given tree as HTML/SVG/XML
 * string. Expands any embedded component functions with their results.
 * Each node of the input tree can have one of the following input
 * forms:
 *
 * ```js
 * ["tag", ...]
 * ["tag#id.class1.class2", ...]
 * ["tag", {other: "attrib"}, ...]
 * ["tag", {...}, "body", function, ...]
 * [function, arg1, arg2, ...]
 * [{render: (ctx,...) => [...]}, args...]
 * iterable
 * ```
 *
 * Tags can be defined in "Zencoding" convention, e.g.
 *
 * ```js
 * ["div#foo.bar.baz", "hi"] // <div id="foo" class="bar baz">hi</div>
 * ```
 *
 * The presence of the attributes object (2nd array index) is optional.
 * Any attribute values, incl. functions are allowed. If the latter, the
 * function is called with the full attribs object as argument and the
 * return value is used for the attribute. This allows for the dynamic
 * creation of attrib values based on other attribs. The only exception
 * to this are event attributes, i.e. attribute names starting with
 * "on". Function values assigned to event attributes will be omitted
 * from the output.
 *
 * ```js
 * ["div#foo", { bar: (attribs) => attribs.id + "-bar" }]
 * // <div id="foo" bar="foo-bar"></div>
 * ```
 *
 * The `style` attribute can ONLY be defined as string or object.
 *
 * ```js
 * ["div", {style: {color: "red", background: "#000"}}]
 * // <div style="color:red;background:#000;"></div>
 * ```
 *
 * Boolean attribs are serialized in HTML5 syntax (present or not).
 * `null`, `undefined` or empty string attrib values are ignored.
 *
 * Any `null` or `undefined` array values (other than in head position)
 * will also be removed, unless a function is in head position.
 *
 * A function in head position of a node acts as a mechanism for
 * component composition & delayed execution. The function will only be
 * executed at serialization time. In this case the optional global
 * context object and all other elements of that node / array are passed
 * as arguments when that function is called. The return value the
 * function MUST be a valid new tree (or `undefined`).
 *
 * If the `ctx` object it'll be passed to each embedded component fns.
 * Optionally call `derefContext()` prior to `serialize()` to auto-deref
 * context keys with values implementing the thi.ng/api `IDeref`
 * interface.
 *
 * ```js
 * const foo = (ctx, a, b) => ["div#" + a, ctx.foo, b];
 *
 * serialize([foo, "id", "body"], { foo: { class: "black" } })
 * // <div id="id" class="black">body</div>
 * ```
 *
 * Functions located in other positions are called ONLY with the global
 * context arg and can return any (serializable) value (i.e. new trees,
 * strings, numbers, iterables or any type with a suitable
 * `.toString()`, `.toHiccup()` or `.deref()` implementation).
 *
 * If the optional `span` flag is true (default: false), all text
 * content will be wrapped in <span> elements (this is to ensure DOM
 * compatibility with hdom). The only elements for spans are never
 * created are listed in `NO_SPANS` in `api.ts`.
 *
 * If the optional `keys` flag is true (default: false), all elements
 * will have an autogenerated `key` attribute injected. If `span` is
 * enabled, `keys` will be enabled by default too (since in this case we
 * assume the output is meant to be compatible with @thi.ng/hdom).
 *
 * hiccup & hdom control attributes (i.e. attrib names prefixed with
 * `__`) will be omitted from the output. The only control attrib
 * supported by this package is `__serialize`. If set to `false`, the
 * entire tree branch will be excluded from the output.
 *
 * Single or multiline comments can be included using the special
 * `COMMENT` tag (`__COMMENT__`) (always WITHOUT attributes!).
 *
 * ```
 * [COMMENT, "Hello world"]
 * // <!-- Hello world -->
 *
 * [COMMENT, "Hello", "world"]
 * <!--
 *     Hello
 *     world
 * -->
 * ```
 *
 * Currently, the only processing / DTD instructions supported are:
 *
 * - `?xml`
 * - `!DOCTYTPE`
 * - `!ELEMENT`
 * - `!ENTITY`
 * - `!ATTLIST`
 *
 * These are used as follows (attribs are only allowed for `?xml`, all
 * others only accept a body string which is taken as is):
 *
 * ```
 * ["?xml", { version: "1.0", standalone: "yes" }]
 * // <?xml version="1.0" standalone="yes"?>
 *
 * ["!DOCTYPE", "html"]
 * // <!DOCTYPE html>
 * ```
 *
 * @param tree hiccup elements / component tree
 * @param ctx arbitrary user context object
 * @param escape auto-escape entities
 * @param span use spans for text content
 * @param keys attach key attribs
 */
const serialize = (tree, ctx, escape = false, span = false, keys = span, path = [0]) => _serialize(tree, ctx, escape, span, keys, path);

exports.serialize = serialize;

const _serialize = (tree, ctx, esc, span, keys, path) => {
  if (tree == null) {
    return "";
  }

  if (Array.isArray(tree)) {
    return serializeElement(tree, ctx, esc, span, keys, path);
  }

  if ((0, _checks.isFunction)(tree)) {
    return _serialize(tree(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "toHiccup")) {
    return _serialize(tree.toHiccup(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "deref")) {
    return _serialize(tree.deref(), ctx, esc, span, keys, path);
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  tree = esc ? (0, _escape.escape)(tree.toString()) : tree;
  return span ? `<span${keys ? ` key="${path.join("-")}"` : ""}>${tree}</span>` : tree;
};

const serializeElement = (tree, ctx, esc, span, keys, path) => {
  if (!tree.length) {
    return "";
  }

  let tag = tree[0];

  if ((0, _checks.isFunction)(tag)) {
    return _serialize(tag.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tag, "render")) {
    return _serialize(tag.render.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if (tag === _api.COMMENT) {
    return serializeComment(tree);
  }

  if ((0, _checks.isString)(tag)) {
    tree = (0, _normalize.normalize)(tree);
    tag = tree[0];
    const attribs = tree[1];

    if (attribs.__skip || attribs.__serialize === false) {
      return "";
    }

    let body = tree[2];
    let res = `<${tag}`;
    keys && attribs.key === undefined && (attribs.key = path.join("-"));
    res += serializeAttribs(attribs, esc);
    res += body ? serializeBody(tag, body, ctx, esc, span, keys, path) : !_api.VOID_TAGS[tag] ? `></${tag}>` : _api.PROC_TAGS[tag] || "/>";
    return res;
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  return (0, _errors.illegalArgs)(`invalid tree node: ${tree}`);
};

const serializeAttribs = (attribs, esc) => {
  let res = "";

  for (let a in attribs) {
    if (a.startsWith("__")) continue;
    let v = attribs[a];
    if (v == null) continue;
    if ((0, _checks.isFunction)(v) && (/^on\w+/.test(a) || (v = v(attribs)) == null)) continue;

    if (v === true) {
      res += " " + a;
    } else if (v !== false) {
      v = v.toString();
      v.length && (res += ` ${a}="${esc ? (0, _escape.escape)(v) : v}"`);
    }
  }

  return res;
};

const serializeBody = (tag, body, ctx, esc, span, keys, path) => {
  if (_api.VOID_TAGS[tag]) {
    (0, _errors.illegalArgs)(`No body allowed in tag: ${tag}`);
  }

  const proc = _api.PROC_TAGS[tag];
  let res = proc ? " " : ">";
  span = span && !proc && !_api.NO_SPANS[tag];

  for (let i = 0, n = body.length; i < n; i++) {
    res += _serialize(body[i], ctx, esc, span, keys, [...path, i]);
  }

  return res + (proc || `</${tag}>`);
};

const serializeComment = tree => tree.length > 2 ? `\n<!--\n${tree.slice(1).map(x => "    " + x).join("\n")}\n-->\n` : `\n<!-- ${tree[1]} -->\n`;

const serializeIter = (iter, ctx, esc, span, keys, path) => {
  const res = [];
  const p = path.slice(0, path.length - 1);
  let k = 0;

  for (let i of iter) {
    res.push(_serialize(i, ctx, esc, span, keys, [...p, k++]));
  }

  return res.join("");
};
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","./api":"../../node_modules/@thi.ng/hiccup/api.js","./escape":"../../node_modules/@thi.ng/hiccup/escape.js","./normalize":"../../node_modules/@thi.ng/hiccup/normalize.js"}],"../../node_modules/@thi.ng/hiccup/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _deref = require("./deref");

Object.keys(_deref).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deref[key];
    }
  });
});

var _escape = require("./escape");

Object.keys(_escape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _escape[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _serialize = require("./serialize");

Object.keys(_serialize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _serialize[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/hiccup/api.js","./css":"../../node_modules/@thi.ng/hiccup/css.js","./deref":"../../node_modules/@thi.ng/hiccup/deref.js","./escape":"../../node_modules/@thi.ng/hiccup/escape.js","./normalize":"../../node_modules/@thi.ng/hiccup/normalize.js","./serialize":"../../node_modules/@thi.ng/hiccup/serialize.js"}],"../../node_modules/@thi.ng/hiccup-svg/svg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _format = require("./format");

/**
 * Defines an <svg> root element with default XML namespaces. By default
 * currently still sets SVG version to 1.1 to support Safari and other
 * legacy tooling.
 *
 * @param attribs
 * @param body
 */
const svg = (attribs, ...body) => ["svg", (0, _format.fattribs)(Object.assign({
  version: "1.1",
  xmlns: _hiccup.SVG_NS,
  "xmlns:xlink": _hiccup.XLINK_NS
}, attribs)), ...body];

exports.svg = svg;
},{"@thi.ng/hiccup":"../../node_modules/@thi.ng/hiccup/index.js","./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = void 0;

var _format = require("./format");

const text = (p, body, attribs) => ["text", (0, _format.fattribs)(Object.assign({}, attribs, {
  x: (0, _format.ff)(p[0]),
  y: (0, _format.ff)(p[1])
})), body];

exports.text = text;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/ellipse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ellipse = void 0;

var _format = require("./format");

const ellipse = (p, rx, ry, attribs) => ["ellipse", (0, _format.fattribs)(Object.assign({}, attribs, {
  cx: (0, _format.ff)(p[0]),
  cy: (0, _format.ff)(p[1]),
  rx: (0, _format.ff)(rx),
  ry: (0, _format.ff)(ry)
}))];

exports.ellipse = ellipse;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = void 0;

var _format = require("./format");

const image = (pos, url, attribs) => ["image", (0, _format.fattribs)(Object.assign({}, attribs, {
  // TODO replace w/ SVG2 `href` once Safari supports it
  "xlink:href": url,
  x: (0, _format.ff)(pos[0]),
  y: (0, _format.ff)(pos[1])
}))];

exports.image = image;
},{"./format":"../../node_modules/@thi.ng/hiccup-svg/format.js"}],"../../node_modules/@thi.ng/hiccup-svg/convert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTree = void 0;

var _checks = require("@thi.ng/checks");

var _circle = require("./circle");

var _ellipse = require("./ellipse");

var _format = require("./format");

var _gradients = require("./gradients");

var _image = require("./image");

var _line = require("./line");

var _path = require("./path");

var _points = require("./points");

var _polygon = require("./polygon");

var _polyline = require("./polyline");

var _rect = require("./rect");

var _text = require("./text");

const ATTRIB_ALIASES = {
  alpha: "opacity",
  dash: "stroke-dasharray",
  dashOffset: "stroke-dashoffset",
  lineCap: "stroke-linecap",
  lineJoin: "stroke-linejoin",
  miterLimit: "stroke-miterlimit",
  weight: "stroke-width"
};
const TEXT_ALIGN = {
  left: "start",
  right: "end",
  center: "middle",
  start: "start",
  end: "end"
};
/**
 * Takes a normalized hiccup tree of thi.ng/geom or thi.ng/hdom-canvas
 * shape definitions and recursively converts it into an hiccup flavor
 * which is compatible for SVG serialization. This conversion also
 * involves translation & reorg of various attributes. Returns new tree.
 * The original remains untouched, as will any unrecognized tree/shape
 * nodes.
 *
 * @param tree
 */

const convertTree = tree => {
  if ((0, _checks.implementsFunction)(tree, "toHiccup")) {
    return convertTree(tree.toHiccup());
  }

  const type = tree[0];

  if ((0, _checks.isArray)(type)) {
    return tree.map(convertTree);
  }

  let attribs = convertAttribs(tree[1]);

  switch (tree[0]) {
    case "svg":
    case "defs":
    case "g":
      {
        const res = [type, (0, _format.fattribs)(attribs)];

        for (let i = 2, n = tree.length; i < n; i++) {
          const c = convertTree(tree[i]);
          c != null && res.push(c);
        }

        return res;
      }

    case "linearGradient":
      return (0, _gradients.linearGradient)(attribs.id, attribs.from, attribs.to, tree[2], {
        gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
        gradientTransform: attribs.gradientTransform
      });

    case "radialGradient":
      return (0, _gradients.radialGradient)(attribs.id, attribs.from, attribs.to, attribs.r1, attribs.r2, tree[2], {
        gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
        gradientTransform: attribs.gradientTransform
      });

    case "circle":
      return (0, _circle.circle)(tree[2], tree[3], attribs);

    case "ellipse":
      return (0, _ellipse.ellipse)(tree[2], tree[3][0], tree[3][1], attribs);

    case "rect":
      {
        const r = tree[5] || 0;
        return (0, _rect.roundedRect)(tree[2], tree[3], tree[4], r, r, attribs);
      }

    case "line":
      return (0, _line.line)(tree[2], tree[3], attribs);

    case "hline":
      return (0, _line.hline)(tree[2], attribs);

    case "vline":
      return (0, _line.vline)(tree[2], attribs);

    case "polyline":
      return (0, _polyline.polyline)(tree[2], attribs);

    case "polygon":
      return (0, _polygon.polygon)(tree[2], attribs);

    case "path":
      return (0, _path.path)(tree[2], attribs);

    case "text":
      return (0, _text.text)(tree[2], tree[3], attribs);

    case "img":
      return (0, _image.image)(tree[3], tree[2].src, attribs);

    case "points":
      return (0, _points.points)(tree[2], attribs.shape, attribs.size, attribs);

    default:
      return tree;
  }
};

exports.convertTree = convertTree;

const convertAttribs = attribs => {
  const res = {};
  if (!attribs) return res; // convertTransforms(res, attribs);

  for (let id in attribs) {
    const v = attribs[id];
    const aid = ATTRIB_ALIASES[id];

    if (aid) {
      res[aid] = v;
    } else {
      convertAttrib(res, id, v);
    }
  }

  return res;
};

const convertAttrib = (res, id, v) => {
  switch (id) {
    case "font":
      {
        const i = v.indexOf(" ");
        res["font-size"] = v.substr(0, i);
        res["font-family"] = v.substr(i + 1);
        break;
      }

    case "align":
      res["text-anchor"] = TEXT_ALIGN[v];
      break;

    case "baseline":
      // no SVG support?
      break;

    case "filter":
      // TODO needs to be translated into <filter> def first
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
      break;

    default:
      res[id] = v;
  }
};
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","./circle":"../../node_modules/@thi.ng/hiccup-svg/circle.js","./ellipse":"../../node_modules/@thi.ng/hiccup-svg/ellipse.js","./format":"../../node_modules/@thi.ng/hiccup-svg/format.js","./gradients":"../../node_modules/@thi.ng/hiccup-svg/gradients.js","./image":"../../node_modules/@thi.ng/hiccup-svg/image.js","./line":"../../node_modules/@thi.ng/hiccup-svg/line.js","./path":"../../node_modules/@thi.ng/hiccup-svg/path.js","./points":"../../node_modules/@thi.ng/hiccup-svg/points.js","./polygon":"../../node_modules/@thi.ng/hiccup-svg/polygon.js","./polyline":"../../node_modules/@thi.ng/hiccup-svg/polyline.js","./rect":"../../node_modules/@thi.ng/hiccup-svg/rect.js","./text":"../../node_modules/@thi.ng/hiccup-svg/text.js"}],"../../node_modules/@thi.ng/hiccup-svg/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _circle = require("./circle");

Object.keys(_circle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _circle[key];
    }
  });
});

var _defs = require("./defs");

Object.keys(_defs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defs[key];
    }
  });
});

var _gradients = require("./gradients");

Object.keys(_gradients).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gradients[key];
    }
  });
});

var _group = require("./group");

Object.keys(_group).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _group[key];
    }
  });
});

var _line = require("./line");

Object.keys(_line).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _line[key];
    }
  });
});

var _path = require("./path");

Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _path[key];
    }
  });
});

var _points = require("./points");

Object.keys(_points).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _points[key];
    }
  });
});

var _polygon = require("./polygon");

Object.keys(_polygon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _polygon[key];
    }
  });
});

var _polyline = require("./polyline");

Object.keys(_polyline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _polyline[key];
    }
  });
});

var _rect = require("./rect");

Object.keys(_rect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rect[key];
    }
  });
});

var _svg = require("./svg");

Object.keys(_svg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _svg[key];
    }
  });
});

var _text = require("./text");

Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _text[key];
    }
  });
});

var _format = require("./format");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});

var _convert = require("./convert");

Object.keys(_convert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convert[key];
    }
  });
});
},{"./circle":"../../node_modules/@thi.ng/hiccup-svg/circle.js","./defs":"../../node_modules/@thi.ng/hiccup-svg/defs.js","./gradients":"../../node_modules/@thi.ng/hiccup-svg/gradients.js","./group":"../../node_modules/@thi.ng/hiccup-svg/group.js","./line":"../../node_modules/@thi.ng/hiccup-svg/line.js","./path":"../../node_modules/@thi.ng/hiccup-svg/path.js","./points":"../../node_modules/@thi.ng/hiccup-svg/points.js","./polygon":"../../node_modules/@thi.ng/hiccup-svg/polygon.js","./polyline":"../../node_modules/@thi.ng/hiccup-svg/polyline.js","./rect":"../../node_modules/@thi.ng/hiccup-svg/rect.js","./svg":"../../node_modules/@thi.ng/hiccup-svg/svg.js","./text":"../../node_modules/@thi.ng/hiccup-svg/text.js","./format":"../../node_modules/@thi.ng/hiccup-svg/format.js","./convert":"../../node_modules/@thi.ng/hiccup-svg/convert.js"}],"../../node_modules/@thi.ng/hdom/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogger = exports.LOGGER = void 0;

var _api = require("@thi.ng/api");

let LOGGER = _api.NULL_LOGGER;
exports.LOGGER = LOGGER;

const setLogger = logger => exports.LOGGER = LOGGER = logger;

exports.setLogger = setLogger;
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js"}],"../../node_modules/@thi.ng/diff/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffMode = void 0;
var DiffMode;
exports.DiffMode = DiffMode;

(function (DiffMode) {
  DiffMode[DiffMode["ONLY_DISTANCE"] = 0] = "ONLY_DISTANCE";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR"] = 1] = "ONLY_DISTANCE_LINEAR";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR_ONLY_CHANGES"] = 2] = "ONLY_DISTANCE_LINEAR_ONLY_CHANGES";
  DiffMode[DiffMode["FULL"] = 3] = "FULL";
})(DiffMode || (exports.DiffMode = DiffMode = {}));
},{}],"../../node_modules/@thi.ng/diff/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffArray = void 0;

var _equiv2 = require("@thi.ng/equiv");

let _cachedFP;

let _cachedPath;

let _cachedEPC = [];
let _cachedPathPos = [];

const cachedFP = size => _cachedFP && _cachedFP.length >= size ? _cachedFP : _cachedFP = new Int32Array(size);

const cachedPath = size => _cachedPath && _cachedPath.length >= size ? _cachedPath : _cachedPath = new Int32Array(size);

const simpleDiff = (state, src, key, logDir, mode) => {
  const n = src.length;
  const linear = state.linear;
  state.distance = n;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      for (let i = 0, j = 0; i < n; i++, j += 3) {
        linear[j] = logDir;
        linear[j + 1] = i;
        linear[j + 2] = src[i];
      }

      if (mode === 3
      /* FULL */
      ) {
          const _state = state[key];

          for (let i = 0; i < n; i++) {
            _state[i] = src[i];
          }
        }
    }

  return state;
};
/**
 * Based on "An O(NP) Sequence Comparison Algorithm""
 * by Wu, Manber, Myers and Miller
 *
 * - http://www.itu.dk/stud/speciale/bepjea/xwebtex/litt/an-onp-sequence-comparison-algorithm.pdf
 * - https://github.com/cubicdaiya/onp
 *
 * Various optimizations, fixes & refactorings.
 * By default uses `@thi.ng/equiv` for equality checks.
 *
 * @param a "old" array
 * @param b "new" array
 * @param mode result mode
 * @param equiv equality predicate function
 */


const diffArray = (a, b, mode = 3
/* FULL */
, equiv = _equiv2.equiv) => {
  const state = {
    distance: 0,
    adds: {},
    dels: {},
    const: {},
    linear: []
  };

  if (a === b || a == null && b == null) {
    return state;
  } else if (a == null || a.length === 0) {
    return simpleDiff(state, b, "adds", 1, mode);
  } else if (b == null || b.length === 0) {
    return simpleDiff(state, a, "dels", -1, mode);
  }

  const reverse = a.length >= b.length;

  let _a, _b, na, nb;

  if (reverse) {
    _a = b;
    _b = a;
  } else {
    _a = a;
    _b = b;
  }

  na = _a.length;
  nb = _b.length;
  const offset = na + 1;
  const delta = nb - na;
  const doff = delta + offset;
  const size = na + nb + 3;
  const path = cachedPath(size).fill(-1, 0, size);
  const fp = cachedFP(size).fill(-1, 0, size);
  const epc = _cachedEPC;
  const pathPos = _cachedPathPos;
  epc.length = 0;
  pathPos.length = 0;

  const snake = (k, p, pp) => {
    const koff = k + offset;
    let r, y;

    if (p > pp) {
      r = path[koff - 1];
      y = p;
    } else {
      r = path[koff + 1];
      y = pp;
    }

    let x = y - k;

    while (x < na && y < nb && equiv(_a[x], _b[y])) {
      x++;
      y++;
    }

    path[koff] = pathPos.length / 3;
    pathPos.push(x, y, r);
    return y;
  };

  let p = -1,
      k,
      ko;

  do {
    p++;

    for (k = -p, ko = k + offset; k < delta; k++, ko++) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    for (k = delta + p, ko = k + offset; k > delta; k--, ko--) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    fp[doff] = snake(delta, fp[doff - 1] + 1, fp[doff + 1]);
  } while (fp[doff] !== nb);

  state.distance = delta + 2 * p;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      p = path[doff] * 3;

      while (p >= 0) {
        epc.push(p);
        p = pathPos[p + 2] * 3;
      }

      if (mode === 3
      /* FULL */
      ) {
          buildFullLog(epc, pathPos, state, _a, _b, reverse);
        } else {
        buildLinearLog(epc, pathPos, state, _a, _b, reverse, mode === 1
        /* ONLY_DISTANCE_LINEAR */
        );
      }
    }

  return state;
};

exports.diffArray = diffArray;

const buildFullLog = (epc, pathPos, state, a, b, reverse) => {
  const linear = state.linear;
  const _const = state.const;
  let i = epc.length;
  let px = 0;
  let py = 0;
  let adds;
  let dels;
  let aID;
  let dID;

  if (reverse) {
    adds = state.dels;
    dels = state.adds;
    aID = -1;
    dID = 1;
  } else {
    adds = state.adds;
    dels = state.dels;
    aID = 1;
    dID = -1;
  }

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, adds[py] = b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, dels[px] = a[px]);
        px++;
      } else {
        linear.push(0, px, _const[px] = a[px]);
        px++;
        py++;
      }
    }
  }
};

const buildLinearLog = (epc, pathPos, state, a, b, reverse, inclConst) => {
  const linear = state.linear;
  const aID = reverse ? -1 : 1;
  const dID = reverse ? 1 : -1;
  let i = epc.length,
      px = 0,
      py = 0;

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, a[px]);
        px++;
      } else {
        inclConst && linear.push(0, px, a[px]);
        px++;
        py++;
      }
    }
  }
};
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/diff/object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffObject = void 0;

var _equiv2 = require("@thi.ng/equiv");

const diffObject = (a, b, mode = 3
/* FULL */
, _equiv = _equiv2.equiv) => a === b ? {
  distance: 0
} : mode === 0
/* ONLY_DISTANCE */
? diffObjectDist(a, b, _equiv) : diffObjectFull(a, b, _equiv);

exports.diffObject = diffObject;

const diffObjectDist = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;

  for (let k in a) {
    const vb = b[k];
    (vb === undefined || !_equiv(a[k], vb)) && d++;
  }

  for (let k in b) {
    !(k in a) && d++;
  }

  return {
    distance: d
  };
};

const diffObjectFull = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;
  const adds = [];
  const dels = [];
  const edits = [];

  for (let k in a) {
    const vb = b[k];

    if (vb === undefined) {
      dels.push(k);
      d++;
    } else if (!_equiv(a[k], vb)) {
      edits.push(k, vb);
      d++;
    }
  }

  for (let k in b) {
    if (!(k in a)) {
      adds.push(k);
      d++;
    }
  }

  return {
    distance: d,
    adds,
    dels,
    edits
  };
};
},{"@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/diff/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _array = require("./array");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _array[key];
    }
  });
});

var _object = require("./object");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _object[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/diff/api.js","./array":"../../node_modules/@thi.ng/diff/array.js","./object":"../../node_modules/@thi.ng/diff/object.js"}],"../../node_modules/@thi.ng/hdom/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equiv = exports.releaseTree = exports.diffAttributes = exports.diffTree = void 0;

var _api = require("@thi.ng/api");

var _diff = require("@thi.ng/diff");

var _equiv2 = require("@thi.ng/equiv");

const isArray = Array.isArray;
const max = Math.max;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string"; // child index tracking template buffer

const INDEX = (() => {
  const res = new Array(2048);

  for (let i = 2, n = res.length; i < n; i++) {
    res[i] = i - 2;
  }

  return res;
})();

const buildIndex = n => {
  if (n <= INDEX.length) {
    return INDEX.slice(0, n);
  }

  const res = new Array(n);

  while (--n >= 2) {
    res[n] = n - 2;
  }

  return res;
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param impl hdom implementation
 * @param parent
 * @param prev previous tree
 * @param curr current tree
 * @param child child index
 */


const diffTree = (opts, impl, parent, prev, curr, child = 0) => {
  const attribs = curr[1];

  if (attribs.__skip) {
    return;
  } // always replace element if __diff = false


  if (attribs.__diff === false) {
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  const pattribs = prev[1];

  if (pattribs && pattribs.__skip) {
    impl.replaceChild(opts, parent, child, curr, false);
    return;
  } // delegate to branch-local implementation


  let _impl = attribs.__impl;

  if (_impl && _impl !== impl) {
    return _impl.diffTree(opts, _impl, parent, prev, curr, child);
  }

  const delta = (0, _diff.diffArray)(prev, curr, 1
  /* ONLY_DISTANCE_LINEAR */
  , equiv);

  if (delta.distance === 0) {
    return;
  }

  const edits = delta.linear;
  const el = impl.getChild(parent, child);
  let i;
  let ii;
  let status;
  let val;

  if (edits[0] !== 0 || prev[1].key !== attribs.key) {
    // LOGGER.fine("replace:", prev, curr);
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  if ((val = prev.__release) && val !== curr.__release) {
    releaseTree(prev);
  }

  if (edits[3] !== 0) {
    diffAttributes(impl, el, prev[1], curr[1]); // if attribs changed & distance == 2 then we're done here...

    if (delta.distance === 2) {
      return;
    }
  }

  const numEdits = edits.length;
  const prevLength = prev.length - 1;
  const equivKeys = extractEquivElements(edits);
  const offsets = buildIndex(prevLength + 1);

  for (i = 2, ii = 6; ii < numEdits; i++, ii += 3) {
    status = edits[ii];
    if (!status) continue;

    if (status === -1) {
      diffDeleted(opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength);
    } else {
      diffAdded(opts, impl, el, edits, ii, equivKeys, offsets, prevLength);
    }
  } // call __init after all children have been added/updated


  if ((val = curr.__init) && val != prev.__init) {
    val.apply(curr, [el, ...curr.__args]);
  }
};

exports.diffTree = diffTree;

const diffDeleted = (opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (isArray(val)) {
    let k = val[1].key;

    if (k !== undefined && equivKeys[k][2] !== undefined) {
      const eq = equivKeys[k];
      k = eq[0]; // LOGGER.fine(`diff equiv key @ ${k}:`, prev[k], curr[eq[2]]);

      diffTree(opts, impl, el, prev[k], curr[eq[2]], offsets[k]);
    } else {
      const idx = edits[ii + 1]; // LOGGER.fine("remove @", offsets[idx], val);

      releaseTree(val);
      impl.removeChild(el, offsets[idx]);
      incOffsets(offsets, prevLength, idx);
    }
  } else if (typeof val === STR) {
    impl.setContent(el, "");
  }
};

const diffAdded = (opts, impl, el, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (typeof val === STR) {
    impl.setContent(el, val);
  } else if (isArray(val)) {
    const k = val[1].key;

    if (k === undefined || equivKeys[k][0] === undefined) {
      const idx = edits[ii + 1]; // LOGGER.fine("insert @", offsets[idx], val);

      impl.createTree(opts, el, val, offsets[idx]);
      decOffsets(offsets, prevLength, idx);
    }
  }
};

const incOffsets = (offsets, j, idx) => {
  for (; j > idx; j--) {
    offsets[j] = max(offsets[j] - 1, 0);
  }
};

const decOffsets = (offsets, j, idx) => {
  for (; j >= idx; j--) {
    offsets[j]++;
  }
};
/**
 * Helper function for `diffTree()` to compute & apply the difference
 * between a node's `prev` and `curr` attributes.
 *
 * @param impl
 * @param el
 * @param prev
 * @param curr
 */


const diffAttributes = (impl, el, prev, curr) => {
  const delta = (0, _diff.diffObject)(prev, curr, 3
  /* FULL */
  , _equiv2.equiv);
  impl.removeAttribs(el, delta.dels, prev);
  let val = _api.SEMAPHORE;
  let i, e, edits;

  for (edits = delta.edits, i = edits.length; (i -= 2) >= 0;) {
    e = edits[i];
    e.indexOf("on") === 0 && impl.removeAttribs(el, [e], prev);
    e !== "value" ? impl.setAttrib(el, e, edits[i + 1], curr) : val = edits[i + 1];
  }

  for (edits = delta.adds, i = edits.length; --i >= 0;) {
    e = edits[i];
    e !== "value" ? impl.setAttrib(el, e, curr[e], curr) : val = curr[e];
  }

  val !== _api.SEMAPHORE && impl.setAttrib(el, "value", val, curr);
};
/**
 * Recursively attempts to call the `release` lifecycle method on every
 * element in given tree (branch), using depth-first descent. Each
 * element is checked for the presence of the `__release` control
 * attribute. If (and only if) it is set to `false`, further descent
 * into that element's branch is skipped.
 *
 * @param tag
 */


exports.diffAttributes = diffAttributes;

const releaseTree = tag => {
  if (isArray(tag)) {
    let x;

    if ((x = tag[1]) && x.__release === false) {
      return;
    }

    if (tag.__release) {
      // LOGGER.fine("call __release", tag);
      tag.__release.apply(tag.__this, tag.__args);

      delete tag.__release;
    }

    for (x = tag.length; --x >= 2;) {
      releaseTree(tag[x]);
    }
  }
};

exports.releaseTree = releaseTree;

const extractEquivElements = edits => {
  let k;
  let val;
  let ek;
  const equiv = {};

  for (let i = edits.length; (i -= 3) >= 0;) {
    val = edits[i + 2];

    if (isArray(val) && (k = val[1].key) !== undefined) {
      ek = equiv[k];
      !ek && (equiv[k] = ek = [,,]);
      ek[edits[i] + 1] = edits[i + 1];
    }
  }

  return equiv;
};
/**
 * Customized version @thi.ng/equiv which takes `__diff` attributes into
 * account (at any nesting level). If an hdom element's attribute object
 * contains `__diff: false`, the object will ALWAYS be considered
 * unequal, even if all other attributes in the object are equivalent.
 *
 * @param a
 * @param b
 */


const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return !(a.__diff === false || b.__diff === false) && (0, _equiv2.equivObject)(a, b, equiv);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return (0, _equiv2.equivArrayLike)(a, b, equiv);
  }

  if (a instanceof Set && b instanceof Set) {
    return (0, _equiv2.equivSet)(a, b, equiv);
  }

  if (a instanceof Map && b instanceof Map) {
    return (0, _equiv2.equivMap)(a, b, equiv);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;
},{"@thi.ng/api":"../../node_modules/@thi.ng/api/index.js","@thi.ng/diff":"../../node_modules/@thi.ng/diff/index.js","@thi.ng/equiv":"../../node_modules/@thi.ng/equiv/index.js"}],"../../node_modules/@thi.ng/hdom/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeChild = exports.clearDOM = exports.removeListener = exports.setListener = exports.setStyle = exports.removeAttribs = exports.updateValueAttrib = exports.setAttrib = exports.setAttribs = exports.setContent = exports.cloneWithNewAttribs = exports.replaceChild = exports.getChild = exports.addChild = exports.createTextElement = exports.createElement = exports.hydrateTree = exports.createTree = void 0;

var _checks = require("@thi.ng/checks");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;

const maybeInitElement = (el, tree) => tree.__init && tree.__init.apply(tree.__this, [el, ...tree.__args]);
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param insert
 */


const createTree = (opts, impl, parent, tree, insert, init = true) => {
  if (isArray(tree)) {
    const tag = tree[0];

    if (typeof tag === "function") {
      return createTree(opts, impl, parent, tag.apply(null, [opts.ctx, ...tree.slice(1)]), insert);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.createTree(opts, parent, tree, insert, init);
    }

    const el = impl.createElement(parent, tag, attribs, insert);

    if (tree.length > 2) {
      const n = tree.length;

      for (let i = 2; i < n; i++) {
        createTree(opts, impl, el, tree[i], undefined, init);
      }
    }

    init && maybeInitElement(el, tree);
    return el;
  }

  if (isNotStringAndIterable(tree)) {
    const res = [];

    for (let t of tree) {
      res.push(createTree(opts, impl, parent, t, insert, init));
    }

    return res;
  }

  if (tree == null) {
    return parent;
  }

  return impl.createTextElement(parent, tree);
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param index
 */


exports.createTree = createTree;

const hydrateTree = (opts, impl, parent, tree, index = 0) => {
  if (isArray(tree)) {
    const el = impl.getChild(parent, index);

    if (typeof tree[0] === "function") {
      hydrateTree(opts, impl, parent, tree[0].apply(null, [opts.ctx, ...tree.slice(1)]), index);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.hydrateTree(opts, parent, tree, index);
    }

    maybeInitElement(el, tree);

    for (let a in attribs) {
      a.indexOf("on") === 0 && impl.setAttrib(el, a, attribs[a]);
    }

    for (let n = tree.length, i = 2; i < n; i++) {
      hydrateTree(opts, impl, el, tree[i], i - 2);
    }
  } else if (isNotStringAndIterable(tree)) {
    for (let t of tree) {
      hydrateTree(opts, impl, parent, t, index);
      index++;
    }
  }
};
/**
 * Creates a new DOM element of type `tag` with optional `attribs`. If
 * `parent` is not `null`, the new element will be inserted as child at
 * given `insert` index. If `insert` is missing, the element will be
 * appended to the `parent`'s list of children. Returns new DOM node.
 *
 * If `tag` is a known SVG element name, the new element will be created
 * with the proper SVG XML namespace.
 *
 * @param parent
 * @param tag
 * @param attribs
 * @param insert
 */


exports.hydrateTree = hydrateTree;

const createElement = (parent, tag, attribs, insert) => {
  const el = _hiccup.SVG_TAGS[tag] ? document.createElementNS(_hiccup.SVG_NS, tag) : document.createElement(tag);
  attribs && setAttribs(el, attribs);
  return addChild(parent, el, insert);
};

exports.createElement = createElement;

const createTextElement = (parent, content, insert) => addChild(parent, document.createTextNode(content), insert);

exports.createTextElement = createTextElement;

const addChild = (parent, child, insert) => parent ? insert === undefined ? parent.appendChild(child) : parent.insertBefore(child, parent.children[insert]) : child;

exports.addChild = addChild;

const getChild = (parent, child) => parent.children[child];

exports.getChild = getChild;

const replaceChild = (opts, impl, parent, child, tree, init = true) => (impl.removeChild(parent, child), impl.createTree(opts, parent, tree, child, init));

exports.replaceChild = replaceChild;

const cloneWithNewAttribs = (el, attribs) => {
  const res = el.cloneNode(true);
  setAttribs(res, attribs);
  el.parentNode.replaceChild(res, el);
  return res;
};

exports.cloneWithNewAttribs = cloneWithNewAttribs;

const setContent = (el, body) => el.textContent = body;

exports.setContent = setContent;

const setAttribs = (el, attribs) => {
  for (let k in attribs) {
    setAttrib(el, k, attribs[k], attribs);
  }

  return el;
};
/**
 * Sets a single attribute on given element. If attrib name is NOT an
 * event name (prefix: "on") and its value is a function, it is called
 * with given `attribs` object (usually the full attrib object passed to
 * `setAttribs`) and the function's return value is used as the actual
 * attrib value.
 *
 * Special rules apply for certain attributes:
 *
 * - "style": delegated to `setStyle()`
 * - "value": delegated to `updateValueAttrib()`
 * - attrib IDs starting with "on" are treated as event listeners
 *
 * If the given (or computed) attrib value is `false` or `undefined` the
 * attrib is removed from the element.
 *
 * @param el
 * @param id
 * @param val
 * @param attribs
 */


exports.setAttribs = setAttribs;

const setAttrib = (el, id, val, attribs) => {
  if (id.startsWith("__")) return;
  const isListener = id.indexOf("on") === 0;

  if (!isListener && typeof val === "function") {
    val = val(attribs);
  }

  if (val !== undefined && val !== false) {
    switch (id) {
      case "style":
        setStyle(el, val);
        break;

      case "value":
        updateValueAttrib(el, val);
        break;

      case "accesskey":
        el.accessKey = val;
        break;

      case "contenteditable":
        el.contentEditable = val;
        break;

      case "tabindex":
        el.tabIndex = val;
        break;

      case "align":
      case "autocapitalize":
      case "checked":
      case "dir":
      case "draggable":
      case "hidden":
      case "id":
      case "lang":
      case "namespaceURI":
      case "scrollTop":
      case "scrollLeft":
      case "title":
        // TODO add more properties / enumerated attribs?
        el[id] = val;
        break;

      default:
        isListener ? setListener(el, id.substr(2), val) : el.setAttribute(id, val === true ? "" : val);
    }
  } else {
    el[id] != null ? el[id] = null : el.removeAttribute(id);
  }

  return el;
};
/**
 * Updates an element's `value` property. For form elements it too
 * ensures the edit cursor retains its position.
 *
 * @param el
 * @param v
 */


exports.setAttrib = setAttrib;

const updateValueAttrib = (el, v) => {
  let ev;

  switch (el.type) {
    case "text":
    case "textarea":
    case "password":
    case "search":
    case "number":
    case "email":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
    case "time":
    case "week":
    case "month":
      if ((ev = el.value) !== undefined && typeof v === "string") {
        const off = v.length - (ev.length - (el.selectionStart || 0));
        el.value = v;
        el.selectionStart = el.selectionEnd = off;
        break;
      }

    default:
      el.value = v;
  }
};

exports.updateValueAttrib = updateValueAttrib;

const removeAttribs = (el, attribs, prev) => {
  for (let i = attribs.length; --i >= 0;) {
    const a = attribs[i];

    if (a.indexOf("on") === 0) {
      removeListener(el, a.substr(2), prev[a]);
    } else {
      el.hasAttribute(a) ? el.removeAttribute(a) : el[a] = null;
    }
  }
};

exports.removeAttribs = removeAttribs;

const setStyle = (el, styles) => (el.setAttribute("style", (0, _hiccup.css)(styles)), el);
/**
 * Adds event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setStyle = setStyle;

const setListener = (el, id, listener) => isArray(listener) ? el.addEventListener(id, ...listener) : el.addEventListener(id, listener);
/**
 * Removes event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setListener = setListener;

const removeListener = (el, id, listener) => isArray(listener) ? el.removeEventListener(id, ...listener) : el.removeEventListener(id, listener);

exports.removeListener = removeListener;

const clearDOM = el => el.innerHTML = "";

exports.clearDOM = clearDOM;

const removeChild = (parent, childIdx) => {
  const n = parent.children[childIdx];
  n !== undefined && parent.removeChild(n);
};

exports.removeChild = removeChild;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/hiccup":"../../node_modules/@thi.ng/hiccup/index.js"}],"../../node_modules/@thi.ng/hdom/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeTree = exports.normalizeElement = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;
const isPlainObject = _checks.isPlainObject;
/**
 * Expands single hiccup element/component into its canonical form:
 *
 * ```
 * [tagname, {attribs}, ...children]
 * ```
 *
 * Emmet-style ID and class names in the original tagname are moved into
 * the attribs object, e.g.:
 *
 * ```
 * ["div#foo.bar.baz"] => ["div", {id: "foo", class: "bar baz"}]
 * ```
 *
 * If both Emmet-style classes AND a `class` attrib exists, the former
 * are appended to the latter:
 *
 * ```
 * ["div.bar.baz", {class: "foo"}] => ["div", {class: "foo bar baz"}]
 * ```
 *
 * Elements with `__skip` attrib enabled and no children, will have an
 * empty text child element injected.
 *
 * @param spec
 * @param keys
 */

const normalizeElement = (spec, keys) => {
  let tag = spec[0];
  let hasAttribs = isPlainObject(spec[1]);
  let match;
  let mtag;
  let id;
  let clazz;
  let attribs;

  if (typeof tag !== "string" || !(match = _hiccup.RE_TAG.exec(tag))) {
    (0, _errors.illegalArgs)(`${tag} is not a valid tag name`);
  }

  mtag = match[1]; // return orig if already normalized and satisfies key requirement

  if (tag === mtag && hasAttribs && (!keys || spec[1].key)) {
    return spec;
  }

  attribs = hasAttribs ? Object.assign({}, spec[1]) : {};
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  return attribs.__skip && spec.length < 3 ? [mtag, attribs] : [mtag, attribs, ...spec.slice(hasAttribs ? 2 : 1)];
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param tree
 */


exports.normalizeElement = normalizeElement;

const normalizeTree = (opts, tree) => _normalizeTree(tree, opts, opts.ctx, [0], opts.keys !== false, opts.span !== false);

exports.normalizeTree = normalizeTree;

const _normalizeTree = (tree, opts, ctx, path, keys, span) => {
  if (tree == null) {
    return;
  }

  if (isArray(tree)) {
    if (tree.length === 0) {
      return;
    }

    let norm,
        nattribs = tree[1],
        impl; // if available, use branch-local normalize implementation

    if (nattribs && (impl = nattribs.__impl) && (impl = impl.normalizeTree)) {
      return impl(opts, tree);
    }

    const tag = tree[0]; // use result of function call
    // pass ctx as first arg and remaining array elements as rest args

    if (typeof tag === "function") {
      return _normalizeTree(tag.apply(null, [ctx, ...tree.slice(1)]), opts, ctx, path, keys, span);
    } // component object w/ life cycle methods
    // (render() is the only required hook)


    if (typeof tag.render === "function") {
      const args = [ctx, ...tree.slice(1)];
      norm = _normalizeTree(tag.render.apply(tag, args), opts, ctx, path, keys, span);

      if (isArray(norm)) {
        norm.__this = tag;
        norm.__init = tag.init;
        norm.__release = tag.release;
        norm.__args = args;
      }

      return norm;
    }

    norm = normalizeElement(tree, keys);
    nattribs = norm[1];

    if (nattribs.__normalize === false) {
      return norm;
    }

    if (keys && nattribs.key === undefined) {
      nattribs.key = path.join("-");
    }

    if (norm.length > 2) {
      const tag = norm[0];
      const res = [tag, nattribs];
      span = span && !_hiccup.NO_SPANS[tag];

      for (let i = 2, j = 2, k = 0, n = norm.length; i < n; i++) {
        let el = norm[i];

        if (el != null) {
          const isarray = isArray(el);

          if (isarray && isArray(el[0]) || !isarray && isNotStringAndIterable(el)) {
            for (let c of el) {
              c = _normalizeTree(c, opts, ctx, path.concat(k), keys, span);

              if (c !== undefined) {
                res[j++] = c;
              }

              k++;
            }
          } else {
            el = _normalizeTree(el, opts, ctx, path.concat(k), keys, span);

            if (el !== undefined) {
              res[j++] = el;
            }

            k++;
          }
        }
      }

      return res;
    }

    return norm;
  }

  if (typeof tree === "function") {
    return _normalizeTree(tree(ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.toHiccup === "function") {
    return _normalizeTree(tree.toHiccup(opts.ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.deref === "function") {
    return _normalizeTree(tree.deref(), opts, ctx, path, keys, span);
  }

  return span ? ["span", keys ? {
    key: path.join("-")
  } : {}, tree.toString()] : tree.toString();
};
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../../node_modules/@thi.ng/errors/index.js","@thi.ng/hiccup":"../../node_modules/@thi.ng/hiccup/index.js"}],"../../node_modules/@thi.ng/hdom/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMPL = void 0;

var _diff = require("./diff");

var _dom = require("./dom");

var _normalize = require("./normalize");

/**
 * Default target implementation to manipulate browser DOM.
 */
const DEFAULT_IMPL = {
  createTree(opts, parent, tree, child, init) {
    return (0, _dom.createTree)(opts, this, parent, tree, child, init);
  },

  hydrateTree(opts, parent, tree, child) {
    return (0, _dom.hydrateTree)(opts, this, parent, tree, child);
  },

  diffTree(opts, parent, prev, curr, child) {
    (0, _diff.diffTree)(opts, this, parent, prev, curr, child);
  },

  normalizeTree: _normalize.normalizeTree,

  getElementById(id) {
    return document.getElementById(id);
  },

  getChild: _dom.getChild,
  createElement: _dom.createElement,
  createTextElement: _dom.createTextElement,

  replaceChild(opts, parent, child, tree, init) {
    (0, _dom.replaceChild)(opts, this, parent, child, tree, init);
  },

  removeChild: _dom.removeChild,
  setContent: _dom.setContent,
  removeAttribs: _dom.removeAttribs,
  setAttrib: _dom.setAttrib
};
exports.DEFAULT_IMPL = DEFAULT_IMPL;
},{"./diff":"../../node_modules/@thi.ng/hdom/diff.js","./dom":"../../node_modules/@thi.ng/hdom/dom.js","./normalize":"../../node_modules/@thi.ng/hdom/normalize.js"}],"../../node_modules/@thi.ng/hdom/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveRoot = void 0;

var _checks = require("@thi.ng/checks");

const resolveRoot = (root, impl) => (0, _checks.isString)(root) ? impl.getElementById(root) : root;

exports.resolveRoot = resolveRoot;
},{"@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js"}],"../../node_modules/@thi.ng/hdom/render-once.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOnce = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * One-off hdom tree conversion & target DOM application. Takes same
 * options as `start()`, but performs no diffing and only creates or
 * hydrates target once. The given tree is first normalized and if
 * result is `null` or `undefined` no further action will be taken.
 *
 * @param tree
 * @param opts
 * @param impl
 */
const renderOnce = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  opts = Object.assign({
    root: "app"
  }, opts);
  opts.ctx = (0, _hiccup.derefContext)(opts.ctx, opts.autoDerefKeys);
  const root = (0, _utils.resolveRoot)(opts.root, impl);
  tree = impl.normalizeTree(opts, tree);
  if (!tree) return;
  opts.hydrate ? impl.hydrateTree(opts, root, tree) : impl.createTree(opts, root, tree);
};

exports.renderOnce = renderOnce;
},{"@thi.ng/hiccup":"../../node_modules/@thi.ng/hiccup/index.js","./default":"../../node_modules/@thi.ng/hdom/default.js","./utils":"../../node_modules/@thi.ng/hdom/utils.js"}],"../../node_modules/@thi.ng/hdom/start.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * Takes an hiccup tree (array, function or component object w/ life
 * cycle methods) and an optional object of DOM update options. Starts
 * RAF update loop, in each iteration first normalizing given tree, then
 * computing diff to previous frame's tree and applying any changes to
 * the real DOM. The `ctx` option can be used for passing arbitrary
 * config data or state down into the hiccup component tree. Any
 * embedded component function in the tree will receive this context
 * object (shallow copy) as first argument, as will life cycle methods
 * in component objects. If the `autoDerefKeys` option is given, attempts
 * to auto-expand/deref the given keys in the user supplied context
 * object (`ctx` option) prior to *each* tree normalization. All of
 * these values should implement the thi.ng/api `IDeref` interface (e.g.
 * atoms, cursors, views, rstreams etc.). This feature can be used to
 * define dynamic contexts linked to the main app state, e.g. using
 * derived views provided by thi.ng/atom.
 *
 * **Selective updates**: No updates will be applied if the given hiccup
 * tree is `undefined` or `null` or a root component function returns no
 * value. This way a given root function can do some state handling of
 * its own and implement fail-fast checks to determine no DOM updates
 * are necessary, save effort re-creating a new hiccup tree and request
 * skipping DOM updates via this function. In this case, the previous
 * DOM tree is kept around until the root function returns a tree again,
 * which then is diffed and applied against the previous tree kept as
 * usual. Any number of frames may be skipped this way.
 *
 * **Important:** Unless the `hydrate` option is enabled, the parent
 * element given is assumed to have NO children at the time when
 * `start()` is called. Since hdom does NOT track the real DOM, the
 * resulting changes will result in potentially undefined behavior if
 * the parent element wasn't empty. Likewise, if `hydrate` is enabled,
 * it is assumed that an equivalent DOM (minus listeners) already exists
 * (i.e. generated via SSR) when `start()` is called. Any other
 * discrepancies between the pre-existing DOM and the hdom trees will
 * cause undefined behavior.
 *
 * Returns a function, which when called, immediately cancels the update
 * loop.
 *
 * @param tree hiccup DOM tree
 * @param opts options
 * @param impl hdom target implementation
 */
const start = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  const _opts = Object.assign({
    root: "app"
  }, opts);

  let prev = [];
  let isActive = true;
  const root = (0, _utils.resolveRoot)(_opts.root, impl);

  const update = () => {
    if (isActive) {
      _opts.ctx = (0, _hiccup.derefContext)(opts.ctx, _opts.autoDerefKeys);
      const curr = impl.normalizeTree(_opts, tree);

      if (curr != null) {
        if (_opts.hydrate) {
          impl.hydrateTree(_opts, root, curr);
          _opts.hydrate = false;
        } else {
          impl.diffTree(_opts, root, prev, curr);
        }

        prev = curr;
      } // check again in case one of the components called cancel


      isActive && requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
  return () => isActive = false;
};

exports.start = start;
},{"@thi.ng/hiccup":"../../node_modules/@thi.ng/hiccup/index.js","./default":"../../node_modules/@thi.ng/hdom/default.js","./utils":"../../node_modules/@thi.ng/hdom/utils.js"}],"../../node_modules/@thi.ng/hdom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _default = require("./default");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default[key];
    }
  });
});

var _diff = require("./diff");

Object.keys(_diff).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _diff[key];
    }
  });
});

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _renderOnce = require("./render-once");

Object.keys(_renderOnce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderOnce[key];
    }
  });
});

var _start = require("./start");

Object.keys(_start).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _start[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
},{"./api":"../../node_modules/@thi.ng/hdom/api.js","./default":"../../node_modules/@thi.ng/hdom/default.js","./diff":"../../node_modules/@thi.ng/hdom/diff.js","./dom":"../../node_modules/@thi.ng/hdom/dom.js","./normalize":"../../node_modules/@thi.ng/hdom/normalize.js","./render-once":"../../node_modules/@thi.ng/hdom/render-once.js","./start":"../../node_modules/@thi.ng/hdom/start.js","./utils":"../../node_modules/@thi.ng/hdom/utils.js"}],"../../node_modules/@thi.ng/geom-closest-point/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closestPointAABB = exports.closestPointRect = exports.closestPointSphere = exports.closestPointCircle = exports.closestPointPlane = exports.distToPlane = exports.closestPointArray = exports.farthestPointSegment = exports.closestPointPolyline = exports.distToSegment = exports.closestPointSegment = exports.distToLine = exports.closestPointLine = exports.closestT = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

/**
 * Computes the parametric distance `t` of point `p` projected onto line
 * `a` -> `b`, relative to `a`. I.e. the projection of `p` can then be
 * computed like so:
 *
 * ```
 * mixN([], a, b, closestT(p, a, b))
 * ```
 *
 * If the return value is outside the closed [0,1] interval, the
 * projected point lies outside the line segment. Returns `undefined` if
 * `a` and `b` are coincident.
 *
 * @see closestPointLine
 * @see closestPointSegment
 *
 * @param p
 * @param a
 * @param b
 */
const closestT = (p, a, b) => {
  const d = (0, _vectors.sub)([], b, a);
  const l = (0, _vectors.magSq)(d);
  return l > 1e-6 ? (0, _vectors.dot)((0, _vectors.sub)([], p, a), d) / l : undefined;
};
/**
 * Returns closest point to `p` on infinite line defined by points `a`
 * and `b`. Use `closestPointSegment` to only consider the actual line
 * segment between these two points.
 *
 * @see closestPointSegment
 *
 * @param p
 * @param a
 * @param b
 */


exports.closestT = closestT;

const closestPointLine = (p, a, b) => (0, _vectors.mixN)([], a, b, closestT(p, a, b) || 0);
/**
 * Returns distance from `p` to closest point to infinite line `a` ->
 * `b`. Use `distToSegment` to only consider the actual line segment
 * between these two points.
 *
 * @see distToSegment
 *
 * @param p
 * @param a
 * @param b
 */


exports.closestPointLine = closestPointLine;

const distToLine = (p, a, b) => (0, _vectors.dist)(p, closestPointLine(p, a, b) || a);
/**
 * Returns closest point to `p` on line segment `a` -> `b`. By default,
 * if the result point lies outside the segment, returns a copy of the
 * closest end point. The result is written to the optional `out` vector
 * (or if omitted, a new one is created).
 *
 * If `insideOnly` is true, only returns the closest point iff it
 * actually is inside the segment. The behavior of this configurable via
 * the optional `eps` arg and by default includes both end points. This
 * function uses `closestT` to compute the parametric position of the
 * result point and determine if it lies within the line segment. If
 * `eps > 0`, the end points `a` and `b` will be excluded from the
 * match, effectively shortening the valid line segment from both ends,
 * i.e. the valid interval of the parametric position will be
 * [eps,1-eps]. If the result lies outside this interval, the function
 * returns `undefined`. Likewise, if `a` and `b` are coincident.
 *
 * @param p
 * @param a
 * @param b
 * @param out
 * @param eps
 */


exports.distToLine = distToLine;

const closestPointSegment = (p, a, b, out, insideOnly = false, eps = 0) => {
  const t = closestT(p, a, b);

  if (t !== undefined && (!insideOnly || t >= eps && t <= 1 - eps)) {
    out = out || (0, _vectors.empty)(p);
    return t <= 0 ? (0, _vectors.set)(out, a) : t >= 1 ? (0, _vectors.set)(out, b) : (0, _vectors.mixN)(out, a, b, t);
  }
};
/**
 * Returns distance from `p` to closest point on line segment `a` ->
 * `b`.
 *
 * @param p
 * @param a
 * @param b
 */


exports.closestPointSegment = closestPointSegment;

const distToSegment = (p, a, b) => (0, _vectors.dist)(p, closestPointSegment(p, a, b) || a);

exports.distToSegment = distToSegment;

const closestPointPolyline = (p, pts, closed = false, out = []) => {
  if (!pts.length) return;
  const tmp = [];
  const n = pts.length - 1;
  let minD = Infinity,
      i,
      j;

  if (closed) {
    i = n;
    j = 0;
  } else {
    i = 0;
    j = 1;
  }

  for (; j <= n; i = j, j++) {
    if (closestPointSegment(p, pts[i], pts[j], tmp)) {
      const d = (0, _vectors.distSq)(p, tmp);

      if (d < minD) {
        minD = d;
        (0, _vectors.set)(out, tmp);
      }
    }
  }

  return out;
};
/**
 * Returns the index of the start point containing the segment in the
 * polyline array `points` farthest away from `p` with regards to the
 * line segment `a` to `b`. `points` is only checked between indices
 * `from` and `to` (not including the latter).
 *
 * @param a
 * @param b
 * @param points
 * @param from
 * @param to
 */


exports.closestPointPolyline = closestPointPolyline;

const farthestPointSegment = (a, b, points, from = 0, to = points.length) => {
  let maxD = -1;
  let maxIdx = -1;
  const tmp = (0, _vectors.empty)(a);

  for (let i = from; i < to; i++) {
    const p = points[i];
    const d = (0, _vectors.distSq)(p, closestPointSegment(p, a, b, tmp) || a);

    if (d > maxD) {
      maxD = d;
      maxIdx = i;
    }
  }

  return [maxIdx, Math.sqrt(maxD)];
};

exports.farthestPointSegment = farthestPointSegment;

const closestPointArray = (p, pts, out = []) => {
  let minD = Infinity;
  let closest;

  for (let i = pts.length; --i >= 0;) {
    const d = (0, _vectors.distSq)(pts[i], p);

    if (d < minD) {
      minD = d;
      closest = pts[i];
    }
  }

  return closest ? (0, _vectors.set)(out, closest) : undefined;
};

exports.closestPointArray = closestPointArray;

const distToPlane = (p, n, w) => (0, _vectors.dot)(n, p) - w;

exports.distToPlane = distToPlane;

const closestPointPlane = (p, normal, w, out = []) => (0, _vectors.sub)(out, p, (0, _vectors.normalize)(out, normal, distToPlane(p, normal, w)));

exports.closestPointPlane = closestPointPlane;

const closestPointCircle = (p, c, r, out = []) => (0, _vectors.add)(out, c, (0, _vectors.normalize)(out, (0, _vectors.sub)(out, p, c), r));

exports.closestPointCircle = closestPointCircle;
const closestPointSphere = closestPointCircle;
exports.closestPointSphere = closestPointSphere;

const closestPointRect = (p, bmin, bmax, out = []) => {
  const [minID, minW] = closestBoxEdge(p, bmin, bmax, 4);
  return minID === 0 ? (0, _vectors.setC2)(out, minW, (0, _math.clamp)(p[1], bmin[1], bmax[1])) : (0, _vectors.setC2)(out, (0, _math.clamp)(p[0], bmin[0], bmax[0]), minW);
};

exports.closestPointRect = closestPointRect;

const closestPointAABB = (p, bmin, bmax, out = []) => {
  const [minID, minW] = closestBoxEdge(p, bmin, bmax, 6);
  return minID === 0 ? (0, _vectors.setC3)(out, minW, (0, _math.clamp)(p[1], bmin[1], bmax[1]), (0, _math.clamp)(p[2], bmin[2], bmax[2])) : minID === 1 ? (0, _vectors.setC3)(out, (0, _math.clamp)(p[0], bmin[0], bmax[0]), minW, (0, _math.clamp)(p[2], bmin[2], bmax[2])) : (0, _vectors.setC3)(out, (0, _math.clamp)(p[0], bmin[0], bmax[0]), (0, _math.clamp)(p[1], bmin[1], bmax[1]), minW);
};

exports.closestPointAABB = closestPointAABB;

const closestBoxEdge = (p, bmin, bmax, n) => {
  let minD = Infinity;
  let minID;
  let minW;

  for (let i = 0; i < n; i++) {
    const j = i >> 1;
    const w = (i & 1 ? bmax : bmin)[j];
    const d = Math.abs(p[j] - w);

    if (d < minD) {
      minD = d;
      minID = j;
      minW = w;
    }
  }

  return [minID, minW];
};
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/geom-isec/point.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointInRect = exports.pointInAABB = exports.classifyPointPolyPair = exports.pointInPolygon2 = exports.classifyPointInTriangle2 = exports.pointInTriangle2 = exports.pointInCircumCircle = exports.classifyPointInCircle = exports.pointInSphere = exports.pointInCircle = exports.pointInSegment = void 0;

var _geomClosestPoint = require("@thi.ng/geom-closest-point");

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

const pointInSegment = (p, a, b, eps = _math.EPS) => {
  const t = (0, _geomClosestPoint.closestT)(p, a, b);
  return t !== undefined ? (0, _vectors.distSq)(p, (0, _vectors.mixN)([], a, b, (0, _math.clamp01)(t))) < eps * eps : false;
};

exports.pointInSegment = pointInSegment;

const pointInCircle = (p, pos, r) => (0, _vectors.distSq)(pos, p) <= r * r;

exports.pointInCircle = pointInCircle;
const pointInSphere = pointInCircle;
exports.pointInSphere = pointInSphere;

const classifyPointInCircle = (p, pos, r, eps = _math.EPS) => (0, _math.sign)(r * r - (0, _vectors.distSq)(pos, p), eps);

exports.classifyPointInCircle = classifyPointInCircle;

const pointInCircumCircle = (a, b, c, d) => (0, _vectors.magSq)(a) * (0, _vectors.signedArea2)(b, c, d) - (0, _vectors.magSq)(b) * (0, _vectors.signedArea2)(a, c, d) + (0, _vectors.magSq)(c) * (0, _vectors.signedArea2)(a, b, d) - (0, _vectors.magSq)(d) * (0, _vectors.signedArea2)(a, b, c) > 0;

exports.pointInCircumCircle = pointInCircumCircle;

const pointInTriangle2 = (p, a, b, c) => {
  const s = (0, _vectors.clockwise2)(a, b, c) ? 1 : -1;
  return s * (0, _vectors.signedArea2)(a, c, p) >= 0 && s * (0, _vectors.signedArea2)(b, a, p) >= 0 && s * (0, _vectors.signedArea2)(c, b, p) >= 0;
};

exports.pointInTriangle2 = pointInTriangle2;

const classifyPointInTriangle2 = (p, a, b, c, eps = _math.EPS) => {
  const s = (0, _vectors.clockwise2)(a, b, c) ? 1 : -1;
  return (0, _math.sign)(Math.min(s * (0, _vectors.signedArea2)(a, c, p), s * (0, _vectors.signedArea2)(b, a, p), s * (0, _vectors.signedArea2)(c, b, p)), eps);
};

exports.classifyPointInTriangle2 = classifyPointInTriangle2;

const pointInPolygon2 = (p, pts) => {
  const n = pts.length - 1;
  const px = p[0];
  const py = p[1];
  let a = pts[n];
  let b = pts[0];
  let inside = 0;

  for (let i = 0; i <= n; a = b, b = pts[++i]) {
    inside = classifyPointPolyPair(px, py, a[0], a[1], b[0], b[1], inside);
  }

  return inside;
};

exports.pointInPolygon2 = pointInPolygon2;

const classifyPointPolyPair = (px, py, ax, ay, bx, by, inside) => (ay < py && by >= py || by < py && ay >= py) && (ax <= px || bx <= px) ? inside ^ (ax + (py - ay) / (by - ay) * (bx - ax) < px ? 1 : 0) : inside;

exports.classifyPointPolyPair = classifyPointPolyPair;

const pointInAABB = ([x, y, z], pos, size) => x >= pos[0] && x <= pos[0] + size[0] && y >= pos[1] && y <= pos[1] + size[1] && z >= pos[2] && z <= pos[2] + size[2];

exports.pointInAABB = pointInAABB;

const pointInRect = ([x, y], pos, size) => x >= pos[0] && x <= pos[0] + size[0] && y >= pos[1] && y <= pos[1] + size[1];

exports.pointInRect = pointInRect;
},{"@thi.ng/geom-closest-point":"../../node_modules/@thi.ng/geom-closest-point/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/geom-isec/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NONE = void 0;
const NONE = Object.freeze({
  type: 0
  /* NONE */

});
exports.NONE = NONE;
},{}],"../../node_modules/@thi.ng/geom-isec/circle-circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testCircleCircle = exports.intersectCircleCircle = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const intersectCircleCircle = (a, b, ar, br) => {
  const delta = (0, _vectors.sub)([], b, a);
  const d = (0, _vectors.mag)(delta);

  if ((0, _math.eqDeltaFixed)(d, 0)) {
    return {
      type: 2
      /* COINCIDENT */

    };
  }

  if (d <= ar + br && d >= Math.abs(ar - br)) {
    ar *= ar;
    const alpha = (ar - br * br + d * d) / (2 * d);
    const h = Math.sqrt(ar - alpha * alpha);
    const p = (0, _vectors.maddN)([], delta, alpha / d, a);
    const t = (0, _vectors.mulN)(null, (0, _vectors.perpendicularCCW)(null, delta), h / d);
    return {
      type: 4
      /* INTERSECT */
      ,
      isec: [(0, _vectors.add)([], p, t), (0, _vectors.sub)([], p, t)]
    };
  }

  return _api.NONE;
};

exports.intersectCircleCircle = intersectCircleCircle;

const testCircleCircle = (a, b, ar, br) => (0, _vectors.distSq)(a, b) <= Math.pow(ar + br, 2);

exports.testCircleCircle = testCircleCircle;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/line-line.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isParallelLine = exports.intersectLineLine = void 0;

var _geomClosestPoint = require("@thi.ng/geom-closest-point");

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

const intersectLineLine = (a, b, c, d, eps = _math.EPS) => {
  const bax = b[0] - a[0];
  const bay = b[1] - a[1];
  const dcx = d[0] - c[0];
  const dcy = d[1] - c[1];
  const acx = a[0] - c[0];
  const acy = a[1] - c[1];
  const det = dcy * bax - dcx * bay;
  let alpha = dcx * acy - dcy * acx;
  let beta = bax * acy - bay * acx;

  if ((0, _math.eqDeltaFixed)(det, 0, eps)) {
    if ((0, _math.eqDeltaFixed)(alpha, 0, eps) && (0, _math.eqDeltaFixed)(beta, 0, eps)) {
      let isec = (0, _geomClosestPoint.closestPointSegment)(c, a, b, undefined, true) || (0, _geomClosestPoint.closestPointSegment)(d, a, b, undefined, true);
      return {
        type: isec ? 2
        /* COINCIDENT */
        : 3
        /* COINCIDENT_NO_INTERSECT */
        ,
        isec
      };
    }

    return {
      type: 1
      /* PARALLEL */

    };
  }

  alpha /= det;
  beta /= det;
  const ieps = 1 - eps;
  return {
    type: eps < alpha && alpha < ieps && eps < beta && beta < ieps ? 4
    /* INTERSECT */
    : 5
    /* INTERSECT_OUTSIDE */
    ,
    isec: (0, _vectors.mixN2)([], a, b, alpha),
    alpha,
    beta,
    det
  };
};
/**
 * 2D only. Returns true if line `a`,`b` is parallel (or coincident) to
 * line `c`,`d`.
 *
 * @param a
 * @param b
 * @param c
 * @param d
 */


exports.intersectLineLine = intersectLineLine;

const isParallelLine = (a, b, c, d) => (0, _math.eqDeltaFixed)((d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]), 0);

exports.isParallelLine = isParallelLine;
},{"@thi.ng/geom-closest-point":"../../node_modules/@thi.ng/geom-closest-point/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js"}],"../../node_modules/@thi.ng/geom-isec/plane-plane.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectPlanePlane = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const intersectPlanePlane = (na, wa, nb, wb) => {
  const dn = (0, _vectors.dot3)(na, nb);

  if ((0, _math.eqDeltaFixed)(dn, 1)) {
    return (0, _math.eqDelta)(wa, wb) ? {
      type: 2
      /* COINCIDENT */

    } : _api.NONE;
  }

  const det = 1 / (1 - dn * dn);
  const da = (wa - wb * dn) * det;
  const db = (wb - wa * dn) * det;
  return {
    type: 4
    /* INTERSECT */
    ,
    isec: [(0, _vectors.add3)(null, (0, _vectors.mulN3)([], na, da), (0, _vectors.mulN3)([], nb, db)), (0, _vectors.cross3)([], na, nb)]
  };
};

exports.intersectPlanePlane = intersectPlanePlane;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/ray-circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectRayCircle = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const intersectRayCircle = (rpos, dir, spos, r) => {
  const delta = (0, _vectors.sub)([], spos, rpos);
  const w = (0, _vectors.dot)(delta, dir);
  let d = r * r + w * w - (0, _vectors.magSq)(delta);

  if (d >= 0) {
    d = Math.sqrt(d);
    const a = w + d;
    const b = w - d;
    const isec = a >= 0 ? b >= 0 ? a > b ? [(0, _vectors.maddN)(delta, dir, b, rpos), (0, _vectors.maddN)([], dir, a, rpos)] : [(0, _vectors.maddN)(delta, dir, a, rpos), (0, _vectors.maddN)([], dir, b, rpos)] : [(0, _vectors.maddN)(delta, dir, a, rpos)] : b >= 0 ? [(0, _vectors.maddN)(delta, dir, b, rpos)] : undefined;
    return isec ? {
      type: 4
      /* INTERSECT */
      ,
      isec
    } : _api.NONE;
  }

  return _api.NONE;
};

exports.intersectRayCircle = intersectRayCircle;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/ray-line.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectRayLine = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const intersectRayLine = (rpos, dir, a, b) => {
  const bax = b[0] - a[0];
  const bay = b[1] - a[1];
  const d = dir[0] * bay - dir[1] * bax;

  if ((0, _math.eqDeltaFixed)(d, 0)) {
    return _api.NONE;
  }

  const arx = a[0] - rpos[0];
  const ary = a[1] - rpos[1];
  const t = (bay * arx - bax * ary) / d;
  const s = (dir[1] * arx - dir[0] * ary) / d;
  return t >= 0 && s >= 0 && s <= 1 ? {
    type: 4
    /* INTERSECT */
    ,
    isec: (0, _vectors.maddN)([], dir, t, rpos),
    alpha: t
  } : _api.NONE;
};

exports.intersectRayLine = intersectRayLine;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/ray-plane.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectRayPlane = void 0;

var _math = require("@thi.ng/math");

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const intersectRayPlane = (rpos, dir, normal, w, eps = _math.EPS) => {
  const d = (0, _vectors.dot)(normal, dir);
  const cp = (0, _math.sign)((0, _vectors.dot)(normal, rpos) - w, eps);

  if (d > eps && cp < 0 || d < -eps && cp > 0) {
    const isec = (0, _vectors.sub)(null, (0, _vectors.mulN)([], normal, w), rpos);
    const alpha = (0, _vectors.dot)(normal, isec) / d;
    return {
      type: 4
      /* INTERSECT */
      ,
      isec: (0, _vectors.maddN)(isec, dir, alpha, rpos),
      alpha
    };
  }

  return cp === 0 ? {
    type: 2
    /* COINCIDENT */
    ,
    isec: (0, _vectors.copy)(rpos)
  } : _api.NONE;
};

exports.intersectRayPlane = intersectRayPlane;
},{"@thi.ng/math":"../../node_modules/@thi.ng/math/index.js","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/ray-poly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectRayPolylineAll = exports.intersectRayPolyline = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

var _rayLine = require("./ray-line");

const intersectRayPolyline = (rpos, dir, pts, closed = false) => {
  const n = pts.length - 1;
  let minD = Infinity;
  let cross = 0;
  let i, j;

  if (closed) {
    i = pts[n];
    j = pts[0];
  } else {
    i = pts[0];
    j = pts[1];
  }

  for (let k = 0; k <= n; i = j, j = pts[++k]) {
    const d = (0, _rayLine.intersectRayLine)(rpos, dir, i, j).alpha;

    if (d !== undefined) {
      cross++;
      if (d < minD) minD = d;
    }
  }

  return cross > 0 ? {
    type: 4
    /* INTERSECT */
    ,
    isec: (0, _vectors.maddN2)([], dir, minD, rpos),
    inside: !(cross & 1),
    alpha: minD
  } : _api.NONE;
};

exports.intersectRayPolyline = intersectRayPolyline;

const intersectRayPolylineAll = (rpos, dir, pts, closed = false) => {
  const n = pts.length - 1;
  let i, j;

  if (closed) {
    i = pts[n];
    j = pts[0];
  } else {
    i = pts[0];
    j = pts[1];
  }

  const res = [];

  for (let k = 0; k <= n; i = j, j = pts[++k]) {
    const d = (0, _rayLine.intersectRayLine)(rpos, dir, i, j).alpha;

    if (d !== undefined) {
      res.push([d, (0, _vectors.maddN2)([], dir, d, rpos)]);
    }
  }

  return res.length ? {
    type: 4
    /* INTERSECT */
    ,
    isec: res.sort((a, b) => a[0] - b[0]).map(x => x[1])
  } : _api.NONE;
};

exports.intersectRayPolylineAll = intersectRayPolylineAll;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js","./ray-line":"../../node_modules/@thi.ng/geom-isec/ray-line.js"}],"../../node_modules/@thi.ng/geom-isec/ray-rect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testRayAABB = exports.testRayRect = exports.intersectRayAABB = exports.intersectRayRect = void 0;

var _vectors = require("@thi.ng/vectors");

var _api = require("./api");

const min = Math.min;
const max = Math.max;
/**
 * Based on:
 * https://tavianator.com/fast-branchless-raybounding-box-intersections/
 *
 * @param rpos ray origin
 * @param dir ray dir
 * @param bmin rect min
 * @param bmax rect max
 */

const rayRect = (rpos, dir, bmin, bmax) => {
  let p = rpos[0];
  let d = 1 / dir[0];
  let t1 = (bmin[0] - p) * d;
  let t2 = (bmax[0] - p) * d;
  let tmin = min(t1, t2);
  let tmax = max(t1, t2);
  p = rpos[1];
  d = 1 / dir[1];
  t1 = (bmin[1] - p) * d;
  t2 = (bmax[1] - p) * d;
  return [max(tmin, min(t1, t2)), min(tmax, max(t1, t2))];
};
/**
 * Like to `rayRect()`, but for 3D (AABB).
 *
 * @param rpos ray origin
 * @param dir ray dir
 * @param bmin box min
 * @param bmax box max
 */


const rayBox = (rpos, dir, bmin, bmax) => {
  let p = rpos[0];
  let d = 1 / dir[0];
  let t1 = (bmin[0] - p) * d;
  let t2 = (bmax[0] - p) * d;
  let tmin = min(t1, t2);
  let tmax = max(t1, t2);
  p = rpos[1];
  d = 1 / dir[1];
  t1 = (bmin[1] - p) * d;
  t2 = (bmax[1] - p) * d;
  p = rpos[2];
  d = 1 / dir[2];
  t1 = (bmin[2] - p) * d;
  t2 = (bmax[2] - p) * d;
  tmin = max(tmin, min(t1, t2));
  tmax = min(tmax, max(t1, t2));
  return [max(tmin, min(t1, t2)), min(tmax, max(t1, t2))];
};

const intersectWith = fn => (rpos, dir, bmin, bmax) => {
  const t = fn(rpos, dir, bmin, bmax);
  const tmin = t[0];
  const tmax = t[1];
  const inside = tmin < 0;
  return tmax > max(tmin, 0) ? inside ? {
    type: 4
    /* INTERSECT */
    ,
    inside,
    isec: [(0, _vectors.maddN)([], dir, tmax, rpos)],
    alpha: tmax
  } : {
    type: 4
    /* INTERSECT */
    ,
    isec: [(0, _vectors.maddN)([], dir, tmin, rpos), (0, _vectors.maddN)([], dir, tmax, rpos)],
    alpha: tmin,
    beta: tmax
  } : _api.NONE;
};

const intersectRayRect = intersectWith(rayRect);
exports.intersectRayRect = intersectRayRect;
const intersectRayAABB = intersectWith(rayBox);
exports.intersectRayAABB = intersectRayAABB;

const testRayRect = (rpos, dir, bmin, bmax) => {
  const t = rayRect(rpos, dir, bmin, bmax);
  return t[1] > max(t[0], 0);
};

exports.testRayRect = testRayRect;

const testRayAABB = (rpos, dir, bmin, bmax) => {
  const t = rayBox(rpos, dir, bmin, bmax);
  return t[1] > max(t[0], 0);
};

exports.testRayAABB = testRayAABB;
},{"@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","./api":"../../node_modules/@thi.ng/geom-isec/api.js"}],"../../node_modules/@thi.ng/geom-isec/rect-circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testAABBSphere = exports.testRectCircle = void 0;

const testRectCircle = ([rx, ry], [w, h], [cx, cy], r) => axis(cx, rx, w) + axis(cy, ry, h) <= r * r;

exports.testRectCircle = testRectCircle;

const testAABBSphere = ([rx, ry, rz], [w, h, d], [cx, cy, cz], r) => axis(cx, rx, w) + axis(cy, ry, h) + axis(cz, rz, d) <= r * r;

exports.testAABBSphere = testAABBSphere;

const axis = (a, b, c) => Math.pow(a < b ? a - b : a > b + c ? a - b - c : 0, 2);
},{}],"../../node_modules/@thi.ng/geom-isec/rect-rect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testAabbAabb = exports.testRectRect = void 0;

const testRectRect = ([ax, ay], [aw, ah], [bx, by], [bw, bh]) => !(ax > bx + bw || bx > ax + aw || ay > by + bh || by > ay + ah);

exports.testRectRect = testRectRect;

const testAabbAabb = ([ax, ay, az], [aw, ah, ad], [bx, by, bz], [bw, bh, bd]) => !(ax > bx + bw || bx > ax + aw || ay > by + bh || by > ay + ah || az > bz + bd || bz > az + ad);

exports.testAabbAabb = testAabbAabb;
},{}],"../../node_modules/@thi.ng/geom-isec/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _point = require("./point");

Object.keys(_point).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _point[key];
    }
  });
});

var _circleCircle = require("./circle-circle");

Object.keys(_circleCircle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _circleCircle[key];
    }
  });
});

var _lineLine = require("./line-line");

Object.keys(_lineLine).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lineLine[key];
    }
  });
});

var _planePlane = require("./plane-plane");

Object.keys(_planePlane).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _planePlane[key];
    }
  });
});

var _rayCircle = require("./ray-circle");

Object.keys(_rayCircle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rayCircle[key];
    }
  });
});

var _rayLine = require("./ray-line");

Object.keys(_rayLine).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rayLine[key];
    }
  });
});

var _rayPlane = require("./ray-plane");

Object.keys(_rayPlane).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rayPlane[key];
    }
  });
});

var _rayPoly = require("./ray-poly");

Object.keys(_rayPoly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rayPoly[key];
    }
  });
});

var _rayRect = require("./ray-rect");

Object.keys(_rayRect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rayRect[key];
    }
  });
});

var _rectCircle = require("./rect-circle");

Object.keys(_rectCircle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rectCircle[key];
    }
  });
});

var _rectRect = require("./rect-rect");

Object.keys(_rectRect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rectRect[key];
    }
  });
});
},{"./point":"../../node_modules/@thi.ng/geom-isec/point.js","./circle-circle":"../../node_modules/@thi.ng/geom-isec/circle-circle.js","./line-line":"../../node_modules/@thi.ng/geom-isec/line-line.js","./plane-plane":"../../node_modules/@thi.ng/geom-isec/plane-plane.js","./ray-circle":"../../node_modules/@thi.ng/geom-isec/ray-circle.js","./ray-line":"../../node_modules/@thi.ng/geom-isec/ray-line.js","./ray-plane":"../../node_modules/@thi.ng/geom-isec/ray-plane.js","./ray-poly":"../../node_modules/@thi.ng/geom-isec/ray-poly.js","./ray-rect":"../../node_modules/@thi.ng/geom-isec/ray-rect.js","./rect-circle":"../../node_modules/@thi.ng/geom-isec/rect-circle.js","./rect-rect":"../../node_modules/@thi.ng/geom-isec/rect-rect.js"}],"../index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polygonScaler = polygonScaler;

var _transducers = require("@thi.ng/transducers");

var _geomIsec = require("@thi.ng/geom-isec");

var _checks = require("@thi.ng/checks");

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
};

function edgeOrLineIterator(items) {
  return (0, _transducers.partition)(2, 1, (0, _transducers.wrap)(items, 1, false, true));
}

function polygonScaler(polygon, distance) {
  if ((0, _checks.isArray)(distance) && distance.length !== polygon.length) {
    throw new Error('Distances length must be the same length of the polygon.');
  }

  var distances = !(0, _checks.isArray)(distance) ? polygon.map(function (_) {
    return distance;
  }) : distance;

  var lines = __spread(edgeOrLineIterator(polygon));

  var angles = lines.map(function (l) {
    return Math.atan2(l[1][1] - l[0][1], l[1][0] - l[0][0]);
  });

  var linesInDistance = __spread((0, _transducers.zip)(lines, angles, distances)).reduce(function (acc, _a, i) {
    var _b = __read(_a, 3),
        line = _b[0],
        angle = _b[1],
        distance = _b[2];

    var p1 = [-distance * Math.sin(angle) + line[0][0], distance * Math.cos(angle) + line[0][1]];
    var p2 = [-distance * Math.sin(angle) + line[1][0], distance * Math.cos(angle) + line[1][1]];
    acc.push([p1, p2]);
    return acc;
  }, []);

  var intersections = __spread(edgeOrLineIterator(linesInDistance)).map(function (_a) {
    var _b = __read(_a, 2),
        line1 = _b[0],
        line2 = _b[1];

    return (0, _geomIsec.intersectLineLine)(line1[0], line1[1], line2[0], line2[1]).isec;
  });

  return intersections;
}
},{"@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","@thi.ng/geom-isec":"../../node_modules/@thi.ng/geom-isec/index.js","@thi.ng/checks":"../../node_modules/@thi.ng/checks/index.js"}],"demo.ts":[function(require,module,exports) {
"use strict";

var s = _interopRequireWildcard(require("@thi.ng/hiccup-svg"));

var _hdom = require("@thi.ng/hdom");

var _ = require("..");

var vec = _interopRequireWildcard(require("@thi.ng/vectors"));

var _transducers = require("@thi.ng/transducers");

var _math = require("@thi.ng/math");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var makePoly = function (n, r) {
  return (0, _transducers.transduce)((0, _transducers.map)(function (i) {
    return (0, _math.cossin)(i * _math.TAU, r);
  }), (0, _transducers.push)(), (0, _transducers.normRange)(n, false));
};

var _polygon = makePoly(3 + Math.round(Math.random() * 10), 50);

_polygon.forEach(function (point) {
  vec.add2(point, point, [Math.random() * 10, Math.random() * 10]);
  vec.add2(point, point, [150, 150]);
});

var randomRotation = Math.random();

var polygon = _polygon.map(function (point) {
  return vec.rotateAroundPoint2([], point, [150, 150], Math.PI * randomRotation);
});

var dwarf = (0, _.polygonScaler)(polygon, -10);
var bigger = (0, _.polygonScaler)(polygon, 10);
console.assert(dwarf.length === polygon.length, 'length of polygon must be the same');

var app = function () {
  var width = window.innerWidth;
  var height = 500;
  return ['div#app', s.svg({
    "class": 'w-100 h-100',
    preserveAspectRatio: 'xMidYMid',
    viewBox: "0 0 " + width + " " + height
  }, // s.rect([1, 1], width - 2, height - 2, { stroke: 'black', fill: 'none' }),
  // s.group(
  //   { 'stroke-width': 2 },
  //   lines.map((l, i) => s.line(l[0], l[1], { stroke: colors[i] })),
  // ),
  // s.group(
  //   { 'stroke-width': 2 },
  //   linesInDistance.map((l, i) => s.line(l[0], l[1], { stroke: colors[i] })),
  // ),
  // s.group(
  //   { 'stroke-width': 1 },
  //   intersections.map((p, i) => s.circle(p, 5, { stroke: colors[i], fill: 'none' })),
  // ),
  // s.circle([150, 150], 10, { fill: 'none', stroke: 'DimGray' }),
  s.polygon(polygon, {
    'stroke-width': 2,
    fill: 'none',
    stroke: 'DimGray'
  }), s.polygon(dwarf, {
    'stroke-width': 2,
    fill: 'none',
    stroke: 'silver'
  }), s.polygon(bigger, {
    'stroke-width': 2,
    fill: 'none',
    stroke: 'silver'
  }))];
};

(0, _hdom.renderOnce)(app(), {
  root: document.body
});
},{"@thi.ng/hiccup-svg":"../../node_modules/@thi.ng/hiccup-svg/index.js","@thi.ng/hdom":"../../node_modules/@thi.ng/hdom/index.js","..":"../index.ts","@thi.ng/vectors":"../../node_modules/@thi.ng/vectors/index.js","@thi.ng/transducers":"../../node_modules/@thi.ng/transducers/index.js","@thi.ng/math":"../../node_modules/@thi.ng/math/index.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51745" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","demo.ts"], null)
//# sourceMappingURL=/demo.56710ae6.js.map