import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[85px] px-4 sm:px-6 lg:px-10 py-2 bg-slate-900 text-white z-10 flex flex-col items-center justify-center'>
      <h1 className='cursor-default font-bold text-sm sm:text-base lg:text-lg'>JOONAS KIRSIPUU ART GALLERY</h1>
      <p className='text-xs sm:text-sm mt-2'>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  )
}

export default Footer
