import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const Blog = () => {
  const baseUrl = 'https://joonaskirsipuu.github.io';

  return (
    <>
      <Helmet>
        <title>Blog | Joonas Kirsipuu</title>
        <meta name="description" content="Read random ramblings, thoughts on GenAI, and lists of favorite media by Joonas Kirsipuu." />
        <link rel="canonical" href={`${baseUrl}/blog`} />
      </Helmet>
      <div name='Blog' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='flex flex-col w-full mb-10 xl:mb-0'>
          <div className='w-full'>
            <h1 className='text-xl sm:text-4xl md:text-5xl text-blue-500 mb-2 font-bold'>MY RANDOM RAMBLINGS</h1>
            <h2 className='text-sm sm:text-2xl text-black mb-10'>This page is for my thoughts on random topics and listing all my favourite films, series, games and anime, so you could better get to know me.</h2>
            <ul className='flex flex-col gap-8'>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/GenAI" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>Why GenAI art will be obsolete - WIP</Link>
              </li>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/FilmsSeriesAnime" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>My favourite films, series and anime</Link>
              </li>
              <li className='text-sm sm:text-2xl font-bold'>
                <Link to="/Games" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>My favourite games</Link>
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
