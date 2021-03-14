class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // go left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // Option 1: no right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        // if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                            // if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                    //Option 2: right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        // if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                            // if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                    //Option 3: right child that has a left child
                } else {
                    // find the right child's leftmost child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    // parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.remove(9));
console.log(JSON.stringify(traverse(bst.root)));
// console.log(bst.lookup(4));


//      9
//  4        20
//1   6   15   170  


// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 4
// Level 3: 2^3 = 8

// # of nodes = 2^h - 1, h (height of tree) starting from 1
// log nodes = steps

// log 100 = 2
// 10^2 = 100