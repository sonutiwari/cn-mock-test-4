/**
 * Queue class in JS
 */
class Queue {
    constructor() { 
        this.queue = []; 
    }
    /**
     * enqueue an item into Queue.
     * @param {Object} element 
     */
    enqueue(element) {
        this.queue.push(element); 
    }

    /**
     * dequeue element from Queue.
     */
    dequeue() {
        if (this.isEmpty()) 
            throw "Queue is Empty"; 
        return this.queue.shift(); 
    }

    /**
     * Returns first elemnt of the Queue but won't remove.
     */
    peek() {
        if (this.isEmpty()) 
            throw "Queue is Empty"; 
        return this.queue[0]; 
    }

    /**
     * return true if Queue is empty 
     */
    isEmpty() {
        return this.size() === 0; 
    }

    /**
     * Returns size of the Queue.
     */
    size(){
        return this.queue.length;
    }

    /**
     * print Queue in console.
     */
    print() { 
        let str = ""; 
        for (var i = 0; i < this.size(); i++) 
            str += this.queue[i] + " "; 
        console.log(str); 
    }
}

queue = new Queue();
for (let index = 0; index < 10; index++) {
    queue.enqueue(index);    
}
queue.print();
for (let index = 0; index < 4; index++) {
    queue.dequeue(index);  
    console.log("Peek", queue.peek(), "Size", queue.size());  
}