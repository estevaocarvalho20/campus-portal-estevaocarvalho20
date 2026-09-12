/**
 * 🎓 Campus Portal: Form Input Processing Module
 *
 * Real-world scenario: HTML forms always submit data as strings, even for
 * numbers and checkboxes. The portal must intelligently convert these values
 * for database storage and calculations. Understanding JavaScript's type
 * system and coercion rules is crucial for handling user input safely.
 */

/**
 * typeOfValue: Identify the data type of form inputs for validation
 *
 * 💼 Real-world uses:
 * - Validate API responses: Is the student ID a string or number?
 * - Debug form submissions: Why is the GPA calculating incorrectly?
 * - Type checking before database operations
 * - Logging and error reporting: "Expected number, got string"
 *
 * ⚠️ JavaScript quirks to remember:
 * - typeof null === "object" (historical bug, kept for compatibility)
 * - typeof [] === "object" (arrays are objects)
 * - typeof NaN === "number" (NaN is a numeric value!)
 * - typeof undefined === "undefined"
 *
 * 💡 Hint: Just use the typeof operator and return its result
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
function typeOfValue(value) {
  const result = typeof value;
  return result;
}

/**
 * toNumber: Convert form input strings to numbers for calculations
 *
 * 💼 Real-world uses:
 * - Convert GPA input: "3.85" → 3.85
 * - Process credit hours: "15" → 15
 * - Handle checkbox values: true → 1, false → 0
 * - Parse age from registration: "21" → 21
 *
 * Number() coercion rules:
 * - "42" → 42 (numeric string)
 * - "  10 " → 10 (trims whitespace!)
 * - "" → 0 (empty string becomes zero)
 * - true → 1, false → 0 (boolean conversion)
 * - null → 0 (null becomes zero)
 * - undefined → NaN (undefined fails)
 * - "hello" → NaN (non-numeric string)
 *
 * 💡 Hint: Use the Number() constructor function (not 'new Number()')
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
function toNumber(value) {
  const result = Number(value);
  return result;
}

/**
 * toBoolean: Convert form values to booleans for database flags
 *
 * 💼 Real-world uses:
 * - Checkbox states: "on"/"off", "yes"/"no", "1"/"0"
 * - Feature flags: student.hasScholarship, course.isOnline
 * - Permissions: user.canRegister, user.isActive
 * - Filters: showGraduateCoursesOnly, includeWaitlisted
 *
 * JavaScript's falsy values (become false):
 * - false, 0, -0, 0n, "", null, undefined, NaN
 *
 * Everything else is truthy (becomes true):
 * - "0" (string with zero - this surprises many!)
 * - "false" (non-empty string)
 * - [] (empty array)
 * - {} (empty object)
 * - Any non-zero number
 *
 * 💡 Hint: Use Boolean() or the !! double negation trick
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */
function toBoolean(value) {
  const result = Boolean(value);
  return result;
}

/**
 * isTruthy: Validate if form inputs have meaningful values
 *
 * 💼 Real-world uses:
 * - Check if optional fields were filled: isTruthy(middleName)
 * - Validate search queries: isTruthy(searchTerm) before querying
 * - Default value chains: displayName || firstName || "Student"
 * - Filter empty inputs: formValues.filter(isTruthy)
 *
 * Common gotchas in forms:
 * - Empty string "" is falsy (blank input field)
 * - Zero 0 is falsy (might be valid input like floor 0!)
 * - String "0" is truthy (text input of zero)
 * - Empty arrays [] are truthy (might expect false)
 *
 * 💡 Hint: Return true if the value would pass an if statement
 * You can use: return Boolean(value) or return !!value
 *
 * Reference: https://dorey.github.io/JavaScript-Equality-Table/
 */
function isTruthy(value) {
  return !!value;
}

/**
 * coerceAndAdd: Add form values with automatic type conversion
 *
 * 💼 Real-world uses:
 * - Sum scholarship amounts: "1000" + "500" = 1500 (not "1000500"!)
 * - Calculate total credits: "3" + "4" = 7
 * - Add fees from different forms: tuitionField + feesField
 * - Handle mixed input types gracefully without crashing
 *
 * ⚠️ Key difference from safeAdd:
 * - safeAdd: Throws errors for invalid inputs (strict validation)
 * - coerceAndAdd: Returns NaN for invalid inputs (graceful degradation)
 *
 * Examples:
 * - coerceAndAdd("100", "50") → 150
 * - coerceAndAdd("abc", 10) → NaN (doesn't crash!)
 * - coerceAndAdd(true, false) → 1 (1 + 0)
 *
 * 💡 Hints:
 * - Convert both inputs to numbers first
 * - Then add them normally
 * - NaN + anything = NaN (propagates automatically)
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
 */
function coerceAndAdd(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  const result = numA + numB;
  if (isNaN(result)) {
    return NaN;
  }
  else
    return result;
}

export {
  typeOfValue,
  toNumber,
  toBoolean,
  isTruthy,
  coerceAndAdd,
};


