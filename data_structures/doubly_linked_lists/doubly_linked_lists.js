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
  // ADD NODE TO END OF DOUBLY LINKED LIST
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
  // REMOVE NODE FROM END OF DOUBLY LINKED LIST AND RETURN NODE
  pop() {
    if (this.head === null) {
      return undefined;
    }
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length -= 1;
    return temp;
  }
  //   ADD NODE TO BEGINNING OF DOUBLY LINKED LIST
  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  // REMOVE NODE FROM BEGINNING OF DOUBLY LINKED LIST AND RETURN NODE
  shift() {
    if (this.head === null) {
      return undefined;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
  // RETURN NODE AT INDEX
  get(index) {
    if (index === 0) {
      return this.head;
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    // WITH LINKED LIST CAN START AT FRONT OR BACK AS NODE HAS PREV POINTER
    if (index < this.length / 2) {
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
    const newNode = new Node(value);

    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    let temp = this.get(index);
    let prevTemp = temp.prev;
    temp.prev = newNode;
    prevTemp.next = newNode;
    newNode.prev = prevTemp;
    newNode.next = temp;

    this.length += 1;
    return true;
  }

  //   REMOVE NODE AT INDEX AND RETURN NODE
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return false;
    }
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;

    temp.next = null;
    temp.prev = null;

    this.length -= 1;
    return temp;
  }

  swapFirstLast() {
    if (this.head === null) {
      return false;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = this.tail;
      this.tail = temp;
    } else {
      const next = this.head.next;
      const prev = this.tail.prev;

      this.head.next = this.tail.next;
      this.head.prev = this.tail.prev;
      prev.next = this.head;
      this.tail.next = next;
      this.tail.prev = null;
      next.prev = this.tail;

      this.head = this.tail;

      this.tail = temp;
    }
    return this;
  }

  logHead() {
    console.log(this.head);
  }

  logTail() {
    console.log(this.tail);
  }

  isPalindrome() {
    if (this.head === null) {
      return true;
    }
    if (this.length % 2 === 0) {
      return false;
    }
    let headTemp = this.head;
    let tailTemp = this.tail;

    for (let i = 0; i <= Math.floor(this.length / 2); i++) {
      console.log(headTemp);
      console.log(tailTemp);
      if (headTemp.value !== tailTemp.value) {
        return false;
      }

      headTemp = headTemp.next;
      tailTemp = tailTemp.prev;
    }

    return true;
  }
  // implement a member function called swapPairs() that swaps every two adjacent nodes of a doubly linked list.
  swapPairs1() {
    if (this.length < 2) {
      return undefined;
    }

    let temp = this.head;

    const newNode = new Node();
    newNode.next = this.head.next;
    this.head = newNode;

    let next = temp.next;
    console.log(temp);
    console.log(next);

    let prev = temp.prev;

    temp.next = next.next.next;
    temp.prev = next;

    next.next = temp;
    next.prev = prev;
    temp = temp.next;

    this.head = newNode.next;
    newNode.next = null;
    const swapNodes = (node) => {};
    // for (let i = 0; i < this.length; i++) {
    //   //maybe minus 1 of length
    //   console.log(next);
    //   const next = temp.next;
    //   // console.log(next);
    //   console.log(temp);
    //   const prev = temp.prev;
    //   if (temp.next) {
    //     temp.next = next.next;
    //     temp.prev = next;

    //     next.next = temp;
    //     next.prev = prev;
    //     temp = temp.next;
    //   }
    // }

    while (temp.next) {
      console.log('sadssdsa');
      console.log(temp);
      console.log(temp.prev);
      temp.prev = temp.prev.next;
      //maybe minus 1 of length
      next = temp.next;
      // console.log(temp);
      // console.log(next);

      prev = temp.prev;
      // console.log(prev);

      // console.log(temp.next);
      temp.next = next.next;
      temp.prev = next;
      // console.log(temp.next);
      // temp.prev.next = temp.next.next;

      next.next = temp;
      next.prev = prev;
      temp = temp.next;
      if (temp === null) {
        break;
      }
    }

    return this;
  }

  swapPairs() {
    if (this.length < 2) {
      return false;
    }

    let temp = this.head;
    this.head = temp.next;
    // const dummyNode = new Node(0);
    // dummyNode.next = this.head.next;
    // this.head = dummyNode;

    while (true) {
      if (temp === null || temp.next === null) {
        break;
      }

      let next = temp.next;
      let prev = temp.prev;

      if (prev) {
        prev.next = temp.next;
      }
      if (next.next === null) {
        temp.next = next.next;
      } else {
        temp.next = next.next;
        temp.next.prev = temp;
      }

      temp.prev = next;
      next.next = temp;
      next.prev = prev;
      temp = temp.next;
    }

    // this.head = dummyNode.next;
    // dummyNode.next = null;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
// console.log(myDoublyLinkedList.push(2));
// console.log(myDoublyLinkedList.push(3));
// console.log(myDoublyLinkedList.push(4));
// console.log(myDoublyLinkedList.push(7));
// console.log(myDoublyLinkedList.push(2));
// console.log(myDoublyLinkedList.push(1));
myDoublyLinkedList.shift();
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
// myDoublyLinkedList.push(5);

// myDoublyLinkedList.logHead();
// myDoublyLinkedList.logTail();
// console.log(myDoublyLinkedList.set(10, 99));
// console.log(myDoublyLinkedList.remove(1));
// console.log(myDoublyLinkedList.swapFirstLast());
// console.log(this.head);
console.log(myDoublyLinkedList.isPalindrome());
console.log(myDoublyLinkedList.swapPairs());
