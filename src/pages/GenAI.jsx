import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const GenAI = () => {

  return (
    <div name='GenAI' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>Why GenAI art will be obsolete - WIP</h1>
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
