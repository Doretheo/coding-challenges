/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// input: a number
// output: an array of sequences
// constraints: none
// edge cases: input is 0;

// the number that will be passed in will be equal to 3^(number)
// similarly to factorial
// rockPaperScissors(1) = 3^1
// rockPaperScissors(2) = 3^2 = 9
// rockPaperScissors(3) = 3^3 = 27
// rockPaperScissors(4) = 3^4 = 81

var rockPaperScissors = function (number) {
  // pseudocode
  // create an container to hold the arrays
  var everyInstance = [];
  // create another array holding R, P, S
  var instance = ['R', 'P', 'S'];
  // create a for loop to iterate through and grab each letter at each index to add to an array
  var preInstance = '';
  // I NEED TO CREATE A RECURSIVE FUNCTION HERE ???
  for (var i = 0; i < instance.length; i++) {
    var current = instance[i];
    preInstance += current;
    // if the container array's length is less than input
  }
  if (preInstance.length < number) {
    // call the function variable again with the same number as the input
    rockPaperScissors(number);
  } else {
    everyInstance.push(preInstance);
  }

  if (everyInstance.length < Math.pow(3,number)) {
    rockPaperScissors(number);
  }
  // i need to call a recursive function after this if statement to bring me back to line 42
  // if indexOf presinstance is already inside everyInstance, increment the index
  return everyInstance;
};


