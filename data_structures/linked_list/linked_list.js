// creates a new node for linkedList
// const newNode = new Node(4)
// {
//     value:4
//     next: null
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length += 1;
    return this;
  }
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList.push(5));
