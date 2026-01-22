import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Traditional from "./pages/Traditional";
import Worldbuilding from "./pages/Worldbuilding";
import Blog from "./pages/Blog";
import Fractals from "./pages/Fractals";
import Footer from "./components/Footer";
import GenAI from "./pages/GenAI";

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
        </Routes>
        <Footer />
      </div>
  );
}

export default App;