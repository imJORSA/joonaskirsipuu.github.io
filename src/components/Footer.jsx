import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full h-[85px] px-4 py-2 bg-slate-900 text-white z-10 flex flex-col items-center justify-center'>
      <h1 className='cursor-default font-bold text-sm sm:text-base lg:text-lg'>{t('footer.title')}</h1>
      <p className='text-xs sm:text-sm mt-2'>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </div>
  )
}

export default Footer
