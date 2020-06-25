import { Weekday } from './../src/weekday-calculator.js';

describe('Weekday', () => {
  let reusableDate;

  beforeEach(() => {
    reusableDate = new Date(70, 0, 1);
  });

  test('Should correctly create a date that can return a year, month, and date', () => {
    expect(reusableDate.getFullYear()).toEqual(1970);
    expect(reusableDate.getMonth()).toEqual(0);
    expect(reusableDate.getDate()).toEqual(1);
  });

})