import { greet, sumAll } from '../8.functionsAndScope';

describe(`8.functionsAndScope`, () => {
  describe(`.greet()`, () => {
    it(`greets with provided name`, () => expect(greet(`Alice`)).toEqual(`Hello, Alice!`));
    it(`uses default when no name provided`, () => expect(greet()).toEqual(`Hello, World!`));
  });

  describe(`.sumAll()`, () => {
    it(`sums a variable number of arguments`, () => {
      expect(sumAll()).toEqual(0);
      expect(sumAll(1)).toEqual(1);
      expect(sumAll(1, 2, 3, 4)).toEqual(10);
    });
  });
});