// Task 11 - Detect a Cycle in a Linked List

function detectCycle(head) {
  if (head === null) {
    return false;
  }

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
