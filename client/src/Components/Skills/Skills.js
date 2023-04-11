import React from "react";

export default function Skills() {
  return (
    <div className="text-white">
      <section class="mx-8">
        <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">Experience 👨‍💻</h2>

              <p class="mt-4 text-gray-200">
                With a mission to exploit and present the possibilities of web development, I plan on learning PHP and Laravel in the near future but
                the following are a few technologies I have been working with recently. You can read more about my experience, skills, education and
                much more in the resume below👇
              </p>

              <a
                href="https://resume.io/r/cxMvqHpCd"
                target="_blank"
                download
                class="mt-8 inline-block rounded bg-gray-100 px-12 py-3 text-sm font-medium text-black transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                View Resume
              </a>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
              <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
              <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="" />
              <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="" />
              <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
