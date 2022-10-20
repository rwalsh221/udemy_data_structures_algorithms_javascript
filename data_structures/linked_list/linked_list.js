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
  //   ADD NODE TO END OF LINKED LIST
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
    this.length += 1;
    return this;
  }

  //   REMOVE NODE FROM END OF LINKED LIST AND RETURN NODE
  pop() {
    // IF LINKED LIST IS EMPTY
    if (this.head === null) {
      return undefined;
    }

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;

    // IF LINKED LIST ONLY CONTAINED ONE ITEM
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //   ADD NODE TO BEGINNING OF LINKED LIST
  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }
  // REMOVE NODE FROM BEGINNING OF LINKED LIST AND RETURN NODE
  shift() {
    if (this.head === null) {
      return undefined;
    }
    const currentHead = this.head;
    this.head = this.head.next;
    currentHead.next = null; // needed to break the connection to rest of linked list
    this.length -= 1;
    if (this.length === 0) {
      //   if linked list had one NODE this.head would already be pointing to null as last NODE has a NEXT of null
      this.tail = null;
    }
    return currentHead;
  }
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList.push(5));
console.log(myLinkedList.push(10));
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
console.log(myLinkedList.unshift(8));
console.log(myLinkedList.shift());
console.log(myLinkedList.shift());
console.log(myLinkedList.shift());
console.log(myLinkedList.shift());
console.log(myLinkedList.shift());
console.log(myLinkedList.shift());

// pop:
// edge case - empty or one item
