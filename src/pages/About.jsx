import React from 'react'
import Navbar from '../components/Navbar'
import ProfilePicture from '../assets/Profile_Picture.jpg'
import { FaArtstation } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gray-900'>
      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap xl:flex-nowrap justify-center bg-gray-900 pt-40'>
        <div className='object-center xl:object-left'>
          <img src={ProfilePicture} className='w-full h-[700px] lg:h-[600px] object-contain' alt="" />
        </div>
        <div className='text-left ml-[50px] w-[500px] cursor-default pt-20 lg:pt-0'>
          <h2 className='text-2xl text-blue-100'>That's me</h2>
          <h1 className='text-5xl py-2 font-bold text-blue-500'>Joonas Kirsipuu</h1>
          <p className='text-xs leading-6 pt-8 text-gray-400'>For me, art is quite a broad concept. Probably because I'm young and I can absorb it all - different materials, colours and technologies. 
          However, I tend to lean more towards newer art methods, the most exciting of which is 3D. For me, this form of visual expression offers the most freedom and surprising results.
          </p> 
          <p className='text-xs leading-6 py-5 text-gray-400'>
            I have a rather 'weird' approach to generating ideas - new and exciting ideas that pop into my head and stay there for quite a long time before they start to form into something more concrete. 
            I don't draw or write anything anywhere, but I think intensely and finally decide that now is the time to get something done. This can happen spontaneously or by forcing myself. 
            The work is usually slow, I like to let it settle for a couple of months or more and then come back again. 
          </p>
          <p className='text-xs leading-6 text-gray-400'>
            I find ideas in different places but the main source is still the internet. 
            That's where there's the most information and where cultures, subcultures and countercultures evolve rapidly. 
            I'm most into visually stricking themes and architecture but I'm also interested in different cultures. 
            Lately, I have started to look more closely at different political and geopolitical issues, the human psyche, mental disorders and how this gives rise to different subcultures and/or countercultures.
          </p>
        </div>
      </div>

        {/* SOCIALS */}
        <div className='flex justify-center text-4xl pt-10 gap-20 text-gray-700 list-none bg-gray-900 pb-10 xl:pb-0'>
          <li className='hover:text-blue-700'>
            <a href="https://www.artstation.com/joonaskirsipuu">
              <FaArtstation />
            </a>
          </li>
          <li className='hover:text-blue-700'>
            <a href="https://www.facebook.com/joonas.kirsipuu">
              <FaFacebook />
            </a>
          </li>
          <li className='hover:text-blue-700'>
            <a href="https://www.instagram.com/joonaskirsipuu/">
              <FaInstagram/>
            </a>
          </li>
          <li className='hover:text-blue-700'>
            <a href="https://www.linkedin.com/in/joonas-k-3b2879104/">
              <FaLinkedin />
            </a>
          </li>
        </div>
    </div>
  )
}

export default About