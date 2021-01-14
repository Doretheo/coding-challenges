/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{5: 1}, {5: 2}, {4: 3}]


// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.

//input: array -> object that contains key = i, value = {value: num} -> object that contains value: num
// {value: {value: num}, i: num}

var testingTransform = function(array) {
  var transform = [];

  if (array.length < 2) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

var insertionSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.
  var sorted = [];

  if (array.length < 2) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    // set the outer obj to equal each object in the array
    let outerObj = array[i];
    // set the inner obj to each value (key) object
    let innerObj = outerObj.value;
    // grab the value's property, which is a number, and push into a new object at that value index
    let order = innerObj.value;
    // console.log(outerObj, innerObj, order)

    sorted[order] = innerObj;
  }
  // check to see if there are empty spaces
  // filter all empty spaces from the result
  var filtered = sorted.filter(function(object) {
    return object !== undefined;
  })
  // return the new array of objects
  return filtered;
};
// debugger;
insertionSort(testingTransform([{value: 2}, {value: 1}, {value: 3}]))

var insertionSort = (array) => {

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      for (let j = 0; j <= i; j++) {
        let temp = array[j];
        if (temp <= next) {
          array[j] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
  }
  return array;
}