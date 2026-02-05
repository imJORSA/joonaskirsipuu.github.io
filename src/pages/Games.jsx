import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const Games = () => {
  const baseUrl = 'https://joonaskirsipuu.github.io';

  return (
    <>
      <Helmet>
        <title>Favorite Games | Joonas Kirsipuu</title>
        <meta name="description" content="A list of Joonas Kirsipuu's favorite singleplayer and multiplayer video games." />
        <link rel="canonical" href={`${baseUrl}/games`} />
      </Helmet>
      <div name='Games' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default'>LIST OF MY FAVOURITE GAMES</h1>
            
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>SINGLEPLAYER</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>Cyberpunk 2077 - 2020/2023</span><span className='text-black'> - One of the coolest video game worlds ever. Everything is rooted in reality, and everything has a purpose.
                Combat is incredibly fun and varied. A kickass soundtrack. The narrative uses the worldbuilding exceptionally well, and it’s not just a story about punks fighting the system or a gun-for-hire climbing the criminal underworld ladder.
                Cyberpunk 2077’s main quest is far more philosophical, drawing heavily from existentialism and posthumanism. At its core, it’s a story about identity, weaving that theme through every part of the game. The length of the main quest is also pretty spot on.
                It’s sharp and to the point — all killer, no filler. The quests have some decision-making that ripples outward, though less so than The Witcher 3, but the production value is also higher. The characters are excellent. - 9/10</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>The Witcher 3: Wild Hunt - 2015/2016</span><span className='text-black'> - This game showed everyone (and Bethesda) that vast open-world games can have an abundance of complex stories and well-written characters.
                The combat is by far the weakest link, but it’s by no means bad, and eventually becomes fun. Both main and side quests offer a decent amount of decision-making, with consequences that appear later down the line.
                Gwent was so good that CDPR ended up making a separate game just for it. The soundtrack is just lovely. - 8/10</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Super Mario Galaxy 1 & 2- 2007/2010</span><span className='text-black'> - WIP</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Ori and the Blind Forest, Ori and the Will of the Wisps - 2015/2020</span><span className='text-black'> - WIP</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Dead Space Remake - 2023</span><span className='text-black'> - WIP</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Minecraft - 2009</span><span className='text-black'> - WIP</span></li>

            </ul>

            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>MULTIPLAYER</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5'>
              <li className='cursor-default'><span className='font-bold text-black'>League of Legends - 2009</span><span className='text-black'> - WIP</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Overwatch - 2016</span><span className='text-black'> - WIP</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Warframe - 2013</span><span className='text-black'> - WIP</span></li>

            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Games