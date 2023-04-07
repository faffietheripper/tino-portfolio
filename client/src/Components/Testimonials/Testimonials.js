import React from "react";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";

export default function Testimonials() {
  return (
    <section class="bg-black text-white px-12">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">05.Some of my happy clients</h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2 ">
          <div class="flex items-start gap-4">
            <SingleTestimonial />
          </div>
          <div class="flex items-start gap-4">
            <SingleTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
}
