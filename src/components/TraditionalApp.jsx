import '../i18n.js';
import data from '../data/traditional.js';
import GalleryPage from './GalleryPage.jsx';
import Footer from './Footer.jsx';
import { useTranslation } from 'react-i18next';

const HeaderPicture = '/images/BANNER.webp';

export default function TraditionalApp() {
  const { t } = useTranslation();
  return (
    <>
      <GalleryPage
        name='Traditional'
        data={data}
        headerImage={HeaderPicture}
        isMasonry={true}
      >
        <div className='px-4 xl:px-0 pt-8 pb-4'>
          <h1 className='text-xl sm:text-3xl xl:text-5xl font-bold text-blue-500'>{t('nav.traditional')}</h1>
        </div>
      </GalleryPage>
      <Footer />
    </>
  );
}
