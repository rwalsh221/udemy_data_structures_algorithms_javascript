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
    this.last = this.first;
    this.length += 1;
  }

  //   ADD TO END OF QUEUE
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

  //   REMOVE NODE FROM BEGINNING OF QUEUE AND RETURN NODE
  dequeue() {
    if (this.first === null) {
      return undefined;
    }
    const temp = this.first;
    if (this.length === 1) {
      this.first === null;
      this.last === null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}
