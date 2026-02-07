import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'
import FractalPicture from '../assets/Fractalpicture.webp'
import data from '../data/fractals'
import MyFutureSpace from '../assets/fractal/Joonas Kirsipuu_My Future Space_2024_Summary_Pallas.pdf'
import MinuTulevikuRuum from '../assets/fractal/Joonas Kirsipuu_Minu tuleviku ruum_2024_Pallas.pdf'
import OptimizedImage from '../OptimizedImage'

const Fractals = () => {
  const { t } = useTranslation();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const preloaded = useRef(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.full);
    setLoading(true);
  };

  const handelRotationRight = useCallback(() => {
    let newIndex = currentIndex;
    const totalLength = data.length;

    // Loop to find the next valid image, skipping links
    do {
      newIndex = (newIndex + 1) % totalLength;
    } while (data[newIndex].isLink);

    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
    setLoading(true);
  }, [currentIndex]);

  const handelRotationLeft = useCallback(() => {
    let newIndex = currentIndex;
    const totalLength = data.length;

    // Loop to find the previous valid image, skipping links
    do {
      newIndex = (newIndex - 1 + totalLength) % totalLength;
    } while (data[newIndex].isLink);

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
        if (item.full && !item.isLink) {
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
      <div name='Fractals' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
          <div className='object-center lg:object-left'>
            <img src={FractalPicture} loading="eager" className='w-full h-auto max-h-[500px] xl:max-h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300 ' alt={t('fractals_page.alt')} />
          </div>
        </div>
        <div className='text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[600px] lg:overflow-y-auto pr-4'>
          <div>
            <h1 className='text-2xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>{t('fractals_page.title')}</h1>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              <Trans i18nKey="fractals_page.desc1">
                This worldbuilding project started out as a Bachelor's thesis project titled <a href={MyFutureSpace} download className='text-blue-500 hover:underline'>"My Future Space"</a>. I wanted to envision a future space scenario where humanity, due to climate change, has migrated to the mesosphere, living on gigantic floating sculptural objects. The capsules within these objects serve as individual living quarters, inspired by shapes from nature. In addition to the capsules, there is also a communal area where everyone gets to socialize. My design process involved extensive research, drawing inspiration from various sources including architectural marvels in Asia, science fiction literature, and film classics from the 60’s to the modern age big blockbuster spectacles.
              </Trans>
            </p>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              <Trans i18nKey="fractals_page.desc2">
                You can find the full thesis <a href={MinuTulevikuRuum} download className='text-blue-500 hover:underline'>here</a> in Estonian, and I want to thank Merille Hommik for being an amazing mentor throughout this bachelor’s project.
              </Trans>
            </p>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>{t('fractals_page.desc3')}</p>
          </div>
        </div>
      </div>


      {/* GALLERY */}
      <div className='w-full bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 pb-10 px-4 xl:px-0'>
        {data && data.map((item, index) => {
          if (item.isLink) {
            return (
              <div key={index} className='overflow-hidden group cursor-pointer relative'>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <OptimizedImage className='text-transparent w-full object-cover grayscale'
                    src={item.thumbnail}
                    alt={t(item.alt)}
                    width={item.width}
                    height={item.height}
                  />
                  <div className='absolute inset-0 flex justify-center items-center'>
                    <h1 className='text-lg sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 drop-shadow-lg text-center'>{t('fractals_page.animation')}</h1>
                  </div>
                </a>
              </div>
            );
          }
          return (
            <div key={index} className='overflow-hidden group cursor-pointer'>
              <OptimizedImage className='text-transparent w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                src={item.thumbnail}
                alt={t(item.alt)}
                width={item.width}
                height={item.height}
                onClick={() => handleClick(item, index)}
              />
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
                  alt={data[currentIndex] ? t(data[currentIndex].alt) : 'Fractal Image'}
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
  )
}

export default Fractals