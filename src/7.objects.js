/**
 * 🎓 Campus Portal: Student Profile Module
 * 
 * Real-world scenario: Every student in the portal has a profile object that
 * stores their information and provides methods for display formatting. This
 * object is used across the entire application - from the login welcome screen
 * to transcript generation.
 */

/**
 * personObject: Complete student profile with properties and methods
 * 
 * 💼 Real-world uses:
 * - Display on student ID card
 * - Welcome message after login
 * - Email signature generation  
 * - Transcript headers
 * - Directory listings
 * 
 * Required structure:
 * {
 *   first_name: "Jane",           // Student's first name
 *   last_name: "Doe",             // Student's last name  
 *   class_of: 2025,               // Graduation year (number)
 *   full_name() {...},            // Method returning "First Last"
 *   introduction() {...}          // Method returning intro message
 * }
 * 
 * The full_name method should:
 * - Use 'this' to access first_name and last_name
 * - Return them combined with a space: "Jane Doe"
 * 
 * The introduction method should:
 * - Call this.full_name() to get the full name
 * - Include this.class_of in the message
 * - Return something like: "Hello, my name is Jane Doe and I'm in the class of 2025"
 * 
 * 💡 Hints:
 * - Use 'this' keyword to reference the object's own properties
 * - Methods are just functions stored as object properties
 * - Method shorthand: introduction() {...} instead of introduction: function() {...}
 * - Template literals make the introduction string easier
 * 
 * ⚠️ Common mistake: Arrow functions don't bind 'this' properly in methods!
 * Use regular function syntax or method shorthand.
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */
const personObject = {
  
};

export {
  personObject
};


