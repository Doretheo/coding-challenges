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

var coinSums = (total) => {
  let values = [1,2,5,10,20,50,100,200];
  let res = []
  let counter = 0;
  var makeChange = (index, remainder) => {
    let iteration = []
    let coin = values[index];

    if (index === 0) {
      remainder % coin === 0 && counter++;
      return res.push(iteration);
    }

    while (remainder >= 0) {
      makeChange(index - 1, remainder);
      iteration.push(coin);
      remainder -= coin;
    }
  }
  makeChange(values.length-1, total);

  return res;
}

var coinSums = (value) => {
  let values = [1,2,5,10,20,50,100,200];
  let counter = 0;

  var calculateChange = (remainder, index) => {
    if (index === 0) {
      return remainder % values[index] === 0 && counter++;
    }

    while (remainder >= 0) {
      calculateChange(remainder, index - 1)
      remainder -= values[index];
    }
  }
  calculateChange(value, values.length - 1)
  return counter;
}

coinSums(10)

