import React from "react";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";

export default function TestimonialsGrid() {
  return (
    <div>
      <section class="text-white px-10">
        <div class="max-w-screen-xl px-4  sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center ">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">03.Some of my happy clients</h2>

              <p class="mt-4 text-gray-600">The highest standards. The happiest customers. Comments like these are why I do what I do.</p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 w-[80%] pl-8 sm:w-full">
              <SingleTestimonial />
              <SingleTestimonial />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
