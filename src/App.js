import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Traditional = lazy(() => import("./pages/Traditional"));
const Worldbuilding = lazy(() => import("./pages/Worldbuilding"));
const Blog = lazy(() => import("./pages/Blog"));
const Fractals = lazy(() => import("./pages/Fractals"));
const GenAI = lazy(() => import("./pages/GenAI"));
const Games = lazy(() => import("./pages/Games"));
const FilmsSeriesAnime = lazy(() => import("./pages/FilmsSeriesAnime"));

function App() {
  return (
      <div 
        className="max-w-[1400px] mx-auto bg-white min-h-screen"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        <ScrollToTop />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Gallery/>}/>
            <Route path='/Traditional' element={<Traditional/>}/>
            <Route path='/Worldbuilding' element={<Worldbuilding/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Fractals' element={<Fractals/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/GenAI' element={<GenAI/>}/>
            <Route path='/Games' element={<Games/>}/>
            <Route path='/FilmsSeriesAnime' element={<FilmsSeriesAnime/>}/>
          </Routes>
        </Suspense>
        <Footer />
      </div>
  );
}

export default App;