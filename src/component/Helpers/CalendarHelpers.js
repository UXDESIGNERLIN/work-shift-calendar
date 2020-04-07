import { A, B, C, D } from "./shiftsArray";

function setDepartmentArray(department) {
  //let shiftsArray;
  switch (department) {
    case "A":
      return A;
    case "B":
      return B;
    case "C":
      return C;
    case "D":
      return D;
    default:
      return;
  }
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
  /* if (YYYY - 2020 > 0) {
    let countingStart = new Date(2020, 0, 6);
    let current = new Date();
  }*/
  for (let i = MonthsTillNow; i > 0; i--) {
    dateSequence = dateSequence + daysInMonth(YYYY, i);
  }
  return dateSequence + DD - lastSpringHoliday;
}

function renderShift(MM, DD, YYYY, department) {
  let shiftsArray = setDepartmentArray(department);
  let dateSequence = getDateSequence(MM, DD, YYYY) - 1;
  let round = 20;
  //let departmentShift = { A: 5, B: 10, C: 15, D: 0 };
  //let shift = (dateSequence % round) + departmentShift[department];
  let shift = dateSequence % round;
  // let shiftsArray = A;
  /*let shiftsArray = [
    "中班",
    "中班",
    "中班",
    "中班",
    "中班",
    "休假",
    "早班",
    "早班",
    "早班",
    "早班",
    "早班",
    "休假",
    "休假",
    "晚班",
    "晚班",
    "晚班",
    "晚班",
    "晚班",
    "休假",
    "休假"
  ];*/

  return shiftsArray[shift];
}

export function showShift(MM, DD, YYYY, department) {
  let shift = renderShift(MM, DD, YYYY, department);
  return shift;
}
