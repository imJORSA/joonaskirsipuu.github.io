import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.png'
import FractalPicture from '../assets/Fractalpicture.jpg'

function Worldbuilding() {

  return (
    <div name='Worldbuilding' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} className='h-full' alt="" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row py-10 gap-4 px-4 sm:px-10 xl:px-0'>
        <div className='relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden group cursor-pointer'>
          <Link to="/Fractals" className="w-full h-full block relative">
            <img src={FractalPicture} loading="lazy" className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500' alt="" />
            <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
                <h1 className='text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>PROJECT FRACTALS</h1>
            </div>
          </Link>
        </div>
        <div className='relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden group cursor-pointer'>
            <div className='w-full h-full bg-black flex justify-center items-center grayscale group-hover:grayscale-0 transition-all duration-500'>
                <span className='text-9xl font-bold text-blue-500'>?</span>
            </div>
            <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
                <h1 className='text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>PROJECT 3088</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Worldbuilding