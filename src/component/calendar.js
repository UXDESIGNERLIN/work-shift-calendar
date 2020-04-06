import React, { Component } from "react";
import Calendar from "react-calendar";
import { showShift } from "./Helpers/CalendarHelpers";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

class ScheduleCalendar extends Component {
  //answer = renderDate(Date.now());

  renderDate = e => {
    let miliseconds = Date.parse(e);
    let newDate = new Date(miliseconds);
    if (newDate.getFullYear() !== 2020) return;
    //newDate = newDate.toString("MMM dd");
    let shift = showShift(
      newDate.getMonth() + 1,
      newDate.getDate(),
      newDate.getFullYear()
    );
    //console.log(newDate.getMonth());

    return shift;
  };

  content = ({ date, view }) =>
    view === "month" && <p>{this.renderDate(date)}</p>;

  render() {
    return (
      <div className="calendar-container">
        {" "}
        <Calendar onClickDay={this.renderDate} tileContent={this.content} />
      </div>
    );
  }
}

/**({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null */
export default ScheduleCalendar;
