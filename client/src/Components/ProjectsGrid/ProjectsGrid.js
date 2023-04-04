import React from "react";
import { Link } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";

export default function ProjectsGrid() {
  return (
    <div>
      <section class="bg-black text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Recent Works</h2>

            <p class="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
              consequuntur saepe laborum.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject />
            </div>
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject />
            </div>
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject />
            </div>
          </div>

          <div class="mt-12 text-center">
            <Link
              to="/contact"
              class="inline-block rounded bg-red-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-400 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Hire Me 😁
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
