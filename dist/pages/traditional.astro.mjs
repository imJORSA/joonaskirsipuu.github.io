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
        text: 'traditional.thinkingOfYou.text',
        subtext: 'traditional.thinkingOfYou.subtext',
        thumbnail: '/images/traditional/Thinking of you_thumbnail.webp',
        full: '/images/traditional/Thinking of you.webp',
        width: 800,
        height: 575,
        alt: 'traditional.thinkingOfYou.alt',
    },
    {
        text: 'traditional.shy.text',
        subtext: 'traditional.shy.subtext',
        thumbnail: '/images/traditional/Shy_thumbnail.webp',
        full: '/images/traditional/Shy.webp',
        width: 800,
        height: 1098,
        alt: 'traditional.shy.alt',
    },
    {
        text: 'traditional.closeYourEyes.text',
        subtext: 'traditional.closeYourEyes.subtext',
        thumbnail: '/images/traditional/Close your eyes_thumbnail.webp',
        full: '/images/traditional/Close your eyes.webp',
        width: 800,
        height: 1095,
        alt: 'traditional.closeYourEyes.alt',
    },
    {
        text: 'traditional.girl001.text',
        subtext: 'traditional.girl001.subtext',
        thumbnail: '/images/traditional/Girl 001_thumbnail.webp',
        full: '/images/traditional/Girl 001.webp',
        width: 800,
        height: 913,
        alt: 'traditional.girl001.alt',
    },
    {
        text: 'traditional.theOpposite.text',
        subtext: 'traditional.theOpposite.subtext',
        thumbnail: '/images/traditional/The opposite_thumbnail.webp',
        full: '/images/traditional/The opposite.webp',
        width: 800,
        height: 983,
        alt: 'traditional.theOpposite.alt',
    },
    {
        text: 'traditional.abstract001.text',
        subtext: 'traditional.abstract001.subtext',
        thumbnail: '/images/traditional/Abstract 001_thumbnail.webp',
        full: '/images/traditional/Abstract 001.webp',
        width: 800,
        height: 1106,
        alt: 'traditional.abstract001.alt',
    },
    {
        text: 'traditional.act001.text',
        subtext: 'traditional.act001.subtext',
        thumbnail: '/images/traditional/Akt 001_thumbnail.webp',
        full: '/images/traditional/Akt 001.webp',
        width: 800,
        height: 972,
        alt: 'traditional.act001.alt',
    },
    {
        text: 'traditional.linework.text',
        subtext: 'traditional.linework.subtext',
        thumbnail: '/images/traditional/Linework_thumbnail.webp',
        full: '/images/traditional/Linework.webp',
        width: 800,
        height: 1107,
        alt: 'traditional.linework.alt',
    },
    {
        text: 'traditional.sittingWithColours.text',
        subtext: 'traditional.sittingWithColours.subtext',
        thumbnail: '/images/traditional/Sitting with colours_thumbnail.webp',
        full: '/images/traditional/Sitting with colours.webp',
        width: 800,
        height: 1131,
        alt: 'traditional.sittingWithColours.alt',
    },
    {
        text: 'traditional.watercolourWithRainwater.text',
        subtext: 'traditional.watercolourWithRainwater.subtext',
        thumbnail: '/images/traditional/Watercolour with rainwater_thumbnail.webp',
        full: '/images/traditional/Watercolour with rainwater.webp',
        width: 800,
        height: 1105,
        alt: 'traditional.watercolourWithRainwater.alt',
    },
    {
        text: 'traditional.guitarGlove.text',
        subtext: 'traditional.guitarGlove.subtext',
        thumbnail: '/images/traditional/Guitar Glove_thumbnail.webp',
        full: '/images/traditional/Guitar Glove.webp',
        width: 800,
        height: 1151,
        alt: 'traditional.guitarGlove.alt',
    },
    {
        text: 'traditional.straightenYourTie.text',
        subtext: 'traditional.straightenYourTie.subtext',
        thumbnail: '/images/traditional/Straighten your tie_thumbnail.webp',
        full: '/images/traditional/Straighten your tie.webp',
        width: 800,
        height: 1130,
        alt: 'traditional.straightenYourTie.alt',
    },
];

const HeaderPicture = "/images/BANNER.webp";
function TraditionalApp() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      GalleryPage,
      {
        name: "Traditional",
        data,
        headerImage: HeaderPicture,
        isMasonry: true
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

const $$Traditional = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Traditional | Joonas Kirsipuu", "description": "Traditional drawings, paintings, and sketches by Joonas Kirsipuu.", "ogImage": "https://joonaskirsipuu.eu/images/traditional/Thinking of you_thumbnail.webp", "ogImageAlt": "Thinking of You by Joonas Kirsipuu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TraditionalApp", TraditionalApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/components/TraditionalApp.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Traditional.astro", void 0);

const $$file = "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/pages/Traditional.astro";
const $$url = "/Traditional";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Traditional,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
