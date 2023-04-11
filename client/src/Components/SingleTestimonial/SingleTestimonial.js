import React from "react";

export default function SingleTestimonial({ img, name, role, message }) {
  return (
    <div>
      <div>
        <blockquote class="p-8 text-black rounded w-50 h-[80]">
          <div class="items-center gap-4">
            <img alt="Profile Picture" src={img} class="h-16 w-16 rounded-full object-cover" />

            <div class="text-sm">
              <p class="font-medium text-red-800 mt-3">{name}</p>
              <p class="mt-1 text-red-800">{role}</p>
            </div>
          </div>

          <p class="relative mt-4 text-gray-200">
            <span class="text-xl">&ldquo;</span>

            {message}

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>
    </div>
  );
}
