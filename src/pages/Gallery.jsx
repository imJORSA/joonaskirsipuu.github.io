import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../gallery.css'
import data from '../data/images'
import Modal from '../components/Modal'


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
  <div name='Gallery' className='w-full h-screen bg-gray-600'>
      <Navbar />

      {/* CONTAINER */}
      <div className='w-full h-1/3 mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-100'>3D gallery</h1>
      </div>

      {/* 3D GALLERY */}
      <div className='gallery-item bg-gray-600 grid grid-cols-1 md:grid-cols-4 gap-4 px-10'>
      {data && data.map((item, index) => (
        <div key={index} className='images'>
          <img className='h-60 w-full object-cover md:grayscale-0 hover:grayscale'
            src={item.img}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2 className=''>{item.text}</h2>
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