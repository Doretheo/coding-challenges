/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

// input: an array
// output: a sorted array
// edge cases: if the array is 1 or 0

var quicksort = function(array) {
  // create a midpoint value to be the pivot point
  var pivot = array[0];
  // create 1-2 copies of the array to store the halves
  var lessThan = [];
  var greaterThan = [];
  // create the base case: if array.length < 1, return
  if (array.length < 1) {
    return array;
  }


  array.forEach(function (num) {
    if (num < pivot) {
      pivot = num;
    }
  })
  // create a recursive function, takes in an array/value
    // iterate through the array
  for (var i = 1; i < array.length; i++) {
    // if the element is larger/smaller than the pivot
    if (array[i] === 'number') {
      continue;
    }
    // console.log(lessThan, greaterThan)
    if (array[i] <= pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  if (pivot < greaterThan[0]) {
    lessThan.push(pivot);
  } else if (pivot < lessThan[0]) {
    lessThan.unshift(pivot);
  }
    console.log(lessThan, greaterThan)
  // modify the original arrays
  var reiterate = function (arr, n) {

    if (n === 1) {
      return arr[i];
    }
    // iterate through the array
    for (var j = 0; j < arr.length; j++) {
      // if the element at the current index is larger than the next
      // swap the two arround
      let current = arr[j];
      let next = arr[j+1];

      if (next <= current) {
        arr[i+1] = current;
        arr[i] = next;
      } else {
        return reiterate(arr, n - 1);
      }
    }
  }

  // call the recursive function on both partitioned arrays
  reiterate(lessThan, lessThan.length - 1)
  reiterate(greaterThan, greaterThan.length - 1)
  // return the newly sorted array using the concat method
  return lessThan.concat(greaterThan);
};

var test = [1,5,2,8,0,7,3,9,4,3,3];
quicksort(test);
