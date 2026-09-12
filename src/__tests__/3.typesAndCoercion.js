import { typeOfValue, toNumber, toBoolean, isTruthy, coerceAndAdd } from '../3.typesAndCoercion';

describe(`3.typesAndCoercion`, () => {
  describe(`.typeOfValue()`, () => {
    it(`returns correct typeof for primitives and objects`, () => {
      expect(typeOfValue(`hello`)).toEqual(`string`);
      expect(typeOfValue(123)).toEqual(`number`);
      expect(typeOfValue(true)).toEqual(`boolean`);
      expect(typeOfValue(undefined)).toEqual(`undefined`);
      expect(typeOfValue(null)).toEqual(`object`);
      expect(typeOfValue({})).toEqual(`object`);
      expect(typeOfValue([])).toEqual(`object`);
      expect(typeOfValue(function () {})).toEqual(`function`);
    });
  });

  describe(`.toNumber()`, () => {
    it(`coerces common values to numbers`, () => {
      expect(toNumber(`42`)).toEqual(42);
      expect(toNumber(`  10 `)).toEqual(10);
      expect(toNumber(true)).toEqual(1);
      expect(toNumber(false)).toEqual(0);
      expect(toNumber(``)).toEqual(0);
      expect(toNumber(null)).toEqual(0);
      expect(Number.isNaN(toNumber(`foo`))).toBeTruthy();
    });
  });

  describe(`.toBoolean()`, () => {
    it(`coerces values based on JavaScript truthiness rules`, () => {
      expect(toBoolean(0)).toBeFalsy();
      expect(toBoolean(1)).toBeTruthy();
      expect(toBoolean(``)).toBeFalsy();
      expect(toBoolean(`0`)).toBeTruthy();
      expect(toBoolean([])).toBeTruthy();
      expect(toBoolean({})).toBeTruthy();
      expect(toBoolean(null)).toBeFalsy();
      expect(toBoolean(undefined)).toBeFalsy();
      expect(toBoolean(NaN)).toBeFalsy();
    });
  });

  describe(`.isTruthy()`, () => {
    it(`returns true only for truthy values`, () => {
      expect(isTruthy([])).toBeTruthy();
      expect(isTruthy({})).toBeTruthy();
      expect(isTruthy(``)).toBeFalsy();
      expect(isTruthy(`false`)).toBeTruthy();
      expect(isTruthy(0)).toBeFalsy();
    });
  });

  describe(`.coerceAndAdd()`, () => {
    it(`adds numbers safely after coercion`, () => {
      expect(coerceAndAdd(`2`, 3)).toEqual(5);
      expect(coerceAndAdd(`3.5`, `2.5`)).toEqual(6);
      expect(Number.isNaN(coerceAndAdd(`foo`, 1))).toBeTruthy();
    });
  });
});


