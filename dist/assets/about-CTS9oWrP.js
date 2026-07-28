import { i as e, n as t, r as n, t as r } from "./Navbar-DrhdlGH6.js";
/* empty css              */ var i = e(),
  a = n(),
  o = `/assets/hero-sticker-new-D9W5dCna.png`,
  s = t(),
  c = [
    [
      `🌸`,
      (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(`strong`, { children: `Virgo Sun` }),
          ` ♍ • Dreamer with a logical mind`,
        ],
      }),
    ],
    [`💻`, `Turning ideas into interactive web experiences`],
    [`🎨`, `I love designing interfaces that are simple, clean & enjoyable`],
    [
      `📚`,
      `Always learning something new—because technology never stops evolving`,
    ],
    [`☕`, `Powered by coffee, curiosity & late-night coding sessions`],
    [
      `✨`,
      `I believe the best products are built with equal parts creativity, patience, and purpose.`,
    ],
  ];
function l() {
  return (0, s.jsx)(`section`, {
    className: `about-section`,
    children: (0, s.jsxs)(`div`, {
      className: `about-wrapper`,
      children: [
        (0, s.jsxs)(`div`, {
          className: `about-left`,
          children: [
            (0, s.jsxs)(`div`, {
              className: `polaroid`,
              children: [
                (0, s.jsx)(`img`, { src: o, alt: `Bhumika Awasthi` }),
                (0, s.jsx)(`span`, {
                  className: `polaroid-name`,
                  children: `Bhumika!`,
                }),
              ],
            }),
            (0, s.jsxs)(`div`, {
              className: `about-role`,
              children: [
                (0, s.jsx)(`h3`, { children: `Bhumika Awasthi` }),
                (0, s.jsx)(`p`, { children: `Full Stack Developer` }),
                (0, s.jsx)(`span`, { children: `Frontend & MERN Enthusiast` }),
              ],
            }),
          ],
        }),
        (0, s.jsxs)(`div`, {
          className: `about-right`,
          children: [
            (0, s.jsx)(`h1`, { children: `A little about me...` }),
            (0, s.jsx)(`ul`, {
              className: `about-list`,
              children: c.map(([e, t]) =>
                (0, s.jsxs)(
                  `li`,
                  {
                    children: [
                      (0, s.jsx)(`span`, { children: e }),
                      (0, s.jsx)(`p`, { children: t }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
(0, a.createRoot)(document.getElementById(`root`)).render(
  (0, s.jsx)(i.StrictMode, {
    children: (0, s.jsxs)(`main`, {
      className: `site-shell`,
      children: [(0, s.jsx)(r, { currentPage: `about` }), (0, s.jsx)(l, {})],
    }),
  }),
);
