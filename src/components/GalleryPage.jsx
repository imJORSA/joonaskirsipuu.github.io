import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaTimes, FaChevronLeft, FaChevronRight, FaCamera } from 'react-icons/fa' 
import OptimizedImage from './OptimizedImage'

const GalleryPage = ({ 
  name, 
  data, 
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
  const [clickedImg, setClickedImg] = useState(null); // URL of the currently clicked image
  const [currentIndex, setCurrentIndex] = useState(null); // Index of the currently clicked image in the data array
  const [loading, setLoading] = useState(false); // State to show/hide loader while image loads
  const [touchStart, setTouchStart] = useState(null); // For swipe gesture detection
  const [touchEnd, setTouchEnd] = useState(null); // For swipe gesture detection
  const minSwipeDistance = 50; // Minimum distance for a swipe to be registered
  
  // Zoom functionality states
  const [zoomLevel, setZoomLevel] = useState(1); // Current zoom level of the image
  const [panX, setPanX] = useState(0); // Horizontal pan position
  const [panY, setPanY] = useState(0); // Vertical pan position
  const [isDragging, setIsDragging] = useState(false); // Whether the image is currently being dragged
  const startDragX = useRef(0); // Mouse X position when drag starts
  const startDragY = useRef(0); // Mouse Y position when drag starts
  const imgRef = useRef(null); // Ref to the image element in the modal for measurements

  // Grayscale toggle state
  const [isGrayscale, setIsGrayscale] = useState(false);

  // Reset zoom, pan, and grayscale when the modal is closed or a new image is opened
  useEffect(() => {
    if (!clickedImg) {
      setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
    }
  }, [clickedImg]);
  
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.full);
    setLoading(true);
    // Reset zoom, pan, and grayscale when a new image is clicked
    setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false);
  };

  // Helper to find the next/previous non-link image index
  const getNextValidIndex = useCallback((current, direction) => {
    if (!data || data.length === 0) return;
    let newIndex = current;
    const totalLength = data.length;
    let attempts = 0; // Prevent infinite loop if all items are links
    do {
      newIndex = (newIndex + direction + totalLength) % totalLength;
      attempts++;
      if (attempts > totalLength * 2) { // Fallback to prevent infinite loop
        console.warn("Could not find a non-link image in data.");
        return -1;
      }
    } while (data[newIndex].isLink);
    return newIndex;
  }, [data]);

  const handleRotationRight = useCallback(() => {
    if (!data || data.length === 0) return;
    const newIndex = getNextValidIndex(currentIndex, 1);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
      setClickedImg(data[newIndex].full);
      setLoading(true);
      setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false); // Reset on image change
    }
  }, [currentIndex, data, getNextValidIndex]);

  const handleRotationLeft = useCallback(() => {
    if (!data || data.length === 0) return;
    const newIndex = getNextValidIndex(currentIndex, -1);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
      setClickedImg(data[newIndex].full);
      setLoading(true);
      setZoomLevel(1); setPanX(0); setPanY(0); setIsGrayscale(false); // Reset on image change
    }
  }, [currentIndex, data, getNextValidIndex]);

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

  // Preload next and previous images for smoother navigation
  useEffect(() => {
    if (clickedImg && currentIndex !== null && data && data.length > 0) {
      const nextIndex = getNextValidIndex(currentIndex, 1);
      const prevIndex = getNextValidIndex(currentIndex, -1);
      
      if (nextIndex !== -1 && data[nextIndex]?.full) { new Image().src = data[nextIndex].full; }
      if (prevIndex !== -1 && data[prevIndex]?.full) { new Image().src = data[prevIndex].full; }
    }
  }, [clickedImg, currentIndex, data, getNextValidIndex]);

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

    const containerClass = isMasonry
      ? 'bg-white columns-2 lg:columns-3 xl:columns-4 gap-4 pb-8 px-4 xl:px-0'
      : showText
        ? 'bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pt-10 pb-20 px-4 xl:px-0'
        : 'bg-white grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 pt-10 pb-10 px-4 xl:px-0';

  const itemClass = isMasonry
    ? 'images break-inside-avoid mb-10 group cursor-pointer'
    : 'images overflow-hidden group cursor-pointer';

  return (
    <>

      <div name={name} className='w-full min-h-screen bg-white'>


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
                onMouseUp={handleMouseUp} // Stop dragging if mouse button is released outside the image
                onMouseLeave={handleMouseLeave} // Stop dragging if mouse leaves the modal area
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
                      ref={imgRef} // Attach ref to the image
                      src={clickedImg} 
                      alt={data[currentIndex] ? t(data[currentIndex].alt) : 'Gallery Image'}
                      onLoad={() => setLoading(false)}
                      style={{
                        display: loading ? 'none' : 'block',
                        transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
                        filter: isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)',
                        cursor: zoomLevel === 1 ? 'zoom-in' : (isDragging ? 'grabbing' : 'zoom-out'), // Standard zoom cursors
                        transition: isDragging ? 'none' : 'transform 0.1s ease-out, filter 0.3s ease', // Smooth transition, but instant during drag
                        touchAction: 'none' // Prevent default browser touch gestures
                      }}
                      onClick={handleImageClick} // Fixed click-to-zoom logic
                      onMouseDown={handleMouseDown} // Add mouse down for panning
                      onMouseMove={handleMouseMove} // Add mouse move for panning
                    />
                  </div>
                  {!loading && (
                    <div className="overlay-nav">
                      <div className="overlay-arrows_left modal-button" onClick={handleRotationLeft}>
                        <FaChevronLeft />
                      </div>
                      <div className="overlay-arrows_right modal-button" onClick={handleRotationRight}>
                        <FaChevronRight />
                      </div>
                    </div>
                  )}
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
