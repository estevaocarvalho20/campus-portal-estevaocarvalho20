/**
 * 🎓 Campus Portal: Financial Calculations Module
 *
 * Real-world scenario: The university's billing system needs to handle various
 * financial calculations for tuition, fees, and scholarships. These functions
 * ensure accuracy when dealing with money and prevent common JavaScript
 * floating-point issues.
 */

/**
 * safeAdd: Safely adds two monetary amounts with validation
 *
 * 💼 Real-world use: When calculating total charges (tuition + fees), we must
 * ensure both values are valid numbers to prevent billing errors. Invalid inputs
 * could come from corrupted database values or API errors.
 *
 * Example: safeAdd(3500.00, 250.50) // tuition + student fees = 3750.50
 *
 * ⚠️ Edge cases:
 * - Infinity values are allowed (for theoretical calculations)
 * - NaN, undefined, strings, and null should throw TypeError
 * - This prevents the common mistake of accidentally adding strings like "3500" + "250"
 *
 * 💡 Hints:
 * - Use typeof to check if arguments are numbers
 * - Use isNaN() to check for NaN values (NaN !== NaN)
 * - Remember: typeof NaN === 'number' (it's a special numeric value!)
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
 */
function safeAdd(num1, num2) {
  if (typeof num1 === `number` && typeof num2 === `number` && !isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    throw new TypeError(`Both arguments must be valid numbers.`);
  }
}
console.log(safeAdd(1, 2));


/**
 * parseStringAsInt: Convert string inputs to integers for credit hours
 *
 * 💼 Real-world use: Students enter credit hours in web forms as strings.
 * We need to extract the numeric value for registration validation and billing.
 *
 * Example scenarios:
 * - "15" → 15 (normal semester load)
 * - "12CR" → 12 (user accidentally included units)
 * - "12.5 credits" → 12 (fractional credits rounded down)
 * - "0x12" → 0 (reject hexadecimal to prevent exploits)
 *
 * ⚠️ Common pitfall: parseInt('0x12') returns 18 in hex!
 * Always specify the radix (base 10) to avoid security issues.
 *
 * 💡 Hints:
 * - parseInt() takes two parameters: string and radix
 * - Always use radix 10 for decimal numbers: parseInt(str, 10)
 * - This prevents "0x" prefixed strings from being interpreted as hexadecimal
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */
function parseStringAsInt (str) {
  const result = parseInt(str, 10);
  return result;
}

/**
 * addAndReturn2DecimalPlaces: Calculate and format monetary totals
 *
 * 💼 Real-world use: Financial systems must display amounts with exactly 2 decimal
 * places for currency. This function adds two amounts and returns the result
 * formatted for billing statements.
 *
 * Example: Student owes $1234.5678 + $567.8934 = $1802.46 (not $1802.4612)
 *
 * ⚠️ JavaScript floating-point gotcha:
 * - 0.1 + 0.2 = 0.30000000000000004 (not 0.3!)
 * - Always round monetary calculations to avoid display issues
 *
 * 💡 Hints:
 * - First add the numbers normally
 * - Use toFixed(2) to round to 2 decimal places (returns a string!)
 * - Convert back to number using Number() or parseFloat()
 * - Alternative: Math.round(sum * 100) / 100
 *
 * 🎯 The test expects a NUMBER, not a string!
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function addAndReturn2DecimalPlaces(num1, num2) {
  const sum = num1 + num2;
  const formattedSum = sum.toFixed(2);
  return parseFloat(formattedSum);
}

export {
  safeAdd,
  parseStringAsInt,
  addAndReturn2DecimalPlaces
};
