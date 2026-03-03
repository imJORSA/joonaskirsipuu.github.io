/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
export { renderers } from '../renderers.mjs';

const HeaderPicture = "/images/BANNER.webp";
const Blog = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { name: "Blog", className: "w-full min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full mb-10 xl:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-4xl md:text-5xl text-blue-500 mb-2 font-bold", children: t("blog_page.title") }),
        /* @__PURE__ */ jsx("h2", { className: "text-sm sm:text-2xl text-black mb-10", children: t("blog_page.subtitle") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx("li", { className: "text-sm sm:text-2xl font-bold", children: /* @__PURE__ */ jsx("a", { href: "/GenAI", className: "text-black cursor-pointer hover:text-sky-300 transition-colors duration-300", children: t("blog_page.links.genai") }) }),
          /* @__PURE__ */ jsx("li", { className: "text-sm sm:text-2xl font-bold", children: /* @__PURE__ */ jsx("a", { href: "/FilmsSeriesAnime", className: "text-black cursor-pointer hover:text-sky-300 transition-colors duration-300", children: t("blog_page.links.films") }) }),
          /* @__PURE__ */ jsx("li", { className: "text-sm sm:text-2xl font-bold", children: /* @__PURE__ */ jsx("a", { href: "/Games", className: "text-black cursor-pointer hover:text-sky-300 transition-colors duration-300", children: t("blog_page.links.games") }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | Joonas Kirsipuu", "description": "Personal blog and updates from Joonas Kirsipuu." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogApp", Blog, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/BlogApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Blog.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Blog.astro";
const $$url = "/Blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
