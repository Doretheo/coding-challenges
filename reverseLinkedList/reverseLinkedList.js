var ListNode = (value) => {
  this.val = value;
}

var reverseList = (list) => {
  let prev = null;
  while (head) => {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}