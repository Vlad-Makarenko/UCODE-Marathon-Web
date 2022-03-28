

const LLData = require("./LLData");

class LList {
    constructor(){
        this.head = null;
        this.length = 0;
        
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    /**
     * 
     * @param {LLData} value 
     */
    add(value){
        let newNode = new LLData(value);
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

    /**
     * 
     * @param {Array} arrayOfData 
     */
    addFromArray(arrayOfData){
        for(let x = 0; x < arrayOfData.length; x++){
            this.add(arrayOfData[x]);
        }

    }

    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else {
            for (let current = this.head; current.next; current = current.next){
                if (current.next.value === value) {
                    current.next = current.next.next;
                    this.length--;
                    return true;
                }
            }
        }
        return false;
    }

    removeAll(value){
        let flag = true;
        do{
            flag = this.remove(value);
        } while(flag);
    }


    contains(value) {
        if (this.head === value) {
            return true
        }
        else {
            let current = this.head
            while (current) {
                if (current.value === value) {
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

    toString() {
        let current = this.head;
        let arr = [];
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr.join(', ');
    }

    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.value;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };

    filter(callback){
        let newLList = new LList;
        let current = this.head;
        while(current.next){
            if(callback(current.value)){
                newLList.add(current.value);
            }
            current = current.next;
        }
        return newLList;
    }

}

module.exports.LList = LList;

// function createLinkedList(arr) {
//     const ll = new LinkedList();
//     arr.forEach(value => ll.add(value));
//     return ll;
// }