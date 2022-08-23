class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var isPalindrome = function (head) {
  let check = true;

  let p1 = head;
  let p2 = null;

  while (p1) {
    p2 = new ListNode(p1.val, p2);
    p1 = p1.next;
  }

  console.log(p2);
  p1 = head;
  while (p1) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};

console.log(isPalindrome(new ListNode(2, new ListNode(1, new ListNode(2)))));
