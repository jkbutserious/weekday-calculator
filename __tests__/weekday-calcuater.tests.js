import { getWeekday, checkValidDate } from './../src/weekday-calculator.js'

describe('Weekday', () => {

  test('Should correctly return the day of the week when passing in a date', () => {
    expect(getWeekday(1970, 0, 1)).toEqual("Thursday");
  });

  test("Should correctly return the day of the week for days in the far future", () => {
    expect(getWeekday(2242, 0, 1)).toEqual("Saturday");
  })

  test("Should correctly return a true for a valid date", () => {
    expect(checkValidDate(1970, 1, 1)).toEqual(true);
    expect(checkValidDate(1970, 2, 29)).toEqual(false);
    expect(checkValidDate(1970, 4, 31)).toEqual(false);
    expect(checkValidDate(1970, 1, 32)).toEqual(false);
    expect(checkValidDate(1970, 13, 31)).toEqual(false);
  })
})