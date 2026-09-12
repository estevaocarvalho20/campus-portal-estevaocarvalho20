/**
 * 🎓 Campus Portal: Course Management Module
 * 
 * Real-world scenario: Students manage their course schedules, administrators
 * handle rosters, and the system tracks prerequisites, waitlists, and degree
 * requirements. Arrays are fundamental for managing these ordered lists.
 */

/**
 * indexOf: Find the position of an item in a list
 * 
 * 💼 Real-world uses:
 * - Find student's position on waitlist: indexOf(waitlist, "M12345678")
 * - Locate course in degree plan: indexOf(requiredCourses, "IT3049C") 
 * - Check rank in dean's list: indexOf(topStudents, studentId)
 * - Find index for removal/update operations
 * 
 * Example: 
 * const schedule = ["IT2040C", "IT2053C", "IT3049C", "IT4063C"]
 * indexOf(schedule, "IT3049C") => 2 (third position, zero-indexed)
 * indexOf(schedule, "IT9999C") => -1 (not found)
 * 
 * 💡 Hint: Arrays have a built-in method for this!
 * Returns -1 if item is not found
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
function indexOf(arr, item) {
  return;
}

/**
 * sum: Calculate total from an array of numbers
 * 
 * 💼 Real-world uses:
 * - Total credit hours: sum([3, 4, 3, 1]) => 11 credits
 * - Calculate GPA points: sum([12, 16, 12, 4]) => 44 points
 * - Add up fees: sum([150, 75, 200, 50]) => $475
 * - Total attendance days: sum([28, 30, 28, 15]) => 101 days
 * 
 * 💡 Hints:
 * - Use a loop (for, for...of) to iterate through array
 * - Or use reduce() for a functional approach
 * - Initialize sum to 0 before adding
 * 
 * Example with reduce:
 * array.reduce((total, current) => total + current, 0)
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
function sum(arr) {
  return;
}

/**
 * filterOut: Remove a specific item from an array (returns new array)
 * 
 * 💼 Real-world uses:
 * - Drop a course: Remove "IT2053C" from schedule
 * - Remove graduated student from active roster
 * - Cancel waitlist entry after registration
 * - Remove revoked permission from access list
 * - Filter out completed requirements
 * 
 * ⚠️ Important: This should return a NEW array, not modify the original!
 * This is a key principle in functional programming and React state management.
 * 
 * Example:
 * const schedule = ["IT2040C", "IT2053C", "IT3049C"]
 * filterOut(schedule, "IT2053C") => ["IT2040C", "IT3049C"]
 * // Original schedule array is unchanged!
 * 
 * 💡 Hints:
 * - Use array.filter() method
 * - Return all items that DON'T match the item to remove
 * - filter() creates a new array automatically
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
function filterOut(arr, item) {
  return;
}

/**
 * append: Add an item to the end of an array (returns new array)
 * 
 * 💼 Real-world uses:
 * - Add course to schedule: append(schedule, "IT4083CW")
 * - Enroll new student in class roster
 * - Add to waitlist queue (FIFO - first in, first out)
 * - Add new requirement to degree program
 * 
 * ⚠️ Important: Return a NEW array with the item added!
 * Don't use push() as it modifies the original array.
 * 
 * 💡 Hints:
 * - Use spread operator: [...array, newItem]
 * - Or use concat(): array.concat(item)
 * - Both create new arrays without modifying the original
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function append(arr, item) {
  return;
}

/**
 * truncate: Remove the last item from an array (returns new array)
 * 
 * 💼 Real-world uses:
 * - Remove last added course (undo function)
 * - Remove most recent waitlist addition
 * - Trim overflow from limited-size list
 * - Remove latest transaction in rollback
 * 
 * ⚠️ Important: Return a NEW array without the last item!
 * Don't use pop() as it modifies the original array.
 * 
 * 💡 Hints:
 * - Use slice(0, -1) to get all but last element
 * - Or slice(0, array.length - 1)
 * - slice() creates a new array automatically
 * 
 * ⛔ Avoid: pop() modifies original, splice() modifies original
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
function truncate(arr) {
  return;
}

/**
 * concat: Merge two arrays into one (returns new array)
 * 
 * 💼 Real-world uses:
 * - Combine fall + spring schedules into full year
 * - Merge required + elective courses for degree audit  
 * - Combine multiple class rosters for large lecture
 * - Join waitlists when sections are merged
 * 
 * Example:
 * const fall = ["IT3049C", "IT3040C"]
 * const spring = ["IT4040C", "IT4080C"]
 * concat(fall, spring) => ["IT3049C", "IT3040C", "IT4040C", "IT4080C"]
 * 
 * 💡 Hints:
 * - Use array1.concat(array2)
 * - Or use spread: [...array1, ...array2]
 * - Both create a new array
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
function concat(arr1, arr2) {
  return;
}

/**
 * insert: Add an item at a specific position (returns new array)
 * 
 * 💼 Real-world uses:
 * - Insert prerequisite course at beginning of plan
 * - Add student to specific position in presentation order
 * - Insert high-priority course in registration queue
 * - Place transfer credit in correct semester
 * 
 * Example:
 * const courses = ["IT2040C", "IT3049C", "IT4040C"]
 * insert(courses, "IT3040C", 2) => ["IT2040C", "IT3049C", "IT3040C", "IT4040C"]
 *                                    (inserted at index 2)
 * 
 * ⚠️ Tricky: splice() modifies the original array AND returns removed items!
 * You need to work with a copy to avoid mutation.
 * 
 * 💡 Hints:
 * - Make a copy first: [...array] or array.slice()
 * - Then use splice on the copy: copy.splice(index, 0, item)
 * - splice(index, 0, item) inserts without removing
 * - Return the modified copy, not splice's return value!
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */
function insert(arr, item, index) {
  return;
}

/**
 * square: Transform array by squaring each number (returns new array)
 * 
 * 💼 Real-world uses:
 * - Calculate weighted grades: [90, 85, 92] => [8100, 7225, 8464]
 * - Compute variance in statistics: square differences from mean
 * - Generate unique space IDs: [2, 3, 4] => [4, 9, 16] square feet
 * - Transform data for quadratic scoring algorithms
 * 
 * This demonstrates the map() function - one of the most important
 * array methods in modern JavaScript and React development!
 * 
 * Example: [1, 2, 3, 4] => [1, 4, 9, 16]
 * 
 * 💡 Hints:
 * - Use array.map() to transform each element
 * - map() takes a function: map(item => item * item)
 * - Or: map(item => Math.pow(item, 2))
 * - map() automatically returns a new array
 * 
 * 🎯 Pro tip: map() is perfect when you need to transform
 * every element in an array to create a new array of the same length
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
function square(arr) {
  return;
}

export {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};


