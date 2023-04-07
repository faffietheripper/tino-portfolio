import React from "react";

export default function SingleTestimonial() {
  return (
    <div>
      <div>
          <blockquote class="bg-gray-100 p-8 text-black">
            <div class="flex items-center gap-4">
              <img
                alt="Dog"
                src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                class="h-16 w-16 rounded-full object-cover"
              />

              <div class="text-sm">
                <p class="font-medium">Bark Dagleish</p>
                <p class="mt-1">Head of Barketing</p>
              </div>
            </div>

            <p class="relative mt-4 text-gray-500">
              <span class="text-xl">&ldquo;</span>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              assumenda officiis sit amet itaque eveniet accusantium corporis
              tempora, soluta perspiciatis rerum, ratione animi nemo inventore
              repellat, commodi in esse quisquam.

              <span class="text-xl">&rdquo;</span>
            </p>
          </blockquote>
        </div>
    </div>
  );
}
