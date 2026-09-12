import { fizzBuzz, inRangeInclusive, pickDefault } from '../5.controlFlowAndLogic';

describe(`5.controlFlowAndLogic`, () => {
  
  describe(`flow control`, () => {
    describe(`fizzBuzz`, function () {
      it(`returns number when not a multiple of 3 or 5: 1`, () => expect(fizzBuzz(1)).toEqual(1));
      it(`returns number when not a multiple of 3 or 5: 11`, () => expect(fizzBuzz(11)).toEqual(11));
      it(`returns number when not a multiple of 3 or 5: 21`, () => expect(fizzBuzz(22)).toEqual(22));
    
      it(`returns fizz on multiple of 3: 3`, () => expect(fizzBuzz(3)).toEqual(`fizz`));
      it(`returns fizz on multiple of 3: 6`, () => expect(fizzBuzz(6)).toEqual(`fizz`));
      it(`returns fizz on multiple of 3: 9`, () => expect(fizzBuzz(9)).toEqual(`fizz`));
    
      it(`returns buzz on multiple of 5: 5`, () => expect(fizzBuzz(5)).toEqual(`buzz`));
      it(`returns buzz on multiple of 5: 10`, () => expect(fizzBuzz(10)).toEqual(`buzz`));
      it(`returns buzz on multiple of 5: 20`, () => expect(fizzBuzz(20)).toEqual(`buzz`));
    
      it(`returns fizzbuzz when a multiple of 3 and 5: 15`, () => expect(fizzBuzz(15)).toEqual(`fizzbuzz`));
      it(`returns fizzbuzz when a multiple of 3 and 5: 30`, () => expect(fizzBuzz(30)).toEqual(`fizzbuzz`));
      it(`returns fizzbuzz when a multiple of 3 and 5: 45`, () => expect(fizzBuzz(45)).toEqual(`fizzbuzz`));
    
      it(`returns false if the argument is not a number`, () => expect(fizzBuzz(`foo`)).toEqual(false));
    });

    it(`inRangeInclusive: covers [min, max] inclusively`, () => {
      expect(inRangeInclusive(5, 1, 10)).toBeTruthy();
      expect(inRangeInclusive(1, 1, 10)).toBeTruthy();
      expect(inRangeInclusive(10, 1, 10)).toBeTruthy();
      expect(inRangeInclusive(0, 1, 10)).toBeFalsy();
      expect(inRangeInclusive(11, 1, 10)).toBeFalsy();
    });

    it(`pickDefault: demonstrates ||/truthiness pitfalls`, () => {
      expect(pickDefault(`hello`, `fallback`)).toEqual(`hello`);
      expect(pickDefault(``, `fallback`)).toEqual(`fallback`);
      expect(pickDefault(0, 42)).toEqual(42);
      expect(pickDefault(null, `x`)).toEqual(`x`);
      expect(pickDefault(undefined, `x`)).toEqual(`x`);
    });
  });
});


