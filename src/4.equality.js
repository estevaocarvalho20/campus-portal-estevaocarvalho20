/**
 * 🎓 Campus Portal: Data Comparison Module
 * 
 * Real-world scenario: The portal integrates with multiple systems (registration,
 * financial aid, housing) that may represent the same data differently. Student
 * IDs might be strings in one system and numbers in another. Understanding
 * JavaScript's two equality operators is crucial for data integrity.
 */

/**
 * strictEquality: Compare values with type checking (===)
 * 
 * 💼 Real-world uses:
 * - Verify password entries match exactly: password === confirmPassword
 * - Check user roles precisely: user.role === 'admin' (not 0 or false)
 * - Validate API tokens: token === expectedToken
 * - Compare course codes: selectedCourse === 'IT3049C'
 * 
 * Examples that return false with ===:
 * - 1 === "1" (number vs string - common with form inputs!)
 * - 1 === true (number vs boolean)
 * - null === undefined (both are "nothing" but different types)
 * - 0 === false (number vs boolean)
 * - "" === false (string vs boolean)
 * 
 * Examples that return true with ===:
 * - 1 === 1 (same type, same value)
 * - "hello" === "hello" (identical strings)
 * - true === true (identical booleans)
 * - null === null (null equals itself)
 * 
 * 💡 Hint: Use the === operator (triple equals)
 * 
 * 🎯 Best practice: Always use === unless you specifically need coercion
 * 
 * Reference: https://dorey.github.io/JavaScript-Equality-Table/
 */
function strictEquality(val1, val2) {
  return;
}

/**
 * looseEquality: Compare values with type coercion (==)
 * 
 * 💼 Real-world uses (use with caution!):
 * - Legacy system integration: studentId == "12345" (when ID might be string or number)
 * - Null/undefined checks: value == null (catches both null and undefined)
 * - Form validation: userAge == 18 (when age might come as "18")
 * - Database queries where types might vary
 * 
 * ⚠️ Surprising coercions with ==:
 * - 1 == true → true (true becomes 1)
 * - 0 == false → true (false becomes 0)  
 * - "" == false → true (both become 0)
 * - "1" == 1 → true (string converts to number)
 * - null == undefined → true (special case!)
 * - "0" == false → true (both become 0)
 * 
 * Safe comparisons with ==:
 * - 1 == 1 → true (no coercion needed)
 * - "hello" == "world" → false (strings compare directly)
 * - null == 0 → false (null doesn't coerce to 0 here!)
 * 
 * 💡 Hint: Use the == operator (double equals)
 * 
 * ⚠️ WARNING: Using == can lead to bugs! Modern JavaScript
 * style guides recommend === for most comparisons. The == operator
 * is mainly useful for checking null/undefined together.
 * 
 * Reference: https://dorey.github.io/JavaScript-Equality-Table/
 */
function looseEquality(val1, val2) {
  return;
}

export {
  strictEquality,
  looseEquality,
};

