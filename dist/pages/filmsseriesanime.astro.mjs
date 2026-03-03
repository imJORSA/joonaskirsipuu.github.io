/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation, Trans } from 'react-i18next';
export { renderers } from '../renderers.mjs';

const HeaderPicture = "/images/BANNER.webp";
const FilmsSeriesAnime = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { name: "FilmsSeriesAnime", className: "w-full min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0", children: /* @__PURE__ */ jsx("div", { className: "text-left w-full cursor-default", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default", children: t("films_page.title") }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default", children: t("films_page.films_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8", children: [
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.br.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.br.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.br2049.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.br2049.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.alien.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.alien.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.space_odyssey.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.space_odyssey.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.dune.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.dune.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.lotr.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.lotr.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.arrival.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.arrival.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.whiplash.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.whiplash.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.joker.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.joker.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.y1917.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.y1917.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.pirates.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.pirates.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.films.oppenheimer.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.films.oppenheimer.desc") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default", children: t("films_page.series_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8", children: [
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.bb.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.bb.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.got.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.got.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.andor.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.andor.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.mr_robot.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.mr_robot.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.chernobyl.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.chernobyl.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.house.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.house.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.aib.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.aib.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.series.clarkson.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.series.clarkson.desc") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default", children: t("films_page.anime_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5", children: [
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.anime.initial_d.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.anime.initial_d.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "cursor-default", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: t("films_page.anime.edgerunners.title") }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: t("films_page.anime.edgerunners.desc") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 pt-10 text-black", children: /* @__PURE__ */ jsxs(Trans, { i18nKey: "films_page.imdb_link", children: [
          "If you're interested, you can check out my ratings for films & series ",
          /* @__PURE__ */ jsx("a", { href: "https://www.imdb.com/user/ur212129254/ratings/?ref_=hm_nv_rat", target: "_blank", rel: "noreferrer", className: "text-blue-500 hover:underline", children: "here" }),
          ". It's far from complete though, I'm updating it periodically."
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

const $$FilmsSeriesAnime = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Films, Series & Anime | Joonas Kirsipuu", "description": "Favourite films, series, and anime by Joonas Kirsipuu." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FilmsApp", FilmsSeriesAnime, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/FilmsApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/FilmsSeriesAnime.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/FilmsSeriesAnime.astro";
const $$url = "/FilmsSeriesAnime";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FilmsSeriesAnime,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
