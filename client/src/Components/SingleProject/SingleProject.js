import React from "react";
import ModalContect from "../Modal Content/ModalContect";

export default function SingleProject({coverimg, name}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <article class="overflow-hidden h-[400px] rounded-lg border border-gray-100 shadow-sm ">
        <img
          alt="Office"
          src={coverimg}
          class="h-56 w-full object-cover"
        />

        <div class="p-4 sm:p-6">
          <h3 class="text-lg font-medium text-white-900">{name}</h3>
        </div>
        <div className="mt-4 md:mt-8 px-6">
          <button
            className="bg-red-300 text-white active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Business Details</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="h-[50vh] overflow-y-scroll">
                      <ModalContect />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-teal-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
