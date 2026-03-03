import '../i18n.js';
import data from '../data/images.js';
import GalleryPage from './GalleryPage.jsx';
import Footer from './Footer.jsx';

const HeaderPicture = '/images/BANNER.webp';

export default function GalleryApp() {
  return (
    <>
      <GalleryPage
        name='Gallery'
        data={data}
        headerImage={HeaderPicture}
        isMasonry={true}
      />
      <Footer />
    </>
  );
}
