// Version 2.33.0 globe.gl - https://lakf.github.io/rmworld/example/world-cities/index.html
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Globe = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function _arrayLikeToArray(r, a) {
	  (null == a || a > r.length) && (a = r.length);
	  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	  return n;
	}
	function _arrayWithHoles(r) {
	  if (Array.isArray(r)) return r;
	}
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
	  try {
	    var i = n[a](c),
	      u = i.value;
	  } catch (n) {
	    return void e(n);
	  }
	  i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
	  return function () {
	    var t = this,
	      e = arguments;
	    return new Promise(function (r, o) {
	      var a = n.apply(t, e);
	      function _next(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
	      }
	      function _throw(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
	      }
	      _next(void 0);
	    });
	  };
	}
	function _createForOfIteratorHelper(r, e) {
	  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (!t) {
	    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
	      t && (r = t);
	      var n = 0,
	        F = function () {};
	      return {
	        s: F,
	        n: function () {
	          return n >= r.length ? {
	            done: !0
	          } : {
	            done: !1,
	            value: r[n++]
	          };
	        },
	        e: function (r) {
	          throw r;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var o,
	    a = !0,
	    u = !1;
	  return {
	    s: function () {
	      t = t.call(r);
	    },
	    n: function () {
	      var r = t.next();
	      return a = r.done, r;
	    },
	    e: function (r) {
	      u = !0, o = r;
	    },
	    f: function () {
	      try {
	        a || null == t.return || t.return();
	      } finally {
	        if (u) throw o;
	      }
	    }
	  };
	}
	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _regeneratorRuntime() {
	  _regeneratorRuntime = function () {
	    return e;
	  };
	  var t,
	    e = {},
	    r = Object.prototype,
	    n = r.hasOwnProperty,
	    o = Object.defineProperty || function (t, e, r) {
	      t[e] = r.value;
	    },
	    i = "function" == typeof Symbol ? Symbol : {},
	    a = i.iterator || "@@iterator",
	    c = i.asyncIterator || "@@asyncIterator",
	    u = i.toStringTag || "@@toStringTag";
	  function define(t, e, r) {
	    return Object.defineProperty(t, e, {
	      value: r,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), t[e];
	  }
	  try {
	    define({}, "");
	  } catch (t) {
	    define = function (t, e, r) {
	      return t[e] = r;
	    };
	  }
	  function wrap(t, e, r, n) {
	    var i = e && e.prototype instanceof Generator ? e : Generator,
	      a = Object.create(i.prototype),
	      c = new Context(n || []);
	    return o(a, "_invoke", {
	      value: makeInvokeMethod(t, r, c)
	    }), a;
	  }
	  function tryCatch(t, e, r) {
	    try {
	      return {
	        type: "normal",
	        arg: t.call(e, r)
	      };
	    } catch (t) {
	      return {
	        type: "throw",
	        arg: t
	      };
	    }
	  }
	  e.wrap = wrap;
	  var h = "suspendedStart",
	    l = "suspendedYield",
	    f = "executing",
	    s = "completed",
	    y = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var p = {};
	  define(p, a, function () {
	    return this;
	  });
	  var d = Object.getPrototypeOf,
	    v = d && d(d(values([])));
	  v && v !== r && n.call(v, a) && (p = v);
	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
	  function defineIteratorMethods(t) {
	    ["next", "throw", "return"].forEach(function (e) {
	      define(t, e, function (t) {
	        return this._invoke(e, t);
	      });
	    });
	  }
	  function AsyncIterator(t, e) {
	    function invoke(r, o, i, a) {
	      var c = tryCatch(t[r], t, o);
	      if ("throw" !== c.type) {
	        var u = c.arg,
	          h = u.value;
	        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
	          invoke("next", t, i, a);
	        }, function (t) {
	          invoke("throw", t, i, a);
	        }) : e.resolve(h).then(function (t) {
	          u.value = t, i(u);
	        }, function (t) {
	          return invoke("throw", t, i, a);
	        });
	      }
	      a(c.arg);
	    }
	    var r;
	    o(this, "_invoke", {
	      value: function (t, n) {
	        function callInvokeWithMethodAndArg() {
	          return new e(function (e, r) {
	            invoke(t, n, e, r);
	          });
	        }
	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(e, r, n) {
	    var o = h;
	    return function (i, a) {
	      if (o === f) throw Error("Generator is already running");
	      if (o === s) {
	        if ("throw" === i) throw a;
	        return {
	          value: t,
	          done: !0
	        };
	      }
	      for (n.method = i, n.arg = a;;) {
	        var c = n.delegate;
	        if (c) {
	          var u = maybeInvokeDelegate(c, n);
	          if (u) {
	            if (u === y) continue;
	            return u;
	          }
	        }
	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
	          if (o === h) throw o = s, n.arg;
	          n.dispatchException(n.arg);
	        } else "return" === n.method && n.abrupt("return", n.arg);
	        o = f;
	        var p = tryCatch(e, r, n);
	        if ("normal" === p.type) {
	          if (o = n.done ? s : l, p.arg === y) continue;
	          return {
	            value: p.arg,
	            done: n.done
	          };
	        }
	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(e, r) {
	    var n = r.method,
	      o = e.iterator[n];
	    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
	    var i = tryCatch(o, e.iterator, r.arg);
	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
	    var a = i.arg;
	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
	  }
	  function pushTryEntry(t) {
	    var e = {
	      tryLoc: t[0]
	    };
	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
	  }
	  function resetTryEntry(t) {
	    var e = t.completion || {};
	    e.type = "normal", delete e.arg, t.completion = e;
	  }
	  function Context(t) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], t.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(e) {
	    if (e || "" === e) {
	      var r = e[a];
	      if (r) return r.call(e);
	      if ("function" == typeof e.next) return e;
	      if (!isNaN(e.length)) {
	        var o = -1,
	          i = function next() {
	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
	            return next.value = t, next.done = !0, next;
	          };
	        return i.next = i;
	      }
	    }
	    throw new TypeError(typeof e + " is not iterable");
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), o(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
	    var e = "function" == typeof t && t.constructor;
	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
	  }, e.mark = function (t) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
	  }, e.awrap = function (t) {
	    return {
	      __await: t
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
	    return this;
	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
	    void 0 === i && (i = Promise);
	    var a = new AsyncIterator(wrap(t, r, n, o), i);
	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
	      return t.done ? t.value : a.next();
	    });
	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
	    return this;
	  }), define(g, "toString", function () {
	    return "[object Generator]";
	  }), e.keys = function (t) {
	    var e = Object(t),
	      r = [];
	    for (var n in e) r.push(n);
	    return r.reverse(), function next() {
	      for (; r.length;) {
	        var t = r.pop();
	        if (t in e) return next.value = t, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, e.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function (e) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
	    },
	    stop: function () {
	      this.done = !0;
	      var t = this.tryEntries[0].completion;
	      if ("throw" === t.type) throw t.arg;
	      return this.rval;
	    },
	    dispatchException: function (e) {
	      if (this.done) throw e;
	      var r = this;
	      function handle(n, o) {
	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
	      }
	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
	        var i = this.tryEntries[o],
	          a = i.completion;
	        if ("root" === i.tryLoc) return handle("end");
	        if (i.tryLoc <= this.prev) {
	          var c = n.call(i, "catchLoc"),
	            u = n.call(i, "finallyLoc");
	          if (c && u) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          } else if (c) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	          } else {
	            if (!u) throw Error("try statement without catch or finally");
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function (t, e) {
	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
	        var o = this.tryEntries[r];
	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
	          var i = o;
	          break;
	        }
	      }
	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
	      var a = i ? i.completion : {};
	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
	    },
	    complete: function (t, e) {
	      if ("throw" === t.type) throw t.arg;
	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
	    },
	    finish: function (t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
	      }
	    },
	    catch: function (t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.tryLoc === t) {
	          var n = r.completion;
	          if ("throw" === n.type) {
	            var o = n.arg;
	            resetTryEntry(r);
	          }
	          return o;
	        }
	      }
	      throw Error("illegal catch attempt");
	    },
	    delegateYield: function (e, r, n) {
	      return this.delegate = {
	        iterator: values(e),
	        resultName: r,
	        nextLoc: n
	      }, "next" === this.method && (this.arg = t), y;
	    }
	  }, e;
	}
	function _slicedToArray(r, e) {
	  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _unsupportedIterableToArray(r, a) {
	  if (r) {
	    if ("string" == typeof r) return _arrayLikeToArray(r, a);
	    var t = {}.toString.call(r).slice(8, -1);
	    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	  }
	}

	var scripts$1 = {};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
	 */

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const stringToByteArray$1 = function (str) {
	  // TODO(user): Use native implementations if/when available
	  const out = [];
	  let p = 0;
	  for (let i = 0; i < str.length; i++) {
	    let c = str.charCodeAt(i);
	    if (c < 128) {
	      out[p++] = c;
	    } else if (c < 2048) {
	      out[p++] = c >> 6 | 192;
	      out[p++] = c & 63 | 128;
	    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
	      // Surrogate Pair
	      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
	      out[p++] = c >> 18 | 240;
	      out[p++] = c >> 12 & 63 | 128;
	      out[p++] = c >> 6 & 63 | 128;
	      out[p++] = c & 63 | 128;
	    } else {
	      out[p++] = c >> 12 | 224;
	      out[p++] = c >> 6 & 63 | 128;
	      out[p++] = c & 63 | 128;
	    }
	  }
	  return out;
	};
	/**
	 * Turns an array of numbers into the string given by the concatenation of the
	 * characters to which the numbers correspond.
	 * @param bytes Array of numbers representing characters.
	 * @return Stringification of the array.
	 */
	const byteArrayToString = function (bytes) {
	  // TODO(user): Use native implementations if/when available
	  const out = [];
	  let pos = 0,
	    c = 0;
	  while (pos < bytes.length) {
	    const c1 = bytes[pos++];
	    if (c1 < 128) {
	      out[c++] = String.fromCharCode(c1);
	    } else if (c1 > 191 && c1 < 224) {
	      const c2 = bytes[pos++];
	      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
	    } else if (c1 > 239 && c1 < 365) {
	      // Surrogate Pair
	      const c2 = bytes[pos++];
	      const c3 = bytes[pos++];
	      const c4 = bytes[pos++];
	      const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
	      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
	      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
	    } else {
	      const c2 = bytes[pos++];
	      const c3 = bytes[pos++];
	      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
	    }
	  }
	  return out.join('');
	};
	// We define it as an object literal instead of a class because a class compiled down to es5 can't
	// be treeshaked. https://github.com/rollup/rollup/issues/1691
	// Static lookup maps, lazily populated by init_()
	const base64 = {
	  /**
	   * Maps bytes to characters.
	   */
	  byteToCharMap_: null,
	  /**
	   * Maps characters to bytes.
	   */
	  charToByteMap_: null,
	  /**
	   * Maps bytes to websafe characters.
	   * @private
	   */
	  byteToCharMapWebSafe_: null,
	  /**
	   * Maps websafe characters to bytes.
	   * @private
	   */
	  charToByteMapWebSafe_: null,
	  /**
	   * Our default alphabet, shared between
	   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
	   */
	  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
	  /**
	   * Our default alphabet. Value 64 (=) is special; it means "nothing."
	   */
	  get ENCODED_VALS() {
	    return this.ENCODED_VALS_BASE + '+/=';
	  },
	  /**
	   * Our websafe alphabet.
	   */
	  get ENCODED_VALS_WEBSAFE() {
	    return this.ENCODED_VALS_BASE + '-_.';
	  },
	  /**
	   * Whether this browser supports the atob and btoa functions. This extension
	   * started at Mozilla but is now implemented by many browsers. We use the
	   * ASSUME_* variables to avoid pulling in the full useragent detection library
	   * but still allowing the standard per-browser compilations.
	   *
	   */
	  HAS_NATIVE_SUPPORT: typeof atob === 'function',
	  /**
	   * Base64-encode an array of bytes.
	   *
	   * @param input An array of bytes (numbers with
	   *     value in [0, 255]) to encode.
	   * @param webSafe Boolean indicating we should use the
	   *     alternative alphabet.
	   * @return The base64 encoded string.
	   */
	  encodeByteArray(input, webSafe) {
	    if (!Array.isArray(input)) {
	      throw Error('encodeByteArray takes an array as a parameter');
	    }
	    this.init_();
	    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
	    const output = [];
	    for (let i = 0; i < input.length; i += 3) {
	      const byte1 = input[i];
	      const haveByte2 = i + 1 < input.length;
	      const byte2 = haveByte2 ? input[i + 1] : 0;
	      const haveByte3 = i + 2 < input.length;
	      const byte3 = haveByte3 ? input[i + 2] : 0;
	      const outByte1 = byte1 >> 2;
	      const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
	      let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
	      let outByte4 = byte3 & 0x3f;
	      if (!haveByte3) {
	        outByte4 = 64;
	        if (!haveByte2) {
	          outByte3 = 64;
	        }
	      }
	      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
	    }
	    return output.join('');
	  },
	  /**
	   * Base64-encode a string.
	   *
	   * @param input A string to encode.
	   * @param webSafe If true, we should use the
	   *     alternative alphabet.
	   * @return The base64 encoded string.
	   */
	  encodeString(input, webSafe) {
	    // Shortcut for Mozilla browsers that implement
	    // a native base64 encoder in the form of "btoa/atob"
	    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
	      return btoa(input);
	    }
	    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
	  },
	  /**
	   * Base64-decode a string.
	   *
	   * @param input to decode.
	   * @param webSafe True if we should use the
	   *     alternative alphabet.
	   * @return string representing the decoded value.
	   */
	  decodeString(input, webSafe) {
	    // Shortcut for Mozilla browsers that implement
	    // a native base64 encoder in the form of "btoa/atob"
	    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
	      return atob(input);
	    }
	    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
	  },
	  /**
	   * Base64-decode a string.
	   *
	   * In base-64 decoding, groups of four characters are converted into three
	   * bytes.  If the encoder did not apply padding, the input length may not
	   * be a multiple of 4.
	   *
	   * In this case, the last group will have fewer than 4 characters, and
	   * padding will be inferred.  If the group has one or two characters, it decodes
	   * to one byte.  If the group has three characters, it decodes to two bytes.
	   *
	   * @param input Input to decode.
	   * @param webSafe True if we should use the web-safe alphabet.
	   * @return bytes representing the decoded value.
	   */
	  decodeStringToByteArray(input, webSafe) {
	    this.init_();
	    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
	    const output = [];
	    for (let i = 0; i < input.length;) {
	      const byte1 = charToByteMap[input.charAt(i++)];
	      const haveByte2 = i < input.length;
	      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
	      ++i;
	      const haveByte3 = i < input.length;
	      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
	      ++i;
	      const haveByte4 = i < input.length;
	      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
	      ++i;
	      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
	        throw new DecodeBase64StringError();
	      }
	      const outByte1 = byte1 << 2 | byte2 >> 4;
	      output.push(outByte1);
	      if (byte3 !== 64) {
	        const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
	        output.push(outByte2);
	        if (byte4 !== 64) {
	          const outByte3 = byte3 << 6 & 0xc0 | byte4;
	          output.push(outByte3);
	        }
	      }
	    }
	    return output;
	  },
	  /**
	   * Lazy static initialization function. Called before
	   * accessing any of the static map variables.
	   * @private
	   */
	  init_() {
	    if (!this.byteToCharMap_) {
	      this.byteToCharMap_ = {};
	      this.charToByteMap_ = {};
	      this.byteToCharMapWebSafe_ = {};
	      this.charToByteMapWebSafe_ = {};
	      // We want quick mappings back and forth, so we precompute two maps.
	      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
	        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
	        this.charToByteMap_[this.byteToCharMap_[i]] = i;
	        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
	        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
	        // Be forgiving when decoding and correctly decode both encodings.
	        if (i >= this.ENCODED_VALS_BASE.length) {
	          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
	          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
	        }
	      }
	    }
	  }
	};
	/**
	 * An error encountered while decoding base64 string.
	 */
	class DecodeBase64StringError extends Error {
	  constructor() {
	    super(...arguments);
	    this.name = 'DecodeBase64StringError';
	  }
	}
	/**
	 * URL-safe base64 encoding
	 */
	const base64Encode = function (str) {
	  const utf8Bytes = stringToByteArray$1(str);
	  return base64.encodeByteArray(utf8Bytes, true);
	};
	/**
	 * URL-safe base64 encoding (without "." padding in the end).
	 * e.g. Used in JSON Web Token (JWT) parts.
	 */
	const base64urlEncodeWithoutPadding = function (str) {
	  // Use base64url encoding and remove padding in the end (dot characters).
	  return base64Encode(str).replace(/\./g, '');
	};
	/**
	 * URL-safe base64 decoding
	 *
	 * NOTE: DO NOT use the global atob() function - it does NOT support the
	 * base64Url variant encoding.
	 *
	 * @param str To be decoded
	 * @return Decoded result, if possible
	 */
	const base64Decode = function (str) {
	  try {
	    return base64.decodeString(str, true);
	  } catch (e) {
	    console.error('base64Decode failed: ', e);
	  }
	  return null;
	};
	/**
	 * Copy properties from source to target (recursively allows extension
	 * of Objects and Arrays).  Scalar values in the target are over-written.
	 * If target is undefined, an object of the appropriate type will be created
	 * (and returned).
	 *
	 * We recursively copy all child properties of plain Objects in the source- so
	 * that namespace- like dictionaries are merged.
	 *
	 * Note that the target can be a function, in which case the properties in
	 * the source Object are copied onto it as static properties of the Function.
	 *
	 * Note: we don't merge __proto__ to prevent prototype pollution
	 */
	function deepExtend(target, source) {
	  if (!(source instanceof Object)) {
	    return source;
	  }
	  switch (source.constructor) {
	    case Date:
	      // Treat Dates like scalars; if the target date object had any child
	      // properties - they will be lost!
	      const dateValue = source;
	      return new Date(dateValue.getTime());
	    case Object:
	      if (target === undefined) {
	        target = {};
	      }
	      break;
	    case Array:
	      // Always copy the array source and overwrite the target.
	      target = [];
	      break;
	    default:
	      // Not a plain Object - treat it as a scalar.
	      return source;
	  }
	  for (const prop in source) {
	    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
	    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
	      continue;
	    }
	    target[prop] = deepExtend(target[prop], source[prop]);
	  }
	  return target;
	}
	function isValidKey(key) {
	  return key !== '__proto__';
	}

	/**
	 * @license
	 * Copyright 2022 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Polyfill for `globalThis` object.
	 * @returns the `globalThis` object for the given environment.
	 * @public
	 */
	function getGlobal() {
	  if (typeof self !== 'undefined') {
	    return self;
	  }
	  if (typeof window !== 'undefined') {
	    return window;
	  }
	  if (typeof global !== 'undefined') {
	    return global;
	  }
	  throw new Error('Unable to locate global object.');
	}

	/**
	 * @license
	 * Copyright 2022 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
	/**
	 * Attempt to read defaults from a JSON string provided to
	 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
	 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
	 * The dots are in parens because certain compilers (Vite?) cannot
	 * handle seeing that variable in comments.
	 * See https://github.com/firebase/firebase-js-sdk/issues/6838
	 */
	const getDefaultsFromEnvVariable = () => {
	  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
	    return;
	  }
	  const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
	  if (defaultsJsonString) {
	    return JSON.parse(defaultsJsonString);
	  }
	};
	const getDefaultsFromCookie = () => {
	  if (typeof document === 'undefined') {
	    return;
	  }
	  let match;
	  try {
	    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
	  } catch (e) {
	    // Some environments such as Angular Universal SSR have a
	    // `document` object but error on accessing `document.cookie`.
	    return;
	  }
	  const decoded = match && base64Decode(match[1]);
	  return decoded && JSON.parse(decoded);
	};
	/**
	 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
	 * (1) if such an object exists as a property of `globalThis`
	 * (2) if such an object was provided on a shell environment variable
	 * (3) if such an object exists in a cookie
	 * @public
	 */
	const getDefaults = () => {
	  try {
	    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
	  } catch (e) {
	    /**
	     * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
	     * to any environment case we have not accounted for. Log to
	     * info instead of swallowing so we can find these unknown cases
	     * and add paths for them if needed.
	     */
	    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
	    return;
	  }
	};
	/**
	 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
	 * @public
	 */
	const getDefaultAppConfig = () => {
	  var _a;
	  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
	};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	class Deferred {
	  constructor() {
	    this.reject = () => {};
	    this.resolve = () => {};
	    this.promise = new Promise((resolve, reject) => {
	      this.resolve = resolve;
	      this.reject = reject;
	    });
	  }
	  /**
	   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
	   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
	   * and returns a node-style callback which will resolve or reject the Deferred's promise.
	   */
	  wrapCallback(callback) {
	    return (error, value) => {
	      if (error) {
	        this.reject(error);
	      } else {
	        this.resolve(value);
	      }
	      if (typeof callback === 'function') {
	        // Attaching noop handler just in case developer wasn't expecting
	        // promises
	        this.promise.catch(() => {});
	        // Some of our callbacks don't expect a value and our own tests
	        // assert that the parameter length is 1
	        if (callback.length === 1) {
	          callback(error);
	        } else {
	          callback(error, value);
	        }
	      }
	    };
	  }
	}
	/**
	 * Detect Browser Environment.
	 * Note: This will return true for certain test frameworks that are incompletely
	 * mimicking a browser, and should not lead to assuming all browser APIs are
	 * available.
	 */
	function isBrowser() {
	  return typeof window !== 'undefined' || isWebWorker();
	}
	/**
	 * Detect Web Worker context.
	 */
	function isWebWorker() {
	  return typeof WorkerGlobalScope !== 'undefined' && typeof self !== 'undefined' && self instanceof WorkerGlobalScope;
	}
	/**
	 * This method checks if indexedDB is supported by current browser/service worker context
	 * @return true if indexedDB is supported by current browser/service worker context
	 */
	function isIndexedDBAvailable() {
	  try {
	    return typeof indexedDB === 'object';
	  } catch (e) {
	    return false;
	  }
	}
	/**
	 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
	 * if errors occur during the database open operation.
	 *
	 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
	 * private browsing)
	 */
	function validateIndexedDBOpenable() {
	  return new Promise((resolve, reject) => {
	    try {
	      let preExist = true;
	      const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
	      const request = self.indexedDB.open(DB_CHECK_NAME);
	      request.onsuccess = () => {
	        request.result.close();
	        // delete database only when it doesn't pre-exist
	        if (!preExist) {
	          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
	        }
	        resolve(true);
	      };
	      request.onupgradeneeded = () => {
	        preExist = false;
	      };
	      request.onerror = () => {
	        var _a;
	        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
	      };
	    } catch (error) {
	      reject(error);
	    }
	  });
	}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * @fileoverview Standardized Firebase Error.
	 *
	 * Usage:
	 *
	 *   // TypeScript string literals for type-safe codes
	 *   type Err =
	 *     'unknown' |
	 *     'object-not-found'
	 *     ;
	 *
	 *   // Closure enum for type-safe error codes
	 *   // at-enum {string}
	 *   var Err = {
	 *     UNKNOWN: 'unknown',
	 *     OBJECT_NOT_FOUND: 'object-not-found',
	 *   }
	 *
	 *   let errors: Map<Err, string> = {
	 *     'generic-error': "Unknown error",
	 *     'file-not-found': "Could not find file: {$file}",
	 *   };
	 *
	 *   // Type-safe function - must pass a valid error code as param.
	 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
	 *
	 *   ...
	 *   throw error.create(Err.GENERIC);
	 *   ...
	 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
	 *   ...
	 *   // Service: Could not file file: foo.txt (service/file-not-found).
	 *
	 *   catch (e) {
	 *     assert(e.message === "Could not find file: foo.txt.");
	 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
	 *       console.log("Could not read file: " + e['file']);
	 *     }
	 *   }
	 */
	const ERROR_NAME = 'FirebaseError';
	// Based on code from:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
	class FirebaseError extends Error {
	  constructor(/** The error code for this error. */
	  code, message, /** Custom data for this error. */
	  customData) {
	    super(message);
	    this.code = code;
	    this.customData = customData;
	    /** The custom name for all FirebaseErrors. */
	    this.name = ERROR_NAME;
	    // Fix For ES5
	    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
	    Object.setPrototypeOf(this, FirebaseError.prototype);
	    // Maintains proper stack trace for where our error was thrown.
	    // Only available on V8.
	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, ErrorFactory.prototype.create);
	    }
	  }
	}
	class ErrorFactory {
	  constructor(service, serviceName, errors) {
	    this.service = service;
	    this.serviceName = serviceName;
	    this.errors = errors;
	  }
	  create(code, ...data) {
	    const customData = data[0] || {};
	    const fullCode = `${this.service}/${code}`;
	    const template = this.errors[code];
	    const message = template ? replaceTemplate(template, customData) : 'Error';
	    // Service Name: Error message (service/code).
	    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
	    const error = new FirebaseError(fullCode, fullMessage, customData);
	    return error;
	  }
	}
	function replaceTemplate(template, data) {
	  return template.replace(PATTERN, (_, key) => {
	    const value = data[key];
	    return value != null ? String(value) : `<${key}?>`;
	  });
	}
	const PATTERN = /\{\$([^}]+)}/g;

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	function contains(obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	}
	/**
	 * Deep equal two objects. Support Arrays and Objects.
	 */
	function deepEqual(a, b) {
	  if (a === b) {
	    return true;
	  }
	  const aKeys = Object.keys(a);
	  const bKeys = Object.keys(b);
	  for (const k of aKeys) {
	    if (!bKeys.includes(k)) {
	      return false;
	    }
	    const aProp = a[k];
	    const bProp = b[k];
	    if (isObject(aProp) && isObject(bProp)) {
	      if (!deepEqual(aProp, bProp)) {
	        return false;
	      }
	    } else if (aProp !== bProp) {
	      return false;
	    }
	  }
	  for (const k of bKeys) {
	    if (!aKeys.includes(k)) {
	      return false;
	    }
	  }
	  return true;
	}
	function isObject(thing) {
	  return thing !== null && typeof thing === 'object';
	}

	/**
	 * Helper to make a Subscribe function (just like Promise helps make a
	 * Thenable).
	 *
	 * @param executor Function which can make calls to a single Observer
	 *     as a proxy.
	 * @param onNoObservers Callback when count of Observers goes to zero.
	 */
	function createSubscribe(executor, onNoObservers) {
	  const proxy = new ObserverProxy(executor, onNoObservers);
	  return proxy.subscribe.bind(proxy);
	}
	/**
	 * Implement fan-out for any number of Observers attached via a subscribe
	 * function.
	 */
	class ObserverProxy {
	  /**
	   * @param executor Function which can make calls to a single Observer
	   *     as a proxy.
	   * @param onNoObservers Callback when count of Observers goes to zero.
	   */
	  constructor(executor, onNoObservers) {
	    this.observers = [];
	    this.unsubscribes = [];
	    this.observerCount = 0;
	    // Micro-task scheduling by calling task.then().
	    this.task = Promise.resolve();
	    this.finalized = false;
	    this.onNoObservers = onNoObservers;
	    // Call the executor asynchronously so subscribers that are called
	    // synchronously after the creation of the subscribe function
	    // can still receive the very first value generated in the executor.
	    this.task.then(() => {
	      executor(this);
	    }).catch(e => {
	      this.error(e);
	    });
	  }
	  next(value) {
	    this.forEachObserver(observer => {
	      observer.next(value);
	    });
	  }
	  error(error) {
	    this.forEachObserver(observer => {
	      observer.error(error);
	    });
	    this.close(error);
	  }
	  complete() {
	    this.forEachObserver(observer => {
	      observer.complete();
	    });
	    this.close();
	  }
	  /**
	   * Subscribe function that can be used to add an Observer to the fan-out list.
	   *
	   * - We require that no event is sent to a subscriber synchronously to their
	   *   call to subscribe().
	   */
	  subscribe(nextOrObserver, error, complete) {
	    let observer;
	    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
	      throw new Error('Missing Observer.');
	    }
	    // Assemble an Observer object when passed as callback functions.
	    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
	      observer = nextOrObserver;
	    } else {
	      observer = {
	        next: nextOrObserver,
	        error,
	        complete
	      };
	    }
	    if (observer.next === undefined) {
	      observer.next = noop;
	    }
	    if (observer.error === undefined) {
	      observer.error = noop;
	    }
	    if (observer.complete === undefined) {
	      observer.complete = noop;
	    }
	    const unsub = this.unsubscribeOne.bind(this, this.observers.length);
	    // Attempt to subscribe to a terminated Observable - we
	    // just respond to the Observer with the final error or complete
	    // event.
	    if (this.finalized) {
	      // eslint-disable-next-line @typescript-eslint/no-floating-promises
	      this.task.then(() => {
	        try {
	          if (this.finalError) {
	            observer.error(this.finalError);
	          } else {
	            observer.complete();
	          }
	        } catch (e) {
	          // nothing
	        }
	        return;
	      });
	    }
	    this.observers.push(observer);
	    return unsub;
	  }
	  // Unsubscribe is synchronous - we guarantee that no events are sent to
	  // any unsubscribed Observer.
	  unsubscribeOne(i) {
	    if (this.observers === undefined || this.observers[i] === undefined) {
	      return;
	    }
	    delete this.observers[i];
	    this.observerCount -= 1;
	    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
	      this.onNoObservers(this);
	    }
	  }
	  forEachObserver(fn) {
	    if (this.finalized) {
	      // Already closed by previous event....just eat the additional values.
	      return;
	    }
	    // Since sendOne calls asynchronously - there is no chance that
	    // this.observers will become undefined.
	    for (let i = 0; i < this.observers.length; i++) {
	      this.sendOne(i, fn);
	    }
	  }
	  // Call the Observer via one of it's callback function. We are careful to
	  // confirm that the observe has not been unsubscribed since this asynchronous
	  // function had been queued.
	  sendOne(i, fn) {
	    // Execute the callback asynchronously
	    // eslint-disable-next-line @typescript-eslint/no-floating-promises
	    this.task.then(() => {
	      if (this.observers !== undefined && this.observers[i] !== undefined) {
	        try {
	          fn(this.observers[i]);
	        } catch (e) {
	          // Ignore exceptions raised in Observers or missing methods of an
	          // Observer.
	          // Log error to console. b/31404806
	          if (typeof console !== 'undefined' && console.error) {
	            console.error(e);
	          }
	        }
	      }
	    });
	  }
	  close(err) {
	    if (this.finalized) {
	      return;
	    }
	    this.finalized = true;
	    if (err !== undefined) {
	      this.finalError = err;
	    }
	    // Proxy is no longer needed - garbage collect references
	    // eslint-disable-next-line @typescript-eslint/no-floating-promises
	    this.task.then(() => {
	      this.observers = undefined;
	      this.onNoObservers = undefined;
	    });
	  }
	}
	/**
	 * Return true if the object passed in implements any of the named methods.
	 */
	function implementsAnyMethods(obj, methods) {
	  if (typeof obj !== 'object' || obj === null) {
	    return false;
	  }
	  for (const method of methods) {
	    if (method in obj && typeof obj[method] === 'function') {
	      return true;
	    }
	  }
	  return false;
	}
	function noop() {
	  // do nothing
	}

	/**
	 * Component for service name T, e.g. `auth`, `auth-internal`
	 */
	class Component {
	  /**
	   *
	   * @param name The public service name, e.g. app, auth, firestore, database
	   * @param instanceFactory Service factory responsible for creating the public interface
	   * @param type whether the service provided by the component is public or private
	   */
	  constructor(name, instanceFactory, type) {
	    this.name = name;
	    this.instanceFactory = instanceFactory;
	    this.type = type;
	    this.multipleInstances = false;
	    /**
	     * Properties to be added to the service namespace
	     */
	    this.serviceProps = {};
	    this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
	    this.onInstanceCreated = null;
	  }
	  setInstantiationMode(mode) {
	    this.instantiationMode = mode;
	    return this;
	  }
	  setMultipleInstances(multipleInstances) {
	    this.multipleInstances = multipleInstances;
	    return this;
	  }
	  setServiceProps(props) {
	    this.serviceProps = props;
	    return this;
	  }
	  setInstanceCreatedCallback(callback) {
	    this.onInstanceCreated = callback;
	    return this;
	  }
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
	 * NameServiceMapping[T] is an alias for the type of the instance
	 */
	class Provider {
	  constructor(name, container) {
	    this.name = name;
	    this.container = container;
	    this.component = null;
	    this.instances = new Map();
	    this.instancesDeferred = new Map();
	    this.instancesOptions = new Map();
	    this.onInitCallbacks = new Map();
	  }
	  /**
	   * @param identifier A provider can provide multiple instances of a service
	   * if this.component.multipleInstances is true.
	   */
	  get(identifier) {
	    // if multipleInstances is not supported, use the default name
	    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
	    if (!this.instancesDeferred.has(normalizedIdentifier)) {
	      const deferred = new Deferred();
	      this.instancesDeferred.set(normalizedIdentifier, deferred);
	      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
	        // initialize the service if it can be auto-initialized
	        try {
	          const instance = this.getOrInitializeService({
	            instanceIdentifier: normalizedIdentifier
	          });
	          if (instance) {
	            deferred.resolve(instance);
	          }
	        } catch (e) {
	          // when the instance factory throws an exception during get(), it should not cause
	          // a fatal error. We just return the unresolved promise in this case.
	        }
	      }
	    }
	    return this.instancesDeferred.get(normalizedIdentifier).promise;
	  }
	  getImmediate(options) {
	    var _a;
	    // if multipleInstances is not supported, use the default name
	    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
	    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
	    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
	      try {
	        return this.getOrInitializeService({
	          instanceIdentifier: normalizedIdentifier
	        });
	      } catch (e) {
	        if (optional) {
	          return null;
	        } else {
	          throw e;
	        }
	      }
	    } else {
	      // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
	      if (optional) {
	        return null;
	      } else {
	        throw Error(`Service ${this.name} is not available`);
	      }
	    }
	  }
	  getComponent() {
	    return this.component;
	  }
	  setComponent(component) {
	    if (component.name !== this.name) {
	      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
	    }
	    if (this.component) {
	      throw Error(`Component for ${this.name} has already been provided`);
	    }
	    this.component = component;
	    // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
	    if (!this.shouldAutoInitialize()) {
	      return;
	    }
	    // if the service is eager, initialize the default instance
	    if (isComponentEager(component)) {
	      try {
	        this.getOrInitializeService({
	          instanceIdentifier: DEFAULT_ENTRY_NAME$1
	        });
	      } catch (e) {
	        // when the instance factory for an eager Component throws an exception during the eager
	        // initialization, it should not cause a fatal error.
	        // TODO: Investigate if we need to make it configurable, because some component may want to cause
	        // a fatal error in this case?
	      }
	    }
	    // Create service instances for the pending promises and resolve them
	    // NOTE: if this.multipleInstances is false, only the default instance will be created
	    // and all promises with resolve with it regardless of the identifier.
	    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
	      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
	      try {
	        // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
	        const instance = this.getOrInitializeService({
	          instanceIdentifier: normalizedIdentifier
	        });
	        instanceDeferred.resolve(instance);
	      } catch (e) {
	        // when the instance factory throws an exception, it should not cause
	        // a fatal error. We just leave the promise unresolved.
	      }
	    }
	  }
	  clearInstance(identifier = DEFAULT_ENTRY_NAME$1) {
	    this.instancesDeferred.delete(identifier);
	    this.instancesOptions.delete(identifier);
	    this.instances.delete(identifier);
	  }
	  // app.delete() will call this method on every provider to delete the services
	  // TODO: should we mark the provider as deleted?
	  async delete() {
	    const services = Array.from(this.instances.values());
	    await Promise.all([...services.filter(service => 'INTERNAL' in service) // legacy services
	    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	    .map(service => service.INTERNAL.delete()), ...services.filter(service => '_delete' in service) // modularized services
	    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	    .map(service => service._delete())]);
	  }
	  isComponentSet() {
	    return this.component != null;
	  }
	  isInitialized(identifier = DEFAULT_ENTRY_NAME$1) {
	    return this.instances.has(identifier);
	  }
	  getOptions(identifier = DEFAULT_ENTRY_NAME$1) {
	    return this.instancesOptions.get(identifier) || {};
	  }
	  initialize(opts = {}) {
	    const {
	      options = {}
	    } = opts;
	    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
	    if (this.isInitialized(normalizedIdentifier)) {
	      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
	    }
	    if (!this.isComponentSet()) {
	      throw Error(`Component ${this.name} has not been registered yet`);
	    }
	    const instance = this.getOrInitializeService({
	      instanceIdentifier: normalizedIdentifier,
	      options
	    });
	    // resolve any pending promise waiting for the service instance
	    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
	      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
	      if (normalizedIdentifier === normalizedDeferredIdentifier) {
	        instanceDeferred.resolve(instance);
	      }
	    }
	    return instance;
	  }
	  /**
	   *
	   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
	   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
	   *
	   * @param identifier An optional instance identifier
	   * @returns a function to unregister the callback
	   */
	  onInit(callback, identifier) {
	    var _a;
	    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
	    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
	    existingCallbacks.add(callback);
	    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
	    const existingInstance = this.instances.get(normalizedIdentifier);
	    if (existingInstance) {
	      callback(existingInstance, normalizedIdentifier);
	    }
	    return () => {
	      existingCallbacks.delete(callback);
	    };
	  }
	  /**
	   * Invoke onInit callbacks synchronously
	   * @param instance the service instance`
	   */
	  invokeOnInitCallbacks(instance, identifier) {
	    const callbacks = this.onInitCallbacks.get(identifier);
	    if (!callbacks) {
	      return;
	    }
	    for (const callback of callbacks) {
	      try {
	        callback(instance, identifier);
	      } catch (_a) {
	        // ignore errors in the onInit callback
	      }
	    }
	  }
	  getOrInitializeService({
	    instanceIdentifier,
	    options = {}
	  }) {
	    let instance = this.instances.get(instanceIdentifier);
	    if (!instance && this.component) {
	      instance = this.component.instanceFactory(this.container, {
	        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
	        options
	      });
	      this.instances.set(instanceIdentifier, instance);
	      this.instancesOptions.set(instanceIdentifier, options);
	      /**
	       * Invoke onInit listeners.
	       * Note this.component.onInstanceCreated is different, which is used by the component creator,
	       * while onInit listeners are registered by consumers of the provider.
	       */
	      this.invokeOnInitCallbacks(instance, instanceIdentifier);
	      /**
	       * Order is important
	       * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
	       * makes `isInitialized()` return true.
	       */
	      if (this.component.onInstanceCreated) {
	        try {
	          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
	        } catch (_a) {
	          // ignore errors in the onInstanceCreatedCallback
	        }
	      }
	    }
	    return instance || null;
	  }
	  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$1) {
	    if (this.component) {
	      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
	    } else {
	      return identifier; // assume multiple instances are supported before the component is provided.
	    }
	  }
	  shouldAutoInitialize() {
	    return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */;
	  }
	}
	// undefined should be passed to the service factory for the default instance
	function normalizeIdentifierForFactory(identifier) {
	  return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
	}
	function isComponentEager(component) {
	  return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
	 */
	class ComponentContainer {
	  constructor(name) {
	    this.name = name;
	    this.providers = new Map();
	  }
	  /**
	   *
	   * @param component Component being added
	   * @param overwrite When a component with the same name has already been registered,
	   * if overwrite is true: overwrite the existing component with the new component and create a new
	   * provider with the new component. It can be useful in tests where you want to use different mocks
	   * for different tests.
	   * if overwrite is false: throw an exception
	   */
	  addComponent(component) {
	    const provider = this.getProvider(component.name);
	    if (provider.isComponentSet()) {
	      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
	    }
	    provider.setComponent(component);
	  }
	  addOrOverwriteComponent(component) {
	    const provider = this.getProvider(component.name);
	    if (provider.isComponentSet()) {
	      // delete the existing provider from the container, so we can register the new component
	      this.providers.delete(component.name);
	    }
	    this.addComponent(component);
	  }
	  /**
	   * getProvider provides a type safe interface where it can only be called with a field name
	   * present in NameServiceMapping interface.
	   *
	   * Firebase SDKs providing services should extend NameServiceMapping interface to register
	   * themselves.
	   */
	  getProvider(name) {
	    if (this.providers.has(name)) {
	      return this.providers.get(name);
	    }
	    // create a Provider for a service that hasn't registered with Firebase
	    const provider = new Provider(name, this);
	    this.providers.set(name, provider);
	    return provider;
	  }
	  getProviders() {
	    return Array.from(this.providers.values());
	  }
	}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * A container for all of the Logger instances
	 */
	const instances = [];
	/**
	 * The JS SDK supports 5 log levels and also allows a user the ability to
	 * silence the logs altogether.
	 *
	 * The order is a follows:
	 * DEBUG < VERBOSE < INFO < WARN < ERROR
	 *
	 * All of the log types above the current log level will be captured (i.e. if
	 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
	 * `VERBOSE` logs will not)
	 */
	var LogLevel;
	(function (LogLevel) {
	  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
	  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
	  LogLevel[LogLevel["INFO"] = 2] = "INFO";
	  LogLevel[LogLevel["WARN"] = 3] = "WARN";
	  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
	  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
	})(LogLevel || (LogLevel = {}));
	const levelStringToEnum = {
	  'debug': LogLevel.DEBUG,
	  'verbose': LogLevel.VERBOSE,
	  'info': LogLevel.INFO,
	  'warn': LogLevel.WARN,
	  'error': LogLevel.ERROR,
	  'silent': LogLevel.SILENT
	};
	/**
	 * The default log level
	 */
	const defaultLogLevel = LogLevel.INFO;
	/**
	 * By default, `console.debug` is not displayed in the developer console (in
	 * chrome). To avoid forcing users to have to opt-in to these logs twice
	 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
	 * logs to the `console.log` function.
	 */
	const ConsoleMethod = {
	  [LogLevel.DEBUG]: 'log',
	  [LogLevel.VERBOSE]: 'log',
	  [LogLevel.INFO]: 'info',
	  [LogLevel.WARN]: 'warn',
	  [LogLevel.ERROR]: 'error'
	};
	/**
	 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
	 * messages on to their corresponding console counterparts (if the log method
	 * is supported by the current log level)
	 */
	const defaultLogHandler = (instance, logType, ...args) => {
	  if (logType < instance.logLevel) {
	    return;
	  }
	  const now = new Date().toISOString();
	  const method = ConsoleMethod[logType];
	  if (method) {
	    console[method](`[${now}]  ${instance.name}:`, ...args);
	  } else {
	    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
	  }
	};
	class Logger {
	  /**
	   * Gives you an instance of a Logger to capture messages according to
	   * Firebase's logging scheme.
	   *
	   * @param name The name that the logs will be associated with
	   */
	  constructor(name) {
	    this.name = name;
	    /**
	     * The log level of the given Logger instance.
	     */
	    this._logLevel = defaultLogLevel;
	    /**
	     * The main (internal) log handler for the Logger instance.
	     * Can be set to a new function in internal package code but not by user.
	     */
	    this._logHandler = defaultLogHandler;
	    /**
	     * The optional, additional, user-defined log handler for the Logger instance.
	     */
	    this._userLogHandler = null;
	    /**
	     * Capture the current instance for later use
	     */
	    instances.push(this);
	  }
	  get logLevel() {
	    return this._logLevel;
	  }
	  set logLevel(val) {
	    if (!(val in LogLevel)) {
	      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
	    }
	    this._logLevel = val;
	  }
	  // Workaround for setter/getter having to be the same type.
	  setLogLevel(val) {
	    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
	  }
	  get logHandler() {
	    return this._logHandler;
	  }
	  set logHandler(val) {
	    if (typeof val !== 'function') {
	      throw new TypeError('Value assigned to `logHandler` must be a function');
	    }
	    this._logHandler = val;
	  }
	  get userLogHandler() {
	    return this._userLogHandler;
	  }
	  set userLogHandler(val) {
	    this._userLogHandler = val;
	  }
	  /**
	   * The functions below are all based on the `console` interface
	   */
	  debug(...args) {
	    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
	    this._logHandler(this, LogLevel.DEBUG, ...args);
	  }
	  log(...args) {
	    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
	    this._logHandler(this, LogLevel.VERBOSE, ...args);
	  }
	  info(...args) {
	    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
	    this._logHandler(this, LogLevel.INFO, ...args);
	  }
	  warn(...args) {
	    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
	    this._logHandler(this, LogLevel.WARN, ...args);
	  }
	  error(...args) {
	    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
	    this._logHandler(this, LogLevel.ERROR, ...args);
	  }
	}
	function setLogLevel$1(level) {
	  instances.forEach(inst => {
	    inst.setLogLevel(level);
	  });
	}
	function setUserLogHandler(logCallback, options) {
	  for (const instance of instances) {
	    let customLogLevel = null;
	    if (options && options.level) {
	      customLogLevel = levelStringToEnum[options.level];
	    }
	    if (logCallback === null) {
	      instance.userLogHandler = null;
	    } else {
	      instance.userLogHandler = (instance, level, ...args) => {
	        const message = args.map(arg => {
	          if (arg == null) {
	            return null;
	          } else if (typeof arg === 'string') {
	            return arg;
	          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
	            return arg.toString();
	          } else if (arg instanceof Error) {
	            return arg.message;
	          } else {
	            try {
	              return JSON.stringify(arg);
	            } catch (ignored) {
	              return null;
	            }
	          }
	        }).filter(arg => arg).join(' ');
	        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
	          logCallback({
	            level: LogLevel[level].toLowerCase(),
	            message,
	            args,
	            type: instance.name
	          });
	        }
	      };
	    }
	  }
	}

	const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);
	let idbProxyableTypes;
	let cursorAdvanceMethods;
	// This is a function to prevent it throwing up in node environments.
	function getIdbProxyableTypes() {
	  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
	}
	// This is a function to prevent it throwing up in node environments.
	function getCursorAdvanceMethods() {
	  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
	}
	const cursorRequestMap = new WeakMap();
	const transactionDoneMap = new WeakMap();
	const transactionStoreNamesMap = new WeakMap();
	const transformCache = new WeakMap();
	const reverseTransformCache = new WeakMap();
	function promisifyRequest(request) {
	  const promise = new Promise((resolve, reject) => {
	    const unlisten = () => {
	      request.removeEventListener('success', success);
	      request.removeEventListener('error', error);
	    };
	    const success = () => {
	      resolve(wrap(request.result));
	      unlisten();
	    };
	    const error = () => {
	      reject(request.error);
	      unlisten();
	    };
	    request.addEventListener('success', success);
	    request.addEventListener('error', error);
	  });
	  promise.then(value => {
	    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
	    // (see wrapFunction).
	    if (value instanceof IDBCursor) {
	      cursorRequestMap.set(value, request);
	    }
	    // Catching to avoid "Uncaught Promise exceptions"
	  }).catch(() => {});
	  // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
	  // is because we create many promises from a single IDBRequest.
	  reverseTransformCache.set(promise, request);
	  return promise;
	}
	function cacheDonePromiseForTransaction(tx) {
	  // Early bail if we've already created a done promise for this transaction.
	  if (transactionDoneMap.has(tx)) return;
	  const done = new Promise((resolve, reject) => {
	    const unlisten = () => {
	      tx.removeEventListener('complete', complete);
	      tx.removeEventListener('error', error);
	      tx.removeEventListener('abort', error);
	    };
	    const complete = () => {
	      resolve();
	      unlisten();
	    };
	    const error = () => {
	      reject(tx.error || new DOMException('AbortError', 'AbortError'));
	      unlisten();
	    };
	    tx.addEventListener('complete', complete);
	    tx.addEventListener('error', error);
	    tx.addEventListener('abort', error);
	  });
	  // Cache it for later retrieval.
	  transactionDoneMap.set(tx, done);
	}
	let idbProxyTraps = {
	  get(target, prop, receiver) {
	    if (target instanceof IDBTransaction) {
	      // Special handling for transaction.done.
	      if (prop === 'done') return transactionDoneMap.get(target);
	      // Polyfill for objectStoreNames because of Edge.
	      if (prop === 'objectStoreNames') {
	        return target.objectStoreNames || transactionStoreNamesMap.get(target);
	      }
	      // Make tx.store return the only store in the transaction, or undefined if there are many.
	      if (prop === 'store') {
	        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
	      }
	    }
	    // Else transform whatever we get back.
	    return wrap(target[prop]);
	  },
	  set(target, prop, value) {
	    target[prop] = value;
	    return true;
	  },
	  has(target, prop) {
	    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
	      return true;
	    }
	    return prop in target;
	  }
	};
	function replaceTraps(callback) {
	  idbProxyTraps = callback(idbProxyTraps);
	}
	function wrapFunction(func) {
	  // Due to expected object equality (which is enforced by the caching in `wrap`), we
	  // only create one new func per func.
	  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
	  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
	    return function (storeNames, ...args) {
	      const tx = func.call(unwrap(this), storeNames, ...args);
	      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
	      return wrap(tx);
	    };
	  }
	  // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
	  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
	  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
	  // with real promises, so each advance methods returns a new promise for the cursor object, or
	  // undefined if the end of the cursor has been reached.
	  if (getCursorAdvanceMethods().includes(func)) {
	    return function (...args) {
	      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
	      // the original object.
	      func.apply(unwrap(this), args);
	      return wrap(cursorRequestMap.get(this));
	    };
	  }
	  return function (...args) {
	    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
	    // the original object.
	    return wrap(func.apply(unwrap(this), args));
	  };
	}
	function transformCachableValue(value) {
	  if (typeof value === 'function') return wrapFunction(value);
	  // This doesn't return, it just creates a 'done' promise for the transaction,
	  // which is later returned for transaction.done (see idbObjectHandler).
	  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
	  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
	  // Return the same value back if we're not going to transform it.
	  return value;
	}
	function wrap(value) {
	  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
	  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
	  if (value instanceof IDBRequest) return promisifyRequest(value);
	  // If we've already transformed this value before, reuse the transformed value.
	  // This is faster, but it also provides object equality.
	  if (transformCache.has(value)) return transformCache.get(value);
	  const newValue = transformCachableValue(value);
	  // Not all types are transformed.
	  // These may be primitive types, so they can't be WeakMap keys.
	  if (newValue !== value) {
	    transformCache.set(value, newValue);
	    reverseTransformCache.set(newValue, value);
	  }
	  return newValue;
	}
	const unwrap = value => reverseTransformCache.get(value);

	/**
	 * Open a database.
	 *
	 * @param name Name of the database.
	 * @param version Schema version.
	 * @param callbacks Additional callbacks.
	 */
	function openDB(name, version, {
	  blocked,
	  upgrade,
	  blocking,
	  terminated
	} = {}) {
	  const request = indexedDB.open(name, version);
	  const openPromise = wrap(request);
	  if (upgrade) {
	    request.addEventListener('upgradeneeded', event => {
	      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
	    });
	  }
	  if (blocked) {
	    request.addEventListener('blocked', event => blocked(
	    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
	    event.oldVersion, event.newVersion, event));
	  }
	  openPromise.then(db => {
	    if (terminated) db.addEventListener('close', () => terminated());
	    if (blocking) {
	      db.addEventListener('versionchange', event => blocking(event.oldVersion, event.newVersion, event));
	    }
	  }).catch(() => {});
	  return openPromise;
	}
	const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
	const writeMethods = ['put', 'add', 'delete', 'clear'];
	const cachedMethods = new Map();
	function getMethod(target, prop) {
	  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
	    return;
	  }
	  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
	  const targetFuncName = prop.replace(/FromIndex$/, '');
	  const useIndex = prop !== targetFuncName;
	  const isWrite = writeMethods.includes(targetFuncName);
	  if (
	  // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
	  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
	    return;
	  }
	  const method = async function (storeName, ...args) {
	    // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
	    const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
	    let target = tx.store;
	    if (useIndex) target = target.index(args.shift());
	    // Must reject if op rejects.
	    // If it's a write operation, must reject if tx.done rejects.
	    // Must reject with op rejection first.
	    // Must resolve with op value.
	    // Must handle both promises (no unhandled rejections)
	    return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
	  };
	  cachedMethods.set(prop, method);
	  return method;
	}
	replaceTraps(oldTraps => ({
	  ...oldTraps,
	  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
	  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
	}));

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	class PlatformLoggerServiceImpl {
	  constructor(container) {
	    this.container = container;
	  }
	  // In initial implementation, this will be called by installations on
	  // auth token refresh, and installations will send this string.
	  getPlatformInfoString() {
	    const providers = this.container.getProviders();
	    // Loop through providers and get library/version pairs from any that are
	    // version components.
	    return providers.map(provider => {
	      if (isVersionServiceProvider(provider)) {
	        const service = provider.getImmediate();
	        return `${service.library}/${service.version}`;
	      } else {
	        return null;
	      }
	    }).filter(logString => logString).join(' ');
	  }
	}
	/**
	 *
	 * @param provider check if this provider provides a VersionService
	 *
	 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
	 * provides VersionService. The provider is not necessarily a 'app-version'
	 * provider.
	 */
	function isVersionServiceProvider(provider) {
	  const component = provider.getComponent();
	  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
	}
	const name$p = "@firebase/app";
	const version$1$1 = "0.10.11";

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const logger$1 = new Logger('@firebase/app');
	const name$o = "@firebase/app-compat";
	const name$n = "@firebase/analytics-compat";
	const name$m = "@firebase/analytics";
	const name$l = "@firebase/app-check-compat";
	const name$k = "@firebase/app-check";
	const name$j = "@firebase/auth";
	const name$i = "@firebase/auth-compat";
	const name$h = "@firebase/database";
	const name$g = "@firebase/database-compat";
	const name$f = "@firebase/functions";
	const name$e = "@firebase/functions-compat";
	const name$d = "@firebase/installations";
	const name$c = "@firebase/installations-compat";
	const name$b = "@firebase/messaging";
	const name$a = "@firebase/messaging-compat";
	const name$9 = "@firebase/performance";
	const name$8 = "@firebase/performance-compat";
	const name$7 = "@firebase/remote-config";
	const name$6 = "@firebase/remote-config-compat";
	const name$5 = "@firebase/storage";
	const name$4 = "@firebase/storage-compat";
	const name$3 = "@firebase/firestore";
	const name$2 = "@firebase/vertexai-preview";
	const name$1$1 = "@firebase/firestore-compat";
	const name$q = "firebase";
	const version$2 = "10.13.2";

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * The default app name
	 *
	 * @internal
	 */
	const DEFAULT_ENTRY_NAME = '[DEFAULT]';
	const PLATFORM_LOG_STRING = {
	  [name$p]: 'fire-core',
	  [name$o]: 'fire-core-compat',
	  [name$m]: 'fire-analytics',
	  [name$n]: 'fire-analytics-compat',
	  [name$k]: 'fire-app-check',
	  [name$l]: 'fire-app-check-compat',
	  [name$j]: 'fire-auth',
	  [name$i]: 'fire-auth-compat',
	  [name$h]: 'fire-rtdb',
	  [name$g]: 'fire-rtdb-compat',
	  [name$f]: 'fire-fn',
	  [name$e]: 'fire-fn-compat',
	  [name$d]: 'fire-iid',
	  [name$c]: 'fire-iid-compat',
	  [name$b]: 'fire-fcm',
	  [name$a]: 'fire-fcm-compat',
	  [name$9]: 'fire-perf',
	  [name$8]: 'fire-perf-compat',
	  [name$7]: 'fire-rc',
	  [name$6]: 'fire-rc-compat',
	  [name$5]: 'fire-gcs',
	  [name$4]: 'fire-gcs-compat',
	  [name$3]: 'fire-fst',
	  [name$1$1]: 'fire-fst-compat',
	  [name$2]: 'fire-vertex',
	  'fire-js': 'fire-js',
	  [name$q]: 'fire-js-all'
	};

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * @internal
	 */
	const _apps = new Map();
	/**
	 * @internal
	 */
	const _serverApps = new Map();
	/**
	 * Registered components.
	 *
	 * @internal
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const _components = new Map();
	/**
	 * @param component - the component being added to this app's container
	 *
	 * @internal
	 */
	function _addComponent(app, component) {
	  try {
	    app.container.addComponent(component);
	  } catch (e) {
	    logger$1.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
	  }
	}
	/**
	 *
	 * @internal
	 */
	function _addOrOverwriteComponent(app, component) {
	  app.container.addOrOverwriteComponent(component);
	}
	/**
	 *
	 * @param component - the component to register
	 * @returns whether or not the component is registered successfully
	 *
	 * @internal
	 */
	function _registerComponent(component) {
	  const componentName = component.name;
	  if (_components.has(componentName)) {
	    logger$1.debug(`There were multiple attempts to register component ${componentName}.`);
	    return false;
	  }
	  _components.set(componentName, component);
	  // add the component to existing app instances
	  for (const app of _apps.values()) {
	    _addComponent(app, component);
	  }
	  for (const serverApp of _serverApps.values()) {
	    _addComponent(serverApp, component);
	  }
	  return true;
	}
	/**
	 *
	 * @param app - FirebaseApp instance
	 * @param name - service name
	 *
	 * @returns the provider for the service with the matching name
	 *
	 * @internal
	 */
	function _getProvider(app, name) {
	  const heartbeatController = app.container.getProvider('heartbeat').getImmediate({
	    optional: true
	  });
	  if (heartbeatController) {
	    void heartbeatController.triggerHeartbeat();
	  }
	  return app.container.getProvider(name);
	}
	/**
	 *
	 * @param app - FirebaseApp instance
	 * @param name - service name
	 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
	 *
	 * @internal
	 */
	function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
	  _getProvider(app, name).clearInstance(instanceIdentifier);
	}
	/**
	 *
	 * @param obj - an object of type FirebaseApp or FirebaseOptions.
	 *
	 * @returns true if the provide object is of type FirebaseApp.
	 *
	 * @internal
	 */
	function _isFirebaseApp(obj) {
	  return obj.options !== undefined;
	}
	/**
	 *
	 * @param obj - an object of type FirebaseApp.
	 *
	 * @returns true if the provided object is of type FirebaseServerAppImpl.
	 *
	 * @internal
	 */
	function _isFirebaseServerApp(obj) {
	  return obj.settings !== undefined;
	}
	/**
	 * Test only
	 *
	 * @internal
	 */
	function _clearComponents() {
	  _components.clear();
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const ERRORS$1 = {
	  ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first',
	  ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
	  ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
	  ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
	  ["server-app-deleted" /* AppError.SERVER_APP_DELETED */]: 'Firebase Server App has been deleted',
	  ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
	  ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.',
	  ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
	  ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
	  ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
	  ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
	  ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
	  ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
	  ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: 'FirebaseServerApp is not for use in browser environments.'
	};
	const ERROR_FACTORY$1 = new ErrorFactory('app', 'Firebase', ERRORS$1);

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	let FirebaseAppImpl$1 = class FirebaseAppImpl {
	  constructor(options, config, container) {
	    this._isDeleted = false;
	    this._options = Object.assign({}, options);
	    this._config = Object.assign({}, config);
	    this._name = config.name;
	    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
	    this._container = container;
	    this.container.addComponent(new Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
	  }
	  get automaticDataCollectionEnabled() {
	    this.checkDestroyed();
	    return this._automaticDataCollectionEnabled;
	  }
	  set automaticDataCollectionEnabled(val) {
	    this.checkDestroyed();
	    this._automaticDataCollectionEnabled = val;
	  }
	  get name() {
	    this.checkDestroyed();
	    return this._name;
	  }
	  get options() {
	    this.checkDestroyed();
	    return this._options;
	  }
	  get config() {
	    this.checkDestroyed();
	    return this._config;
	  }
	  get container() {
	    return this._container;
	  }
	  get isDeleted() {
	    return this._isDeleted;
	  }
	  set isDeleted(val) {
	    this._isDeleted = val;
	  }
	  /**
	   * This function will throw an Error if the App has already been deleted -
	   * use before performing API actions on the App.
	   */
	  checkDestroyed() {
	    if (this.isDeleted) {
	      throw ERROR_FACTORY$1.create("app-deleted" /* AppError.APP_DELETED */, {
	        appName: this._name
	      });
	    }
	  }
	};

	/**
	 * @license
	 * Copyright 2023 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	class FirebaseServerAppImpl extends FirebaseAppImpl$1 {
	  constructor(options, serverConfig, name, container) {
	    // Build configuration parameters for the FirebaseAppImpl base class.
	    const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined ? serverConfig.automaticDataCollectionEnabled : false;
	    // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
	    const config = {
	      name,
	      automaticDataCollectionEnabled
	    };
	    if (options.apiKey !== undefined) {
	      // Construct the parent FirebaseAppImp object.
	      super(options, config, container);
	    } else {
	      const appImpl = options;
	      super(appImpl.options, config, container);
	    }
	    // Now construct the data for the FirebaseServerAppImpl.
	    this._serverConfig = Object.assign({
	      automaticDataCollectionEnabled
	    }, serverConfig);
	    this._finalizationRegistry = null;
	    if (typeof FinalizationRegistry !== 'undefined') {
	      this._finalizationRegistry = new FinalizationRegistry(() => {
	        this.automaticCleanup();
	      });
	    }
	    this._refCount = 0;
	    this.incRefCount(this._serverConfig.releaseOnDeref);
	    // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
	    // will never trigger.
	    this._serverConfig.releaseOnDeref = undefined;
	    serverConfig.releaseOnDeref = undefined;
	    registerVersion(name$p, version$1$1, 'serverapp');
	  }
	  toJSON() {
	    return undefined;
	  }
	  get refCount() {
	    return this._refCount;
	  }
	  // Increment the reference count of this server app. If an object is provided, register it
	  // with the finalization registry.
	  incRefCount(obj) {
	    if (this.isDeleted) {
	      return;
	    }
	    this._refCount++;
	    if (obj !== undefined && this._finalizationRegistry !== null) {
	      this._finalizationRegistry.register(obj, this);
	    }
	  }
	  // Decrement the reference count.
	  decRefCount() {
	    if (this.isDeleted) {
	      return 0;
	    }
	    return --this._refCount;
	  }
	  // Invoked by the FinalizationRegistry callback to note that this app should go through its
	  // reference counts and delete itself if no reference count remain. The coordinating logic that
	  // handles this is in deleteApp(...).
	  automaticCleanup() {
	    void deleteApp(this);
	  }
	  get settings() {
	    this.checkDestroyed();
	    return this._serverConfig;
	  }
	  /**
	   * This function will throw an Error if the App has already been deleted -
	   * use before performing API actions on the App.
	   */
	  checkDestroyed() {
	    if (this.isDeleted) {
	      throw ERROR_FACTORY$1.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
	    }
	  }
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * The current SDK version.
	 *
	 * @public
	 */
	const SDK_VERSION = version$2;
	function initializeApp(_options, rawConfig = {}) {
	  let options = _options;
	  if (typeof rawConfig !== 'object') {
	    const name = rawConfig;
	    rawConfig = {
	      name
	    };
	  }
	  const config = Object.assign({
	    name: DEFAULT_ENTRY_NAME,
	    automaticDataCollectionEnabled: false
	  }, rawConfig);
	  const name = config.name;
	  if (typeof name !== 'string' || !name) {
	    throw ERROR_FACTORY$1.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
	      appName: String(name)
	    });
	  }
	  options || (options = getDefaultAppConfig());
	  if (!options) {
	    throw ERROR_FACTORY$1.create("no-options" /* AppError.NO_OPTIONS */);
	  }
	  const existingApp = _apps.get(name);
	  if (existingApp) {
	    // return the existing app if options and config deep equal the ones in the existing app.
	    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
	      return existingApp;
	    } else {
	      throw ERROR_FACTORY$1.create("duplicate-app" /* AppError.DUPLICATE_APP */, {
	        appName: name
	      });
	    }
	  }
	  const container = new ComponentContainer(name);
	  for (const component of _components.values()) {
	    container.addComponent(component);
	  }
	  const newApp = new FirebaseAppImpl$1(options, config, container);
	  _apps.set(name, newApp);
	  return newApp;
	}
	function initializeServerApp(_options, _serverAppConfig) {
	  if (isBrowser() && !isWebWorker()) {
	    // FirebaseServerApp isn't designed to be run in browsers.
	    throw ERROR_FACTORY$1.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
	  }
	  if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
	    _serverAppConfig.automaticDataCollectionEnabled = false;
	  }
	  let appOptions;
	  if (_isFirebaseApp(_options)) {
	    appOptions = _options.options;
	  } else {
	    appOptions = _options;
	  }
	  // Build an app name based on a hash of the configuration options.
	  const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
	  // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
	  // construction of FirebaseServerApp instances. For example, if the object is the request headers.
	  if (nameObj.releaseOnDeref !== undefined) {
	    delete nameObj.releaseOnDeref;
	  }
	  const hashCode = s => {
	    return [...s].reduce((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
	  };
	  if (_serverAppConfig.releaseOnDeref !== undefined) {
	    if (typeof FinalizationRegistry === 'undefined') {
	      throw ERROR_FACTORY$1.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
	    }
	  }
	  const nameString = '' + hashCode(JSON.stringify(nameObj));
	  const existingApp = _serverApps.get(nameString);
	  if (existingApp) {
	    existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
	    return existingApp;
	  }
	  const container = new ComponentContainer(nameString);
	  for (const component of _components.values()) {
	    container.addComponent(component);
	  }
	  const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
	  _serverApps.set(nameString, newApp);
	  return newApp;
	}
	/**
	 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
	 *
	 * When called with no arguments, the default app is returned. When an app name
	 * is provided, the app corresponding to that name is returned.
	 *
	 * An exception is thrown if the app being retrieved has not yet been
	 * initialized.
	 *
	 * @example
	 * ```javascript
	 * // Return the default app
	 * const app = getApp();
	 * ```
	 *
	 * @example
	 * ```javascript
	 * // Return a named app
	 * const otherApp = getApp("otherApp");
	 * ```
	 *
	 * @param name - Optional name of the app to return. If no name is
	 *   provided, the default is `"[DEFAULT]"`.
	 *
	 * @returns The app corresponding to the provided app name.
	 *   If no app name is provided, the default app is returned.
	 *
	 * @public
	 */
	function getApp(name = DEFAULT_ENTRY_NAME) {
	  const app = _apps.get(name);
	  if (!app && name === DEFAULT_ENTRY_NAME && getDefaultAppConfig()) {
	    return initializeApp();
	  }
	  if (!app) {
	    throw ERROR_FACTORY$1.create("no-app" /* AppError.NO_APP */, {
	      appName: name
	    });
	  }
	  return app;
	}
	/**
	 * A (read-only) array of all initialized apps.
	 * @public
	 */
	function getApps() {
	  return Array.from(_apps.values());
	}
	/**
	 * Renders this app unusable and frees the resources of all associated
	 * services.
	 *
	 * @example
	 * ```javascript
	 * deleteApp(app)
	 *   .then(function() {
	 *     console.log("App deleted successfully");
	 *   })
	 *   .catch(function(error) {
	 *     console.log("Error deleting app:", error);
	 *   });
	 * ```
	 *
	 * @public
	 */
	async function deleteApp(app) {
	  let cleanupProviders = false;
	  const name = app.name;
	  if (_apps.has(name)) {
	    cleanupProviders = true;
	    _apps.delete(name);
	  } else if (_serverApps.has(name)) {
	    const firebaseServerApp = app;
	    if (firebaseServerApp.decRefCount() <= 0) {
	      _serverApps.delete(name);
	      cleanupProviders = true;
	    }
	  }
	  if (cleanupProviders) {
	    await Promise.all(app.container.getProviders().map(provider => provider.delete()));
	    app.isDeleted = true;
	  }
	}
	/**
	 * Registers a library's name and version for platform logging purposes.
	 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
	 * @param version - Current version of that library.
	 * @param variant - Bundle variant, e.g., node, rn, etc.
	 *
	 * @public
	 */
	function registerVersion(libraryKeyOrName, version, variant) {
	  var _a;
	  // TODO: We can use this check to whitelist strings when/if we set up
	  // a good whitelist system.
	  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
	  if (variant) {
	    library += `-${variant}`;
	  }
	  const libraryMismatch = library.match(/\s|\//);
	  const versionMismatch = version.match(/\s|\//);
	  if (libraryMismatch || versionMismatch) {
	    const warning = [`Unable to register library "${library}" with version "${version}":`];
	    if (libraryMismatch) {
	      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
	    }
	    if (libraryMismatch && versionMismatch) {
	      warning.push('and');
	    }
	    if (versionMismatch) {
	      warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
	    }
	    logger$1.warn(warning.join(' '));
	    return;
	  }
	  _registerComponent(new Component(`${library}-version`, () => ({
	    library,
	    version
	  }), "VERSION" /* ComponentType.VERSION */));
	}
	/**
	 * Sets log handler for all Firebase SDKs.
	 * @param logCallback - An optional custom log handler that executes user code whenever
	 * the Firebase SDK makes a logging call.
	 *
	 * @public
	 */
	function onLog(logCallback, options) {
	  if (logCallback !== null && typeof logCallback !== 'function') {
	    throw ERROR_FACTORY$1.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
	  }
	  setUserLogHandler(logCallback, options);
	}
	/**
	 * Sets log level for all Firebase SDKs.
	 *
	 * All of the log types above the current log level are captured (i.e. if
	 * you set the log level to `info`, errors are logged, but `debug` and
	 * `verbose` logs are not).
	 *
	 * @public
	 */
	function setLogLevel(logLevel) {
	  setLogLevel$1(logLevel);
	}

	/**
	 * @license
	 * Copyright 2021 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const DB_NAME = 'firebase-heartbeat-database';
	const DB_VERSION = 1;
	const STORE_NAME = 'firebase-heartbeat-store';
	let dbPromise = null;
	function getDbPromise() {
	  if (!dbPromise) {
	    dbPromise = openDB(DB_NAME, DB_VERSION, {
	      upgrade: (db, oldVersion) => {
	        // We don't use 'break' in this switch statement, the fall-through
	        // behavior is what we want, because if there are multiple versions between
	        // the old version and the current version, we want ALL the migrations
	        // that correspond to those versions to run, not only the last one.
	        // eslint-disable-next-line default-case
	        switch (oldVersion) {
	          case 0:
	            try {
	              db.createObjectStore(STORE_NAME);
	            } catch (e) {
	              // Safari/iOS browsers throw occasional exceptions on
	              // db.createObjectStore() that may be a bug. Avoid blocking
	              // the rest of the app functionality.
	              console.warn(e);
	            }
	        }
	      }
	    }).catch(e => {
	      throw ERROR_FACTORY$1.create("idb-open" /* AppError.IDB_OPEN */, {
	        originalErrorMessage: e.message
	      });
	    });
	  }
	  return dbPromise;
	}
	async function readHeartbeatsFromIndexedDB(app) {
	  try {
	    const db = await getDbPromise();
	    const tx = db.transaction(STORE_NAME);
	    const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
	    // We already have the value but tx.done can throw,
	    // so we need to await it here to catch errors
	    await tx.done;
	    return result;
	  } catch (e) {
	    if (e instanceof FirebaseError) {
	      logger$1.warn(e.message);
	    } else {
	      const idbGetError = ERROR_FACTORY$1.create("idb-get" /* AppError.IDB_GET */, {
	        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
	      });
	      logger$1.warn(idbGetError.message);
	    }
	  }
	}
	async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
	  try {
	    const db = await getDbPromise();
	    const tx = db.transaction(STORE_NAME, 'readwrite');
	    const objectStore = tx.objectStore(STORE_NAME);
	    await objectStore.put(heartbeatObject, computeKey(app));
	    await tx.done;
	  } catch (e) {
	    if (e instanceof FirebaseError) {
	      logger$1.warn(e.message);
	    } else {
	      const idbGetError = ERROR_FACTORY$1.create("idb-set" /* AppError.IDB_WRITE */, {
	        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
	      });
	      logger$1.warn(idbGetError.message);
	    }
	  }
	}
	function computeKey(app) {
	  return `${app.name}!${app.options.appId}`;
	}

	/**
	 * @license
	 * Copyright 2021 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const MAX_HEADER_BYTES = 1024;
	// 30 days
	const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
	class HeartbeatServiceImpl {
	  constructor(container) {
	    this.container = container;
	    /**
	     * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
	     * the header string.
	     * Stores one record per date. This will be consolidated into the standard
	     * format of one record per user agent string before being sent as a header.
	     * Populated from indexedDB when the controller is instantiated and should
	     * be kept in sync with indexedDB.
	     * Leave public for easier testing.
	     */
	    this._heartbeatsCache = null;
	    const app = this.container.getProvider('app').getImmediate();
	    this._storage = new HeartbeatStorageImpl(app);
	    this._heartbeatsCachePromise = this._storage.read().then(result => {
	      this._heartbeatsCache = result;
	      return result;
	    });
	  }
	  /**
	   * Called to report a heartbeat. The function will generate
	   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
	   * to IndexedDB.
	   * Note that we only store one heartbeat per day. So if a heartbeat for today is
	   * already logged, subsequent calls to this function in the same day will be ignored.
	   */
	  async triggerHeartbeat() {
	    var _a, _b;
	    try {
	      const platformLogger = this.container.getProvider('platform-logger').getImmediate();
	      // This is the "Firebase user agent" string from the platform logger
	      // service, not the browser user agent.
	      const agent = platformLogger.getPlatformInfoString();
	      const date = getUTCDateString();
	      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
	        this._heartbeatsCache = await this._heartbeatsCachePromise;
	        // If we failed to construct a heartbeats cache, then return immediately.
	        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
	          return;
	        }
	      }
	      // Do not store a heartbeat if one is already stored for this day
	      // or if a header has already been sent today.
	      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
	        return;
	      } else {
	        // There is no entry for this date. Create one.
	        this._heartbeatsCache.heartbeats.push({
	          date,
	          agent
	        });
	      }
	      // Remove entries older than 30 days.
	      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
	        const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
	        const now = Date.now();
	        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
	      });
	      return this._storage.overwrite(this._heartbeatsCache);
	    } catch (e) {
	      logger$1.warn(e);
	    }
	  }
	  /**
	   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
	   * It also clears all heartbeats from memory as well as in IndexedDB.
	   *
	   * NOTE: Consuming product SDKs should not send the header if this method
	   * returns an empty string.
	   */
	  async getHeartbeatsHeader() {
	    var _a;
	    try {
	      if (this._heartbeatsCache === null) {
	        await this._heartbeatsCachePromise;
	      }
	      // If it's still null or the array is empty, there is no data to send.
	      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
	        return '';
	      }
	      const date = getUTCDateString();
	      // Extract as many heartbeats from the cache as will fit under the size limit.
	      const {
	        heartbeatsToSend,
	        unsentEntries
	      } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
	      const headerString = base64urlEncodeWithoutPadding(JSON.stringify({
	        version: 2,
	        heartbeats: heartbeatsToSend
	      }));
	      // Store last sent date to prevent another being logged/sent for the same day.
	      this._heartbeatsCache.lastSentHeartbeatDate = date;
	      if (unsentEntries.length > 0) {
	        // Store any unsent entries if they exist.
	        this._heartbeatsCache.heartbeats = unsentEntries;
	        // This seems more likely than emptying the array (below) to lead to some odd state
	        // since the cache isn't empty and this will be called again on the next request,
	        // and is probably safest if we await it.
	        await this._storage.overwrite(this._heartbeatsCache);
	      } else {
	        this._heartbeatsCache.heartbeats = [];
	        // Do not wait for this, to reduce latency.
	        void this._storage.overwrite(this._heartbeatsCache);
	      }
	      return headerString;
	    } catch (e) {
	      logger$1.warn(e);
	      return '';
	    }
	  }
	}
	function getUTCDateString() {
	  const today = new Date();
	  // Returns date format 'YYYY-MM-DD'
	  return today.toISOString().substring(0, 10);
	}
	function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
	  // Heartbeats grouped by user agent in the standard format to be sent in
	  // the header.
	  const heartbeatsToSend = [];
	  // Single date format heartbeats that are not sent.
	  let unsentEntries = heartbeatsCache.slice();
	  for (const singleDateHeartbeat of heartbeatsCache) {
	    // Look for an existing entry with the same user agent.
	    const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
	    if (!heartbeatEntry) {
	      // If no entry for this user agent exists, create one.
	      heartbeatsToSend.push({
	        agent: singleDateHeartbeat.agent,
	        dates: [singleDateHeartbeat.date]
	      });
	      if (countBytes(heartbeatsToSend) > maxSize) {
	        // If the header would exceed max size, remove the added heartbeat
	        // entry and stop adding to the header.
	        heartbeatsToSend.pop();
	        break;
	      }
	    } else {
	      heartbeatEntry.dates.push(singleDateHeartbeat.date);
	      // If the header would exceed max size, remove the added date
	      // and stop adding to the header.
	      if (countBytes(heartbeatsToSend) > maxSize) {
	        heartbeatEntry.dates.pop();
	        break;
	      }
	    }
	    // Pop unsent entry from queue. (Skipped if adding the entry exceeded
	    // quota and the loop breaks early.)
	    unsentEntries = unsentEntries.slice(1);
	  }
	  return {
	    heartbeatsToSend,
	    unsentEntries
	  };
	}
	class HeartbeatStorageImpl {
	  constructor(app) {
	    this.app = app;
	    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
	  }
	  async runIndexedDBEnvironmentCheck() {
	    if (!isIndexedDBAvailable()) {
	      return false;
	    } else {
	      return validateIndexedDBOpenable().then(() => true).catch(() => false);
	    }
	  }
	  /**
	   * Read all heartbeats.
	   */
	  async read() {
	    const canUseIndexedDB = await this._canUseIndexedDBPromise;
	    if (!canUseIndexedDB) {
	      return {
	        heartbeats: []
	      };
	    } else {
	      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
	      if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
	        return idbHeartbeatObject;
	      } else {
	        return {
	          heartbeats: []
	        };
	      }
	    }
	  }
	  // overwrite the storage with the provided heartbeats
	  async overwrite(heartbeatsObject) {
	    var _a;
	    const canUseIndexedDB = await this._canUseIndexedDBPromise;
	    if (!canUseIndexedDB) {
	      return;
	    } else {
	      const existingHeartbeatsObject = await this.read();
	      return writeHeartbeatsToIndexedDB(this.app, {
	        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
	        heartbeats: heartbeatsObject.heartbeats
	      });
	    }
	  }
	  // add heartbeats
	  async add(heartbeatsObject) {
	    var _a;
	    const canUseIndexedDB = await this._canUseIndexedDBPromise;
	    if (!canUseIndexedDB) {
	      return;
	    } else {
	      const existingHeartbeatsObject = await this.read();
	      return writeHeartbeatsToIndexedDB(this.app, {
	        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
	        heartbeats: [...existingHeartbeatsObject.heartbeats, ...heartbeatsObject.heartbeats]
	      });
	    }
	  }
	}
	/**
	 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
	 * in a platform logging header JSON object, stringified, and converted
	 * to base 64.
	 */
	function countBytes(heartbeatsCache) {
	  // base64 has a restricted set of characters, all of which should be 1 byte.
	  return base64urlEncodeWithoutPadding(
	  // heartbeatsCache wrapper properties
	  JSON.stringify({
	    version: 2,
	    heartbeats: heartbeatsCache
	  })).length;
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	function registerCoreComponents$1(variant) {
	  _registerComponent(new Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
	  _registerComponent(new Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
	  // Register `app` package.
	  registerVersion(name$p, version$1$1, variant);
	  // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
	  registerVersion(name$p, version$1$1, 'esm2017');
	  // Register platform SDK identifier (no version).
	  registerVersion('fire-js', '');
	}

	/**
	 * Firebase App
	 *
	 * @remarks This package coordinates the communication between the different Firebase components
	 * @packageDocumentation
	 */
	registerCoreComponents$1('');

	var modularAPIs = /*#__PURE__*/Object.freeze({
		__proto__: null,
		FirebaseError: FirebaseError,
		SDK_VERSION: SDK_VERSION,
		_DEFAULT_ENTRY_NAME: DEFAULT_ENTRY_NAME,
		_addComponent: _addComponent,
		_addOrOverwriteComponent: _addOrOverwriteComponent,
		_apps: _apps,
		_clearComponents: _clearComponents,
		_components: _components,
		_getProvider: _getProvider,
		_isFirebaseApp: _isFirebaseApp,
		_isFirebaseServerApp: _isFirebaseServerApp,
		_registerComponent: _registerComponent,
		_removeServiceInstance: _removeServiceInstance,
		_serverApps: _serverApps,
		deleteApp: deleteApp,
		getApp: getApp,
		getApps: getApps,
		initializeApp: initializeApp,
		initializeServerApp: initializeServerApp,
		onLog: onLog,
		registerVersion: registerVersion,
		setLogLevel: setLogLevel
	});

	/**
	 * @license
	 * Copyright 2020 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Global context object for a collection of services using
	 * a shared authentication state.
	 *
	 * marked as internal because it references internal types exported from @firebase/app
	 * @internal
	 */
	class FirebaseAppImpl {
	  constructor(_delegate, firebase) {
	    this._delegate = _delegate;
	    this.firebase = firebase;
	    // add itself to container
	    _addComponent(_delegate, new Component('app-compat', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
	    this.container = _delegate.container;
	  }
	  get automaticDataCollectionEnabled() {
	    return this._delegate.automaticDataCollectionEnabled;
	  }
	  set automaticDataCollectionEnabled(val) {
	    this._delegate.automaticDataCollectionEnabled = val;
	  }
	  get name() {
	    return this._delegate.name;
	  }
	  get options() {
	    return this._delegate.options;
	  }
	  delete() {
	    return new Promise(resolve => {
	      this._delegate.checkDestroyed();
	      resolve();
	    }).then(() => {
	      this.firebase.INTERNAL.removeApp(this.name);
	      return deleteApp(this._delegate);
	    });
	  }
	  /**
	   * Return a service instance associated with this app (creating it
	   * on demand), identified by the passed instanceIdentifier.
	   *
	   * NOTE: Currently storage and functions are the only ones that are leveraging this
	   * functionality. They invoke it by calling:
	   *
	   * ```javascript
	   * firebase.app().storage('STORAGE BUCKET ID')
	   * ```
	   *
	   * The service name is passed to this already
	   * @internal
	   */
	  _getService(name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
	    var _a;
	    this._delegate.checkDestroyed();
	    // Initialize instance if InstantiationMode is `EXPLICIT`.
	    const provider = this._delegate.container.getProvider(name);
	    if (!provider.isInitialized() && ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT" /* InstantiationMode.EXPLICIT */) {
	      provider.initialize();
	    }
	    // getImmediate will always succeed because _getService is only called for registered components.
	    return provider.getImmediate({
	      identifier: instanceIdentifier
	    });
	  }
	  /**
	   * Remove a service instance from the cache, so we will create a new instance for this service
	   * when people try to get it again.
	   *
	   * NOTE: currently only firestore uses this functionality to support firestore shutdown.
	   *
	   * @param name The service name
	   * @param instanceIdentifier instance identifier in case multiple instances are allowed
	   * @internal
	   */
	  _removeServiceInstance(name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
	    this._delegate.container
	    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	    .getProvider(name).clearInstance(instanceIdentifier);
	  }
	  /**
	   * @param component the component being added to this app's container
	   * @internal
	   */
	  _addComponent(component) {
	    _addComponent(this._delegate, component);
	  }
	  _addOrOverwriteComponent(component) {
	    _addOrOverwriteComponent(this._delegate, component);
	  }
	  toJSON() {
	    return {
	      name: this.name,
	      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
	      options: this.options
	    };
	  }
	}
	// TODO: investigate why the following needs to be commented out
	// Prevent dead-code elimination of these methods w/o invalid property
	// copying.
	// (FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
	//   FirebaseAppImpl.prototype.delete ||
	//   console.log('dc');

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const ERRORS = {
	  ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()',
	  ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.'
	};
	const ERROR_FACTORY = new ErrorFactory('app-compat', 'Firebase', ERRORS);

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Because auth can't share code with other components, we attach the utility functions
	 * in an internal namespace to share code.
	 * This function return a firebase namespace object without
	 * any utility functions, so it can be shared between the regular firebaseNamespace and
	 * the lite version.
	 */
	function createFirebaseNamespaceCore(firebaseAppImpl) {
	  const apps = {};
	  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  // const components = new Map<string, Component<any>>();
	  // A namespace is a plain JavaScript Object.
	  const namespace = {
	    // Hack to prevent Babel from modifying the object returned
	    // as the firebase namespace.
	    // @ts-ignore
	    __esModule: true,
	    initializeApp: initializeAppCompat,
	    // @ts-ignore
	    app,
	    registerVersion: registerVersion,
	    setLogLevel: setLogLevel,
	    onLog: onLog,
	    // @ts-ignore
	    apps: null,
	    SDK_VERSION: SDK_VERSION,
	    INTERNAL: {
	      registerComponent: registerComponentCompat,
	      removeApp,
	      useAsService,
	      modularAPIs
	    }
	  };
	  // Inject a circular default export to allow Babel users who were previously
	  // using:
	  //
	  //   import firebase from 'firebase';
	  //   which becomes: var firebase = require('firebase').default;
	  //
	  // instead of
	  //
	  //   import * as firebase from 'firebase';
	  //   which becomes: var firebase = require('firebase');
	  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  namespace['default'] = namespace;
	  // firebase.apps is a read-only getter.
	  Object.defineProperty(namespace, 'apps', {
	    get: getApps
	  });
	  /**
	   * Called by App.delete() - but before any services associated with the App
	   * are deleted.
	   */
	  function removeApp(name) {
	    delete apps[name];
	  }
	  /**
	   * Get the App object for a given name (or DEFAULT).
	   */
	  function app(name) {
	    name = name || DEFAULT_ENTRY_NAME;
	    if (!contains(apps, name)) {
	      throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, {
	        appName: name
	      });
	    }
	    return apps[name];
	  }
	  // @ts-ignore
	  app['App'] = firebaseAppImpl;
	  /**
	   * Create a new App instance (name must be unique).
	   *
	   * This function is idempotent. It can be called more than once and return the same instance using the same options and config.
	   */
	  function initializeAppCompat(options, rawConfig = {}) {
	    const app = initializeApp(options, rawConfig);
	    if (contains(apps, app.name)) {
	      return apps[app.name];
	    }
	    const appCompat = new firebaseAppImpl(app, namespace);
	    apps[app.name] = appCompat;
	    return appCompat;
	  }
	  /*
	   * Return an array of all the non-deleted FirebaseApps.
	   */
	  function getApps() {
	    // Make a copy so caller cannot mutate the apps list.
	    return Object.keys(apps).map(name => apps[name]);
	  }
	  function registerComponentCompat(component) {
	    const componentName = component.name;
	    const componentNameWithoutCompat = componentName.replace('-compat', '');
	    if (_registerComponent(component) && component.type === "PUBLIC" /* ComponentType.PUBLIC */) {
	      // create service namespace for public components
	      // The Service namespace is an accessor function ...
	      const serviceNamespace = (appArg = app()) => {
	        // eslint-disable-next-line @typescript-eslint/no-explicit-any
	        if (typeof appArg[componentNameWithoutCompat] !== 'function') {
	          // Invalid argument.
	          // This happens in the following case: firebase.storage('gs:/')
	          throw ERROR_FACTORY.create("invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */, {
	            appName: componentName
	          });
	        }
	        // Forward service instance lookup to the FirebaseApp.
	        // eslint-disable-next-line @typescript-eslint/no-explicit-any
	        return appArg[componentNameWithoutCompat]();
	      };
	      // ... and a container for service-level properties.
	      if (component.serviceProps !== undefined) {
	        deepExtend(serviceNamespace, component.serviceProps);
	      }
	      // eslint-disable-next-line @typescript-eslint/no-explicit-any
	      namespace[componentNameWithoutCompat] = serviceNamespace;
	      // Patch the FirebaseAppImpl prototype
	      // eslint-disable-next-line @typescript-eslint/no-explicit-any
	      firebaseAppImpl.prototype[componentNameWithoutCompat] =
	      // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
	      // option added to the no-explicit-any rule when ESlint releases it.
	      // eslint-disable-next-line @typescript-eslint/no-explicit-any
	      function (...args) {
	        const serviceFxn = this._getService.bind(this, componentName);
	        return serviceFxn.apply(this, component.multipleInstances ? args : []);
	      };
	    }
	    return component.type === "PUBLIC" /* ComponentType.PUBLIC */ ?
	    // eslint-disable-next-line @typescript-eslint/no-explicit-any
	    namespace[componentNameWithoutCompat] : null;
	  }
	  // Map the requested service to a registered service name
	  // (used to map auth to serverAuth service when needed).
	  function useAsService(app, name) {
	    if (name === 'serverAuth') {
	      return null;
	    }
	    const useService = name;
	    return useService;
	  }
	  return namespace;
	}

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Return a firebase namespace object.
	 *
	 * In production, this will be called exactly once and the result
	 * assigned to the 'firebase' global.  It may be called multiple times
	 * in unit tests.
	 */
	function createFirebaseNamespace() {
	  const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
	  namespace.INTERNAL = Object.assign(Object.assign({}, namespace.INTERNAL), {
	    createFirebaseNamespace,
	    extendNamespace,
	    createSubscribe,
	    ErrorFactory,
	    deepExtend
	  });
	  /**
	   * Patch the top-level firebase namespace with additional properties.
	   *
	   * firebase.INTERNAL.extendNamespace()
	   */
	  function extendNamespace(props) {
	    deepExtend(namespace, props);
	  }
	  return namespace;
	}
	const firebase$1 = createFirebaseNamespace();

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	const logger = new Logger('@firebase/app-compat');
	const name$1 = "@firebase/app-compat";
	const version$1 = "0.2.41";

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	function registerCoreComponents(variant) {
	  // Register `app` package.
	  registerVersion(name$1, version$1, variant);
	}

	/**
	 * @license
	 * Copyright 2020 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	try {
	  const globals = getGlobal();
	  // Firebase Lite detection
	  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  if (globals.firebase !== undefined) {
	    logger.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);
	    // eslint-disable-next-line
	    const sdkVersion = globals.firebase.SDK_VERSION;
	    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
	      logger.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `);
	    }
	  }
	} catch (_a) {
	  // ignore errors thrown by getGlobal
	}
	const firebase = firebase$1;
	registerCoreComponents();

	var name = "firebase";
	var version = "10.13.2";

	/**
	 * @license
	 * Copyright 2020 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	firebase.registerVersion(name, version, 'app-compat');

	var index_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		default: firebase
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(index_esm);

	var hasRequiredScripts;
	function requireScripts() {
	  if (hasRequiredScripts) return scripts$1;
	  hasRequiredScripts = 1;
	  var firebase = require$$0["default"];
	  var firebaseConfig = {
	    apiKey: "AIzaSyDiS4yuy6G7Mbbxx1ZWR7w-b4TnGVBQucM",
	    authDomain: "rmw3-e14d6.firebaseapp.com",
	    projectId: "rmw3-e14d6",
	    storageBucket: "rmw3-e14d6.appspot.com",
	    messagingSenderId: "46336721956",
	    appId: "1:46336721956:web:0a567fe79f026f466404b1",
	    measurementId: "G-G6S7PRF31E"
	  };

	  // Initialize Firebase app
	  firebase.initializeApp(firebaseConfig);
	  var db = firebase.firestore();
	  firebase.storage();
	  var collection = firebase.collection();

	  // Popup card logic
	  var joinPopup = document.getElementById('join-popup');
	  var removePopup = document.getElementById('remove-popup');

	  // Show popup when "Join" button is clicked
	  document.getElementById('join-btn').addEventListener('click', function () {
	    joinPopup.style.display = 'block';
	  });

	  // Show popup when "Remove" button is clicked
	  document.getElementById('remove-btn').addEventListener('click', function () {
	    removePopup.style.display = 'block';
	  });

	  // Close the popups
	  function closePopup() {
	    joinPopup.style.display = 'none';
	    removePopup.style.display = 'none';
	  }
	  document.getElementById('close-join-form').addEventListener('click', closePopup);
	  document.getElementById('close-remove-form').addEventListener('click', closePopup);

	  // Function to check if a user exists in the participants list
	  function isUserInParticipants(_x, _x2) {
	    return _isUserInParticipants.apply(this, arguments);
	  }
	  function _isUserInParticipants() {
	    _isUserInParticipants = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(firstName, secondName) {
	      var formattedFirstName, formattedSecondName, participantsRef, q, querySnapshot;
	      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
	        while (1) switch (_context5.prev = _context5.next) {
	          case 0:
	            // Normalize inputs to "FirstName LastName" format
	            formattedFirstName = firstName.toLowerCase();
	            formattedSecondName = secondName.toLowerCase(); // Query Firestore for the formatted names
	            participantsRef = collection(db, 'participants');
	            q = query(participantsRef, where('firstName', '==', formattedFirstName), where('secondName', '==', formattedSecondName));
	            _context5.prev = 4;
	            _context5.next = 7;
	            return getDocs(q);
	          case 7:
	            querySnapshot = _context5.sent;
	            if (querySnapshot.empty) {
	              _context5.next = 14;
	              break;
	            }
	            console.log(querySnapshot);
	            console.log('User found in participants.');
	            return _context5.abrupt("return", true);
	          case 14:
	            console.log('User not found in participants.');
	            return _context5.abrupt("return", false);
	          case 16:
	            _context5.next = 22;
	            break;
	          case 18:
	            _context5.prev = 18;
	            _context5.t0 = _context5["catch"](4);
	            console.error('Error checking Firestore:', _context5.t0);
	            return _context5.abrupt("return", false);
	          case 22:
	          case "end":
	            return _context5.stop();
	        }
	      }, _callee5, null, [[4, 18]]);
	    }));
	    return _isUserInParticipants.apply(this, arguments);
	  }

	  // Function to check if a user with the same first name, second name, and city already exists
	  function checkIfUserExists(_x3, _x4, _x5) {
	    return _checkIfUserExists.apply(this, arguments);
	  }
	  function _checkIfUserExists() {
	    _checkIfUserExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(firstName, secondName, locationId) {
	      var usersSnapshot;
	      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
	        while (1) switch (_context6.prev = _context6.next) {
	          case 0:
	            console.log('Checking if user in same location with same name already exists');
	            _context6.prev = 1;
	            _context6.next = 4;
	            return db.collection('users').where('firstName', '==', firstName).where('secondName', '==', secondName).where('locationId', '==', locationId).get();
	          case 4:
	            usersSnapshot = _context6.sent;
	            if (usersSnapshot.empty) {
	              _context6.next = 10;
	              break;
	            }
	            console.log("existing users: ", usersSnapshot);
	            return _context6.abrupt("return", true);
	          case 10:
	            return _context6.abrupt("return", false);
	          case 11:
	            _context6.next = 17;
	            break;
	          case 13:
	            _context6.prev = 13;
	            _context6.t0 = _context6["catch"](1);
	            console.error('Error checking for existing user: ', _context6.t0);
	            return _context6.abrupt("return", false);
	          case 17:
	          case "end":
	            return _context6.stop();
	        }
	      }, _callee6, null, [[1, 13]]);
	    }));
	    return _checkIfUserExists.apply(this, arguments);
	  }
	  document.getElementById('country').addEventListener('input', toggleStateInput);
	  function toggleStateInput() {
	    var countryInput = document.getElementById('country').value;
	    var stateContainer = document.getElementById('state-container');
	    if (countryInput === 'United States') {
	      stateContainer.style.display = 'block';
	    } else {
	      stateContainer.style.display = 'none';
	    }
	  }

	  // Function to check if a user with the same Instagram handle already exists
	  function checkIfInstagramExists(_x6) {
	    return _checkIfInstagramExists.apply(this, arguments);
	  }
	  function _checkIfInstagramExists() {
	    _checkIfInstagramExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(instagram) {
	      var usersSnapshot;
	      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
	        while (1) switch (_context7.prev = _context7.next) {
	          case 0:
	            console.log('Checking if instagram handle already exists');
	            _context7.prev = 1;
	            _context7.next = 4;
	            return db.collection('users').where('instagram', '==', instagram.toLowerCase()).get();
	          case 4:
	            usersSnapshot = _context7.sent;
	            if (usersSnapshot.empty) {
	              _context7.next = 9;
	              break;
	            }
	            return _context7.abrupt("return", true);
	          case 9:
	            return _context7.abrupt("return", false);
	          case 10:
	            _context7.next = 16;
	            break;
	          case 12:
	            _context7.prev = 12;
	            _context7.t0 = _context7["catch"](1);
	            console.error('Error checking for existing Instagram: ', _context7.t0);
	            return _context7.abrupt("return", false);
	          case 16:
	          case "end":
	            return _context7.stop();
	        }
	      }, _callee7, null, [[1, 12]]);
	    }));
	    return _checkIfInstagramExists.apply(this, arguments);
	  }
	  var joinFormSubmitting = false;
	  document.getElementById('join-form').addEventListener('submit', /*#__PURE__*/function () {
	    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
	      var countryInput, countryList, selectedCountry, countryError, isValidCountry, i, joinButton, firstName, secondName, countryId, stateId, instagram, pictureInput, cityInput, locationId, userExists, instagramExists, pictureURL, pictureFile, storageRef, pictureRef, uploadSnapshot;
	      return _regeneratorRuntime().wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            event.preventDefault(); // Prevent the default form submission
	            if (!joinFormSubmitting) {
	              _context.next = 3;
	              break;
	            }
	            return _context.abrupt("return");
	          case 3:
	            joinFormSubmitting = true; // Set the flag to true, to indicate the form is being submitted

	            console.log('Inside the join form.');

	            // City validation logic
	            countryInput = document.getElementById('country');
	            countryList = document.getElementById('country-list').options;
	            selectedCountry = countryInput.value.trim();
	            countryError = document.getElementById('country-error');
	            isValidCountry = false; // Loop through the options in the datalist to check for a match
	            i = 0;
	          case 11:
	            if (!(i < countryList.length)) {
	              _context.next = 18;
	              break;
	            }
	            if (!(selectedCountry === countryList[i].value)) {
	              _context.next = 15;
	              break;
	            }
	            isValidCountry = true;
	            return _context.abrupt("break", 18);
	          case 15:
	            i++;
	            _context.next = 11;
	            break;
	          case 18:
	            if (isValidCountry) {
	              _context.next = 25;
	              break;
	            }
	            countryError.style.display = 'block'; // Show the error message
	            countryInput.value = ''; // Optionally clear the input
	            joinFormSubmitting = false; // Reset the flag
	            return _context.abrupt("return");
	          case 25:
	            countryError.style.display = 'none'; // Hide the error message if valid
	          case 26:
	            // Continue with the rest of the form submission logic if the city is valid
	            joinButton = document.getElementById('join-btn');
	            joinButton.disabled = true; // Disable the button
	            document.getElementById('loading-indicator').style.display = 'block'; // Show loading indicator
	            firstName = document.getElementById('first-name').value.trim();
	            secondName = document.getElementById('second-name').value.trim();
	            countryId = document.getElementById('country-id').value;
	            stateId = document.getElementById('state-id').value;
	            instagram = document.getElementById('instagram').value.trim();
	            pictureInput = document.getElementById('picture');
	            cityInput = document.getElementById('city').value.trim(); // Check if the user exists in participants
	            if (isUserInParticipants(firstName, secondName)) {
	              _context.next = 42;
	              break;
	            }
	            alert('User not found in marathon participants. Please check your name and try again.');
	            joinButton.disabled = false; // Re-enable the button
	            joinFormSubmitting = false; // Reset the flag
	            document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
	            return _context.abrupt("return");
	          case 42:
	            locationId = stateId || countryId;
	            _context.next = 45;
	            return checkIfUserExists(firstName, secondName, locationId);
	          case 45:
	            userExists = _context.sent;
	            if (!userExists) {
	              _context.next = 52;
	              break;
	            }
	            alert('A user with the same name in the selected city already exists. Please try again.');
	            joinButton.disabled = false; // Re-enable the button
	            joinFormSubmitting = false; // Reset the flag
	            document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
	            return _context.abrupt("return");
	          case 52:
	            _context.next = 54;
	            return checkIfInstagramExists(instagram);
	          case 54:
	            instagramExists = _context.sent;
	            if (!instagramExists) {
	              _context.next = 61;
	              break;
	            }
	            alert('This Instagram handle is already associated with another user. Please use a different one.');
	            joinButton.disabled = false; // Re-enable the button
	            joinFormSubmitting = false; // Reset the flag
	            document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
	            return _context.abrupt("return");
	          case 61:
	            _context.prev = 61;
	            pictureURL = null; // Check if a picture file was selected
	            if (!(pictureInput.files && pictureInput.files[0])) {
	              _context.next = 73;
	              break;
	            }
	            pictureFile = pictureInput.files[0];
	            storageRef = firebase.storage().ref();
	            pictureRef = storageRef.child("profile_pictures/".concat(firstName, "_").concat(secondName, "_").concat(Date.now())); // Upload the selected picture file
	            _context.next = 69;
	            return pictureRef.put(pictureFile);
	          case 69:
	            uploadSnapshot = _context.sent;
	            _context.next = 72;
	            return uploadSnapshot.ref.getDownloadURL();
	          case 72:
	            pictureURL = _context.sent;
	          case 73:
	            _context.next = 75;
	            return db.collection('users').add({
	              firstName: firstName,
	              secondName: secondName,
	              locationId: stateId || countryId,
	              instagram: instagram.toLowerCase(),
	              pictureURL: pictureURL || null,
	              cityName: cityInput
	            });
	          case 75:
	            _context.sent;
	            console.log('Calling incrementLocationUsers for locationId:', locationId);
	            _context.next = 79;
	            return incrementLocationUsers(locationId);
	          case 79:
	            alert('Thank you for joining!');
	            loadCityData();
	            closePopup();
	            _context.next = 88;
	            break;
	          case 84:
	            _context.prev = 84;
	            _context.t0 = _context["catch"](61);
	            console.error('Error adding user or uploading image:', _context.t0);
	            alert('Failed to join. Please try again.');
	          case 88:
	            _context.prev = 88;
	            // Re-enable the button and hide loading in all scenarios
	            joinButton.disabled = false;
	            joinFormSubmitting = false; // Reset the flag
	            document.getElementById('loading-indicator').style.display = 'none'; // Hide loading
	            return _context.finish(88);
	          case 93:
	          case "end":
	            return _context.stop();
	        }
	      }, _callee, null, [[61, 84, 88, 93]]);
	    }));
	    return function (_x7) {
	      return _ref.apply(this, arguments);
	    };
	  }());
	  document.addEventListener('DOMContentLoaded', function () {
	    var countryInput = document.getElementById('country');
	    var countryError = document.getElementById('country-error');
	    var countryList = document.getElementById('country-list');

	    // 1. Show the dropdown immediately when the user clicks into the city input (on focus)
	    countryInput.addEventListener('focus', function () {
	      countryError.style.display = 'none'; // Hide any previous error message
	      // Trigger an input event to open the dropdown list immediately
	      var event = new Event('input', {
	        bubbles: true
	      });
	      countryInput.dispatchEvent(event);
	    });

	    // Validation logic to check if the input matches a city from the datalist
	    countryInput.addEventListener('blur', function () {
	      validateCountry(); // Call validation when the user clicks out
	    });
	    function validateCountry() {
	      var selectedCountry = countryInput.value.trim();
	      var isValidCountry = false;

	      // Check if the entered city matches one of the datalist options
	      for (var i = 0; i < countryList.options.length; i++) {
	        if (selectedCountry === countryList.options[i].value) {
	          isValidCountry = true;
	          break;
	        }
	      }
	      if (!isValidCountry) {
	        countryError.style.display = 'block'; // Show the error message if invalid
	        countryInput.value = ''; // Optionally clear the input
	      } else {
	        countryError.style.display = 'none'; // Hide the error message if valid
	      }
	    }
	  });
	  function incrementLocationUsers(_x8) {
	    return _incrementLocationUsers.apply(this, arguments);
	  } // Handle "Remove" form submission (communicate with Firebase)
	  function _incrementLocationUsers() {
	    _incrementLocationUsers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(locationId) {
	      var locationRef;
	      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
	        while (1) switch (_context9.prev = _context9.next) {
	          case 0:
	            console.log('In increment location users');
	            _context9.prev = 1;
	            locationRef = db.collection('location').doc(locationId);
	            _context9.next = 5;
	            return db.runTransaction(/*#__PURE__*/function () {
	              var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(transaction) {
	                var locationDoc, currentNumberOfUsers;
	                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
	                  while (1) switch (_context8.prev = _context8.next) {
	                    case 0:
	                      _context8.next = 2;
	                      return transaction.get(locationRef);
	                    case 2:
	                      locationDoc = _context8.sent;
	                      if (locationDoc.exists) {
	                        _context8.next = 8;
	                        break;
	                      }
	                      console.error("Location document with ID ".concat(locationId, " does not exist!"));
	                      return _context8.abrupt("return");
	                    case 8:
	                      console.log("Location document with ID ".concat(locationId, " exists. Proceeding to update."));
	                    case 9:
	                      currentNumberOfUsers = locationDoc.data().numberOfUsers || 0;
	                      transaction.update(locationRef, {
	                        numberOfUsers: currentNumberOfUsers + 1
	                      });
	                    case 11:
	                    case "end":
	                      return _context8.stop();
	                  }
	                }, _callee8);
	              }));
	              return function (_x17) {
	                return _ref5.apply(this, arguments);
	              };
	            }());
	          case 5:
	            console.log('Location user count incremented successfully.');
	            _context9.next = 11;
	            break;
	          case 8:
	            _context9.prev = 8;
	            _context9.t0 = _context9["catch"](1);
	            console.error('Error incrementing location users:', _context9.t0);
	          case 11:
	          case "end":
	            return _context9.stop();
	        }
	      }, _callee9, null, [[1, 8]]);
	    }));
	    return _incrementLocationUsers.apply(this, arguments);
	  }
	  document.getElementById('remove-form').addEventListener('submit', /*#__PURE__*/function () {
	    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
	      var firstName, secondName, usersSnapshot, userIds;
	      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	        while (1) switch (_context2.prev = _context2.next) {
	          case 0:
	            event.preventDefault();
	            firstName = document.getElementById('first-name-remove').value;
	            secondName = document.getElementById('second-name-remove').value;
	            _context2.prev = 3;
	            _context2.next = 6;
	            return db.collection('users').where('firstName', '==', firstName).where('secondName', '==', secondName).get();
	          case 6:
	            usersSnapshot = _context2.sent;
	            if (!usersSnapshot.empty) {
	              _context2.next = 10;
	              break;
	            }
	            alert('No user found with the given name. Please check the details.');
	            return _context2.abrupt("return");
	          case 10:
	            // Step 3: Collect all matching user IDs (handle multiple matches)
	            userIds = [];
	            usersSnapshot.forEach(function (doc) {
	              userIds.push(doc.id); // Collect the user ID
	            });

	            // Step 4: Submit the removal request to the 'removal_requests' collection with the matched user IDs
	            _context2.next = 14;
	            return db.collection('removal_requests').add({
	              firstName: firstName,
	              secondName: secondName,
	              userIds: userIds,
	              // Store the matching user IDs
	              timestamp: new Date() // Save the timestamp of the request
	            });
	          case 14:
	            alert("Your removal request has been submitted. Removal will occur within 24hrs.");
	            _context2.next = 21;
	            break;
	          case 17:
	            _context2.prev = 17;
	            _context2.t0 = _context2["catch"](3);
	            console.error("Error submitting removal request: ", _context2.t0);
	            alert("Failed to submit removal request. Please try again.");
	          case 21:
	            closePopup(); // Close the form popup after successful submission
	          case 22:
	          case "end":
	            return _context2.stop();
	        }
	      }, _callee2, null, [[3, 17]]);
	    }));
	    return function (_x9) {
	      return _ref2.apply(this, arguments);
	    };
	  }());

	  // Fetch city data from Firestore
	  function fetchLocations() {
	    return _fetchLocations.apply(this, arguments);
	  } // Fetch user data for a specific city from Firestore
	  function _fetchLocations() {
	    _fetchLocations = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
	      var locationCollection, locationSnapshot, locations;
	      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
	        while (1) switch (_context10.prev = _context10.next) {
	          case 0:
	            locationCollection = db.collection("location").where('numberOfUsers', '>', 0) // Filter for cities where numberOfUsers is greater than 0
	            .orderBy('numberOfUsers', 'desc') // Order by numberOfUsers in descending order
	            .limit(100);
	            _context10.next = 3;
	            return locationCollection.get();
	          case 3:
	            locationSnapshot = _context10.sent;
	            locations = [];
	            locationSnapshot.forEach(function (locationDoc) {
	              var cityData = locationDoc.data();
	              locations.push({
	                id: locationDoc.id,
	                name: cityData.stateName || cityData.countryName,
	                latitude: cityData.latitude,
	                longitude: cityData.longitude,
	                numberOfUsers: cityData.numberOfUsers,
	                country: cityData.country
	              });
	            });

	            // console.log("LOCATIONS: ", locations);  // Check that city data is being fetched correctly
	            return _context10.abrupt("return", locations);
	          case 7:
	          case "end":
	            return _context10.stop();
	        }
	      }, _callee10);
	    }));
	    return _fetchLocations.apply(this, arguments);
	  }
	  function fetchUsersForLocation(_x10) {
	    return _fetchUsersForLocation.apply(this, arguments);
	  }
	  function _fetchUsersForLocation() {
	    _fetchUsersForLocation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(locationId) {
	      var usersSnapshot, users;
	      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
	        while (1) switch (_context11.prev = _context11.next) {
	          case 0:
	            _context11.next = 2;
	            return db.collection("users").where('locationId', '==', locationId).get();
	          case 2:
	            usersSnapshot = _context11.sent;
	            users = [];
	            usersSnapshot.forEach(function (userDoc) {
	              var userData = userDoc.data();
	              users.push({
	                firstName: userData.firstName,
	                secondName: userData.secondName,
	                instagram: userData.instagram,
	                pictureURL: userData.pictureURL,
	                city: userData.cityName
	              });
	            });
	            console.log("USERS FOR LOCATION (".concat(locationId, "): "), users); // Log the users for debugging
	            return _context11.abrupt("return", users);
	          case 7:
	          case "end":
	            return _context11.stop();
	        }
	      }, _callee11);
	    }));
	    return _fetchUsersForLocation.apply(this, arguments);
	  }
	  function fetchCitiesAndCreateGlobe() {
	    // Globe.js initialization with Firebase data
	    fetchLocations().then(function (locations) {
	      console.log(locations); // Log the cities to check if data is being pulled correctly

	      var globe = Globe().globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg').labelsData(locations).labelLat(function (d) {
	        return d.latitude;
	      }).labelLng(function (d) {
	        return d.longitude;
	      }).labelText(function (d) {
	        return d.name;
	      }).labelSize(function (d) {
	        var minSize = 0.6; // Minimum label size
	        var maxSize = 1.6; // Maximum label size
	        var minUsers = 1; // Minimum number of users
	        var maxUsers = 30; // Maximum number of users

	        // Calculate the size based on the number of users
	        return (d.numberOfUsers - minUsers) / (maxUsers - minUsers) * (maxSize - minSize) + minSize;
	      }).labelDotRadius(function (d) {
	        var minRadius = 0.6; // Minimum label size
	        var maxRadius = 1.2;

	        // Calculate the radius based on the number of users
	        return (d.numberOfUsers - 1) / (30 - 1) * (maxRadius - minRadius) + minRadius;
	      }).labelColor(function () {
	        return '#ffffff';
	      }).labelResolution(2).backgroundColor('#FDF5E8')(document.getElementById('globeViz'));

	      // Set initial view to the USA
	      globe.pointOfView({
	        lat: 37.0902,
	        lng: -95.7129,
	        altitude: 2.5
	      }, 1000);

	      // Handle label clicks to show city info and associated users
	      globe.onLabelClick(/*#__PURE__*/function () {
	        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(location) {
	          var selectedLocation, locationInfo, users, usersInfo;
	          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
	            while (1) switch (_context3.prev = _context3.next) {
	              case 0:
	                console.log("label clicked, location: ", location);
	                selectedLocation = locations.find(function (c) {
	                  return c.name === location.name;
	                });
	                console.log("selectedLocation: ", selectedLocation);
	                if (!selectedLocation) {
	                  _context3.next = 12;
	                  break;
	                }
	                locationInfo = selectedLocation.name; // Fetch users for the selected city
	                // console.log("selectedLocation.id: ", selectedLocation.id);
	                _context3.next = 7;
	                return fetchUsersForLocation(selectedLocation.id);
	              case 7:
	                users = _context3.sent;
	                // console.log("users found in location: ", users)
	                // Map users data to display
	                usersInfo = users.map(function (user) {
	                  return "\n        <a href=\"https://instagram.com/".concat(user.instagram, "\" target=\"_blank\" class=\"user-card-link\">\n          <div class=\"user-card\">\n            <img src=\"").concat(user.pictureURL, "\" alt=\"").concat(user.firstName, "'s picture\" class=\"user-picture\">\n            <div class=\"user-info\">\n              <p class=\"user-name\">").concat(user.firstName, " ").concat(user.secondName, "</p>\n              <p class=\"user-instagram\">").concat(user.city, "</p>\n              <p class=\"user-instagram\">@").concat(user.instagram, "</p>\n            </div>\n          </div>\n        </a>\n      ");
	                }).join(""); // Join without extra spaces to avoid layout issues
	                // Join without extra spaces to avoid layout issues
	                // console.log("usersInfo: ", usersInfo);
	                // Update the popup with city and user info
	                document.getElementById('location-name').textContent = locationInfo;
	                document.getElementById('location-info').innerHTML = usersInfo; // Use innerHTML to render HTML content

	                // Show the city info popup
	                document.getElementById('location-popup').style.display = 'block';
	              case 12:
	              case "end":
	                return _context3.stop();
	            }
	          }, _callee3);
	        }));
	        return function (_x11) {
	          return _ref3.apply(this, arguments);
	        };
	      }());
	    });
	  }

	  // Close city info popup
	  document.getElementById('location-close-btn').addEventListener('click', function () {
	    document.getElementById('location-popup').style.display = 'none';
	  });

	  // Function to populate the city options in the datalist
	  function populateCityOptions(countryMapping, stateMapping) {
	    var countryDatalist = document.getElementById('country-list');
	    var stateDatalist = document.getElementById('state-list');

	    // Clear existing options
	    countryDatalist.innerHTML = '';
	    stateDatalist.innerHTML = '';

	    // Add options to the datalist
	    for (var _i = 0, _Object$entries = Object.entries(countryMapping); _i < _Object$entries.length; _i++) {
	      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	        cityName = _Object$entries$_i[0],
	        cityId = _Object$entries$_i[1];
	      var option = document.createElement('option');
	      option.value = cityName; // Display the city name to the user
	      option.dataset.cityId = cityId; // Store city ID in data attribute
	      countryDatalist.appendChild(option);
	    }
	    for (var _i2 = 0, _Object$entries2 = Object.entries(stateMapping); _i2 < _Object$entries2.length; _i2++) {
	      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
	        _cityName = _Object$entries2$_i[0],
	        _cityId = _Object$entries2$_i[1];
	      var _option = document.createElement('option');
	      _option.value = _cityName; // Display the city name to the user
	      _option.dataset.cityId = _cityId; // Store city ID in data attribute
	      stateDatalist.appendChild(_option);
	    }
	  }
	  function loadCityMapping(_x12, _x13) {
	    return _loadCityMapping.apply(this, arguments);
	  } // Event listener for country selection
	  function _loadCityMapping() {
	    _loadCityMapping = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(countryPath, statePath) {
	      var countryResponse, stateResponse, countryMapping, stateMapping;
	      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
	        while (1) switch (_context12.prev = _context12.next) {
	          case 0:
	            _context12.prev = 0;
	            _context12.next = 3;
	            return fetch(countryPath);
	          case 3:
	            countryResponse = _context12.sent;
	            _context12.next = 6;
	            return fetch(statePath);
	          case 6:
	            stateResponse = _context12.sent;
	            if (countryResponse.ok) {
	              _context12.next = 9;
	              break;
	            }
	            throw new Error("Failed to fetch country-mapping.json from ".concat(countryPath, ": ").concat(countryResponse.statusText));
	          case 9:
	            if (stateResponse.ok) {
	              _context12.next = 11;
	              break;
	            }
	            throw new Error("Failed to fetch state-mapping.json from ".concat(statePath, ": ").concat(stateResponse.statusText));
	          case 11:
	            _context12.next = 13;
	            return countryResponse.json();
	          case 13:
	            countryMapping = _context12.sent;
	            _context12.next = 16;
	            return stateResponse.json();
	          case 16:
	            stateMapping = _context12.sent;
	            populateCityOptions(countryMapping, stateMapping); // Populate the city datalist
	            _context12.next = 23;
	            break;
	          case 20:
	            _context12.prev = 20;
	            _context12.t0 = _context12["catch"](0);
	            console.error('Error loading mapping:', _context12.t0);
	          case 23:
	          case "end":
	            return _context12.stop();
	        }
	      }, _callee12, null, [[0, 20]]);
	    }));
	    return _loadCityMapping.apply(this, arguments);
	  }
	  document.getElementById('country').addEventListener('input', function () {
	    var countryName = this.value;
	    var datalistOptions = document.querySelectorAll('#country-list option');

	    // Find the matching option and set the city ID
	    var _iterator = _createForOfIteratorHelper(datalistOptions),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var option = _step.value;
	        if (option.value === countryName) {
	          document.getElementById('country-id').value = option.dataset.cityId;
	          break;
	        }
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  });

	  // Event listener for city selection
	  document.getElementById('state').addEventListener('input', function () {
	    var stateName = this.value;
	    var datalistOptions = document.querySelectorAll('#state-list option');

	    // Find the matching option and set the city ID
	    var _iterator2 = _createForOfIteratorHelper(datalistOptions),
	      _step2;
	    try {
	      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	        var option = _step2.value;
	        if (option.value === stateName) {
	          document.getElementById('state-id').value = option.dataset.cityId;
	          break;
	        }
	      }
	    } catch (err) {
	      _iterator2.e(err);
	    } finally {
	      _iterator2.f();
	    }
	  });
	  function loadCityData() {
	    return _loadCityData.apply(this, arguments);
	  } // Simulate a function that loads the globe or city data
	  function _loadCityData() {
	    _loadCityData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
	      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
	        while (1) switch (_context13.prev = _context13.next) {
	          case 0:
	            // Show the loading indicator
	            document.getElementById('loading-indicator').style.display = 'block';
	            _context13.prev = 1;
	            _context13.next = 4;
	            return loadGlobeData();
	          case 4:
	            // Whatever logic is needed to load the globe or data

	            // Hide the loading indicator once the data is fully loaded
	            document.getElementById('loading-indicator').style.display = 'none';
	            console.log('City data loaded, globe rendered');
	            _context13.next = 12;
	            break;
	          case 8:
	            _context13.prev = 8;
	            _context13.t0 = _context13["catch"](1);
	            console.error('Error loading data:', _context13.t0);
	            // Optionally, handle the error and inform the user
	            document.getElementById('loading-indicator').textContent = 'Failed to load data. Please try again.';
	          case 12:
	          case "end":
	            return _context13.stop();
	        }
	      }, _callee13, null, [[1, 8]]);
	    }));
	    return _loadCityData.apply(this, arguments);
	  }
	  function loadGlobeData() {
	    return _loadGlobeData.apply(this, arguments);
	  }
	  function _loadGlobeData() {
	    _loadGlobeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
	      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
	        while (1) switch (_context14.prev = _context14.next) {
	          case 0:
	            return _context14.abrupt("return", new Promise(function (resolve) {
	              setTimeout(function () {
	                // Logic to load the globe or data can go here
	                fetchCitiesAndCreateGlobe();
	                resolve();
	              }, 1000); // Simulate a 3-second delay
	            }));
	          case 1:
	          case "end":
	            return _context14.stop();
	        }
	      }, _callee14);
	    }));
	    return _loadGlobeData.apply(this, arguments);
	  }
	  function participantExists(_x14, _x15) {
	    return _participantExists.apply(this, arguments);
	  } // Function to normalize names (capitalize first letter of each name)
	  function _participantExists() {
	    _participantExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(secondName, bibNumber) {
	      var normalizedSecondName, participantsRef, querySnapshot;
	      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
	        while (1) switch (_context15.prev = _context15.next) {
	          case 0:
	            // Normalize inputs for comparison
	            normalizedSecondName = secondName.toLowerCase(); // Reference to Firestore collection
	            participantsRef = firebase.firestore().collection('participants'); // Query Firestore to find participant by surname and bib number
	            _context15.next = 4;
	            return participantsRef.where('secondName', '==', normalizedSecondName).where('bibNo', '==', bibNumber).get();
	          case 4:
	            querySnapshot = _context15.sent;
	            return _context15.abrupt("return", !querySnapshot.empty);
	          case 6:
	          case "end":
	            return _context15.stop();
	        }
	      }, _callee15);
	    }));
	    return _participantExists.apply(this, arguments);
	  }

	  // Form submission logic for the overlay
	  document.getElementById('participant-check-form').addEventListener('submit', /*#__PURE__*/function () {
	    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
	      var secondName, bibNumber, exists, errorMessageDiv;
	      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
	        while (1) switch (_context4.prev = _context4.next) {
	          case 0:
	            event.preventDefault();
	            secondName = document.getElementById('surname').value.trim();
	            bibNumber = document.getElementById('bib-number').value.trim(); // Check if participant exists in Firestore
	            _context4.next = 5;
	            return participantExists(secondName, bibNumber);
	          case 5:
	            exists = _context4.sent;
	            if (exists) {
	              document.getElementById('overlay-form').style.display = 'none'; // Hide overlay form
	            } else {
	              errorMessageDiv = document.getElementById('error-message');
	              errorMessageDiv.textContent = 'Participant not found. Please check your details.';
	              errorMessageDiv.style.display = 'block'; // Show error message
	            }
	          case 7:
	          case "end":
	            return _context4.stop();
	        }
	      }, _callee4);
	    }));
	    return function (_x16) {
	      return _ref4.apply(this, arguments);
	    };
	  }());

	  // Call the loadCityData function on window load or when necessary
	  window.onload = loadCityData;
	  loadCityMapping('country-list.json', 'state-list.json');
	  return scripts$1;
	}

	var scriptsExports = requireScripts();
	var scripts = /*@__PURE__*/getDefaultExportFromCjs(scriptsExports);

	return scripts;

}));
//# sourceMappingURL=globe.gl.js.map
