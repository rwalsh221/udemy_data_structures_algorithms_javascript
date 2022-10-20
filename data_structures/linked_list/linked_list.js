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
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList);
