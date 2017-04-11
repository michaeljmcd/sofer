/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "www/js/" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function() {

/*! jQuery Mobile 1.4.1 | Git HEAD hash: 3455ada <> 2014-02-13T12:05:10Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b,c){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(d){return c(d,a,b),d.mobile}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):c(a.jQuery,a,b)}(this,document,function(a,b,c){!function(a){a.mobile={}}(a),function(a){a.extend(a.mobile,{version:"1.4.1",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:a(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(a,this),function(a,b,c){var d={},e=a.find,f=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,g=/:jqmData\(([^)]*)\)/g;a.extend(a.mobile,{ns:"",getAttribute:function(b,c){var d;b=b.jquery?b[0]:b,b&&b.getAttribute&&(d=b.getAttribute("data-"+a.mobile.ns+c));try{d="true"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:f.test(d)?JSON.parse(d):d}catch(e){}return d},nsNormalizeDict:d,nsNormalize:function(b){return d[b]||(d[b]=a.camelCase(a.mobile.ns+b))},closestPageData:function(a){return a.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),a.fn.jqmData=function(b,d){var e;return"undefined"!=typeof b&&(b&&(b=a.mobile.nsNormalize(b)),e=arguments.length<2||d===c?this.data(b):this.data(b,d)),e},a.jqmData=function(b,c,d){var e;return"undefined"!=typeof c&&(e=a.data(b,c?a.mobile.nsNormalize(c):c,d)),e},a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))},a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))},a.find=function(b,c,d,f){return b.indexOf(":jqmData")>-1&&(b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]")),e.call(this,b,c,d,f)},a.extend(a.find,e)}(a,this),function(a,b){function d(b,c){var d,f,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,f=d.name,b.href&&f&&"map"===d.nodeName.toLowerCase()?(g=a("img[usemap=#"+f+"]")[0],!!g&&e(g)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&e(b)}function e(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var f=0,g=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(this[0].ownerDocument||c):b},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++f)})},removeUniqueId:function(){return this.each(function(){g.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return d(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),e=isNaN(c);return(e||c>=0)&&d(b,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function e(b,c,d,e){return a.each(f,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),e&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var f="Width"===d?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?h["inner"+d].call(this):this.each(function(){a(this).css(g,e(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?h["outer"+d].call(this,b):this.each(function(){a(this).css(g,e(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in c.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(d){if(d!==b)return this.css("zIndex",d);if(this.length)for(var e,f,g=a(this[0]);g.length&&g[0]!==c;){if(e=g.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(f=parseInt(g.css("zIndex"),10),!isNaN(f)&&0!==f))return f;g=g.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}}(a),function(a,b){a.extend(a.mobile,{window:a(b),document:a(c),keyCode:a.ui.keyCode,behaviors:{},silentScroll:function(c){"number"!==a.type(c)&&(c=a.mobile.defaultHomeScroll),a.event.special.scrollstart.enabled=!1,setTimeout(function(){b.scrollTo(0,c),a.mobile.document.trigger("silentscroll",{x:0,y:c})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(b){var c=a(b).closest(".ui-page").jqmData("url"),d=a.mobile.path.documentBase.hrefNoHash;return a.mobile.dynamicBaseEnabled&&c&&a.mobile.path.isPath(c)||(c=d),a.mobile.path.makeUrlAbsolute(c,d)},removeActiveLinkClass:function(b){!a.mobile.activeClickedLink||a.mobile.activeClickedLink.closest("."+a.mobile.activePageClass).length&&!b||a.mobile.activeClickedLink.removeClass(a.mobile.activeBtnClass),a.mobile.activeClickedLink=null},getInheritedTheme:function(a,b){for(var c,d,e=a[0],f="",g=/ui-(bar|body|overlay)-([a-z])\b/;e&&(c=e.className||"",!(c&&(d=g.exec(c))&&(f=d[2])));)e=e.parentNode;return f||b||"a"},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,c){if(!a.mobile.ignoreContentEnabled)return b;var d,e,f,g,h,i=b.length,j=a();for(g=0;i>g;g++){for(e=b.eq(g),f=!1,d=b[g];d;){if(h=d.getAttribute?d.getAttribute("data-"+a.mobile.ns+c):"","false"===h){f=!0;break}d=d.parentNode}f||(j=j.add(e))}return j},getScreenHeight:function(){return b.innerHeight||a.mobile.window.height()},resetActivePageHeight:function(b){var c=a("."+a.mobile.activePageClass),d=c.height(),e=c.outerHeight(!0);b="number"==typeof b?b:a.mobile.getScreenHeight(),c.css("min-height",b-(e-d))},loading:function(){var b=this.loading._widget||a(a.mobile.loader.prototype.defaultHtml).loader(),c=b.loader.apply(b,arguments);return this.loading._widget=b,c}}),a.addDependents=function(b,c){var d=a(b),e=d.jqmData("dependents")||a();d.jqmData("dependents",a(e).add(c))},a.fn.extend({removeWithDependents:function(){a.removeWithDependents(this)},enhanceWithin:function(){var b,c={},d=a.mobile.page.prototype.keepNativeSelector(),e=this;a.mobile.nojs&&a.mobile.nojs(this),a.mobile.links&&a.mobile.links(this),a.mobile.degradeInputsWithin&&a.mobile.degradeInputsWithin(this),a.fn.buttonMarkup&&this.find(a.fn.buttonMarkup.initSelector).not(d).jqmEnhanceable().buttonMarkup(),a.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(d).jqmEnhanceable().fieldcontain(),a.each(a.mobile.widgets,function(b,f){if(f.initSelector){var g=a.mobile.enhanceable(e.find(f.initSelector));g.length>0&&(g=g.not(d)),g.length>0&&(c[f.prototype.widgetName]=g)}});for(b in c)c[b][b]();return this},addDependents:function(b){a.addDependents(this,b)},getEncodedText:function(){return a("<a>").text(this.text()).html()},jqmEnhanceable:function(){return a.mobile.enhanceable(this)},jqmHijackable:function(){return a.mobile.hijackable(this)}}),a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove(),c.remove()},a.addDependents=function(b,c){var d=a(b),e=d.jqmData("dependents")||a();d.jqmData("dependents",a(e).add(c))},a.find.matches=function(b,c){return a.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}}(a,this),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c,d=0;null!=(c=b[d]);d++)try{a(c).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(c){for(var e,f,g=d.call(arguments,1),h=0,i=g.length;i>h;h++)for(e in g[h])f=g[h][e],g[h].hasOwnProperty(e)&&f!==b&&(c[e]=a.isPlainObject(f)?a.isPlainObject(c[e])?a.widget.extend({},c[e],f):a.widget.extend({},f):f);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,this.each(h?function(){var d,e=a.data(this,f);return"instance"===g?(j=e,!1):e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}:function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e,f,g,h=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(h={},e=c.split("."),c=e.shift(),e.length){for(f=h[c]=a.widget.extend({},this.options[c]),g=0;g<e.length-1;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];if(c=e.pop(),d===b)return f[c]===b?null:f[c];f[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];h[c]=d}return this._setOptions(h),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(a),function(a){var b=/[A-Z]/g,c=function(a){return"-"+a.toLowerCase()};a.extend(a.Widget.prototype,{_getCreateOptions:function(){var d,e,f=this.element[0],g={};if(!a.mobile.getAttribute(f,"defaults"))for(d in this.options)e=a.mobile.getAttribute(f,d.replace(b,c)),null!=e&&(g[d]=e);return g}}),a.mobile.widget=a.Widget}(a),function(a){var b="ui-loader",c=a("html");a.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+b+"'><span class='ui-icon-loading'></span><h1></h1></div>",fakeFixLoader:function(){var b=a("."+a.mobile.activeBtnClass).first();this.element.css({top:a.support.scrollTop&&this.window.scrollTop()+this.window.height()/2||b.length&&b.offset().top||100})},checkLoaderPosition:function(){var b=this.element.offset(),c=this.window.scrollTop(),d=a.mobile.getScreenHeight();(b.top<c||b.top-c>d)&&(this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),this.window.unbind("scroll",this.checkLoaderPosition).bind("scroll",a.proxy(this.fakeFixLoader,this)))},resetHtml:function(){this.element.html(a(this.defaultHtml).html())},show:function(d,e,f){var g,h,i;this.resetHtml(),"object"===a.type(d)?(i=a.extend({},this.options,d),d=i.theme):(i=this.options,d=d||i.theme),h=e||(i.text===!1?"":i.text),c.addClass("ui-loading"),g=i.textVisible,this.element.attr("class",b+" ui-corner-all ui-body-"+d+" ui-loader-"+(g||e||d.text?"verbose":"default")+(i.textonly||f?" ui-loader-textonly":"")),i.html?this.element.html(i.html):this.element.find("h1").text(h),this.element.appendTo(a.mobile.pageContainer),this.checkLoaderPosition(),this.window.bind("scroll",a.proxy(this.checkLoaderPosition,this))},hide:function(){c.removeClass("ui-loading"),this.options.text&&this.element.removeClass("ui-loader-fakefix"),a.mobile.window.unbind("scroll",this.fakeFixLoader),a.mobile.window.unbind("scroll",this.checkLoaderPosition)}})}(a,this),function(a,b,d){"$:nomunge";function e(a){return a=a||location.href,"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var f,g="hashchange",h=c,i=a.event.special,j=h.documentMode,k="on"+g in b&&(j===d||j>7);a.fn[g]=function(a){return a?this.bind(g,a):this.trigger(g)},a.fn[g].delay=50,i[g]=a.extend(i[g],{setup:function(){return k?!1:void a(f.start)},teardown:function(){return k?!1:void a(f.stop)}}),f=function(){function c(){var d=e(),h=n(j);d!==j?(m(j=d,h),a(b).trigger(g)):h!==j&&(location.href=location.href.replace(/#.*/,"")+h),f=setTimeout(c,a.fn[g].delay)}var f,i={},j=e(),l=function(a){return a},m=l,n=l;return i.start=function(){f||c()},i.stop=function(){f&&clearTimeout(f),f=d},b.attachEvent&&!b.addEventListener&&!k&&function(){var b,d;i.start=function(){b||(d=a.fn[g].src,d=d&&d+e(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){d||m(e()),c()}).attr("src",d||"javascript:0").insertAfter("body")[0].contentWindow,h.onpropertychange=function(){try{"title"===event.propertyName&&(b.document.title=h.title)}catch(a){}})},i.stop=l,n=function(){return e(b.location.href)},m=function(c,d){var e=b.document,f=a.fn[g].domain;c!==d&&(e.title=h.title,e.open(),f&&e.write('<script>document.domain="'+f+'"</script>'),e.close(),b.location.hash=c)}}(),i}()}(a,this),function(a){b.matchMedia=b.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(c),a.mobile.media=function(a){return b.matchMedia(a).matches}}(a),function(a){var b={touch:"ontouchend"in c};a.mobile.support=a.mobile.support||{},a.extend(a.support,b),a.extend(a.mobile.support,b)}(a),function(a){a.extend(a.support,{orientation:"orientation"in b&&"onorientationchange"in b})}(a),function(a,d){function e(a){var b,c=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+o.join(c+" ")+c).split(" ");for(b in e)if(n[e[b]]!==d)return!0}function f(){var c=b,d=!(!c.document.createElementNS||!c.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||c.opera&&-1===navigator.userAgent.indexOf("Chrome")),e=function(b){b&&d||a("html").addClass("ui-nosvg")},f=new c.Image;f.onerror=function(){e(!1)},f.onload=function(){e(1===f.width&&1===f.height)},f.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function g(){var e,f,g,h="transform-3d",i=a.mobile.media("(-"+o.join("-"+h+"),(-")+"-"+h+"),("+h+")");if(i)return!!i;e=c.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},m.append(e);for(g in f)e.style[g]!==d&&(e.style[g]="translate3d( 100px, 1px, 1px )",i=b.getComputedStyle(e).getPropertyValue(f[g]));return!!i&&"none"!==i}function h(){var b,c,d=location.protocol+"//"+location.host+location.pathname+"ui-dir/",e=a("head base"),f=null,g="";return e.length?g=e.attr("href"):e=f=a("<base>",{href:d}).appendTo("head"),b=a("<a href='testurl' />").prependTo(m),c=b[0].href,e[0].href=g||location.pathname,f&&f.remove(),0===c.indexOf(d)}function i(){var a,d=c.createElement("x"),e=c.documentElement,f=b.getComputedStyle;return"pointerEvents"in d.style?(d.style.pointerEvents="auto",d.style.pointerEvents="x",e.appendChild(d),a=f&&"auto"===f(d,"").pointerEvents,e.removeChild(d),!!a):!1}function j(){var a=c.createElement("div");return"undefined"!=typeof a.getBoundingClientRect}function k(){var a=b,c=navigator.userAgent,d=navigator.platform,e=c.match(/AppleWebKit\/([0-9]+)/),f=!!e&&e[1],g=c.match(/Fennec\/([0-9]+)/),h=!!g&&g[1],i=c.match(/Opera Mobi\/([0-9]+)/),j=!!i&&i[1];return(d.indexOf("iPhone")>-1||d.indexOf("iPad")>-1||d.indexOf("iPod")>-1)&&f&&534>f||a.operamini&&"[object OperaMini]"==={}.toString.call(a.operamini)||i&&7458>j||c.indexOf("Android")>-1&&f&&533>f||h&&6>h||"palmGetResource"in b&&f&&534>f||c.indexOf("MeeGo")>-1&&c.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var l,m=a("<body>").prependTo("html"),n=m[0].style,o=["Webkit","Moz","O"],p="palmGetResource"in b,q=b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini),r=b.blackberry&&!e("-webkit-transform");a.extend(a.mobile,{browser:{}}),a.mobile.browser.oldIE=function(){var a=3,b=c.createElement("div"),d=b.all||[];do b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->";while(d[0]);return a>4?a:!a}(),a.extend(a.support,{pushState:"pushState"in history&&"replaceState"in history&&!(b.navigator.userAgent.indexOf("Firefox")>=0&&b.top!==b)&&-1===b.navigator.userAgent.search(/CriOS/),mediaquery:a.mobile.media("only all"),cssPseudoElement:!!e("content"),touchOverflow:!!e("overflowScrolling"),cssTransform3d:g(),boxShadow:!!e("boxShadow")&&!r,fixedPosition:k(),scrollTop:("pageXOffset"in b||"scrollTop"in c.documentElement||"scrollTop"in m[0])&&!p&&!q,dynamicBaseTag:h(),cssPointerEvents:i(),boundingRect:j(),inlineSVG:f}),m.remove(),l=function(){var a=b.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),a.mobile.gradeA=function(){return(a.support.mediaquery&&a.support.cssPseudoElement||a.mobile.browser.oldIE&&a.mobile.browser.oldIE>=8)&&(a.support.boundingRect||null!==a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))},a.mobile.ajaxBlacklist=b.blackberry&&!b.WebKitPoint||q||l,l&&a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),a.support.boxShadow||a("html").addClass("ui-noboxshadow")}(a),function(a,b){var c,d=a.mobile.window,e=function(){};a.event.special.beforenavigate={setup:function(){d.on("navigate",e)},teardown:function(){d.off("navigate",e)}},a.event.special.navigate=c={bound:!1,pushStateEnabled:!0,originalEventName:b,isPushStateEnabled:function(){return a.support.pushState&&a.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return a.mobile.hashListeningEnabled===!0},popstate:function(b){var c=new a.Event("navigate"),e=new a.Event("beforenavigate"),f=b.originalEvent.state||{};e.originalEvent=b,d.trigger(e),e.isDefaultPrevented()||(b.historyState&&a.extend(f,b.historyState),c.originalEvent=b,setTimeout(function(){d.trigger(c,{state:f})},0))},hashchange:function(b){var c=new a.Event("navigate"),e=new a.Event("beforenavigate");e.originalEvent=b,d.trigger(e),e.isDefaultPrevented()||(c.originalEvent=b,d.trigger(c,{state:b.hashchangeState||{}}))},setup:function(){c.bound||(c.bound=!0,c.isPushStateEnabled()?(c.originalEventName="popstate",d.bind("popstate.navigate",c.popstate)):c.isHashChangeEnabled()&&(c.originalEventName="hashchange",d.bind("hashchange.navigate",c.hashchange)))}}}(a),function(a,c){var d,e,f="&ui-state=dialog";a.mobile.path=d={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(a){var b=a?this.parseUrl(a):location,c=this.parseUrl(a||location.href).hash;return c="#"===c?"":c,b.protocol+"//"+b.host+b.pathname+b.search+c},getDocumentUrl:function(b){return b?a.extend({},d.documentUrl):d.documentUrl.href},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(b){if("object"===a.type(b))return b;var c=d.urlParseRE.exec(b||"")||[];return{href:c[0]||"",hrefNoHash:c[1]||"",hrefNoSearch:c[2]||"",domain:c[3]||"",protocol:c[4]||"",doubleSlash:c[5]||"",authority:c[6]||"",username:c[8]||"",password:c[9]||"",host:c[10]||"",hostname:c[11]||"",port:c[12]||"",pathname:c[13]||"",directory:c[14]||"",filename:c[15]||"",search:c[16]||"",hash:c[17]||""}},makePathAbsolute:function(a,b){var c,d,e,f;if(a&&"/"===a.charAt(0))return a;for(a=a||"",b=b?b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",c=b?b.split("/"):[],d=a.split("/"),e=0;e<d.length;e++)switch(f=d[e]){case".":break;case"..":c.length&&c.pop();break;default:c.push(f)}return"/"+c.join("/")},isSameDomain:function(a,b){return d.parseUrl(a).domain===d.parseUrl(b).domain},isRelativeUrl:function(a){return""===d.parseUrl(a).protocol},isAbsoluteUrl:function(a){return""!==d.parseUrl(a).protocol},makeUrlAbsolute:function(a,b){if(!d.isRelativeUrl(a))return a;b===c&&(b=this.documentBase);var e=d.parseUrl(a),f=d.parseUrl(b),g=e.protocol||f.protocol,h=e.protocol?e.doubleSlash:e.doubleSlash||f.doubleSlash,i=e.authority||f.authority,j=""!==e.pathname,k=d.makePathAbsolute(e.pathname||f.filename,f.pathname),l=e.search||!j&&f.search||"",m=e.hash;return g+h+i+k+l+m},addSearchParams:function(b,c){var e=d.parseUrl(b),f="object"==typeof c?a.param(c):c,g=e.search||"?";return e.hrefNoSearch+g+("?"!==g.charAt(g.length-1)?"&":"")+f+(e.hash||"")},convertUrlToDataUrl:function(a){var c=d.parseUrl(a);return d.isEmbeddedPage(c)?c.hash.split(f)[0].replace(/^#/,"").replace(/\?.*$/,""):d.isSameDomain(c,this.documentBase)?c.hrefNoHash.replace(this.documentBase.domain,"").split(f)[0]:b.decodeURIComponent(a)},get:function(a){return a===c&&(a=d.parseLocation().hash),d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(a){location.hash=a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(this.documentBase.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},stripQueryParams:function(a){return a.replace(/\?.*$/,"")},cleanHash:function(a){return d.stripHash(a.replace(/\?.*$/,"").replace(f,""))},isHashValid:function(a){return/^#[^#]+$/.test(a)},isExternal:function(a){var b=d.parseUrl(a);return b.protocol&&b.domain!==this.documentUrl.domain?!0:!1},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isEmbeddedPage:function(a){var b=d.parseUrl(a);return""!==b.protocol?!this.isPath(b.hash)&&b.hash&&(b.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&b.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(b.href)},squash:function(a,b){var c,e,f,g,h=this.isPath(a),i=this.parseUrl(a),j=i.hash,k="";return b=b||(d.isPath(a)?d.getLocation():d.getDocumentUrl()),e=h?d.stripHash(a):a,e=d.isPath(i.hash)?d.stripHash(i.hash):e,g=e.indexOf(this.uiStateKey),g>-1&&(k=e.slice(g),e=e.slice(0,g)),c=d.makeUrlAbsolute(e,b),f=this.parseUrl(c).search,h?((d.isPath(j)||0===j.replace("#","").indexOf(this.uiStateKey))&&(j=""),k&&-1===j.indexOf(this.uiStateKey)&&(j+=k),-1===j.indexOf("#")&&""!==j&&(j="#"+j),c=d.parseUrl(c),c=c.protocol+"//"+c.host+c.pathname+f+j):c+=c.indexOf("#")>-1?k:"#"+k,c},isPreservableHash:function(a){return 0===a.replace("#","").indexOf(this.uiStateKey)},hashToSelector:function(a){var b="#"===a.substring(0,1);return b&&(a=a.substring(1)),(b?"#":"")+a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")},getFilePath:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split(f)[0]},isFirstPageUrl:function(b){var e=d.parseUrl(d.makeUrlAbsolute(b,this.documentBase)),f=e.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&e.hrefNoHash===this.documentBase.hrefNoHash,g=a.mobile.firstPage,h=g&&g[0]?g[0].id:c;return f&&(!e.hash||"#"===e.hash||h&&e.hash.replace(/^#/,"")===h)},isPermittedCrossDomainRequest:function(b,c){return a.mobile.allowCrossDomainPages&&("file:"===b.protocol||"content:"===b.protocol)&&-1!==c.search(/^https?:/)}},d.documentUrl=d.parseLocation(),e=a("head").find("base"),d.documentBase=e.length?d.parseUrl(d.makeUrlAbsolute(e.attr("href"),d.documentUrl.href)):d.documentUrl,d.documentBaseDiffers=d.documentUrl.hrefNoHash!==d.documentBase.hrefNoHash,d.getDocumentBase=function(b){return b?a.extend({},d.documentBase):d.documentBase.href},a.extend(a.mobile,{getDocumentUrl:d.getDocumentUrl,getDocumentBase:d.getDocumentBase})}(a),function(a,b){a.mobile.History=function(a,b){this.stack=a||[],this.activeIndex=b||0},a.extend(a.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(a,b){b=b||{},this.getNext()&&this.clearForward(),b.hash&&-1===b.hash.indexOf("#")&&(b.hash="#"+b.hash),b.url=a,this.stack.push(b),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(a,b,c){b=b||this.stack;var d,e,f,g=b.length;for(e=0;g>e;e++)if(d=b[e],(decodeURIComponent(a)===decodeURIComponent(d.url)||decodeURIComponent(a)===decodeURIComponent(d.hash))&&(f=e,c))return f;return f},closest:function(a){var c,d=this.activeIndex;return c=this.find(a,this.stack.slice(0,d)),c===b&&(c=this.find(a,this.stack.slice(d),!0),c=c===b?c:c+d),c},direct:function(c){var d=this.closest(c.url),e=this.activeIndex;d!==b&&(this.activeIndex=d,this.previousIndex=e),e>d?(c.present||c.back||a.noop)(this.getActive(),"back"):d>e?(c.present||c.forward||a.noop)(this.getActive(),"forward"):d===b&&c.missing&&c.missing(this.getActive())}})}(a),function(a){var d=a.mobile.path,e=location.href;a.mobile.Navigator=function(b){this.history=b,this.ignoreInitialHashChange=!0,a.mobile.window.bind({"popstate.history":a.proxy(this.popstate,this),"hashchange.history":a.proxy(this.hashchange,this)})},a.extend(a.mobile.Navigator.prototype,{squash:function(e,f){var g,h,i=d.isPath(e)?d.stripHash(e):e;return h=d.squash(e),g=a.extend({hash:i,url:h},f),b.history.replaceState(g,g.title||c.title,h),g},hash:function(a,b){var c,e,f,g;return c=d.parseUrl(a),e=d.parseLocation(),e.pathname+e.search===c.pathname+c.search?f=c.hash?c.hash:c.pathname+c.search:d.isPath(a)?(g=d.parseUrl(b),f=g.pathname+g.search+(d.isPreservableHash(g.hash)?g.hash.replace("#",""):"")):f=a,f},go:function(e,f,g){var h,i,j,k,l=a.event.special.navigate.isPushStateEnabled();i=d.squash(e),j=this.hash(e,i),g&&j!==d.stripHash(d.parseLocation().hash)&&(this.preventNextHashChange=g),this.preventHashAssignPopState=!0,b.location.hash=j,this.preventHashAssignPopState=!1,h=a.extend({url:i,hash:j,title:c.title},f),l&&(k=new a.Event("popstate"),k.originalEvent={type:"popstate",state:null},this.squash(e,h),g||(this.ignorePopState=!0,a.mobile.window.trigger(k))),this.history.add(h.url,h)},popstate:function(b){var c,f;if(a.event.special.navigate.isPushStateEnabled())return this.preventHashAssignPopState?(this.preventHashAssignPopState=!1,void b.stopImmediatePropagation()):this.ignorePopState?void(this.ignorePopState=!1):!b.originalEvent.state&&1===this.history.stack.length&&this.ignoreInitialHashChange&&(this.ignoreInitialHashChange=!1,location.href===e)?void b.preventDefault():(c=d.parseLocation().hash,!b.originalEvent.state&&c?(f=this.squash(c),this.history.add(f.url,f),void(b.historyState=f)):void this.history.direct({url:(b.originalEvent.state||{}).url||c,present:function(c,d){b.historyState=a.extend({},c),b.historyState.direction=d
}}))},hashchange:function(b){var e,f;if(a.event.special.navigate.isHashChangeEnabled()&&!a.event.special.navigate.isPushStateEnabled()){if(this.preventNextHashChange)return this.preventNextHashChange=!1,void b.stopImmediatePropagation();e=this.history,f=d.parseLocation().hash,this.history.direct({url:f,present:function(c,d){b.hashchangeState=a.extend({},c),b.hashchangeState.direction=d},missing:function(){e.add(f,{hash:f,title:c.title})}})}}})}(a),function(a){a.mobile.navigate=function(b,c,d){a.mobile.navigate.navigator.go(b,c,d)},a.mobile.navigate.history=new a.mobile.History,a.mobile.navigate.navigator=new a.mobile.Navigator(a.mobile.navigate.history);var b=a.mobile.path.parseLocation();a.mobile.navigate.history.add(b.href,{hash:b.hash})}(a),function(a,b){var d={animation:{},transition:{}},e=c.createElement("a"),f=["","webkit-","moz-","o-"];a.each(["animation","transition"],function(c,g){var h=0===c?g+"-name":g;a.each(f,function(c,f){return e.style[a.camelCase(f+h)]!==b?(d[g].prefix=f,!1):void 0}),d[g].duration=a.camelCase(d[g].prefix+g+"-duration"),d[g].event=a.camelCase(d[g].prefix+g+"-end"),""===d[g].prefix&&(d[g].duration=d[g].duration.toLowerCase(),d[g].event=d[g].event.toLowerCase())}),a.support.cssTransitions=d.transition.prefix!==b,a.support.cssAnimations=d.animation.prefix!==b,a(e).remove(),a.fn.animationComplete=function(e,f,g){var h,i,j=this,k=f&&"animation"!==f?"transition":"animation";return a.support.cssTransitions&&"transition"===k||a.support.cssAnimations&&"animation"===k?(g===b&&(a(this).context!==c&&(i=3e3*parseFloat(a(this).css(d[k].duration))),(0===i||i===b)&&(i=a.fn.animationComplete.default)),h=setTimeout(function(){a(j).off(d[k].event),e.apply(j)},i),a(this).one(d[k].event,function(){clearTimeout(h),e.call(this,arguments)})):(setTimeout(a.proxy(e,this),0),a(this))},a.fn.animationComplete.default=1e3}(a),function(a,b,c,d){function e(a){for(;a&&"undefined"!=typeof a.originalEvent;)a=a.originalEvent;return a}function f(b,c){var f,g,h,i,j,k,l,m,n,o=b.type;if(b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,o.search(/^(mouse|click)/)>-1&&(g=E),f)for(l=g.length,i;l;)i=g[--l],b[i]=f[i];if(o.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1),-1!==o.search(/^touch/)&&(h=e(f),o=h.touches,j=h.changedTouches,k=o&&o.length?o[0]:j&&j.length?j[0]:d))for(m=0,n=C.length;n>m;m++)i=C[m],b[i]=k[i];return b}function g(b){for(var c,d,e={};b;){c=a.data(b,z);for(d in c)c[d]&&(e[d]=e.hasVirtualBinding=!0);b=b.parentNode}return e}function h(b,c){for(var d;b;){if(d=a.data(b,z),d&&(!c||d[c]))return b;b=b.parentNode}return null}function i(){M=!1}function j(){M=!0}function k(){Q=0,K.length=0,L=!1,j()}function l(){i()}function m(){n(),G=setTimeout(function(){G=0,k()},a.vmouse.resetTimerDuration)}function n(){G&&(clearTimeout(G),G=0)}function o(b,c,d){var e;return(d&&d[b]||!d&&h(c.target,b))&&(e=f(c,b),a(c.target).trigger(e)),e}function p(b){var c,d=a.data(b.target,A);L||Q&&Q===d||(c=o("v"+b.type,b),c&&(c.isDefaultPrevented()&&b.preventDefault(),c.isPropagationStopped()&&b.stopPropagation(),c.isImmediatePropagationStopped()&&b.stopImmediatePropagation()))}function q(b){var c,d,f,h=e(b).touches;h&&1===h.length&&(c=b.target,d=g(c),d.hasVirtualBinding&&(Q=P++,a.data(c,A,Q),n(),l(),J=!1,f=e(b).touches[0],H=f.pageX,I=f.pageY,o("vmouseover",b,d),o("vmousedown",b,d)))}function r(a){M||(J||o("vmousecancel",a,g(a.target)),J=!0,m())}function s(b){if(!M){var c=e(b).touches[0],d=J,f=a.vmouse.moveDistanceThreshold,h=g(b.target);J=J||Math.abs(c.pageX-H)>f||Math.abs(c.pageY-I)>f,J&&!d&&o("vmousecancel",b,h),o("vmousemove",b,h),m()}}function t(a){if(!M){j();var b,c,d=g(a.target);o("vmouseup",a,d),J||(b=o("vclick",a,d),b&&b.isDefaultPrevented()&&(c=e(a).changedTouches[0],K.push({touchID:Q,x:c.clientX,y:c.clientY}),L=!0)),o("vmouseout",a,d),J=!1,m()}}function u(b){var c,d=a.data(b,z);if(d)for(c in d)if(d[c])return!0;return!1}function v(){}function w(b){var c=b.substr(1);return{setup:function(){u(this)||a.data(this,z,{});var d=a.data(this,z);d[b]=!0,F[b]=(F[b]||0)+1,1===F[b]&&O.bind(c,p),a(this).bind(c,v),N&&(F.touchstart=(F.touchstart||0)+1,1===F.touchstart&&O.bind("touchstart",q).bind("touchend",t).bind("touchmove",s).bind("scroll",r))},teardown:function(){--F[b],F[b]||O.unbind(c,p),N&&(--F.touchstart,F.touchstart||O.unbind("touchstart",q).unbind("touchmove",s).unbind("touchend",t).unbind("scroll",r));var d=a(this),e=a.data(this,z);e&&(e[b]=!1),d.unbind(c,v),u(this)||d.removeData(z)}}}var x,y,z="virtualMouseBindings",A="virtualTouchID",B="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),D=a.event.mouseHooks?a.event.mouseHooks.props:[],E=a.event.props.concat(D),F={},G=0,H=0,I=0,J=!1,K=[],L=!1,M=!1,N="addEventListener"in c,O=a(c),P=1,Q=0;for(a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},y=0;y<B.length;y++)a.event.special[B[y]]=w(B[y]);N&&c.addEventListener("click",function(b){var c,d,e,f,g,h,i=K.length,j=b.target;if(i)for(c=b.clientX,d=b.clientY,x=a.vmouse.clickDistanceThreshold,e=j;e;){for(f=0;i>f;f++)if(g=K[f],h=0,e===j&&Math.abs(g.x-c)<x&&Math.abs(g.y-d)<x||a.data(e,A)===g.touchID)return b.preventDefault(),void b.stopPropagation();e=e.parentNode}},!0)}(a,b,c),function(a,b,d){function e(b,c,e,f){var g=e.type;e.type=c,f?a.event.trigger(e,d,b):a.event.dispatch.call(b,e),e.type=g}var f=a(c),g=a.mobile.support.touch,h="touchmove scroll",i=g?"touchstart":"mousedown",j=g?"touchend":"mouseup",k=g?"touchmove":"mousemove";a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)}),a.event.special.scrollstart={enabled:!0,setup:function(){function b(a,b){c=b,e(f,c?"scrollstart":"scrollstop",a)}var c,d,f=this,g=a(f);g.bind(h,function(e){a.event.special.scrollstart.enabled&&(c||b(e,!0),clearTimeout(d),d=setTimeout(function(){b(e,!1)},50))})},teardown:function(){a(this).unbind(h)}},a.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var b=this,c=a(b),d=!1;c.bind("vmousedown",function(g){function h(){clearTimeout(k)}function i(){h(),c.unbind("vclick",j).unbind("vmouseup",h),f.unbind("vmousecancel",i)}function j(a){i(),d||l!==a.target?d&&a.stopPropagation():e(b,"tap",a)}if(d=!1,g.which&&1!==g.which)return!1;var k,l=g.target;c.bind("vmouseup",h).bind("vclick",j),f.bind("vmousecancel",i),k=setTimeout(function(){a.event.special.tap.emitTapOnTaphold||(d=!0),e(b,"taphold",a.Event("taphold",{target:l}))},a.event.special.tap.tapholdThreshold)})},teardown:function(){a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),f.unbind("vmousecancel")}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(a){var c=b.pageXOffset,d=b.pageYOffset,e=a.clientX,f=a.clientY;return 0===a.pageY&&Math.floor(f)>Math.floor(a.pageY)||0===a.pageX&&Math.floor(e)>Math.floor(a.pageX)?(e-=c,f-=d):(f<a.pageY-d||e<a.pageX-c)&&(e=a.pageX-c,f=a.pageY-d),{x:e,y:f}},start:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b,d=a.event.special.swipe.getLocation(c);return{time:(new Date).getTime(),coords:[d.x,d.y],origin:a(b.target)}},stop:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b,d=a.event.special.swipe.getLocation(c);return{time:(new Date).getTime(),coords:[d.x,d.y]}},handleSwipe:function(b,c,d,f){if(c.time-b.time<a.event.special.swipe.durationThreshold&&Math.abs(b.coords[0]-c.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(b.coords[1]-c.coords[1])<a.event.special.swipe.verticalDistanceThreshold){var g=b.coords[0]>c.coords[0]?"swipeleft":"swiperight";return e(d,"swipe",a.Event("swipe",{target:f,swipestart:b,swipestop:c}),!0),e(d,g,a.Event(g,{target:f,swipestart:b,swipestop:c}),!0),!0}return!1},eventInProgress:!1,setup:function(){var b,c=this,d=a(c),e={};b=a.data(this,"mobile-events"),b||(b={length:0},a.data(this,"mobile-events",b)),b.length++,b.swipe=e,e.start=function(b){if(!a.event.special.swipe.eventInProgress){a.event.special.swipe.eventInProgress=!0;var d,g=a.event.special.swipe.start(b),h=b.target,i=!1;e.move=function(b){g&&(d=a.event.special.swipe.stop(b),i||(i=a.event.special.swipe.handleSwipe(g,d,c,h),i&&(a.event.special.swipe.eventInProgress=!1)),Math.abs(g.coords[0]-d.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault())},e.stop=function(){i=!0,a.event.special.swipe.eventInProgress=!1,f.off(k,e.move),e.move=null},f.on(k,e.move).one(j,e.stop)}},d.on(i,e.start)},teardown:function(){var b,c;b=a.data(this,"mobile-events"),b&&(c=b.swipe,delete b.swipe,b.length--,0===b.length&&a.removeData(this,"mobile-events")),c&&(c.start&&a(this).off(i,c.start),c.move&&f.off(k,c.move),c.stop&&f.off(j,c.stop))}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)},teardown:function(){a(this).unbind(c)}}})}(a,this),function(a){a.event.special.throttledresize={setup:function(){a(this).bind("resize",f)},teardown:function(){a(this).unbind("resize",f)}};var b,c,d,e=250,f=function(){c=(new Date).getTime(),d=c-g,d>=e?(g=c,a(this).trigger("throttledresize")):(b&&clearTimeout(b),b=setTimeout(f,e-d))},g=0}(a),function(a,b){function d(){var a=e();a!==f&&(f=a,l.trigger(m))}var e,f,g,h,i,j,k,l=a(b),m="orientationchange",n={0:!0,180:!0};a.support.orientation&&(i=b.innerWidth||l.width(),j=b.innerHeight||l.height(),k=50,g=i>j&&i-j>k,h=n[b.orientation],(g&&h||!g&&!h)&&(n={"-90":!0,90:!0})),a.event.special.orientationchange=a.extend({},a.event.special.orientationchange,{setup:function(){return a.support.orientation&&!a.event.special.orientationchange.disabled?!1:(f=e(),void l.bind("throttledresize",d))},teardown:function(){return a.support.orientation&&!a.event.special.orientationchange.disabled?!1:void l.unbind("throttledresize",d)},add:function(a){var b=a.handler;a.handler=function(a){return a.orientation=e(),b.apply(this,arguments)}}}),a.event.special.orientationchange.orientation=e=function(){var d=!0,e=c.documentElement;return d=a.support.orientation?n[b.orientation]:e&&e.clientWidth/e.clientHeight<1.1,d?"portrait":"landscape"},a.fn[m]=function(a){return a?this.bind(m,a):this.trigger(m)},a.attrFn&&(a.attrFn[m]=!0)}(a,this),function(a){var b=a("head").children("base"),c={element:b.length?b:a("<base>",{href:a.mobile.path.documentBase.hrefNoHash}).prependTo(a("head")),linkSelector:"[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",set:function(b){a.mobile.dynamicBaseEnabled&&a.support.dynamicBaseTag&&c.element.attr("href",a.mobile.path.makeUrlAbsolute(b,a.mobile.path.documentBase))},rewrite:function(b,d){var e=a.mobile.path.get(b);d.find(c.linkSelector).each(function(b,c){var d=a(c).is("[href]")?"href":a(c).is("[src]")?"src":"action",f=a(c).attr(d);f=f.replace(location.protocol+"//"+location.host+location.pathname,""),/^(\w+:|#|\/)/.test(f)||a(c).attr(d,e+f)})},reset:function(){c.element.attr("href",a.mobile.path.documentBase.hrefNoSearch)}};a.mobile.base=c}(a),function(a,b){a.mobile.widgets={};var c=a.widget,d=a.mobile.keepNative;a.widget=function(c){return function(){var d=c.apply(this,arguments),e=d.prototype.widgetName;return d.initSelector=d.prototype.initSelector!==b?d.prototype.initSelector:":jqmData(role='"+e+"')",a.mobile.widgets[e]=d,d}}(a.widget),a.extend(a.widget,c),a.mobile.document.on("create",function(b){a(b.target).enhanceWithin()}),a.widget("mobile.page",{options:{theme:"a",domCache:!1,keepNativeDefault:a.mobile.keepNative,contentTheme:null,enhanced:!1},_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_create:function(){return this._trigger("beforecreate")===!1?!1:(this.options.enhanced||this._enhance(),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}),this.element.enhanceWithin(),void("dialog"===a.mobile.getAttribute(this.element[0],"role")&&a.mobile.dialog&&this.element.dialog()))},_enhance:function(){var c="data-"+a.mobile.ns,d=this;this.options.role&&this.element.attr("data-"+a.mobile.ns+"role",this.options.role),this.element.attr("tabindex","0").addClass("ui-page ui-page-theme-"+this.options.theme),this.element.find("["+c+"role='content']").each(function(){var e=a(this),f=this.getAttribute(c+"theme")||b;d.options.contentTheme=f||d.options.contentTheme||d.options.dialog&&d.options.theme||"dialog"===d.element.jqmData("role")&&d.options.theme,e.addClass("ui-content"),d.options.contentTheme&&e.addClass("ui-body-"+d.options.contentTheme),e.attr("role","main").addClass("ui-content")})},bindRemove:function(b){var c=this.element;!c.data("mobile-page").options.domCache&&c.is(":jqmData(external-page='true')")&&c.bind("pagehide.remove",b||function(b,c){if(!c.samePage){var d=a(this),e=new a.Event("pageremove");d.trigger(e),e.isDefaultPrevented()||d.removeWithDependents()}})},_setOptions:function(c){c.theme!==b&&this.element.removeClass("ui-page-theme-"+this.options.theme).addClass("ui-page-theme-"+c.theme),c.contentTheme!==b&&this.element.find("[data-"+a.mobile.ns+"='content']").removeClass("ui-body-"+this.options.contentTheme).addClass("ui-body-"+c.contentTheme)},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){this.element.closest(":mobile-pagecontainer").pagecontainer({theme:"none"})},setContainerBackground:function(a){this.element.parent().pagecontainer({theme:a||this.options.theme})},keepNativeSelector:function(){var b=this.options,c=a.trim(b.keepNative||""),e=a.trim(a.mobile.keepNative),f=a.trim(b.keepNativeDefault),g=d===e?"":e,h=""===g?f:"";return(c?[c]:[]).concat(g?[g]:[]).concat(h?[h]:[]).join(", ")}})}(a),function(a,d){a.widget("mobile.pagecontainer",{options:{theme:"a"},initSelector:!1,_create:function(){this.setLastScrollEnabled=!0,this._on(this.window,{navigate:"_filterNavigateEvents"}),this._on(this.window,{navigate:"_disableRecordScroll",scrollstop:"_delayedRecordScroll"}),this._on({pagechange:"_afterContentChange"}),this.window.one("navigate",a.proxy(function(){this.setLastScrollEnabled=!0},this))},_setOptions:function(a){a.theme!==d&&"none"!==a.theme?this.element.removeClass("ui-overlay-"+this.options.theme).addClass("ui-overlay-"+a.theme):a.theme!==d&&this.element.removeClass("ui-overlay-"+this.options.theme),this._super(a)},_disableRecordScroll:function(){this.setLastScrollEnabled=!1},_enableRecordScroll:function(){this.setLastScrollEnabled=!0},_afterContentChange:function(){this.setLastScrollEnabled=!0,this._off(this.window,"scrollstop"),this._on(this.window,{scrollstop:"_delayedRecordScroll"})},_recordScroll:function(){if(this.setLastScrollEnabled){var a,b,c,d=this._getActiveHistory();d&&(a=this._getScroll(),b=this._getMinScroll(),c=this._getDefaultScroll(),d.lastScroll=b>a?c:a)}},_delayedRecordScroll:function(){setTimeout(a.proxy(this,"_recordScroll"),100)},_getScroll:function(){return this.window.scrollTop()},_getMinScroll:function(){return a.mobile.minScrollBack},_getDefaultScroll:function(){return a.mobile.defaultHomeScroll},_filterNavigateEvents:function(b,c){var d;b.originalEvent&&b.originalEvent.isDefaultPrevented()||(d=b.originalEvent.type.indexOf("hashchange")>-1?c.state.hash:c.state.url,d||(d=this._getHash()),d&&"#"!==d&&0!==d.indexOf("#"+a.mobile.path.uiStateKey)||(d=location.href),this._handleNavigate(d,c.state))},_getHash:function(){return a.mobile.path.parseLocation().hash},getActivePage:function(){return this.activePage},_getInitialContent:function(){return a.mobile.firstPage},_getHistory:function(){return a.mobile.navigate.history},_getActiveHistory:function(){return a.mobile.navigate.history.getActive()},_getDocumentBase:function(){return a.mobile.path.documentBase},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(c){if(a.mobile.hashListeningEnabled)b.history.go(c);else{var d=a.mobile.navigate.history.activeIndex,e=d+parseInt(c,10),f=a.mobile.navigate.history.stack[e].url,g=c>=1?"forward":"back";a.mobile.navigate.history.activeIndex=e,a.mobile.navigate.history.previousIndex=d,this.change(f,{direction:g,changeHash:!1,fromHashChange:!0})}},_handleDestination:function(b){var c;return"string"===a.type(b)&&(b=a.mobile.path.stripHash(b)),b&&(c=this._getHistory(),b=a.mobile.path.isPath(b)?b:a.mobile.path.makeUrlAbsolute("#"+b,this._getDocumentBase()),b===a.mobile.path.makeUrlAbsolute("#"+c.initialDst,this._getDocumentBase())&&c.stack.length&&c.stack[0].url!==c.initialDst.replace(a.mobile.dialogHashKey,"")&&(b=this._getInitialContent())),b||this._getInitialContent()},_handleDialog:function(b,c){var d,e,f=this.getActivePage();return f&&!f.hasClass("ui-dialog")?("back"===c.direction?this.back():this.forward(),!1):(d=c.pageUrl,e=this._getActiveHistory(),a.extend(b,{role:e.role,transition:e.transition,reverse:"back"===c.direction}),d)},_handleNavigate:function(b,c){var e=a.mobile.path.stripHash(b),f=this._getHistory(),g=0===f.stack.length?"none":d,h={changeHash:!1,fromHashChange:!0,reverse:"back"===c.direction};a.extend(h,c,{transition:(f.getLast()||{}).transition||g}),f.activeIndex>0&&e.indexOf(a.mobile.dialogHashKey)>-1&&f.initialDst!==e&&(e=this._handleDialog(h,c),e===!1)||this._changeContent(this._handleDestination(e),h)},_changeContent:function(b,c){a.mobile.changePage(b,c)},_getBase:function(){return a.mobile.base},_getNs:function(){return a.mobile.ns},_enhance:function(a,b){return a.page({role:b})},_include:function(a,b){a.appendTo(this.element),this._enhance(a,b.role),a.page("bindRemove")},_find:function(b){var c,d=this._createFileUrl(b),e=this._createDataUrl(b),f=this._getInitialContent();return c=this.element.children("[data-"+this._getNs()+"url='"+e+"']"),0===c.length&&e&&!a.mobile.path.isPath(e)&&(c=this.element.children(a.mobile.path.hashToSelector("#"+e)).attr("data-"+this._getNs()+"url",e).jqmData("url",e)),0===c.length&&a.mobile.path.isFirstPageUrl(d)&&f&&f.parent().length&&(c=a(f)),c},_getLoader:function(){return a.mobile.loading()},_showLoading:function(b,c,d,e){this._loadMsg||(this._loadMsg=setTimeout(a.proxy(function(){this._getLoader().loader("show",c,d,e),this._loadMsg=0},this),b))},_hideLoading:function(){clearTimeout(this._loadMsg),this._loadMsg=0,this._getLoader().loader("hide")},_showError:function(){this._hideLoading(),this._showLoading(0,a.mobile.pageLoadErrorMessageTheme,a.mobile.pageLoadErrorMessage,!0),setTimeout(a.proxy(this,"_hideLoading"),1500)},_parse:function(b,c){var d,e=a("<div></div>");return e.get(0).innerHTML=b,d=e.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),d.length||(d=a("<div data-"+this._getNs()+"role='page'>"+(b.split(/<\/?body[^>]*>/gim)[1]||"")+"</div>")),d.attr("data-"+this._getNs()+"url",a.mobile.path.convertUrlToDataUrl(c)).attr("data-"+this._getNs()+"external-page",!0),d},_setLoadedTitle:function(b,c){var d=c.match(/<title[^>]*>([^<]*)/)&&RegExp.$1;d&&!b.jqmData("title")&&(d=a("<div>"+d+"</div>").text(),b.jqmData("title",d))},_isRewritableBaseTag:function(){return a.mobile.dynamicBaseEnabled&&!a.support.dynamicBaseTag},_createDataUrl:function(b){return a.mobile.path.convertUrlToDataUrl(b)},_createFileUrl:function(b){return a.mobile.path.getFilePath(b)},_triggerWithDeprecated:function(b,c,d){var e=a.Event("page"+b),f=a.Event(this.widgetName+b);return(d||this.element).trigger(e,c),this.element.trigger(f,c),{deprecatedEvent:e,event:f}},_loadSuccess:function(b,c,e,f){var g=this._createFileUrl(b),h=this._createDataUrl(b);return a.proxy(function(i,j,k){var l,m=new RegExp("(<[^>]+\\bdata-"+this._getNs()+"role=[\"']?page[\"']?[^>]*>)"),n=new RegExp("\\bdata-"+this._getNs()+"url=[\"']?([^\"'>]*)[\"']?");m.test(i)&&RegExp.$1&&n.test(RegExp.$1)&&RegExp.$1&&(g=a.mobile.path.getFilePath(a("<div>"+RegExp.$1+"</div>").text())),e.prefetch===d&&this._getBase().set(g),l=this._parse(i,g),this._setLoadedTitle(l,i),c.xhr=k,c.textStatus=j,c.page=l,c.content=l,this._trigger("load",d,c)&&(this._isRewritableBaseTag()&&l&&this._getBase().rewrite(g,l),this._include(l,e),b.indexOf("&"+a.mobile.subPageUrlKey)>-1&&(l=this.element.children("[data-"+this._getNs()+"url='"+h+"']")),e.showLoadMsg&&this._hideLoading(),this.element.trigger("pageload"),f.resolve(b,e,l))},this)},_loadDefaults:{type:"get",data:d,reloadPage:!1,reload:!1,role:d,showLoadMsg:!1,loadMsgDelay:50},load:function(b,c){var e,f,g,h,i=c&&c.deferred||a.Deferred(),j=a.extend({},this._loadDefaults,c),k=null,l=a.mobile.path.makeUrlAbsolute(b,this._findBaseWithDefault());return j.reload=j.reloadPage,j.data&&"get"===j.type&&(l=a.mobile.path.addSearchParams(l,j.data),j.data=d),j.data&&"post"===j.type&&(j.reload=!0),e=this._createFileUrl(l),f=this._createDataUrl(l),k=this._find(l),0===k.length&&a.mobile.path.isEmbeddedPage(e)&&!a.mobile.path.isFirstPageUrl(e)?void i.reject(l,j):(this._getBase().reset(),k.length&&!j.reload?(this._enhance(k,j.role),i.resolve(l,j,k),void(j.prefetch||this._getBase().set(b))):(h={url:b,absUrl:l,dataUrl:f,deferred:i,options:j},g=this._triggerWithDeprecated("beforeload",h),g.deprecatedEvent.isDefaultPrevented()||g.event.isDefaultPrevented()?void 0:(j.showLoadMsg&&this._showLoading(j.loadMsgDelay),j.prefetch===d&&this._getBase().reset(),a.mobile.allowCrossDomainPages||a.mobile.path.isSameDomain(a.mobile.path.documentUrl,l)?void a.ajax({url:e,type:j.type,data:j.data,contentType:j.contentType,dataType:"html",success:this._loadSuccess(l,h,j,i),error:this._loadError(l,h,j,i)}):void i.reject(l,j))))},_loadError:function(b,c,d,e){return a.proxy(function(f,g,h){this._getBase().set(a.mobile.path.get()),c.xhr=f,c.textStatus=g,c.errorThrown=h;var i=this._triggerWithDeprecated("loadfailed",c);i.deprecatedEvent.isDefaultPrevented()||i.event.isDefaultPrevented()||(d.showLoadMsg&&this._showError(),e.reject(b,d))},this)},_getTransitionHandler:function(b){return b=a.mobile._maybeDegradeTransition(b),a.mobile.transitionHandlers[b]||a.mobile.defaultTransitionHandler},_triggerCssTransitionEvents:function(b,c,d){var e=!1;d=d||"",c&&(b[0]===c[0]&&(e=!0),this._triggerWithDeprecated(d+"hide",{nextPage:b,samePage:e},c)),this._triggerWithDeprecated(d+"show",{prevPage:c||a("")},b)},_cssTransition:function(b,c,d){var e,f,g=d.transition,h=d.reverse,i=d.deferred;this._triggerCssTransitionEvents(b,c,"before"),this._hideLoading(),e=this._getTransitionHandler(g),f=new e(g,h,b,c).transition(),f.done(function(){i.resolve.apply(i,arguments)}),f.done(a.proxy(function(){this._triggerCssTransitionEvents(b,c)},this))},_releaseTransitionLock:function(){f=!1,e.length>0&&a.mobile.changePage.apply(null,e.pop())},_removeActiveLinkClass:function(b){a.mobile.removeActiveLinkClass(b)},_loadUrl:function(b,c,d){d.target=b,d.deferred=a.Deferred(),this.load(b,d),d.deferred.done(a.proxy(function(a,b,d){f=!1,b.absUrl=c.absUrl,this.transition(d,c,b)},this)),d.deferred.fail(a.proxy(function(){this._removeActiveLinkClass(!0),this._releaseTransitionLock(),this._triggerWithDeprecated("changefailed",c)},this))},_triggerPageBeforeChange:function(b,c,d){var e=new a.Event("pagebeforechange");return a.extend(c,{toPage:b,options:d}),c.absUrl="string"===a.type(b)?a.mobile.path.makeUrlAbsolute(b,this._findBaseWithDefault()):d.absUrl,this.element.trigger(e,c),e.isDefaultPrevented()?!1:!0},change:function(b,c){if(f)return void e.unshift(arguments);var d=a.extend({},a.mobile.changePage.defaults,c),g={};d.fromPage=d.fromPage||this.activePage,this._triggerPageBeforeChange(b,g,d)&&(b=g.toPage,"string"===a.type(b)?(f=!0,this._loadUrl(b,g,d)):this.transition(b,g,d))},transition:function(b,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;if(f)return void e.unshift([b,h]);if(this._triggerPageBeforeChange(b,g,h)&&(v=this._triggerWithDeprecated("beforetransition",g),!v.deprecatedEvent.isDefaultPrevented()&&!v.event.isDefaultPrevented())){if(f=!0,b[0]!==a.mobile.firstPage[0]||h.dataUrl||(h.dataUrl=a.mobile.path.documentUrl.hrefNoHash),i=h.fromPage,j=h.dataUrl&&a.mobile.path.convertUrlToDataUrl(h.dataUrl)||b.jqmData("url"),k=j,l=a.mobile.path.getFilePath(j),m=a.mobile.navigate.history.getActive(),n=0===a.mobile.navigate.history.activeIndex,o=0,p=c.title,q=("dialog"===h.role||"dialog"===b.jqmData("role"))&&b.jqmData("dialog")!==!0,i&&i[0]===b[0]&&!h.allowSamePageTransition)return f=!1,this._triggerWithDeprecated("transition",g),this.element.trigger("pagechange",g),void(h.fromHashChange&&a.mobile.navigate.history.direct({url:j}));b.page({role:h.role}),h.fromHashChange&&(o="back"===h.direction?-1:1);try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()?a(c.activeElement).blur():a("input:focus, textarea:focus, select:focus").blur()}catch(w){}r=!1,q&&m&&(m.url&&m.url.indexOf(a.mobile.dialogHashKey)>-1&&this.activePage&&!this.activePage.hasClass("ui-dialog")&&a.mobile.navigate.history.activeIndex>0&&(h.changeHash=!1,r=!0),j=m.url||"",j+=!r&&j.indexOf("#")>-1?a.mobile.dialogHashKey:"#"+a.mobile.dialogHashKey,0===a.mobile.navigate.history.activeIndex&&j===a.mobile.navigate.history.initialDst&&(j+=a.mobile.dialogHashKey)),s=m?b.jqmData("title")||b.children(":jqmData(role='header')").find(".ui-title").text():p,s&&p===c.title&&(p=s),b.jqmData("title")||b.jqmData("title",p),h.transition=h.transition||(o&&!n?m.transition:d)||(q?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition),!o&&r&&(a.mobile.navigate.history.getActive().pageUrl=k),j&&!h.fromHashChange&&(!a.mobile.path.isPath(j)&&j.indexOf("#")<0&&(j="#"+j),t={transition:h.transition,title:p,pageUrl:k,role:h.role},h.changeHash!==!1&&a.mobile.hashListeningEnabled?a.mobile.navigate(j,t,!0):b[0]!==a.mobile.firstPage[0]&&a.mobile.navigate.history.add(j,t)),c.title=p,a.mobile.activePage=b,this.activePage=b,h.reverse=h.reverse||0>o,u=a.Deferred(),this._cssTransition(b,i,{transition:h.transition,reverse:h.reverse,deferred:u}),u.done(a.proxy(function(c,d,e,f,i){a.mobile.removeActiveLinkClass(),h.duplicateCachedPage&&h.duplicateCachedPage.remove(),i||a.mobile.focusPage(b),this._releaseTransitionLock(),this.element.trigger("pagechange",g),this._triggerWithDeprecated("transition",g)},this))}},_findBaseWithDefault:function(){var b=this.activePage&&a.mobile.getClosestBaseUrl(this.activePage);return b||a.mobile.path.documentBase.hrefNoHash}}),a.mobile.navreadyDeferred=a.Deferred();var e=[],f=!1}(a),function(a,c){function d(a){for(;a&&("string"!=typeof a.nodeName||"a"!==a.nodeName.toLowerCase());)a=a.parentNode;return a}var e=a.Deferred(),f=a.mobile.path.documentUrl,g=null;a.mobile.loadPage=function(b,c){var d;return c=c||{},d=c.pageContainer||a.mobile.pageContainer,c.deferred=a.Deferred(),d.pagecontainer("load",b,c),c.deferred.promise()},a.mobile.back=function(){var c=b.navigator;this.phonegapNavigationEnabled&&c&&c.app&&c.app.backHistory?c.app.backHistory():a.mobile.pageContainer.pagecontainer("back")},a.mobile.focusPage=function(a){var b=a.find("[autofocus]"),c=a.find(".ui-title:eq(0)");return b.length?void b.focus():void(c.length?c.focus():a.focus())},a.mobile._maybeDegradeTransition=a.mobile._maybeDegradeTransition||function(a){return a},a.mobile.changePage=function(b,c){a.mobile.pageContainer.pagecontainer("change",b,c)},a.mobile.changePage.defaults={transition:c,reverse:!1,changeHash:!0,fromHashChange:!1,role:c,duplicateCachedPage:c,pageContainer:c,showLoadMsg:!0,dataUrl:c,fromPage:c,allowSamePageTransition:!1},a.mobile._registerInternalEvents=function(){var e=function(b,c){var d,e,h,i,j=!0;return!a.mobile.ajaxEnabled||b.is(":jqmData(ajax='false')")||!b.jqmHijackable().length||b.attr("target")?!1:(d=g&&g.attr("formaction")||b.attr("action"),i=(b.attr("method")||"get").toLowerCase(),d||(d=a.mobile.getClosestBaseUrl(b),"get"===i&&(d=a.mobile.path.parseUrl(d).hrefNoSearch),d===a.mobile.path.documentBase.hrefNoHash&&(d=f.hrefNoSearch)),d=a.mobile.path.makeUrlAbsolute(d,a.mobile.getClosestBaseUrl(b)),a.mobile.path.isExternal(d)&&!a.mobile.path.isPermittedCrossDomainRequest(f,d)?!1:(c||(e=b.serializeArray(),g&&g[0].form===b[0]&&(h=g.attr("name"),h&&(a.each(e,function(a,b){return b.name===h?(h="",!1):void 0}),h&&e.push({name:h,value:g.attr("value")}))),j={url:d,options:{type:i,data:a.param(e),transition:b.jqmData("transition"),reverse:"reverse"===b.jqmData("direction"),reloadPage:!0}}),j))};a.mobile.document.delegate("form","submit",function(b){var c;b.isDefaultPrevented()||(c=e(a(this)),c&&(a.mobile.changePage(c.url,c.options),b.preventDefault()))}),a.mobile.document.bind("vclick",function(b){var c,f,h=b.target,i=!1;if(!(b.which>1)&&a.mobile.linkBindingEnabled){if(g=a(h),a.data(h,"mobile-button")){if(!e(a(h).closest("form"),!0))return;h.parentNode&&(h=h.parentNode)}else{if(h=d(h),!h||"#"===a.mobile.path.parseUrl(h.getAttribute("href")||"#").hash)return;if(!a(h).jqmHijackable().length)return}~h.className.indexOf("ui-link-inherit")?h.parentNode&&(f=a.data(h.parentNode,"buttonElements")):f=a.data(h,"buttonElements"),f?h=f.outer:i=!0,c=a(h),i&&(c=c.closest(".ui-btn")),c.length>0&&!c.hasClass("ui-state-disabled")&&(a.mobile.removeActiveLinkClass(!0),a.mobile.activeClickedLink=c,a.mobile.activeClickedLink.addClass(a.mobile.activeBtnClass))}}),a.mobile.document.bind("click",function(e){if(a.mobile.linkBindingEnabled&&!e.isDefaultPrevented()){var g,h,i,j,k,l,m,n=d(e.target),o=a(n),p=function(){b.setTimeout(function(){a.mobile.removeActiveLinkClass(!0)},200)};if(a.mobile.activeClickedLink&&a.mobile.activeClickedLink[0]===e.target.parentNode&&p(),n&&!(e.which>1)&&o.jqmHijackable().length){if(o.is(":jqmData(rel='back')"))return a.mobile.back(),!1;if(g=a.mobile.getClosestBaseUrl(o),h=a.mobile.path.makeUrlAbsolute(o.attr("href")||"#",g),!a.mobile.ajaxEnabled&&!a.mobile.path.isEmbeddedPage(h))return void p();if(-1!==h.search("#")){if(h=h.replace(/[^#]*#/,""),!h)return void e.preventDefault();h=a.mobile.path.isPath(h)?a.mobile.path.makeUrlAbsolute(h,g):a.mobile.path.makeUrlAbsolute("#"+h,f.hrefNoHash)}if(i=o.is("[rel='external']")||o.is(":jqmData(ajax='false')")||o.is("[target]"),j=i||a.mobile.path.isExternal(h)&&!a.mobile.path.isPermittedCrossDomainRequest(f,h))return void p();k=o.jqmData("transition"),l="reverse"===o.jqmData("direction")||o.jqmData("back"),m=o.attr("data-"+a.mobile.ns+"rel")||c,a.mobile.changePage(h,{transition:k,reverse:l,role:m,link:o}),e.preventDefault()}}}),a.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var b=[];a(this).find("a:jqmData(prefetch)").each(function(){var c=a(this),d=c.attr("href");d&&-1===a.inArray(d,b)&&(b.push(d),a.mobile.loadPage(d,{role:c.attr("data-"+a.mobile.ns+"rel"),prefetch:!0}))})}),a.mobile.pageContainer.pagecontainer(),a.mobile.document.bind("pageshow",a.mobile.resetActivePageHeight),a.mobile.window.bind("throttledresize",a.mobile.resetActivePageHeight)},a(function(){e.resolve()}),a.when(e,a.mobile.navreadyDeferred).done(function(){a.mobile._registerInternalEvents()})}(a),function(a,b){a.mobile.Transition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(b,c,d,e){a.extend(this,{name:b,reverse:c,$to:d,$from:e,deferred:new a.Deferred})},cleanFrom:function(){this.$from.removeClass(a.mobile.activePageClass+" out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),a.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.sequential||this.$to.addClass(a.mobile.activePageClass),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(a,b,c,d){this.beforeDoneOut(),this.startIn(a,b,c,d)},hideIn:function(a){this.$to.css("z-index",-10),a.call(this),this.$to.css("z-index","")},scrollPage:function(){a.event.special.scrollstart.enabled=!1,(a.mobile.hideUrlBar||this.toScroll!==a.mobile.defaultHomeScroll)&&b.scrollTo(0,this.toScroll),setTimeout(function(){a.event.special.scrollstart.enabled=!0
},150)},startIn:function(b,c,d,e){this.hideIn(function(){this.$to.addClass(a.mobile.activePageClass+this.toPreClass),e||a.mobile.focusPage(this.$to),this.$to.height(b+this.toScroll),d||this.scrollPage()}),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+c),d?this.doneIn():this.$to.animationComplete(a.proxy(function(){this.doneIn()},this))},startOut:function(b,c,d){this.beforeStartOut(b,c,d),this.$from.height(b+a.mobile.window.scrollTop()).addClass(this.name+" out"+c)},toggleViewportClass:function(){a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(){var b=this.reverse?" reverse":"",c=a.mobile.getScreenHeight(),d=a.mobile.maxTransitionWidth!==!1&&a.mobile.window.width()>a.mobile.maxTransitionWidth,e=!a.support.cssTransitions||!a.support.cssAnimations||d||!this.name||"none"===this.name||Math.max(a.mobile.window.scrollTop(),this.toScroll)>a.mobile.getMaxScrollForTransition();return this.toScroll=a.mobile.navigate.history.getActive().lastScroll||a.mobile.defaultHomeScroll,this.toggleViewportClass(),this.$from&&!e?this.startOut(c,b,e):this.doneOut(c,b,e,!0),this.deferred.promise()}})}(a,this),function(a){a.mobile.SerialTransition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.SerialTransition.prototype,a.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(b,c,d){this.$from.animationComplete(a.proxy(function(){this.doneOut(b,c,d)},this))}})}(a),function(a){a.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.ConcurrentTransition.prototype,a.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(a,b,c){this.doneOut(a,b,c)}})}(a),function(a){var b=function(){return 3*a.mobile.getScreenHeight()};a.mobile.transitionHandlers={sequential:a.mobile.SerialTransition,simultaneous:a.mobile.ConcurrentTransition},a.mobile.defaultTransitionHandler=a.mobile.transitionHandlers.sequential,a.mobile.transitionFallbacks={},a.mobile._maybeDegradeTransition=function(b){return b&&!a.support.cssTransform3d&&a.mobile.transitionFallbacks[b]&&(b=a.mobile.transitionFallbacks[b]),b},a.mobile.getMaxScrollForTransition=a.mobile.getMaxScrollForTransition||b}(a),function(a){a.mobile.transitionFallbacks.flip="fade"}(a,this),function(a){a.mobile.transitionFallbacks.flow="fade"}(a,this),function(a){a.mobile.transitionFallbacks.pop="fade"}(a,this),function(a){a.mobile.transitionHandlers.slide=a.mobile.transitionHandlers.simultaneous,a.mobile.transitionFallbacks.slide="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slidedown="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slidefade="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slideup="fade"}(a,this),function(a){a.mobile.transitionFallbacks.turn="fade"}(a,this),function(a){a.mobile.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},a.mobile.page.prototype.options.degradeInputs=a.mobile.degradeInputs,a.mobile.degradeInputsWithin=function(b){b=a(b),b.find("input").not(a.mobile.page.prototype.keepNativeSelector()).each(function(){var b,c,d,e,f=a(this),g=this.getAttribute("type"),h=a.mobile.degradeInputs[g]||"text";a.mobile.degradeInputs[g]&&(b=a("<div>").html(f.clone()).html(),c=b.indexOf(" type=")>-1,d=c?/\s+type=["']?\w+['"]?/:/\/?>/,e=' type="'+h+'" data-'+a.mobile.ns+'type="'+g+'"'+(c?"":">"),f.replaceWith(b.replace(d,e)))})}}(a),function(a,b,c){a.widget("mobile.page",a.mobile.page,{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0,dialog:!1},_create:function(){this._super(),this.options.dialog&&(a.extend(this,{_inner:this.element.children(),_headerCloseButton:null}),this.options.enhanced||this._setCloseBtn(this.options.closeBtn))},_enhance:function(){this._super(),this.options.dialog&&this.element.addClass("ui-dialog").wrapInner(a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(this.options.corners?" ui-corner-all":"")}))},_setOptions:function(b){var d,e,f=this.options;b.corners!==c&&this._inner.toggleClass("ui-corner-all",!!b.corners),b.overlayTheme!==c&&a.mobile.activePage[0]===this.element[0]&&(f.overlayTheme=b.overlayTheme,this._handlePageBeforeShow()),b.closeBtnText!==c&&(d=f.closeBtn,e=b.closeBtnText),b.closeBtn!==c&&(d=b.closeBtn),d&&this._setCloseBtn(d,e),this._super(b)},_handlePageBeforeShow:function(){this.options.overlayTheme&&this.options.dialog?(this.removeContainerBackground(),this.setContainerBackground(this.options.overlayTheme)):this._super()},_setCloseBtn:function(b,c){var d,e=this._headerCloseButton;b="left"===b?"left":"right"===b?"right":"none","none"===b?e&&(e.remove(),e=null):e?(e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+b),c&&e.text(c)):(d=this._inner.find(":jqmData(role='header')").first(),e=a("<a></a>",{href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+b}).attr("data-"+a.mobile.ns+"rel","back").text(c||this.options.closeBtnText||"").prependTo(d)),this._headerCloseButton=e}})}(a,this),function(a,b,c){a.widget("mobile.dialog",{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_handlePageBeforeHide:function(){this._isCloseable=!1},_handleVClickSubmit:function(b){var c,d=a(b.target).closest("vclick"===b.type?"a":"form");d.length&&!d.jqmData("transition")&&(c={},c["data-"+a.mobile.ns+"transition"]=(a.mobile.navigate.history.getActive()||{}).transition||a.mobile.defaultDialogTransition,c["data-"+a.mobile.ns+"direction"]="reverse",d.attr(c))},_create:function(){var b=this.element,c=this.options;b.addClass("ui-dialog").wrapInner(a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(c.corners?" ui-corner-all":"")})),a.extend(this,{_isCloseable:!1,_inner:b.children(),_headerCloseButton:null}),this._on(b,{vclick:"_handleVClickSubmit",submit:"_handleVClickSubmit",pagebeforeshow:"_handlePageBeforeShow",pagebeforehide:"_handlePageBeforeHide"}),this._setCloseBtn(c.closeBtn)},_setOptions:function(b){var d,e,f=this.options;b.corners!==c&&this._inner.toggleClass("ui-corner-all",!!b.corners),b.overlayTheme!==c&&a.mobile.activePage[0]===this.element[0]&&(f.overlayTheme=b.overlayTheme,this._handlePageBeforeShow()),b.closeBtnText!==c&&(d=f.closeBtn,e=b.closeBtnText),b.closeBtn!==c&&(d=b.closeBtn),d&&this._setCloseBtn(d,e),this._super(b)},_setCloseBtn:function(b,c){var d,e=this._headerCloseButton;b="left"===b?"left":"right"===b?"right":"none","none"===b?e&&(e.remove(),e=null):e?(e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+b),c&&e.text(c)):(d=this._inner.find(":jqmData(role='header')").first(),e=a("<a></a>",{role:"button",href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+b}).text(c||this.options.closeBtnText||"").prependTo(d),this._on(e,{click:"close"})),this._headerCloseButton=e},close:function(){var b=a.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,a.mobile.hashListeningEnabled&&b.activeIndex>0?a.mobile.back():a.mobile.pageContainer.pagecontainer("back"))}})}(a,this),function(a,b){var c=/([A-Z])/g,d=function(a){return"ui-btn-icon-"+(null===a?"left":a)};a.widget("mobile.collapsible",{options:{enhanced:!1,expandCueText:null,collapseCueText:null,collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:null,expandedIcon:null,iconpos:null,theme:null,contentTheme:null,inset:null,corners:null,mini:null},_create:function(){var b=this.element,c={accordion:b.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')"+(a.mobile.collapsibleset?", :mobile-collapsibleset":"")).addClass("ui-collapsible-set")};this._ui=c,this._renderedOptions=this._getOptions(this.options),this.options.enhanced?(c.heading=a(".ui-collapsible-heading",this.element[0]),c.content=c.heading.next(),c.anchor=a("a",c.heading[0]).first(),c.status=c.anchor.children(".ui-collapsible-heading-status")):this._enhance(b,c),this._on(c.heading,{tap:function(){c.heading.find("a").first().addClass(a.mobile.activeBtnClass)},click:function(a){this._handleExpandCollapse(!c.heading.hasClass("ui-collapsible-heading-collapsed")),a.preventDefault(),a.stopPropagation()}})},_getOptions:function(b){var d,e=this._ui.accordion,f=this._ui.accordionWidget;b=a.extend({},b),e.length&&!f&&(this._ui.accordionWidget=f=e.data("mobile-collapsibleset"));for(d in b)b[d]=null!=b[d]?b[d]:f?f.options[d]:e.length?a.mobile.getAttribute(e[0],d.replace(c,"-$1").toLowerCase()):null,null==b[d]&&(b[d]=a.mobile.collapsible.defaults[d]);return b},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:""},_enhance:function(b,c){var e,f=this._renderedOptions,g=this._themeClassFromOption("ui-body-",f.contentTheme);return b.addClass("ui-collapsible "+(f.inset?"ui-collapsible-inset ":"")+(f.inset&&f.corners?"ui-corner-all ":"")+(g?"ui-collapsible-themed-content ":"")),c.originalHeading=b.children(this.options.heading).first(),c.content=b.wrapInner("<div class='ui-collapsible-content "+g+"'></div>").children(".ui-collapsible-content"),c.heading=c.originalHeading,c.heading.is("legend")&&(c.heading=a("<div role='heading'>"+c.heading.html()+"</div>"),c.placeholder=a("<div><!-- placeholder for legend --></div>").insertBefore(c.originalHeading),c.originalHeading.remove()),e=f.collapsed?f.collapsedIcon?"ui-icon-"+f.collapsedIcon:"":f.expandedIcon?"ui-icon-"+f.expandedIcon:"",c.status=a("<span class='ui-collapsible-heading-status'></span>"),c.anchor=c.heading.detach().addClass("ui-collapsible-heading").append(c.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn "+(e?e+" ":"")+(e?d(f.iconpos)+" ":"")+this._themeClassFromOption("ui-btn-",f.theme)+" "+(f.mini?"ui-mini ":"")),c.heading.insertBefore(c.content),this._handleExpandCollapse(this.options.collapsed),c},refresh:function(){this._applyOptions(this.options),this._renderedOptions=this._getOptions(this.options)},_applyOptions:function(a){var c,e,f,g,h=this.element,i=this._renderedOptions,j=this._ui,k=j.anchor,l=j.status,m=this._getOptions(a);a.collapsed!==b&&this._handleExpandCollapse(a.collapsed),c=h.hasClass("ui-collapsible-collapsed"),c?(m.expandCueText!==b&&l.text(m.expandCueText),m.collapsedIcon!==b&&(i.collapsedIcon&&k.removeClass("ui-icon-"+i.collapsedIcon),m.collapsedIcon&&k.addClass("ui-icon-"+m.collapsedIcon))):(m.collapseCueText!==b&&l.text(m.collapseCueText),m.expandedIcon!==b&&(i.expandedIcon&&k.removeClass("ui-icon-"+i.expandedIcon),m.expandedIcon&&k.addClass("ui-icon-"+m.expandedIcon))),m.iconpos!==b&&k.removeClass(d(i.iconpos)).addClass(d(m.iconpos)),m.theme!==b&&(f=this._themeClassFromOption("ui-btn-",i.theme),e=this._themeClassFromOption("ui-btn-",m.theme),k.removeClass(f).addClass(e)),m.contentTheme!==b&&(f=this._themeClassFromOption("ui-body-",i.contentTheme),e=this._themeClassFromOption("ui-body-",m.contentTheme),j.content.removeClass(f).addClass(e)),m.inset!==b&&(h.toggleClass("ui-collapsible-inset",m.inset),g=!(!m.inset||!m.corners&&!i.corners)),m.corners!==b&&(g=!(!m.corners||!m.inset&&!i.inset)),g!==b&&h.toggleClass("ui-corner-all",g),m.mini!==b&&k.toggleClass("ui-mini",m.mini)},_setOptions:function(a){this._applyOptions(a),this._super(a),this._renderedOptions=this._getOptions(this.options)},_handleExpandCollapse:function(b){var c=this._renderedOptions,d=this._ui;d.status.text(b?c.expandCueText:c.collapseCueText),d.heading.toggleClass("ui-collapsible-heading-collapsed",b).find("a").first().toggleClass("ui-icon-"+c.expandedIcon,!b).toggleClass("ui-icon-"+c.collapsedIcon,b||c.expandedIcon===c.collapsedIcon).removeClass(a.mobile.activeBtnClass),this.element.toggleClass("ui-collapsible-collapsed",b),d.content.toggleClass("ui-collapsible-content-collapsed",b).attr("aria-hidden",b).trigger("updatelayout"),this.options.collapsed=b,this._trigger(b?"collapse":"expand")},expand:function(){this._handleExpandCollapse(!1)},collapse:function(){this._handleExpandCollapse(!0)},_destroy:function(){var a=this._ui,b=this.options;b.enhanced||(a.placeholder?(a.originalHeading.insertBefore(a.placeholder),a.placeholder.remove(),a.heading.remove()):(a.status.remove(),a.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()),a.anchor.contents().unwrap(),a.content.contents().unwrap(),this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))}}),a.mobile.collapsible.defaults={expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsedIcon:"plus",contentTheme:"inherit",expandedIcon:"minus",iconpos:"left",inset:!0,corners:!0,theme:"inherit",mini:!1}}(a),function(a){a.mobile.behaviors.addFirstLastClasses={_getVisibles:function(a,b){var c;return b?c=a.not(".ui-screen-hidden"):(c=a.filter(":visible"),0===c.length&&(c=a.not(".ui-screen-hidden"))),c},_addFirstLastClasses:function(a,b,c){a.removeClass("ui-first-child ui-last-child"),b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),c||this.element.trigger("updatelayout")},_removeFirstLastClasses:function(a){a.removeClass("ui-first-child ui-last-child")}}}(a),function(a,b){var c=":mobile-collapsible, "+a.mobile.collapsible.initSelector;a.widget("mobile.collapsibleset",a.extend({initSelector:":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",options:a.extend({enhanced:!1},a.mobile.collapsible.defaults),_handleCollapsibleExpand:function(b){var c=a(b.target).closest(".ui-collapsible");c.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')")&&c.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")},_create:function(){var b=this.element,c=this.options;a.extend(this,{_classes:""}),c.enhanced||(b.addClass("ui-collapsible-set "+this._themeClassFromOption("ui-group-theme-",c.theme)+" "+(c.corners&&c.inset?"ui-corner-all ":"")),this.element.find(a.mobile.collapsible.initSelector).collapsible()),this._on(b,{collapsibleexpand:"_handleCollapsibleExpand"})},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:""},_init:function(){this._refresh(!0),this.element.children(c).filter(":jqmData(collapsed='false')").collapsible("expand")},_setOptions:function(a){var c,d,e=this.element,f=this._themeClassFromOption("ui-group-theme-",a.theme);return f&&e.removeClass(this._themeClassFromOption("ui-group-theme-",this.options.theme)).addClass(f),a.inset!==b&&(d=!(!a.inset||!a.corners&&!this.options.corners)),a.corners!==b&&(d=!(!a.corners||!a.inset&&!this.options.inset)),d!==b&&e.toggleClass("ui-corner-all",d),c=this._super(a),this.element.children(":mobile-collapsible").collapsible("refresh"),c},_destroy:function(){var a=this.element;this._removeFirstLastClasses(a.children(c)),a.removeClass("ui-collapsible-set ui-corner-all "+this._themeClassFromOption("ui-group-theme-",this.options.theme)).children(":mobile-collapsible").collapsible("destroy")},_refresh:function(b){var d=this.element.children(c);this.element.find(a.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(),this._addFirstLastClasses(d,this._getVisibles(d,b),b)},refresh:function(){this._refresh(!1)}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a){a.fn.fieldcontain=function(){return this.addClass("ui-field-contain")}}(a),function(a){a.fn.grid=function(b){return this.each(function(){var c,d,e=a(this),f=a.extend({grid:null},b),g=e.children(),h={solo:1,a:2,b:3,c:4,d:5},i=f.grid;if(!i)if(g.length<=5)for(d in h)h[d]===g.length&&(i=d);else i="a",e.addClass("ui-grid-duo");c=h[i],e.addClass("ui-grid-"+i),g.filter(":nth-child("+c+"n+1)").addClass("ui-block-a"),c>1&&g.filter(":nth-child("+c+"n+2)").addClass("ui-block-b"),c>2&&g.filter(":nth-child("+c+"n+3)").addClass("ui-block-c"),c>3&&g.filter(":nth-child("+c+"n+4)").addClass("ui-block-d"),c>4&&g.filter(":nth-child("+c+"n+5)").addClass("ui-block-e")})}}(a),function(a,b){a.widget("mobile.navbar",{options:{iconpos:"top",grid:null},_create:function(){var d=this.element,e=d.find("a"),f=e.filter(":jqmData(icon)").length?this.options.iconpos:b;d.addClass("ui-navbar").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),e.each(function(){var b=a.mobile.getAttribute(this,"icon"),c=a.mobile.getAttribute(this,"theme"),d="ui-btn";c&&(d+=" ui-btn-"+c),b&&(d+=" ui-icon-"+b+" ui-btn-icon-"+f),a(this).addClass(d)}),d.delegate("a","vclick",function(){var b=a(this);b.hasClass("ui-state-disabled")||b.hasClass("ui-disabled")||b.hasClass(a.mobile.activeBtnClass)||(e.removeClass(a.mobile.activeBtnClass),b.addClass(a.mobile.activeBtnClass),a(c).one("pagehide",function(){b.removeClass(a.mobile.activeBtnClass)}))}),d.closest(".ui-page").bind("pagebeforeshow",function(){e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)})}})}(a),function(a){var b=a.mobile.getAttribute;a.widget("mobile.listview",a.extend({options:{theme:null,countTheme:null,dividerTheme:null,icon:"carat-r",splitIcon:"carat-r",splitTheme:null,corners:!0,shadow:!0,inset:!1},_create:function(){var a=this,b="";b+=a.options.inset?" ui-listview-inset":"",a.options.inset&&(b+=a.options.corners?" ui-corner-all":"",b+=a.options.shadow?" ui-shadow":""),a.element.addClass(" ui-listview"+b),a.refresh(!0)},_findFirstElementByTagName:function(a,b,c,d){var e={};for(e[c]=e[d]=!0;a;){if(e[a.nodeName])return a;a=a[b]}return null},_addThumbClasses:function(b){var c,d,e=b.length;for(c=0;e>c;c++)d=a(this._findFirstElementByTagName(b[c].firstChild,"nextSibling","img","IMG")),d.length&&a(this._findFirstElementByTagName(d[0].parentNode,"parentNode","li","LI")).addClass(d.hasClass("ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")},_getChildrenByTagName:function(b,c,d){var e=[],f={};for(f[c]=f[d]=!0,b=b.firstChild;b;)f[b.nodeName]&&e.push(b),b=b.nextSibling;return a(e)},_beforeListviewRefresh:a.noop,_afterListviewRefresh:a.noop,refresh:function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=this.options,y=this.element,z=!!a.nodeName(y[0],"ol"),A=y.attr("start"),B={},C=y.find(".ui-li-count"),D=b(y[0],"counttheme")||this.options.countTheme,E=D?"ui-body-"+D:"ui-body-inherit";for(x.theme&&y.addClass("ui-group-theme-"+x.theme),z&&(A||0===A)&&(n=parseInt(A,10)-1,y.css("counter-reset","listnumbering "+n)),this._beforeListviewRefresh(),w=this._getChildrenByTagName(y[0],"li","LI"),e=0,f=w.length;f>e;e++)g=w.eq(e),h="",(c||g[0].className.search(/\bui-li-static\b|\bui-li-divider\b/)<0)&&(l=this._getChildrenByTagName(g[0],"a","A"),m="list-divider"===b(g[0],"role"),p=g.attr("value"),i=b(g[0],"theme"),l.length&&l[0].className.search(/\bui-btn\b/)<0&&!m?(j=b(g[0],"icon"),k=j===!1?!1:j||x.icon,l.removeClass("ui-link"),d="ui-btn",i&&(d+=" ui-btn-"+i),l.length>1?(h="ui-li-has-alt",q=l.last(),r=b(q[0],"theme")||x.splitTheme||b(g[0],"theme",!0),s=r?" ui-btn-"+r:"",t=b(q[0],"icon")||b(g[0],"icon")||x.splitIcon,u="ui-btn ui-btn-icon-notext ui-icon-"+t+s,q.attr("title",a.trim(q.getEncodedText())).addClass(u).empty()):k&&(d+=" ui-btn-icon-right ui-icon-"+k),l.first().addClass(d)):m?(v=b(g[0],"theme")||x.dividerTheme||x.theme,h="ui-li-divider ui-bar-"+(v?v:"inherit"),g.attr("role","heading")):l.length<=0&&(h="ui-li-static ui-body-"+(i?i:"inherit")),z&&p&&(o=parseInt(p,10)-1,g.css("counter-reset","listnumbering "+o))),B[h]||(B[h]=[]),B[h].push(g[0]);for(h in B)a(B[h]).addClass(h);C.each(function(){a(this).closest("li").addClass("ui-li-has-count")}),E&&C.addClass(E),this._addThumbClasses(w),this._addThumbClasses(w.find(".ui-btn")),this._afterListviewRefresh(),this._addFirstLastClasses(w,this._getVisibles(w,c),c)}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a){function b(b){var c=a.trim(b.text())||null;return c?c=c.slice(0,1).toUpperCase():null}a.widget("mobile.listview",a.mobile.listview,{options:{autodividers:!1,autodividersSelector:b},_beforeListviewRefresh:function(){this.options.autodividers&&(this._replaceDividers(),this._superApply(arguments))},_replaceDividers:function(){var b,d,e,f,g,h=null,i=this.element;for(i.children("li:jqmData(role='list-divider')").remove(),d=i.children("li"),b=0;b<d.length;b++)e=d[b],f=this.options.autodividersSelector(a(e)),f&&h!==f&&(g=c.createElement("li"),g.appendChild(c.createTextNode(f)),g.setAttribute("data-"+a.mobile.ns+"role","list-divider"),e.parentNode.insertBefore(g,e)),h=f}})}(a),function(a){var b=/(^|\s)ui-li-divider($|\s)/,c=/(^|\s)ui-screen-hidden($|\s)/;a.widget("mobile.listview",a.mobile.listview,{options:{hideDividers:!1},_afterListviewRefresh:function(){var a,d,e,f=!0;if(this._superApply(arguments),this.options.hideDividers)for(a=this._getChildrenByTagName(this.element[0],"li","LI"),d=a.length-1;d>-1;d--)e=a[d],e.className.match(b)?(f&&(e.className=e.className+" ui-screen-hidden"),f=!0):e.className.match(c)||(f=!1)}})}(a),function(a){a.mobile.nojs=function(b){a(":jqmData(role='nojs')",b).addClass("ui-nojs")}}(a),function(a){a.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(a),function(a,b){a.widget("mobile.checkboxradio",a.extend({initSelector:"input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",options:{theme:"inherit",mini:!1,wrapperClass:null,enhanced:!1,iconpos:"left"},_create:function(){var b=this.element,c=this.options,d=function(a,b){return a.jqmData(b)||a.closest("form, fieldset").jqmData(b)},e=b.closest("label"),f=e.length?e:b.closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='"+a.mobile.path.hashToSelector(b[0].id)+"']").first(),g=b[0].type,h="ui-"+g+"-on",i="ui-"+g+"-off";("checkbox"===g||"radio"===g)&&(this.element[0].disabled&&(this.options.disabled=!0),c.iconpos=d(b,"iconpos")||f.attr("data-"+a.mobile.ns+"iconpos")||c.iconpos,c.mini=d(b,"mini")||c.mini,a.extend(this,{input:b,label:f,parentLabel:e,inputtype:g,checkedClass:h,uncheckedClass:i}),this.options.enhanced||this._enhance(),this._on(f,{vmouseover:"_handleLabelVMouseOver",vclick:"_handleLabelVClick"}),this._on(b,{vmousedown:"_cacheVals",vclick:"_handleInputVClick",focus:"_handleInputFocus",blur:"_handleInputBlur"}),this._handleFormReset(),this.refresh())},_enhance:function(){this.label.addClass("ui-btn ui-corner-all"),this.parentLabel.length>0?this.input.add(this.label).wrapAll(this._wrapper()):(this.element.wrap(this._wrapper()),this.element.parent().prepend(this.label)),this._setOptions({theme:this.options.theme,iconpos:this.options.iconpos,mini:this.options.mini})},_wrapper:function(){return a("<div class='"+(this.options.wrapperClass?this.options.wrapperClass:"")+" ui-"+this.inputtype+(this.options.disabled?" ui-state-disabled":"")+"' ></div>")},_handleInputFocus:function(){this.label.addClass(a.mobile.focusClass)},_handleInputBlur:function(){this.label.removeClass(a.mobile.focusClass)},_handleInputVClick:function(){var a=this.element;a.is(":checked")?(a.prop("checked",!0),this._getInputSet().not(a).prop("checked",!1)):a.prop("checked",!1),this._updateAll()},_handleLabelVMouseOver:function(a){this.label.parent().hasClass("ui-state-disabled")&&a.stopPropagation()},_handleLabelVClick:function(a){var b=this.element;return b.is(":disabled")?void a.preventDefault():(this._cacheVals(),b.prop("checked","radio"===this.inputtype&&!0||!b.prop("checked")),b.triggerHandler("click"),this._getInputSet().not(b).prop("checked",!1),this._updateAll(),!1)},_cacheVals:function(){this._getInputSet().each(function(){a(this).attr("data-"+a.mobile.ns+"cacheVal",this.checked)})},_getInputSet:function(){return"checkbox"===this.inputtype?this.element:this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='"+this.element[0].name+"'][type='"+this.inputtype+"']")},_updateAll:function(){var b=this;this._getInputSet().each(function(){var c=a(this);(this.checked||"checkbox"===b.inputtype)&&c.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},_hasIcon:function(){var b,c,d=a.mobile.controlgroup;return d&&(b=this.element.closest(":mobile-controlgroup,"+d.prototype.initSelector),b.length>0)?(c=a.data(b[0],"mobile-controlgroup"),"horizontal"!==(c?c.options.type:b.attr("data-"+a.mobile.ns+"type"))):!0},refresh:function(){var b=this._hasIcon(),c=this.element[0].checked,d=a.mobile.activeBtnClass,e="ui-btn-icon-"+this.options.iconpos,f=[],g=[];b?(g.push(d),f.push(e)):(g.push(e),(c?f:g).push(d)),c?(f.push(this.checkedClass),g.push(this.uncheckedClass)):(f.push(this.uncheckedClass),g.push(this.checkedClass)),this.label.addClass(f.join(" ")).removeClass(g.join(" "))},widget:function(){return this.label.parent()},_setOptions:function(a){var c=this.label,d=this.options,e=this.widget(),f=this._hasIcon();a.disabled!==b&&(this.input.prop("disabled",!!a.disabled),e.toggleClass("ui-state-disabled",!!a.disabled)),a.mini!==b&&e.toggleClass("ui-mini",!!a.mini),a.theme!==b&&c.removeClass("ui-btn-"+d.theme).addClass("ui-btn-"+a.theme),a.wrapperClass!==b&&e.removeClass(d.wrapperClass).addClass(a.wrapperClass),a.iconpos!==b&&f?c.removeClass("ui-btn-icon-"+d.iconpos).addClass("ui-btn-icon-"+a.iconpos):f||c.removeClass("ui-btn-icon-"+d.iconpos),this._super(a)}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.button",{initSelector:"input[type='button'], input[type='submit'], input[type='reset']",options:{theme:null,icon:null,iconpos:"left",iconshadow:!1,corners:!0,shadow:!0,inline:null,mini:null,wrapperClass:null,enhanced:!1},_create:function(){this.element.is(":disabled")&&(this.options.disabled=!0),this.options.enhanced||this._enhance(),a.extend(this,{wrapper:this.element.parent()}),this._on({focus:function(){this.widget().addClass(a.mobile.focusClass)},blur:function(){this.widget().removeClass(a.mobile.focusClass)}}),this.refresh(!0)},_enhance:function(){this.element.wrap(this._button())},_button:function(){var b=this.options,c=this._getIconClasses(this.options);return a("<div class='ui-btn ui-input-btn"+(b.wrapperClass?" "+b.wrapperClass:"")+(b.theme?" ui-btn-"+b.theme:"")+(b.corners?" ui-corner-all":"")+(b.shadow?" ui-shadow":"")+(b.inline?" ui-btn-inline":"")+(b.mini?" ui-mini":"")+(b.disabled?" ui-state-disabled":"")+(c?" "+c:"")+"' >"+this.element.val()+"</div>")},widget:function(){return this.wrapper},_destroy:function(){this.element.insertBefore(this.button),this.button.remove()},_getIconClasses:function(a){return a.icon?"ui-icon-"+a.icon+(a.iconshadow?" ui-shadow-icon":"")+" ui-btn-icon-"+a.iconpos:""},_setOptions:function(c){var d=this.widget();c.theme!==b&&d.removeClass(this.options.theme).addClass("ui-btn-"+c.theme),c.corners!==b&&d.toggleClass("ui-corner-all",c.corners),c.shadow!==b&&d.toggleClass("ui-shadow",c.shadow),c.inline!==b&&d.toggleClass("ui-btn-inline",c.inline),c.mini!==b&&d.toggleClass("ui-mini",c.mini),c.disabled!==b&&(this.element.prop("disabled",c.disabled),d.toggleClass("ui-state-disabled",c.disabled)),(c.icon!==b||c.iconshadow!==b||c.iconpos!==b)&&d.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(a.extend({},this.options,c))),this._super(c)},refresh:function(b){if(this.options.icon&&"notext"===this.options.iconpos&&this.element.attr("title")&&this.element.attr("title",this.element.val()),!b){var c=this.element.detach();a(this.wrapper).text(this.element.val()).append(c)}}})}(a),function(a){var b=a("meta[name=viewport]"),c=b.attr("content"),d=c+",maximum-scale=1, user-scalable=no",e=c+",maximum-scale=10, user-scalable=yes",f=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);a.mobile.zoom=a.extend({},{enabled:!f,locked:!1,disable:function(c){f||a.mobile.zoom.locked||(b.attr("content",d),a.mobile.zoom.enabled=!1,a.mobile.zoom.locked=c||!1)},enable:function(c){f||a.mobile.zoom.locked&&c!==!0||(b.attr("content",e),a.mobile.zoom.enabled=!0,a.mobile.zoom.locked=!1)},restore:function(){f||(b.attr("content",c),a.mobile.zoom.enabled=!0)}})}(a),function(a,b){a.widget("mobile.textinput",{initSelector:"input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",options:{theme:null,corners:!0,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,wrapperClass:"",enhanced:!1},_create:function(){var b=this.options,c=this.element.is("[type='search'], :jqmData(type='search')"),d="TEXTAREA"===this.element[0].tagName,e=this.element.is("[data-"+(a.mobile.ns||"")+"type='range']"),f=(this.element.is("input")||this.element.is("[data-"+(a.mobile.ns||"")+"type='search']"))&&!e;this.element.prop("disabled")&&(b.disabled=!0),a.extend(this,{classes:this._classesFromOptions(),isSearch:c,isTextarea:d,isRange:e,inputNeedsWrap:f}),this._autoCorrect(),b.enhanced||this._enhance(),this._on({focus:"_handleFocus",blur:"_handleBlur"})},refresh:function(){this.setOptions({disabled:this.element.is(":disabled")})},_enhance:function(){var a=[];this.isTextarea&&a.push("ui-input-text"),(this.isTextarea||this.isRange)&&a.push("ui-shadow-inset"),this.inputNeedsWrap?this.element.wrap(this._wrap()):a=a.concat(this.classes),this.element.addClass(a.join(" "))},widget:function(){return this.inputNeedsWrap?this.element.parent():this.element},_classesFromOptions:function(){var a=this.options,b=[];return b.push("ui-body-"+(null===a.theme?"inherit":a.theme)),a.corners&&b.push("ui-corner-all"),a.mini&&b.push("ui-mini"),a.disabled&&b.push("ui-state-disabled"),a.wrapperClass&&b.push(a.wrapperClass),b},_wrap:function(){return a("<div class='"+(this.isSearch?"ui-input-search ":"ui-input-text ")+this.classes.join(" ")+" ui-shadow-inset'></div>")},_autoCorrect:function(){"undefined"==typeof this.element[0].autocorrect||a.support.touchOverflow||(this.element[0].setAttribute("autocorrect","off"),this.element[0].setAttribute("autocomplete","off"))},_handleBlur:function(){this.widget().removeClass(a.mobile.focusClass),this.options.preventFocusZoom&&a.mobile.zoom.enable(!0)},_handleFocus:function(){this.options.preventFocusZoom&&a.mobile.zoom.disable(!0),this.widget().addClass(a.mobile.focusClass)},_setOptions:function(a){var c=this.widget();this._super(a),(a.disabled!==b||a.mini!==b||a.corners!==b||a.theme!==b||a.wrapperClass!==b)&&(c.removeClass(this.classes.join(" ")),this.classes=this._classesFromOptions(),c.addClass(this.classes.join(" "))),a.disabled!==b&&this.element.prop("disabled",!!a.disabled)},_destroy:function(){this.options.enhanced||(this.inputNeedsWrap&&this.element.unwrap(),this.element.removeClass("ui-input-text "+this.classes.join(" ")))}})}(a),function(a,d){a.widget("mobile.slider",a.extend({initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!1},_create:function(){var e,f,g,h,i,j,k,l,m,n,o=this,p=this.element,q=this.options.trackTheme||a.mobile.getAttribute(p[0],"theme"),r=q?" ui-bar-"+q:" ui-bar-inherit",s=this.options.corners||p.jqmData("corners")?" ui-corner-all":"",t=this.options.mini||p.jqmData("mini")?" ui-mini":"",u=p[0].nodeName.toLowerCase(),v="select"===u,w=p.parent().is(":jqmData(role='rangeslider')"),x=v?"ui-slider-switch":"",y=p.attr("id"),z=a("[for='"+y+"']"),A=z.attr("id")||y+"-label",B=v?0:parseFloat(p.attr("min")),C=v?p.find("option").length-1:parseFloat(p.attr("max")),D=b.parseFloat(p.attr("step")||1),E=c.createElement("a"),F=a(E),G=c.createElement("div"),H=a(G),I=this.options.highlight&&!v?function(){var b=c.createElement("div");
return b.className="ui-slider-bg "+a.mobile.activeBtnClass,a(b).prependTo(H)}():!1;if(z.attr("id",A),this.isToggleSwitch=v,E.setAttribute("href","#"),G.setAttribute("role","application"),G.className=[this.isToggleSwitch?"ui-slider ui-slider-track ui-shadow-inset ":"ui-slider-track ui-shadow-inset ",x,r,s,t].join(""),E.className="ui-slider-handle",G.appendChild(E),F.attr({role:"slider","aria-valuemin":B,"aria-valuemax":C,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":A}),a.extend(this,{slider:H,handle:F,control:p,type:u,step:D,max:C,min:B,valuebg:I,isRangeslider:w,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1}),v){for(k=p.attr("tabindex"),k&&F.attr("tabindex",k),p.attr("tabindex","-1").focus(function(){a(this).blur(),F.focus()}),f=c.createElement("div"),f.className="ui-slider-inneroffset",g=0,h=G.childNodes.length;h>g;g++)f.appendChild(G.childNodes[g]);for(G.appendChild(f),F.addClass("ui-slider-handle-snapping"),e=p.find("option"),i=0,j=e.length;j>i;i++)l=i?"a":"b",m=i?" "+a.mobile.activeBtnClass:"",n=c.createElement("span"),n.className=["ui-slider-label ui-slider-label-",l,m].join(""),n.setAttribute("role","img"),n.appendChild(c.createTextNode(e[i].innerHTML)),a(n).prependTo(H);o._labels=a(".ui-slider-label",H)}p.addClass(v?"ui-slider-switch":"ui-slider-input"),this._on(p,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),H.bind("vmousedown",a.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(c,{vmousemove:"_preventDocumentDrag"}),this._on(H.add(c),{vmouseup:"_sliderVMouseUp"}),H.insertAfter(p),v||w||(f=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",p.add(H).wrapAll(f)),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(d,d,!0)},_setOptions:function(a){a.theme!==d&&this._setTheme(a.theme),a.trackTheme!==d&&this._setTrackTheme(a.trackTheme),a.corners!==d&&this._setCorners(a.corners),a.mini!==d&&this._setMini(a.mini),a.highlight!==d&&this._setHighlight(a.highlight),a.disabled!==d&&this._setDisabled(a.disabled),this._super(a)},_controlChange:function(a){return this._trigger("controlchange",a)===!1?!1:void(this.mouseMoved||this.refresh(this._value(),!0))},_controlKeyup:function(){this.refresh(this._value(),!0,!0)},_controlBlur:function(){this.refresh(this._value(),!0)},_controlVMouseUp:function(){this._checkedRefresh()},_handleVMouseDown:function(){this.handle.focus()},_handleKeydown:function(b){var c=this._value();if(!this.options.disabled){switch(b.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(b.keyCode){case a.mobile.keyCode.HOME:this.refresh(this.min);break;case a.mobile.keyCode.END:this.refresh(this.max);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:this.refresh(c+this.step);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:this.refresh(c-this.step)}}},_handleKeyup:function(){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(a){return this.options.disabled||1!==a.which&&0!==a.which&&a.which!==d?!1:this._trigger("beforestart",a)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(a),this._trigger("start"),!1)},_sliderVMouseUp:function(){return this.dragging?(this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.refresh(this.mouseMoved?this.userModified?0===this.beforeStart?1:0:this.beforeStart:0===this.beforeStart?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1):void 0},_preventDocumentDrag:function(a){return this._trigger("drag",a)===!1?!1:this.dragging&&!this.options.disabled?(this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(a),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1):void 0},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(d,!1,!0)},refresh:function(b,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z=this,A=a.mobile.getAttribute(this.element[0],"theme"),B=this.options.theme||A,C=B?" ui-btn-"+B:"",D=this.options.trackTheme||A,E=D?" ui-bar-"+D:" ui-bar-inherit",F=this.options.corners?" ui-corner-all":"",G=this.options.mini?" ui-mini":"";if(z.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch ui-slider-track ui-shadow-inset":"ui-slider-track ui-shadow-inset",E,F,G].join(""),(this.options.disabled||this.element.prop("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&0===this.slider.find(".ui-slider-bg").length&&(this.valuebg=function(){var b=c.createElement("div");return b.className="ui-slider-bg "+a.mobile.activeBtnClass,a(b).prependTo(z.slider)}()),this.handle.addClass("ui-btn"+C+" ui-shadow"),l=this.element,m=!this.isToggleSwitch,n=m?[]:l.find("option"),o=m?parseFloat(l.attr("min")):0,p=m?parseFloat(l.attr("max")):n.length-1,q=m&&parseFloat(l.attr("step"))>0?parseFloat(l.attr("step")):1,"object"==typeof b){if(h=b,i=8,f=this.slider.offset().left,g=this.slider.width(),j=g/((p-o)/q),!this.dragging||h.pageX<f-i||h.pageX>f+g+i)return;k=j>1?(h.pageX-f)/g*100:Math.round((h.pageX-f)/g*100)}else null==b&&(b=m?parseFloat(l.val()||0):l[0].selectedIndex),k=(parseFloat(b)-o)/(p-o)*100;if(!isNaN(k)&&(r=k/100*(p-o)+o,s=(r-o)%q,t=r-s,2*Math.abs(s)>=q&&(t+=s>0?q:-q),u=100/((p-o)/q),r=parseFloat(t.toFixed(5)),"undefined"==typeof j&&(j=g/((p-o)/q)),j>1&&m&&(k=(r-o)*u*(1/q)),0>k&&(k=0),k>100&&(k=100),o>r&&(r=o),r>p&&(r=p),this.handle.css("left",k+"%"),this.handle[0].setAttribute("aria-valuenow",m?r:n.eq(r).attr("value")),this.handle[0].setAttribute("aria-valuetext",m?r:n.eq(r).getEncodedText()),this.handle[0].setAttribute("title",m?r:n.eq(r).getEncodedText()),this.valuebg&&this.valuebg.css("width",k+"%"),this._labels&&(v=this.handle.width()/this.slider.width()*100,w=k&&v+(100-v)*k/100,x=100===k?0:Math.min(v+100-w,100),this._labels.each(function(){var b=a(this).hasClass("ui-slider-label-a");a(this).width((b?w:x)+"%")})),!e)){if(y=!1,m?(y=l.val()!==r,l.val(r)):(y=l[0].selectedIndex!==r,l[0].selectedIndex=r),this._trigger("beforechange",b)===!1)return!1;!d&&y&&l.trigger("change")}},_setHighlight:function(a){a=!!a,a?(this.options.highlight=!!a,this.refresh()):this.valuebg&&(this.valuebg.remove(),this.valuebg=!1)},_setTheme:function(a){this.handle.removeClass("ui-btn-"+this.options.theme).addClass("ui-btn-"+a);var b=this.options.theme?this.options.theme:"inherit",c=a?a:"inherit";this.control.removeClass("ui-body-"+b).addClass("ui-body-"+c)},_setTrackTheme:function(a){var b=this.options.trackTheme?this.options.trackTheme:"inherit",c=a?a:"inherit";this.slider.removeClass("ui-body-"+b).addClass("ui-body-"+c)},_setMini:function(a){a=!!a,this.isToggleSwitch||this.isRangeslider||(this.slider.parent().toggleClass("ui-mini",a),this.element.toggleClass("ui-mini",a)),this.slider.toggleClass("ui-mini",a)},_setCorners:function(a){this.slider.toggleClass("ui-corner-all",a),this.isToggleSwitch||this.control.toggleClass("ui-corner-all",a)},_setDisabled:function(a){a=!!a,this.element.prop("disabled",a),this.slider.toggleClass("ui-state-disabled",a).attr("aria-disabled",a)}},a.mobile.behaviors.formReset))}(a),function(a){function b(){return c||(c=a("<div></div>",{"class":"ui-slider-popup ui-shadow ui-corner-all"})),c.clone()}var c;a.widget("mobile.slider",a.mobile.slider,{options:{popupEnabled:!1,showValue:!1},_create:function(){this._super(),a.extend(this,{_currentValue:null,_popup:null,_popupVisible:!1}),this._setOption("popupEnabled",this.options.popupEnabled),this._on(this.handle,{vmousedown:"_showPopup"}),this._on(this.slider.add(this.document),{vmouseup:"_hidePopup"}),this._refresh()},_positionPopup:function(){var a=this.handle.offset();this._popup.offset({left:a.left+(this.handle.width()-this._popup.width())/2,top:a.top-this._popup.outerHeight()-5})},_setOption:function(a,c){this._super(a,c),"showValue"===a?this.handle.html(c&&!this.options.mini?this._value():""):"popupEnabled"===a&&c&&!this._popup&&(this._popup=b().addClass("ui-body-"+(this.options.theme||"a")).hide().insertBefore(this.element))},refresh:function(){this._super.apply(this,arguments),this._refresh()},_refresh:function(){var a,b=this.options;b.popupEnabled&&this.handle.removeAttr("title"),a=this._value(),a!==this._currentValue&&(this._currentValue=a,b.popupEnabled&&this._popup?(this._positionPopup(),this._popup.html(a)):b.showValue&&!this.options.mini&&this.handle.html(a))},_showPopup:function(){this.options.popupEnabled&&!this._popupVisible&&(this.handle.html(""),this._popup.show(),this._positionPopup(),this._popupVisible=!0)},_hidePopup:function(){var a=this.options;a.popupEnabled&&this._popupVisible&&(a.showValue&&!a.mini&&this.handle.html(this._value()),this._popup.hide(),this._popupVisible=!1)}})}(a),function(a,b){a.widget("mobile.flipswitch",a.extend({options:{onText:"On",offText:"Off",theme:null,enhanced:!1,wrapperClass:null,corners:!0,mini:!1},_create:function(){this.options.enhanced?a.extend(this,{flipswitch:this.element.parent(),on:this.element.find(".ui-flipswitch-on").eq(0),off:this.element.find(".ui-flipswitch-off").eq(0),type:this.element.get(0).tagName}):this._enhance(),this._handleFormReset(),this._originalTabIndex=this.element.attr("tabindex"),null!=this._originalTabIndex&&this.on.attr("tabindex",this._originalTabIndex),this.element.attr("tabindex","-1"),this._on({focus:"_handleInputFocus"}),this.element.is(":disabled")&&this._setOptions({disabled:!0}),this._on(this.flipswitch,{click:"_toggle",swipeleft:"_left",swiperight:"_right"}),this._on(this.on,{keydown:"_keydown"}),this._on({change:"refresh"})},_handleInputFocus:function(){this.on.focus()},widget:function(){return this.flipswitch},_left:function(){this.flipswitch.removeClass("ui-flipswitch-active"),"SELECT"===this.type?this.element.get(0).selectedIndex=0:this.element.prop("checked",!1),this.element.trigger("change")},_right:function(){this.flipswitch.addClass("ui-flipswitch-active"),"SELECT"===this.type?this.element.get(0).selectedIndex=1:this.element.prop("checked",!0),this.element.trigger("change")},_enhance:function(){var b=a("<div>"),c=this.options,d=this.element,e=c.theme?c.theme:"inherit",f=a("<a></a>",{href:"#"}),g=a("<span></span>"),h=d.get(0).tagName,i="INPUT"===h?c.onText:d.find("option").eq(1).text(),j="INPUT"===h?c.offText:d.find("option").eq(0).text();f.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(i),g.addClass("ui-flipswitch-off").text(j),b.addClass("ui-flipswitch ui-shadow-inset ui-bar-"+e+" "+(c.wrapperClass?c.wrapperClass:"")+" "+(d.is(":checked")||d.find("option").eq(1).is(":selected")?"ui-flipswitch-active":"")+(d.is(":disabled")?" ui-state-disabled":"")+(c.corners?" ui-corner-all":"")+(c.mini?" ui-mini":"")).append(f,g),d.addClass("ui-flipswitch-input").after(b).appendTo(b),a.extend(this,{flipswitch:b,on:f,off:g,type:h})},_reset:function(){this.refresh()},refresh:function(){var a,b=this.flipswitch.hasClass("ui-flipswitch-active")?"_right":"_left";a="SELECT"===this.type?this.element.get(0).selectedIndex>0?"_right":"_left":this.element.prop("checked")?"_right":"_left",a!==b&&this[a]()},_toggle:function(){var a=this.flipswitch.hasClass("ui-flipswitch-active")?"_left":"_right";this[a]()},_keydown:function(b){b.which===a.mobile.keyCode.LEFT?this._left():b.which===a.mobile.keyCode.RIGHT?this._right():b.which===a.mobile.keyCode.SPACE&&(this._toggle(),b.preventDefault())},_setOptions:function(a){if(a.theme!==b){var c=a.theme?a.theme:"inherit",d=a.theme?a.theme:"inherit";this.widget().removeClass("ui-bar-"+c).addClass("ui-bar-"+d)}a.onText!==b&&this.on.text(a.onText),a.offText!==b&&this.off.text(a.offText),a.disabled!==b&&this.widget().toggleClass("ui-state-disabled",a.disabled),a.mini!==b&&this.widget().toggleClass("ui-mini",a.mini),a.corners!==b&&this.widget().toggleClass("ui-corner-all",a.corners),this._super(a)},_destroy:function(){this.options.enhanced||(null!=this._originalTabIndex?this.element.attr("tabindex",this._originalTabIndex):this.element.removeAttr("tabindex"),this.on.remove(),this.off.remove(),this.element.unwrap(),this.flipswitch.remove(),this.removeClass("ui-flipswitch-input"))}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.rangeslider",a.extend({options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!0},_create:function(){var b=this.element,c=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",d=b.find("input").first(),e=b.find("input").last(),f=b.find("label").first(),g=a.data(d.get(0),"mobile-slider")||a.data(d.slider().get(0),"mobile-slider"),h=a.data(e.get(0),"mobile-slider")||a.data(e.slider().get(0),"mobile-slider"),i=g.slider,j=h.slider,k=g.handle,l=a("<div class='ui-rangeslider-sliders' />").appendTo(b);d.addClass("ui-rangeslider-first"),e.addClass("ui-rangeslider-last"),b.addClass(c),i.appendTo(l),j.appendTo(l),f.insertBefore(b),k.prependTo(j),a.extend(this,{_inputFirst:d,_inputLast:e,_sliderFirst:i,_sliderLast:j,_label:f,_targetVal:null,_sliderTarget:!1,_sliders:l,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(k,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var a=this;setTimeout(function(){a._updateHighlight()},0)},_dragFirstHandle:function(b){return a.data(this._inputFirst.get(0),"mobile-slider").dragging=!0,a.data(this._inputFirst.get(0),"mobile-slider").refresh(b),!1},_slidedrag:function(b){var c=a(b.target).is(this._inputFirst),d=c?this._inputLast:this._inputFirst;return this._sliderTarget=!1,"first"===this._proxy&&c||"last"===this._proxy&&!c?(a.data(d.get(0),"mobile-slider").dragging=!0,a.data(d.get(0),"mobile-slider").refresh(b),!1):void 0},_slidestop:function(b){var c=a(b.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",c?1:"")},_slidebeforestart:function(b){this._sliderTarget=!1,a(b.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=a(b.target).val())},_setOptions:function(a){a.theme!==b&&this._setTheme(a.theme),a.trackTheme!==b&&this._setTrackTheme(a.trackTheme),a.mini!==b&&this._setMini(a.mini),a.highlight!==b&&this._setHighlight(a.highlight),this._super(a),this.refresh()},refresh:function(){var a=this.element,b=this.options;(this._inputFirst.is(":disabled")||this._inputLast.is(":disabled"))&&(this.options.disabled=!0),a.find("input").slider({theme:b.theme,trackTheme:b.trackTheme,disabled:b.disabled,corners:b.corners,mini:b.mini,highlight:b.highlight}).slider("refresh"),this._updateHighlight()},_change:function(b){if("keyup"===b.type)return this._updateHighlight(),!1;var c=this,d=parseFloat(this._inputFirst.val(),10),e=parseFloat(this._inputLast.val(),10),f=a(b.target).hasClass("ui-rangeslider-first"),g=f?this._inputFirst:this._inputLast,h=f?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&"mousedown"===b.type&&!a(b.target).hasClass("ui-slider-handle"))g.blur();else if("mousedown"===b.type)return;return d>e&&!this._sliderTarget?(g.val(f?e:d).slider("refresh"),this._trigger("normalize")):d>e&&(g.val(this._targetVal).slider("refresh"),setTimeout(function(){h.val(f?d:e).slider("refresh"),a.data(h.get(0),"mobile-slider").handle.focus(),c._sliderFirst.css("z-index",f?"":1),c._trigger("normalize")},0),this._proxy=f?"first":"last"),d===e?(a.data(g.get(0),"mobile-slider").handle.css("z-index",1),a.data(h.get(0),"mobile-slider").handle.css("z-index",0)):(a.data(h.get(0),"mobile-slider").handle.css("z-index",""),a.data(g.get(0),"mobile-slider").handle.css("z-index","")),this._updateHighlight(),d>=e?!1:void 0},_updateHighlight:function(){var b=parseInt(a.data(this._inputFirst.get(0),"mobile-slider").handle.get(0).style.left,10),c=parseInt(a.data(this._inputLast.get(0),"mobile-slider").handle.get(0).style.left,10),d=c-b;this.element.find(".ui-slider-bg").css({"margin-left":b+"%",width:d+"%"})},_setTheme:function(a){this._inputFirst.slider("option","theme",a),this._inputLast.slider("option","theme",a)},_setTrackTheme:function(a){this._inputFirst.slider("option","trackTheme",a),this._inputLast.slider("option","trackTheme",a)},_setMini:function(a){this._inputFirst.slider("option","mini",a),this._inputLast.slider("option","mini",a),this.element.toggleClass("ui-mini",!!a)},_setHighlight:function(a){this._inputFirst.slider("option","highlight",a),this._inputLast.slider("option","highlight",a)},_destroy:function(){this._label.prependTo(this.element),this.element.removeClass("ui-rangeslider ui-mini"),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.textinput",a.mobile.textinput,{options:{clearBtn:!1,clearBtnText:"Clear text"},_create:function(){this._super(),(this.options.clearBtn||this.isSearch)&&this._addClearBtn()},clearButton:function(){return a("<a href='#' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all' title='"+this.options.clearBtnText+"'>"+this.options.clearBtnText+"</a>")},_clearBtnClick:function(a){this.element.val("").focus().trigger("change"),this._clearBtn.addClass("ui-input-clear-hidden"),a.preventDefault()},_addClearBtn:function(){this.options.enhanced||this._enhanceClear(),a.extend(this,{_clearBtn:this.widget().find("a.ui-input-clear")}),this._bindClearEvents(),this._toggleClear()},_enhanceClear:function(){this.clearButton().appendTo(this.widget()),this.widget().addClass("ui-input-has-clear")},_bindClearEvents:function(){this._on(this._clearBtn,{click:"_clearBtnClick"}),this._on({keyup:"_toggleClear",change:"_toggleClear",input:"_toggleClear",focus:"_toggleClear",blur:"_toggleClear",cut:"_toggleClear",paste:"_toggleClear"})},_unbindClear:function(){this._off(this._clearBtn,"click"),this._off(this.element,"keyup change input focus blur cut paste")},_setOptions:function(a){this._super(a),a.clearBtn===b||this.element.is("textarea, :jqmData(type='range')")||(a.clearBtn?this._addClearBtn():this._destroyClear()),a.clearBtnText!==b&&this._clearBtn!==b&&this._clearBtn.text(a.clearBtnText).attr("title",a.clearBtnText)},_toggleClear:function(){this._delay("_toggleClearClass",0)},_toggleClearClass:function(){this._clearBtn.toggleClass("ui-input-clear-hidden",!this.element.val())},_destroyClear:function(){this.widget().removeClass("ui-input-has-clear"),this._unbindClear(),this._clearBtn.remove()},_destroy:function(){this._super(),this._destroyClear()}})}(a),function(a,b){a.widget("mobile.textinput",a.mobile.textinput,{options:{autogrow:!0,keyupTimeoutBuffer:100},_create:function(){this._super(),this.options.autogrow&&this.isTextarea&&this._autogrow()},_autogrow:function(){this.element.addClass("ui-textinput-autogrow"),this._on({keyup:"_timeout",change:"_timeout",input:"_timeout",paste:"_timeout"}),this._on(!0,this.document,{pageshow:"_handleShow",popupbeforeposition:"_handleShow",updatelayout:"_handleShow",panelopen:"_handleShow"})},_handleShow:function(b){a.contains(b.target,this.element[0])&&this.element.is(":visible")&&("popupbeforeposition"!==b.type&&this.element.addClass("ui-textinput-autogrow-resize").animationComplete(a.proxy(function(){this.element.removeClass("ui-textinput-autogrow-resize")},this),"transition"),this._timeout())},_unbindAutogrow:function(){this.element.removeClass("ui-textinput-autogrow"),this._off(this.element,"keyup change input paste"),this._off(this.document,"pageshow popupbeforeposition updatelayout panelopen")},keyupTimeout:null,_prepareHeightUpdate:function(a){this.keyupTimeout&&clearTimeout(this.keyupTimeout),a===b?this._updateHeight():this.keyupTimeout=this._delay("_updateHeight",a)},_timeout:function(){this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)},_updateHeight:function(){var a,b,c,d,e,f,g,h,i,j=this.window.scrollTop();this.keyupTimeout=0,"onpage"in this.element[0]||this.element.css({height:0,"min-height":0,"max-height":0}),d=this.element[0].scrollHeight,e=this.element[0].clientHeight,f=parseFloat(this.element.css("border-top-width")),g=parseFloat(this.element.css("border-bottom-width")),h=f+g,i=d+h+15,0===e&&(a=parseFloat(this.element.css("padding-top")),b=parseFloat(this.element.css("padding-bottom")),c=a+b,i+=c),this.element.css({height:i,"min-height":"","max-height":""}),this.window.scrollTop(j)},refresh:function(){this.options.autogrow&&this.isTextarea&&this._updateHeight()},_setOptions:function(a){this._super(a),a.autogrow!==b&&this.isTextarea&&(a.autogrow?this._autogrow():this._unbindAutogrow())}})}(a),function(a){a.widget("mobile.selectmenu",a.extend({initSelector:"select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",options:{theme:null,icon:"carat-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!1,overlayTheme:null,dividerTheme:null,hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,mini:!1},_button:function(){return a("<div/>")},_setDisabled:function(a){return this.element.attr("disabled",a),this.button.attr("aria-disabled",a),this._setOption("disabled",a)},_focusButton:function(){var a=this;setTimeout(function(){a.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var b=this.options.inline||this.element.jqmData("inline"),c=this.options.mini||this.element.jqmData("mini"),d="";~this.element[0].className.indexOf("ui-btn-left")&&(d=" ui-btn-left"),~this.element[0].className.indexOf("ui-btn-right")&&(d=" ui-btn-right"),b&&(d+=" ui-btn-inline"),c&&(d+=" ui-mini"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+d+"'>"),this.selectId=this.select.attr("id")||"select-"+this.uuid,this.buttonId=this.selectId+"-button",this.label=a("label[for='"+this.selectId+"']"),this.isMultiple=this.select[0].multiple},_destroy:function(){var a=this.element.parents(".ui-select");a.length>0&&(a.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(a.hasClass("ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(a),a.remove())},_create:function(){this._preExtension(),this.button=this._button();var c=this,d=this.options,e=d.icon?d.iconpos||this.select.jqmData("iconpos"):!1,f=this.button.insertBefore(this.select).attr("id",this.buttonId).addClass("ui-btn"+(d.icon?" ui-icon-"+d.icon+" ui-btn-icon-"+e+(d.iconshadow?" ui-shadow-icon":""):"")+(d.theme?" ui-btn-"+d.theme:"")+(d.corners?" ui-corner-all":"")+(d.shadow?" ui-shadow":""));this.setButtonText(),d.nativeMenu&&b.opera&&b.opera.version&&f.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=a("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(f.addClass("ui-li-has-count"))),(d.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){c.refresh(),d.nativeMenu&&this.blur()}),this._handleFormReset(),this._on(this.button,{keydown:"_handleKeydown"}),this.build()},build:function(){var b=this;this.select.appendTo(b.button).bind("vmousedown",function(){b.button.addClass(a.mobile.activeBtnClass)}).bind("focus",function(){b.button.addClass(a.mobile.focusClass)}).bind("blur",function(){b.button.removeClass(a.mobile.focusClass)}).bind("focus vmouseover",function(){b.button.trigger("vmouseover")}).bind("vmousemove",function(){b.button.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}),b.button.bind("vmousedown",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.label.bind("click focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.select.bind("focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.button.bind("mouseup",function(){b.options.preventFocusZoom&&setTimeout(function(){a.mobile.zoom.enable(!0)},0)}),b.select.bind("blur",function(){b.options.preventFocusZoom&&a.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var a=this;return this.selected().map(function(){return a._selectOptions().index(this)}).get()},setButtonText:function(){var b=this,d=this.selected(),e=this.placeholder,f=a(c.createElement("span"));this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function(){return e=d.length?d.map(function(){return a(this).text()}).get().join(", "):b.placeholder,e?f.text(e):f.html("&#160;"),f.addClass(b.select.attr("class")).addClass(d.attr("class")).removeClass("ui-screen-hidden")}())},setButtonCount:function(){var a=this.selected();this.isMultiple&&this.buttonCount[a.length>1?"show":"hide"]().text(a.length)},_handleKeydown:function(){this._delay("_refreshButton")},_reset:function(){this.refresh()},_refreshButton:function(){this.setButtonText(),this.setButtonCount()},refresh:function(){this._refreshButton()},open:a.noop,close:a.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-state-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-state-disabled")}},a.mobile.behaviors.formReset))}(a),function(a){a.mobile.links=function(b){a(b).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function(){var a=this,b=a.getAttribute("href").substring(1);b&&(a.setAttribute("aria-haspopup",!0),a.setAttribute("aria-owns",b),a.setAttribute("aria-expanded",!1))}).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")}}(a),function(a,c){function d(a,b,c,d){var e=d;return e=b>a?c+(a-b)/2:Math.min(Math.max(c,d-b/2),c+a-b)}function e(a){return{x:a.scrollLeft(),y:a.scrollTop(),cx:a[0].innerWidth||a.width(),cy:a[0].innerHeight||a.height()}}a.widget("mobile.popup",{options:{wrapperClass:null,theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,enhanced:!1,history:!a.mobile.browser.oldIE},_create:function(){var b=this.element,c=b.attr("id"),d=this.options;d.history=d.history&&a.mobile.ajaxEnabled&&a.mobile.hashListeningEnabled,a.extend(this,{_scrollTop:0,_page:b.closest(".ui-page"),_ui:null,_fallbackTransition:"",_currentTransition:!1,_prerequisites:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),0===this._page.length&&(this._page=a("body")),d.enhanced?this._ui={container:b.parent(),screen:b.parent().prev(),placeholder:a(this.document[0].getElementById(c+"-placeholder"))}:(this._ui=this._enhance(b,c),this._applyTransition(d.transition)),this._setTolerance(d.tolerance)._ui.focusElement=this._ui.container,this._on(this._ui.screen,{vclick:"_eatEventAndClose"}),this._on(this.window,{orientationchange:a.proxy(this,"_handleWindowOrientationchange"),resize:a.proxy(this,"_handleWindowResize"),keyup:a.proxy(this,"_handleWindowKeyUp")}),this._on(this.document,{focusin:"_handleDocumentFocusIn"})},_enhance:function(b,c){var d=this.options,e=d.wrapperClass,f={screen:a("<div class='ui-screen-hidden ui-popup-screen "+this._themeClassFromOption("ui-overlay-",d.overlayTheme)+"'></div>"),placeholder:a("<div style='display: none;'><!-- placeholder --></div>"),container:a("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate"+(e?" "+e:"")+"'></div>")},g=this.document[0].createDocumentFragment();return g.appendChild(f.screen[0]),g.appendChild(f.container[0]),c&&(f.screen.attr("id",c+"-screen"),f.container.attr("id",c+"-popup"),f.placeholder.attr("id",c+"-placeholder").html("<!-- placeholder for "+c+" -->")),this._page[0].appendChild(g),f.placeholder.insertAfter(b),b.detach().addClass("ui-popup "+this._themeClassFromOption("ui-body-",d.theme)+" "+(d.shadow?"ui-overlay-shadow ":"")+(d.corners?"ui-corner-all ":"")).appendTo(f.container),f},_eatEventAndClose:function(a){return a.preventDefault(),a.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var a=this._ui.screen,b=this._ui.container.outerHeight(!0),c=a.removeAttr("style").height(),d=this.document.height()-1;d>c?a.height(d):b>c&&a.height(b)},_handleWindowKeyUp:function(b){return this._isOpen&&b.keyCode===a.mobile.keyCode.ESCAPE?this._eatEventAndClose(b):void 0},_expectResizeEvent:function(){var a=e(this.window);if(this._resizeData){if(a.x===this._resizeData.windowCoordinates.x&&a.y===this._resizeData.windowCoordinates.y&&a.cx===this._resizeData.windowCoordinates.cx&&a.cy===this._resizeData.windowCoordinates.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:this._delay("_resizeTimeout",200),windowCoordinates:a},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_stopIgnoringResizeEvents:function(){this._ignoreResizeTo=0},_ignoreResizeEvents:function(){this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=this._delay("_stopIgnoringResizeEvents",1e3)},_handleWindowResize:function(){this._isOpen&&0===this._ignoreResizeTo&&(!this._expectResizeEvent()&&!this._orientationchangeInProgress||this._ui.container.hasClass("ui-popup-hidden")||this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))},_handleWindowOrientationchange:function(){!this._orientationchangeInProgress&&this._isOpen&&0===this._ignoreResizeTo&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(b){var c,d=b.target,e=this._ui;if(this._isOpen){if(d!==e.container[0]){if(c=a(d),0===c.parents().filter(e.container[0]).length)return a(this.document[0].activeElement).one("focus",function(){c.blur()}),e.focusElement.focus(),b.preventDefault(),b.stopImmediatePropagation(),!1;e.focusElement[0]===e.container[0]&&(e.focusElement=c)}this._ignoreResizeEvents()}},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:a+"inherit"},_applyTransition:function(b){return b&&(this._ui.container.removeClass(this._fallbackTransition),"none"!==b&&(this._fallbackTransition=a.mobile._maybeDegradeTransition(b),"none"===this._fallbackTransition&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))),this},_setOptions:function(a){var b=this.options,d=this.element,e=this._ui.screen;return a.wrapperClass!==c&&this._ui.container.removeClass(b.wrapperClass).addClass(a.wrapperClass),a.theme!==c&&d.removeClass(this._themeClassFromOption("ui-body-",b.theme)).addClass(this._themeClassFromOption("ui-body-",a.theme)),a.overlayTheme!==c&&(e.removeClass(this._themeClassFromOption("ui-overlay-",b.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-",a.overlayTheme)),this._isOpen&&e.addClass("in")),a.shadow!==c&&d.toggleClass("ui-overlay-shadow",a.shadow),a.corners!==c&&d.toggleClass("ui-corner-all",a.corners),a.transition!==c&&(this._currentTransition||this._applyTransition(a.transition)),a.tolerance!==c&&this._setTolerance(a.tolerance),a.disabled!==c&&a.disabled&&this.close(),this._super(a)
},_setTolerance:function(b){var d,e={t:30,r:15,b:30,l:15};if(b!==c)switch(d=String(b).split(","),a.each(d,function(a,b){d[a]=parseInt(b,10)}),d.length){case 1:isNaN(d[0])||(e.t=e.r=e.b=e.l=d[0]);break;case 2:isNaN(d[0])||(e.t=e.b=d[0]),isNaN(d[1])||(e.l=e.r=d[1]);break;case 4:isNaN(d[0])||(e.t=d[0]),isNaN(d[1])||(e.r=d[1]),isNaN(d[2])||(e.b=d[2]),isNaN(d[3])||(e.l=d[3])}return this._tolerance=e,this},_clampPopupWidth:function(a){var b,c=e(this.window),d={x:this._tolerance.l,y:c.y+this._tolerance.t,cx:c.cx-this._tolerance.l-this._tolerance.r,cy:c.cy-this._tolerance.t-this._tolerance.b};return a||this._ui.container.css("max-width",d.cx),b={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},{rc:d,menuSize:b}},_calculateFinalLocation:function(a,b){var c,e=b.rc,f=b.menuSize;return c={left:d(e.cx,f.cx,e.x,a.x),top:d(e.cy,f.cy,e.y,a.y)},c.top=Math.max(0,c.top),c.top-=Math.min(c.top,Math.max(0,c.top+f.cy-this.document.height())),c},_placementCoords:function(a){return this._calculateFinalLocation(a,this._clampPopupWidth())},_createPrerequisites:function(b,c,d){var e,f=this;e={screen:a.Deferred(),container:a.Deferred()},e.screen.then(function(){e===f._prerequisites&&b()}),e.container.then(function(){e===f._prerequisites&&c()}),a.when(e.screen,e.container).done(function(){e===f._prerequisites&&(f._prerequisites=null,d())}),f._prerequisites=e},_animate:function(b){return this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd),b.prerequisites.screen.resolve(),b.transition&&"none"!==b.transition&&(b.applyTransition&&this._applyTransition(b.transition),this._fallbackTransition)?void this._ui.container.addClass(b.containerClassToAdd).removeClass(b.classToRemove).animationComplete(a.proxy(b.prerequisites.container,"resolve")):(this._ui.container.removeClass(b.classToRemove),void b.prerequisites.container.resolve())},_desiredCoords:function(b){var c,d=null,f=e(this.window),g=b.x,h=b.y,i=b.positionTo;if(i&&"origin"!==i)if("window"===i)g=f.cx/2+f.x,h=f.cy/2+f.y;else{try{d=a(i)}catch(j){d=null}d&&(d.filter(":visible"),0===d.length&&(d=null))}return d&&(c=d.offset(),g=c.left+d.outerWidth()/2,h=c.top+d.outerHeight()/2),("number"!==a.type(g)||isNaN(g))&&(g=f.cx/2+f.x),("number"!==a.type(h)||isNaN(h))&&(h=f.cy/2+f.y),{x:g,y:h}},_reposition:function(a){a={x:a.x,y:a.y,positionTo:a.positionTo},this._trigger("beforeposition",c,a),this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))},reposition:function(a){this._isOpen&&this._reposition(a)},_openPrerequisitesComplete:function(){var a=this.element.attr("id");this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),this._ui.container.attr("tabindex","0").focus(),this._ignoreResizeEvents(),a&&this.document.find("[aria-haspopup='true'][aria-owns='"+a+"']").attr("aria-expanded",!0),this._trigger("afteropen")},_open:function(b){var c=a.extend({},this.options,b),d=function(){var a=navigator.userAgent,b=a.match(/AppleWebKit\/([0-9\.]+)/),c=!!b&&b[1],d=a.match(/Android (\d+(?:\.\d+))/),e=!!d&&d[1],f=a.indexOf("Chrome")>-1;return null!==d&&"4.0"===e&&c&&c>534.13&&!f?!0:!1}();this._createPrerequisites(a.noop,a.noop,a.proxy(this,"_openPrerequisitesComplete")),this._currentTransition=c.transition,this._applyTransition(c.transition),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-truncate"),this._reposition(c),this._ui.container.removeClass("ui-popup-hidden"),this.options.overlayTheme&&d&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:c.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prerequisites:this._prerequisites})},_closePrerequisiteScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrerequisiteContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")},_closePrerequisitesDone:function(){var b=this._ui.container,d=this.element.attr("id");b.removeAttr("tabindex"),a.mobile.popup.active=c,a(":focus",b[0]).add(b[0]).blur(),d&&this.document.find("[aria-haspopup='true'][aria-owns='"+d+"']").attr("aria-expanded",!1),this._trigger("afterclose")},_close:function(b){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrerequisites(a.proxy(this,"_closePrerequisiteScreen"),a.proxy(this,"_closePrerequisiteContainer"),a.proxy(this,"_closePrerequisitesDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:b?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prerequisites:this._prerequisites})},_unenhance:function(){this.options.enhanced||(this._setOptions({theme:a.mobile.popup.prototype.options.theme}),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove())},_destroy:function(){return a.mobile.popup.active===this?(this.element.one("popupafterclose",a.proxy(this,"_unenhance")),this.close()):this._unenhance(),this},_closePopup:function(c,d){var e,f,g=this.options,h=!1;c&&c.isDefaultPrevented()||a.mobile.popup.active!==this||(b.scrollTo(0,this._scrollTop),c&&"pagebeforechange"===c.type&&d&&(e="string"==typeof d.toPage?d.toPage:d.toPage.jqmData("url"),e=a.mobile.path.parseUrl(e),f=e.pathname+e.search+e.hash,this._myUrl!==a.mobile.path.makeUrlAbsolute(f)?h=!0:c.preventDefault()),this.window.off(g.closeEvents),this.element.undelegate(g.closeLinkSelector,g.closeLinkEvents),this._close(h))},_bindContainerClose:function(){this.window.on(this.options.closeEvents,a.proxy(this,"_closePopup"))},widget:function(){return this._ui.container},open:function(b){var c,d,e,f,g,h,i=this,j=this.options;return a.mobile.popup.active||j.disabled?this:(a.mobile.popup.active=this,this._scrollTop=this.window.scrollTop(),j.history?(h=a.mobile.navigate.history,d=a.mobile.dialogHashKey,e=a.mobile.activePage,f=e?e.hasClass("ui-dialog"):!1,this._myUrl=c=h.getActive().url,(g=c.indexOf(d)>-1&&!f&&h.activeIndex>0)?(i._open(b),i._bindContainerClose(),this):(-1!==c.indexOf(d)||f?c=a.mobile.path.parseLocation().hash+d:c+=c.indexOf("#")>-1?d:"#"+d,0===h.activeIndex&&c===h.initialDst&&(c+=d),this.window.one("beforenavigate",function(a){a.preventDefault(),i._open(b),i._bindContainerClose()}),this.urlAltered=!0,a.mobile.navigate(c,{role:"dialog"}),this)):(i._open(b),i._bindContainerClose(),i.element.delegate(j.closeLinkSelector,j.closeLinkEvents,function(a){i.close(),a.preventDefault()}),this))},close:function(){return a.mobile.popup.active!==this?this:(this._scrollTop=this.window.scrollTop(),this.options.history&&this.urlAltered?(a.mobile.back(),this.urlAltered=!1):this._closePopup(),this)}}),a.mobile.popup.handleLink=function(b){var c,d=a.mobile.path,e=a(d.hashToSelector(d.parseUrl(b.attr("href")).hash)).first();e.length>0&&e.data("mobile-popup")&&(c=b.offset(),e.popup("open",{x:c.left+b.outerWidth()/2,y:c.top+b.outerHeight()/2,transition:b.jqmData("transition"),positionTo:b.jqmData("position-to")})),setTimeout(function(){b.removeClass(a.mobile.activeBtnClass)},300)},a.mobile.document.on("pagebeforechange",function(b,c){"popup"===c.options.role&&(a.mobile.popup.handleLink(c.options.link),b.preventDefault())})}(a),function(a,b){var d=".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",e=function(a,b,c){var e=a[c+"All"]().not(d).first();e.length&&(b.blur().attr("tabindex","-1"),e.find("a").first().focus())};a.widget("mobile.selectmenu",a.mobile.selectmenu,{_create:function(){var a=this.options;return a.nativeMenu=a.nativeMenu||this.element.parents(":jqmData(role='popup'),:mobile-popup").length>0,this._super()},_handleSelectFocus:function(){this.element.blur(),this.button.focus()},_handleKeydown:function(a){this._super(a),this._handleButtonVclickKeydown(a)},_handleButtonVclickKeydown:function(b){this.options.disabled||this.isOpen||("vclick"===b.type||b.keyCode&&(b.keyCode===a.mobile.keyCode.ENTER||b.keyCode===a.mobile.keyCode.SPACE))&&(this._decideFormat(),"overlay"===this.menuType?this.button.attr("href","#"+this.popupId).attr("data-"+(a.mobile.ns||"")+"rel","popup"):this.button.attr("href","#"+this.dialogId).attr("data-"+(a.mobile.ns||"")+"rel","dialog"),this.isOpen=!0)},_handleListFocus:function(b){var c="focusin"===b.type?{tabindex:"0",event:"vmouseover"}:{tabindex:"-1",event:"vmouseout"};a(b.target).attr("tabindex",c.tabindex).trigger(c.event)},_handleListKeydown:function(b){var c=a(b.target),d=c.closest("li");switch(b.keyCode){case 38:return e(d,c,"prev"),!1;case 40:return e(d,c,"next"),!1;case 13:case 32:return c.trigger("click"),!1}},_handleMenuPageHide:function(){this.thisPage.page("bindRemove")},_handleHeaderCloseClick:function(){return"overlay"===this.menuType?(this.close(),!1):void 0},build:function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=this.options;return w.nativeMenu?this._super():(v=this,c=this.selectId,d=c+"-listbox",e=c+"-dialog",f=this.label,g=this.element.closest(".ui-page"),h=this.element[0].multiple,i=c+"-menu",j=w.theme?" data-"+a.mobile.ns+"theme='"+w.theme+"'":"",k=w.overlayTheme||w.theme||null,l=k?" data-"+a.mobile.ns+"overlay-theme='"+k+"'":"",m=w.dividerTheme&&h?" data-"+a.mobile.ns+"divider-theme='"+w.dividerTheme+"'":"",n=a("<div data-"+a.mobile.ns+"role='dialog' class='ui-selectmenu' id='"+e+"'"+j+l+"><div data-"+a.mobile.ns+"role='header'><div class='ui-title'>"+f.getEncodedText()+"</div></div><div data-"+a.mobile.ns+"role='content'></div></div>"),o=a("<div id='"+d+"' class='ui-selectmenu'></div>").insertAfter(this.select).popup({theme:w.overlayTheme}),p=a("<ul class='ui-selectmenu-list' id='"+i+"' role='listbox' aria-labelledby='"+this.buttonId+"'"+j+m+"></ul>").appendTo(o),q=a("<div class='ui-header ui-bar-"+(w.theme?w.theme:"inherit")+"'></div>").prependTo(o),r=a("<h1 class='ui-title'></h1>").appendTo(q),this.isMultiple&&(u=a("<a>",{role:"button",text:w.closeText,href:"#","class":"ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"}).appendTo(q)),a.extend(this,{selectId:c,menuId:i,popupId:d,dialogId:e,thisPage:g,menuPage:n,label:f,isMultiple:h,theme:w.theme,listbox:o,list:p,header:q,headerTitle:r,headerClose:u,menuPageContent:s,menuPageClose:t,placeholder:""}),this.refresh(),this._origTabIndex===b&&(this._origTabIndex=null===this.select[0].getAttribute("tabindex")?!1:this.select.attr("tabindex")),this.select.attr("tabindex","-1"),this._on(this.select,{focus:"_handleSelectFocus"}),this._on(this.button,{vclick:"_handleButtonVclickKeydown"}),this.list.attr("role","listbox"),this._on(this.list,{focusin:"_handleListFocus",focusout:"_handleListFocus",keydown:"_handleListKeydown"}),this.list.delegate("li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)","click",function(b){var c=v.select[0].selectedIndex,d=a.mobile.getAttribute(this,"option-index"),e=v._selectOptions().eq(d)[0];e.selected=v.isMultiple?!e.selected:!0,v.isMultiple&&a(this).find("a").toggleClass("ui-checkbox-on",e.selected).toggleClass("ui-checkbox-off",!e.selected),(v.isMultiple||c!==d)&&v.select.trigger("change"),v.isMultiple?v.list.find("li:not(.ui-li-divider)").eq(d).find("a").first().focus():v.close(),b.preventDefault()}),this._on(this.menuPage,{pagehide:"_handleMenuPageHide"}),this._on(this.listbox,{popupafterclose:"close"}),this.isMultiple&&this._on(this.headerClose,{click:"_handleHeaderCloseClick"}),this)},_isRebuildRequired:function(){var a=this.list.find("li"),b=this._selectOptions().not(".ui-screen-hidden");return b.text()!==a.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(b){var c,d;return this.options.nativeMenu?this._super(b):(c=this,(b||this._isRebuildRequired())&&c._buildList(),d=this.selectedIndices(),c.setButtonText(),c.setButtonCount(),void c.list.find("li:not(.ui-li-divider)").find("a").removeClass(a.mobile.activeBtnClass).end().attr("aria-selected",!1).each(function(b){if(a.inArray(b,d)>-1){var e=a(this);e.attr("aria-selected",!0),c.isMultiple?e.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on"):e.hasClass("ui-screen-hidden")?e.next().find("a").addClass(a.mobile.activeBtnClass):e.find("a").addClass(a.mobile.activeBtnClass)}}))},close:function(){if(!this.options.disabled&&this.isOpen){var a=this;"page"===a.menuType?(a.menuPage.dialog("close"),a.list.appendTo(a.listbox)):a.listbox.popup("close"),a._focusButton(),a.isOpen=!1}},open:function(){this.button.click()},_focusMenuItem:function(){var b=this.list.find("a."+a.mobile.activeBtnClass);0===b.length&&(b=this.list.find("li:not("+d+") a.ui-btn")),b.first().focus()},_decideFormat:function(){var b=this,c=this.window,d=b.list.parent(),e=d.outerHeight(),f=c.scrollTop(),g=b.button.offset().top,h=c.height();e>h-80||!a.support.scrollTop?(b.menuPage.appendTo(a.mobile.pageContainer).page(),b.menuPageContent=b.menuPage.find(".ui-content"),b.menuPageClose=b.menuPage.find(".ui-header a"),b.thisPage.unbind("pagehide.remove"),0===f&&g>h&&b.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",g)}),b.menuPage.one({pageshow:a.proxy(this,"_focusMenuItem"),pagehide:a.proxy(this,"close")}),b.menuType="page",b.menuPageContent.append(b.list),b.menuPage.find("div .ui-title").text(b.label.text())):(b.menuType="overlay",b.listbox.one({popupafteropen:a.proxy(this,"_focusMenuItem")}))},_buildList:function(){var b,d,e,f,g,h,i,j,k,l,m,n,o,p,q=this,r=this.options,s=this.placeholder,t=!0,u="false",v="data-"+a.mobile.ns,w=v+"option-index",x=v+"icon",y=v+"role",z=v+"placeholder",A=c.createDocumentFragment(),B=!1;for(q.list.empty().filter(".ui-listview").listview("destroy"),b=this._selectOptions(),d=b.length,e=this.select[0],g=0;d>g;g++,B=!1)h=b[g],i=a(h),i.hasClass("ui-screen-hidden")||(j=h.parentNode,k=i.text(),l=c.createElement("a"),m=[],l.setAttribute("href","#"),l.appendChild(c.createTextNode(k)),j!==e&&"optgroup"===j.nodeName.toLowerCase()&&(n=j.getAttribute("label"),n!==f&&(o=c.createElement("li"),o.setAttribute(y,"list-divider"),o.setAttribute("role","option"),o.setAttribute("tabindex","-1"),o.appendChild(c.createTextNode(n)),A.appendChild(o),f=n)),!t||h.getAttribute("value")&&0!==k.length&&!i.jqmData("placeholder")||(t=!1,B=!0,null===h.getAttribute(z)&&(this._removePlaceholderAttr=!0),h.setAttribute(z,!0),r.hidePlaceholderMenuItems&&m.push("ui-screen-hidden"),s!==k&&(s=q.placeholder=k)),p=c.createElement("li"),h.disabled&&(m.push("ui-state-disabled"),p.setAttribute("aria-disabled",!0)),p.setAttribute(w,g),p.setAttribute(x,u),B&&p.setAttribute(z,!0),p.className=m.join(" "),p.setAttribute("role","option"),l.setAttribute("tabindex","-1"),this.isMultiple&&a(l).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"),p.appendChild(l),A.appendChild(p));q.list[0].appendChild(A),this.isMultiple||s.length?this.headerTitle.text(this.placeholder):this.header.addClass("ui-screen-hidden"),q.list.listview()},_button:function(){return this.options.nativeMenu?this._super():a("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.options.nativeMenu||(this.close(),this._origTabIndex!==b&&(this._origTabIndex!==!1?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+a.mobile.ns+"placeholder"),this.listbox.remove(),this.menuPage.remove()),this._super()}})}(a),function(a,b){function c(a,b){var c=b?b:[];return c.push("ui-btn"),a.theme&&c.push("ui-btn-"+a.theme),a.icon&&(c=c.concat(["ui-icon-"+a.icon,"ui-btn-icon-"+a.iconpos]),a.iconshadow&&c.push("ui-shadow-icon")),a.inline&&c.push("ui-btn-inline"),a.shadow&&c.push("ui-shadow"),a.corners&&c.push("ui-corner-all"),a.mini&&c.push("ui-mini"),c}function d(a){var c,d,e,g=!1,h=!0,i={icon:"",inline:!1,shadow:!1,corners:!1,iconshadow:!1,mini:!1},j=[];for(a=a.split(" "),c=0;c<a.length;c++)e=!0,d=f[a[c]],d!==b?(e=!1,i[d]=!0):0===a[c].indexOf("ui-btn-icon-")?(e=!1,h=!1,i.iconpos=a[c].substring(12)):0===a[c].indexOf("ui-icon-")?(e=!1,i.icon=a[c].substring(8)):0===a[c].indexOf("ui-btn-")&&8===a[c].length?(e=!1,i.theme=a[c].substring(7)):"ui-btn"===a[c]&&(e=!1,g=!0),e&&j.push(a[c]);return h&&(i.icon=""),{options:i,unknownClasses:j,alreadyEnhanced:g}}function e(a){return"-"+a.toLowerCase()}var f={"ui-shadow":"shadow","ui-corner-all":"corners","ui-btn-inline":"inline","ui-shadow-icon":"iconshadow","ui-mini":"mini"},g=function(){var c=a.mobile.getAttribute.apply(this,arguments);return null==c?b:c},h=/[A-Z]/g;a.fn.buttonMarkup=function(f,i){var j,k,l,m,n,o=a.fn.buttonMarkup.defaults;for(j=0;j<this.length;j++){if(l=this[j],k=i?{alreadyEnhanced:!1,unknownClasses:[]}:d(l.className),m=a.extend({},k.alreadyEnhanced?k.options:{},f),!k.alreadyEnhanced)for(n in o)m[n]===b&&(m[n]=g(l,n.replace(h,e)));l.className=c(a.extend({},o,m),k.unknownClasses).join(" "),"button"!==l.tagName.toLowerCase()&&l.setAttribute("role","button")}return this},a.fn.buttonMarkup.defaults={icon:"",iconpos:"left",theme:null,inline:!1,shadow:!0,corners:!0,iconshadow:!1,mini:!1},a.extend(a.fn.buttonMarkup,{initSelector:"a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button"})}(a),function(a,b){a.widget("mobile.controlgroup",a.extend({options:{enhanced:!1,theme:null,shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1},_create:function(){var b=this.element,c=this.options;a.fn.buttonMarkup&&this.element.find(a.fn.buttonMarkup.initSelector).buttonMarkup(),a.each(this._childWidgets,a.proxy(function(b,c){a.mobile[c]&&this.element.find(a.mobile[c].initSelector).not(a.mobile.page.prototype.keepNativeSelector())[c]()},this)),a.extend(this,{_ui:null,_initialRefresh:!0}),this._ui=c.enhanced?{groupLegend:b.children(".ui-controlgroup-label").children(),childWrapper:b.children(".ui-controlgroup-controls")}:this._enhance()},_childWidgets:["checkboxradio","selectmenu","button"],_themeClassFromOption:function(a){return a?"none"===a?"":"ui-group-theme-"+a:""},_enhance:function(){var b=this.element,c=this.options,d={groupLegend:b.children("legend"),childWrapper:b.addClass("ui-controlgroup ui-controlgroup-"+("horizontal"===c.type?"horizontal":"vertical")+" "+this._themeClassFromOption(c.theme)+" "+(c.corners?"ui-corner-all ":"")+(c.mini?"ui-mini ":"")).wrapInner("<div class='ui-controlgroup-controls "+(c.shadow===!0?"ui-shadow":"")+"'></div>").children()};return d.groupLegend.length>0&&a("<div role='heading' class='ui-controlgroup-label'></div>").append(d.groupLegend).prependTo(b),d},_init:function(){this.refresh()},_setOptions:function(a){var c,d,e=this.element;return a.type!==b&&(e.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+("horizontal"===a.type?"horizontal":"vertical")),c=!0),a.theme!==b&&e.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(a.theme)),a.corners!==b&&e.toggleClass("ui-corner-all",a.corners),a.mini!==b&&e.toggleClass("ui-mini",a.mini),a.shadow!==b&&this._ui.childWrapper.toggleClass("ui-shadow",a.shadow),a.excludeInvisible!==b&&(this.options.excludeInvisible=a.excludeInvisible,c=!0),d=this._super(a),c&&this.refresh(),d},container:function(){return this._ui.childWrapper},refresh:function(){var b=this.container(),c=b.find(".ui-btn").not(".ui-slider-handle"),d=this._initialRefresh;a.mobile.checkboxradio&&b.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(c,this.options.excludeInvisible?this._getVisibles(c,d):c,d),this._initialRefresh=!1},_destroy:function(){var a,b,c=this.options;return c.enhanced?this:(a=this._ui,b=this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini "+this._themeClassFromOption(c.theme)).find(".ui-btn").not(".ui-slider-handle"),this._removeFirstLastClasses(b),a.groupLegend.unwrap(),void a.childWrapper.children().unwrap())}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a,b){a.widget("mobile.toolbar",{initSelector:":jqmData(role='footer'), :jqmData(role='header')",options:{theme:null,addBackBtn:!1,backBtnTheme:null,backBtnText:"Back"},_create:function(){var b,c,d=this.element.is(":jqmData(role='header')")?"header":"footer",e=this.element.closest(".ui-page");0===e.length&&(e=!1,this._on(this.document,{pageshow:"refresh"})),a.extend(this,{role:d,page:e,leftbtn:b,rightbtn:c,backBtn:null}),this.element.attr("role","header"===d?"banner":"contentinfo").addClass("ui-"+d),this.refresh(),this._setOptions(this.options)},_setOptions:function(c){if(c.addBackBtn!==b&&(this.options.addBackBtn&&"header"===this.role&&a(".ui-page").length>1&&this.page[0].getAttribute("data-"+a.mobile.ns+"url")!==a.mobile.path.stripHash(location.hash)&&!this.leftbtn?this._addBackButton():this.element.find(".ui-toolbar-back-btn").remove()),null!=c.backBtnTheme&&this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-"+c.backBtnTheme),c.backBtnText!==b&&this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(c.backBtnText),c.theme!==b){var d=this.options.theme?this.options.theme:"inherit",e=c.theme?c.theme:"inherit";this.element.removeClass("ui-bar-"+d).addClass("ui-bar-"+e)}this._super(c)},refresh:function(){"header"===this.role&&this._addHeaderButtonClasses(),this.page||(this._setRelative(),"footer"===this.role&&this.element.appendTo("body")),this._addHeadingClasses(),this._btnMarkup()},_setRelative:function(){a("[data-"+a.mobile.ns+"role='page']").css({position:"relative"})},_btnMarkup:function(){this.element.children("a").filter(":not([data-"+a.mobile.ns+"role='none'])").attr("data-"+a.mobile.ns+"role","button"),this.element.trigger("create")},_addHeaderButtonClasses:function(){var a=this.element.children("a, button");this.leftbtn=a.hasClass("ui-btn-left"),this.rightbtn=a.hasClass("ui-btn-right"),this.leftbtn=this.leftbtn||a.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length,this.rightbtn=this.rightbtn||a.eq(1).addClass("ui-btn-right").length},_addBackButton:function(){var b,c=this.options;this.backBtn||(b=c.backBtnTheme||c.theme,this.backBtn=a("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left "+(b?"ui-btn-"+b+" ":"")+"ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-"+a.mobile.ns+"rel='back'>"+c.backBtnText+"</a>").prependTo(this.element))},_addHeadingClasses:function(){this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})}})}(a),function(a,b){a.widget("mobile.toolbar",a.mobile.toolbar,{options:{position:null,visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!a.support.fixedPosition}},_create:function(){this._super(),"fixed"!==this.options.position||this.options.supportBlacklist()||this._makeFixed()},_makeFixed:function(){this.element.addClass("ui-"+this.role+"-fixed"),this.updatePagePadding(),this._addTransitionClass(),this._bindPageEvents(),this._bindToggleHandlers(),this._setOptions(this.options)},_setOptions:function(c){if("fixed"===c.position&&"fixed"!==this.options.position&&this._makeFixed(),"fixed"===this.options.position&&!this.options.supportBlacklist()){var d=this.page?this.page:a(".ui-page-active").length>0?a(".ui-page-active"):a(".ui-page").eq(0);c.fullscreen!==b&&(c.fullscreen?(this.element.addClass("ui-"+this.role+"-fullscreen"),d.addClass("ui-page-"+this.role+"-fullscreen")):(this.element.removeClass("ui-"+this.role+"-fullscreen"),d.removeClass("ui-page-"+this.role+"-fullscreen").addClass("ui-page-"+this.role+"-fixed")))}this._super(c)},_addTransitionClass:function(){var a=this.options.transition;a&&"none"!==a&&("slide"===a&&(a=this.element.hasClass("ui-header")?"slidedown":"slideup"),this.element.addClass(a))},_bindPageEvents:function(){var a=this.page?this.element.closest(".ui-page"):this.document;this._on(a,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var b=this.options;b.disablePageZoom&&a.mobile.zoom.disable(!0),b.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this.page?this.page:".ui-page-active")},_handlePageShow:function(){this.updatePagePadding(this.page?this.page:".ui-page-active"),this.options.updatePagePadding&&this._on(this.window,{throttledresize:"updatePagePadding"})},_handlePageBeforeHide:function(b,c){var d,e,f,g,h=this.options;h.disablePageZoom&&a.mobile.zoom.enable(!0),h.updatePagePadding&&this._off(this.window,"throttledresize"),h.trackPersistentToolbars&&(d=a(".ui-footer-fixed:jqmData(id)",this.page),e=a(".ui-header-fixed:jqmData(id)",this.page),f=d.length&&c.nextPage&&a(".ui-footer-fixed:jqmData(id='"+d.jqmData("id")+"')",c.nextPage)||a(),g=e.length&&c.nextPage&&a(".ui-header-fixed:jqmData(id='"+e.jqmData("id")+"')",c.nextPage)||a(),(f.length||g.length)&&(f.add(g).appendTo(a.mobile.pageContainer),c.nextPage.one("pageshow",function(){g.prependTo(this),f.appendTo(this)})))},_visible:!0,updatePagePadding:function(c){var d=this.element,e="header"===this.role,f=parseFloat(d.css(e?"top":"bottom"));this.options.fullscreen||(c=c&&c.type===b&&c||this.page||d.closest(".ui-page"),c=this.page?this.page:".ui-page-active",a(c).css("padding-"+(e?"top":"bottom"),d.outerHeight()+f))},_useTransition:function(b){var c=this.window,d=this.element,e=c.scrollTop(),f=d.height(),g=this.page?d.closest(".ui-page").height():a(".ui-page-active").height(),h=a.mobile.getScreenHeight();return!b&&(this.options.transition&&"none"!==this.options.transition&&("header"===this.role&&!this.options.fullscreen&&e>f||"footer"===this.role&&!this.options.fullscreen&&g-f>e+h)||this.options.fullscreen)},show:function(a){var b="ui-fixed-hidden",c=this.element;this._useTransition(a)?c.removeClass("out "+b).addClass("in").animationComplete(function(){c.removeClass("in")}):c.removeClass(b),this._visible=!0},hide:function(a){var b="ui-fixed-hidden",c=this.element,d="out"+("slide"===this.options.transition?" reverse":"");this._useTransition(a)?c.addClass(d).removeClass("in").animationComplete(function(){c.addClass(b).removeClass(d)}):c.addClass(b).removeClass(d),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var b,c,d=this,e=d.options,f=!0,g=this.page?this.page:a(".ui-page");g.bind("vclick",function(b){e.tapToggle&&!a(b.target).closest(e.tapToggleBlacklist).length&&d.toggle()}).bind("focusin focusout",function(g){screen.width<1025&&a(g.target).is(e.hideDuringFocus)&&!a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&("focusout"!==g.type||f?"focusin"===g.type&&f&&(clearTimeout(b),f=!1,c=setTimeout(function(){d.hide()},0)):(f=!0,clearTimeout(c),b=setTimeout(function(){d.show()},0)))})},_setRelative:function(){"fixed"!==this.options.position&&a("[data-"+a.mobile.ns+"role='page']").css({position:"relative"})},_destroy:function(){var a=this.element,b=a.hasClass("ui-header");a.closest(".ui-page").css("padding-"+(b?"top":"bottom"),""),a.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"),a.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")}})}(a),function(a){a.widget("mobile.toolbar",a.mobile.toolbar,{_makeFixed:function(){this._super(),this._workarounds()},_workarounds:function(){var a=navigator.userAgent,b=navigator.platform,c=a.match(/AppleWebKit\/([0-9]+)/),d=!!c&&c[1],e=null,f=this;if(b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1||b.indexOf("iPod")>-1)e="ios";else{if(!(a.indexOf("Android")>-1))return;e="android"}if("ios"===e)f._bindScrollWorkaround();else{if(!("android"===e&&d&&534>d))return;f._bindScrollWorkaround(),f._bindListThumbWorkaround()}},_viewportOffset:function(){var a=this.element,b=a.hasClass("ui-header"),c=Math.abs(a.offset().top-this.window.scrollTop());return b||(c=Math.round(c-this.window.height()+a.outerHeight())-60),c},_bindScrollWorkaround:function(){var a=this;this._on(this.window,{scrollstop:function(){var b=a._viewportOffset();b>2&&a._visible&&a._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var b=parseFloat(a(".ui-page-active").css("padding-bottom"));a(".ui-page-active").css("padding-bottom",b+1+"px"),setTimeout(function(){a(".ui-page-active").css("padding-bottom",b+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(a),function(a,b){function c(){var a=e.clone(),b=a.eq(0),c=a.eq(1),d=c.children();return{arEls:c.add(b),gd:b,ct:c,ar:d}}var d=a.mobile.browser.oldIE&&a.mobile.browser.oldIE<=8,e=a("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container"+(d?" ie":"")+"'><div class='ui-popup-arrow'></div></div>");a.widget("mobile.popup",a.mobile.popup,{options:{arrow:""},_create:function(){var a,b=this._super();return this.options.arrow&&(this._ui.arrow=a=this._addArrow()),b},_addArrow:function(){var a,b=this.options,d=c();return a=this._themeClassFromOption("ui-body-",b.theme),d.ar.addClass(a+(b.shadow?" ui-overlay-shadow":"")),d.arEls.hide().appendTo(this.element),d},_unenhance:function(){var a=this._ui.arrow;return a&&a.arEls.remove(),this._super()},_tryAnArrow:function(a,b,c,d,e){var f,g,h,i={},j={};return d.arFull[a.dimKey]>d.guideDims[a.dimKey]?e:(i[a.fst]=c[a.fst]+(d.arHalf[a.oDimKey]+d.menuHalf[a.oDimKey])*a.offsetFactor-d.contentBox[a.fst]+(d.clampInfo.menuSize[a.oDimKey]-d.contentBox[a.oDimKey])*a.arrowOffsetFactor,i[a.snd]=c[a.snd],f=d.result||this._calculateFinalLocation(i,d.clampInfo),g={x:f.left,y:f.top},j[a.fst]=g[a.fst]+d.contentBox[a.fst]+a.tipOffset,j[a.snd]=Math.max(f[a.prop]+d.guideOffset[a.prop]+d.arHalf[a.dimKey],Math.min(f[a.prop]+d.guideOffset[a.prop]+d.guideDims[a.dimKey]-d.arHalf[a.dimKey],c[a.snd])),h=Math.abs(c.x-j.x)+Math.abs(c.y-j.y),(!e||h<e.diff)&&(j[a.snd]-=d.arHalf[a.dimKey]+f[a.prop]+d.contentBox[a.snd],e={dir:b,diff:h,result:f,posProp:a.prop,posVal:j[a.snd]}),e)},_getPlacementState:function(a){var b,c,d=this._ui.arrow,e={clampInfo:this._clampPopupWidth(!a),arFull:{cx:d.ct.width(),cy:d.ct.height()},guideDims:{cx:d.gd.width(),cy:d.gd.height()},guideOffset:d.gd.offset()};return b=this.element.offset(),d.gd.css({left:0,top:0,right:0,bottom:0}),c=d.gd.offset(),e.contentBox={x:c.left-b.left,y:c.top-b.top,cx:d.gd.width(),cy:d.gd.height()},d.gd.removeAttr("style"),e.guideOffset={left:e.guideOffset.left-b.left,top:e.guideOffset.top-b.top},e.arHalf={cx:e.arFull.cx/2,cy:e.arFull.cy/2},e.menuHalf={cx:e.clampInfo.menuSize.cx/2,cy:e.clampInfo.menuSize.cy/2},e},_placementCoords:function(b){var c,e,f,g,h,i=this.options.arrow,j=this._ui.arrow;return j?(j.arEls.show(),h={},c=this._getPlacementState(!0),f={l:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:1,tipOffset:-c.arHalf.cx,arrowOffsetFactor:0},r:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:-1,tipOffset:c.arHalf.cx+c.contentBox.cx,arrowOffsetFactor:1},b:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:-1,tipOffset:c.arHalf.cy+c.contentBox.cy,arrowOffsetFactor:1},t:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:1,tipOffset:-c.arHalf.cy,arrowOffsetFactor:0}},a.each((i===!0?"l,t,r,b":i).split(","),a.proxy(function(a,d){e=this._tryAnArrow(f[d],d,b,c,e)
},this)),e?(j.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-"+e.dir).removeAttr("style").css(e.posProp,e.posVal).show(),d||(g=this.element.offset(),h[f[e.dir].fst]=j.ct.offset(),h[f[e.dir].snd]={left:g.left+c.contentBox.x,top:g.top+c.contentBox.y}),e.result):(j.arEls.hide(),this._super(b))):this._super(b)},_setOptions:function(a){var c,d=this.options.theme,e=this._ui.arrow,f=this._super(a);if(a.arrow!==b){if(!e&&a.arrow)return void(this._ui.arrow=this._addArrow());e&&!a.arrow&&(e.arEls.remove(),this._ui.arrow=null)}return e=this._ui.arrow,e&&(a.theme!==b&&(d=this._themeClassFromOption("ui-body-",d),c=this._themeClassFromOption("ui-body-",a.theme),e.ar.removeClass(d).addClass(c)),a.shadow!==b&&e.ar.toggleClass("ui-overlay-shadow",a.shadow)),f},_destroy:function(){var a=this._ui.arrow;return a&&a.arEls.remove(),this._super()}})}(a),function(a,c){a.widget("mobile.panel",{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pageContainer:"ui-panel-page-container",pageWrapper:"ui-panel-wrapper",pageFixedToolbar:"ui-panel-fixed-toolbar",pageContentPrefix:"ui-panel-page-content",animate:"ui-panel-animate"},animate:!0,theme:null,position:"left",dismissible:!0,display:"reveal",swipeClose:!0,positionFixed:!1},_panelID:null,_closeLink:null,_parentPage:null,_page:null,_modal:null,_panelInner:null,_wrapper:null,_fixedToolbars:null,_create:function(){var b=this.element,c=b.closest(":jqmData(role='page')");a.extend(this,{_panelID:b.attr("id"),_closeLink:b.find(":jqmData(rel='close')"),_parentPage:c.length>0?c:!1,_page:this._getPage,_panelInner:this._getPanelInner(),_wrapper:this._getWrapper,_fixedToolbars:this._getFixedToolbars}),this._addPanelClasses(),a.support.cssTransform3d&&this.options.animate&&this.element.addClass(this.options.classes.animate),this._bindUpdateLayout(),this._bindCloseEvents(),this._bindLinkListeners(),this._bindPageEvents(),this.options.dismissible&&this._createModal(),this._bindSwipeEvents()},_getPanelInner:function(){var a=this.element.find("."+this.options.classes.panelInner);return 0===a.length&&(a=this.element.children().wrapAll("<div class='"+this.options.classes.panelInner+"' />").parent()),a},_createModal:function(){var b=this,c=b._parentPage?b._parentPage.parent():b.element.parent();b._modal=a("<div class='"+b.options.classes.modal+"' data-panelid='"+b._panelID+"'></div>").on("mousedown",function(){b.close()}).appendTo(c)},_getPage:function(){var b=this._parentPage?this._parentPage:a("."+a.mobile.activePageClass);return b},_getWrapper:function(){var a=this._page().find("."+this.options.classes.pageWrapper);return 0===a.length&&(a=this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='"+this.options.classes.pageWrapper+"'></div>").parent()),a},_getFixedToolbars:function(){var b=a("body").children(".ui-header-fixed, .ui-footer-fixed"),c=this._page().find(".ui-header-fixed, .ui-footer-fixed"),d=b.add(c).addClass(this.options.classes.pageFixedToolbar);return d},_getPosDisplayClasses:function(a){return a+"-position-"+this.options.position+" "+a+"-display-"+this.options.display},_getPanelClasses:function(){var a=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed+" ui-body-"+(this.options.theme?this.options.theme:"inherit");return this.options.positionFixed&&(a+=" "+this.options.classes.panelFixed),a},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_handleCloseClickAndEatEvent:function(a){return a.isDefaultPrevented()?void 0:(a.preventDefault(),this.close(),!1)},_handleCloseClick:function(a){a.isDefaultPrevented()||this.close()},_bindCloseEvents:function(){this._on(this._closeLink,{click:"_handleCloseClick"}),this._on({"click a:jqmData(ajax='false')":"_handleCloseClick"})},_positionPanel:function(){var c=this,d=c._panelInner.outerHeight(),e=d>a.mobile.getScreenHeight();e||!c.options.positionFixed?(e&&(c._unfixPanel(),a.mobile.resetActivePageHeight(d)),b.scrollTo(0,a.mobile.defaultHomeScroll)):c._fixPanel()},_bindFixListener:function(){this._on(a(b),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(a(b),"throttledresize")},_unfixPanel:function(){this.options.positionFixed&&a.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){this.options.positionFixed&&a.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var a=this;a.element.on("updatelayout",function(){a._open&&a._positionPanel()})},_bindLinkListeners:function(){this._on("body",{"click a":"_handleClick"})},_handleClick:function(b){if(b.currentTarget.href.split("#")[1]===this._panelID&&this._panelID!==c){b.preventDefault();var d=a(b.target);return d.hasClass("ui-btn")&&(d.addClass(a.mobile.activeBtnClass),this.element.one("panelopen panelclose",function(){d.removeClass(a.mobile.activeBtnClass)})),this.toggle(),!1}},_bindSwipeEvents:function(){var a=this,b=a._modal?a.element.add(a._modal):a.element;a.options.swipeClose&&("left"===a.options.position?b.on("swipeleft.panel",function(){a.close()}):b.on("swiperight.panel",function(){a.close()}))},_bindPageEvents:function(){var a=this;this.document.on("panelbeforeopen",function(b){a._open&&b.target!==a.element[0]&&a.close()}).on("keyup.panel",function(b){27===b.keyCode&&a._open&&a.close()}),a._parentPage?this.document.on("pagehide",":jqmData(role='page')",function(){a._open&&a.close(!0)}):this.document.on("pagebeforehide",function(){a._open&&a.close(!0)})},_open:!1,_pageContentOpenClasses:null,_modalOpenClasses:null,open:function(b){if(!this._open){var c=this,d=c.options,e=function(){c.document.off("panelclose"),c._page().jqmData("panel","open"),a.support.cssTransform3d&&d.animate&&"overlay"!==d.display&&(c._wrapper().addClass(d.classes.animate),c._fixedToolbars().addClass(d.classes.animate)),!b&&a.support.cssTransform3d&&d.animate?c.element.animationComplete(f,"transition"):setTimeout(f,0),d.theme&&"overlay"!==d.display&&c._page().parent().addClass(d.classes.pageContainer+"-themed "+d.classes.pageContainer+"-"+d.theme),c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen),c._positionPanel(),c._pageContentOpenClasses=c._getPosDisplayClasses(d.classes.pageContentPrefix),"overlay"!==d.display&&(c._page().parent().addClass(d.classes.pageContainer),c._wrapper().addClass(c._pageContentOpenClasses),c._fixedToolbars().addClass(c._pageContentOpenClasses)),c._modalOpenClasses=c._getPosDisplayClasses(d.classes.modal)+" "+d.classes.modalOpen,c._modal&&c._modal.addClass(c._modalOpenClasses).height(Math.max(c._modal.height(),c.document.height()))},f=function(){"overlay"!==d.display&&(c._wrapper().addClass(d.classes.pageContentPrefix+"-open"),c._fixedToolbars().addClass(d.classes.pageContentPrefix+"-open")),c._bindFixListener(),c._trigger("open")};c._trigger("beforeopen"),"open"===c._page().jqmData("panel")?c.document.on("panelclose",function(){e()}):e(),c._open=!0}},close:function(b){if(this._open){var c=this,d=this.options,e=function(){c.element.removeClass(d.classes.panelOpen),"overlay"!==d.display&&(c._wrapper().removeClass(c._pageContentOpenClasses),c._fixedToolbars().removeClass(c._pageContentOpenClasses)),!b&&a.support.cssTransform3d&&d.animate?c.element.animationComplete(f,"transition"):setTimeout(f,0),c._modal&&c._modal.removeClass(c._modalOpenClasses)},f=function(){d.theme&&"overlay"!==d.display&&c._page().parent().removeClass(d.classes.pageContainer+"-themed "+d.classes.pageContainer+"-"+d.theme),c.element.addClass(d.classes.panelClosed),"overlay"!==d.display&&(c._page().parent().removeClass(d.classes.pageContainer),c._wrapper().removeClass(d.classes.pageContentPrefix+"-open"),c._fixedToolbars().removeClass(d.classes.pageContentPrefix+"-open")),a.support.cssTransform3d&&d.animate&&"overlay"!==d.display&&(c._wrapper().removeClass(d.classes.animate),c._fixedToolbars().removeClass(d.classes.animate)),c._fixPanel(),c._unbindFixListener(),a.mobile.resetActivePageHeight(),c._page().jqmRemoveData("panel"),c._trigger("close")};c._trigger("beforeclose"),e(),c._open=!1}},toggle:function(){this[this._open?"close":"open"]()},_destroy:function(){var b,c=this.options,d=a("body > :mobile-panel").length+a.mobile.activePage.find(":mobile-panel").length>1;"overlay"!==c.display&&(b=a("body > :mobile-panel").add(a.mobile.activePage.find(":mobile-panel")),0===b.not(".ui-panel-display-overlay").not(this.element).length&&this._wrapper().children().unwrap(),this._open&&(this._fixedToolbars().removeClass(c.classes.pageContentPrefix+"-open"),a.support.cssTransform3d&&c.animate&&this._fixedToolbars().removeClass(c.classes.animate),this._page().parent().removeClass(c.classes.pageContainer),c.theme&&this._page().parent().removeClass(c.classes.pageContainer+"-themed "+c.classes.pageContainer+"-"+c.theme))),d||this.document.off("panelopen panelclose"),this._open&&this._page().jqmRemoveData("panel"),this._panelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),c.classes.panelOpen,c.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._modal&&this._modal.remove()}})}(a),function(a,b){a.widget("mobile.table",{options:{classes:{table:"ui-table"},enhanced:!1},_create:function(){this.options.enhanced||this.element.addClass(this.options.classes.table),a.extend(this,{headers:b,allHeaders:b}),this._refresh(!0)},_setHeaders:function(){var a=this.element.find("thead tr");this.headers=this.element.find("tr:eq(0)").children(),this.allHeaders=this.headers.add(a.children())},refresh:function(){this._refresh()},rebuild:a.noop,_refresh:function(){var b=this.element,c=b.find("thead tr");this._setHeaders(),c.each(function(){var d=0;a(this).children().each(function(){var e,f=parseInt(this.getAttribute("colspan"),10),g=":nth-child("+(d+1)+")";if(this.setAttribute("data-"+a.mobile.ns+"colstart",d+1),f)for(e=0;f-1>e;e++)d++,g+=", :nth-child("+(d+1)+")";a(this).jqmData("cells",b.find("tr").not(c.eq(0)).not(this).children(g)),d++})})}})}(a),function(a){a.widget("mobile.table",a.mobile.table,{options:{mode:"columntoggle",columnBtnTheme:null,columnPopupTheme:null,columnBtnText:"Columns...",classes:a.extend(a.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"})},_create:function(){this._super(),"columntoggle"===this.options.mode&&(a.extend(this,{_menu:null}),this.options.enhanced?(this._menu=a(this.document[0].getElementById(this._id()+"-popup")).children().first(),this._addToggles(this._menu,!0)):(this._menu=this._enhanceColToggle(),this.element.addClass(this.options.classes.columnToggleTable)),this._setupEvents(),this._setToggleState())},_id:function(){return this.element.attr("id")||this.widgetName+this.uuid},_setupEvents:function(){this._on(this.window,{throttledresize:"_setToggleState"}),this._on(this._menu,{"change input":"_menuInputChange"})},_addToggles:function(b,c){var d,e=0,f=this.options,g=b.controlgroup("container");c?d=b.find("input"):g.empty(),this.headers.not("td").each(function(){var b=a(this),h=a.mobile.getAttribute(this,"priority"),i=b.add(b.jqmData("cells"));h&&(i.addClass(f.classes.priorityPrefix+h),(c?d.eq(e++):a("<label><input type='checkbox' checked />"+(b.children("abbr").first().attr("title")||b.text())+"</label>").appendTo(g).children(0).checkboxradio({theme:f.columnPopupTheme})).jqmData("cells",i))}),c||b.controlgroup("refresh")},_menuInputChange:function(b){var c=a(b.target),d=c[0].checked;c.jqmData("cells").toggleClass("ui-table-cell-hidden",!d).toggleClass("ui-table-cell-visible",d),c[0].getAttribute("locked")?(c.removeAttr("locked"),this._unlockCells(c.jqmData("cells"))):c.attr("locked",!0)},_unlockCells:function(a){a.removeClass("ui-table-cell-hidden ui-table-cell-visible")},_enhanceColToggle:function(){var b,c,d,e,f=this.element,g=this.options,h=a.mobile.ns,i=this.document[0].createDocumentFragment();return b=this._id()+"-popup",c=a("<a href='#"+b+"' class='"+g.classes.columnBtn+" ui-btn ui-btn-"+(g.columnBtnTheme||"a")+" ui-corner-all ui-shadow ui-mini' data-"+h+"rel='popup'>"+g.columnBtnText+"</a>"),d=a("<div class='"+g.classes.popup+"' id='"+b+"'></div>"),e=a("<fieldset></fieldset>").controlgroup(),this._addToggles(e,!1),e.appendTo(d),i.appendChild(d[0]),i.appendChild(c[0]),f.before(i),d.popup(),e},rebuild:function(){this._super(),"columntoggle"===this.options.mode&&this._refresh(!1)},_refresh:function(a){this._super(a),a||"columntoggle"!==this.options.mode||(this._unlockCells(this.allHeaders),this._addToggles(this._menu,a),this._setToggleState())},_setToggleState:function(){this._menu.find("input").each(function(){var b=a(this);this.checked="table-cell"===b.jqmData("cells").eq(0).css("display"),b.checkboxradio("refresh")})},_destroy:function(){this._super()}})}(a),function(a){a.widget("mobile.table",a.mobile.table,{options:{mode:"reflow",classes:a.extend(a.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"})},_create:function(){this._super(),"reflow"===this.options.mode&&(this.options.enhanced||(this.element.addClass(this.options.classes.reflowTable),this._updateReflow()))},rebuild:function(){this._super(),"reflow"===this.options.mode&&this._refresh(!1)},_refresh:function(a){this._super(a),a||"reflow"!==this.options.mode||this._updateReflow()},_updateReflow:function(){var b=this,c=this.options;a(b.allHeaders.get().reverse()).each(function(){var d,e,f=a(this).jqmData("cells"),g=a.mobile.getAttribute(this,"colstart"),h=f.not(this).filter("thead th").length&&" ui-table-cell-label-top",i=a(this).text();""!==i&&(h?(d=parseInt(this.getAttribute("colspan"),10),e="",d&&(e="td:nth-child("+d+"n + "+g+")"),b._addLabels(f.filter(e),c.classes.cellLabels+h,i)):b._addLabels(f,c.classes.cellLabels,i))})},_addLabels:function(a,b,c){a.not(":has(b."+b+")").prepend("<b class='"+b+"'>"+c+"</b>")}})}(a),function(a,c){var d=function(b,c){return-1===(""+(a.mobile.getAttribute(this,"filtertext")||a(this).text())).toLowerCase().indexOf(c)};a.widget("mobile.filterable",{initSelector:":jqmData(filter='true')",options:{filterReveal:!1,filterCallback:d,enhanced:!1,input:null,children:"> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"},_create:function(){var b=this.options;a.extend(this,{_search:null,_timer:0}),this._setInput(b.input),b.enhanced||this._filterItems((this._search&&this._search.val()||"").toLowerCase())},_onKeyUp:function(){var c,d,e=this._search;if(e){if(c=e.val().toLowerCase(),d=a.mobile.getAttribute(e[0],"lastval")+"",d&&d===c)return;this._timer&&(b.clearTimeout(this._timer),this._timer=0),this._timer=this._delay(function(){this._trigger("beforefilter",null,{input:e}),e[0].setAttribute("data-"+a.mobile.ns+"lastval",c),this._filterItems(c),this._timer=0},250)}},_getFilterableItems:function(){var b=this.element,c=this.options.children,d=c?a.isFunction(c)?c():c.nodeName?a(c):c.jquery?c:this.element.find(c):{length:0};return 0===d.length&&(d=b.children()),d},_filterItems:function(b){var c,e,f,g,h=[],i=[],j=this.options,k=this._getFilterableItems();if(null!=b)for(e=j.filterCallback||d,f=k.length,c=0;f>c;c++)g=e.call(k[c],c,b)?i:h,g.push(k[c]);0===i.length?k[j.filterReveal?"addClass":"removeClass"]("ui-screen-hidden"):(a(i).addClass("ui-screen-hidden"),a(h).removeClass("ui-screen-hidden")),this._refreshChildWidget(),this._trigger("filter",null,{items:k})},_refreshChildWidget:function(){var b,c,d=["collapsibleset","selectmenu","controlgroup","listview"];for(c=d.length-1;c>-1;c--)b=d[c],a.mobile[b]&&(b=this.element.data("mobile-"+b),b&&a.isFunction(b.refresh)&&b.refresh())},_setInput:function(c){var d=this._search;this._timer&&(b.clearTimeout(this._timer),this._timer=0),d&&(this._off(d,"keyup change input"),d=null),c&&(d=c.jquery?c:c.nodeName?a(c):this.document.find(c),this._on(d,{keyup:"_onKeyUp",change:"_onKeyUp",input:"_onKeyUp"})),this._search=d},_setOptions:function(a){var b=!(a.filterReveal===c&&a.filterCallback===c&&a.children===c);this._super(a),a.input!==c&&(this._setInput(a.input),b=!0),b&&this.refresh()},_destroy:function(){var a=this.options,b=this._getFilterableItems();a.enhanced?b.toggleClass("ui-screen-hidden",a.filterReveal):b.removeClass("ui-screen-hidden")},refresh:function(){this._timer&&(b.clearTimeout(this._timer),this._timer=0),this._filterItems((this._search&&this._search.val()||"").toLowerCase())}})}(a),function(a,b){var c=function(a,b){return function(c){b.call(this,c),a._syncTextInputOptions(c)}},d=/(^|\s)ui-li-divider(\s|$)/,e=a.mobile.filterable.prototype.options.filterCallback;a.mobile.filterable.prototype.options.filterCallback=function(a,b){return!this.className.match(d)&&e.call(this,a,b)},a.widget("mobile.filterable",a.mobile.filterable,{options:{filterPlaceholder:"Filter items...",filterTheme:null},_create:function(){var b,c,d=this.element,e=["collapsibleset","selectmenu","controlgroup","listview"],f={};for(this._super(),a.extend(this,{_widget:null}),b=e.length-1;b>-1;b--)if(c=e[b],a.mobile[c]){if(this._setWidget(d.data("mobile-"+c)))break;f[c+"create"]="_handleCreate"}this._widget||this._on(d,f)},_handleCreate:function(a){this._setWidget(this.element.data("mobile-"+a.type.substring(0,a.type.length-6)))},_trigger:function(a,b,c){this._widget&&"mobile-listview"===this._widget.widgetFullName&&"beforefilter"===a&&this._widget._trigger("beforefilter",b,c),this._super(a,b,c)},_setWidget:function(a){return!this._widget&&a&&(this._widget=a,this._widget._setOptions=c(this,this._widget._setOptions)),this._widget&&(this._syncTextInputOptions(this._widget.options),"listview"===this._widget.widgetName&&(this._widget.options.hideDividers=!0,this._widget.element.listview("refresh"))),!!this._widget},_isSearchInternal:function(){return this._search&&this._search.jqmData("ui-filterable-"+this.uuid+"-internal")},_setInput:function(b){var c=this.options,d=!0,e={};if(!b){if(this._isSearchInternal())return;d=!1,b=a("<input data-"+a.mobile.ns+"type='search' placeholder='"+c.filterPlaceholder+"'></input>").jqmData("ui-filterable-"+this.uuid+"-internal",!0),a("<form class='ui-filterable'></form>").append(b).submit(function(a){a.preventDefault(),b.blur()}).insertBefore(this.element),a.mobile.textinput&&(null!=this.options.filterTheme&&(e.theme=c.filterTheme),b.textinput(e))}this._super(b),this._isSearchInternal()&&d&&this._search.attr("placeholder",this.options.filterPlaceholder)},_setOptions:function(c){var d=this._super(c);return c.filterPlaceholder!==b&&this._isSearchInternal()&&this._search.attr("placeholder",c.filterPlaceholder),c.filterTheme!==b&&this._search&&a.mobile.textinput&&this._search.textinput("option","theme",c.filterTheme),d},_destroy:function(){this._isSearchInternal()&&this._search.remove(),this._super()},_syncTextInputOptions:function(c){var d,e={};if(this._isSearchInternal()&&a.mobile.textinput){for(d in a.mobile.textinput.prototype.options)c[d]!==b&&(e[d]="theme"===d&&null!=this.options.filterTheme?this.options.filterTheme:c[d]);this._search.textinput("option",e)}}})}(a),function(a,b){function c(){return++e}function d(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))}var e=0,f=/#.*$/;a.widget("ui.tabs",{version:"fadf2b312a05040436451c64bbfaf4814bc62c56",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(c.active):a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){return a(e).attr("aria-controls")===d?(b=c,!1):void 0}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=c?!1:0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d===this.options.active?!1:d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),0>b&&(b=e),b}for(var e=this.tabs.length-1;-1!==a.inArray(d(),this.options.disabled);)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+c()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,e){var f,g,h,i=a(e).uniqueId().attr("id"),j=a(e).closest("li"),k=j.attr("aria-controls");d(e)?(f=e.hash,g=b.element.find(b._sanitizeSelector(f))):(h=b._tabId(j),f="#"+h,g=b.element.find(f),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":f.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||-1!==a.inArray(d,b)?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;d!==!1&&(c===b?d=!1:(c=this._getIndex(c),d=a.isArray(d)?a.map(d,function(a){return a!==c?a:null}):a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d))},disable:function(c){var d=this.options.disabled;if(d!==!0){if(c===b)d=!0;else{if(c=this._getIndex(c),-1!==a.inArray(c,d))return;d=a.isArray(d)?a.merge([c],d).sort():[c]}this._setupDisabled(d)}},load:function(b,c){b=this._getIndex(b);var e=this,f=this.tabs.eq(b),g=f.find(".ui-tabs-anchor"),h=this._getPanelForTab(f),i={tab:f,panel:h};d(g[0])||(this.xhr=a.ajax(this._ajaxSettings(g,c,i)),this.xhr&&"canceled"!==this.xhr.statusText&&(f.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){h.html(a),e._trigger("load",c,i)},1)}).complete(function(a,b){setTimeout(function(){"abort"===b&&e.panels.stop(!1,!0),f.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===e.xhr&&delete e.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})}(a),function(){}(a),function(a,b){function c(a){e=a.originalEvent,i=e.accelerationIncludingGravity,f=Math.abs(i.x),g=Math.abs(i.y),h=Math.abs(i.z),!b.orientation&&(f>7||(h>6&&8>g||8>h&&g>6)&&f>5)?d.enabled&&d.disable():d.enabled||d.enable()}a.mobile.iosorientationfixEnabled=!0;var d,e,f,g,h,i,j=navigator.userAgent;return/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(j)&&j.indexOf("AppleWebKit")>-1?(d=a.mobile.zoom,void a.mobile.document.on("mobileinit",function(){a.mobile.iosorientationfixEnabled&&a.mobile.window.bind("orientationchange.iosorientationfix",d.enable).bind("devicemotion.iosorientationfix",c)})):void(a.mobile.iosorientationfixEnabled=!1)}(a,this),function(a,b){function d(){e.removeClass("ui-mobile-rendering")}var e=a("html"),f=a.mobile.window;a(b.document).trigger("mobileinit"),a.mobile.gradeA()&&(a.mobile.ajaxBlacklist&&(a.mobile.ajaxEnabled=!1),e.addClass("ui-mobile ui-mobile-rendering"),setTimeout(d,5e3),a.extend(a.mobile,{initializePage:function(){var b=a.mobile.path,e=a(":jqmData(role='page'), :jqmData(role='dialog')"),g=b.stripHash(b.stripQueryParams(b.parseLocation().hash)),h=c.getElementById(g);
e.length||(e=a("body").wrapInner("<div data-"+a.mobile.ns+"role='page'></div>").children(0)),e.each(function(){var b=a(this);b[0].getAttribute("data-"+a.mobile.ns+"url")||b.attr("data-"+a.mobile.ns+"url",b.attr("id")||location.pathname+location.search)}),a.mobile.firstPage=e.first(),a.mobile.pageContainer=a.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(),a.mobile.navreadyDeferred.resolve(),f.trigger("pagecontainercreate"),a.mobile.loading("show"),d(),a.mobile.hashListeningEnabled&&a.mobile.path.isHashValid(location.hash)&&(a(h).is(":jqmData(role='page')")||a.mobile.path.isPath(g)||g===a.mobile.dialogHashKey)?a.event.special.navigate.isPushStateEnabled()?(a.mobile.navigate.history.stack=[],a.mobile.navigate(a.mobile.path.isPath(location.hash)?location.hash:location.href)):f.trigger("hashchange",[!0]):(a.mobile.path.isHashValid(location.hash)&&(a.mobile.navigate.history.initialDst=g.replace("#","")),a.event.special.navigate.isPushStateEnabled()&&a.mobile.navigate.navigator.squash(b.parseLocation().href),a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0}))}}),a(function(){a.support.inlineSVG(),a.mobile.hideUrlBar&&b.scrollTo(0,1),a.mobile.defaultHomeScroll=a.support.scrollTop&&1!==a.mobile.window.scrollTop()?1:0,a.mobile.autoInitializePage&&a.mobile.initializePage(),a.mobile.hideUrlBar&&f.load(a.mobile.silentScroll),a.support.cssPointerEvents||a.mobile.document.delegate(".ui-state-disabled,.ui-disabled","vclick",function(a){a.preventDefault(),a.stopImmediatePropagation()})}))}(a,this)});
//# sourceMappingURL=jquery.mobile.min.map
}.call(window));

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);