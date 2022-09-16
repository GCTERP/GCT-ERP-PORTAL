import {
  faArrowAltCircleDown,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Popup from "reactjs-popup";

var response,data;

const  getCurriculum = async () => {
  try{
     response = await fetch("https://api.publicapis.org/entries");
     data = await response.json();
     console.log(data);
  }
  catch(err){
    console.log(err);
  }
}


const num = [1, 2, 3, 4, 5, 6,7,8];

const download = <FontAwesomeIcon icon={faArrowAltCircleDown} />;
const edit = <FontAwesomeIcon icon={faPen} />;
const plus = <FontAwesomeIcon icon={faPlus} />;



function Curruculum() {
  getCurriculum();

  return (
    <>
      <div className="gird grid-row-14 overflow-auto">
        <div className="row-span-3">
          <div className="w-2/12 p-2 rounded-r-full text-white text-xl bg-bubble">
            Curriculum
          </div>
        </div>
        <div className="   mx-4 row-span-2 my-4 justify-between flex flex-row">
          <div>
            <text className="p-4 text-lg ">Regulation:</text>
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              className="bg-white mx-auto  px-1 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <option className="mx-auto text-xl">2018</option>
              <option className="mx-auto text-xl">2019</option>
              <option className="mx-auto text-xl">2020</option>
              <option className="mx-auto text-xl">2021</option>
              <option className="mx-auto text-xl">2022</option>
              <option className="mx-auto text-xl">2023</option>
            </select>
          </div>
          <div>
            <div>
              <text className="p-4 text-lg ">Branch:</text>
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                className="bg-white border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <option className="mx-auto">Information Technology</option>
                <option className="mx-auto">Industrial Bio Technology</option>
                <option className="mx-auto">Production</option>
                <option className="mx-auto">
                  Electrical and Electronical Engineering
                </option>
                <option className="mx-auto">
                  Electronics and Commucation Engineering
                </option>
                <option className="mx-auto">Mechanical</option>
                <option className="mx-auto">
                  Electronics and Instrumentation
                </option>
              </select>
            </div>
          </div>
          <Popup
            trigger=<button className="py-2 px-5 rounded-lg text-white text-md  bg-bubble">
              <span>{plus}</span> Add Course
            </button>
            position="right center"
            modal
            className="rounded-lg"
          >
            <div>
              <div class="mt-10 sm:mt-0">
                <div className="rounded-lg w-full bg-bubble p-2 text-center text-lg text-white">
                  <h1>Add Course</h1>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div class="overflow-hidden shadow sm:rounded-md">
                      <div class="bg-white px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-8 gap-6">
                          <div class="col-span-4">
                            <label
                              for="Course-name"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Course Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autocomplete="given-name"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-4">
                            <label
                              for="Course-name"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Course Code
                            </label>
                            <input
                              type="text"
                              name="Course-code"
                              id="last-name"
                              autocomplete="family-name"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="country"
                              class="block text-sm font-medium text-gray-700"
                            >
                              CAT
                            </label>
                            <select
                              id="country"
                              name="country"
                              autocomplete="country-name"
                              class="mt-1 block w-full py-2 rounded-md border border-b-2 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                              <option>HS</option>
                              <option>BS</option>
                              <option>IP</option>
                              <option>MS</option>
                              <option>PC</option>
                              <option>ML</option>
                            </select>
                          </div>

                          <div class="col-span-2">
                            <label
                              for="street-address"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Total Marks
                            </label>
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autocomplete="street-address"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="street-address"
                              class="block text-sm font-medium text-gray-700"
                            >
                              End Sem Marks
                            </label>
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autocomplete="street-address"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="street-address"
                              class="block text-sm font-medium text-gray-700"
                            >
                              CA Marks
                            </label>
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autocomplete="street-address"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="city"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Lectures
                            </label>
                            <input
                              type="number"
                              name="city"
                              id="city"
                              autocomplete="address-level2"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="region"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Tutorials
                            </label>
                            <input
                              type="number"
                              name="region"
                              id="region"
                              autocomplete="address-level1"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="postal-code"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Practicals
                            </label>
                            <input
                              type="number"
                              name="postal-code"
                              id="postal-code"
                              autocomplete="postal-code"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div class="col-span-2">
                            <label
                              for="postal-code"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Credits
                            </label>
                            <input
                              type="number"
                              name="postal-code"
                              id="postal-code"
                              autocomplete="postal-code"
                              class="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          class="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="pr-2">{plus}</span>Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Popup>
        </div>
        <div className=" w-full p-4 text-xl text-bold bg-gray-200 row-span-2">
          VII Semester
        </div>
        <div className="row-span-2 "></div>
        <div className="row-span-7 w-full text-center overflow-y-auto h-96">
          <div class="flex flex-col ">
            <div class="overflow-x-auto -mx-0  lg:-mx-0">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <thead class="border-b bg-gray-100 ">
                      <tr>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          S.NO.
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          Course Code
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          Course Title
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          CAT
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          CA Marks
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          End Sem Marks
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          Total Marks
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          L
                        </th>
                        <th scope="col" class="text-sm font-bold   px-6 py-4">
                          T
                        </th>
                        <th scope="col" class="text-sm font-bold  px-6 py-4">
                          P
                        </th>
                        <th scope="col" class="text-sm font-bold  px-6 py-4">
                          C
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {num.map((n) => (
                        <tr class="border-b ">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {n}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            18IP601
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Professional Ethics
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            HS
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            50
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            50
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            100
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            3
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            0
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            0
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            3
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row-span-2 flex mx-5 justify-between">
        <div>
          <a href={require("./B.Tech_. IT.pdf")} download="Curriculum_2018.pdf">
            <div className="w-full py-2 px-5 rounded-br-2xl rounded-tl-2xl text-white text-md bg-bubble">
              Download <span>{download}</span>
            </div>
          </a>
        </div>
        <button className="py-2 px-8 rounded-lg text-white text-md bg-orange">
          <span>{edit}</span> Edit
        </button>
      </div>
    </>
  );
}

export default Curruculum;
