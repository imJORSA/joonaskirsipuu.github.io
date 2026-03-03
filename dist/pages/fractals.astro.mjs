/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { G as GalleryPage } from '../chunks/GalleryPage_Db2Ue6Bf.mjs';
export { renderers } from '../renderers.mjs';

const data = [
    {
        text: 'images.fractals001.text',
        subtext: 'images.fractals001.subtext',
        thumbnail: '/images/fractal/KAPSLID_VALJAST_1_thumbnail.webp',
        full: '/images/fractal/KAPSLID_VALJAST_1.webp',
        width: 800,
        height: 566,
        alt: 'images.fractals001.alt',
    },
    {
        text: 'fractals.hallway.text',
        subtext: 'fractals.hallway.subtext',
        thumbnail: '/images/fractal/ESIK_thumbnail.webp',
        full: '/images/fractal/ESIK.webp',
        width: 800,
        height: 566,
        alt: 'fractals.hallway.alt',
    },
    {
        text: 'fractals.capsuleView002.text',
        subtext: 'fractals.capsuleView002.subtext',
        thumbnail: '/images/fractal/KAPSLI_LAI_VAADE_1_thumbnail.webp',
        full: '/images/fractal/KAPSLI_LAI_VAADE_1.webp',
        width: 800,
        height: 566,
        alt: 'fractals.capsuleView002.alt',
    },
    {
        text: 'images.capsuleView001.text',
        subtext: 'images.capsuleView001.subtext',
        thumbnail: '/images/fractal/KAPSLI_LAI_VAADE_2_thumbnail.webp',
        full: '/images/fractal/KAPSLI_LAI_VAADE_2.webp',
        width: 800,
        height: 566,
        alt: 'images.capsuleView001.alt',
    },
    {
        text: 'images.capsuleNightview.text',
        subtext: 'images.capsuleNightview.subtext',
        thumbnail: '/images/fractal/KAPSLI_OOVAADE_thumbnail.webp',
        full: '/images/fractal/KAPSLI_OOVAADE.webp',
        width: 800,
        height: 566,
        alt: 'images.capsuleNightview.alt',
    },
    {
        text: 'fractals.capsuleView003.text',
        subtext: 'fractals.capsuleView003.subtext',
        thumbnail: '/images/fractal/KAPSLI_VAADE_1_thumbnail.webp',
        full: '/images/fractal/KAPSLI_VAADE_1.webp',
        width: 800,
        height: 566,
        alt: 'fractals.capsuleView003.alt',
    },
    {
        text: 'fractals.capsuleView004.text',
        subtext: 'fractals.capsuleView004.subtext',
        thumbnail: '/images/fractal/KAPSLI_VAADE_2_thumbnail.webp',
        full: '/images/fractal/KAPSLI_VAADE_2.webp',
        width: 800,
        height: 566,
        alt: 'fractals.capsuleView004.alt',
    },
    {
        text: 'fractals.capsuleView005.text',
        subtext: 'fractals.capsuleView005.subtext',
        thumbnail: '/images/fractal/KAPSLI_VAADE_3_thumbnail.webp',
        full: '/images/fractal/KAPSLI_VAADE_3.webp',
        width: 800,
        height: 566,
        alt: 'fractals.capsuleView005.alt',
    },
    {
        text: 'fractals.fractals002.text',
        subtext: 'fractals.fractals002.subtext',
        thumbnail: '/images/fractal/KAPSLID_LAHEDALT_thumbnail.webp',
        full: '/images/fractal/KAPSLID_LAHEDALT.webp',
        width: 800,
        height: 566,
        alt: 'fractals.fractals002.alt',
    },
    {
        text: 'fractals.fractals003.text',
        subtext: 'fractals.fractals003.subtext',
        thumbnail: '/images/fractal/KAPSLID_VALJAST_2_thumbnail.webp',
        full: '/images/fractal/KAPSLID_VALJAST_2.webp',
        width: 800,
        height: 566,
        alt: 'fractals.fractals003.alt',
    },
    {
        text: 'fractals.commonRoom.text',
        subtext: 'fractals.commonRoom.subtext',
        thumbnail: '/images/fractal/UHISRUUM_thumbnail.webp',
        full: '/images/fractal/UHISRUUM.webp',
        width: 800,
        height: 566,
        alt: 'fractals.commonRoom.alt',
    },
    {
        text: 'fractals.bathroom002.text',
        subtext: 'fractals.bathroom002.subtext',
        thumbnail: '/images/fractal/VANNITUBA_1_thumbnail.webp',
        full: '/images/fractal/VANNITUBA_1.webp',
        width: 800,
        height: 566,
        alt: 'fractals.bathroom002.alt',
    },
    {
        text: 'images.bathroom001.text',
        subtext: 'images.bathroom001.subtext',
        thumbnail: '/images/fractal/VANNITUBA_2_thumbnail.webp',
        full: '/images/fractal/VANNITUBA_2.webp',
        width: 800,
        height: 566,
        alt: 'images.bathroom001.alt',
    },
    {
        text: 'images.wireframe001.text',
        subtext: 'images.wireframe001.subtext',
        thumbnail: '/images/fractal/WIREFRAME_1_thumbnail.webp',
        full: '/images/fractal/WIREFRAME_1.webp',
        width: 800,
        height: 566,
        alt: 'images.wireframe001.alt',
    },
    {
        text: 'fractals.wireframe002.text',
        subtext: 'fractals.wireframe002.subtext',
        thumbnail: '/images/fractal/WIREFRAME_2_thumbnail.webp',
        full: '/images/fractal/WIREFRAME_2.webp',
        width: 800,
        height: 566,
        alt: 'fractals.wireframe002.alt',
    },
    {
        isLink: true,
        href: "https://www.youtube.com/watch?v=OgJt-XeCctM",
        text: 'fractals.animation.text',
        subtext: 'fractals.animation.subtext',
        thumbnail: '/images/fractal/KAPSLID_VALJAST_1_thumbnail.webp',
        width: 800,
        height: 566,
        alt: 'fractals.animation.alt',
    },
];

const HeaderPicture = "/images/BANNER.webp";
const FractalPicture = "/images/Fractalpicture.webp";
const MyFutureSpace = "/docs/Joonas Kirsipuu_My Future Space_2024_Summary_Pallas.pdf";
const MinuTulevikuRuum = "/docs/Joonas Kirsipuu_Minu tuleviku ruum_2024_Pallas.pdf";
function FractalsApp() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      GalleryPage,
      {
        name: "Fractals",
        data,
        headerImage: HeaderPicture,
        showText: false,
        imageObjectFit: "object-cover",
        children: /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full lg:w-auto items-center lg:items-start", children: /* @__PURE__ */ jsx("div", { className: "object-center lg:object-left", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: FractalPicture,
              loading: "eager",
              className: "w-full h-auto max-h-[500px] xl:max-h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300",
              alt: t("fractals_page.alt")
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[600px] lg:overflow-y-auto pr-4", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500", children: t("fractals_page.title") }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base leading-6 pb-5 text-black", children: [
              t("fractals_page.desc1").split("[LINK1]")[0],
              /* @__PURE__ */ jsx("a", { href: MyFutureSpace, download: true, className: "text-blue-500 hover:underline", children: t("fractals_page.link1_text") }),
              t("fractals_page.desc1").split("[LINK1]")[1]
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base leading-6 pb-5 text-black", children: [
              t("fractals_page.desc2").split("[LINK2]")[0],
              /* @__PURE__ */ jsx("a", { href: MinuTulevikuRuum, download: true, className: "text-blue-500 hover:underline", children: t("fractals_page.link2_text") }),
              t("fractals_page.desc2").split("[LINK2]")[1]
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-6 pb-5 text-black", children: t("fractals_page.desc3") })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

const $$Fractals = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Fractals | Joonas Kirsipuu", "description": "3D fractal worldbuilding project by Joonas Kirsipuu.", "ogImage": "https://joonaskirsipuu.eu/images/Fractalpicture.webp", "ogImageAlt": "Project Fractals by Joonas Kirsipuu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FractalsApp", FractalsApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/FractalsApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Fractals.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Fractals.astro";
const $$url = "/Fractals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Fractals,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
