import React from "react";
import { Link } from "react-router-dom";

export default function PageUnderCon() {
  return (
    <div>
      <section class="overflow-hidden bg-[url(https://d1e00ek4ebabms.cloudfront.net/production/101e88b3-97b3-45bd-88e7-ac1f2341cdfa.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Page Under Construction🚧</h2>

            <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum
              beatae excepturi dolores.
            </p>

            <div class="mt-4 sm:mt-8">
              <Link
                to="/"
                class="inline-block rounded-full bg-blue-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Return to Home Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
