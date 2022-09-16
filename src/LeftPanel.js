import "./App.css";
import RightPanel from "./RightPanel";
import Curruculum from "./Curriculum";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClipboardList,
  faGear,
  faRectangleList,
  faUserGraduate,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings";
import { useState } from "react";
import Staffs from "./Staffs";
import Students from "./Students";
import Calendar from "./Calendar";
import Examination from "./Examination";

const staff = <FontAwesomeIcon icon={faUserGroup} />;
const students = <FontAwesomeIcon icon={faUserGraduate} />;
const calendar = <FontAwesomeIcon icon={faCalendar} />;
const Syllabus = <FontAwesomeIcon icon={faClipboardList} />;
const settings = <FontAwesomeIcon icon={faGear} />;
const examination = <FontAwesomeIcon icon={faRectangleList} />;

function LeftPanel() {
  const [page, setPage] = useState(3);

  return (
    <>
      <div className="grid  grid-cols-12 ">
        <div className="col-span-2 rounded-3xl pt-10  border-r-2 bg-bgcolor">
          <div className="grid grid-rows-5 text-gray-500 ">
            <div className="row-span-1"></div>
            <div className="row-span-3 mx-auto space-y-11">
              <button
                onClick={() => setPage(0)}
                className={page === 0 ? "text-bubble" : ""}
              >
                <span className="pr-3 ">{staff}</span>
                <p className="inline-block ">Staff</p>
              </button>
              <div>
                <button
                  onClick={() => setPage(1)}
                  className={page === 1 ? "text-bubble" : ""}
                >
                  <span className="pr-3">{students}</span>
                  <p className="inline-block">Students</p>
                </button>
              </div>
              <div>
                <button
                  onClick={() => setPage(2)}
                  className={page === 2 ? "text-bubble" : ""}
                >
                  <span className="pr-3">{calendar}</span>
                  <p className="inline-block">Calendar</p>
                </button>
              </div>
              <div>
                <button
                  onClick={() => setPage(3)}
                  className={page === 3 ? "text-bubble" : ""}
                >
                  <span className="pr-3">{Syllabus}</span>
                  <p className="inline-block">Curriculum</p>
                </button>
              </div>
              <div>
                <button
                  onClick={() => setPage(4)}
                  className={page === 4 ? "text-bubble" : ""}
                >
                  <span className="pr-3">{examination}</span>
                  <p className="inline-block ">Examination</p>
                </button>
              </div>
              <div>
                <button
                  onClick={() => setPage(5)}
                  className={page === 5 ? "text-bubble" : ""}
                >
                  <span className="pr-3">{settings}</span>
                  <p className="inline-block ">Settings</p>
                </button>
              </div>
            </div>
            <div className="row-span-1"></div>
          </div>
        </div>
        <div className="col-span-8 text-center pt-10 ">
          {
            {
              0: <Staffs />,
              1: <Students />,
              2: <Calendar />,
              3: <Curruculum />,
              4: <Examination />,
              5: <Settings />,
            }[page]
          }
        </div>
        <div className="col-span-2 rounded-3xl text-center border-l-2 z-10">
          <RightPanel />
        </div>
      </div>
    </>
  );
}

export default LeftPanel;
