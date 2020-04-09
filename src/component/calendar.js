import React, { Component } from "react";
import Calendar from "react-calendar";
import { showShift } from "./Helpers/CalendarHelpers";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

class ScheduleCalendar extends Component {
  renderDate = e => {
    let miliseconds = Date.parse(e);
    let newDate = new Date(miliseconds);
    if (newDate.getFullYear() < 2020) return;

    let shift = showShift(
      miliseconds,

      this.props.department
    );

    return shift;
  };

  renderTileContent = ({ date, view }) =>
    view === "month" && <p>{this.renderDate(date)}</p>;

  renderTileClass = ({ date, view }) =>
    view === "month" && this.renderDate(date) === "休假"
      ? "holidayCalendarStyle"
      : "nonHolidayCalendarStyle";

  render() {
    return (
      <div className="calendar-container">
        {" "}
        <Calendar
          //onClickDay={this.renderDate}
          tileClassName={this.renderTileClass}
          tileContent={this.renderTileContent}
        />
      </div>
    );
  }
}

/**Function: ({ date, view }) => view === 'month' && date.getDay() === 3 ? 'saturday' : null */

/**({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null */
export default ScheduleCalendar;
