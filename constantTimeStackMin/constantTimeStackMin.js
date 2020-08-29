/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
var example = new Stack()
 example.push(4)
 example.push(3)
 example.min() === 3
 example.push(3)
 example.push(2)
 example.push(2)
 example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  this.order = {};
  this.counter = 0;
  this.newCounter = 0;
  this.smallest = [];
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  this.order[this.counter] = value;
  this.counter++;

  if (this.smallest.length === 0) {
    this.smallest.push(value);
  } else if (this.smallest[0] > value) {
    return this.smallest[0] = value;
  }
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  var removingIndex = this.newCounter;
  delete this.order[removingIndex];
  return this.newCounter++, this.counter--;
}

// return the number of items in the stack
Stack.prototype.size = function() {
  return counter;
}

// return the minimum value in the stack
Stack.prototype.min = function() {
  return this.smallest[0];
}

// to create a constant time, I should use an object