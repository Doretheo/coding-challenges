/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  if (array.length < 1) {
    return 'No list';
  }
  // grab the list's length and grab the medium
  // set a counter at the medium's index
  let counter = Math.floor(array.length / 2)
  // create a recursive function to endlessly check till the element is found
  function splitSearch(shorterArray, index) {
    // create base cases: if the current element is = target, return the counter
    // if counter < 0 or > list length, return null
    if (index < 1 || index > array.length - 1) {
      return 'Out of bounds'
    } else if (shorterArray[index] === target) {
      return index
    }
    // loop through the sorted list
    for (var i = index; i < shorterArray.length - 1; ) {
      // splice the list from the beginning to medium
      let firstHalf = shorterArray.slice(0, i)
      let secondHalf = shorterArray.slice(i, shorterArray.length)
      // if medium > target
      if (shorterArray[i] > target) {
        splitSearch(firstHalf, Math.floor(((firstHalf.length - 1 ) / 2)))
        // if medium < target
      } else {
        // splice the list from medium to end of list
        splitSearch(secondHalf, Math.floor(((secondHalf.length - 1 ) / 2)))
      }
    }
  }
  // call the recursive function
  splitSearch(array, counter)
  // return null if nothing found at the end
  return 'None found';
};


