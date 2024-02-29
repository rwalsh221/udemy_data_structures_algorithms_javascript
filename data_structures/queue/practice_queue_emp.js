// ENQUEUE - DEQUEUE

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = newNode(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.first = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.first === null) {
      return undefined;
    }
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}
