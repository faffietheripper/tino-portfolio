import React from "react";
import { Link } from "react-router-dom";

export default function SingleProject({ coverimg, name, badge, img1, img2, img3, description, link }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <article class="overflow-hidden h-[400px] rounded-lg border border-gray-100 shadow-sm ">
        <img alt="Office" src={coverimg} class="h-56 w-full object-contain" />

        <div class="p-4 sm:p-6">
          <h3 class="text-lg font-medium text-white-900">{name}</h3>
          <p class="pt-2">{badge}</p>
        </div>
        <div className="mt-4 md:mt-2 px-6">
          <button
            className="bg-gray-100 text-black active:bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            See more
          </button>

          {showModal ? (
            <>
              <div className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Project Details</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="h-[50vh] overflow-y-scroll">
                      <section>
                        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                              <img alt="" src={img1} class="aspect-square w-full rounded-xl object-contain border border-gray-900" />

                              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                                <img alt="" src={img2} class="aspect-square w-full rounded-xl object-contain border border-gray-900" />

                                <img alt="" src={img3} class="aspect-square w-full rounded-xl object-contain border border-gray-900" />
                              </div>
                            </div>

                            <div class="sticky top-0">
                              <h2 className="text-3xl">{name}</h2>

                              <div class="mt-4">
                                <div class="prose max-w-none flex flex-col justify-center">
                                  <p>{description}</p>
                                  <Link
                                    to={link}
                                    className="bg-transparent w-fit my-2 text-red-600 border border-red-600 active:bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    target="_blank"
                                  >
                                    Visit Site
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </article>
    </div>
  );
}
