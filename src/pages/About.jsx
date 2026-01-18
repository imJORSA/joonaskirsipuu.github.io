import React from 'react'
import Navbar from '../components/Navbar'
import ProfilePicture from '../assets/Profile_Picture.jpg'
import HeaderPicture from '../assets/gallery/Lonely Robot.jpg'
import { FaArtstation } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


const About = () => {
  return (
    <div name='About' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex w-full h-80 m-auto justify-center items-center bg-slate-900'>
        <img src={HeaderPicture} className='w-full h-80 object-cover blur-[2px] opacity-50 grayscale' alt="" />
        <h1 className='absolute text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white cursor-default'>_</h1>
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap bg-white py-10'>
        <div className='flex flex-col'>
          <div className='object-center xl:object-left'>
            <img src={ProfilePicture} className='w-full h-[700px] lg:h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300' alt="" />
          </div>
          {/* SOCIALS */}
          <div className='flex justify-between text-4xl pt-10 text-blue-900 list-none'>
            <li className='hover:text-blue-200'>
              <a href="https://www.artstation.com/joonaskirsipuu">
                <FaArtstation />
              </a>
            </li>
            <li className='hover:text-blue-200'>
              <a href="https://www.facebook.com/joonas.kirsipuu">
                <FaFacebook />
              </a>
            </li>
            <li className='hover:text-blue-200'>
              <a href="https://www.instagram.com/joonaskirsipuu/">
                <FaInstagram/>
              </a>
            </li>
            <li className='hover:text-blue-200'>
              <a href="https://www.linkedin.com/in/joonas-k-3b2879104/">
                <FaLinkedin />
              </a>
            </li>
          </div>
        </div>
        <div className='text-left ml-[50px] w-[800px] cursor-default lg:pt-0'>
          <h2 className='text-2xl text-blue-900'>That's me</h2>
          <h1 className='text-5xl py-2 font-bold text-blue-500'>Joonas Kirsipuu</h1>
          <p className='text-base leading-6 pt-8 text-black'>For me, art is quite a broad concept. Probably because I'm young and I can absorb it all - different materials, colours and technologies. 
          However, I tend to lean more towards newer art methods, the most exciting of which is 3D. For me, this form of visual expression offers the most freedom and surprising results.
          </p> 
          <p className='text-base leading-6 py-5 text-black'>
            I have a rather 'weird' approach to generating ideas - new and exciting ideas that pop into my head and stay there for quite a long time before they start to form into something more concrete. 
            I don't draw or write anything anywhere, but I think intensely and finally decide that now is the time to get something done. This can happen spontaneously or by forcing myself. 
            The work is usually slow, I like to let it settle for a couple of months or more and then come back again. 
          </p>
          <p className='text-base leading-6 text-black'>
            I find ideas in different places but the main source is still the internet. 
            That's where there's the most information and where cultures, subcultures and countercultures evolve rapidly. 
            I'm most into visually stricking themes and architecture but I'm also interested in different cultures. 
            Lately, I have started to look more closely at different political and geopolitical issues, the human psyche, mental disorders and how this gives rise to different subcultures and/or countercultures.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About