import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-blue-400 p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">01.About Me</h2>

                <p class="text-white/90 sm:mt-4 sm:block">
                  Hey, my name is Tino and I'm a multi-talented human from the UK that designs and builds digital products. Im also passionate about rugby, painting and working out.
                </p>
                <p class="text-white/90 sm:mt-4 sm:block">
                  I currently work remotely as a freelancer under SkyRockers Ltd and am open to new opportunities. My profuse energy levels allow me to pick up new skills and juggle different projects with ease. I'm an enthusiastic and easily inspired boy that's willing to follow my fascinations wherever they take me.
                </p>


                <div class="mt-4 md:mt-8">
                  <Link
                    to="/contact"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-300 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 h-[20vh]">
              <img
                alt="Student"
                src="https://lh3.googleusercontent.com/FbGWbuo2uJlWWCExdOkAtNBlOE5wfH-npd3QBF9nGi5DU4Ejneiv2J3n5kVDMn53BNmQp8NR7mrAYEOTmT_-lI_GvL5ZfuKqGJXQM5QoHpHneYPQD0IqiulYeTcW4tg2iDvc6J3lJ0Ug0oswAOyCesZUoNyowIpDdWb3REwoBCB9AjHHdTzI1diLO-amja1WzVBr9j2oWDZiyCcTWaQ3X3lLTSsdQ-2O7tcuhsQudK76JrMoAKkU-CiPoMrTchs2k0zdmVRdewi1nGEahtGEWnzF1ZI5nI25k0lUt-rClsCg_bdqXvg4MjXjBYAAZGciBYCidREArt1MT8FC4wGKdd8u-3OKL02ShDTAGrEeysBV7xGli9-dExKAT4ngLv8qbgP7VKvOSeNXgu_krzaxRSkIje0Cv0pVyP0KAI8mNafYJQl3BZzsrmRrO5DpIRRrCUB5JqiTvL390YvPEqrvx945KyES3nydVOURZ8FfG6EK051yzKihI5BPecAEpu865MP8k8CHvAk3HrBqlZnBwEetI5qBHyTluEAqpRgUPqD4BGEz3Ug18PVRnwoTCYDTcd7Tm4Eewz3_oq4Dijtbi2NlBXXoGRfYRmWUxFTKTaInIlACYeiQ-LESnP8WdnN39jFCC-5zaYg8bkBzYq8UWEIhFuA12SXwUNij4nL9aW8Jq2qzyxOcyyFcPzl4TnsDKXfb4tKECEbAUhbWSWAFiP7N7vGbHZ5B0IMAE0kEVnYL9oN0usuxNPu6JBFHmKxOTRwUe0WzpPggKd1rEI5LMM2LfNP3EStnxfv6qfEsujN6-hBi05qicNqGHyQ9fwzcf76n4cn_yTLR73bgEci4W4sU-iUhTHwWFBjg6Y8ZGTePjAdfbpi9wtqigiDZG483G7HF_e37HXWgsLrWQ38XHXb-f1QR_f-Iy2JpakoZjsIz=w1080-h1321-s-no?authuser=0"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
              <img
                alt="Student"
                src="https://lh3.googleusercontent.com/H9RnHbaLxeKxHxCfaSchLBDAjZ-E-sbqDIjDkj0fKlnpVRG371_-b9g5rlG-AeV5ykp5VQegSlxMHeZOsVlByKjzPs9VhebkZBGI-gF-eyF059tskaiF_XboiL9lMejML8QEPz1E5llWEZwhRlxOhkAKaELQ8O7pVeaWHCEtS5gdkqNf5cFgjToxpLvHRDP5L2NI0simaGqEHv0VL1vXYQaNKe20C-agKdrxquKTFbv6H5ZkVoetxrfatqgRW5HAGWKKRXPQO1ZZLDK3pfbyXlg_AQitoixo0NQLtGQoD7XYqA9VAjJ7W_Qz4W0VaJ0QLzLjqd7JH9-Xyt0FQ66SC8eR0p2mLXLxLiolaNi48qtV93yT1IxGASzE4JbJMkJXFcRbTh4zZ67OPETIZsc7Dj72c0K6L7eVmwFMdrbu-l6CSI5RC7y5V-7laE5Rkt2HZSlzUb2uR8SAwwDB81c0djp8y4vnw9p8VqjWvHvm9xwyIiCNZEop9DB-bfEb9g-97c1T03iwfY5mXVHNsbJzl7UWIT4BBrCi8EnTyNrY0e5iwzv6mYJnGWqRhLMUFITIt32weMyLDJVBKfhBZ70G_MVertlwB8zyt0LDrLNUFfcdXprLLYOZcQz_bBuPaZW2J7CCcLIGOya9ic2bz6ZQyXLImki7PaeprkeFawG_ymOGCGs2GCgox4HpkNdNbbNTWh_9TS9U24o2PBVMl6CDmXNzU1uR7oeGMtmCR_uy6x-2hTVGkyaoZM3m08OU3nMIPq2ec7lbgNyccaarGvKpEUV_mZnMm3qVH5A4RcDSTlgYJze-0kjcmj3sfZ_YG_-E5zfD2EAyVZ6K-hQeFHvdzh1L5AUQoVkyn5pyWbDksoyL9c8k59-57CDKbbMW0xGfgGrcjMnptsBbKzNhZI4DQSBThzEa38WsX_bup9dMrBdY=w2368-h1578-s-no?authuser=0"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
