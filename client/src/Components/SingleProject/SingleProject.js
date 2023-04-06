import React from "react";
import ModalContect from "../Modal Content/ModalContect";

export default function SingleProject() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <article class="overflow-hidden h-[400px] rounded-lg border border-gray-100 shadow-sm ">
        <img
          alt="Office"
          src="https://lh3.googleusercontent.com/gAn8MMAo8xgKIjyB8QBjv07V015XM7p5CTXwXfQSpfkZcqrUUmAzqzw1SOTPw-5T9U-225P3_FBlmhpwh9q6H-WErEVOSRM3zIHFQ9EbVH-28RmTaO_mkJoQiaxNzIxzJUfNbBE01xI3kTmywsC6BbImL_piU-gsreUKS3qQ00C_smxdJP0wG7PR_VLreAddQ9jAeM0LZ43Rc04TMPQ_32w9z6amGtwXjlb39swH2t77JEgmpxDsxnqCTWqFs2aXQyb41aeC7I0y8GSapCUE8pFkRrcoEceNL7SdxrngX8B6ychp0bb7cKsShehB0WsmvI7nza3611okK5Xx4EXOb3EbYekcZ8ZWugamB0loAiaQkg83Ws5yh8fHo5SRlaLN1sgsoUsWvVLJ_S32evynUmvo-4TFsuoHCIzmyROMV8nbgZBQKTNbmERcX5sTE6SGXb-8ts3k7TP61lwe2neWOWyS5HM7d5G5CSTnvi23o7fUjK4BlhbNa9_r6vEe5lH68fuoya0C8WtCBB-Rn0FJjVztYjFfza4fm-5WlaF-4qDkwQQgMx10Dmy55TlU3d0tKTXlQr2Q-h6aCQw9SPYZ6mPylQnDSu-X9_thL_Z6HqQK46P3xayN5IwXijzh-FbrbcZ6Aw7lZZsjYJlvXR9066rkzI2rOrnANWb7P20ZJWeiVJdgCZvw_SG-fOT54KRKB68WfUPF6DjZZG00YMBix-PMY-0jHyDN3yroGyPesE-ZPeGYvxYkUKegQtou--hNAE75_HiXq4uJQywOsge38WCrv_aVn_jsm8FGY4IUiXfZcpqUnhDntJRJU1D9KvSA3peyAXpdw66xdaAvd5_8cI7Fh83cg5u-cdTJ2ebik91JrsciRYJ1gCyB-T96okIXGn-7TWWuQMnVNrSDzX9Acny1VPgfdbb9rpJn_bahk0-25Dh4=w1057-h1057-s-no?authuser=0"
          class="h-56 w-full object-cover"
        />

        <div class="p-4 sm:p-6">
          <h3 class="text-lg font-medium text-white-900">Zibah Creations</h3>
        </div>
        <div className="mt-4 md:mt-8 px-6">
          <button
            className="bg-red-200 text-white active:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
