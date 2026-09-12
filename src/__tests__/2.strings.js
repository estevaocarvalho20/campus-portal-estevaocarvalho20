import { capitalize, splitString, reverseString } from '../2.strings';

describe(`2.strings`, () => {
  describe(`.capitalize()`, () => {
    it(`capitalize: should return the input in all-caps`, () =>
      expect(capitalize(`this is web game development`)).toEqual(`THIS IS WEB GAME DEVELOPMENT`));
  });

  describe(`.splitString()`, () => {
    it(`splitString: should divide a string into substrings and return an array`, () =>
      expect(splitString(`Jane,Doe,21`)).toEqual([ `Jane`, `Doe`, `21` ]));
    it(`splitString: should divide a string into substrings and return an array`, () =>
      expect(splitString(`Jane-Doe-21`, `-`)).toEqual([ `Jane`, `Doe`, `21` ]));
  });

  describe(`.reverseString()`, () => {
    it(`reverses 'abc' to 'cba'`, () => expect(reverseString(`abc`)).toEqual(`cba`));
    it(`reverses 'sretcarahc fo gnirts a ma i' to 'i am a string of characters'`, () =>
      expect(reverseString(`sretcarahc fo gnirts a ma i`)).toEqual(`i am a string of characters`));
    it(`reverses 'amanaP :lanac a ,nalp a ,nam A' to 'A man, a plan, a canal: Panama'`, () =>
      expect(reverseString(`amanaP :lanac a ,nalp a ,nam A`)).toEqual(`A man, a plan, a canal: Panama`));
  });
});
