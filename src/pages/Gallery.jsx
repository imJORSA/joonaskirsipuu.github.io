import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import '../gallery.css'
import data from '../data/images'
import HeaderPicture from '../assets/BANNER.webp'
import OptimizedImage from '../OptimizedImage'


function Gallery() {
  const { t } = useTranslation();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const preloaded = useRef(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const baseUrl = 'https://joonaskirsipuu.eu';
  const ogImage = data && data.length > 0 ? `${baseUrl}${data[0].thumbnail}` : `${baseUrl}${HeaderPicture}`;

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.full);
    setLoading(true);
  };

  const handelRotationRight = useCallback(() => {
    const totalLength = data.length;
    const newIndex = (currentIndex + 1) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
    setLoading(true);
  }, [currentIndex]);

  const handelRotationLeft = useCallback(() => {
    const totalLength = data.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
    setLoading(true);
  }, [currentIndex]);

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
    if (isLeftSwipe) handelRotationRight();
    if (isRightSwipe) handelRotationLeft();
  };

  useEffect(() => {
    if (clickedImg && !preloaded.current) {
      data.forEach((item) => {
        if (item.full) {
          const img = new Image();
          img.src = item.full;
        }
      });
      preloaded.current = true;
    }
  }, [clickedImg]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!clickedImg) return;
      if (e.key === 'Escape') {
        setClickedImg(null);
      } else if (e.key === 'ArrowRight') {
        handelRotationRight();
      } else if (e.key === 'ArrowLeft') {
        handelRotationLeft();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clickedImg, handelRotationRight, handelRotationLeft]);

  useEffect(() => {
    if (clickedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [clickedImg]);

  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <div name='Gallery' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      {/* BODY */}
      <div className=' bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pt-10 pb-20 px-4 xl:px-0'>
      {data && data.map((item, index) => (
        <div key={index} className='images overflow-hidden group cursor-pointer'>
          <OptimizedImage className='text-transparent w-full object-fill grayscale group-hover:grayscale-0 transition-all duration-500'
            src={item.thumbnail}
            alt={t(item.alt)}
            width={item.width}
            height={item.height}
            onClick={() => handleClick(item, index)}
          />
          <h2 className='pt-1 text-xs sm:text-base xl:text-lg font-bold pointer-events-none text-cyan-950'>{t(item.text)}</h2>
          <h2 className='text-[8px] sm:text-xs font-thin pointer-events-none text-cyan-950'>{t(item.subtext)}</h2>
        </div>
      ))}
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
                  <div className="overlay-arrows_left" onClick={handelRotationLeft}>
                    <FaChevronLeft />
                  </div>
                  <div className="overlay-arrows_right" onClick={handelRotationRight}>
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
          </div>
        )}
      </div>
    </div>
      </div>
    </>
  );
}

export default Gallery;