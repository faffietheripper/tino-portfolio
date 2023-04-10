import React from "react";
import { Link } from "react-router-dom";
import About1 from "../../Images/AboutMe1.jpeg";
import About2 from "../../Images/AboutMe2.jpeg";

export default function AboutMe() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-gray-100 p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-black md:text-3xl">02.About Me 💁‍♂️</h2>

                <p class="text-black/90 sm:mt-4 sm:block">
                  Hey, my name is Tino and I'm a multi-talented human from the UK that designs and builds digital products. I currently work remotely
                  as a freelancer under SkyRockers Ltd and am open to new opportunities. My profuse energy levels allow me to pick up new skills and
                  juggle different projects with ease.
                </p>
                <p class="text-black/90 sm:mt-4 sm:block">
                  I'm an enthusiastic and easily inspired boy that's willing to follow my fascinations wherever they take me. When I'm not in front of
                  a computer screen, I'm probably running around with a rugby ball, working out, or crossing off another item on my bucket list.
                </p>

                <div class="mt-4 md:mt-8">
                  <Link
                    to="/contact"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black-300 transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 h-[20vh]">
              <img alt="About Me Picture" src={About1} class="h-40 w-full object-cover sm:h-56 md:h-full" />
              <img alt="About me picture" src={About2} class="h-40 w-full object-cover sm:h-56 md:h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
