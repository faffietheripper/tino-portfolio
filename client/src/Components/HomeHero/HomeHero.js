import React from "react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div>
      <section class="relative bg-[url('Images/tino.jpg')] bg-cover bg-right bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              hey there 👋 I am
              <strong class="block font-extrabold text-blue-700">tino mpofu.</strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">Professional Full Stack Web Developer </p>
            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">Ready to turn your ideas into reality</p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/contact"
                class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Contact Me
              </Link>

              <Link
                to="/projects"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              >
                My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
