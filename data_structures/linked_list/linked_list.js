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
  // RETURN NODE AT INDEX
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.head;
    }
    let nodeHead = this.head;
    for (let i = 0; i < index; i += 1) {
      nodeHead = nodeHead.next;
    }

    return nodeHead;
  }
  //   CHANGE NODE VALUE AT INDEX
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  //   INSERT NODE AT INDEX
  insert(index, value) {
    // ADD TO BEGINING
    if (index === 0) {
      return this.unshift(value);
    }
    // ADD TO END
    if (index === this.length) {
      return this.push(value);
    }
    // OUT OF RANGE
    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length += 1;
    return true;
  }
  //   REMOVE NODE AT INDEX AND RETURN NODE
  remove(index) {
    // REMOVE FROM BEGINING
    if (index === 0) {
      return this.shift();
    }
    // REMOVE FROM END
    if (index === this.length - 1) {
      return this.pop();
    }
    // OUT OF RANGE
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    const pre = this.get(index - 1);
    const temp = pre.next;

    pre.next = temp.next;
    temp.next = null;

    this.length -= 1;
    return temp;
  }

  reverse(k) {
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;

    let tempHeadNext = tempHead.next;
    let tempHeadPrev = null;

    for (let i = 0; i < this.length; i++) {
      tempHeadNext = tempHead.next;
      tempHead.next = tempHeadPrev;
      tempHeadPrev = tempHead;
      tempHead = tempHeadNext;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(0);

console.log(myLinkedList.push(1));
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(3));
console.log(myLinkedList.push(4));

console.log(myLinkedList.push(5));
// console.log(myLinkedList.push(10));
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.unshift(8));
// console.log(myLinkedList.unshift(3));
// console.log(myLinkedList.get(5));
// console.log(myLinkedList.set(1, 2));
// console.log(myLinkedList.insert(1, 1));
// console.log(myLinkedList.remove(1));
console.log(myLinkedList);
console.log(myLinkedList.reverse());
// pop:
// edge case - empty or one item
