import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Traditional from "./pages/Traditional";
import Worldbuilding from "./pages/Worldbuilding";
import Blog from "./pages/Blog";
import Fractals from "./pages/Fractals";
import Footer from "./components/Footer";
import GenAI from "./pages/GenAI";
import Games from "./pages/Games";
import FilmsSeriesAnime from "./pages/FilmsSeriesAnime";

function App() {
  return (
      <div className="max-w-[1400px] mx-auto bg-white min-h-screen">
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
        <Footer />
      </div>
  );
}

export default App;