// 57 --> 25 --> 21

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// Could have a separate Node class for simplicity
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        //const newNode = new Node(value); //if using Node class
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        // check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index) {
        //check params
        let leader = this.head;
        if (index > 0) {
            leader = this.traverseToIndex(index - 1);
            const nodeToRemove = leader.next;
            leader.next = nodeToRemove.next;
            this.length--;
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }

        return this.printList();
    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

// --------------Doubly Linked List--------------

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        //const newNode = new Node(value); //if using Node class
        const newNode = {
            value: value,
            next: null,
            previous: null
        };
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            previous: null
        };
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        // check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
            previous: null
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.previous = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        //check params
        let leader = this.head;
        if (index > 0) {
            leader = this.traverseToIndex(index - 1);
            const nodeToRemove = leader.next;
            const follower = nodeToRemove.next;
            leader.next = nodeToRemove.next;
            follower.previous = leader;
            this.length--;
        } else if (index === 0) {
            const follower = this.head.next;
            this.head = follower;
            follower.previous = this.head;
            this.length--;
        }

        return this.printList();
    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new DoublyLinkedList(57);
console.log(myLinkedList.append(25));
console.log(myLinkedList.append(21));
console.log(myLinkedList.prepend(4));
console.log(myLinkedList.insert(3, 143));
console.log(myLinkedList.remove(0));
//console.log(myLinkedList.insert(99, 1433))
console.log(myLinkedList.printList());
//console.log(myLinkedList.insert(2, 9000));
//console.log(myLinkedList);


