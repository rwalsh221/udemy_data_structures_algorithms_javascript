// add/remove front/end, get,set,add/remove at index/
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length -= 1;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }

    const mid = Math.floor(this.length / 2);

    let temp;
    if (index < mid) {
      temp = this.head;
      for (let i = 0; i < mid; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > mid; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    const nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.value = value;
      return nodeAtIndex;
    }
    return undefined;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const nodeAtIndex = this.get(index - 1);

    newNode.next = nodeAtIndex.next;
    nodeAtIndex.next.prev = newNode;

    newNode.prev = nodeAtIndex;
    nodeAtIndex.next = newNode;

    this.length += 1;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length - 1) {
      return undefined;
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
    temp.next.prev = nodeAtIndex;

    temp.next = null;
    temp.prev = null;

    this.length -= 1;

    return temp;
  }
}
