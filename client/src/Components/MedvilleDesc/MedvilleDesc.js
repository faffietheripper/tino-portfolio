import React from "react";
import { Link } from "react-router-dom";

export default function MedvilleDesc() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src=" https://lh3.googleusercontent.com/YP9RBQJgtNRa5_khZ4eIGTtt_WcOZb6z700sXHNGGHYfq6MmD0t9FMQxFLxrY085YQhrKzDlEJ24A3lig1MYIzdo8xADnngE4KoFh0Hmpy2irjCS7JYGBbWqL8a3N3HNpst60DPrCaojL3_JWqZ6HfvzBV81n1BWRizYLg2aEtENpW4swrCyuhq2lFo6JNqsZyI7jC15CWNk6rQRYkA8AktyPHZ4DhA5oRK3j27CaegW2Q_KBonGcB606Hceu6cm6mHKrMaplqQutz2EeUaATjvBt1oWvdG9CbTBY6E6TYYlNDtgfQ1U8IxtEWnLV_2sYvrP8f4yUbkJ1VO9bMl6hUp8IdcExO1KHWpQhL8G2DwNff_rKMG_1wJVzZ_8tlfiBHIX28poFq9QalboxzeJTdzB0cVSI-b8bU-KbX_vJ6Eq-RsjdYDsya629bLbPz7mATC9vd12HkbaqFHJA4c8bkI3cnMTqMQAeKlVYC3GsqYm3RaTSKA-0wKTxeydNOx0K6Pe7MjePJJlFXicQZt2eakmoQv50LGTCnxx6OTOU51yaeL-Oorw5YPwwPhb61gQ0NJMnqguJuOpEqPqZCEw_XSc2VYjO3efq9RLBFcg2OUsZNxj95ZIlMT8jqQioNMT2Ftji2dlugP5vpOBIeg2l5n8ZpckwSgbKiB3aDNIPFhHEFCLBfaayLHgQ7rBHhNZTn0DVkVLWT669R3TFvwa3O3iYyci9lXSwt9VTNkjZW2S_Frp9MHomaWDIFL8CmrF4RXUw0yhW1Zj3GW_IWLP4CY-sJ4DeIc-eXUuGE7L7mY1nBnMwTmn26QRjlwk5KjC6V2vDCw0f1NKiUrRtxhKssXdVyuC3c7MQ9uCsH-QM5sIeClpu2UEJ5VLHQWD1VBl72BpGhUhYAsFfNFPXi3BteHnbxrR8FMWJK4xAX3J-ADJP5X0=w1080-h1064-s-no?authuser=0"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">Medville Healthcare Online</h2>

                <p class="mt-4 text-gray-600">
                  Medville is an idea me and my brother have had for a wile now but when we first had the idea we didn’t have the skillset or
                  financial resources to bring it to fruition. Now that I completed my MERN Stack course, it’s an idea I am really enthusiastic about
                  and want to bring to life. Basically I had already started working on the code in the past (well paid someone to do it ) but I have
                  a bunch of php files that I really don’t know how to work with because I have only done the MERN Stack. I am willing and looking to
                  take on anyone who’s passionate about php backend development and healthcare. Below is a really basic description of the idea
                  however feel free to use the button beneath that if you wanna get in touch with me regarding this topic.
                </p>
                <p class="mt-4 text-gray-600">
                  <strong>Brief Description :</strong> Medville is a software company that grants patients (members) access to licensed healthcare
                  providers through phone and video calls. The platform connects medical practitioners to patients despite the distance between them.
                  Members get access to quick answers for their health related questions wherever they are. Members also have their medical test
                  results explained by a professional instead of looking it up online and self-diagnosing. Vision : Revitalization of health service
                  standards in Africa
                </p>
                <Link
                  to="/contact"
                  class="mt-8 inline-block rounded border border-blue-400 bg-blue-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring active:text-blue-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
