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
    let pre = null;
    let temp = this.head;

    while (temp.next) {
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
    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    if (this.head === null) {
      this.tail = null;
    }
    this.length -= 1;
    return temp;
  }

  get(index) {
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    if (index < 0 || index >= this.length) {
      return undefined;
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
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index < 0 || index > this.length) {
      return undefined;
    }

    const nodeAtIndex = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = nodeAtIndex.next;
    nodeAtIndex.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const nodeAtIndex = this.get(index);
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

    let pre = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;
      temp = next;
    }
    return this;
  }
}
