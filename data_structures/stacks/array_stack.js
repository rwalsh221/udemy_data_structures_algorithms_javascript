class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

const sortStackTEST = (stack) => {
  if (stack.size() === 0) {
    return undefined;
  }
  console.log(stack);
  const tempStack = new Stack();
  const stackSize = stack.size();
  //   console.log(stack.pop());
  for (let i = 0; i < stackSize; i++) {
    console.log('parentLOOP' + i);
    console.log('PRINT STACK 1');
    stack.printStack();
    console.log('END');
    let min = stack.pop();
    console.log(min);
    for (let j = i + 1; j < stackSize; j++) {
      console.log('loop' + j);
      const temp = stack.pop();
      console.log(temp);
      if (temp < min) {
        console.log('temp is less' + temp + min);
        tempStack.push(min);
        min = temp;
      } else {
        tempStack.push(temp);
      }
    }
    console.log(min);
    stack.push(min);
    console.log('PRINT STACK 2');
    stack.printStack();
    console.log(tempStack.size());
    console.log('END');
    console.log('PRINT TEMPSTACK');
    tempStack.printStack();
    console.log('END TEMP');
    while (tempStack.size()) {
      stack.push(tempStack.pop());
    }
    console.log('PRINT STACK 3');
    stack.printStack();
    console.log('END');
  }
  return stack;
};

const sortStack = (stack) => {
  if (stack.size() === 0) {
    return undefined;
  }

  const tempStack = new Stack();
  const stackSize = stack.size();

  for (let i = 0; i < stackSize; i++) {
    let min = stack.pop();

    for (let j = i + 1; j < stackSize; j++) {
      const temp = stack.pop();

      if (temp > min) {
        tempStack.push(min);
        min = temp;
      } else {
        tempStack.push(temp);
      }
    }

    stack.push(min);

    while (tempStack.size()) {
      stack.push(tempStack.pop());
    }
  }
  return stack;
};

const newStack = new Stack();

newStack.push(4);
newStack.push(2);
newStack.push(1);
newStack.push(3);
newStack.push(-7);
// console.log(newStack);
console.log(sortStack(newStack));
