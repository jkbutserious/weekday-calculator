import { Weekday } from './../src/weekday-calculator.js';

describe('Weekday', () => {
  let reusableDate;

  beforeEach(() => {
    reusableDate = new Date(0, 1, 2)
  });

  test('Should correctly create a date object with a month, a day, and a year', () => {
    expect(reusableDate.getFullYear()).toEqual(1970);
    expect(reusableDate.getMonth()).toEqual(0);
    expect(reusableDate.getDate()).toEqual(1);
  });
})