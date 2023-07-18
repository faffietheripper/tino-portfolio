import React from "react";
import MissionImg from "../../Images/MissionImg.jpeg";

export default function Mission() {
  return (
    <div>
      <section className="text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-5xl">
              Better design, better experience 🌍
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Mission"
                src={MissionImg}
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-200">
                <p>
                  My dedication to continuous learning drives me to stay updated
                  with the latest industry trends and best practices. I actively
                  seek opportunities to expand my skill set, embracing new
                  technologies and frameworks to deliver cutting-edge solutions
                  that meet the evolving needs of businesses in a fast-paced
                  digital landscape.
                </p>

                <p>
                  I take great pride in my portfolio of work, which showcases my
                  diverse range of projects across various industries. Whether
                  it's designing a captivating e-commerce platform, developing a
                  robust web application, or revamping an existing website, I
                  approach each project with enthusiasm and a commitment to
                  excellence. Please feel free to explore my portfolio to get a
                  glimpse of my work, and don't hesitate to reach out if you
                  have any questions or project inquiries. Let's build something
                  amazing together!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
