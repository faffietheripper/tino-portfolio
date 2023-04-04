import React from "react";

export default function Stats() {
  return (
    <div>
      <section class="text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-indigo-900 sm:text-4xl">Trusted by a few companies.</h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero
              harum sequi.
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col rounded-lg border border-black px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

                <dd class="text-4xl font-extrabold text-blue-200 md:text-5xl">$4.8m</dd>
              </div>

              <div class="flex flex-col rounded-lg border border-black px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                <dd class="text-4xl font-extrabold text-blue-200 md:text-5xl">24</dd>
              </div>

              <div class="flex flex-col rounded-lg border border-black px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                <dd class="text-4xl font-extrabold text-blue-200 md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
