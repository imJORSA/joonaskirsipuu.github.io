/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
export { renderers } from '../renderers.mjs';

const HeaderPicture = "/images/BANNER.webp";
const Games = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { name: "Games", className: "w-full min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0", children: /* @__PURE__ */ jsx("div", { className: "text-left w-full cursor-default", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default", children: t("games_page.title") }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default", children: t("games_page.singleplayer_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8", children: [
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.cp2077.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.cp2077.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.witcher3.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.witcher3.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.mario_galaxy.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.mario_galaxy.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.ori.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.ori.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.dead_space.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.dead_space.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.singleplayer.minecraft.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.singleplayer.minecraft.desc") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default", children: t("games_page.multiplayer_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5", children: [
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.multiplayer.lol.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.multiplayer.lol.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.multiplayer.overwatch.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.multiplayer.overwatch.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("games_page.multiplayer.warframe.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("games_page.multiplayer.warframe.desc") })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

const $$Games = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Games | Joonas Kirsipuu", "description": "Favourite games by Joonas Kirsipuu." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GamesApp", Games, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/GamesApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Games.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Games.astro";
const $$url = "/Games";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Games,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
