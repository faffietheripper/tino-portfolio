import React from "react";
import ProjectsGrid from "../../Components/ProjectsGrid/ProjectsGrid";
import WorkApproach from "../../Components/WorkApproach/WorkApproach";
import Footer from "../../Components/Footer/Footer";
import TestimonialsGrid from "../../Components/TestimonialsGrid/TestimonialsGrid";

export default function Projects() {
  return (
    <div>
      <ProjectsGrid />
      <WorkApproach />
      <TestimonialsGrid />
      <Footer />
    </div>
  );
}
