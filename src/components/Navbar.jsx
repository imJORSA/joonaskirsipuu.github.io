import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const links = [
    { name: 'DIGITAL', path: '/' },
    { name: 'TRADITIONAL', path: '/Traditional' },
    { name: 'WORLD BUILDING', path: '/Worldbuilding' },
    { name: 'BLOG', path: '/Blog' },
    { name: 'ABOUT', path: '/About' },
  ]

  return (
      <div className='relative w-full h-[85px] px-4 sm:px-10 py-2 bg-slate-900 text-white z-10 flex flex-col items-start justify-center gap-1'>
              <h1 className='cursor-default font-bold text-base sm:text-lg lg:text-xl'>JOONAS KIRSIPUU ART GALLERY</h1>


          {/* DESKTOP MENU */}
            <div className='flex gap-1 sm:gap-6 xl:gap-8 text-white font-bold text-[9px] sm:text-sm xl:text-base items-center'>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-1 sm:px-3 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
                    location.pathname === link.path
                      ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                      : 'hover:bg-sky-300 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
      </div>
  )
}

export default Navbar
