// Task 12 - Reverse a Linked List In Place

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
