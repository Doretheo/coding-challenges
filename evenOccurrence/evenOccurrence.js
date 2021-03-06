/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// input: array of numbers
// output: single number
// constraints: no odd occurrences
// edge cases: if the array is empty, if the array has less than 2 values

var evenOccurrence = (arr)  => {
  var objectCounter = {};

  if (arr.length < 2) {
    return null;
  }

  for(var i = 0; i < arr.length; i++) {
    ((objectCounter[arr[i]] === undefined) ? objectCounter[arr[i]] = 1 : objectCounter[arr[i]]++);
  }

  for (var numKey in objectCounter) {
    if (objectCounter[numKey] % 2 === 0) {
      if (numKey === 'number') {
        return parseInt(numKey);
      } else {
        return numKey;
      }
    }
  };
  return null;
};

var evenOccurrence = (arr) => {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = 1;
    } else {
      seen[arr[i]]++;
    }
  }

  for (let val in seen) {
    if (seen[val] % 2 === 0) {
      return seen[val];
    }
  }
}

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven);