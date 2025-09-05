import K, { useState as Er, useCallback as cr, useEffect as Rr, useMemo as wr } from "react";
var Se = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Sr() {
  if (fr) return Ee;
  fr = 1;
  var g = K, _ = Symbol.for("react.element"), E = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(b, l, R) {
    var f, w = {}, T = null, N = null;
    R !== void 0 && (T = "" + R), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (N = l.ref);
    for (f in l) h.call(l, f) && !O.hasOwnProperty(f) && (w[f] = l[f]);
    if (b && b.defaultProps) for (f in l = b.defaultProps, l) w[f] === void 0 && (w[f] = l[f]);
    return { $$typeof: _, type: b, key: T, ref: N, props: w, _owner: m.current };
  }
  return Ee.Fragment = E, Ee.jsx = k, Ee.jsxs = k, Ee;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function Or() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && (function() {
    var g = K, _ = Symbol.for("react.element"), E = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), X = Symbol.iterator, ke = "@@iterator";
    function Te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, Ce = !1, xe = !1, De = !1, Fe = !1, G;
    G = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === O || Fe || e === m || e === R || e === f || De || e === N || Pe || Ce || xe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === w || e.$$typeof === k || e.$$typeof === b || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case E:
          return "Portal";
        case O:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return Q(r) + ".Consumer";
          case k:
            var t = e;
            return Q(t._context) + ".Provider";
          case l:
            return Ne(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return S(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, H, Z, ee, re, te, ne, ae;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (F === 0) {
          H = console.log, Z = console.info, ee = console.warn, re = console.error, te = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ae() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: H
            }),
            info: j({}, e, {
              value: Z
            }),
            warn: j({}, e, {
              value: ee
            }),
            error: j({}, e, {
              value: re
            }),
            group: j({}, e, {
              value: te
            }),
            groupCollapsed: j({}, e, {
              value: ne
            }),
            groupEnd: j({}, e, {
              value: ae
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, Y;
    function I(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var M = !1, A;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      A = new We();
    }
    function ie(e, r) {
      if (!e || M)
        return "";
      {
        var t = A.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, c = d.length - 1; s >= 1 && c >= 0 && a[s] !== d[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (a[s] !== d[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || a[s] !== d[c]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && A.set(e, y), y;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = u, Ae(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", P = D ? I(D) : "";
      return typeof e == "function" && A.set(e, P), P;
    }
    function Le(e, r, t) {
      return ie(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ie(e, Ue(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case R:
          return I("Suspense");
        case f:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Le(e.render);
          case w:
            return W(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return W(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ue = {}, se = C.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Ye(e, r, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ue) && (ue[a.message] = !0, L(i), p("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Me = Array.isArray;
    function V(e) {
      return Me(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function le(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ce(e);
    }
    var fe = C.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, de;
    function qe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Be(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      typeof e.ref == "string" && fe.current;
    }
    function Xe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          de || (de = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function He(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (le(t), a = "" + t), Be(r) && (le(r.key), a = "" + r.key), qe(r) && (d = r.ref, Ke(r, i));
        for (u in r)
          $.call(r, u) && !Je.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, c), d && Ge(o, c);
        }
        return Qe(e, a, d, i, n, fe.current, o);
      }
    }
    var z = C.ReactCurrentOwner, ve = C.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function ye() {
      {
        if (z.current) {
          var e = S(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      return "";
    }
    var me = {};
    function er(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + S(e._owner.type) + "."), x(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            q(n) && be(n, r);
          }
        else if (q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              q(o.value) && be(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ye(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = S(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var he = {};
    function _e(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Ze();
          d ? a += d : a += ye();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === _ ? (s = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var c = He(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (V(y)) {
                for (var D = 0; D < y.length; D++)
                  ge(y[D], e);
                Object.freeze && Object.freeze(y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ge(y, e);
        }
        if ($.call(r, "key")) {
          var P = S(e), v = Object.keys(r).filter(function(sr) {
            return sr !== "key";
          }), B = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!he[P + B]) {
            var ur = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, B, P, ur, P), he[P + B] = !0;
          }
        }
        return e === h ? tr(c) : rr(c), c;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    Re.Fragment = h, Re.jsx = or, Re.jsxs = ir;
  })()), Re;
}
var dr;
function kr() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? Se.exports = Sr() : Se.exports = Or()), Se.exports;
}
var vr = kr(), lr = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Tr() {
  if (yr) return we;
  yr = 1;
  var g = K, _ = Symbol.for("react.element"), E = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(b, l, R) {
    var f, w = {}, T = null, N = null;
    R !== void 0 && (T = "" + R), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (N = l.ref);
    for (f in l) h.call(l, f) && !O.hasOwnProperty(f) && (w[f] = l[f]);
    if (b && b.defaultProps) for (f in l = b.defaultProps, l) w[f] === void 0 && (w[f] = l[f]);
    return { $$typeof: _, type: b, key: T, ref: N, props: w, _owner: m.current };
  }
  return we.Fragment = E, we.jsx = k, we.jsxs = k, we;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function jr() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && (function() {
    var g = K, _ = Symbol.for("react.element"), E = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), X = Symbol.iterator, ke = "@@iterator";
    function Te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, Ce = !1, xe = !1, De = !1, Fe = !1, G;
    G = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === O || Fe || e === m || e === R || e === f || De || e === N || Pe || Ce || xe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === w || e.$$typeof === k || e.$$typeof === b || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case E:
          return "Portal";
        case O:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return Q(r) + ".Consumer";
          case k:
            var t = e;
            return Q(t._context) + ".Provider";
          case l:
            return Ne(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return S(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, H, Z, ee, re, te, ne, ae;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (F === 0) {
          H = console.log, Z = console.info, ee = console.warn, re = console.error, te = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ae() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: H
            }),
            info: j({}, e, {
              value: Z
            }),
            warn: j({}, e, {
              value: ee
            }),
            error: j({}, e, {
              value: re
            }),
            group: j({}, e, {
              value: te
            }),
            groupCollapsed: j({}, e, {
              value: ne
            }),
            groupEnd: j({}, e, {
              value: ae
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, Y;
    function I(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var M = !1, A;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      A = new We();
    }
    function ie(e, r) {
      if (!e || M)
        return "";
      {
        var t = A.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, c = d.length - 1; s >= 1 && c >= 0 && a[s] !== d[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (a[s] !== d[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || a[s] !== d[c]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && A.set(e, y), y;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = u, Ae(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", P = D ? I(D) : "";
      return typeof e == "function" && A.set(e, P), P;
    }
    function Le(e, r, t) {
      return ie(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ie(e, Ue(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case R:
          return I("Suspense");
        case f:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Le(e.render);
          case w:
            return W(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return W(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ue = {}, se = C.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Ye(e, r, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ue) && (ue[a.message] = !0, L(i), p("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Me = Array.isArray;
    function V(e) {
      return Me(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function le(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ce(e);
    }
    var fe = C.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, de;
    function qe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Be(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      typeof e.ref == "string" && fe.current;
    }
    function Xe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          de || (de = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function He(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (le(t), a = "" + t), Be(r) && (le(r.key), a = "" + r.key), qe(r) && (d = r.ref, Ke(r));
        for (u in r)
          $.call(r, u) && !Je.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, c), d && Ge(o, c);
        }
        return Qe(e, a, d, i, n, fe.current, o);
      }
    }
    var z = C.ReactCurrentOwner, ve = C.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function ye() {
      {
        if (z.current) {
          var e = S(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      return "";
    }
    var me = {};
    function er(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + S(e._owner.type) + "."), x(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            q(n) && be(n, r);
          }
        else if (q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              q(o.value) && be(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ye(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = S(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    var he = {};
    function _e(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Ze();
          d ? a += d : a += ye();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === _ ? (s = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var c = He(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (V(y)) {
                for (var D = 0; D < y.length; D++)
                  ge(y[D], e);
                Object.freeze && Object.freeze(y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ge(y, e);
        }
        if ($.call(r, "key")) {
          var P = S(e), v = Object.keys(r).filter(function(sr) {
            return sr !== "key";
          }), B = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!he[P + B]) {
            var ur = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, B, P, ur, P), he[P + B] = !0;
          }
        }
        return e === h ? tr(c) : rr(c), c;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    Oe.Fragment = h, Oe.jsx = or, Oe.jsxs = ir;
  })()), Oe;
}
var br;
function Pr() {
  return br || (br = 1, process.env.NODE_ENV === "production" ? lr.exports = Tr() : lr.exports = jr()), lr.exports;
}
var gr = Pr();
const hr = Symbol("NULL_CTX");
class Cr extends Error {
}
function _r(g) {
  const _ = K.createContext(g?.initialValue || hr), E = () => {
    const m = K.useContext(_);
    if (m === hr) throw new Cr(g?.errorMsg ?? "cannot use context outside provider");
    return m;
  }, h = g && g.initializer != null ? ({ children: m }) => /* @__PURE__ */ gr.jsx(_.Provider, { value: g.initializer(), children: m }) : ({ value: m, children: O }) => /* @__PURE__ */ gr.jsx(_.Provider, { value: m, children: O });
  return [_, E, h];
}
function $r(g) {
  const [_, E] = Er([]), h = (b) => E((l) => [...l, b]), m = cr((b) => E((l) => l.filter((R) => R.id != b)), [E]), O = cr(() => E([]), [E]), k = cr((b, l) => {
    const R = crypto.randomUUID(), f = Date.now();
    h({ id: R, createdAt: f, Component: b, props: l({ createdAt: f, remove: () => m(R) }) });
  }, [h, m]);
  return Rr(() => {
    const b = setInterval(() => {
      const l = Date.now();
      E((R) => R.filter((f) => f.createdAt + (g?.lifetime || 6e3) > l));
    }, g?.cleanupInterval || 500);
    return () => clearInterval(b);
  }, [E, g]), { queue: _, setQueue: E, customNotify: k, clear: O, remove: m };
}
const [, Nr, xr] = _r({
  errorMsg: "invalid useNotificationsQueue usage outside NotificationProvider"
}), [, Ir, Dr] = _r({
  errorMsg: "invalid useNotify usage outside NotificationProvider"
});
function Ar(g) {
  const { queue: _, setQueue: E, remove: h, clear: m, customNotify: O } = g.value, k = wr(() => ({ remove: h, clear: m, customNotify: O }), [h, m, O]);
  return /* @__PURE__ */ vr.jsx(xr, { value: { queue: _, setQueue: E }, children: /* @__PURE__ */ vr.jsx(Dr, { value: k, children: g.children }) });
}
export {
  Ar as NotificationProvider,
  $r as initNotificationContext,
  Nr as useNotificationsQueue,
  Ir as useNotify
};
//# sourceMappingURL=index.es.js.map
