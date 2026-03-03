/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { F as Footer, $ as $$BaseLayout } from '../chunks/Footer_x0TgDCEm.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { G as GalleryPage } from '../chunks/GalleryPage_Db2Ue6Bf.mjs';
export { renderers } from '../renderers.mjs';

const data = [
    {
        text: 'images.cerebrum.text',
        subtext: 'images.cerebrum.subtext',
        thumbnail: '/images/gallery/Cerebrum_Joonas Kirsipuu_thumbnail.webp',
        full: '/images/gallery/Cerebrum_Joonas Kirsipuu.webp',
        width: 800,
        height: 450,
        alt: 'images.cerebrum.alt',
    },
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
        text: 'images.capsuleNightview.text',
        subtext: 'images.capsuleNightview.subtext',
        thumbnail: '/images/fractal/KAPSLI_OOVAADE_thumbnail.webp',
        full: '/images/fractal/KAPSLI_OOVAADE.webp',
        width: 800,
        height: 566,
        alt: 'images.capsuleNightview.alt',
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
        text: 'images.bathroom001.text',
        subtext: 'images.bathroom001.subtext',
        thumbnail: '/images/fractal/VANNITUBA_2_thumbnail.webp',
        full: '/images/fractal/VANNITUBA_2.webp',
        width: 800,
        height: 566,
        alt: 'images.bathroom001.alt',
    },
    {
        text: 'images.commonRoom.text',
        subtext: 'images.commonRoom.subtext',
        thumbnail: '/images/fractal/UHISRUUM_thumbnail.webp',
        full: '/images/fractal/UHISRUUM.webp',
        width: 800,
        height: 566,
        alt: 'images.commonRoom.alt',
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
        text: 'images.yunoChan.text',
        subtext: 'images.yunoChan.subtext',
        thumbnail: '/images/gallery/ゆのちゃん_thumbnail.webp',
        full: '/images/gallery/ゆのちゃん.webp',
        width: 800,
        height: 388,
        alt: 'images.yunoChan.alt',
    },
    {
        text: 'images.porsche.text',
        subtext: 'images.porsche.subtext',
        thumbnail: '/images/gallery/Porsche_911_thumbnail.webp',
        full: '/images/gallery/Porsche_911.webp',
        width: 800,
        height: 450,
        alt: 'images.porsche.alt',
    }
];

const HeaderPicture = "/images/BANNER.webp";
function GalleryApp() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      GalleryPage,
      {
        name: "Gallery",
        data,
        headerImage: HeaderPicture,
        isMasonry: true
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Joonas Kirsipuu | 3D Geek, Worldbuilder & Designer", "description": "Portfolio gallery featuring digital artworks by Joonas Kirsipuu.", "ogImage": "https://joonaskirsipuu.eu/images/gallery/Cerebrum_Joonas Kirsipuu_thumbnail.webp", "ogImageAlt": "Cerebrum by Joonas Kirsipuu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryApp", GalleryApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/GalleryApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
