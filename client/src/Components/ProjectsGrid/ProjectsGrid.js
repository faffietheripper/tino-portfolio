import React from "react";
import SingleProject from "../SingleProject/SingleProject";
import PortfolioCover from "../../Images/PortfolioCover.png";
import ZibahCover from "../../Images/ZibahCover.jpeg";

export default function ProjectsGrid() {
  return (
    <div>
      <section class="bg-gray-100 text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-4xl font-bold sm:text-5xl pb-8">01.Recent Works 💼</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg={PortfolioCover}
                name="Personal Portfolio"
                img1="https://lh3.googleusercontent.com/1OKdEFyHdWt8S8If892cG7ZrakDHclTmMn3KxnzXDSBROfQXQth84xiwb751Bg8gAZQVLABfiGt9103gSmEJmncU6Sxfb9d98UpnHk8qroWboEXr53hLC4BYGTN-fQ4-MC3Z38YYUrCO1_T23Y7C6ZVbyXPuKkBSevfwJQ6pYZ-pppeTWcW8rRpHRndibfLr5eG8D9-sS2BH_odoyaYEk5rM45IyfwwpClx4_5R6PFO7mcrcJu8GBXkRPW9Ke8YjYqdpc4x8WLD46NkfvNkctvwwllomCiiMg_0dOoKUqqEj71qQNjyialRCR8gIShvxAEj5tNdGWJqCo4xZlEN7U1hMnbCbT6AMpF0ChoccczxDWY0X-xLOXPulJ5vuizEnB3cQUr_KbbflNql8PTo0dfqty6Y_gYwn5qQ6yMDiJoChbTqnEQKUnJNvYH4qlNU0vtDObZ0mpq-KSkA_We2J5JINjZyOPK_-q40H9OMVf8nRPKCzoM5J5jWYANDhOPIa5zDE1MLJ14VCdvCsbsh7Y3VFqyWjFdSktFL4ChDHzW2f1vsnjD8twwJB_9WQPG0Rt7P_PX-kPnWfi8MugrPz-hNEzdbNgA16zmXbRngjSnRofRd0USUCWxLNgng3Z4D73NfjAZ1CWsCAaAoXjeGvwHgEi8fledzuYXMpqVPsO8BMCONOwy0jpge_RkbpulhEcMPm5wRlTZfAMP3g9NkA9Ld5c6-f1yJKMbuVGDgHCbX4ZtjtlpsQPs3uwsl4p7gASs6v6EItN0z0sTLeTVPFajjVxNj6BybAIyntRxegNgnw_4hEjV_QrBzC_rwGqf28pZwaDQKC1OR4s8oaFhFpIux66tiKBbxDuiYYugQpriRxjbX1SnX6Buft6LsAw5uPpdLTyG4_OdqCudXpLuzUa5-wZB1je1-GjsV6rN3b714BYrmM=w2880-h1576-s-no?authuser=0"
                img2="https://lh3.googleusercontent.com/KCxrV6yyjcGhGV4-vCkomtYzmF66Chy-lET8tCj-Ecj8l_iiQP0laestQiBqGKMNDBOLpaOuY4yGEdzic8cP0VrKzglKwUwd485qv-s-Z7idqQWfYdx8xv8euWWYlJSKUGpLT3EsJXb-aJUIRRqpNAC2YUkLSIloSxV_XnqlCeIeCduWpn9g_WXdJ6vz5PiN7eDaMnDdWy_MFlwpOumJasseDS2C0BGZ-8wjn6jq4iynuepD-MuopS0yhLSUSgz8bb1lYrPTtG3vGT0fNJ-WtIxsSxO1hZLVDowMUu2BpRYV8I0bWdK1XFuRpcqYldaUQxdqNUf3rMm0GIvgsHyc8gbeH0E4AlVgsmsIo3cUzkkYYwy4nrYv4hIghxFA85cxsaAHPj4FLlFhhfMBtgiWLIutnsW5my4q9TxIKjLaZl_IEXv9YEC6D1_F1rwQl5F7nxz6uwT8CioQTAY-yr04OhT8YNrCBaaeodWALst7DCh0dF9Q9WfIUsKbTGS6s4je1lJXN7dRLl-CATUBIVsorcB0a0S0IEcpUlTTs3OeJaRY8OWJw_Rn-IKMAvTKoh9AwTk9lGU8smzRkqEYaNp2DMY0Zdo20YXinTv6xTDncDSfON242fo3-O9yKObXMuLjfli6tDP8TCNhELXW3WyZud-UsPeXhs-xvBsr1qDtgSfUyN3bmzjnPFc-8WG_Z5U0PZe9xtF_MWPyoXC_BtuRkMgn7zEatgi3SymW7zgAYTpao4hg7KFkZ1vx-FBFiDtTQj8S7_T-d-W-xVGbZFCg5Ccp7Yk8Ku6H2BXbqcTgUeefiaxj-S4lKaqXYAttJFzlPvwlEkcEjSgJkut1wdnDazxcvLbW8tEk7BRRg4PCIuZine61XIUzMEVeNAHG5wBTN3jw2Am0sumxQlfD9WucRN3jaf80Pe0px7qdr0fPT0EwiO80=w2880-h1576-s-no?authuser=0"
                img3="https://lh3.googleusercontent.com/l0PmzMwDI8wYBWf3KrpUVjPGGA653X0WunsOumYXiOeq-ZfeEdokxJhVBaWQktRi7BLj4x1wBQqGGySmLRhD7a2AGz4CodBq05m85J1dS6Reobu5bqHXVPjdZsFMPuHi9VT6MLFStxnmXGjILNBeXOmZvv7yGvmvyH1eu_EkOMiT0__Fuyzd3gqD8eV5fZf3jJEk-UO5yqYpzITjgO6kePKAtvTXnRkegst_HTAiyEMacoCR77U8BpBOvrLqiXW3lRD1s7Rj2ei79n2vAHEyFcXerOO86YUCftkkt3w-JPcvHsXvRcNjtrEBlqTVa2-GA-X-70b1TF-J0spg5TIcIzQ7MZ2smB_Slv3jnrBs6b82rAFmJdUyW3jCn5AxaerfP-CTtok2fKlH8vpFXYnIrN5aUfb61Ejtf2SofU5ya7ruXgygx9IrhE5fF-hrNWCI5Uoa2gn8QaiTD1oeK-MaVXNRt-_1CX_FzIlPGwQKPecbbU7c4qw_DArvVNGuRdiWDhlbpOBctAzxd8w7QsrdxTKPVgBB7H3VJ0qQqvy5BDfQMsv7IKd2bTO6x5FaIgsQ23G3tniHFKcfu4oXSAiOlO9SSWSSSTofQB5_Cug0fRrRpeIzhsa9AtA9i2eENU3TGME_AQx4uxtj4BK7mqwHWDvtUs_yHouSSu5skWWxaYtIwFJUj4-u0Ll3iANDUiUWmHm57W0bSz_qOGOXrd92O_hqSqe-pyDGuwFiZUe8IS6I36Zn0OqTVYgtjP9IoEe_4B9MycMZ8hiAwDJNNoEUCBBzJBl017Cg41ttUOaZc0QGt-gfcfgTZu4RkGN7SVGUxMA2kapUMBtkQ7ye_yLzOS2YvNt-Y1-mWE8uK36oZnZa3F6zQ5e6fKVt77oFY853GQb4Ro2-8Omy5uEi0BN94_OLvaFdbVKeCzuQD7IgXIQkeq4t=w2880-h1576-s-no?authuser=0"
                description="This is the first iteration of my personal website. After recently completely a coding bootcamp I thought it would be a great way to refresh my brain of some of the techniques and skills I had learnt by making this portfolio. Hopefully with more practice and learning my web development and design skills will improve immensely. "
                link="https://tinompofu.netlify.app"
                badge={<span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">Completed</span>}
              />
            </div>
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg={ZibahCover}
                name="Zibah Creations"
                badge={<span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">Building</span>}
                description="Zibah Creations is a small retail business based in Zimbabwe. They sell customised and handcrafted macrame products varying from handbags to belts and pillow cases. I have personally bought some of their products and I would recommend you have a look at their website."
                link=""
              />
            </div>

            <div class="block rounded-xl border  p-8 shadow-xl transition  hover:shadow-red-500/10">
              <SingleProject
                coverimg="https://www.jayleegroup.com/images/logo.png"
                name="Jaylee Group"
                badge={<span class="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">Designing</span>}
                description="Jaylee Group is a South African broad based business consultancy firm that has three main divisions focused on: Training & Development, Financial Services Consultancy and Project Management Services. The organisation has more than 20 years projects experience combined and has successfully executed more than 500 projects across all industries."
                link=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
