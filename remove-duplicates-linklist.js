class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var deleteDuplicates = function (head) {
  let current = head;
  if (!current) {
    return head;
  }

  while (current) {
    if (current.next !== null && current.val === current.next.val) {
      console.log("first");
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

var removeElements = function (head, val) {
  let current = head;
  if (!head) {
    return head;
  }
  while (head && head.val === val) {
    head = head.next;
  }
  while (current) {
    if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

console.log(
  removeElements(
    new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))),
    2
  )
);
console.log(
  removeElements(
    new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7)))),
    7
  )
);
// console.log(
//   deleteDuplicates(
//     new ListNode(
//       1,
//       new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
//     )
//   )
// );
