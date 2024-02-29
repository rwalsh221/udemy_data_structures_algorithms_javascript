class DoublyLinkedList {
  // Implement a member function called swapFirstLast() that swaps the first and last nodes of a doubly linked list.
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

  // Implement a member function called reverse() that reverses the nodes of a doubly linked list.
  reverse() {
    if (this.head === null) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;

      temp.next = temp.prev;
      temp.prev = next;
      temp = next;
    }
  }

  // Implement a member function called isPalindrome() that checks if a doubly linked list is a palindrome.
  isPalindrome() {
    if (this.head === null) {
      return false;
    }
    if (this.length % 2 === 0) {
      return false;
    }
    let headTemp = this.head;
    let tailTemp = this.tail;

    for (let i = 0; i <= Math.floor(this.length / 2); i++) {
      if (headTemp.value !== tailTemp.value) {
        return false;
      }

      headTemp = headTemp.next;
      tailTemp = tailTemp.prev;
    }

    return true;
  }

  // implement a member function called swapPairs() that swaps every two adjacent nodes of a doubly linked list.
  swapPairs() {
    if (this.length < 2) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      //maybe minus 1 of length
      const next = temp.next;
      const prev = temp.prev;
      temp.next = next.next;
      temp.prev = next;

      next.next = temp;
      next.prev = prev;
      temp = temp.next;
    }
    return this;
  }
}
