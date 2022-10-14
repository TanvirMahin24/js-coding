class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var deleteMiddle = function (head) {
  let current = head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }
  current = head;

  if (count === 1) {
    return null;
  }

  count /= 2;
  let i = 0;

  while (current) {
    i++;
    if (i === parseInt(count)) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return head;
};

// console.log(
//   deleteMiddle(
//     new ListNode(
//       1,
//       new ListNode(
//         3,
//         new ListNode(
//           4,
//           new ListNode(
//             7,
//             new ListNode(1, new ListNode(2, new ListNode(6, null)))
//           )
//         )
//       )
//     )
//   )
// );
console.log(deleteMiddle(new ListNode(1, new ListNode(2, null))));
// console.log(
//   deleteMiddle(
//     new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
//   )
// );
