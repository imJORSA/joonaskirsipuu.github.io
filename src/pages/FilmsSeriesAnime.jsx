import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/BANNER.webp'

const FilmsSeriesAnime = () => {

  return (
    <div name='FilmsSeriesAnime' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='text-left w-full cursor-default'>
          <div>
            <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500 cursor-default'>MY FAVOURITE FILMS, SERIES AND ANIME</h1>
            
            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>FILMS</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>Blade Runner - 1982</span><span className='text-black'> - The stunning world of Philip K. Dick’s Do Androids Dream of Electric Sheep? created on film in fantastic detail.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Blade Runner 2049 - 2017</span><span className='text-black'> - One of the best film sequels ever made. It’s distinctly Blade Runner, yet it’s different enough in its tonality and direction to stand on it's own two feet.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Alien - 1979</span><span className='text-black'> - Holds up incredibly well in its horror elements. Spectacular set design and atmosphere.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>2001: A Space Odyssey - 1968</span><span className='text-black'> - It’s so good that it convinced a certain group of people that the Earth is flat. Enough said.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Dune part 1 & 2 - 2021/2024</span><span className='text-black'> - The unfilmable book capsured on film by one of the best directors of our time. CINEMA!</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>LOTR Trilogy - 2001/2002/2003</span><span className='text-black'> - The gold standard of worldbuilding, made into three films by an incredibly passionate group of people. It’s just magical.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Arrival - 2016</span><span className='text-black'> - A fantastic take on the sci-fi genre. Great acting and directing.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Whiplash - 2014</span><span className='text-black'> - Proves that you don’t need a big budget to make an amazing film. The corrosive and convoluted relationship between a student who longs for his teacher’s praise is really chilling and hits home.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Joker - 2019</span><span className='text-black'> - A very different take on a classic Batman villain. In a time of mental health crisis—either because people are increasingly lonely or because some think it’s ‘cool’—Joker’s relevance is only bound to increase.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>1917 - 2019</span><span className='text-black'> - Spectacular cinematography disguised as a war film that is just brutal.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Pirates of the Caribbean: The Curse of the Black Pearl - 2003</span><span className='text-black'> - Pirates used to be cartoony and something you’d scare kids with, but not after this film. It’s an absolute gem that still holds up incredibly well visually, and Johnny Depp is just brilliant.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Oppenheimer - 2023</span><span className='text-black'> - Written like an action flick, but it’s just some guys in a room talking and a big explosion at the halfway mark. And yet it managed to keep me on the edge of my seat for the full runtime.
It’s also got some interesting back-and-forth between the black-and-white and color shots—one from Strauss’s POV and the other from Oppenheimer’s, respectively. I wish I’d had the chance to see it in IMAX.</span></li>

            </ul>

            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>SERIES</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-8'>
              <li className='cursor-default'><span className='font-bold text-black'>Breaking Bad - 2008 - 2013</span><span className='text-black'> - A couple of filler episodes a side, it's ability to deliver 8+/10 so consistently over such a long runtime is impressive.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Game of Thrones - 2011 - 2019</span><span className='text-black'> - As long as you don't watch the last two seasons, it's solid television with complex characters and interesting plotlines.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Andor - 2022- 2025</span><span className='text-black'> - Surprisingly deep narrative for Star Wars. It's also pretty relevant in today's world.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Mr. Robot - 2015 - 2019</span><span className='text-black'> - My personal favourite series. Every twist and turn is carefully thought out. It’s even better on a rewatch, especially Season 1.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Chernobyl - 2019</span><span className='text-black'> - One of the best miniseries ever made. Captures the human condition of living in the Soviet Union quite well.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>House M.D. - 2004 - 2012</span><span className='text-black'> - A medical drama made fun by a flawed, hilarious, and witty doctor.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Alice in Borderland - 2020 - 2025</span><span className='text-black'> - Stellar first two seasons; the third falls flat. Overall, very engaging, fun, and mindfucky.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Clarkson's Farm - 2021 - ?</span><span className='text-black'> - A guy who drove cars for a living now drives tractors for a living. Clarkson’s Farm is hilarious, emotional, educational, and important.</span></li>

            </ul>

            <h2 className='text-lg sm:text-2xl font-bold text-blue-500 mb-4 cursor-default'>ANIME</h2>
            <ul className='flex flex-col gap-2 text-sm sm:text-base cursor-default leading-6 pb-5'>
              <li className='cursor-default'><span className='font-bold text-black'>Initial D - 1998 - 2014</span><span className='text-black'> - The anime that sparked my interest in cars. An absolute classic. I daydream about making my own animated car drift battle. Hopefully, someday I can realize that dream.</span></li>
              <li className='cursor-default'><span className='font-bold text-black'>Cyberpunk: Edgerunners - 2022 - ?</span><span className='text-black'> - If you like Cyberpunk 2077, you will love this anime. This stayed with me for a long time.</span></li>

            </ul>
            <p className='text-sm sm:text-base leading-6 pt-10 text-black'>
              If you're interested, you can check out my ratings for films & series <a href="https://www.imdb.com/user/ur212129254/ratings/?ref_=hm_nv_rat" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>here</a>. It's far from complete though, I'm updating it periodically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmsSeriesAnime