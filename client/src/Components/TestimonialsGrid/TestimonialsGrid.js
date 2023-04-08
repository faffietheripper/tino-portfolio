import React from "react";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";

export default function TestimonialsGrid() {
  return (
    <div>
      <section class="text-white px-10">
        <div class="max-w-screen-xl px-4  sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center ">
            <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">03.Some of my happy clients 🤗</h2>

              <p class="mt-4 text-gray-600">The highest standards. The happiest customers. Comments like these are why I do what I do.</p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <SingleTestimonial
                  name="Ruth Nyandoro"
                  img="https://lh3.googleusercontent.com/ls28ctMluVBrA5yFLjXXfdJ9HVS88llAipoHnbRKpGXOLG9os14Tpwwjjriooj9FB_YiGPIFhh3s5Oj1_vjDyrmo7gnWaoYYEO3SsHXoiYipv7khdXs8ukQZJWdgaLQFCf-bMQoQa9dLA6Kzz6oZvfT0k1Vej1y-0ZMdv4Qzu6m8qVuSjyMyb6u_2SbIWECE1TqDjQ-VgyKybB-wgJfnfgLg5X2uzPO7AKTo-a3BG14o4a51DhtGC6LoSweXyKU1kQ8o-bDhRlhF0vUDOEG70wBMMDQBozJny5DeI-i5EnUi-T0JOpU3zqOyuYe4HqupKDeQ0en6vWi4s_-qPaC8Aif7P77tBehYvOiLfaPQwc0U2NDQOQAiF1KXvrQjsYgahLSgPZdvwlU4QsDQbrL_Q4Kxj1Dk5HgkRJ0TFY6XfPui2P78-DmyGe-BQjb3ddYJ3GY5bFi-JGOye94Srsn_lUIp1J3vLeH257QoWbvjnmZez6tBzkb_epcQzQMWCP4a_ye39CNWWhW3KNADhuwl28GhP8pEql0yroalPv63DN5zJcBR7PYEeE3NX_Edz4BXbfTx6tCf4ZWSNfEuxlSgmD9MZlxghOfq2jlzxGYAqT-kEQ0RGiHz_YumhabhD2UuwaGLA9gzsmLJQRTzo2u_SlxI9nSWNIAmgywz33neOGS0yvukR-4HtwdhKYUQw0K0h_JZ9eb5iXRYpPh0zcB5JELHeeeX0i6C848uPkDQwg68nTraqjNO9gEpyzfM5o1nwXMWaz0Eoxa-nitOhE3I_-EK4hGS78OSSlaeJGssTwmN7XaWn7Kai2aNAUcQpglGhKyk11GhV_D2g8EX2sdbQeZPPMFP2b2Yihvfowi-epIcCbML30KOAXTVLTrEyA9bu6FV5DOIgLRb8BzSvO1EMUZeDGgFqgjy8MFwmlYODoIEb0JX=w407-h544-s-no?authuser=0"
                  message="Tino is the best ahaha!!!"
                  role="Founder - Zibah Creations"
                />
              </div>
              <div>
                <SingleTestimonial name="Tim Smith" role="Course Director - Tech Educators" message="You are amazing"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
