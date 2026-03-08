import '../i18n.js'
import { useTranslation } from 'react-i18next'

import Navbar from './Navbar'
import Footer from './Footer'
import { FaArtstation } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const ProfilePicture = '/images/Profile_Picture.webp';
const HeaderPicture = '/images/BANNER.webp';

const About = () => {
  const { t } = useTranslation();
  return (
    <div name='About' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt={t('banner_alt')} />
      </div>

      <Navbar />

      <div className='px-4 xl:px-0 pt-8'>
          <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 font-bold text-blue-500'>{t('nav.about')}</h1>
      </div>

      {/* BODY */}
      <div className='relative w-full flex flex-wrap lg:flex-nowrap bg-white pb-8 px-4 xl:px-0'>
        <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
          <div className="inline-block">
            <div className='object-center lg:object-left'>
              <img src={ProfilePicture} loading="eager" className='h-auto max-h-[500px] xl:max-h-[600px] max-w-full object-contain grayscale hover:grayscale-0 ease-in-out duration-300' alt={t('about_page.profile_alt')} />
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
        <div className='text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[990px] lg:overflow-y-auto pr-4'>
          <div>
            <h2 className='text-lg sm:text-2xl text-blue-900'>{t('about_page.thats_me')}</h2>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl pt-2 pb-8 font-bold text-blue-500'>Joonas Kirsipuu</h1>
            <p className='text-sm sm:text-base leading-6 text-black'>{t('about_page.intro1')}</p> 
            <p className='text-sm sm:text-base leading-6 py-5 text-black'>{t('about_page.intro2')}</p>
            <p className='text-sm sm:text-base leading-6 text-black'>{t('about_page.intro3')}</p>

            {/* EXPERIENCE */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>{t('about_page.experience')}</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.jobs.harmonia.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.jobs.harmonia.date')}</div>
                <p className='pl-4'>{t('about_page.jobs.harmonia.desc')}</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.jobs.tech3d.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.jobs.tech3d.date')}</div>
                <p className='pl-4'>{t('about_page.jobs.tech3d.desc')}</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.jobs.freelance.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.jobs.freelance.date')}</div>
                <p className='pl-4'>{t('about_page.jobs.freelance.desc')}</p>
              </li>
            </ul>

            {/* EDUCATION */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>{t('about_page.education')}</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.schools.pallas.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.schools.pallas.date')}</div>
                <p className='pl-4'>{t('about_page.schools.pallas.desc')}</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.schools.tartu.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.schools.tartu.date')}</div>
                <p className='pl-4'>{t('about_page.schools.tartu.desc')}</p>
              </li>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.schools.reiniku.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.schools.reiniku.date')}</div>
              </li>
            </ul>

            {/* EXHIBITIONS */}
            <div className='pt-10 pb-5'>
              <div className='border-t-2 border-dotted border-blue-900'></div>
            </div>
            <h2 className='text-lg sm:text-2xl text-blue-500 font-bold cursor-default'>{t('about_page.exhibitions')}</h2>
            <ul className='flex flex-col gap-6 pt-4 text-sm sm:text-base leading-6 text-black cursor-default'>
              <li>
                <div className='font-bold text-base sm:text-lg'>{t('about_page.exhibs.pallas.title')}</div>
                <div className='text-slate-500 text-xs sm:text-sm italic mb-1'>{t('about_page.exhibs.pallas.date')}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
