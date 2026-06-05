import {
  f as L,
  a as t,
  c as j,
  t as pa,
  d as La,
  b as J,
  e as Oa,
} from "../chunks/DYCeEr9T.js";
import {
  ba as Ra,
  F as Ba,
  y as Da,
  P as Ua,
  ag as Xa,
  aq as Ya,
  bb as Ga,
  aV as Ja,
  m as Ea,
  b as Ka,
  bc as Qa,
  bd as Wa,
  be as $a,
  aR as Aa,
  bf as ar,
  a8 as rr,
  aA as ca,
  x as er,
  aD as tr,
  p as ea,
  h as ta,
  g as n,
  i as U,
  s as H,
  j as m,
  k as f,
  l as F,
  n as sa,
  a as or,
  q as B,
  t as ia,
  o as la,
} from "../chunks/ziRRfoxS.js";
import {
  g as ga,
  a as _a,
  s as ua,
  c as oa,
  r as Fa,
} from "../chunks/JiDN4Y79.js";
import {
  B as ir,
  i as A,
  r as xa,
  a as Ma,
  s as ka,
} from "../chunks/BuZbGRTL.js";
import { a as sr, s as va } from "../chunks/zlKxVkeV.js";
import { b as ja } from "../chunks/B-CUYYsA.js";
import { c as fa, e as nr } from "../chunks/oTG7bk79.js";
import { M as Va, X as ya } from "../chunks/xM1KtpaA.js";
import { S as wa, t as za } from "../chunks/wtd94CV0.js";
import { p as lr, n as vr } from "../chunks/jzEahMFI.js";
import { M as dr } from "../chunks/BBnoIQ6y.js";
import "../chunks/BtUAXoRc.js";
import { i as cr } from "../chunks/DhX9pPH3.js";
function fr(o, a, e) {
  Da && Ua();
  var p = new ir(o),
    s = !Ra();
  Ba(() => {
    var l = a();
    (s && l !== null && typeof l == "object" && (l = {}), p.ensure(l, e));
  });
}
const ur = () => performance.now(),
  ra = {
    tick: (o) => requestAnimationFrame(o),
    now: () => ur(),
    tasks: new Set(),
  };
function Na() {
  const o = ra.now();
  (ra.tasks.forEach((a) => {
    a.c(o) || (ra.tasks.delete(a), a.f());
  }),
    ra.tasks.size !== 0 && ra.tick(Na));
}
function hr(o) {
  let a;
  return (
    ra.tasks.size === 0 && ra.tick(Na),
    {
      promise: new Promise((e) => {
        ra.tasks.add((a = { c: o, f: e }));
      }),
      abort() {
        ra.tasks.delete(a);
      },
    }
  );
}
function ha(o, a) {
  Aa(() => {
    o.dispatchEvent(new CustomEvent(a));
  });
}
function mr(o) {
  if (o === "float") return "cssFloat";
  if (o === "offset") return "cssOffset";
  if (o.startsWith("--")) return o;
  const a = o.split("-");
  return a.length === 1
    ? a[0]
    : a[0] +
        a
          .slice(1)
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join("");
}
function Ca(o) {
  const a = {},
    e = o.split(";");
  for (const p of e) {
    const [s, l] = p.split(":");
    if (!s || l === void 0) break;
    const d = mr(s.trim());
    a[d] = l.trim();
  }
  return a;
}
const pr = (o) => o;
function W(o, a, e, p) {
  var P;
  var s = (o & Wa) !== 0,
    l = (o & $a) !== 0,
    d = s && l,
    x = (o & Qa) !== 0,
    u = d ? "both" : s ? "in" : "out",
    c,
    w = a.inert,
    S = a.style.overflow,
    _,
    g;
  function E() {
    return Aa(
      () =>
        c ?? (c = e()(a, (p == null ? void 0 : p()) ?? {}, { direction: u })),
    );
  }
  var r = {
      is_global: x,
      in() {
        var v;
        if (((a.inert = w), !s)) {
          (g == null || g.abort(),
            (v = g == null ? void 0 : g.reset) == null || v.call(g));
          return;
        }
        (l || _ == null || _.abort(),
          ha(a, "introstart"),
          (_ = Ha(a, E(), g, 1, () => {
            (ha(a, "introend"),
              _ == null || _.abort(),
              (_ = c = void 0),
              (a.style.overflow = S));
          })));
      },
      out(v) {
        if (!l) {
          (v == null || v(), (c = void 0));
          return;
        }
        ((a.inert = !0),
          ha(a, "outrostart"),
          (g = Ha(a, E(), _, 0, () => {
            (ha(a, "outroend"), v == null || v());
          })));
      },
      stop: () => {
        (_ == null || _.abort(), g == null || g.abort());
      },
    },
    i = Xa;
  if ((((P = i.nodes).t ?? (P.t = [])).push(r), s && sr)) {
    var M = x;
    if (!M) {
      for (var z = i.parent; z && (z.f & Ya) !== 0; )
        for (; (z = z.parent) && (z.f & Ga) === 0; );
      M = !z || (z.f & Ja) !== 0;
    }
    M &&
      Ea(() => {
        Ka(() => r.in());
      });
  }
}
function Ha(o, a, e, p, s) {
  var l = p === 1;
  if (ar(a)) {
    var d,
      x = !1;
    return (
      rr(() => {
        if (!x) {
          var i = a({ direction: l ? "in" : "out" });
          d = Ha(o, i, e, p, s);
        }
      }),
      {
        abort: () => {
          ((x = !0), d == null || d.abort());
        },
        deactivate: () => d.deactivate(),
        reset: () => d.reset(),
        t: () => d.t(),
      }
    );
  }
  if ((e == null || e.deactivate(), !(a != null && a.duration)))
    return (s(), { abort: ca, deactivate: ca, reset: ca, t: () => p });
  const { delay: u = 0, css: c, tick: w, easing: S = pr } = a;
  var _ = [];
  if (l && e === void 0 && (w && w(0, 1), c)) {
    var g = Ca(c(0, 1));
    _.push(g, g);
  }
  var E = () => 1 - p,
    r = o.animate(_, { duration: u, fill: "forwards" });
  return (
    (r.onfinish = () => {
      r.cancel();
      var i = (e == null ? void 0 : e.t()) ?? 1 - p;
      e == null || e.abort();
      var M = p - i,
        z = a.duration * Math.abs(M),
        P = [];
      if (z > 0) {
        var v = !1;
        if (c)
          for (
            var T = Math.ceil(z / 16.666666666666668), D = 0;
            D <= T;
            D += 1
          ) {
            var X = i + M * S(D / T),
              Y = Ca(c(X, 1 - X));
            (P.push(Y), v || (v = Y.overflow === "hidden"));
          }
        (v && (o.style.overflow = "hidden"),
          (E = () => {
            var h = r.currentTime;
            return i + M * S(h / z);
          }),
          w &&
            hr(() => {
              if (r.playState !== "running") return !1;
              var h = E();
              return (w(h, 1 - h), !0);
            }));
      }
      ((r = o.animate(P, { duration: z, fill: "forwards" })),
        (r.onfinish = () => {
          ((E = () => p), w == null || w(p, 1 - p), s());
        }));
    }),
    {
      abort: () => {
        r && (r.cancel(), (r.effect = null), (r.onfinish = ca));
      },
      deactivate: () => {
        s = ca;
      },
      reset: () => {
        p === 0 && (w == null || w(1, 0));
      },
      t: () => E(),
    }
  );
}
function gr(o, a, e = a) {
  var p = o === "x",
    s = () =>
      Aa(() => {
        ((l = !0),
          clearTimeout(d),
          (d = setTimeout(x, 100)),
          e(window[p ? "scrollX" : "scrollY"]));
      });
  addEventListener("scroll", s, { passive: !0 });
  var l = !1,
    d,
    x = () => {
      l = !1;
    },
    u = !0;
  (er(() => {
    var c = a();
    u
      ? (u = !1)
      : !l &&
        c != null &&
        ((l = !0),
        clearTimeout(d),
        scrollTo(window.scrollX, c),
        (d = setTimeout(x, 100)));
  }),
    Ea(s),
    tr(() => {
      removeEventListener("scroll", s);
    }));
}
var _r = L(
    '<path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path>',
  ),
  xr = L(
    '<path d="M224,56l-96,88L32,56Z" opacity="0.2"></path><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>',
    1,
  ),
  br = L(
    '<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>',
  ),
  wr = L(
    '<path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"></path>',
  ),
  yr = L(
    '<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>',
  ),
  Hr = L(
    '<path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"></path>',
  ),
  Zr = L('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');
function Ar(o, a) {
  ea(a, !0);
  const e = ga();
  let p = xa(a, ["$$slots", "$$events", "$$legacy", "children"]),
    s = U(() => a.weight ?? e.weight ?? "regular"),
    l = U(() => a.color ?? e.color ?? "currentColor"),
    d = U(() => a.size ?? e.size ?? "1em"),
    x = U(() => a.mirrored ?? e.mirrored ?? !1);
  function u(r) {
    let { weight: i, color: M, size: z, mirrored: P, ...v } = r;
    return v;
  }
  var c = Zr();
  _a(
    c,
    (r, i) => ({
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: n(d),
      height: n(d),
      fill: n(l),
      transform: n(x) ? "scale(-1, 1)" : void 0,
      viewBox: "0 0 256 256",
      ...r,
      ...i,
    }),
    [() => u(e), () => u(p)],
  );
  var w = m(c);
  {
    var S = (r) => {
      var i = j(),
        M = F(i);
      (ua(M, () => a.children), t(r, i));
    };
    A(w, (r) => {
      a.children && r(S);
    });
  }
  var _ = H(w, 2);
  {
    var g = (r) => {
        var i = _r();
        t(r, i);
      },
      E = (r) => {
        var i = j(),
          M = F(i);
        {
          var z = (v) => {
              var T = xr();
              (sa(), t(v, T));
            },
            P = (v) => {
              var T = j(),
                D = F(T);
              {
                var X = (h) => {
                    var I = br();
                    t(h, I);
                  },
                  Y = (h) => {
                    var I = j(),
                      b = F(I);
                    {
                      var V = (y) => {
                          var k = wr();
                          t(y, k);
                        },
                        O = (y) => {
                          var k = j(),
                            G = F(k);
                          {
                            var R = (Z) => {
                                var N = yr();
                                t(Z, N);
                              },
                              K = (Z) => {
                                var N = j(),
                                  $ = F(N);
                                {
                                  var Q = (C) => {
                                      var q = Hr();
                                      t(C, q);
                                    },
                                    aa = (C) => {
                                      var q = pa();
                                      ((q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
                                        ),
                                        "")),
                                        t(C, q));
                                    };
                                  A(
                                    $,
                                    (C) => {
                                      n(s) === "thin" ? C(Q) : C(aa, !1);
                                    },
                                    !0,
                                  );
                                }
                                t(Z, N);
                              };
                            A(
                              G,
                              (Z) => {
                                n(s) === "regular" ? Z(R) : Z(K, !1);
                              },
                              !0,
                            );
                          }
                          t(y, k);
                        };
                      A(
                        b,
                        (y) => {
                          n(s) === "light" ? y(V) : y(O, !1);
                        },
                        !0,
                      );
                    }
                    t(h, I);
                  };
                A(
                  D,
                  (h) => {
                    n(s) === "fill" ? h(X) : h(Y, !1);
                  },
                  !0,
                );
              }
              t(v, T);
            };
          A(
            M,
            (v) => {
              n(s) === "duotone" ? v(z) : v(P, !1);
            },
            !0,
          );
        }
        t(r, i);
      };
    A(_, (r) => {
      n(s) === "bold" ? r(g) : r(E, !1);
    });
  }
  (f(c), t(o, c), ta());
}
var Mr = L(
    '<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"></path>',
  ),
  kr = L(
    '<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>',
    1,
  ),
  Vr = L(
    '<path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>',
  ),
  zr = L(
    '<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path>',
  ),
  Cr = L(
    '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>',
  ),
  Sr = L(
    '<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"></path>',
  ),
  Tr = L('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');
function Ir(o, a) {
  ea(a, !0);
  const e = ga();
  let p = xa(a, ["$$slots", "$$events", "$$legacy", "children"]),
    s = U(() => a.weight ?? e.weight ?? "regular"),
    l = U(() => a.color ?? e.color ?? "currentColor"),
    d = U(() => a.size ?? e.size ?? "1em"),
    x = U(() => a.mirrored ?? e.mirrored ?? !1);
  function u(r) {
    let { weight: i, color: M, size: z, mirrored: P, ...v } = r;
    return v;
  }
  var c = Tr();
  _a(
    c,
    (r, i) => ({
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: n(d),
      height: n(d),
      fill: n(l),
      transform: n(x) ? "scale(-1, 1)" : void 0,
      viewBox: "0 0 256 256",
      ...r,
      ...i,
    }),
    [() => u(e), () => u(p)],
  );
  var w = m(c);
  {
    var S = (r) => {
      var i = j(),
        M = F(i);
      (ua(M, () => a.children), t(r, i));
    };
    A(w, (r) => {
      a.children && r(S);
    });
  }
  var _ = H(w, 2);
  {
    var g = (r) => {
        var i = Mr();
        t(r, i);
      },
      E = (r) => {
        var i = j(),
          M = F(i);
        {
          var z = (v) => {
              var T = kr();
              (sa(), t(v, T));
            },
            P = (v) => {
              var T = j(),
                D = F(T);
              {
                var X = (h) => {
                    var I = Vr();
                    t(h, I);
                  },
                  Y = (h) => {
                    var I = j(),
                      b = F(I);
                    {
                      var V = (y) => {
                          var k = zr();
                          t(y, k);
                        },
                        O = (y) => {
                          var k = j(),
                            G = F(k);
                          {
                            var R = (Z) => {
                                var N = Cr();
                                t(Z, N);
                              },
                              K = (Z) => {
                                var N = j(),
                                  $ = F(N);
                                {
                                  var Q = (C) => {
                                      var q = Sr();
                                      t(C, q);
                                    },
                                    aa = (C) => {
                                      var q = pa();
                                      ((q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
                                        ),
                                        "")),
                                        t(C, q));
                                    };
                                  A(
                                    $,
                                    (C) => {
                                      n(s) === "thin" ? C(Q) : C(aa, !1);
                                    },
                                    !0,
                                  );
                                }
                                t(Z, N);
                              };
                            A(
                              G,
                              (Z) => {
                                n(s) === "regular" ? Z(R) : Z(K, !1);
                              },
                              !0,
                            );
                          }
                          t(y, k);
                        };
                      A(
                        b,
                        (y) => {
                          n(s) === "light" ? y(V) : y(O, !1);
                        },
                        !0,
                      );
                    }
                    t(h, I);
                  };
                A(
                  D,
                  (h) => {
                    n(s) === "fill" ? h(X) : h(Y, !1);
                  },
                  !0,
                );
              }
              t(v, T);
            };
          A(
            M,
            (v) => {
              n(s) === "duotone" ? v(z) : v(P, !1);
            },
            !0,
          );
        }
        t(r, i);
      };
    A(_, (r) => {
      n(s) === "bold" ? r(g) : r(E, !1);
    });
  }
  (f(c), t(o, c), ta());
}
var Lr = L(
    '<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>',
  ),
  Er = L(
    '<path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>',
    1,
  ),
  Fr = L(
    '<path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>',
  ),
  jr = L(
    '<path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>',
  ),
  Nr = L(
    '<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>',
  ),
  Pr = L(
    '<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"></path>',
  ),
  qr = L('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');
function Or(o, a) {
  ea(a, !0);
  const e = ga();
  let p = xa(a, ["$$slots", "$$events", "$$legacy", "children"]),
    s = U(() => a.weight ?? e.weight ?? "regular"),
    l = U(() => a.color ?? e.color ?? "currentColor"),
    d = U(() => a.size ?? e.size ?? "1em"),
    x = U(() => a.mirrored ?? e.mirrored ?? !1);
  function u(r) {
    let { weight: i, color: M, size: z, mirrored: P, ...v } = r;
    return v;
  }
  var c = qr();
  _a(
    c,
    (r, i) => ({
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: n(d),
      height: n(d),
      fill: n(l),
      transform: n(x) ? "scale(-1, 1)" : void 0,
      viewBox: "0 0 256 256",
      ...r,
      ...i,
    }),
    [() => u(e), () => u(p)],
  );
  var w = m(c);
  {
    var S = (r) => {
      var i = j(),
        M = F(i);
      (ua(M, () => a.children), t(r, i));
    };
    A(w, (r) => {
      a.children && r(S);
    });
  }
  var _ = H(w, 2);
  {
    var g = (r) => {
        var i = Lr();
        t(r, i);
      },
      E = (r) => {
        var i = j(),
          M = F(i);
        {
          var z = (v) => {
              var T = Er();
              (sa(), t(v, T));
            },
            P = (v) => {
              var T = j(),
                D = F(T);
              {
                var X = (h) => {
                    var I = Fr();
                    t(h, I);
                  },
                  Y = (h) => {
                    var I = j(),
                      b = F(I);
                    {
                      var V = (y) => {
                          var k = jr();
                          t(y, k);
                        },
                        O = (y) => {
                          var k = j(),
                            G = F(k);
                          {
                            var R = (Z) => {
                                var N = Nr();
                                t(Z, N);
                              },
                              K = (Z) => {
                                var N = j(),
                                  $ = F(N);
                                {
                                  var Q = (C) => {
                                      var q = Pr();
                                      t(C, q);
                                    },
                                    aa = (C) => {
                                      var q = pa();
                                      ((q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
                                        ),
                                        "")),
                                        t(C, q));
                                    };
                                  A(
                                    $,
                                    (C) => {
                                      n(s) === "thin" ? C(Q) : C(aa, !1);
                                    },
                                    !0,
                                  );
                                }
                                t(Z, N);
                              };
                            A(
                              G,
                              (Z) => {
                                n(s) === "regular" ? Z(R) : Z(K, !1);
                              },
                              !0,
                            );
                          }
                          t(y, k);
                        };
                      A(
                        b,
                        (y) => {
                          n(s) === "light" ? y(V) : y(O, !1);
                        },
                        !0,
                      );
                    }
                    t(h, I);
                  };
                A(
                  D,
                  (h) => {
                    n(s) === "fill" ? h(X) : h(Y, !1);
                  },
                  !0,
                );
              }
              t(v, T);
            };
          A(
            M,
            (v) => {
              n(s) === "duotone" ? v(z) : v(P, !1);
            },
            !0,
          );
        }
        t(r, i);
      };
    A(_, (r) => {
      n(s) === "bold" ? r(g) : r(E, !1);
    });
  }
  (f(c), t(o, c), ta());
}
var Rr = L(
    '<path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>',
  ),
  Br = L(
    '<path d="M216,64V192H40V64Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>',
    1,
  ),
  Dr = L(
    '<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path>',
  ),
  Ur = L(
    '<path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>',
  ),
  Xr = L(
    '<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>',
  ),
  Yr = L(
    '<path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"></path>',
  ),
  Gr = L('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');
function Jr(o, a) {
  ea(a, !0);
  const e = ga();
  let p = xa(a, ["$$slots", "$$events", "$$legacy", "children"]),
    s = U(() => a.weight ?? e.weight ?? "regular"),
    l = U(() => a.color ?? e.color ?? "currentColor"),
    d = U(() => a.size ?? e.size ?? "1em"),
    x = U(() => a.mirrored ?? e.mirrored ?? !1);
  function u(r) {
    let { weight: i, color: M, size: z, mirrored: P, ...v } = r;
    return v;
  }
  var c = Gr();
  _a(
    c,
    (r, i) => ({
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: n(d),
      height: n(d),
      fill: n(l),
      transform: n(x) ? "scale(-1, 1)" : void 0,
      viewBox: "0 0 256 256",
      ...r,
      ...i,
    }),
    [() => u(e), () => u(p)],
  );
  var w = m(c);
  {
    var S = (r) => {
      var i = j(),
        M = F(i);
      (ua(M, () => a.children), t(r, i));
    };
    A(w, (r) => {
      a.children && r(S);
    });
  }
  var _ = H(w, 2);
  {
    var g = (r) => {
        var i = Rr();
        t(r, i);
      },
      E = (r) => {
        var i = j(),
          M = F(i);
        {
          var z = (v) => {
              var T = Br();
              (sa(), t(v, T));
            },
            P = (v) => {
              var T = j(),
                D = F(T);
              {
                var X = (h) => {
                    var I = Dr();
                    t(h, I);
                  },
                  Y = (h) => {
                    var I = j(),
                      b = F(I);
                    {
                      var V = (y) => {
                          var k = Ur();
                          t(y, k);
                        },
                        O = (y) => {
                          var k = j(),
                            G = F(k);
                          {
                            var R = (Z) => {
                                var N = Xr();
                                t(Z, N);
                              },
                              K = (Z) => {
                                var N = j(),
                                  $ = F(N);
                                {
                                  var Q = (C) => {
                                      var q = Yr();
                                      t(C, q);
                                    },
                                    aa = (C) => {
                                      var q = pa();
                                      ((q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".',
                                        ),
                                        "")),
                                        t(C, q));
                                    };
                                  A(
                                    $,
                                    (C) => {
                                      n(s) === "thin" ? C(Q) : C(aa, !1);
                                    },
                                    !0,
                                  );
                                }
                                t(Z, N);
                              };
                            A(
                              G,
                              (Z) => {
                                n(s) === "regular" ? Z(R) : Z(K, !1);
                              },
                              !0,
                            );
                          }
                          t(y, k);
                        };
                      A(
                        b,
                        (y) => {
                          n(s) === "light" ? y(V) : y(O, !1);
                        },
                        !0,
                      );
                    }
                    t(h, I);
                  };
                A(
                  D,
                  (h) => {
                    n(s) === "fill" ? h(X) : h(Y, !1);
                  },
                  !0,
                );
              }
              t(v, T);
            };
          A(
            M,
            (v) => {
              n(s) === "duotone" ? v(z) : v(P, !1);
            },
            !0,
          );
        }
        t(r, i);
      };
    A(_, (r) => {
      n(s) === "bold" ? r(g) : r(E, !1);
    });
  }
  (f(c), t(o, c), ta());
}
const Kr = (o) => o;
function Pa(o) {
  const a = o - 1;
  return a * a * a + 1;
}
function Sa(o) {
  const a = typeof o == "string" && o.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return a ? [parseFloat(a[1]), a[2] || "px"] : [o, "px"];
}
function Ta(o, { delay: a = 0, duration: e = 400, easing: p = Kr } = {}) {
  const s = +getComputedStyle(o).opacity;
  return { delay: a, duration: e, easing: p, css: (l) => `opacity: ${l * s}` };
}
function na(
  o,
  {
    delay: a = 0,
    duration: e = 400,
    easing: p = Pa,
    x: s = 0,
    y: l = 0,
    opacity: d = 0,
  } = {},
) {
  const x = getComputedStyle(o),
    u = +x.opacity,
    c = x.transform === "none" ? "" : x.transform,
    w = u * (1 - d),
    [S, _] = Sa(s),
    [g, E] = Sa(l);
  return {
    delay: a,
    duration: e,
    easing: p,
    css: (r, i) => `
			transform: ${c} translate(${(1 - r) * S}${_}, ${(1 - r) * g}${E});
			opacity: ${u - w * i}`,
  };
}
function Za(
  o,
  {
    delay: a = 0,
    duration: e = 400,
    easing: p = Pa,
    start: s = 0,
    opacity: l = 0,
  } = {},
) {
  const d = getComputedStyle(o),
    x = +d.opacity,
    u = d.transform === "none" ? "" : d.transform,
    c = 1 - s,
    w = x * (1 - l);
  return {
    delay: a,
    duration: e,
    easing: p,
    css: (S, _) => `
			transform: ${u} scale(${1 - c * _});
			opacity: ${x - w * _}
		`,
  };
}
function ma(o) {
  return o < 0.5 ? 4 * o * o * o : 0.5 * Math.pow(2 * o - 2, 3) + 1;
}
function Ia(o) {
  const a = o - 1;
  return a * a * a + 1;
}
var Qr = J(
    '<span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-lg animate-bounce-in"> </span>',
  ),
  Wr = J(
    '<nav class="hidden items-center gap-8 md:flex"><a href="/">Início <span></span></a> <a href="/produtos">Catálogo <span></span></a> <a href="/sobre">Sobre <span></span></a> <button class="text-foreground/60 transition-colors hover:text-primary" aria-label="Pesquisar"><!></button> <a href="/carrinho" class="relative group"><div class="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105"><!></div> <!></a></nav>',
  ),
  $r = J(
    '<div class="hidden md:flex flex-1 max-w-sm mx-8 items-center gap-2 rounded-xl border border-primary/30 bg-background px-4 py-2 shadow-lg shadow-primary/10"><!> <input id="search-input" type="text" placeholder="Pesquisar patos..." class="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"/> <button class="text-muted-foreground hover:text-foreground"><!></button></div>',
  ),
  ae = J(
    '<span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white"> </span>',
  ),
  re = J(
    '<div class="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"><nav class="container mx-auto flex flex-col gap-1 px-4 py-4"><a href="/" class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Início</a> <a href="/produtos" class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Catálogo</a> <a href="/sobre" class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Sobre Nós</a> <a href="/carrinho" class="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white mt-1"><!> <span> </span></a></nav></div>',
  ),
  ee = J(
    `<header><div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6"><a href="/" class="flex items-center gap-2.5 group"><div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105"><img src="/duck.svg" alt="Duck Shop logo" class="h-10 w-10"/></div> <span class="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300" style="font-family: 'Plus Jakarta Sans', sans-serif;">Duck Shop</span></a> <!> <div class="flex items-center gap-2 md:hidden"><a href="/carrinho" class="relative"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><!></div> <!></a> <button class="rounded-lg p-2 transition-colors hover:bg-muted" aria-label="Toggle menu"><!></button></div></div> <!></header>`,
  );
function te(o, a) {
  ea(a, !0);
  const e = () => ka(lr, "$page", p),
    [p, s] = Ma();
  let l = la(!1),
    d = la(0),
    x = la(!1),
    u = la("");
  function c(b) {
    (b.key === "Enter" &&
      n(u).trim() &&
      ((window.location.href = `/produtos?q=${encodeURIComponent(n(u).trim())}`),
      B(x, !1),
      B(u, "")),
      b.key === "Escape" && (B(x, !1), B(u, "")));
  }
  or(() => {
    n(x) &&
      setTimeout(() => {
        const b = document.getElementById("search-input");
        b == null || b.focus();
      }, 50);
  });
  var w = ee(),
    S = m(w),
    _ = H(m(S), 2);
  {
    var g = (b) => {
        var V = Wr(),
          O = m(V),
          y = H(m(O));
        f(O);
        var k = H(O, 2),
          G = H(m(k));
        f(k);
        var R = H(k, 2),
          K = H(m(R));
        f(R);
        var Z = H(R, 2);
        Z.__click = () => B(x, !0);
        var N = m(Z);
        (Va(N, { size: 18, weight: "regular" }), f(Z));
        var $ = H(Z, 2),
          Q = m($),
          aa = m(Q);
        (wa(aa, {
          size: 16,
          weight: "duotone",
          class: "transition-transform duration-300 group-hover:rotate-12",
        }),
          f(Q));
        var C = H(Q, 2);
        {
          var q = (ba) => {
            var da = Qr(),
              qa = m(da, !0);
            (f(da),
              ia(() => va(qa, fa.totalItems)),
              W(
                1,
                da,
                () => Za,
                () => ({ duration: 300, easing: ma }),
              ),
              W(
                2,
                da,
                () => Za,
                () => ({ duration: 200, easing: ma }),
              ),
              t(ba, da));
          };
          A(C, (ba) => {
            fa.totalItems > 0 && ba(q);
          });
        }
        (f($),
          f(V),
          ia(() => {
            (oa(
              O,
              1,
              `relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${e().url.pathname === "/" ? "text-primary" : "text-foreground/70"}`,
            ),
              oa(
                y,
                1,
                `absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${e().url.pathname === "/" ? "w-full" : "w-0"}`,
              ),
              oa(
                k,
                1,
                `relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${e().url.pathname === "/produtos" ? "text-primary" : "text-foreground/70"}`,
              ),
              oa(
                G,
                1,
                `absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${e().url.pathname === "/produtos" ? "w-full" : "w-0"}`,
              ),
              oa(
                R,
                1,
                `relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${e().url.pathname === "/sobre" ? "text-primary" : "text-foreground/70"}`,
              ),
              oa(
                K,
                1,
                `absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${e().url.pathname === "/sobre" ? "w-full" : "w-0"}`,
              ));
          }),
          W(
            1,
            V,
            () => na,
            () => ({ x: 10, duration: 200 }),
          ),
          W(
            2,
            V,
            () => na,
            () => ({ x: -10, duration: 150 }),
          ),
          t(b, V));
      },
      E = (b) => {
        var V = $r(),
          O = m(V);
        Va(O, {
          size: 16,
          weight: "regular",
          class: "text-muted-foreground shrink-0",
        });
        var y = H(O, 2);
        (Fa(y), (y.__keydown = c));
        var k = H(y, 2);
        k.__click = () => {
          (B(x, !1), B(u, ""));
        };
        var G = m(k);
        (ya(G, { size: 16, weight: "regular" }),
          f(k),
          f(V),
          ja(
            y,
            () => n(u),
            (R) => B(u, R),
          ),
          W(
            1,
            V,
            () => na,
            () => ({ x: 10, duration: 200 }),
          ),
          t(b, V));
      };
    A(_, (b) => {
      n(x) ? b(E, !1) : b(g);
    });
  }
  var r = H(_, 2),
    i = m(r),
    M = m(i),
    z = m(M);
  (wa(z, { size: 20, weight: "duotone" }), f(M));
  var P = H(M, 2);
  {
    var v = (b) => {
      var V = ae(),
        O = m(V, !0);
      (f(V), ia(() => va(O, fa.totalItems)), t(b, V));
    };
    A(P, (b) => {
      fa.totalItems > 0 && b(v);
    });
  }
  f(i);
  var T = H(i, 2);
  T.__click = () => B(l, !n(l));
  var D = m(T);
  {
    var X = (b) => {
        ya(b, { size: 22, weight: "regular" });
      },
      Y = (b) => {
        Jr(b, { size: 22, weight: "regular" });
      };
    A(D, (b) => {
      n(l) ? b(X) : b(Y, !1);
    });
  }
  (f(T), f(r), f(S));
  var h = H(S, 2);
  {
    var I = (b) => {
      var V = re(),
        O = m(V),
        y = m(O);
      y.__click = () => B(l, !1);
      var k = H(y, 2);
      k.__click = () => B(l, !1);
      var G = H(k, 2);
      G.__click = () => B(l, !1);
      var R = H(G, 2);
      R.__click = () => B(l, !1);
      var K = m(R);
      wa(K, { size: 16, weight: "duotone" });
      var Z = H(K, 2),
        N = m(Z);
      (f(Z),
        f(R),
        f(O),
        f(V),
        ia(() => va(N, `Carrinho (${fa.totalItems ?? ""})`)),
        W(
          1,
          V,
          () => na,
          () => ({ y: -10, duration: 300, easing: ma }),
        ),
        W(
          2,
          V,
          () => na,
          () => ({ y: -10, duration: 200, easing: ma }),
        ),
        t(b, V));
    };
    A(h, (b) => {
      n(l) && b(I);
    });
  }
  (f(w),
    ia(() =>
      oa(
        w,
        1,
        `sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300 ${n(d) > 10 ? "shadow-lg shadow-primary/5" : ""}`,
      ),
    ),
    gr(
      "y",
      () => n(d),
      (b) => B(d, b, !0),
    ),
    t(o, w),
    ta(),
    s());
}
La(["click", "keydown"]);
var oe = J(
    '<div class="rounded-xl bg-accent/10 border border-accent/30 p-4 text-sm text-accent font-medium">🎉 Subscrito com sucesso!</div>',
  ),
  ie = J(
    '<form class="space-y-2"><input type="email" placeholder="teu@email.com" required class="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"/> <button type="submit" class="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95">Subscrever</button></form>',
  ),
  se = J(
    `<footer class="relative border-t border-border/40 bg-gradient-to-br from-muted/40 to-background"><div class="container mx-auto px-4 py-16"><div class="grid gap-12 md:grid-cols-4"><div class="md:col-span-2"><div class="mb-4 flex items-center gap-2.5"><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg"><img src="/duck.svg" alt="Duck Shop" class="h-11 w-11"/></div> <span class="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style="font-family: 'Plus Jakarta Sans', sans-serif;">Duck Shop</span></div> <p class="mb-2 max-w-sm leading-relaxed text-muted-foreground">Patos de borracha temáticos com personalidade. Para developers, coleccionadores e quem quer uma lembrança de Portugal diferente.</p> <div class="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground"><!> <span>Porto, Portugal</span></div> <div class="flex gap-3"><a href="https://www.facebook.com/duckshop" aria-label="Facebook" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"><!></a> <a href="https://www.instagram.com/duckshop" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"><!></a> <a href="mailto:contato@duckshop.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"><!></a></div></div> <div><h3 class="mb-5 font-bold">Links Rápidos</h3> <ul class="space-y-3 text-sm"><li><a href="/" class="text-muted-foreground transition-colors hover:text-primary">Início</a></li> <li><a href="/produtos" class="text-muted-foreground transition-colors hover:text-primary">Catálogo</a></li> <li><a href="/sobre" class="text-muted-foreground transition-colors hover:text-primary">Sobre Nós</a></li> <li><a href="/carrinho" class="text-muted-foreground transition-colors hover:text-primary">Carrinho</a></li> <li><a href="/privacidade" class="text-muted-foreground transition-colors hover:text-primary">Privacidade</a></li></ul></div> <div><h3 class="mb-2 font-bold">Newsletter</h3> <p class="mb-4 text-sm text-muted-foreground">Receber novidades de quack em quack 🦆</p> <!></div></div> <div class="mt-12 border-t border-border/40 pt-8 flex flex-col items-center justify-between gap-3 sm:flex-row text-sm text-muted-foreground"><p> </p> <p>Desenvolvido por <a href="https://four-front.vercel.app/" class="text-accent hover:underline ml-1">Void Studio</a></p></div></div></footer>`,
  );
function ne(o, a) {
  ea(a, !0);
  let e = la(""),
    p = la(!1);
  function s(h) {
    (h.preventDefault(), n(e).trim() && (B(p, !0), B(e, "")));
  }
  var l = se(),
    d = m(l),
    x = m(d),
    u = m(x),
    c = H(m(u), 4),
    w = m(c);
  (dr(w, { size: 12, weight: "duotone", class: "text-primary shrink-0" }),
    sa(2),
    f(c));
  var S = H(c, 2),
    _ = m(S),
    g = m(_);
  (Ir(g, { size: 20, weight: "fill" }), f(_));
  var E = H(_, 2),
    r = m(E);
  (Or(r, { size: 20, weight: "fill" }), f(E));
  var i = H(E, 2),
    M = m(i);
  (Ar(M, { size: 20, weight: "regular" }), f(i), f(S), f(u));
  var z = H(u, 4),
    P = H(m(z), 4);
  {
    var v = (h) => {
        var I = oe();
        t(h, I);
      },
      T = (h) => {
        var I = ie(),
          b = m(I);
        (Fa(b),
          sa(2),
          f(I),
          Oa("submit", I, s),
          ja(
            b,
            () => n(e),
            (V) => B(e, V),
          ),
          t(h, I));
      };
    A(P, (h) => {
      n(p) ? h(v) : h(T, !1);
    });
  }
  (f(z), f(x));
  var D = H(x, 2),
    X = m(D),
    Y = m(X);
  (f(X),
    sa(2),
    f(D),
    f(d),
    f(l),
    ia(
      (h) => va(Y, `© ${h ?? ""} Duck Shop · Todos os direitos reservados.`),
      [() => new Date().getFullYear()],
    ),
    t(o, l),
    ta());
}
var le = J(
    '<div class="pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-2xl shadow-black/10 min-w-[220px] max-w-[320px] svelte-vg4gef"><div class="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary to-accent"></div> <span class="text-xl shrink-0 ml-1"> </span> <p class="flex-1 text-sm font-medium text-foreground leading-snug"> </p> <button class="shrink-0 rounded-md p-0.5 text-muted-foreground transition-colors hover:text-foreground" aria-label="Fechar"><!></button></div>',
  ),
  ve = J(
    '<div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none svelte-vg4gef" aria-live="polite"></div>',
  );
function de(o, a) {
  ea(a, !1);
  const e = () => ka(za, "$toasts", p),
    [p, s] = Ma();
  cr();
  var l = ve();
  (nr(
    l,
    5,
    e,
    (d) => d.id,
    (d, x) => {
      var u = le(),
        c = H(m(u), 2),
        w = m(c, !0);
      f(c);
      var S = H(c, 2),
        _ = m(S, !0);
      f(S);
      var g = H(S, 2);
      g.__click = () => za.dismiss(n(x).id);
      var E = m(g);
      (ya(E, { size: 14, weight: "regular" }),
        f(g),
        f(u),
        ia(() => {
          (va(w, n(x).emoji), va(_, n(x).message));
        }),
        W(
          1,
          u,
          () => na,
          () => ({ y: 16, duration: 280, easing: Ia }),
        ),
        W(
          2,
          u,
          () => Za,
          () => ({ start: 0.95, duration: 200, easing: Ia }),
        ),
        t(d, u));
    },
  ),
    f(l),
    t(o, l),
    ta(),
    s());
}
La(["click"]);
var ce = J("<div><!></div>"),
  fe = J(
    '<div class="flex min-h-screen flex-col"><!> <main class="flex-1"><!></main> <!></div> <!>',
    1,
  );
function Me(o, a) {
  ea(a, !0);
  const e = () => ka(vr, "$navigating", p),
    [p, s] = Ma();
  var l = fe(),
    d = F(l),
    x = m(d);
  te(x, {});
  var u = H(x, 2),
    c = m(u);
  (fr(
    c,
    () => {
      var _, g;
      return (
        ((g = (_ = e()) == null ? void 0 : _.to) == null
          ? void 0
          : g.url.pathname) ?? "home"
      );
    },
    (_) => {
      var g = ce(),
        E = m(g);
      (ua(E, () => a.children),
        f(g),
        W(
          1,
          g,
          () => Ta,
          () => ({ duration: 180, delay: 80 }),
        ),
        W(
          2,
          g,
          () => Ta,
          () => ({ duration: 100 }),
        ),
        t(_, g));
    },
  ),
    f(u));
  var w = H(u, 2);
  (ne(w, {}), f(d));
  var S = H(d, 2);
  (de(S, {}), t(o, l), ta(), s());
}
export { Me as component };
