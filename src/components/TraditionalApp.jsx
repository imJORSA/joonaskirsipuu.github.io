import '../i18n.js';
import data from '../data/traditional.js';
import GalleryPage from './GalleryPage.jsx';
import Footer from './Footer.jsx';

const HeaderPicture = '/images/BANNER.webp';

export default function TraditionalApp() {
  return (
    <>
      <GalleryPage
        name='Traditional'
        data={data}
        headerImage={HeaderPicture}
        isMasonry={true}
      />
      <Footer />
    </>
  );
}
