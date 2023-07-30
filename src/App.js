import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import TraditionalGallery from "./pages/TraditionalGallery";
import InteriorDesigns from "./pages/InteriorDesigns";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Gallery />} ></Route>
          <Route path='Gallery' element={<Gallery />}></Route>
          <Route path='TraditionalGallery' element={<TraditionalGallery />}></Route>
          <Route path='InteriorDesigns' element={<InteriorDesigns />}></Route>
          <Route path='About' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;