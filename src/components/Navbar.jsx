import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const email = "joonaskirsipuu@gmail.com"

  const links = [
    { name: 'DIGITAL', path: '/' },
    { name: 'TRADITIONAL', path: '/Traditional' },
    { name: 'WORLD BUILDING', path: '/Worldbuilding' },
    { name: 'BLOG', path: '/Blog' },
    { name: 'ABOUT', path: '/About' },
    { name: 'CONTACT', action: () => setIsContactOpen(true) },
  ]

  return (
      <div className='relative w-full h-auto min-h-[85px] px-4 sm:px-10 py-2 bg-slate-900 text-white z-10 flex flex-col justify-center gap-1'>
              <h1 className='cursor-default font-bold text-sm sm:text-lg lg:text-xl tracking-widest'>JOONAS KIRSIPUU ART GALLERY</h1>


          {/* DESKTOP MENU */}
            <div className='w-full grid grid-cols-3 gap-y-1 sm:flex sm:justify-between text-white font-bold text-[8px] sm:text-sm xl:text-base items-center'>
              {links.map((link) => (
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-center px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
                      location.pathname === link.path
                        ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                        : 'hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-center px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            {/* CONTACT MODAL */}
            {isContactOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setIsContactOpen(false)}
              >
                <div 
                  className="bg-slate-900 p-6 shadow-xl border border-blue-100 min-w-[300px] flex flex-col gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-xl font-bold text-center">Contact Me</h2>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${email}`} className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      Default Mail App
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      Gmail
                    </a>
                    <a href={`https://outlook.office.com/mail/deeplink/compose?to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      Outlook
                    </a>
                    <a href={`https://compose.mail.yahoo.com/?to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      Yahoo
                    </a>
                  </div>
                  <button 
                    onClick={() => setIsContactOpen(false)}
                    className="mt-2 text-sm text-slate-400 hover:text-white self-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
      </div>
  )
}

export default Navbar
