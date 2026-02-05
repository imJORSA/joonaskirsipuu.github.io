import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ProfilePicture from '../assets/Profile_Picture.webp'
import HeaderPicture from '../assets/BANNER.webp'
import { FaArtstation } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


const About = () => {
  const baseUrl = 'https://joonaskirsipuu.github.io';
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joonas Kirsipuu",
    "url": `${baseUrl}/About`,
    "image": `${baseUrl}${ProfilePicture}`,
    "jobTitle": "3D Geek, Worldbuilder & Designer",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Harmonia INside"
      },
      {
        "@type": "Organization",
        "name": "3D Technologies R&D AS"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Pallas University of Applied Sciences"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Tartu Art School"
      }
    ],
    "sameAs": [
      "https://www.artstation.com/joonaskirsipuu",
      "https://www.facebook.com/joonas.kirsipuu",
      "https://www.instagram.com/joonaskirsipuu/",
      "https://www.linkedin.com/in/joonas-k-3b2879104/"
    ]
  };

  return (
    <>
      <Helmet>
        <title>About | Joonas Kirsipuu - 3D Geek, Worldbuilder & Designer</title>
        <meta name="description" content="Learn more about Joonas Kirsipuu, a passionate 3D geek, worldbuilder and designer with experience in architectural rendering, wayfinding maps, and freelance 3D modeling." />
        <link rel="canonical" href={`${baseUrl}/about`} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <div name='About' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className='relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
          <div className="inline-block">
            <div className='object-center lg:object-left'>
              <img src={ProfilePicture} loading="eager" className='h-auto max-h-[500px] xl:max-h-[600px] max-w-full object-contain grayscale hover:grayscale-0 ease-in-out duration-300' alt="Joonas Kirsipuu" />
            </div>
            {/* SOCIALS */}
            <div className='grid grid-cols-4 gap-1 pt-4 list-none w-full'>
              <li className='aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300'>
                <a href="https://www.artstation.com/joonaskirsipuu" target="_blank" rel="noreferrer" className='flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl'>
                  <FaArtstation />
                </a>
              </li>
              <li className='aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300'>
                <a href="https://www.facebook.com/joonas.kirsipuu" target="_blank" rel="noreferrer" className='flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl'>
                  <FaFacebook />
                </a>
              </li>
              <li className='aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300'>
                <a href="https://www.instagram.com/joonaskirsipuu/" target="_blank" rel="noreferrer" className='flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl'>
                  <FaInstagram/>
                </a>
              </li>
              <li className='aspect-square bg-blue-900 text-white flex justify-center items-center hover:bg-sky-300 hover:scale-110 duration-300'>
                <a href="https://www.linkedin.com/in/joonas-k-3b2879104/" target="_blank" rel="noreferrer" className='flex justify-center items-center w-full h-full text-3xl sm:text-4xl lg:text-5xl'>
                  <FaLinkedin />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className='text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[750px] lg:overflow-y-auto pr-4'>
          <div>
            <h2 className='text-lg sm:text-2xl text-blue-900'>That's me</h2>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl pt-2 pb-8 font-bold text-blue-500'>Joonas Kirsipuu</h1>
            <p className='text-sm sm:text-base leading-6 text-black'>For me, art is quite a broad concept. Probably because I'm young and I can absorb it all - different materials, colours and technologies. 
          However, I tend to lean more towards newer art methods, the most exciting of which is 3D. For me, this form of visual expression offers the most freedom and surprising results.
            </p> 
            <p className='text-sm sm:text-base leading-6 py-5 text-black'>
            I have a rather 'weird' approach to generating ideas - new and exciting ideas that pop into my head and stay there for quite a long time before they start to form into something more concrete. 
            I don't draw or write anything anywhere, but I think intensely and finally decide that now is the time to get something done. This can happen spontaneously or by forcing myself. 
            The work is usually slow, I like to let it settle for a couple of months or more and then come back again. 
            </p>
            <p className='text-sm sm:text-base leading-6 text-black'>
            I find ideas in different places but the main source is still the internet. 
            That's where there's the most information and where cultures, subcultures and countercultures evolve rapidly. 
            I'm most into visually stricking themes and architecture but I'm also interested in different cultures. 
            Lately, I have started to look more closely at different political and geopolitical issues, the human psyche, mental disorders and how this gives rise to different subcultures and/or countercultures.
            </p>

            {/* EXPERIENCE */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>EXPERIENCE</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>Founder, CEO & 3D Designer | Harmonia INside OÜ</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Nov 2023 – Present</div>
                <p className='pl-4'>Spearhead 3D visualization projects, specializing in high-fidelity interior and exterior architectural rendering and design.</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>3D Designer (Part-time) | 3D Technologies R&D AS</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Mar 2022 – Present</div>
                <p className='pl-4'>Develop comprehensive 3D and 2D wayfinding map designs for large-scale facilities, including hospitals, shopping malls, and commercial buildings.</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>Freelance 3D Artist | Polüwerk OÜ & Bluray OÜ</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Feb 2019 – Feb 2023</div>
                <p className='pl-4'>Delivered custom 3D modeling and visualization assets for diverse client requirements across multiple industries.</p>
              </li>
            </ul>

            {/* EDUCATION */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>EDUCATION</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>Bachelor's Degree | Pallas University of Applied Sciences</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>2020 – 2024</div>
                <p className='pl-4'>Field of study: Sculpture</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>Vocational Secondary Education | Tartu Art School</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Sep 2015 – Feb 2019</div>
                <p className='pl-4'>Field of study: 3D Modelling & Animation</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>Basic Education | Tartu Mart Reiniku School</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Sep 2006 – Jun 2015</div>
              </li>
            </ul>

            {/* EXHIBITIONS */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>EXHIBITIONS</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>Final Project Exhibition | Pallas Art Gallery</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>Jun 2024 – Jul 2024</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
