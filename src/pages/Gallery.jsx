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
  <div name='Gallery' className='w-full h-screen bg-slate-900'>
      <Navbar />

      {/* TITLE */}
      <div className='relative flex w-full h-screen m-auto justify-center items-center'>
        <img src={HeaderPicture} className='w-full h-screen object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>DIGITAL</h1>
      </div>

      {/* BODY */}
      <div className=' bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-32 px-10 py-10'>
      {data && data.map((item, index) => (
        <div key={index} className='images'>
          <img className=' w-full object-fill grayscale hover:grayscale-0 ease-in-out duration-300'
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