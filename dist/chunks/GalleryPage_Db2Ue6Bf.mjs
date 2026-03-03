import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa/index.esm.js';
import { N as Navbar } from './Footer_x0TgDCEm.mjs';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  loading = "eager",
  className,
  srcSet,
  sizes,
  avifSrc,
  ...props
}) => {
  if (avifSrc) {
    return /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx("source", { srcSet: avifSrc, type: "image/avif" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt,
          width,
          height,
          loading,
          decoding: "async",
          className,
          srcSet,
          sizes,
          ...props
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      width,
      height,
      loading,
      decoding: "async",
      className,
      srcSet,
      sizes,
      ...props
    }
  );
};

const GalleryPage = ({
  name,
  data,
  headerImage,
  children,
  isMasonry = false,
  ogImage,
  ogImageAlt,
  title,
  description,
  showText = true,
  imageObjectFit = "object-fill"
}) => {
  const { t } = useTranslation();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const preloaded = useRef(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const baseUrl = "https://joonaskirsipuu.eu";
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.full);
    setLoading(true);
  };
  const handleRotationRight = useCallback(() => {
    if (!data || data.length === 0) return;
    let newIndex = currentIndex;
    const totalLength = data.length;
    do {
      newIndex = (newIndex + 1) % totalLength;
    } while (data[newIndex].isLink);
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
    setLoading(true);
  }, [currentIndex, data]);
  const handleRotationLeft = useCallback(() => {
    if (!data || data.length === 0) return;
    let newIndex = currentIndex;
    const totalLength = data.length;
    do {
      newIndex = (newIndex - 1 + totalLength) % totalLength;
    } while (data[newIndex].isLink);
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
    setLoading(true);
  }, [currentIndex, data]);
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) handleRotationRight();
    if (isRightSwipe) handleRotationLeft();
  };
  useEffect(() => {
    if (clickedImg && !loading && !preloaded.current) {
      data.forEach((item) => {
        if (item.full && !item.isLink) {
          const img = new Image();
          img.src = item.full;
        }
      });
      preloaded.current = true;
    }
  }, [clickedImg, loading, data]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!clickedImg) return;
      if (e.key === "Escape") {
        setClickedImg(null);
      } else if (e.key === "ArrowRight") {
        handleRotationRight();
      } else if (e.key === "ArrowLeft") {
        handleRotationLeft();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [clickedImg, handleRotationRight, handleRotationLeft]);
  useEffect(() => {
    if (clickedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [clickedImg]);
  const containerClass = isMasonry ? "bg-white columns-2 lg:columns-3 xl:columns-4 gap-4 pt-10 px-4 xl:px-0" : showText ? "bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pt-10 pb-20 px-4 xl:px-0" : "bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 pt-10 pb-10 px-4 xl:px-0";
  ({
    "name": title ? t(title) : name,
    "description": description ? t(description) : "",
    "image": data ? data.filter((item) => !item.isLink && item.full).map((item) => ({
      "@type": "ImageObject",
      "contentUrl": `${baseUrl}${item.full}`,
      "thumbnailUrl": `${baseUrl}${item.thumbnail}`,
      "name": t(item.text),
      "description": t(item.subtext),
      "caption": t(item.alt),
      "width": item.width,
      "height": item.height,
      "author": {
        "@type": "Person",
        "name": "Joonas Kirsipuu"
      }
    })) : []
  });
  const itemClass = isMasonry ? "images break-inside-avoid mb-10 group cursor-pointer" : "images overflow-hidden group cursor-pointer";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { name, className: "w-full min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "relative flex h-full m-auto bg-slate-900", children: /* @__PURE__ */ jsx("img", { src: headerImage, loading: "eager", className: "h-full", alt: t("banner_alt") }) }),
    /* @__PURE__ */ jsx(Navbar, {}),
    children,
    /* @__PURE__ */ jsxs("div", { className: containerClass, children: [
      data && data.map((item, index) => {
        if (item.isLink) {
          return /* @__PURE__ */ jsx("div", { className: `${itemClass} relative`, children: /* @__PURE__ */ jsxs("a", { href: item.href, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                className: `text-transparent w-full ${imageObjectFit} grayscale`,
                src: item.thumbnail,
                alt: t(item.alt),
                width: item.width,
                height: item.height
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex justify-center items-center", children: /* @__PURE__ */ jsx("h1", { className: "text-lg sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 drop-shadow-lg text-center", children: t(item.text) }) })
          ] }) }, index);
        }
        return /* @__PURE__ */ jsxs("div", { className: itemClass, children: [
          /* @__PURE__ */ jsx(
            OptimizedImage,
            {
              className: `text-transparent w-full ${imageObjectFit} grayscale group-hover:grayscale-0 transition-all duration-500`,
              src: item.thumbnail,
              alt: t(item.alt),
              width: item.width,
              height: item.height,
              onClick: () => handleClick(item, index)
            }
          ),
          showText && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { className: "pt-1 text-xs sm:text-base xl:text-lg font-bold pointer-events-none text-cyan-950", children: t(item.text) }),
            /* @__PURE__ */ jsx("h2", { className: "text-[8px] sm:text-xs font-thin pointer-events-none text-cyan-950", children: t(item.subtext) })
          ] })
        ] }, index);
      }),
      /* @__PURE__ */ jsx("div", { children: clickedImg && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "overlay",
          onClick: (e) => {
            if (e.target.classList.contains("overlay")) {
              setClickedImg(null);
            }
          },
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "modal-wrapper", children: [
              !loading && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { onClick: () => setClickedImg(null), children: /* @__PURE__ */ jsx(FaTimes, {}) }),
                /* @__PURE__ */ jsx("div", { className: "overlay-arrows_left", onClick: handleRotationLeft, children: /* @__PURE__ */ jsx(FaChevronLeft, {}) }),
                /* @__PURE__ */ jsx("div", { className: "overlay-arrows_right", onClick: handleRotationRight, children: /* @__PURE__ */ jsx(FaChevronRight, {}) })
              ] }),
              loading && /* @__PURE__ */ jsx("div", { className: "scifi-loader" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: clickedImg,
                  alt: data[currentIndex] ? t(data[currentIndex].alt) : "Gallery Image",
                  onLoad: () => setLoading(false),
                  style: { display: loading ? "none" : "block" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 w-full text-center p-4 bg-gradient-to-t from-sky-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-white text-xl md:text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]", children: data[currentIndex] && t(data[currentIndex].text) }),
              /* @__PURE__ */ jsx("p", { className: "text-white text-sm md:text-base font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]", children: data[currentIndex] && t(data[currentIndex].subtext) })
            ] })
          ]
        }
      ) })
    ] })
  ] }) });
};

export { GalleryPage as G };
