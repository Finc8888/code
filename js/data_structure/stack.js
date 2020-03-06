class StackNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.root = null;
        this.n = 0;
    }
    isEmpty(){
        return this.n === 0;
    }
    size(){
        return this.n;
    }
    push(value){
        let firstOld = this.root;
        this.root = new StackNode(value);
        this.root.next = firstOld;
        this.n ++;
    }
    pop(){
        if(this.isEmpty()) return null;
        let firstOld = this.root;
        this.root = firstOld.next;
        this.n --;
        return firstOld.value;
    }
}
let myStack = new Stack();
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
myStack.push(1);
myStack.push(true);
myStack.push(false);
myStack.push(10);
myStack.push('21');
myStack.push({one:1});
console.log(`myStack - ${myStack}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`pop - ${myStack.pop().value}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`myStack - ${myStack}`);
