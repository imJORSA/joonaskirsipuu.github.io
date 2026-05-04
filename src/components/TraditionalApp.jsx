import { useTranslation } from 'react-i18next';
import '../i18n.js';

const DrawingsPicture = '/images/traditional/Sitting with colours_thumbnail.webp';
const SculpturePicture = '/images/skulpa/Maiko_002.webp';

export default function TraditionalApp() {
  const { t } = useTranslation();

  return (
    <div name='Traditional' className='w-full min-h-screen bg-white flex flex-col'>
      <div className='px-4 xl:px-0 pt-8 pb-4'>
        <h1 className='text-xl sm:text-3xl xl:text-5xl font-bold text-blue-500'>{t('nav.traditional')}</h1>
      </div>

      <div className='w-full flex-1 h-auto flex flex-col md:flex-row pb-10 gap-4 px-4 xl:px-0'>
        <div className='relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer'>
          <a href="/Drawings" className="w-full h-full block relative">
            <img
              src={DrawingsPicture}
              loading="eager"
              className='text-transparent w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
              alt={t('traditional_page.drawings_alt')}
            />
            <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
              <h2 className='text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>
                {t('traditional_page.drawings')}
              </h2>
            </div>
          </a>
        </div>
        <div className='relative w-full md:w-1/2 aspect-square overflow-hidden group cursor-pointer'>
          <a href="/Sculpture" className="w-full h-full block relative">
            <img
              src={SculpturePicture}
              loading="eager"
              className='text-transparent w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
              alt={t('traditional_page.sculpture_alt')}
            />
            <div className='absolute inset-0 flex justify-center items-center bg-black/20 group-hover:bg-transparent transition-colors duration-300'>
              <h2 className='text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-lg'>
                {t('traditional_page.sculpture')}
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
