// Map Practice
// Map takes an Array and applies something to each item in the array.
// Map does not mutate the original array, but instead returns an entirely new array.
// Try using Array Item sharing to improve performance.

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const mappedArray = newArray.map(
  (item) => item * 2
);

const reducedArray = newArray.reduce(
  (total, item) => total = total + item,
0);

// Read https://medium.freecodecamp.org/reduce-f47a7da511a9
