import React from "react";
import SingleProject from "../SingleProject/SingleProject";
import PortfolioCover from "../../Images/PortfolioCover.png";
import ZibahCover from "../../Images/ZibahCover.jpeg";
import Port1 from "../../Images/PortfolioModal/Port1.png";
import Port2 from "../../Images/PortfolioModal/Port2.png";
import Port3 from "../../Images/PortfolioModal/Port3.png";
import Zibah1 from "../../Images/ZibahModal/Zibah1.png";
import Zibah2 from "../../Images/ZibahModal/Zibah2.png";
import Zibah3 from "../../Images/ZibahModal/Zibah3.png";
import Mtungwa from "../../Images/Mntungwa.jpeg";
import Saltech  from "../../Images/Saltech"

export default function ProjectsGrid() {
  return (
    <div>
      <section class="bg-gray-100 text-black mt-28 md:mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-4xl font-bold sm:text-5xl pb-8">Recent Works 💼</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg={PortfolioCover}
                name="Personal Portfolio"
                img1={Port1}
                img2={Port2}
                img3={Port3}
                description="This is the first iteration of my personal website. After recently completely a coding bootcamp I thought it would be a great way to refresh my brain of some of the techniques and skills I had learnt by making this portfolio. Hopefully with more practice and learning my web development and design skills will improve immensely. "
                link="https://tinompofu.netlify.app"
                badge={<span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">Completed</span>}
              />
            </div>
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg={ZibahCover}
                name="Zibah Creations"
                img1={Zibah1}
                img2={Zibah2}
                img3={Zibah3}
                badge={<span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">Completed</span>}
                description="This is an ecommerce website specifically tailored for  custom products shop. It has a secure administration page where the owner of the business can add products to their catalogue on their own. Zibah Creations is a small retail business based in Harare, Zimbabwe. They sell customised and handcrafted macrame products varying from handbags to belts and pillow cases. I have personally bought some of their products and I would recommend you have a look at their website."
                link="https://zibahcreations.netlify.app"
              />
            </div>

            <div class="block rounded-xl border  p-8 shadow-xl transition  hover:shadow-red-500/10">
              <SingleProject
                coverimg={Mtungwa}
                name="Events Management Business Template"
                badge={<span class="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">Designing</span>}
                description="This is a template website I made for a business that specialises in events management."
                link="https://mntungwaevents.netlify.app/"
              />
            </div>
            <div class="block rounded-xl border  p-8 shadow-xl transition  hover:shadow-red-500/10">
              <SingleProject
                coverimg={Saltech}
                name="Saltech Timber"
                badge={<span class="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">Designing</span>}
                description="Saltech Timber Co is a timber salvaging business based in Zimbabwe."
                link=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
