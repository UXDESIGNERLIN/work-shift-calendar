import { A, B, C, D } from "./shiftsArray";
import * as moment from "moment";

let departments = {
  A: () => {
    return A;
  },
  B: () => {
    return B;
  },
  C: () => {
    return C;
  },
  D: () => {
    return D;
  }
};

function setDepartmentArray(department) {
  return departments[department]();
}

function daysInMonth(YYYY, MM) {
  return new Date(YYYY, MM, 0).getDate();
}

/*function daysInYear() {
  var previous = new Date(dt.getFullYear(), 0, 1);
  console.log("pr", previous);
}*/

function getDateSequence(MM, DD, YYYY) {
  let lastSpringHoliday = 5;
  let dateSequence = 0;
  let MonthsTillNow = MM - 1;

  for (let i = MonthsTillNow; i > 0; i--) {
    dateSequence = dateSequence + daysInMonth(YYYY, i);
  }
  return dateSequence + DD - lastSpringHoliday;
}

function dateDiff(miliseconds) {
  let convertMiliToDay = new Date(miliseconds);
  let start = moment("2020-01-06");
  let end = moment(convertMiliToDay);
  return end.diff(start, "days");
}

function renderShift(miliseconds, department) {
  let shiftsArray = setDepartmentArray(department);

  //let dateSequence = getDateSequence(MM, DD, YYYY) - 1;
  let numberOfDays = dateDiff(miliseconds);
  let round = 20;

  let shift = numberOfDays % round;

  return shiftsArray[shift];
}

export function showShift(miliseconds, department) {
  let shift = renderShift(miliseconds, department);
  return shift;
}
