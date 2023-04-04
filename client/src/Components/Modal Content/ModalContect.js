import React from "react";
import { Link } from "react-router-dom";

export default function ModalContect() {
  return (
    <div>
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="aspect-square w-full rounded-xl object-cover"
              />

              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div class="sticky top-0">
              <h2 className="text-3xl"> Zibah Creations </h2>

              <div class="mt-4">
                <div class="prose max-w-none flex flex-col justify-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur,
                    architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
                  </p>
                  <Link
                    to="/contact"
                    class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Visit this website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
