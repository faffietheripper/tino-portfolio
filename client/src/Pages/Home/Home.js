import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import FAQs from "../../Components/FAQs/FAQs";
import HomeHero from "../../Components/HomeHero/HomeHero";
import Mission from "../../Components/Mission/Mission";
import Stats from "../../Components/Stats/Stats";
import Skills from "../../Components/Skills/Skills";
import Testimonials from "../../Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutMe />
      <Skills />
      <Mission />
      <Stats />
      <Testimonials />
      <FAQs />
    </>
  );
}
