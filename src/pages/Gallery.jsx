import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../gallery.css'
import data from '../data/images'
import Modal from '../components/Modal'
import HeaderPicture from '../assets/galleryheader.jpg'


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
  <div name='Gallery' className='w-full h-screen bg-gray-900'>
      <Navbar />

      {/* TITLE */}
      <div className='relative w-full h-1/4 mx-auto flex justify-center'>
        <img src={HeaderPicture} className='w-full h-60 object-cover blur-[2px] opacity-50' alt="" />
        <h1 className='absolute text-center mt-[90px] sm:mt-[75px] min-[400px]:text-4xl text-3xl sm:text-7xl font-bold text-blue-200 cursor-default'>3D gallery</h1>
      </div>

      {/* BODY */}
      <div className=' bg-gray-900 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-10 px-10 py-32 lg:py-32 xl:py-20'>
      {data && data.map((item, index) => (
        <div key={index} className='images'>
          <img className='h-80 w-full object-cover grayscale-0 hover:grayscale ease-in-out duration-300'
            src={item.img}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2 className='pt-3 text-xs pointer-events-none text-blue-50'>{item.text}</h2>
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