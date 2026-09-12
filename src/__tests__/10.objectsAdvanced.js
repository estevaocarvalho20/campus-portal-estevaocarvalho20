import { merge, pick, omit, destructureUser } from '../10.objectsAdvanced';

describe(`10.objectsAdvanced`, () => {
  it(`merge: later props override earlier ones`, () =>
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 }));

  it(`pick: selects only specified keys`, () =>
    expect(pick({ a: 1, b: 2, c: 3 }, [ `a`, `c` ])).toEqual({ a: 1, c: 3 }));

  it(`omit: removes specified keys`, () =>
    expect(omit({ a: 1, b: 2, c: 3 }, [ `b` ])).toEqual({ a: 1, c: 3 }));

  it(`destructureUser: uses destructuring to build a string`, () =>
    expect(destructureUser({ first_name: `Ada`, last_name: `Lovelace`, age: 36 }))
      .toEqual(`Ada Lovelace is 36`));
});