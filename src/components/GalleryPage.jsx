import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Navbar from './Navbar'
import OptimizedImage from '../OptimizedImage'
import '../gallery.css'

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
  imageObjectFit = 'object-fill'
}) => {
  const { t } = useTranslation();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const preloaded = useRef(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const baseUrl = 'https://joonaskirsipuu.eu';

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
      if (e.key === 'Escape') {
        setClickedImg(null);
      } else if (e.key === 'ArrowRight') {
        handleRotationRight();
      } else if (e.key === 'ArrowLeft') {
        handleRotationLeft();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clickedImg, handleRotationRight, handleRotationLeft]);

  useEffect(() => {
    if (clickedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [clickedImg]);

  const containerClass = isMasonry
    ? 'bg-white columns-2 lg:columns-3 xl:columns-4 gap-4 pt-10 px-4 xl:px-0'
    : `bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-${showText ? '10' : '4'} pt-10 pb-${showText ? '20' : '10'} px-4 xl:px-0`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": title ? t(title) : name,
    "description": description ? t(description) : "",
    "author": {
      "@type": "Person",
      "name": "Joonas Kirsipuu"
    },
    "image": data ? data.filter(item => !item.isLink && item.full).map(item => ({
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
  };

  const itemClass = isMasonry
    ? 'images break-inside-avoid mb-10 group cursor-pointer'
    : 'images overflow-hidden group cursor-pointer';

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div name={name} className='w-full min-h-screen bg-white'>
        <div className='relative flex h-full m-auto bg-slate-900'>
          <img src={headerImage} loading="eager" className='h-full' alt={t('banner_alt')} />
        </div>

        <Navbar />

        {children}

        <div className={containerClass}>
          {data && data.map((item, index) => {
            if (item.isLink) {
              return (
                <div key={index} className={`${itemClass} relative`}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <OptimizedImage className={`text-transparent w-full ${imageObjectFit} grayscale`}
                      src={item.thumbnail}
                      alt={t(item.alt)}
                      width={item.width}
                      height={item.height}
                    />
                    <div className='absolute inset-0 flex justify-center items-center'>
                      <h1 className='text-lg sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 drop-shadow-lg text-center'>{t(item.text)}</h1>
                    </div>
                  </a>
                </div>
              );
            }
            return (
              <div key={index} className={itemClass}>
                <OptimizedImage className={`text-transparent w-full ${imageObjectFit} grayscale group-hover:grayscale-0 transition-all duration-500`}
                  src={item.thumbnail}
                  alt={t(item.alt)}
                  width={item.width}
                  height={item.height}
                  onClick={() => handleClick(item, index)}
                />
                {showText && (
                   <>
                    <h2 className='pt-1 text-xs sm:text-base xl:text-lg font-bold pointer-events-none text-cyan-950'>{t(item.text)}</h2>
                    <h2 className='text-[8px] sm:text-xs font-thin pointer-events-none text-cyan-950'>{t(item.subtext)}</h2>
                   </>
                )}
              </div>
            );
          })}
          <div>
            {clickedImg && (
              <div className="overlay"
                onClick={(e) => {
                  if (e.target.classList.contains('overlay')) {
                    setClickedImg(null);
                  }
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="modal-wrapper">
                  {!loading && (
                    <>
                      <span onClick={() => setClickedImg(null)}><FaTimes /></span>
                      <div className="overlay-arrows_left" onClick={handleRotationLeft}>
                        <FaChevronLeft />
                      </div>
                      <div className="overlay-arrows_right" onClick={handleRotationRight}>
                        <FaChevronRight />
                      </div>
                    </>
                  )}
                  {loading && <div className="scifi-loader"></div>}
                  <img
                    src={clickedImg}
                    alt={data[currentIndex] ? t(data[currentIndex].alt) : 'Gallery Image'}
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                  />
                </div>
                <div className='absolute bottom-0 left-0 w-full text-center p-4 bg-gradient-to-t from-sky-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <h2 className='text-white text-xl md:text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    {data[currentIndex] && t(data[currentIndex].text)}
                  </h2>
                  <p className='text-white text-sm md:text-base font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    {data[currentIndex] && t(data[currentIndex].subtext)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
