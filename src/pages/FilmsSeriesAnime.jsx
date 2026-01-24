import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'

const FilmsSeriesAnime = () => {

  return (
    <div name='FilmsSeriesAnime' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>_</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 sm:px-10'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-2xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default'>LIST OF MY FAVOURITE FILMS, SERIES & ANIME</h1>
            
            <h2 className='text-xl sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>FILMS</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>Blade Runner - 1982</span><span className='text-black'> - The stunning world of Philip K. Dick’s Do Androids Dream of Electric Sheep? created on film in fantastic detail.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Blade Runner 2049 - 2017</span><span className='text-black'> - One of the best film sequels ever made. It’s distinctly Blade Runner, yet it’s different enough in its tonality and direction to stand on it's own two feet.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Alien - 1979</span><span className='text-black'> - Holds up incredibly well in its horror elements. Spectacular set design and atmosphere.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>2001: A Space Odyssey - 1968</span><span className='text-black'> - It’s so good that it convinced a certain group of people that the Earth is flat. Enough said.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Dune part 1 & 2 - 2021/2024</span><span className='text-black'> - The unfilmable book capsured on film by one of the best directors of our time. CINEMA!</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>LOTR Trilogy - 2001/2002/2003</span><span className='text-black'> - The gold standard of worldbuilding, made into three films by an incredibly passionate group of fellas. It’s just magical.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Arrival - 2016</span><span className='text-black'> - A fantastic take on the sci-fi genre. Great acting and directing.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Whiplash - 2014</span><span className='text-black'> - You don’t need a big budget to make an amazing film. The corrosive and convoluted relationship between a student who longs for his teacher’s praise is really chilling and hits home.</span></li>
            </ul>

            <h2 className='text-xl sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>SERIES</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>Breaking Bad - 2008 - 2013</span><span className='text-black'> - A couple of filler episodes a side, it's ability to deliver 8+/10 so consistently over such a long runtime is impressive.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Game of Thrones - 2011 - 2019</span><span className='text-black'> - As long as you don't watch the last two seasons, it's solid television with coplex characters and interesting plotlines.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Andor - 2022- 2025</span><span className='text-black'> - Surprisingly deep narrative for Star Wars. It's also pretty relevant in today's world.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Mr. Robot - 2015 - 2019</span><span className='text-black'> - My personal favourite series. Every twist and turn is carefully thought out. It’s even better on a rewatch, especially Season 1.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Chernoby - 2019</span><span className='text-black'> - One of the best miniseries ever made. Captures the human condition of living in the Soviet Union quite well.</span></li>
            </ul>

            <h2 className='text-xl sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>ANIME</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5'>
              <li className='cursor-default'><span className='font-bold text-black'>Initial D - 1998 - 2014</span><span className='text-black'> - This is the only anime I've watched from beginning to end, and it was really something else. I daydream about making my own animated car drift battle. Hopefully, someday I can realize that dream.</span></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmsSeriesAnime