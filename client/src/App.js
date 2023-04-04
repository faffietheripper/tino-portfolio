import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import SkyRockers from "./Pages/Medville/Medville";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/medville" element={<SkyRockers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
