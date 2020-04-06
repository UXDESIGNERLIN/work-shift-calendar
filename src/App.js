import React, { useState } from "react";

import "./App.css";
import ScheduleCalendar from "./component/calendar";

function App() {
  const [showSchedule, setShowSchedule] = useState(false);
  const showDSchedule = e => {
    e.target.id === "D" ? setShowSchedule(true) : setShowSchedule(false);
  };

  return (
    <div className="App">
      {" "}
      <h2>請選則你的股</h2>
      <div className="buttons-container">
        <button className="department-button" onClick={showDSchedule}>
          A
        </button>
        <button className="department-button" onClick={showDSchedule}>
          B
        </button>
        <button className="department-button" onClick={showDSchedule}>
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
      {showSchedule && <ScheduleCalendar />}
    </div>
  );
}

export default App;
