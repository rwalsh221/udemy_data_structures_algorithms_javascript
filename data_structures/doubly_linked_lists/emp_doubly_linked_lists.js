// add/remove front/end, get,set,add/remove at index/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    const temp = this.tail;
    this.tail = temp.prev;
    temp.prev = null;

    this.length -= 1;
    if (this.length === 0) {
      this.head === null;
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

    const temp = this.head;

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
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

    let temp;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    const nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.value = value;
      return true;
    }
    return undefined;
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

    const newNode = new Node(value);
    const nodeAtIndex = this.get(index - 1);

    newNode.next = nodeAtIndex.next;
    newNode.prev = nodeAtIndex;
    nodeAtIndex.next.prev = newNode;
    nodeAtIndex.next = newNode;

    this.length += 1;
    return this;
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

    nodeAtIndex.prev.next = nodeAtIndex.next;
    nodeAtIndex.next.prev = nodeAtIndex.prev;
    nodeAtIndex.next = null;
    nodeAtIndex.prev = null;
    this.length -= 1;
    return nodeAtIndex;
  }
}
