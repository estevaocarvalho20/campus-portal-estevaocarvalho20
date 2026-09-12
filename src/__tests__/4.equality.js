import { strictEquality, looseEquality } from '../4.equality';

describe(`4.equality`, function () {

  it(`strictEquality: compare value & type`, function () {
    expect(strictEquality(1, `1`)).toBeFalsy();
    expect(strictEquality(1, 1)).toBeTruthy();
    expect(strictEquality(0, false)).toBeFalsy();
    
  });

  it(`equality: compare value but not necessarily the type`, function () {
    expect(looseEquality(1, `1`)).toBeTruthy();
    expect(looseEquality(1, 1)).toBeTruthy();
    expect(looseEquality(0, false)).toBeTruthy();
    expect(looseEquality(0, 1)).toBeFalsy();
    expect(looseEquality(null, undefined)).toBeTruthy();
  });
});