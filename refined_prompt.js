/*
Prompt:
Write a JavaScript function called `toCamelCase` that converts a string into camelCase format.
The function should:
- Handle strings with spaces, underscores, or hyphens as word separators
- Normalize casing (e.g., "SCREEN_NAME" → "screenName")
- Trim extra whitespace and ignore empty segments
- Return a camelCase string
- Throw an error if the input is not a string

Example:
toCamelCase("user_id") → "userId"
toCamelCase("mobile-number") → "mobileNumber"
*/

function toCamelCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return input
    .trim()
    .toLowerCase()
    .split(/[\s_\-]+/)
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

/*
Function: toDotCase
Description:
  Converts a string into dot.case format.
  - Converts camelCase to dot.case
  - Replaces spaces, underscores, and hyphens with dots
  - Converts all characters to lowercase
  - Trims leading/trailing whitespace
  - Throws an error if input is not a string

Examples:
  toDotCase("first name")       → "first.name"
  toDotCase("user_id")          → "user.id"
  toDotCase("screenName")       → "screen.name"
  toDotCase("mobile-number")    → "mobile.number"
*/

function toDotCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return input
    .trim()
    // Convert camelCase to dot.case
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    // Replace spaces, underscores, and hyphens with dots
    .replace(/[\s_\-]+/g, '.')
    // Convert to lowercase
    .toLowerCase();
}

/**
 * Converts a string into camelCase format.
 *
 * @function toCamelCase
 * @param {string} input - The input string to convert. Accepts spaces, underscores, or hyphens as word separators.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase("user_id");        // "userId"
 * toCamelCase("mobile-number");  // "mobileNumber"
 * toCamelCase("SCREEN_NAME");    // "screenName"
 * toCamelCase("  full name  ");  // "fullName"
 *
 * @description
 * This function:
 * - Trims leading/trailing whitespace
 * - Converts the string to lowercase
 * - Splits on spaces, underscores, or hyphens
 * - Capitalizes each word after the first
 * - Joins the words into a single camelCase string
 */

/**
 * Converts a string into dot.case format.
 *
 * @function toDotCase
 * @param {string} input - The input string to convert. Can be camelCase or contain spaces, underscores, or hyphens.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toDotCase("first name");       // "first.name"
 * toDotCase("user_id");          // "user.id"
 * toDotCase("screenName");       // "screen.name"
 * toDotCase("mobile-number");    // "mobile.number"
 *
 * @description
 * This function:
 * - Trims leading/trailing whitespace
 * - Inserts dots between camelCase transitions
 * - Replaces spaces, underscores, and hyphens with dots
 * - Converts the entire string to lowercase
 */