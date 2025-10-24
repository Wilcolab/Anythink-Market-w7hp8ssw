/**
 * Converts a string into kebab-case format.
 * Handles spaces, underscores, hyphens, and camelCase input.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If the input is not a string.
 */
function toKebabCase(input) {
  // Step 1: Validate input type
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return input
    // Step 2: Trim leading and trailing whitespace
    .trim()
    // Step 3: Convert camelCase to kebab-case by inserting hyphen before uppercase letters
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Step 4: Replace spaces, underscores, and multiple hyphens with a single hyphen
    .replace(/[\s_\-]+/g, '-')
    // Step 5: Convert the entire string to lowercase
    .toLowerCase();
}

console.log(toKebabCase("first name"));       // "first-name"
console.log(toKebabCase("user_id"));          // "user-id"
console.log(toKebabCase("screenName"));       // "screen-name"
console.log(toKebabCase("  API_Response  ")); // "api-response"