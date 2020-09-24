/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

// need to grab the functions passed into compose
// using call method can give me access to the other functions
var compose = function() {
  // separate the function parameters into an array to iterate over
  let functions = Array.prototype.slice.call(func);

  // return a function to call initial argument
  return ((args) => {
    // iterating from length to zero should iterate right to left
    for (var i = args.length; i >= 0; i--) {
      // grab the last indexed argument but using i
      // store the executed function's return value and return it
      let resolvedValue = functions[i](args)
    }
    return resolvedValue
  })
};

// seems like the opposite of compose, so switch the var i = 0 instead of end of length
var pipe = function() {
  // separate the function parameters into an array to iterate over
  let functions  = Array.prototype.slice.call(func);

  // return a function to call initial argument
  return ((args) => {
    // iterating from ZERO to LENGTH should iterate LEFT -> RIGHT
    for (var i = 0; i < args.length; i++) {
      // grab the last indexed argument but using i
      // store the executed function's return value and return it
      let resolvedValue = functions[i](args)
    }
    return resolvedValue
  })
};
