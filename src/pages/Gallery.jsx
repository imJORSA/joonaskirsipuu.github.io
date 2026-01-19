import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../gallery.css'
import data from '../data/images'
import Modal from '../components/Modal'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'


function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };

  const handelRotationRight = () => {
    const totalLength = data && data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data && data[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data && data.filter((item) => {
      return data && data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data && data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data && data[totalLength - 1].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data && data.filter((item) => {
      return data && data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
  <div name='Gallery' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>DIGITAL</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className=' bg-white columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 pt-10'>
      {data && data.map((item, index) => (
        <div key={index} className='images images imagesbreak-inside-avoid mb-20 overflow-hidden group cursor-pointer'>
          <img className=' w-full object-fill grayscale group-hover:grayscale-0 transition-all duration-500'
            src={item.img}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2 className='pt-3 text-lg font-bold pointer-events-none text-cyan-950'>{item.text}</h2>
          <h2 className='text-xs font-thin pointer-events-none text-cyan-950'>{item.subtext}</h2>
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  </div>
  );
}

export default Gallery;