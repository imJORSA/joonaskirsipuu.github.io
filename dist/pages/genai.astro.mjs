/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
export { renderers } from '../renderers.mjs';

const HeaderPicture = "/images/BANNER.webp";
const GenAI = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { name: "GenAI", className: "w-full min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0", children: /* @__PURE__ */ jsx("div", { className: "text-left w-full cursor-default", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500", children: t("genai_page.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 pb-5 text-black", children: t("genai_page.wip") })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

const $$GenAI = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Generative AI | Joonas Kirsipuu", "description": "Why GenAI art will be obsolete by Joonas Kirsipuu." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenAIApp", GenAI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/GenAIApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/GenAI.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/GenAI.astro";
const $$url = "/GenAI";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GenAI,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
