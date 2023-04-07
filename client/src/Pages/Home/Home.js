import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import HomeHero from "../../Components/HomeHero/HomeHero";
import Mission from "../../Components/Mission/Mission";
import Skills from "../../Components/Skills/Skills";
import Testimonials from "../../Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <Skills />
      <Mission />
      <Testimonials />
    </>
  );
}
