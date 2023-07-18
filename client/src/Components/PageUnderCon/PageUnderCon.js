import React from "react";

export default function PageUnderCon() {
  return (
    <div>
      <section class="overflow-hidden bg-[url(https://d1e00ek4ebabms.cloudfront.net/production/101e88b3-97b3-45bd-88e7-ac1f2341cdfa.jpg)] bg-cover bg-center bg-no-repeat mt-32 md:mt-8">
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Page Under Construction🚧
            </h2>

            <div class="mt-4 sm:mt-8">
              <a
                href="/"
                class="inline-block rounded-full bg-red-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-800 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Return to Home Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
