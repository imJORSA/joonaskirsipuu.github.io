import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [pathname, setPathname] = useState('')
  useEffect(() => { 
    const p = window.location.pathname.replace(/\/$/, '') || '/'
    setPathname(p)
  }, [])

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.toLowerCase() === path.toLowerCase()
  }
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const email = "joonaskirsipuu@gmail.com"

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem('i18nextLng', lng);
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
    { name: 'HARMONIA INSIDE', path: 'https://harmoniainside.net/', external: true },
    { name: t('nav.contact'), action: () => { setIsContactOpen(true); setMobileMenuOpen(false); } },
  ]

  return (
    <div className='relative w-full h-auto px-4 py-2 bg-slate-900 text-white z-10 flex flex-col justify-center gap-1'>

      {/* TOP ROW — title + lang switcher + hamburger */}
      <div className='flex items-center justify-between gap-4'>
        <h1 className='cursor-default font-bold text-[10px] min-[400px]:text-xs sm:text-lg lg:text-xl tracking-[0.1em]'>
          {t('title')}
        </h1>

        <div className='flex items-center gap-4'>
          {/* Language Switcher — desktop only */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="text-sm font-bold tracking-widest text-gray-400 hover:text-sky-300 transition-colors duration-300 flex items-center gap-1"
            >
              LANG <FaChevronDown size={10} />
            </button>
            {langDropdown && (
              <div className="absolute right-0 top-full mt-4 bg-slate-900 border border-slate-900 shadow-xl flex flex-col min-w-[100px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    data-text={lang.label}
                    className={`nav-link px-4 py-3 text-sm font-bold tracking-widest text-center ${i18n.language.startsWith(lang.code) ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]' : 'text-white'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger — mobile and tablet only */}
          <button
            className='lg:hidden text-gray-400 hover:text-sky-300 transition-colors duration-300'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* DESKTOP NAV LINKS — hidden on mobile/tablet */}
      <div className='hidden lg:flex flex-wrap w-full justify-start text-white font-bold text-sm xl:text-base items-center tracking-widest gap-y-1 gap-x-5'>
        {links.map((link) => (
          link.path ? (
            <a key={link.name} href={link.path}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              data-text={link.name}
              className={`nav-link font-black w-fit px-0 py-1 whitespace-nowrap ${
                isActive(link.path)
                  ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]'
                  : ''
              }`}
            >
              {link.name}
            </a>
          ) : (
            <button
              key={link.name}
              onClick={link.action}
              data-text={link.name}
              className='nav-link font-bold w-fit px-0 py-1 whitespace-nowrap'
            >
              {link.name}
            </button>
          )
        ))}
      </div>

      {/* MOBILE/TABLET MENU — full screen overlay */}
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col px-8 pt-16 pb-12 gap-4 sm:gap-6'>
          <button
            className='absolute top-6 right-6 text-white hover:text-sky-300 transition-colors duration-300'
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          {links.map((link) => (
            link.path ? (
              <a
                key={link.name}
                href={link.path}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                data-text={link.name}
                className={`nav-link text-lg sm:text-2xl font-black tracking-widest ${
                  isActive(link.path) ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)] px-2' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.name}
                onClick={link.action}
                data-text={link.name}
                className='nav-link text-lg sm:text-2xl font-black tracking-widest text-left text-white'
              >
                {link.name}
              </button>
            )
          ))}

          {/* Language switcher in mobile/tablet menu */}
          <div className='flex gap-4 mt-2'>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { changeLanguage(lang.code); setMobileMenuOpen(false); }}
                data-text={lang.label}
                className={`nav-link text-sm sm:text-lg font-bold tracking-widest ${
                  i18n.language.startsWith(lang.code) ? 'bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)] px-2' : 'text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
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
