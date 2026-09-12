/**
 * 🎓 Campus Portal: Text Processing Module
 *
 * Real-world scenario: The portal displays student information in various formats:
 * ID badges, transcripts, emails, and directory listings. These functions handle
 * the text transformations needed throughout the system.
 */

/**
 * capitalize: Convert text to uppercase for official documents
 *
 * 💼 Real-world uses:
 * - Student ID badges: "john doe" → "JOHN DOE"
 * - Course codes in transcripts: "it3049c" → "IT3049C"
 * - Building codes on maps: "rhodes hall" → "RHODES HALL"
 * - Legal document headers requiring all-caps formatting
 *
 * Example: capitalize("jane doe, class of 2025") => "JANE DOE, CLASS OF 2025"
 *
 * 💡 Hint: JavaScript strings have a built-in method for this!
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
function capitalize(str) {
  const capitalizedStr = str.toUpperCase();
  return capitalizedStr;
}

/**
 * splitString: Parse CSV data and delimited inputs
 *
 * 💼 Real-world uses:
 * - Import student rosters from CSV: "Jane,Doe,Computer Science,2025"
 * - Parse form inputs with multiple values: "IT3049C;IT4080C;IT4083CW"
 * - Extract email parts: "jane.doe@mail.uc.edu" (split at '@')
 * - Process batch student IDs: "M12345678|M87654321|M11223344"
 *
 * Example: splitString("Jane,Doe,3.85,2025", ",") => ["Jane", "Doe", "3.85", "2025"]
 *
 * ⚠️ Note: The splitAt parameter has a default value of comma
 * This mirrors real CSV processing where comma is the standard delimiter
 *
 * 💡 Hints:
 * - Use the string.split() method
 * - The second parameter uses ES6 default parameter syntax
 * - Consider how this would handle empty values: "Jane,,Doe"
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */
function splitString(str, splitAt = `,`) {
  const result = str.split(splitAt, 2);
  return result;
}

/**
 * reverseString: Reverse text for various portal features
 *
 * 💼 Real-world uses:
 * - Simple CAPTCHA generation: "REGISTER" → "RETSIGER"
 * - Palindrome checking for usernames: is "racecar" valid?
 * - Encoding student IDs for URLs: "M12345678" → "87654321M"
 * - Creating mirror text effects in digital certificates
 * - Data obfuscation for temporary tokens (not for security!)
 *
 * Example: reverseString("UNIVERSITY") => "YTISREVINU"
 *
 * 💡 Implementation hints - combine these three steps:
 *    1. string.split('') - converts string to array of characters
 *    2. array.reverse() - reverses the array in place
 *    3. array.join('') - combines array back into string
 *
 * 🎯 Pro tip: This can be done in one line by chaining methods!
 *
 * ⚠️ Unicode consideration: This simple approach doesn't handle
 * emojis or special characters perfectly, but works for basic ASCII
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
function reverseString(str) {
  const reversedStr = str.split(``).reverse().join(``);
  return reversedStr;
}

export {
  reverseString,
  capitalize,
  splitString
};
