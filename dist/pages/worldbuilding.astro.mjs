/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
export { renderers } from '../renderers.mjs';

const HeaderPicture = "/images/BANNER.webp";
const FractalPicture = "/images/Fractalpicture.webp";
function WorldbuildingApp() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { name: "Worldbuilding", className: "w-full min-h-screen bg-white flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: "Joonas Kirsipuu Banner" }) }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex-1 h-auto flex flex-col md:flex-row py-10 gap-4 px-4 xl:px-0", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer", children: /* @__PURE__ */ jsxs("a", { href: "/Fractals", className: "w-full h-full block relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: FractalPicture,
            loading: "eager",
            className: "text-transparent w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
            alt: t("worldbuilding_page.fractals_thumb_alt")
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg", children: t("worldbuilding_page.fractals") }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-black flex justify-center items-center grayscale group-hover:grayscale-0 transition-all duration-500", children: /* @__PURE__ */ jsx("span", { className: "text-9xl font-bold text-blue-500", children: "?" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg", children: t("worldbuilding_page.project3088") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

const $$Worldbuilding = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Worldbuilding | Joonas Kirsipuu", "description": "Worldbuilding projects and concept art by Joonas Kirsipuu.", "ogImage": "https://joonaskirsipuu.eu/images/Fractalpicture.webp", "ogImageAlt": "Worldbuilding by Joonas Kirsipuu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WorldbuildingApp", WorldbuildingApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/WorldbuildingApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Worldbuilding.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Worldbuilding.astro";
const $$url = "/Worldbuilding";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Worldbuilding,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
