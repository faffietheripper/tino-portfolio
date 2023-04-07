import React from "react";
import { Link } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";

export default function ProjectsGrid() {
  return (
    <div>
      <section class="bg-black text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">01.Recent Works</h2>

            <p class="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
              consequuntur saepe laborum.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject
                coverimg="https://lh3.googleusercontent.com/gAn8MMAo8xgKIjyB8QBjv07V015XM7p5CTXwXfQSpfkZcqrUUmAzqzw1SOTPw-5T9U-225P3_FBlmhpwh9q6H-WErEVOSRM3zIHFQ9EbVH-28RmTaO_mkJoQiaxNzIxzJUfNbBE01xI3kTmywsC6BbImL_piU-gsreUKS3qQ00C_smxdJP0wG7PR_VLreAddQ9jAeM0LZ43Rc04TMPQ_32w9z6amGtwXjlb39swH2t77JEgmpxDsxnqCTWqFs2aXQyb41aeC7I0y8GSapCUE8pFkRrcoEceNL7SdxrngX8B6ychp0bb7cKsShehB0WsmvI7nza3611okK5Xx4EXOb3EbYekcZ8ZWugamB0loAiaQkg83Ws5yh8fHo5SRlaLN1sgsoUsWvVLJ_S32evynUmvo-4TFsuoHCIzmyROMV8nbgZBQKTNbmERcX5sTE6SGXb-8ts3k7TP61lwe2neWOWyS5HM7d5G5CSTnvi23o7fUjK4BlhbNa9_r6vEe5lH68fuoya0C8WtCBB-Rn0FJjVztYjFfza4fm-5WlaF-4qDkwQQgMx10Dmy55TlU3d0tKTXlQr2Q-h6aCQw9SPYZ6mPylQnDSu-X9_thL_Z6HqQK46P3xayN5IwXijzh-FbrbcZ6Aw7lZZsjYJlvXR9066rkzI2rOrnANWb7P20ZJWeiVJdgCZvw_SG-fOT54KRKB68WfUPF6DjZZG00YMBix-PMY-0jHyDN3yroGyPesE-ZPeGYvxYkUKegQtou--hNAE75_HiXq4uJQywOsge38WCrv_aVn_jsm8FGY4IUiXfZcpqUnhDntJRJU1D9KvSA3peyAXpdw66xdaAvd5_8cI7Fh83cg5u-cdTJ2ebik91JrsciRYJ1gCyB-T96okIXGn-7TWWuQMnVNrSDzX9Acny1VPgfdbb9rpJn_bahk0-25Dh4=w1057-h1057-s-no?authuser=0"
                name="Zibah Creations"
              />
            </div>
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject />
            </div>
            <div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <SingleProject />
            </div>
          </div>

          <div class="mt-12 text-center">
            <Link
              to="/contact"
              class="inline-block rounded bg-red-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-400 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Hire Me 😁
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
