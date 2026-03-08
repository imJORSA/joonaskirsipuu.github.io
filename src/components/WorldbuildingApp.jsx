import { useTranslation } from 'react-i18next';
import '../i18n.js';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const HeaderPicture = '/images/BANNER.webp';
const FractalPicture = '/images/Fractalpicture.webp';

export default function WorldbuildingApp() {
  const { t } = useTranslation();

  return (
    <div name='Worldbuilding' className='w-full min-h-screen bg-white flex flex-col'>
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} loading="eager" className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      <div className='px-4 xl:px-0 pt-8'>
        <h1 className='text-xl sm:text-3xl xl:text-5xl pb-4 font-bold text-blue-500'>{t('nav.worldbuilding')}</h1>
      </div>

      <div className='w-full flex-1 h-auto flex flex-col md:flex-row pb-10 gap-4 px-4 xl:px-0'>
        <div className='relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer'>
          <a href="/Fractals" className="w-full h-full block relative">
            <img
              src={FractalPicture}
              loading="eager"
              className='text-transparent w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
              alt={t('worldbuilding_page.fractals_thumb_alt')}
            />
            <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
              <h1 className='text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>
                {t('worldbuilding_page.fractals')}
              </h1>
            </div>
          </a>
        </div>
        <div className='relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer'>
          <div className='w-full h-full bg-black flex justify-center items-center grayscale group-hover:grayscale-0 transition-all duration-500'>
            <span className='text-9xl font-bold text-blue-500'>?</span>
          </div>
          <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
            <h1 className='text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>
              {t('worldbuilding_page.project3088')}
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
