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
    <section class="bg-black-300 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <h2> Leave me a message</h2>
            <h1> Want to work together and create amazing products with me?</h1>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
