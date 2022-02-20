class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
        
    }

    add(data){
        let newNode = new node(data);
        if(this.length === 0){
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
    }

    remove(data) {
        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else {
            for (let current = this.head; current.next; current = current.next){
                if (current.next.data === data) {
                    current.next = current.next.next;
                    this.length--;
                    return true;
                }
            }
        }
        return false;
    }



    contains(data) {
        if (this.head === data) {
            return true
        }
        else {
            let current = this.head
            while (current) {
                if (current.data === data) {
                    return true
                }
                current = current.next
            }
            return false
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    count() {
        return this.length;
    }

    log() {
        let current = this.head;
        let arr = [];
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr.join(', '));
    }

    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };

}



function createLinkedList(arr) {
    const ll = new LinkedList();
    arr.forEach(data => ll.add(data));
    return ll;
}
