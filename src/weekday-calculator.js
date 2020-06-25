// project business logic goes here
// Potentially build a custom "Date" object from scratch for purposes of algorithm
// export class Weekday {
//   constructor (month, day, year) {
//   this.month = "";
//   this.day = "";
//   this.year = "";
//   }
// }

export function getWeekday(year, month, day) {
  const newDate = new Date(year, month - 1, day).getDay();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  return weekdays[newDate];
}

export function checkValidDate(year, month, day) {
  if (month > 12) {
    return false;
  } 
  else if (day > 31) {
    return false;
  } 
  else if (month === 4 && day > 30 || month === 6 && day > 30 || month === 9 && day > 30 || month === 11 && day > 30) {
    return false;
  } 
  else if (month === 2 && day > 28) {
    // if (year % 4 !== 0 && day >= 29 || year % 100 === 0 && day >= 29 || year % 400 !== 0 && day >= 29) {
    if (year % 4 === 0 && year % 100 !== 0 && day === 29 || year % 400 === 0 && day === 29) {
      return true;
    } 
    else {
      return false;
    }
  } 
  else {
    return true;
  }
}




const leapYears = (givenYear) => {
  let isLeapYear = 0;
  for (i = 0; i <= (givenYear % 400); i++) {
    if (i % 4 === 0 && i % 100 != 0 || i % 400 === 0) {
      isLeapYear += 1;
    };
  }
  return isLeapYear;
}

// # of days advanced from given weekday
let daysAdvanced = (givenYear % 400) % 7
// # of days "skipped" by leap years
let daysLeaped = (leapYears % 7)

(givenDay + daysAdvanced + daysLeaped) % 7 

// Given Year is 1, 1, 2000


w = ((day + (2.6 * month - 0.2) + year + (year / 4) + (century / 4 - (2 * century)) % 7) if negative add 7