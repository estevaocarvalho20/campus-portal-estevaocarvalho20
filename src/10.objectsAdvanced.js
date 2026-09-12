/**
 * 🎓 Campus Portal: API Data Management Module
 * 
 * Real-world scenario: The portal integrates with multiple APIs (registration,
 * financial aid, housing) and needs to carefully manage data objects - merging
 * defaults with overrides, selecting specific fields for transmission, and
 * removing sensitive data before sending to external systems.
 */

/**
 * merge: Combine objects with override behavior
 * 
 * 💼 Real-world uses:
 * - Apply user preferences over system defaults
 * - Merge form updates with existing student record
 * - Combine base course info with section-specific details
 * - Override default config with environment settings
 * 
 * Example:
 * const defaults = { campus: "Main", credits: 3, online: false }
 * const custom = { credits: 4, online: true }
 * merge(defaults, custom) => { campus: "Main", credits: 4, online: true }
 * 
 * ⚠️ Later properties override earlier ones (right wins over left)
 * 
 * 💡 Hints:
 * - Use the spread operator: { ...objA, ...objB }
 * - Or use Object.assign({}, objA, objB)
 * - Both create a new object (don't modify originals!)
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function merge(objA, objB) {
  return;
}

/**
 * pick: Select specific fields from an object (whitelisting)
 * 
 * 💼 Real-world uses:
 * - Extract public fields for student directory: pick(student, ['name', 'major'])
 * - Select data for API payload: pick(form, ['username', 'email'])
 * - Create summary from full record: pick(transcript, ['gpa', 'credits'])
 * - Filter sensitive data for logging: pick(user, ['id', 'timestamp'])
 * 
 * Example:
 * const student = { id: "M123", name: "Jane", ssn: "123-45-6789", gpa: 3.8 }
 * pick(student, ['id', 'name']) => { id: "M123", name: "Jane" }
 * 
 * 💡 Hints:
 * - Create a new empty object
 * - Loop through the keys array
 * - Copy only those properties from source object
 * - Use bracket notation: result[key] = obj[key]
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
function pick(obj, keys) {
  return;
}

/**
 * omit: Remove specific fields from an object (blacklisting)
 * 
 * 💼 Real-world uses:
 * - Remove sensitive data before sending to frontend: omit(user, ['password', 'ssn'])
 * - Strip internal fields from API response: omit(record, ['_id', '_rev'])
 * - Clean data for export: omit(student, ['internalNotes', 'flags'])
 * - Prepare object for comparison: omit(obj, ['timestamp', 'uuid'])
 * 
 * Example:
 * const student = { id: "M123", name: "Jane", ssn: "123-45-6789", gpa: 3.8 }
 * omit(student, ['ssn']) => { id: "M123", name: "Jane", gpa: 3.8 }
 * 
 * 💡 Hints:
 * - Start with a copy of the entire object: { ...obj }
 * - Then delete unwanted keys: delete copy[key]
 * - Or build new object excluding those keys
 * - Remember to work with a copy!
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 */
function omit(obj, keys) {
  return;
}

/**
 * destructureUser: Format user info using destructuring syntax
 * 
 * 💼 Real-world uses:
 * - Generate profile summaries from user objects
 * - Create email signatures from employee records
 * - Build notification messages from event data
 * - Format display labels from database records
 * 
 * Destructuring is a core ES6 feature used everywhere in modern JavaScript,
 * especially in React components and API handlers!
 * 
 * Example:
 * const user = { first_name: "Jane", last_name: "Doe", age: 21 }
 * destructureUser(user) => "Jane Doe is 21"
 * 
 * 💡 Hints:
 * - Use parameter destructuring: function({ first_name, last_name, age })
 * - Or destructure inside function: const { first_name, last_name, age } = user
 * - Use template literals for the return string
 * - Destructuring extracts values directly from the object
 * 
 * 🎯 Pro tip: Destructuring can also rename and set defaults:
 * const { first_name: firstName = "Unknown" } = user
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
function destructureUser(user) {
  return;
}

export {
  merge,
  pick,
  omit,
  destructureUser,
};