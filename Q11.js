/**
 * Stack class in JS
 */
class Stack {
    constructor() { 
        this.stack = []; 
    }
    /**
     * Pushes an item inot stack.
     * @param {Object} element 
     */
    push(element) {
        this.stack.push(element); 
    }

    /**
     * Pops element from stack.
     */
    pop() {
        if (this.isEmpty()) 
            throw "Stack is Empty"; 
        return this.stack.pop(); 
    }

    /**
     * Returns top of the stack but won't remove.
     */
    peek() {
        if (this.isEmpty()) 
            throw "Stack is Empty"; 
        return this.stack[this.size() - 1]; 
    }

    /**
     * return true if stack is empty 
     */
    isEmpty() {
        return this.size() === 0; 
    }

    /**
     * Returns size of the Stack.
     */
    size(){
        return this.stack.length;
    }

    /**
     * print stack in console.
     */
    print() { 
        let str = ""; 
        for (var i = 0; i < this.size(); i++) 
            str += this.stack[i] + " "; 
        console.log(str); 
    }
}

stack = new Stack();
for (let index = 0; index < 10; index++) {
    stack.push(index);    
}
stack.print();
for (let index = 0; index < 4; index++) {
    stack.pop(index);  
    console.log("Peek", stack.peek(), "Size", stack.size());  
}