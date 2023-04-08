import React from "react";
import SingleProject from "../SingleProject/SingleProject";

export default function ProjectsGrid() {
  return (
    <div>
      <section class="bg-url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Grey_icon.svg/600px-Grey_icon.svg.png) bg-cover text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-4xl font-bold sm:text-5xl pb-8">01.Recent Works 💼</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg="https://lh3.googleusercontent.com/gAn8MMAo8xgKIjyB8QBjv07V015XM7p5CTXwXfQSpfkZcqrUUmAzqzw1SOTPw-5T9U-225P3_FBlmhpwh9q6H-WErEVOSRM3zIHFQ9EbVH-28RmTaO_mkJoQiaxNzIxzJUfNbBE01xI3kTmywsC6BbImL_piU-gsreUKS3qQ00C_smxdJP0wG7PR_VLreAddQ9jAeM0LZ43Rc04TMPQ_32w9z6amGtwXjlb39swH2t77JEgmpxDsxnqCTWqFs2aXQyb41aeC7I0y8GSapCUE8pFkRrcoEceNL7SdxrngX8B6ychp0bb7cKsShehB0WsmvI7nza3611okK5Xx4EXOb3EbYekcZ8ZWugamB0loAiaQkg83Ws5yh8fHo5SRlaLN1sgsoUsWvVLJ_S32evynUmvo-4TFsuoHCIzmyROMV8nbgZBQKTNbmERcX5sTE6SGXb-8ts3k7TP61lwe2neWOWyS5HM7d5G5CSTnvi23o7fUjK4BlhbNa9_r6vEe5lH68fuoya0C8WtCBB-Rn0FJjVztYjFfza4fm-5WlaF-4qDkwQQgMx10Dmy55TlU3d0tKTXlQr2Q-h6aCQw9SPYZ6mPylQnDSu-X9_thL_Z6HqQK46P3xayN5IwXijzh-FbrbcZ6Aw7lZZsjYJlvXR9066rkzI2rOrnANWb7P20ZJWeiVJdgCZvw_SG-fOT54KRKB68WfUPF6DjZZG00YMBix-PMY-0jHyDN3yroGyPesE-ZPeGYvxYkUKegQtou--hNAE75_HiXq4uJQywOsge38WCrv_aVn_jsm8FGY4IUiXfZcpqUnhDntJRJU1D9KvSA3peyAXpdw66xdaAvd5_8cI7Fh83cg5u-cdTJ2ebik91JrsciRYJ1gCyB-T96okIXGn-7TWWuQMnVNrSDzX9Acny1VPgfdbb9rpJn_bahk0-25Dh4=w1057-h1057-s-no?authuser=0"
                name="Zibah Creations"
                badge={<span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">Completed</span>}
                description="we love bags"
                link="https://zibahcreations.netlify.app/"
              />
            </div>
            <div class="block rounded-xl border p-8 shadow-xl transition hover:shadow-red-500/10">
              <SingleProject
                coverimg="https://lh3.googleusercontent.com/kvMqWt5GTpPhMZwcc95cpfWLnY6OXufWHZA0dVdHRtmYl8BWkuwAKK_PYsDk8FwTr0L-vvVD7qoAFcrE5LvZG0IrzWqmWZvhX4iOg376MYeidu_Yp-wHGtvkEgQSTIiGoortpVbaM5c9KVUHPOqAgHsvmSnDlElYeWxfEar35UdnwcMV1ND-v2nXyuQ_SkqaA92TX2ZKeq9NAV-UdVT-vgpZXsFpFp_9W9ptfLfcqhX-OmQVtfpKAt8Ken1WlkK_1DGCqkkdyv5GrV9Yc0xkUAF3SDQnR3f7bw-Qv-CCgGDMNgHC976CqCIxqPokrv9Ua6MA3NcByXG1Hnc70PN88-P9STaSqn8tuusQGlLW5lh9I5QDD61q5xTIxAP-sQ03POuuC-e1AzNun9_2D7ffJZmHT9zhJKSJ5V3KFkFMHLCH9RPFoc2SeF8ils6OJnFX31DRDmFUGTWv1-iRz0TvdcatrLARSEWgeSQgmcPFWEq7I761Gf98S7MB3GSdvJJXup3kKkQ50Xy0C_IhU2TLL92RD9gr4haYlkukKMIG1sEovjIdb20j0UU2-qMMQf0uEPTbik7Y1yggi9vVIoq9jls7Nnsh5-X7C8QmXEWBdeA-QyIid2ywt5ttjy24Uk62A_wrScRU_qc2DD6VBnFrs5WG_WqgMYbWC1ZIbcvjeQECLNZwNGMnar9JR0yBTBN9Ap0Y8T2Uu8nkp5GaGFyTp_58BxHwQh6mRlnIFJ6gwq6F-kceyxQCydRs_CDjZrW_B1HjgVtrzakfR_m3chvk61-9vjGh9YFlRie998wlDWLiWbxXyc7nAaKsr55Zn13Uydgx1t6fVNojMLTCK_Ui7M0uZnJ2_VHvk4I5CEEpz30fk4WhEHmYLYYP_B7RtLTD1nCS6PxetoB3upfBrgyBVoANUkON40DZw5Nk8e1U-dEp_enF=w2880-h1576-s-no?authuser=0"
                name="Personal Portfolio"
                description="this is my portfolio "
                link="https://tinompofu.netlify.app/projects"
                badge={<span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">Completed</span>}
              />
            </div>
            <div class="block rounded-xl border  p-8 shadow-xl transition  hover:shadow-red-500/10">
              <SingleProject
                coverimg="https://www.jayleegroup.com/images/logo.png"
                name="Jaylee Group"
                badge={<span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">Building</span>}
                description="this is my accounting website"
                link=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
