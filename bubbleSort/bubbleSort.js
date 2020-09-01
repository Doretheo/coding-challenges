/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.
// step 1: starting at the first element of an array and comparing it to the second element
// step 2: if the first element is greater than the second element, it swaps the two
// step 3: It then compares the second to the third, and the third to the fourth, and so on
// step 4: the largest values "bubble" to the end of the array. Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.

// input: takes an array
// output: sorted array
// edge cases: if the array is length of 0 or 1, return the array
// constraints: array greater than length of 0

// ANSWER: time complexity =

var bubbleSort = function(array) {
  // since they don't ask to modify exisiting or create new array, I will create a new one
  var sorted = [];
  // check the constraints
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }
  // set a variable to the first element/index MAYBE
//   let currentement = sorted[0];
//   let lastElement = sorted[sorted.length - 1];
  // use splice
  // iterate over the array
  sorted.push(array[0])
  for (var i = 1; i < array.length; i++) {
    let current = array[i];
    let last = array[array.length - 1];
    console.log(current, sorted, 'before');

  // if the second indexed element is > the first
  // if swapped, make sure to check the NEW second number to third

    if (current < sorted[0]) {
        sorted.unshift(current)
    } else if (current >= sorted[i]) {
        sorted.splice(i, 0, current);
    } else if (current >= sorted[sorted.length - 1]) {
        sorted.push(current);
    }
    console.log(current, sorted, 'after');
  }
  return sorted;
};

bubbleSort([1,4,5,6,7,2]);