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
}

const ll = new LinkedList();
ll.insertFirst(10);
ll.insertFirst(20);
ll.insertLast(50);

ll.printList();
