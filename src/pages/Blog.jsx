import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'

function Blog() {
  return (
    <div name='Blog' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>BLOG</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='w-full flex justify-center items-center py-20'>
        <h2 className='text-2xl text-slate-900'>Coming Soon</h2>
      </div>
    </div>
  )
}

export default Blog