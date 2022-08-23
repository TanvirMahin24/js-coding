class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert in start
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert at last
  insertLast(data) {
    let tmp = this.head;
    let newNode = new Node(data);

    if (!tmp) {
      tmp = newNode;
    } else {
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = newNode;
    }

    this.size++;
  }

  // Print Linked list
  printList() {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
  }

  removeNodeFromNthPosition(n) {
    n--;
    let current = this.head;
    let count = 0;
    while (current) {
      // if list has no element
      if (this.head === null) {
        break;
      } else if (this.head.next === null && n === 0) {
        head = null;
      } else if (n === 0) {
        this.head = this.head.next;
        break;
      } else {
        if (count === n) {
          if (current.next !== null) {
            current.next = current.next.next;
            break;
          } else {
            current = null;
            break;
          }
        }
      }
      count++;
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(10);
ll.insertFirst(20);
//  ll.insertLast(50);
//  ll.insertLast(80);
// ll.insertLast(5);
ll.printList();
ll.removeNodeFromNthPosition(1);
ll.printList();
