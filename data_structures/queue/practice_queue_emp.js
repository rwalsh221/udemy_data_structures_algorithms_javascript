// ENQUEUE - DEQUEUE
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
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
    this.first = this.first.next;
    this.length -= 1;
    if (this.length === 0) {
      this.last = null;
    }
    return temp;
  }
}
