import "./App.css";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import SkyRockers from "./Pages/Medville/Medville";
import Hamburger from "./Components/Hamburger/Hamburger";

function App() {
  return (
    <BrowserRouter>
      <Hamburger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/medville" element={<SkyRockers />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
