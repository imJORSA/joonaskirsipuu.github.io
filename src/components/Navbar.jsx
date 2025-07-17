import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
      <div className='absolute w-full h-[85px] px-10 py-2 bg-slate-900 text-white z-10 top-0'>
              <h1 className='cursor-default font-bold text-sm sm:text-base text-center lg:text-left'>JOONAS KIRSIPUU ART GALLERY</h1>


          {/* MENU */}
            <div className='hidden lg:flex gap-5 text-white py-1 font-bold text-2xl list-none'>
                <li className='hover:text-blue-500'>
                  <a href="/">DIGITAL</a>
                </li>
                <li className='hover:text-blue-500'>
                  <a href="/TraditionalGallery">TRADITIONAL</a>
                </li>
                <li className='hover:text-blue-500'>
                  <a href="/Bachelor">BACHELOR PROJECT</a>
                </li>
                <li className='hover:text-blue-500'>
                  <a href="/About">ABOUT</a>
                </li>
            </div>

          {/* HAMBURGER */}
          <div onClick={handleClick} className='lg:hidden z-10 object-center'>
            {!nav ? <FaBars/> : <FaTimes/>}
          </div>

          {/* MOBILE MENU */}
          <div className={!nav ? 'hidden' : 'absolute bottom-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center list-none gap-20'}>
            <li>
              <a href="/" className='py-6 sm:text-4xl text-2xl'>DIGITAL</a>
            </li>
            <li>
              <a href="/TraditionalGallery" className='py-6 sm:text-4xl text-2xl'>TRADITIONAL</a>
            </li>
            <li>
              <a href="/Bachelor" className='py-6 sm:text-4xl text-2xl'>BACHELOR PROJECT</a>
            </li>
            <li>
              <a href="/About" className='py-6 sm:text-4xl text-2xl'>ABOUT</a>
            </li>
          </div>
      </div>
  )
}

export default Navbar
