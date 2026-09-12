/**
 * 🎓 Campus Portal: Decision Logic Module
 * 
 * Real-world scenario: The portal makes many decisions based on rules and
 * conditions - determining eligibility, calculating standings, applying
 * discounts, and routing students to appropriate resources.
 */

/**
 * fizzBuzz: Classic programming exercise adapted for student classification
 * 
 * 💼 Real-world parallel - Student Standing Classification:
 * Imagine this determines special program eligibility based on credit hours:
 * - Divisible by 3: Eligible for "Co-op Program" (fizz)
 * - Divisible by 5: Eligible for "Honor Society" (buzz) 
 * - Divisible by both: Eligible for "Dean's List" (fizzbuzz)
 * - Otherwise: Regular standing (return the number)
 * 
 * Actual uses of similar logic:
 * - Determining course prerequisites met
 * - Calculating scholarship tiers
 * - Assigning registration priority groups
 * - Batch processing student IDs for various programs
 * 
 * Requirements:
 * - Check divisibility by 3 and 5 (remember order matters!)
 * - Return appropriate string or number
 * - Handle invalid inputs by returning false
 * 
 * 💡 Hints:
 * - Use the modulo operator (%) to check divisibility
 * - Check for fizzbuzz (divisible by both) FIRST
 * - Use typeof to validate the input is a number
 * - Remember: n % 3 === 0 means n is divisible by 3
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function fizzBuzz(num) {
  return;
}

/**
 * inRangeInclusive: Check if a value falls within an allowed range
 * 
 * 💼 Real-world uses:
 * - Credit hours validation: Is 18 credits within the 12-21 allowed range?
 * - GPA requirements: Is 3.2 GPA within the 3.0-4.0 honors range?
 * - Age restrictions: Is student 18-25 for specific housing?
 * - Course numbers: Is IT3049 within 3000-3999 junior level?
 * - Scholarship amounts: Is $5000 within the $1000-$10000 range?
 * 
 * Examples:
 * - inRangeInclusive(15, 12, 18) → true (15 credits is valid)
 * - inRangeInclusive(12, 12, 18) → true (minimum is included)
 * - inRangeInclusive(18, 12, 18) → true (maximum is included)
 * - inRangeInclusive(21, 12, 18) → false (overload requires approval)
 * 
 * 💡 Hints:
 * - "Inclusive" means both endpoints are included
 * - Use >= for minimum and <= for maximum
 * - Combine conditions with && (logical AND)
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 */
function inRangeInclusive(value, min, max) {
  return;
}

/**
 * pickDefault: Select a value or fall back to default (|| operator demo)
 * 
 * 💼 Real-world uses:
 * - Display name: Show nickname || firstName || "Student"
 * - Credit hours: Use override || calculated || 3 (default)
 * - Theme preference: Use selected || saved || "light"
 * - API timeout: Use custom || config || 5000 (ms)
 * 
 * ⚠️ The || operator's gotcha:
 * It returns the first TRUTHY value, not just non-null/undefined
 * 
 * Problem scenarios with ||:
 * - Student floor: floor || 1 (but floor 0 is valid!)
 * - Discount percentage: discount || 10 (but 0% is valid!)
 * - Search query: query || "default" (but "" might be intentional!)
 * - Course credits: credits || 3 (but 0-credit seminars exist!)
 * 
 * Examples:
 * - pickDefault("Jane", "Unknown") → "Jane" (truthy)
 * - pickDefault("", "Unknown") → "Unknown" (empty string is falsy)
 * - pickDefault(0, 100) → 100 (zero is falsy - problematic!)
 * - pickDefault(false, true) → true (false is falsy)
 * 
 * 💡 Hint: Simply return value || defaultValue
 * 
 * 🎯 Modern alternative: The ?? (nullish coalescing) operator
 * only falls back for null/undefined, not all falsy values!
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */
// Example: show a preferred name, fall back to legal name when preferred name is empty
function pickDefault(value, defaultValue) {
  return;
}

export {
  fizzBuzz,
  inRangeInclusive,
  pickDefault
};


