// Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.
function sumFibs(number) {
  let [a, b] = [0, 1];
  let sum = 0;

  while (number > 0) {
    [a, b] = [b, a + b];
    if (a % 2 === 0) {
      sum += a;
    }
    number -= 1;
  }
  return sum
}

sumFibs(7) === 2 // (0, 1, 1, 2, 3, 5);
sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)