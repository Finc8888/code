class StackNode{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}
class Stack{
    constructor(){
        this.n = 0;
        this.root = null;
    }
    isEmpty(){
        return this.n === 0;
    }
    size(){
        return this.n;
    }
    push(value){
        let oldFirst = this.root;
        this.root = new StackNode(value);
        this.root.next = oldFirst;
        this.n ++;
    }
    pop(){
        if(this.isEmpty()) return null;
        let oldFirst = this.root;
        this.root = oldFirst.next;
        this.n --;
        return oldFirst.value;
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
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`pop - ${myStack.pop()}`);
console.log(`isEmmpty - ${myStack.isEmpty()}`);
console.log(`Length of stack - ${myStack.size()}`);
console.log(`myStack - ${myStack}`);