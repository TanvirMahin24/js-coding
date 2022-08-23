class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ans = null;
  let tmp = null;
  while (l1 || l2 || carry > 0) {
    let sum = 0;
    if (l1) {
      sum += l1.val;

      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (carry > 0) {
      sum += carry;
    }

    if (!ans) {
      ans = new ListNode(sum % 10);
      tmp = ans;
    } else {
      tmp.next = new ListNode(sum % 10);
      console.log(sum % 10);
      tmp = tmp.next;
      carry = 0;
    }
    if (sum > 9) {
      carry = 1;
      sum = 0;
    }
  }

  return ans;
};

console.log(
  addTwoNumbers(
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    ),
    new ListNode(9, new ListNode(9, new ListNode(9)))
  )
);
