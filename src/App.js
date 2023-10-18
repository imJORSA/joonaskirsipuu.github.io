import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import TraditionalGallery from "./pages/TraditionalGallery";
import Navbar from "./components/Navbar";

function App() {
  return (
      <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/TraditionalGallery' element={<TraditionalGallery/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </>
  );
}

export default App;