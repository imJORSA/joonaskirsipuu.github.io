import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const GenAI = () => {
  const { t } = useTranslation();
  const baseUrl = 'https://joonaskirsipuu.eu';
  const ogImage = `${baseUrl}${HeaderPicture}`;

  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <div name='GenAI' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>{t('genai_page.title')}</h1>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              {t('genai_page.wip')}
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default GenAI
