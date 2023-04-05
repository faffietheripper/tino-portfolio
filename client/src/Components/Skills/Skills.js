import React from "react";

export default function Skills() {
  return (
    <div className="text-white">
      <section class="mx-8">
        <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">My Skillset</h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                Deleniti quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.
              </p>

              <a
                href=" https://drive.google.com/file/d/12FBV5APG9Q0KJu_gDbvOFkFkgmaOUrDS/view?usp=share_link"
                download
                class="mt-8 inline-block rounded bg-blue-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-400 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Download Resume
              </a>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
              <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" />
              <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" />
              <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" />
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" />
              <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
