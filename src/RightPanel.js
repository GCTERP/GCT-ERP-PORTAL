import * as React from "react";

function RightPanel() {
  return (
    <>
      <div className="bg-bgcolor pt-10">
        <h1 class="text-3xl font-bold pb-10"> Semester </h1>
        <div class="inline-flex pb-5">
          <button class="bg-bubble text-white font-bold py-2 px-4 rounded-l-full">
            Theory
          </button>
          <button class="bg-gray-200 hover:bg-bubble hover:text-white text-black font-bold py-2 px-4  rounded-r-full">
            Practical
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded">
                I
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                II
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                III
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                IV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-bubble text-white text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                V
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                VI
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                VII
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                VIII
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                HS
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                BS
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ES
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                PC
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                PE
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                OE
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                EEC
              </button>
            </div>
            <div>
              <button class="bg-white hover:bg-bubble text-blue-700 font-semibold w-7/12 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                MC
              </button>
            </div>
          </div>
          <div>
            <button class="bg-white hover:bg-bubble text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              VA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightPanel;
