import React from "react";
import SingleProject from "../SingleProject/SingleProject";
import PortfolioCover from "../../Images/PortfolioCover.png";
import ZibahCover from "../../Images/ZibahCover.jpeg";
import Mtungwa from "../../Images/Mntungwa.jpeg";
import Saltech from "../../Images/Saltech logo.png";
import Medville from "../../Images/medvillelogo.jpg";
import BA from "../../Images/BA.PNG";

export default function ProjectsGrid() {
  return (
    <div>
      <section class=" text-white mt-28 md:mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-4xl font-bold sm:text-5xl pb-8">Recent Works 💼</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl p-8 shadow-xl transition border hover:shadow-red-500/100">
              <SingleProject
                coverimg={Medville}
                img1={Medville}
                name="Medville Healthcare Online"
                badge={
                  <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                    Completed
                  </span>
                }
                description="Medville is a telemedicine I am currently working on and this is its landing website."
                link="https://medville.vercel.app/"
              />
            </div>
            <div class="block rounded-xl p-8 shadow-xl transition border hover:shadow-red-500/100">
              <SingleProject
                coverimg={Saltech}
                img1={Saltech}
                name="Saltech Timber"
                badge={
                  <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                    Completed
                  </span>
                }
                description="Saltech Timber Co is a timber salvaging business based in Zimbabwe."
                link="https://saltech-timber.vercel.app/"
              />
            </div>
            <div class="block rounded-xl p-8 shadow-xl border transition hover:shadow-red-500/100">
              <SingleProject
                coverimg={PortfolioCover}
                name="Personal Portfolio"
                img1={PortfolioCover}
                description="This is the first iteration of my personal website. After recently completely a coding bootcamp I thought it would be a great way to refresh my brain of some of the techniques and skills I had learnt by making this portfolio. Hopefully with more practice and learning my web development and design skills will improve immensely. "
                link="https://tinompofu.netlify.app"
                badge={
                  <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                    Completed
                  </span>
                }
              />
            </div>
            <div class="block rounded-xl p-8 shadow-xl border transition hover:shadow-red-500/100">
              <SingleProject
                coverimg={ZibahCover}
                name="Zibah Creations"
                img1={ZibahCover}
                badge={
                  <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                    Completed
                  </span>
                }
                description="This is an ecommerce website specifically tailored for  custom products shop. It has a secure administration page where the owner of the business can add products to their catalogue on their own. Zibah Creations is a small retail business based in Harare, Zimbabwe. They sell customised and handcrafted macrame products varying from handbags to belts and pillow cases. I have personally bought some of their products and I would recommend you have a look at their website."
                link="https://zibah-creations.vercel.app/"
              />
            </div>

            <div class="block rounded-xl  p-8 shadow-xl transition border hover:shadow-red-500/100">
              <SingleProject
                coverimg={Mtungwa}
                img1={Mtungwa}
                name="Mntungwa Events"
                badge={
                  <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                    Awaiting Content
                  </span>
                }
                description="This is a template website I made for a business that specialises in events management."
                link="https://mntungwa-events.vercel.app/"
              />
            </div>
            <div class="block rounded-xl  p-8 shadow-xl transition border hover:shadow-red-500/100">
              <SingleProject
                coverimg={BA}
                img1={BA}
                name="Body Active"
                badge={
                  <span class="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700">
                    Under Construction
                  </span>
                }
                description="This is a website for a media and fitness company based in London that I am currently working on."
                link=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
