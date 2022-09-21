import {
  faArrowAltCircleDown,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Popup from "reactjs-popup";
import { data1 } from "../curriculum";

const download = <FontAwesomeIcon icon={faArrowAltCircleDown} />;
const edit = <FontAwesomeIcon icon={faPen} />;
const plus = <FontAwesomeIcon icon={faPlus} />;

function Curriculum(props) {
  const [data, setData] = useState(data1);
  const [branch, setBranch] = useState("I");
  const [regulation, setRegulation] = useState(2018);
  var roman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
  };

  // fetch("https://brokers-contains-df-ceramic.trycloudflare.com/curriculum/2018")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setData(json);
  //     console.log(data);
  //   });
  return (
    <>
      <div className="gird grid-row-14 overflow-auto">
        <div className="row-span-3">
          <div className="w-2/12 p-2 rounded-r-full text-white text-lg bg-bubble">
            Curriculum
          </div>
        </div>
        <div className="mx-4 row-span-2 my-4 justify-between flex flex-row">
          <div>
            <text className="p-4 text-sm ">Regulation:</text>
            <select
              onChange={(e) => {
                setRegulation(e.target.value);
              }}
              className="bg-white mx-auto  px-1 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <option value="2018" className="mx-auto ">
                2018
              </option>
              <option value="2022" className="mx-auto ">
                2022
              </option>
            </select>
          </div>
          <div>
            <div>
              <text className="p-4 text-sm">Branch:</text>
              <select
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
                className="bg-white border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <option value="I">Information Technology</option>
                <option value="IB">Industrial Bio Technology</option>
                <option value="P">Production</option>
                <option value="E">
                  Electrical and Electronical Engineering
                </option>
                <option value="EC">
                  Electronics and Commucation Engineering
                </option>
                <option value="M">Mechanical</option>
                <option value="EI">
                  Electronics and Instrumentation Engineering
                </option>
              </select>
            </div>
          </div>
          <Popup
            trigger=<button className="py-1 px-5 rounded-lg  text-white text-md  bg-bubble">
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
                              class=" block text-sm font-medium text-gray-700"
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
                              class="block text-sm text-gray"
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

                          <div className="col-span-2">
                            <label
                              for="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Tutorials
                            </label>
                            <input
                              type="number"
                              name="region"
                              id="region"
                              autocomplete="address-level1"
                              className="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label
                              for="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Practicals
                            </label>
                            <input
                              type="number"
                              name="postal-code"
                              id="postal-code"
                              autocomplete="postal-code"
                              className="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label
                              for="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Credits
                            </label>
                            <input
                              type="number"
                              name="postal-code"
                              id="postal-code"
                              autocomplete="postal-code"
                              className="mt-1 block w-full py-2 rounded-md border-b-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
        <div className=" w-full py-2 text-lg text-bold bg-gray-200 row-span-2">
          {props.semester  ? roman[props.semester]+" Semester": (props.category!=""? props.category+" Courses": "List of Courses")}
        </div>
        <div className="row-span-2 "></div>
        <div className="row-span-7 w-full  overflow-y-auto h-96">
          <div className="flex flex-col ">
            <div className="overflow-x-auto -mx-0  lg:-mx-0">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full ">
                    <thead className="border-b bg-gray-100 ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          S.NO.
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          Course Code
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          Course Title
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          CAT
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          CA Marks
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          End Sem Marks
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          Total Marks
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          L
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold   px-6 py-4"
                        >
                          T
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold  px-6 py-4"
                        >
                          P
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-bold  px-6 py-4"
                        >
                          C
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {data ? (
                        data
                          .filter((data) => {
                            {
                              if (
                                // eslint-disable-next-line
                                regulation == data.regulation &&
                                branch === data.branch
                              )
                                if (
                                  props.category === "" &&
                                  props.semester === undefined
                                )
                                  return data;
                                else if (props.semester === undefined) {
                                  if (props.category === data.category)
                                    return data;
                                } else if (props.category === "") {
                                  if (data.semester === props.semester) {
                                    return data;
                                  }
                                } else if (
                                  props.category === data.category &&
                                  props.semester === data.semester
                                ) {
                                  return data;
                                }
                            }
                          })
                          .map((data1, i) => (
                            <tr className="border-b ">
                              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                {++i}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.code}
                              </td>
                              <td className="text-sm text-gray-900 pl-14 text-left font-light px-6 py-4 whitespace-nowrap">
                                {data1.title}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.category}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.ca}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.sem}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.total}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.lecture}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.tutorial}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.practical}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data1.credits}
                              </td>
                            </tr>
                          ))
                      ) : (
                        <div>{console.log("No data")}No Data</div>
                      )}
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
          <a
            href={require("../../B.Tech_. IT.pdf")}
            download="Curriculum_2018.pdf"
          >
            <div className="w-full py-1 px-5 rounded-lg text-white text-md bg-bubble">
              Download <span>{download}</span>
            </div>
          </a>
        </div>
        <button className="py-1 px-4 rounded-lg text-white text-md bg-orange">
          <span>{edit}</span> Edit
        </button>
      </div>
    </>
  );
}

export default Curriculum;
