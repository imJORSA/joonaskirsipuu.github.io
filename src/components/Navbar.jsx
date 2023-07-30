
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[40px] flex justify-between items-center px-4 bg-cyan-200 text-blue-900'>
        <div style={{paddingLeft: 50, fontSize: 20}}>
            <h1>Joonas Kirsipuu</h1>
        </div>

        {/* MENU */}
          <div className='hidden md:flex text-blue-900 list-none'>
              <li className='hover:text-red-500'>
                <a href="/">3D gallery</a>
              </li>
              <li className='hover:text-red-500'>
                <a href="/TraditionalGallery">Traditional gallery</a>
              </li>
              <li className='hover:text-red-500'>
                <a href="/InteriorDesigns">Interior designs</a>
              </li>
              <li className='hover:text-red-500'>
                <a href="/About">About me</a>
              </li>
          </div>

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* MOBILE MENU */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-cyan-200 flex flex-col justify-center items-center list-none gap-10'}>
          <li>
            <a href="/" className='py-6 text-4xl'>3D gallery</a>
          </li>
          <li>
            <a href="/TraditionalGallery" className='py-6 text-4xl'>Traditional gallery</a>
          </li>
          <li>
            <a href="/InteriorDesigns" className='py-6 text-4xl'>Interior designs</a>
          </li>
          <li>
            <a href="About" className='py-6 text-4xl'>About me</a>
          </li>
        </div>
    </div>
  )
}

export default Navbar
