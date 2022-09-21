import Staff from "../MiddlePanel/Staff";
import Students from "../MiddlePanel/Students";
import Curruculum from "../MiddlePanel/Curriculum";
import Settings from "../MiddlePanel/Settings";
import Examination from "../MiddlePanel/Examination";
import Calendar from "../MiddlePanel/Calendar";

function Main(props) {
  return (
    <>
      {
        {
          0: <Staff />,
          1: <Students />,
          2: <Calendar />,
          3: (
            <Curruculum
              setCategory={props.setCategory}
              category={props.category}
              semester={props.semester}
              setSemester={props.setSemester}
            />
          ),
          4: <Examination />,
          5: <Settings />,
        }[props.page]
      }
    </>
  );
}

export default Main;
