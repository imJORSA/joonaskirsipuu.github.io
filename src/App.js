import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import SEO from "./SEO";

import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Traditional from "./pages/Traditional";
import Worldbuilding from "./pages/Worldbuilding";
import Blog from "./pages/Blog";
import Fractals from "./pages/Fractals";
import GenAI from "./pages/GenAI";
import Games from "./pages/Games";
import FilmsSeriesAnime from "./pages/FilmsSeriesAnime";

const baseUrl = 'https://joonaskirsipuu.eu';

function App() {
  const { t } = useTranslation();

  return (
    <div
      className="max-w-[1400px] mx-auto bg-white min-h-screen"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <>
            <SEO
              title={t('seo.digital.title')}
              description={t('seo.digital.desc')}
              ogImage={`${baseUrl}/images/gallery/Cerebrum_Joonas Kirsipuu_thumbnail.webp`}
              ogImageAlt="Cerebrum by Joonas Kirsipuu"
            />
            <Gallery />
          </>
        } />
        <Route path='/Traditional' element={
          <>
            <SEO
              title={t('seo.traditional.title')}
              description={t('seo.traditional.desc')}
              ogImage={`${baseUrl}/images/traditional/Thinking of you_thumbnail.webp`}
              ogImageAlt="Thinking of You by Joonas Kirsipuu"
            />
            <Traditional />
          </>
        } />
        <Route path='/Worldbuilding' element={
          <>
            <SEO
              title={t('seo.worldbuilding.title')}
              description={t('seo.worldbuilding.desc')}
              ogImage={`${baseUrl}/images/Fractalpicture.webp`}
              ogImageAlt="Worldbuilding by Joonas Kirsipuu"
            />
            <Worldbuilding />
          </>
        } />
        <Route path='/Blog' element={
          <>
            <SEO
              title={t('seo.blog.title')}
              description={t('seo.blog.desc')}
              ogImage={`${baseUrl}/images/BANNER.webp`}
              ogImageAlt="Joonas Kirsipuu Banner"
            />
            <Blog />
          </>
        } />
        <Route path='/Fractals' element={
          <>
            <SEO
              title={t('seo.fractals.title')}
              description={t('seo.fractals.desc')}
              ogImage={`${baseUrl}/images/Fractalpicture.webp`}
              ogImageAlt="Project Fractals by Joonas Kirsipuu"
            />
            <Fractals />
          </>
        } />
        <Route path='/About' element={
          <>
            <SEO
              title={t('seo.about.title')}
              description={t('seo.about.desc')}
              ogImage={`${baseUrl}/images/Profile_Picture.webp`}
              ogImageAlt="Joonas Kirsipuu"
            />
            <About />
          </>
        } />
        <Route path='/GenAI' element={
          <>
            <SEO
              title={t('seo.genai.title')}
              description={t('seo.genai.desc')}
              ogImage={`${baseUrl}/images/BANNER.webp`}
              ogImageAlt="Joonas Kirsipuu Banner"
            />
            <GenAI />
          </>
        } />
        <Route path='/Games' element={
          <>
            <SEO
              title={t('seo.games.title')}
              description={t('seo.games.desc')}
              ogImage={`${baseUrl}/images/BANNER.webp`}
              ogImageAlt="Joonas Kirsipuu Banner"
            />
            <Games />
          </>
        } />
        <Route path='/FilmsSeriesAnime' element={
          <>
            <SEO
              title={t('seo.films.title')}
              description={t('seo.films.desc')}
              ogImage={`${baseUrl}/images/BANNER.webp`}
              ogImageAlt="Joonas Kirsipuu Banner"
            />
            <FilmsSeriesAnime />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;