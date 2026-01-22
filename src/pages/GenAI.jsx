import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'

const GenAI = () => {

  return (
    <div name='GenAI' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>_</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 sm:px-10'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-3xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>Why GenAI art will be obsolete - WIP</h1>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              WIP
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenAI
