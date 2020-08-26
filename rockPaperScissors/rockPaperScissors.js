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

var rockPaperScissors = function (num) {

  var choices = ['R', 'P', 'S'];

  var allCombos = [];

  function repeat (num, string) {
    if (num === 0) {
      allCombos.push(string);
    } else {
      for (var i = 0; i < choices.length; i++) {
        repeat(num - 1, string + choices[i]);
      }
    }
  }
  repeat(num, '');
  return allCombos;

};
