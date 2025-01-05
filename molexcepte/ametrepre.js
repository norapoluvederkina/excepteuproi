function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Example usage
console.log(isNumeric('123')); // true
console.log(isNumeric('abc')); // false
