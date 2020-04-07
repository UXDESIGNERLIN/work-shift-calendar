import React, { useState } from "react";

import "./App.css";
import ScheduleCalendar from "./component/calendar";

function App() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [DepartmentSent, setSendDepartment] = useState();
  const showDSchedule = e => {
    DepartmentSent !== e.target.id && setShowSchedule(false);
    console.log("show", showSchedule);
    setSendDepartment(e.target.id);
    setTimeout(() => {
      setShowSchedule(true);
    }, 0);

    //e.target.id === "D" ? setShowSchedule(true) : setShowSchedule(false);
  };

  return (
    <div className="App">
      {" "}
      <h2>請選則你的股</h2>
      <div className="buttons-container">
        <button className="department-button" id="A" onClick={showDSchedule}>
          A
        </button>
        <button className="department-button" id="B" onClick={showDSchedule}>
          B
        </button>
        <button className="department-button" id="C" onClick={showDSchedule}>
          C
        </button>
        <button
          className="department-button"
          id="D"
          onClick={e => showDSchedule(e)}
        >
          D
        </button>
      </div>
      {showSchedule && <ScheduleCalendar department={DepartmentSent} />}
    </div>
  );
}

export default App;
