import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Footer from "../../Components/Footer/Footer";
import HomeHero from "../../Components/HomeHero/HomeHero";
import Mission from "../../Components/Mission/Mission";
import Skills from "../../Components/Skills/Skills";
import BacktoTop from "./Components/BacktoTop/BacktoTop";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <Skills />
      <Mission />
      <Footer/>
      <BacktoTop />
    </>
  );
}
