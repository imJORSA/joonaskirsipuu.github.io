import '../i18n.js';
import data from '../data/drawings.js';
import GalleryPage from './GalleryPage.jsx';
import { useTranslation } from 'react-i18next';

export default function DrawingsApp() {
  const { t } = useTranslation();
  return (
    <GalleryPage
      name='Drawings'
      data={data}
      isMasonry={true}
    >
      <div className='px-4 xl:px-0 pt-8 pb-4'>
        <h1 className='text-xl sm:text-3xl xl:text-5xl font-bold text-blue-500'>{t('traditional_page.drawings')}</h1>
      </div>
    </GalleryPage>
  );
}
