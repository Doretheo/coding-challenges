/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;


var kthToLastNode = (k, head) => {
  let pointer = head;
  let count = 0;
  while (pointer.next) {
    pointer = pointer.next;
    count++;
  };

  let pointer = head;
  while (pointer.next && count - k + 1 > 0) {
    pointer = pointer.next;
    count--;
  }
  return pointer.value;
}


// function kthToLastNode(k, head) {
//   var storage = head
//   var count = 0
//   while (storage.next) {
//     count++
//     storage = storage.next
//   }
//   var storage = head
//   while (storage.next && (count - k + 1) > 0) {
//     count--
//     storage = storage.next
//   }
//   return storage.value

// }

// console.log(kthToLastNode(2, a))