// Version 2.33.0 globe.gl - https://lakf.github.io/rmworld/example/world-cities/index.html
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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
            participantsRef = firebase.firestore().collection('participants');
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

}));
//# sourceMappingURL=globe.gl.js.map
