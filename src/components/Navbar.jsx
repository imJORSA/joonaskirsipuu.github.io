import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [pathname, setPathname] = useState('')
  useEffect(() => { setPathname(window.location.pathname) }, [])
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const email = "joonaskirsipuu@gmail.com"

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdown(false);
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
    <div className='relative w-full h-auto px-4 py-2 bg-slate-900 text-white z-10 flex flex-col justify-center gap-1'>
      
      {/* TOP ROW — title + lang switcher */}
      <div className='flex items-center justify-between gap-4'>
        <h1 className='cursor-default font-bold text-[7px] min-[400px]:text-xs sm:text-lg lg:text-xl tracking-[0.1em]'>
          {t('title')}
        </h1>

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="text-[5px] min-[400px]:text-xs sm:text-sm font-bold tracking-widest hover:text-sky-300 transition-colors duration-300 flex items-center gap-1"
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
      </div>

      {/* BOTTOM ROW — nav links, wraps to 2 or more rows on small screens */}
      <div className='flex flex-wrap w-full justify-start text-white font-bold text-[7px] min-[400px]:text-xs sm:text-sm xl:text-base items-center tracking-widest gap-y-1 gap-x-5'>
        {links.map((link) => (
          link.path ? (
            <a key={link.name} href={link.path}
              className={`font-black w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${
                pathname === link.path
                  ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                  : 'hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]'
              }`}
            >
              {link.name}
            </a>
          ) : (
            <button
              key={link.name}
              onClick={link.action}
              className='font-bold w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]'
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