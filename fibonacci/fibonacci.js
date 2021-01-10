/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
* nthFibonacci(0); -> 0
* nthFibonacci(1); -> 1
* nthFibonacci(2); -> 1
* nthFibonacci(3); -> 2
* nthFibonacci(4); -> 3
* Try to use recursion. What is the time complexity? Are you repeating the same function call with the
* same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
* made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
* performance difference.
*/

var fibonacci = (num, obj = { "0": 0, "1": 1 }, count = 1) => {
  let [a,b] = Object.values(obj);
  while (num > 0) {
    [a,b] = [b, a + b];
    num -= 1;
  }
  return a;
}

var fibonacci = (num, obj = { "0": 0, "1": 1 }, count = 1) => {
  if (obj[num] === undefined) {
    obj[num] = obj[num - 1] + obj[num - 2];
  }
  return obj[num];
}