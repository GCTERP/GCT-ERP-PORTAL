import * as React from "react";
import { useState } from "react";

function RightPanel(props) {
  const [select, setSelect] = useState(0);
  return (
    <>
      <div className="bg-bgcolor pt-10">
        <h1 className="text-xl font-bold pb-10"> Semester </h1>
        <div className="inline-flex pb-5">
          <button  className="bg-bubble text-xs text-white font-bold py-2 px-4 rounded-l-full">
            Theory
          </button>
          <button className="bg-gray-200 text-xs hover:bg-bubble text-xs hover:text-white text-black font-bold py-2 px-4  rounded-r-full">
            Practical
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setSemester(1);
                  props.setCategory("");
                  setSelect(1);
                }}
                className={
                  select === 1
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                I
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setSemester(2);
                  props.setCategory("");
                  setSelect(2);
                }}
                className={
                  select === 2
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                II
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setSemester(3);
                  props.setCategory("");
                  setSelect(3);
                }}
                className={
                  select === 3
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                III
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setSemester(4);
                  props.setCategory("");
                  setSelect(4);
                }}
                className={
                  select === 4
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                IV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setSemester(5);
                  props.setCategory("");
                  setSelect(5);
                }}
                className={
                  select === 5
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                V
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setSemester(6);
                  props.setCategory("");
                  setSelect(6);
                }}
                className={
                  select === 6
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                VI
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setSemester(7);
                  props.setCategory("");
                  setSelect(7);
                }}
                className={
                  select === 7
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                VII
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setSemester(8);
                  props.setCategory("");
                  setSelect(8);
                }}
                className={
                  select === 8
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                VIII
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setCategory("HS");
                  props.setSemester();
                  setSelect(9);
                }}
                className={
                  select === 9
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                HS
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setCategory("BS");
                  props.setSemester();
                  setSelect(10);
                }}
                className={
                  select === 10
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                BS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setCategory("ES");
                  props.setSemester();
                  setSelect(11);
                }}
                className={
                  select === 11
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                ES
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setCategory("PC");
                  props.setSemester();
                  setSelect(12);
                }}
                className={
                  select === 12
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                PC
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setCategory("PE");
                  props.setSemester();
                  setSelect(13);
                }}
                className={
                  select === 13
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                PE
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  props.setCategory("OE");
                  props.setSemester();
                  setSelect(14);
                }}
                className={
                  select === 14
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                OE
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-5">
            <div>
              <button
                onClick={() => {
                  props.setCategory("EEC");
                  props.setSemester();
                  setSelect(15);
                }}
                className={
                  select === 15
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                EEC
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.setCategory("MC");
                  props.setSemester();
                  setSelect(16);
                }}
                className={
                  select === 16
                    ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                    : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
                }
              >
                MC
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                props.setCategory("VA");
                props.setSemester();
                setSelect(17);
              }}
              className={
                select === 17
                  ? " bg-bubble text-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded "
                  : "  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
              }
            >
              VA
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                props.setCategory("");
                props.setSemester();
                setSelect(0);
              }}
              className="  bg-white hover:bg-bubble text-xs  font-semibold py-2 px-4 border w-7/12 border-blue-500 rounded  "
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightPanel;
