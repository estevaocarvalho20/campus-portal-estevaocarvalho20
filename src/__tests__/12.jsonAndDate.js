import { parseUser, stringifyUser, daysBetween, toISODate, isValidDate } from '../12.jsonAndDate';

describe(`12.jsonAndDate`, () => {
  it(`parseUser: parses valid JSON`, () =>
    expect(parseUser(`{"name":"Ada","age":36}`)).toEqual({ name: `Ada`, age: 36 }));

  it(`stringifyUser: stringifies object`, () =>
    expect(stringifyUser({ a: 1 })).toEqual(`{"a":1}`));

  it(`daysBetween: computes whole-day differences`, () => {
    expect(daysBetween(`2020-01-01`, `2020-01-02`)).toEqual(1);
    expect(daysBetween(new Date(`2020-01-01`), new Date(`2020-01-10`))).toEqual(9);
  });

  it(`toISODate: returns yyyy-mm-dd`, () => {
    const d = new Date(`2020-12-31T15:23:00Z`);
    expect(toISODate(d)).toEqual(`2020-12-31`);
  });

  it(`isValidDate: checks for valid Date`, () => {
    expect(isValidDate(new Date())).toBeTruthy();
    expect(isValidDate(new Date(`invalid`))).toBeFalsy();
    expect(isValidDate(`2020-01-01`)).toBeFalsy();
  });
});


