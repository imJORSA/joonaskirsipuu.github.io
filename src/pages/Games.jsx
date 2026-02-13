import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const Games = () => {
  const { t } = useTranslation();
  const baseUrl = 'https://joonaskirsipuu.eu';
  const ogImage = `${baseUrl}${HeaderPicture}`;

  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <div name='Games' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default'>{t('games_page.title')}</h1>
            
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>{t('games_page.singleplayer_title')}</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.cp2077.title')}</span><span className='text-black'>{t('games_page.singleplayer.cp2077.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.witcher3.title')}</span><span className='text-black'>{t('games_page.singleplayer.witcher3.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.mario_galaxy.title')}</span><span className='text-black'>{t('games_page.singleplayer.mario_galaxy.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.ori.title')}</span><span className='text-black'>{t('games_page.singleplayer.ori.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.dead_space.title')}</span><span className='text-black'>{t('games_page.singleplayer.dead_space.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.singleplayer.minecraft.title')}</span><span className='text-black'>{t('games_page.singleplayer.minecraft.desc')}</span></li>
            </ul>

            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>{t('games_page.multiplayer_title')}</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5'>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.multiplayer.lol.title')}</span><span className='text-black'>{t('games_page.multiplayer.lol.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.multiplayer.overwatch.title')}</span><span className='text-black'>{t('games_page.multiplayer.overwatch.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('games_page.multiplayer.warframe.title')}</span><span className='text-black'>{t('games_page.multiplayer.warframe.desc')}</span></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Games