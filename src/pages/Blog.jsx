import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <div name='Blog' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='flex flex-col w-full mb-10 xl:mb-0'>
          <div className='w-full'>
            <h1 className='text-xl sm:text-4xl md:text-5xl text-blue-500 mb-2 font-bold'>{t('blog_page.title')}</h1>
            <h2 className='text-sm sm:text-2xl text-black mb-10'>{t('blog_page.subtitle')}</h2>
            <ul className='flex flex-col gap-8'>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/GenAI" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>{t('blog_page.links.genai')}</Link>
              </li>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/FilmsSeriesAnime" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>{t('blog_page.links.films')}</Link>
              </li>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/Games" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>{t('blog_page.links.games')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Blog
