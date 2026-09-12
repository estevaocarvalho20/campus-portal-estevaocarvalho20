/**
 * 🎓 Campus Portal: Utility Functions Module
 *
 * Real-world scenario: The portal needs many small utility functions for
 * common tasks like greeting users, calculating totals, and handling
 * variable arguments. Understanding default parameters and rest parameters
 * is essential for writing flexible, reusable functions.
 */

/**
 * greet: Generate personalized welcome messages with fallback
 *
 * 💼 Real-world uses:
 * - Dashboard: "Hello, Jane!" or "Hello, World!" if not logged in
 * - Email templates: personalized vs generic greetings
 * - Chat bot: "Hello, Student!" when name unknown
 * - Notification banners: customized welcome back messages
 *
 * Examples:
 * - greet("Alice") => "Hello, Alice!"
 * - greet() => "Hello, World!" (default parameter kicks in)
 * - greet("") => "Hello, !" (empty string is still a value!)
 * - greet(null) => "Hello, null!" (null doesn't trigger default!)
 *
 * 💡 Hints:
 * - Use ES6 default parameter syntax: function greet(name = "World")
 * - Default only applies when parameter is undefined
 * - Template literals make string building cleaner
 *
 * ⚠️ Note: Default parameters only trigger for undefined,
 * not for null, empty string, or other falsy values!
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
function greet(name = `World`) {
  return `Hello, ${name}!`;
}

/**
 * sumAll: Calculate total from any number of arguments
 *
 * 💼 Real-world uses:
 * - Calculate total fees: sumAll(tuition, lab, parking, health)
 * - Add multiple scholarships: sumAll(merit, need, athletic)
 * - Sum varying cart items: sumAll(29.99, 15.50, 7.25, 100)
 * - Aggregate scores: sumAll(quiz1, quiz2, midterm, final)
 *
 * Examples:
 * - sumAll(1, 2, 3) => 6
 * - sumAll(100, 50, 25, 25) => 200
 * - sumAll() => 0 (no arguments = zero total)
 * - sumAll(5) => 5 (single value)
 *
 * This demonstrates rest parameters (...args) which collect
 * all arguments into an array - perfect for flexible functions!
 *
 * 💡 Hints:
 * - Use rest parameter syntax: function sumAll(...nums)
 * - nums becomes an array of all arguments passed
 * - Use reduce to sum the array: nums.reduce((a, b) => a + b, 0)
 * - The 0 initial value handles the empty array case
 *
 * 🎯 Pro tip: Rest parameters must be the last parameter and
 * collect all remaining arguments into an array.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */
function sumAll(...nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    return nums.reduce((total, current) => total + current, 0);
  }
}

export {
  greet,
  sumAll,
};
