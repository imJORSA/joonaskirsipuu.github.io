import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import data from '../data/fractals'
import MyFutureSpace from '../assets/Joonas Kirsipuu_My Future Space_2024_Summary_Pallas.pdf'
import MinuTulevikuRuum from '../assets/Joonas Kirsipuu_Minu tuleviku ruum_2024_Pallas.pdf'
import GalleryPage from '../components/GalleryPage'

const HeaderPicture = '/images/BANNER.webp';
const FractalPicture = '/images/Fractalpicture.webp';

const Fractals = () => {
  const { t } = useTranslation();
  const baseUrl = 'https://joonaskirsipuu.eu';
  const ogImage = `${baseUrl}${FractalPicture}`;
  const ogImageAlt = 'fractals_page.alt';

  return (
    <GalleryPage 
      name='Fractals' 
      data={data} 
      headerImage={HeaderPicture} 
      ogImage={ogImage} 
      ogImageAlt={ogImageAlt} 
      showText={false} 
      imageObjectFit="object-cover"
      title="seo.fractals.title"
      description="seo.fractals.desc"
    >
      <div className='relative w-full flex flex-wrap lg:flex-nowrap bg-white py-10 px-4 xl:px-0'>
        <div className='flex flex-col w-full lg:w-auto items-center lg:items-start'>
          <div className='object-center lg:object-left'>
            <img src={FractalPicture} loading="eager" className='w-full h-auto max-h-[500px] xl:max-h-[600px] object-contain grayscale hover:grayscale-0 ease-in-out duration-300 ' alt={t('fractals_page.alt')} />
          </div>
        </div>
        <div className='text-left mt-10 lg:mt-0 ml-0 lg:ml-[50px] flex-1 cursor-default lg:pt-0 h-auto lg:h-[600px] lg:overflow-y-auto pr-4'>
          <div>
            <h1 className='text-2xl sm:text-4xl xl:text-5xl pb-4 sm:pb-8 font-bold text-blue-500'>{t('fractals_page.title')}</h1>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              <Trans i18nKey="fractals_page.desc1">
                This worldbuilding project started out as a Bachelor's thesis project titled <a href={MyFutureSpace} download className='text-blue-500 hover:underline'>"My Future Space"</a>. I wanted to envision a future space scenario where humanity, due to climate change, has migrated to the mesosphere, living on gigantic floating sculptural objects. The capsules within these objects serve as individual living quarters, inspired by shapes from nature. In addition to the capsules, there is also a communal area where everyone gets to socialize. My design process involved extensive research, drawing inspiration from various sources including architectural marvels in Asia, science fiction literature, and film classics from the 60’s to the modern age big blockbuster spectacles.
              </Trans>
            </p>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>
              <Trans i18nKey="fractals_page.desc2">
                You can find the full thesis <a href={MinuTulevikuRuum} download className='text-blue-500 hover:underline'>here</a> in Estonian, and I want to thank Merille Hommik for being an amazing mentor throughout this bachelor’s project.
              </Trans>
            </p>
            <p className='text-sm sm:text-base leading-6 pb-5 text-black'>{t('fractals_page.desc3')}</p>
          </div>
        </div>
      </div>
    </GalleryPage>
  )
}

export default Fractals