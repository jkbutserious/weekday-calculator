import { getWeekday } from './../src/weekday-calculator.js'

describe('Weekday', () => {

  test('Should correctly return the day of the week when passing in a date', () => {
    expect(getWeekday(1970, 0, 1)).toEqual("Thursday");
  });

  test("Should correctly return the day of the week for days in the far future", () => {
    expect(getWeekday(2242, 0, 1)).toEqual("Friday")
  })
})