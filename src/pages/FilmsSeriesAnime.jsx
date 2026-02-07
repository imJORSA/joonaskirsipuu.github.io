import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const FilmsSeriesAnime = () => {
  const { t } = useTranslation();

  return (
    <>
      <div name='FilmsSeriesAnime' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default'>{t('films_page.title')}</h1>
            
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>{t('films_page.films_title')}</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.br.title')}</span><span className='text-black'>{t('films_page.films.br.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.br2049.title')}</span><span className='text-black'>{t('films_page.films.br2049.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.alien.title')}</span><span className='text-black'>{t('films_page.films.alien.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.space_odyssey.title')}</span><span className='text-black'>{t('films_page.films.space_odyssey.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.dune.title')}</span><span className='text-black'>{t('films_page.films.dune.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.lotr.title')}</span><span className='text-black'>{t('films_page.films.lotr.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.arrival.title')}</span><span className='text-black'>{t('films_page.films.arrival.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.whiplash.title')}</span><span className='text-black'>{t('films_page.films.whiplash.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.joker.title')}</span><span className='text-black'>{t('films_page.films.joker.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.y1917.title')}</span><span className='text-black'>{t('films_page.films.y1917.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.pirates.title')}</span><span className='text-black'>{t('films_page.films.pirates.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.films.oppenheimer.title')}</span><span className='text-black'>{t('films_page.films.oppenheimer.desc')}</span></li>

            </ul>

            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>{t('films_page.series_title')}</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.bb.title')}</span><span className='text-black'>{t('films_page.series.bb.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.got.title')}</span><span className='text-black'>{t('films_page.series.got.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.andor.title')}</span><span className='text-black'>{t('films_page.series.andor.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.mr_robot.title')}</span><span className='text-black'>{t('films_page.series.mr_robot.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.chernobyl.title')}</span><span className='text-black'>{t('films_page.series.chernobyl.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.house.title')}</span><span className='text-black'>{t('films_page.series.house.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.aib.title')}</span><span className='text-black'>{t('films_page.series.aib.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.series.clarkson.title')}</span><span className='text-black'>{t('films_page.series.clarkson.desc')}</span></li>

            </ul>

            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>{t('films_page.anime_title')}</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5'>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.anime.initial_d.title')}</span><span className='text-black'>{t('films_page.anime.initial_d.desc')}</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>{t('films_page.anime.edgerunners.title')}</span><span className='text-black'>{t('films_page.anime.edgerunners.desc')}</span></li>

            </ul>
            <p className='text-sm sm:text-base leading-6 pt-10 text-black'>
              <Trans i18nKey="films_page.imdb_link">
                If you're interested, you can check out my ratings for films & series <a href="https://www.imdb.com/user/ur212129254/ratings/?ref_=hm_nv_rat" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>here</a>. It's far from complete though, I'm updating it periodically.
              </Trans>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default FilmsSeriesAnime