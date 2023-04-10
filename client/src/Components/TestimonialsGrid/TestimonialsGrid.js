import React from "react";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import Image from "../../Images/RuthTest.jpeg";
import Image2 from "../../Images/TimTest.jpg"

export default function TestimonialsGrid() {
  return (
    <div>
      <section class="bg-transparent text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">03.Some of my happy clients 🤗</h2>

            <p class="mt-4 text-gray-300">The highest standards. The happiest customers. Comments like these are why I do what I do.</p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 mx-8">
            <SingleTestimonial
              name="Ruth Nyandoro"
              img={Image}
              message="I love the website Tino made for Zibah Creations. It is precisely what I needed to get my business noticed on an international level. The website setup is nothing short of perfect and to the point.  It covers all angles necessary for an online business operation and is easy to navigate. It is a job well done."
              role="Founder - Zibah Creations"
            />
            <SingleTestimonial
              name="Tim Smith"
              img={Image2}
              role="Course Director - Tech Educators"
              message="I had the pleasure of being Tino's instructor on a coding bootcamp, and I cannot say enough positive things about him. Tino is not only highly motivated and eager to learn (which paid dividends in his coding skills) but also incredibly personable and easy to work with. His passion for coding and eagerness to learn new things is truly inspiring. The amount he's gone on to learn in his own time after the course is staggering, and is a testament to his work ethic. It was a pleasure teaching Tino, and I look forward to seeing him excel in his future endeavors."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
