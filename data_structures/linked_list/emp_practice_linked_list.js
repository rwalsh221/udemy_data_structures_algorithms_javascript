// add/remove front/end, get,set,add/remove at index/ reverse
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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }

    let temp = this.head;
    let pre = this.head;

    for (let i = 0; i < this.length; i++) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

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

  shift() {
    if (this.head === null) {
      return undefined;
    }
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    const nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    const nodeAtIndex = this.get(index - 1);
    const temp = nodeAtIndex.next;

    nodeAtIndex.next = newNode;
    newNode.next = temp;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const nodeAtIndex = this.get(index - 1);
    const temp = nodeAtIndex.next;

    nodeAtIndex.next = temp.next;
    temp.next = null;
    this.length -= 1;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp;
    let pre = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
// myLinkedList.push(6);
myLinkedList.reverse();
console.log(myLinkedList);
// console.log(myLinkedList);
