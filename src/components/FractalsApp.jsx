import { useTranslation } from 'react-i18next';
import '../i18n.js';
import data from '../data/fractals.js';
import GalleryPage from './GalleryPage.jsx';
import Footer from './Footer.jsx';

const HeaderPicture = '/images/BANNER.webp';
const FractalPicture = '/images/Fractalpicture.webp';
const MyFutureSpace = '/docs/Joonas Kirsipuu_My Future Space_2024_Summary_Pallas.pdf';
const MinuTulevikuRuum = '/docs/Joonas Kirsipuu_Minu tuleviku ruum_2024_Pallas.pdf';

export default function FractalsApp() {
  const { t } = useTranslation();

  return (
    <>
      <GalleryPage
        name='Fractals'
        data={data}
        headerImage={HeaderPicture}
        showText={false}
        imageObjectFit="object-cover"
      >
        <div className='relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0'>
          <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
            <div className='object-center lg:object-left'>
              <img
                src={FractalPicture}
                loading="eager"
                className='w-full h-auto max-h-[500px] xl:max-h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300'
                alt={t('fractals_page.alt')}
              />
            </div>
          </div>
          <div className='text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[600px] lg:overflow-y-auto pr-4'>
            <div>
              <h1 className='text-2xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>
                {t('fractals_page.title')}
              </h1>
                <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
                  {t('fractals_page.desc1').split('[LINK1]')[0]}
                  <a href={MyFutureSpace} download className='text-blue-500 hover:underline'>
                    {t('fractals_page.link1_text')}
                  </a>
                  {t('fractals_page.desc1').split('[LINK1]')[1]}
                </p>
                <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
                  {t('fractals_page.desc2').split('[LINK2]')[0]}
                  <a href={MinuTulevikuRuum} download className='text-blue-500 hover:underline'>
                    {t('fractals_page.link2_text')}
                  </a>
                  {t('fractals_page.desc2').split('[LINK2]')[1]}
                </p>
              <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
                {t('fractals_page.desc3')}
              </p>
            </div>
          </div>
        </div>
      </GalleryPage>
      <Footer />
    </>
  );
}
