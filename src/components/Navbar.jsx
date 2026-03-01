import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [nav, setNav] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
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
    setLangDropdown(false);
    setNav(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'ja', label: 'JP' }
  ];

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
                <h1 className={`cursor-default font-bold text-[10px] min-[450px]:text-xs sm:text-lg lg:text-xl tracking-[0.1em] text-left max-[450px]:text-center ${nav ? 'hidden lg:block' : ''}`}>{t('title')}</h1>

                <div className="flex items-center gap-4">
                  {/* Language Switcher - Desktop Only */}
                    <div className="hidden lg:block relative">
                      <button 
                        onClick={() => setLangDropdown(!langDropdown)} 
                        className="text-sm font-bold tracking-widest hover:text-sky-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        LANG <FaChevronDown size={10} />
                      </button>
                      
                      {langDropdown && (
                        <div className="absolute right-0 top-full mt-4 bg-slate-900 border border-slate-700 shadow-xl flex flex-col min-w-[100px] z-50">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => changeLanguage(lang.code)}
                              className={`px-4 py-3 text-sm font-bold tracking-widest hover:bg-sky-300 hover:text-slate-900 transition-colors text-center ${i18n.language.startsWith(lang.code) ? 'text-sky-300' : 'text-white'}`}
                            >
                              {lang.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                  {/* Hamburger Icon */}
                  {!nav && (
                    <div onClick={() => setNav(!nav)} className='cursor-pointer lg:hidden z-50 text-white hover:text-sky-300 transition-colors duration-300'>
                      <FaBars size={20} />
                    </div>
                  )}
                </div>
              </div>


          {/* DESKTOP MENU */}
            <div className='hidden lg:flex w-full justify-between text-white font-bold text-[6px] min-[400px]:text-[8px] sm:text-sm xl:text-base items-center tracking-widest'>
              {links.map((link, index) => (
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-black w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
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
                    className={`font-bold w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]`}
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            {/* MOBILE MENU */}
            {nav && (
              <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col justify-center items-center lg:hidden overflow-y-auto">
                <ul className='flex flex-col gap-8 text-center items-center py-10'>
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
                  
                  {/* Mobile Language Selection */}
                  <div className="w-1/2 h-[1px] bg-slate-700"></div>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-lg min-[550px]:text-2xl font-bold tracking-widest w-fit px-2 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
                          i18n.language.startsWith(lang.code)
                            ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                            : 'text-white hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                        }`}
                      >
                        {lang.label}
                      </button>
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
                  className="bg-slate-900 p-6 shadow-xl border border-blue-100 min-w-[300px] flex flex-col gap-4 scale-75 sm:scale-100"
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
