import React, {useState} from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
      <div className='relative w-full h-[85px] px-4 sm:px-6 lg:px-10 py-2 bg-slate-900 text-white z-10 flex items-center justify-between'>
              <h1 className='cursor-default font-bold text-sm sm:text-base lg:text-lg'>JOONAS KIRSIPUU ART GALLERY</h1>


          {/* DESKTOP MENU */}
            <div className='hidden lg:flex gap-6 xl:gap-8 text-white font-bold text-base xl:text-lg'>
              <a
                href="/" className='hover:text-blue-500 transition-colors duration-200'>
                DIGITAL
              </a>
              <a
                href="/TraditionalGallery" className='hover:text-blue-500 transition-colors duration-200'>
                TRADITIONAL
              </a>
              <a
                href="/Bachelor" className='hover:text-blue-500 transition-colors duration-200'>
                WORLD BUILDING
              </a>
              <a
                href="/About" className='hover:text-blue-500 transition-colors duration-200'>
                ABOUT
              </a>
            </div>

          {/* HAMBURGER */}
          <div onClick={handleClick} className='lg:hidden z-20 cursor-pointer'>
            <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${nav ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${nav ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>

          {/* MOBILE MENU */}
          <div className={`${nav ? 'translate-x-0' : 'translate-x-full'} lg:hidden fixed top-0 right-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out z-10`}>
            <a
              href="/" 
              className='py-4 text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-200'>DIGITAL
            </a>
            <a
              href="/TraditionalGallery"
              className='py-4 text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-200'>TRADITIONAL
            </a>
            <a
              href="/Bachelor"
              className='py-4 text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-200'>WORLD BUILDING
            </a>
            <a
              href="/About"
              className='py-4 text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-200'>ABOUT
            </a>
          </div>
      </div>
  )
}

export default Navbar
