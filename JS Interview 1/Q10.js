/**
 *  Implement LinkedList class in JS.
*/

/**
 * Node class to define each node.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Main LL class.
 */
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    /**
     * 
     * @param {Object} element 
     * @param {Number} index 
     */
    add(element, index = -1) { 
        let node = new Node(element);
        console.log(element, index, node);
        let current;
        switch(index){
            case -1:
                if (this.head == null) // First Node.
                    this.head = node; 
                else { 
                    current = this.head;
                    while (current.next) { 
                        current = current.next; 
                    }
                    current.next = node;
                }
                break;
            default:
                if (index > 0 && index > this.size) // Invalid index.
                    return false; 
                else { 
                    let prev;
                    curr = this.head; 
                    if (index == 0) {  //  Head.
                        node.next = head; 
                        this.head = node; 
                    } else { 
                        curr = this.head; 
                        let it = 0; // Iterator
                        while (it < index) { 
                            it++; 
                            prev = curr; 
                            curr = curr.next; 
                        }
                        node.next = curr; 
                        prev.next = node; 
                    }
                } 
        }
        this.size++; 
    }
    
    /**
     * Remove elemnt from index
     * @param {Number} index 
     */
    remove(index) { 
        if (index > 0 && index > this.size) // Invalid index
            return null; 
        else { 
            let curr, prev, it = 0;
            curr = this.head; 
            prev = curr;
            if (index === 0) { 
                this.head = curr.next;
            } else {
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                }
                prev.next = curr.next;
            } 
            this.size--;
            return curr.element; 
        }
    }

    /**
     * Print the list.
     */
    print(){ 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.data + "->"; 
            curr = curr.next; 
        } 
        str += "null";
        console.log(str); 
    }

    /**
     * Returns size of the list.
     */
    getSize(){
        return this.size;
    }

    /**
     * Returns true if list is empty
     */
    isEmpty(){
        return this.size === 0;
    }

}

let ll = new LinkedList();
for(let i = 0; i < 10; i++){
    ll.add(i);
}
ll.print();
for (let index = 0; index < 5; index++) {
    ll.remove(index);    
}
ll.print();