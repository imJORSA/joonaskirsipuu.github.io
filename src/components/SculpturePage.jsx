import '../i18n.js'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaTimes, FaChevronLeft, FaChevronRight, FaCamera } from 'react-icons/fa'
import OptimizedImage from './OptimizedImage'
import data from '../data/skulpa'

const SculpturePage = () => {
  const { t } = useTranslation();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  // Zoom functionality states
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startDragX = useRef(0);
  const startDragY = useRef(0);
  const imgRef = useRef(null);

  // Grayscale toggle state
  const [isGrayscale, setIsGrayscale] = useState(false);

  // Dynamically group sculptures based on their translation key prefix
  const sculptureGroups = useMemo(() => {
    const groupsMap = new Map(); // Use a Map to preserve insertion order for unique group IDs
    data.forEach(item => {
      // Extract the base key, e.g., 'heart' from 'sculpture_works.heart.title'
      const keyMatch = item.text.match(/^sculpture_works\.([^.]+)\.title$/);
      if (keyMatch && keyMatch[1]) {
        const groupId = keyMatch[1];
        if (!groupsMap.has(groupId)) {
          groupsMap.set(groupId, { id: groupId, items: [] });
        }
        groupsMap.get(groupId).items.push(item);
      }
    });
    return Array.from(groupsMap.values());
  }, [data]); // `data` is a static import, so this will only run once

  // Reset zoom, pan, and grayscale when the modal is closed or a new image is opened
  useEffect(() => {
    if (!clickedImg) {
      setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
    }
  }, [clickedImg]);

  const handleClick = (item, index) => {
    setCurrentIndex(index)
    setClickedImg(item.full)
    setLoading(true)
    setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
  }

  const handleRotationRight = useCallback(() => {
    const nextIndex = (currentIndex + 1) % data.length
    setCurrentIndex(nextIndex)
    setClickedImg(data[nextIndex].full)
    setLoading(true);
    setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
  }, [currentIndex, data]); // Added data to dependencies

  const handleRotationLeft = useCallback(() => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length
    setCurrentIndex(prevIndex)
    setClickedImg(data[prevIndex].full)
    setLoading(true);
    setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
  }, [currentIndex, data]); // Added data to dependencies

  // Fixed Toggle Zoom Handler
  const handleImageClick = useCallback((e) => {
    e.stopPropagation();
    if (zoomLevel === 1) {
      setZoomLevel(2); // 100% zoom increase
    } else {
      setZoomLevel(1);
      setPanX(0); // Reset pan when zooming out
      setPanY(0);
    }
  }, [zoomLevel]);

  const handleMouseDown = useCallback((e) => {
    // Only allow dragging if zoomed in and left mouse button is pressed
    if (zoomLevel > 1 && e.button === 0) { 
      setIsDragging(true);
      startDragX.current = e.clientX - panX;
      startDragY.current = e.clientY - panY;
      e.preventDefault(); // Prevent default browser drag behavior for images
    }
  }, [zoomLevel, panX, panY]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      setPanX(e.clientX - startDragX.current);
      setPanY(e.clientY - startDragY.current);
      e.preventDefault();
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false); // Stop dragging if mouse leaves the modal area
  }, []);

  // Grayscale toggle handler
  const toggleGrayscale = useCallback(() => {
    setIsGrayscale(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!clickedImg) return
      if (e.key === 'Escape') setClickedImg(null)
      else if (e.key === 'ArrowRight') handleRotationRight()
      else if (e.key === 'ArrowLeft') handleRotationLeft()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [clickedImg, handleRotationRight, handleRotationLeft])

  useEffect(() => {
    if (clickedImg) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [clickedImg])

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='px-4 xl:px-0 pt-8 pb-4'>
        <h1 className='text-xl sm:text-3xl xl:text-5xl font-bold text-blue-500'>{t('traditional_page.sculpture')}</h1>
      </div>

      <div className='px-4 xl:px-0 pt-4 pb-8'>
        {sculptureGroups.map((group) => (
          <div key={group.id} className="mb-10 sm:mb-20 pb-8 sm:pb-12 border-b-2 border-dotted border-blue-900 last:border-0">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
              {/* Text */}
              <div className="lg:w-1/3">
                <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-4 tracking-widest uppercase">
                  {t(`sculpture_works.${group.id}.title`)}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 italic mb-4">
                  {t(`sculpture_works.${group.id}.materials`)} [{t(`sculpture_works.${group.id}.year`)}]
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t(`sculpture_works.${group.id}.description`)}
                </p>
                {group.id === 'fractals' && (
                  <div className="mt-6">
                    <a 
                      href="/Fractals" 
                      data-text={t(`sculpture_works.${group.id}.read_more`)}
                      className="nav-link inline-block !text-slate-900 px-4 py-2 text-sm font-bold border border-blue-500/20"
                    >
                      {t(`sculpture_works.${group.id}.read_more`)}
                    </a>
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.items.map((item) => {
                  const globalIndex = data.indexOf(item)
                  return (
                    <div key={globalIndex} className="cursor-pointer group overflow-hidden bg-slate-100 aspect-[2/3]">
                      <OptimizedImage
                        src={item.thumbnail}
                        alt={t(item.alt)}
                        width={item.width}
                        height={item.height}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onClick={() => handleClick(item, globalIndex)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {clickedImg && (
        <div className="overlay" 
          onClick={(e) => e.target.classList.contains('overlay') && setClickedImg(null)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="modal-wrapper">
            {loading && <div className="scifi-loader"></div>}
            {!loading && (
              <>
                {/* Grayscale Toggle Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleGrayscale(); }}
                  className="modal-button grayscale-toggle-button"
                  aria-label={t(isGrayscale ? 'contact_modal.disable_grayscale' : 'contact_modal.enable_grayscale')}
                  title={t(isGrayscale ? 'contact_modal.disable_grayscale' : 'contact_modal.enable_grayscale')}
                >
                  <FaCamera />
                </button>
                {/* Exit Button */}
                <button
                  onClick={() => setClickedImg(null)}
                  className="modal-button exit-button"
                  aria-label={t('contact_modal.close')}
                  title={t('contact_modal.close')}
                >
                  <FaTimes />
                </button>
              </>
            )}
            <div className="image-container">
              <img
                ref={imgRef}
                src={clickedImg}
                alt={currentIndex !== null ? t(data[currentIndex].alt) : ''}
                onLoad={() => setLoading(false)}
                style={{
                  display: loading ? 'none' : 'block',
                  transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                  filter: isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)',
                  cursor: zoomLevel === 1 ? 'zoom-in' : (isDragging ? 'grabbing' : 'zoom-out'),
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out, filter 0.3s ease',
                  touchAction: 'none'
                }}
                onClick={handleImageClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
              />
            </div>
            {!loading && (
              <div className="overlay-nav">
                <div className="overlay-arrows_left modal-button" onClick={handleRotationLeft}><FaChevronLeft /></div>
                <div className="overlay-arrows_right modal-button" onClick={handleRotationRight}><FaChevronRight /></div>
              </div>
            )}
          </div>
          {currentIndex !== null && (
            <div className='absolute bottom-0 left-0 w-full text-center p-4 bg-gradient-to-t from-sky-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <h2 className='text-white text-xl md:text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {t(data[currentIndex].text)}
              </h2>
              <p className='text-white text-sm md:text-base font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {(() => {
                  const groupId = data[currentIndex].text.match(/^sculpture_works\.([^.]+)\.title$/)?.[1];
                  return groupId ? `${t(`sculpture_works.${groupId}.materials`)} [${t(`sculpture_works.${groupId}.year`)}]` : '';
                })()}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SculpturePage
