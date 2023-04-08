import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hz4se9h", "template_l2jutkj", form.current, "qNsMWr4j71vACFSXb").then(
      (result) => {
        console.log(result.text);
        alert("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section class="bg-black-300 text-white h-[50vh]">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <h2 class="text-2xl sm:text-3xl"> Leave me a message 📮</h2>

            <p class="block text-2xl font-medium text-red-900 hover:opacity-75 sm:text-3xl py-10"> +44 7927 278404</p>
            <h1>
              {" "}
              Got a question or proposal, or just want to say hello? Go ahead. I'm seeking out opportunities to collaborate with companies, agencies
              and individuals. I want to bring my development skills to the table where we can work together to solve real business-problems in a way
              that optimizes all of our respective experience and knowledge.
            </h1>
          </div>

          <div class="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form ref={form} onSubmit={sendEmail} class="space-y-4">
              <div>
                <label class="sr-only">Name</label>
                <input class="w-full rounded-lg border border-gray-200 p-3 text-sm" type="text" placeholder="Full Name" name="user_name" />
              </div>

              <div>
                <label class="sr-only">Email</label>
                <input class="w-full rounded-lg border border-gray-200 p-3 text-sm" type="email" placeholder="Email address" name="user_email" />
              </div>

              <div>
                <label class="sr-only">Message</label>
                <textarea class="w-full rounded-lg border border-gray-200 p-3 text-sm" name="message" placeholder="Message" />
              </div>
              <div>
                <button type="submit" value="Send" class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                  {" "}
                  Send Enquiry{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
