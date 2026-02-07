import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [nav, setNav] = useState(false)
  const email = "joonaskirsipuu@gmail.com"

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [nav])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const links = [
    { name: t('nav.digital'), path: '/' },
    { name: t('nav.traditional'), path: '/Traditional' },
    { name: t('nav.worldbuilding'), path: '/Worldbuilding' },
    { name: t('nav.blog'), path: '/Blog' },
    { name: t('nav.about'), path: '/About' },
    { name: t('nav.contact'), action: () => setIsContactOpen(true) },
  ]

  return (
      <div className='relative w-full h-auto min-h-[60px] sm:min-h-[85px] px-4 py-2 bg-slate-900 text-white z-10 flex flex-col justify-center gap-1'>
              <div className={`flex items-center ${nav ? 'justify-end' : 'justify-between'} gap-4 z-50`}>
                {!nav && <h1 className='cursor-default font-bold text-[10px] min-[450px]:text-xs sm:text-lg lg:text-xl tracking-[0.1em] text-left max-[450px]:text-center'>{t('title')}</h1>}

                <div className="flex items-center gap-4">
                  {/* Language Switcher */}
                  {!nav && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button 
                      onClick={() => changeLanguage('en')} 
                      className={`text-[10px] sm:text-sm font-bold tracking-widest transition-colors duration-300 ${i18n.language.startsWith('en') ? 'text-sky-300' : 'text-slate-400 hover:text-white'}`}
                    >
                      EN
                    </button>
                    <span className="text-slate-600 text-[10px] sm:text-sm">|</span>
                    <button 
                      onClick={() => changeLanguage('it')} 
                      className={`text-[10px] sm:text-sm font-bold tracking-widest transition-colors duration-300 ${i18n.language === 'it' ? 'text-sky-300' : 'text-slate-400 hover:text-white'}`}
                    >
                      IT
                    </button>
                    <span className="text-slate-600 text-[10px] sm:text-sm">|</span>
                    <button 
                      onClick={() => changeLanguage('ja')} 
                      className={`text-[10px] sm:text-sm font-bold tracking-widest transition-colors duration-300 ${i18n.language === 'ja' ? 'text-sky-300' : 'text-slate-400 hover:text-white'}`}
                    >
                      JP
                    </button>
                  </div>
                  )}

                  {/* Hamburger Icon */}
                  <div onClick={() => setNav(!nav)} className='cursor-pointer lg:hidden z-50 text-white hover:text-sky-300 transition-colors duration-300'>
                    {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                  </div>
                </div>
              </div>


          {/* DESKTOP MENU */}
            <div className='hidden lg:flex w-full justify-between text-white font-bold text-[6px] min-[400px]:text-[8px] sm:text-sm xl:text-base items-center tracking-widest'>
              {links.map((link, index) => (
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
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
                    className={`w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]`}
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            {/* MOBILE MENU */}
            {nav && (
              <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col justify-center items-center lg:hidden">
                <ul className='flex flex-col gap-8 text-center items-center'>
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.path ? (
                        <Link
                          to={link.path}
                          onClick={() => setNav(false)}
                          className={`text-lg min-[550px]:text-2xl font-bold tracking-widest w-fit px-2 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
                            location.pathname === link.path
                              ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                              : 'hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => {
                            setNav(false);
                            link.action();
                          }}
                          className="text-lg min-[550px]:text-2xl font-bold tracking-widest text-white w-fit px-2 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
                  <h2 className="text-xl font-bold text-center">{t('contact_modal.title')}</h2>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${email}`} className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      {t('contact_modal.default_mail')}
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      {t('contact_modal.gmail')}
                    </a>
                    <a href={`https://outlook.office.com/mail/deeplink/compose?to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      {t('contact_modal.outlook')}
                    </a>
                    <a href={`https://compose.mail.yahoo.com/?to=${email}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold">
                      {t('contact_modal.yahoo')}
                    </a>
                  </div>
                  <button 
                    onClick={() => setIsContactOpen(false)}
                    className="mt-2 text-sm text-slate-400 hover:text-white self-center"
                  >
                    {t('contact_modal.close')}
                  </button>
                </div>
              </div>
            )}
      </div>
  )
}

export default Navbar
