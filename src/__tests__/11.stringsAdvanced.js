import { toTitleCase, isEmail, templateGreet, padId, containsSubstring } from '../11.stringsAdvanced';

describe(`11.stringsAdvanced`, () => {
  it(`toTitleCase: capitalizes each word`, () =>
    expect(toTitleCase(`hello world from js`)).toEqual(`Hello World From Js`));

  it(`isEmail: basic validation`, () => {
    expect(isEmail(`user@example.com`)).toBeTruthy();
    expect(isEmail(`invalid@com`)).toBeFalsy();
    expect(isEmail(`no-at-symbol.com`)).toBeFalsy();
  });

  it(`templateGreet: formats with template literals`, () =>
    expect(templateGreet(`Sam`, 3)).toEqual(`Hello Sam, you have 3 new messages.`));

  it(`padId: pads with zeros`, () =>
    expect(padId(42, 5)).toEqual(`00042`));

  it(`containsSubstring: checks substring presence`, () => {
    expect(containsSubstring(`JavaScript`, `Script`)).toBeTruthy();
    expect(containsSubstring(`JavaScript`, `script`)).toBeFalsy();
  });
});


