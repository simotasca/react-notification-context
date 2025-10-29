import { jsx as d } from "react/jsx-runtime";
import { useState as m, useCallback as a, useEffect as N, useMemo as p } from "react";
import { createContext as v } from "create-react-context";
function C(i) {
  const [f, e] = m([]), c = a((t) => e((o) => [...o, t]), [e]), r = a((t) => e((o) => o.filter((n) => n.id != t)), [e]), u = a(() => e([]), [e]), l = a((t, o) => {
    const n = crypto.randomUUID(), s = Date.now();
    c({ id: n, createdAt: s, Component: t, props: o({ createdAt: s, remove: () => r(n) }) });
  }, [c, r]);
  return N(() => {
    const t = setInterval(() => {
      const o = Date.now();
      e((n) => n.filter((s) => s.createdAt + (i?.lifetime || 6e3) > o));
    }, i?.cleanupInterval || 500);
    return () => clearInterval(t);
  }, [e, i]), { queue: f, setQueue: e, customNotify: l, clear: u, remove: r };
}
const [, I, y] = v({
  errorMsg: "invalid useNotificationsQueue usage outside NotificationProvider"
}), [, h, P] = v({
  errorMsg: "invalid useNotify usage outside NotificationProvider"
});
function w(i) {
  const { queue: f, setQueue: e, remove: c, clear: r, customNotify: u } = i.value, l = p(() => ({ remove: c, clear: r, customNotify: u }), [c, r, u]);
  return /* @__PURE__ */ d(y, { value: { queue: f, setQueue: e }, children: /* @__PURE__ */ d(P, { value: l, children: i.children }) });
}
export {
  w as NotificationProvider,
  C as initNotificationContext,
  I as useNotificationsQueue,
  h as useNotify
};
//# sourceMappingURL=index.es.js.map
