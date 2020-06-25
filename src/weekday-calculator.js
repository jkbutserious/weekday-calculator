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
  const newDate = new Date(year, month, day).getDay();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  return weekdays[newDate];
}