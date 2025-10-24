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
