import { Weekday } from './../src/weekday-calculator.js';

describe('Weekday', () => {
  let reusableToday;

  beforeEach(() => {
    reusableToday = new Weekday(1, 1, 1970)
  });

  test('Should correctly create a date object with a month, a day, and a year', () => {
    expect(reusableToday.month).toBe(1);
    expect(reusableToday.day).toBe(1);
    expect(reusableToday.year).toBe(1970);
  });
})