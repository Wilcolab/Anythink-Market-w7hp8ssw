function toCamelCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Normalize input: trim, lowercase, and split by common delimiters
  const words = input
    .trim()
    .toLowerCase()
    .split(/[\s_\-]+/)  // split by space, underscore, or hyphen

  if (words.length === 0) return '';

  // Capitalize all words except the first
  const camelCased = words.map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return camelCased.join('');
}
