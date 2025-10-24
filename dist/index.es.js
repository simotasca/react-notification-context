import { jsx as Oe } from "react/jsx-runtime";
import Y, { useState as vr, useCallback as z, useEffect as mr, useMemo as br } from "react";
var Z = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function gr() {
  if (Ee) return F;
  Ee = 1;
  var y = Y, g = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, f = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(v, s, k) {
    var p, O = {}, R = null, I = null;
    k !== void 0 && (R = "" + k), s.key !== void 0 && (R = "" + s.key), s.ref !== void 0 && (I = s.ref);
    for (p in s) h.call(s, p) && !S.hasOwnProperty(p) && (O[p] = s[p]);
    if (v && v.defaultProps) for (p in s = v.defaultProps, s) O[p] === void 0 && (O[p] = s[p]);
    return { $$typeof: g, type: v, key: R, ref: I, props: O, _owner: f.current };
  }
  return F.Fragment = d, F.jsx = j, F.jsxs = j, F;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function hr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && (function() {
    var y = Y, g = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), v = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), H = Symbol.iterator, Ce = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Fe = !1, Ie = !1, Le = !1, Ue = !1, Ae = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === S || Ae || e === f || e === k || e === p || Ue || e === I || Fe || Ie || Le || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === O || e.$$typeof === j || e.$$typeof === v || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case f:
          return "StrictMode";
        case k:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return re(r) + ".Consumer";
          case j:
            var t = e;
            return re(t._context) + ".Provider";
          case s:
            return ze(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case R: {
            var i = e, u = i._payload, a = i._init;
            try {
              return E(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, te, ne, oe, ae, ie, ue, se;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if ($ === 0) {
          te = console.log, ne = console.info, oe = console.warn, ae = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        $++;
      }
    }
    function Ye() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: oe
            }),
            error: P({}, e, {
              value: ae
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        $ < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = x.ReactCurrentDispatcher, V;
    function L(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + e;
      }
    }
    var q = !1, U;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Qe();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Q.current, Q.current = null, Me();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (_) {
              n = _;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var o = _.stack.split(`
`), b = n.stack.split(`
`), c = o.length - 1, l = b.length - 1; c >= 1 && l >= 0 && o[c] !== b[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (o[c] !== b[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || o[c] !== b[l]) {
                    var w = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, w), w;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, Q.current = u, Ye(), Error.prepareStackTrace = i;
      }
      var C = e ? e.displayName || e.name : "", N = C ? L(C) : "";
      return typeof e == "function" && U.set(e, N), N;
    }
    function Ve(e, r, t) {
      return le(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, qe(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case k:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ve(e.render);
          case O:
            return A(e.type, r, t);
          case R: {
            var n = e, i = n._payload, u = n._init;
            try {
              return A(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, fe = {}, pe = x.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(D);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (W(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), W(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, W(i), m("Failed %s type: %s", t, o.message), W(null));
          }
      }
    }
    var Xe = Array.isArray;
    function B(e) {
      return Xe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function de(e) {
      if (Ke(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ye(e);
    }
    var ve = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, be;
    function Ze(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ve.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, u, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function or(e, r, t, n, i) {
      {
        var u, a = {}, o = null, b = null;
        t !== void 0 && (de(t), o = "" + t), He(r) && (de(r.key), o = "" + r.key), Ze(r) && (b = r.ref, er(r));
        for (u in r)
          D.call(r, u) && !Ge.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            a[u] === void 0 && (a[u] = c[u]);
        }
        if (o || b) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(a, l), b && tr(a, l);
        }
        return nr(e, o, b, i, n, ve.current, a);
      }
    }
    var X = x.ReactCurrentOwner, ge = x.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function he() {
      {
        if (X.current) {
          var e = E(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + E(e._owner.type) + "."), T(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), T(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ke(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = $e(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), a; !(a = u.next()).done; )
              K(a.value) && ke(a.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = E(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            T(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), T(null);
            break;
          }
        }
        e.ref !== null && (T(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
      }
    }
    var Se = {};
    function je(e, r, t, n, i, u) {
      {
        var a = We(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? o += b : o += he();
          var c;
          e === null ? c = "null" : B(e) ? c = "array" : e !== void 0 && e.$$typeof === g ? (c = "<" + (E(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var l = or(e, r, t, i, u);
        if (l == null)
          return l;
        if (a) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (B(w)) {
                for (var C = 0; C < w.length; C++)
                  we(w[C], e);
                Object.freeze && Object.freeze(w);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        if (D.call(r, "key")) {
          var N = E(e), _ = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), G = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[N + G]) {
            var yr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, G, N, yr, N), Se[N + G] = !0;
          }
        }
        return e === h ? sr(l) : ur(l), l;
      }
    }
    function cr(e, r, t) {
      return je(e, r, t, !0);
    }
    function lr(e, r, t) {
      return je(e, r, t, !1);
    }
    var fr = lr, pr = cr;
    M.Fragment = h, M.jsx = fr, M.jsxs = pr;
  })()), M;
}
var Pe;
function _r() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? Z.exports = gr() : Z.exports = hr()), Z.exports;
}
var Ne = _r();
const xe = Symbol("NULL_CTX");
class kr extends Error {
}
function Te(y) {
  const g = Y.createContext(y?.initialValue || xe), d = () => {
    const f = Y.useContext(g);
    if (f === xe) throw new kr(y?.errorMsg ?? "cannot use context outside provider");
    return f;
  }, h = y && y.initializer != null ? ({ children: f }) => /* @__PURE__ */ Ne.jsx(g.Provider, { value: y.initializer(), children: f }) : ({ value: f, children: S }) => /* @__PURE__ */ Ne.jsx(g.Provider, { value: f, children: S });
  return [g, d, h];
}
function Er(y) {
  const [g, d] = vr([]), h = z((v) => d((s) => [...s, v]), [d]), f = z((v) => d((s) => s.filter((k) => k.id != v)), [d]), S = z(() => d([]), [d]), j = z((v, s) => {
    const k = crypto.randomUUID(), p = Date.now();
    h({ id: k, createdAt: p, Component: v, props: s({ createdAt: p, remove: () => f(k) }) });
  }, [h, f]);
  return mr(() => {
    const v = setInterval(() => {
      const s = Date.now();
      d((k) => k.filter((p) => p.createdAt + (y?.lifetime || 6e3) > s));
    }, y?.cleanupInterval || 500);
    return () => clearInterval(v);
  }, [d, y]), { queue: g, setQueue: d, customNotify: j, clear: S, remove: f };
}
const [, Rr, wr] = Te({
  errorMsg: "invalid useNotificationsQueue usage outside NotificationProvider"
}), [, Pr, Sr] = Te({
  errorMsg: "invalid useNotify usage outside NotificationProvider"
});
function Nr(y) {
  const { queue: g, setQueue: d, remove: h, clear: f, customNotify: S } = y.value, j = br(() => ({ remove: h, clear: f, customNotify: S }), [h, f, S]);
  return /* @__PURE__ */ Oe(wr, { value: { queue: g, setQueue: d }, children: /* @__PURE__ */ Oe(Sr, { value: j, children: y.children }) });
}
export {
  Nr as NotificationProvider,
  Er as initNotificationContext,
  Rr as useNotificationsQueue,
  Pr as useNotify
};
//# sourceMappingURL=index.es.js.map
