import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'
import FractalPicture from '../assets/Fractalpicture.jpg'
import data from '../data/fractals'
import Modal from '../components/Modal'
import MyFutureSpace from '../assets/fractal/Joonas Kirsipuu_My Future Space_2024_Summary_Pallas.pdf'
import MinuTulevikuRuum from '../assets/fractal/Joonas Kirsipuu_Minu tuleviku ruum_2024_Pallas.pdf'

const Fractals = () => {
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
    <div name='Fractals' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>PROJECT FRACTALS</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10'>
        <div className='flex flex-col'>
          <div className='object-center xl:object-left'>
            <img src={FractalPicture} className='w-full h-[700px] lg:h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300 ' alt="Project Fractals" />
          </div>
        </div>
        <div className='text-left ml-[50px] flex-1 cursor-default lg:pt-0 h-[700px] lg:h-[600px] overflow-y-auto'>
          <div className='max-w-[800px]'>
            <h1 className='text-5xl pb-8 font-bold text-blue-500'>PROJECT FRACTALS</h1>
            <p className='text-base leading-6 pb-5 text-black'>
              This worldbuilding project started out as a Bachelor's thesis project titled <a href={MyFutureSpace} download className='text-blue-500 hover:underline'>"My Future Space"</a>. I wanted to envision a future space scenario where humanity, due to climate 
              change, has migrated to the mesosphere, living on gigantic floating sculptural objects. The 
              capsules within these objects serve as individual living quarters, inspired by shapes from nature. In addition to the capsules, there is also a communal area where everyone gets to socialize. My 
              design process involved extensive research, drawing inspiration from various sources including 
              architectural marvels in Asia, science fiction literature, and film classics from the 60’s to the 
              modern age big blockbuster spectacles.
            </p>
            <p className='text-base leading-6 pb-5 text-black'>
              You can find the full thesis <a href={MinuTulevikuRuum} download className='text-blue-500 hover:underline'>here</a> in Estonian, and I want to thank Merille Hommik for being an amazing mentor throughout this bachelor’s project.
            </p>
            <p className='text-base leading-6 pb-5 text-black'>
              Updates on this project are slow due to my time being taken up by other projects and life changes.
            </p>
          </div>
        </div>
      </div>


      {/* GALLERY */}
      <div className='w-full bg-white columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 pb-10'>
        {data && data.map((item, index) => (
          <div key={index} className='break-inside-avoid mb-5 overflow-hidden group cursor-pointer'>
            <img className='w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
              src={item.img}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
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
  )
}

export default Fractals