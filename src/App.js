import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import TraditionalGallery from "./pages/TraditionalGallery";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="max-w-[1280px] mx-auto bg-white min-h-screen">
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/TraditionalGallery' element={<TraditionalGallery/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;