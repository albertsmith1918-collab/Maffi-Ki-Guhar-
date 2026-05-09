!(function () {
  try {
    var e =
        "u" > typeof window
          ? window
          : "u" > typeof global
          ? global
          : "u" > typeof globalThis
          ? globalThis
          : "u" > typeof self
          ? self
          : {},
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "bb8dbce8-070b-4a26-8f01-77b212dd521e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-bb8dbce8-070b-4a26-8f01-77b212dd521e"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [345],
    {
      712: (e, a, t) => {
        "use strict";
        t.d(a, { default: () => d });
        var s = t(5155),
          n = t(2115);
        t(7692);
        let d = function ({ currentPage: e }) {
          let [a, t] = (0, n.useState)([]),
            [d, r] = (0, n.useState)(!1);
          return ((0, n.useEffect)(() => {
            t(
              [...Array(30)].map((e, a) => ({
                left: 100 * Math.random(),
                delay: 12 * Math.random(),
                duration: 10 + 10 * Math.random(),
                size: 2 + 4 * Math.random(),
                type: a % 5,
                drift: -30 + 60 * Math.random(),
                opacity: 0.25 + 0.55 * Math.random(),
              }))
            ),
              r(!0);
          }, []),
          d)
            ? (0, s.jsx)("div", {
                className: `sparkle-field ${3 === e ? "sparkle-delay" : ""}`,
                "aria-hidden": "true",
                children: a.map((e, a) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: `sparkle-particle sparkle-type-${e.type}`,
                      style: {
                        left: `${e.left}%`,
                        animationDelay: `${e.delay}s`,
                        animationDuration: `${e.duration}s`,
                        "--size": `${e.size}px`,
                        "--drift": `${e.drift}px`,
                        "--peak-opacity": e.opacity,
                      },
                    },
                    a
                  )
                ),
              })
            : (0, s.jsx)("div", {
                className: `sparkle-field ${3 === e ? "sparkle-delay" : ""}`,
                "aria-hidden": "true",
              });
        };
      },
      2347: () => {},
      3694: (e, a, t) => {
        Promise.resolve().then(t.bind(t, 3850));
      },
      3850: (e, a, t) => {
        "use strict";
        t.r(a), t.d(a, { default: () => i });
        var s = t(5155);
        t(2115);
        var n = t(8500),
          d = t.n(n),
          r = t(712);
        function i() {
          return (0, s.jsxs)("div", {
            className: "not-found-page",
            children: [
              (0, s.jsx)(r.default, { currentPage: 1 }),
              (0, s.jsx)("div", {
                className: "not-found",
                children: (0, s.jsxs)("div", {
                  className: "not-found-container",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "not-found-title",
                      children: "404",
                    }),
                    (0, s.jsx)("p", {
                      className: "not-found-message",
                      children: "Page Not Found",
                    }),
                    (0, s.jsx)("p", {
                      className: "not-found-description",
                      children:
                        "Sorry, the page you're looking for doesn't exist.",
                    }),
                    (0, s.jsx)(d(), {
                      href: "/",
                      className: "not-found-link",
                      children: "Return to Home",
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        t(2347);
      },
      7692: () => {},
    },
    (e) => {
      e.O(0, [869, 625, 500, 441, 295, 358], () => e((e.s = 3694))),
        (_N_E = e.O());
    },
  ]);
