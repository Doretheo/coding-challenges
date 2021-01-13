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
  // create a base case
  let swapped = true;
  // create a recursive function
  var swapping = function(current, next, collection) {
    if (array[current] > array[next]) {
      let temp = array[current];
      array[current] = array[next];
      array[next] = temp;
    }
    return collection;
  }
  // create base case, stop checking if the array is sorted
  while (swapped === true) {
    swapped = false;
    // iterate through the array
    for (var i = 0; i < array.length; i++) {
      // check if the current index is greater than the next
      if (array[i] > array[i+1]) {
        // if true, change swap to true and call the recursive function
        swapped = true;
        swapping(i, i+1, array);
      }
    }
  }
  // if false, return the array
  return array;
};

var bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([1,4,5,6,7,2,4,63,7,26,2,6,4,6]);
