import { safeAdd, parseStringAsInt, addAndReturn2DecimalPlaces } from '../1.numbers';

/**
 * There are many ways to organize your tests. I find it best to organize and name them in such a way you can quickly locate
 * the code in the event that your tests fail. Here I am making the top level the name of the file/module. Then making
 * child describes to tell me which function and requirement I am testing.
 */
describe(`1.numbers`, function () {
  describe(`.safeAdd()`, () => {
    it(`adds two numbers`, () => {
      expect(safeAdd(2, 2)).toEqual(4);
      expect(safeAdd(200, 10)).toEqual(210);
      expect(safeAdd(10, 21)).toEqual(31);
    });
    it(`handles Infinity and -Infinity correctly`, () => {
      expect(safeAdd(Infinity, 1)).toEqual(Infinity);
      expect(safeAdd(1, -Infinity)).toEqual(-Infinity);
    });
    it(`throws TypeError when either argument is not a finite number`, () => {
      expect(() => safeAdd(`2`, 2)).toThrow(TypeError);
      expect(() => safeAdd(2, `2`)).toThrow(TypeError);
      expect(() => safeAdd(NaN, 1)).toThrow(TypeError);
      expect(() => safeAdd()).toThrow(TypeError);
    });
  });


  describe(`.parseStringAsInt()`, () => {
    const testParseInt = (given, expectResult) => {
      try {
        return expect(parseStringAsInt(given)).toEqual(expectResult);
      } catch (e) {
        if (e instanceof RangeError) {
          return expect(`You've hit a stack overflow error due to an infinite loop. Check that ` +
            `the call inside your function is not the same as the function declaration. Inside ` +
            `the function namespace your call to Numbers.`).toBeFalsy();
        }

        return expect(`An uncaught exception occurred: ${e.message}`).toEqual(e);
      }
    };

    it(`parses string 2342 as number 2342`, () => testParseInt(`2342`, 2342));
    it(`parses string 12 as number 12`, () => expect(parseStringAsInt(`12`)).toEqual(12));
    it(`parses string 12px as number 12`, () => expect(parseStringAsInt(`12px`)).toEqual(12));
    it(`parses hex code 0x12 as number 0`, () => {
      if (parseStringAsInt(`0x12`) === 18) {
        return expect(`You're on the right track. 0x12 is the hexadecimal value for 18. Unfortunately we don't ` +
          `want to parse base 16 values here. We want to parse base 10. Look at using the second parameter in ` +
          `the parse int function`).toBeFalsy();
      }

      return testParseInt(`0x12`, 0);
    });
    it(`parses string 12.4 dollars as number 12`, () => expect(parseStringAsInt(`12.4 dollars`)).toEqual(12));
    it(`does not parse string 12.34 as number 12.34`, () => expect(parseStringAsInt(`12.34`)).not.toEqual(12.34));
  });

  describe(`.addAndReturn2DecimalPlaces()`, () => {
    it(`returns the sum of 1.23453 and 5.37873 as 6.61`, () => {
      const result = addAndReturn2DecimalPlaces(1.23453, 5.37873);
      const expected = 6.61;

      if (typeof result === `string` && result == expected) {
        return expect(`You're on the right track. Your function is returning a string, but we're expecting a number ` +
          `Try casting your result to a number.`).toBeFalsy();
      }

      return expect(result).toEqual(expected);
    });
  });
});
