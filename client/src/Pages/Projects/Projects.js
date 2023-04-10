import React from "react";
import ProjectsGrid from "../../Components/ProjectsGrid/ProjectsGrid";
import WorkApproach from "../../Components/WorkApproach/WorkApproach";
import Footer from "../../Components/Footer/Footer";
import TestimonialsGrid from "../../Components/TestimonialsGrid/TestimonialsGrid";
import BacktoTop from "../../Components/BacktoTop/BacktoTop";

export default function Projects() {
  return (
    <div>
      <ProjectsGrid />
      <WorkApproach />
      <TestimonialsGrid />
      <Footer />
      <BacktoTop />
    </div>
  );
}
