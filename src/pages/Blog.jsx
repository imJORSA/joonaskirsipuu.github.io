import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'

const Blog = () => {

  return (
    <div name='Blog' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>BLOG</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 sm:px-10'>
        <div className='flex flex-col w-full mb-10 xl:mb-0'>
          <div className='w-full'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-blue-500 mb-2 font-bold'>MY RANDOM RAMBLINGS</h1>
            <h2 className='text-xl sm:text-2xl text-black mb-10'>This page is for my thoughts on random topics and tier lists for films & series, games, anime etc.</h2>
            <ul className='flex flex-col gap-8'>
              <li className='text-xl sm:text-2xl font-bold'>
                <Link to="/GenAI" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>Why GenAI art will be obsolete - WIP</Link>
              </li>
              <li className='text-xl sm:text-2xl font-bold'>
                <Link to="/FilmsSeriesAnime" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>List of my favourite films, series & anime</Link>
              </li>
              <li className='text-xl sm:text-2xl font-bold'>
                <Link to="/Games" className='text-black cursor-pointer hover:text-sky-300 transition-colors duration-300'>List of my favourite games</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
