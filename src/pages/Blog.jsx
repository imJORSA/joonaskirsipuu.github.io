import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'

const headlines = [
  {
    id: 1,
    title: "Why GenAI will be obsolete - WIP",
    content: ""
  },

]

const Blog = () => {
  const [selectedHeadline, setSelectedHeadline] = useState(headlines[0])

  return (
    <div name='Blog' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>BLOG</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10'>
        <div className='flex flex-col w-full xl:w-auto px-4 sm:px-10 xl:px-0 mb-10 xl:mb-0'>
          <div className='object-center xl:object-left w-full xl:w-[400px]'>
            <h2 className='text-2xl text-blue-900 mb-5 font-bold'>My random ramblings:</h2>
            <ul className='flex flex-col gap-4'>
              {headlines.map((headline) => (
                <li 
                  key={headline.id} 
                  onClick={() => setSelectedHeadline(headline)}
                  className={`text-xl cursor-pointer hover:text-blue-500 transition-colors duration-300 ${selectedHeadline.id === headline.id ? 'text-blue-500 font-bold' : 'text-black'}`}
                >
                  {headline.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className='text-left ml-0 xl:ml-[50px] flex-1 cursor-default lg:pt-0 h-[500px] sm:h-[700px] lg:h-[600px] overflow-y-auto px-4 sm:px-10 xl:px-0'>
          <div className='max-w-[800px] pr-5'>
            <h1 className='text-4xl px-10 pb-8 font-bold text-blue-500'>{selectedHeadline.title}</h1>
            <p className='text-base leading-6 text-black whitespace-pre-wrap'>
              {selectedHeadline.content}
            </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
