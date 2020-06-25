import { Weekday } from './../src/weekday-calculator.js';

describe('Weekday', () => {
  let reusableDate;
  let reusableDate2;

  beforeEach(() => {
    reusableDate = new Date(70, 0, 1);
    reusableDate2 = new Date(70, 0, 4)
  });

  test('Should correctly create a date that can return a year, month, and date', () => {
    expect(reusableDate.getFullYear()).toEqual(1970);
    expect(reusableDate.getMonth()).toEqual(0);
    expect(reusableDate.getDate()).toEqual(1);
  });

  test('Should correctly return the day of the week based on the date passed into the date object', () => {
    expect(reusableDate2.getDay()).toEqual(0);
  })
})