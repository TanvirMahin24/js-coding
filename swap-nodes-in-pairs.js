class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var swapPairs = function (head) {
  let current = head;
  let count = 0,
    tmp;

  while (current) {
    if (count % 2 === 0 && current.next) {
      tmp = current.val;
      current.val = current.next.val;
      current.next.val = tmp;
    }

    current = current.next;
    count++;
  }

  return head;
};

console.log(
  swapPairs(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
    )
  )
);
