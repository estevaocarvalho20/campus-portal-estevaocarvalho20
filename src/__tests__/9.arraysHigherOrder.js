import { double, onlyEven, sum, findFirstOdd, allPositive, anyNegative, sortByLength } from '../9.arraysHigherOrder';

describe(`9.arraysHigherOrder`, () => {
  it(`double: doubles values`, () => expect(double([ 1, 2, 3 ])).toEqual([ 2, 4, 6 ]));
  it(`onlyEven: filters to even numbers`, () => expect(onlyEven([ 1, 2, 3, 4, 5 ])).toEqual([ 2, 4 ]));
  it(`sum: reduces to sum`, () => expect(sum([ 1, 2, 3, 4 ])).toEqual(10));
  it(`findFirstOdd: finds first odd`, () => expect(findFirstOdd([ 2, 4, 6, 7, 8 ])).toEqual(7));
  it(`allPositive: validates all positive`, () => expect(allPositive([ 1, 2, 3 ])).toBeTruthy());
  it(`anyNegative: detects a negative`, () => expect(anyNegative([ 1, -1, 2 ])).toBeTruthy());
  it(`sortByLength: sorts by string length without mutating original`, () => {
    const input = [ `bbb`, `a`, `cc` ];
    const result = sortByLength(input);
    expect(result).toEqual([ `a`, `cc`, `bbb` ]);
    expect(input).toEqual([ `bbb`, `a`, `cc` ]);
  });
});


