/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

(1 * £1) + (1 * 50p) + (2 * 20p) + (1 * 5p) + (1 * 2p) + (3 * 1p)
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  // create an object or array to hold the coin values
  // let coins = {
  //   '1p': 1,
  //   '2p': 2,
  //   '5p': 5,
  //   '10p': 10,
  //   '20p': 20,
  //   '50p': 50,
  //   '1': 100,
  //   '2': 200
  // }
  let coins = [1, 2, 3, 4, 5, 10, 20, 50, 100, 200]
  // create an array or counter to count the number of instances
  // let instances = [];
  let instances = 0
  let value = total;

  // create a recursive function
  var calculate = function(remainder, index) {
    // create a variable to track the current coin
    let coin = coins[index]; // 200 -> 100 -> 50 -> 20
    // base exit case
    // if the value is equal to 0, increment counter or add to instances
    if (value === 0) {
      // if true, increment/add
      return instances++;
    }
    // iterate through the array starting at the end
    // starting at the end will eliminate the early choices
    for (var i = coins.length - 1; i > 0; i--) {
      // subtract the total value from the coin
      // let coin = coins[i];
      if (coin > value) {continue};
      value -= coin;
      // call the recursive function with what inputs
      // in order to keep the current value, pass the value (total)
      // also pass the current coin we are adding to
      // if I decrement the coin's length and pass that as an index
      // I can linearly travel backwards up the array at each index
      return calculate(value, i)
    }
  }
  calculate(total, coins.length - 1)
  return instances;
};


