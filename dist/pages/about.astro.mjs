/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { FaArtstation, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa/index.esm.js';
export { renderers } from '../renderers.mjs';

const ProfilePicture = "/images/Profile_Picture.webp";
const HeaderPicture = "/images/BANNER.webp";
const About = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { name: "About", className: "w-full min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: HeaderPicture, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full lg:w-auto items-center lg:items-start", children: /* @__PURE__ */ jsxs("div", { className: "inline-block", children: [
        /* @__PURE__ */ jsx("div", { className: "object-center lg:object-left", children: /* @__PURE__ */ jsx("img", { src: ProfilePicture, loading: "eager", className: "h-auto max-h-[500px] xl:max-h-[600px] max-w-full object-contain grayscale hover:grayscale-0 ease-in-out duration-300", alt: t("about_page.profile_alt") }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-1 pt-4 list-none w-full", children: [
          /* @__PURE__ */ jsx("li", { className: "aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300", children: /* @__PURE__ */ jsx("a", { href: "https://www.artstation.com/joonaskirsipuu", target: "_blank", rel: "noreferrer", className: "flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx(FaArtstation, {}) }) }),
          /* @__PURE__ */ jsx("li", { className: "aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300", children: /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/joonas.kirsipuu", target: "_blank", rel: "noreferrer", className: "flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx(FaFacebook, {}) }) }),
          /* @__PURE__ */ jsx("li", { className: "aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300", children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/joonaskirsipuu/", target: "_blank", rel: "noreferrer", className: "flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }) }),
          /* @__PURE__ */ jsx("li", { className: "aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/joonas-k-3b2879104/", target: "_blank", rel: "noreferrer", className: "flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx(FaLinkedin, {}) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[990px] lg:overflow-y-auto pr-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl text-blue-900", children: t("about_page.thats_me") }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl pt-2 pb-8 font-bold text-blue-500", children: "Joonas Kirsipuu" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 text-black", children: t("about_page.intro1") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 py-5 text-black", children: t("about_page.intro2") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 text-black", children: t("about_page.intro3") }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl text-blue-500 font-bold cursor-default", children: t("about_page.experience") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.jobs.harmonia.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.jobs.harmonia.date") }),
            /* @__PURE__ */ jsx("p", { className: "pl-4", children: t("about_page.jobs.harmonia.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.jobs.tech3d.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.jobs.tech3d.date") }),
            /* @__PURE__ */ jsx("p", { className: "pl-4", children: t("about_page.jobs.tech3d.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.jobs.freelance.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.jobs.freelance.date") }),
            /* @__PURE__ */ jsx("p", { className: "pl-4", children: t("about_page.jobs.freelance.desc") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl text-blue-500 font-bold cursor-default", children: t("about_page.education") }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.schools.pallas.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.schools.pallas.date") }),
            /* @__PURE__ */ jsx("p", { className: "pl-4", children: t("about_page.schools.pallas.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.schools.tartu.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.schools.tartu.date") }),
            /* @__PURE__ */ jsx("p", { className: "pl-4", children: t("about_page.schools.tartu.desc") })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.schools.reiniku.title") }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.schools.reiniku.date") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 pb-5", children: /* @__PURE__ */ jsx("div", { className: "border-t-2 border-dotted border-blue-900" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-2xl text-blue-500 font-bold cursor-default", children: t("about_page.exhibitions") }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default", children: /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-base sm:text-lg", children: t("about_page.exhibs.pallas.title") }),
          /* @__PURE__ */ jsx("div", { className: "text-slate-500 text-xs sm:text-sm italic mb-1", children: t("about_page.exhibs.pallas.date") })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Joonas Kirsipuu", "description": "Learn more about Joonas Kirsipuu, a 3D geek, worldbuilder and designer.", "ogImage": "https://joonaskirsipuu.eu/images/Profile_Picture.webp", "ogImageAlt": "Joonas Kirsipuu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutApp", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/AboutApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/About.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/About.astro";
const $$url = "/About";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
