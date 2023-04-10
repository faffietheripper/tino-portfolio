import React from "react";
import Mission from "../../Images/Mission.jpeg";

export default function Mission() {
  return (
    <div>
      <section className="text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-5xl">04.Better design, better experience 🌍</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img alt="Mission" src={Mission} class="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  Having recently graduated from a full stack web development bootcamp my coding skills arent as advanced as the average experienced
                  software developer however as mentioned above, I plan on continuing to learn new programming languages so that I can be able to
                  create fluent and fashionable user experiences.
                </p>

                <p>
                  As far as React applications are concerned, I am equipped with just the right tools, and can absolutely function independently with
                  them to deliver fast and resilient solutions optimized for scale. As I grow as a developer, I hope to write clean, readable code
                  that can be used by others and leveraged to create beautiful softwares.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
