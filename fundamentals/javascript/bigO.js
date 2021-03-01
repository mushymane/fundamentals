/* Rules */
// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs
// Rule 4: Drop Non Dominants


// O(n) - Linear time

/*
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill',
                'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
            //break;
        }
    }
}

findNemo(large);

// O(1) - Constant time

const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found him');
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found him');
        }
    }
}
*/

/*
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
*/

/*
function challenge(input) {
    let a = 100; // O(1)
    a = 5 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

//3 + n + n + n + n => 3 + 4n => O(3 + 4n)
*/

/*
function anotherOne(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 20; // O(1)
    for (let i = 0; i < input.length; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }
    for (let j = 0; j < input.length; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let stranger = "What?"; // O(1)
}

// O(4 + 7n) => O(n)
*/

/*
function uselessFunc(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100l i++) { // O(100)
        console.log('Helloooooo');
    }
}

// O(1 + n/2 + 100) => O(n)
*/

/*
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// O(2n) => O(n)
*/

/* //rule 3
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function (boxes) {
        console.log(boxes);
    });
}

// O(n + m) because looping through 2 different inputs
*/

/*
// log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

// O(n * n) => O(n^2)
*/

// on same indentation: add, multiply if nested or 1 more indentation

/* //rule 4
function uselessFunction2(numbers) {
    console.log('these are the numbers:');
    numbers.forEach(function (number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

uselessFunction2([1, 2, 3, 4, 5]);

// O(n + n^2) => O(n^2)
*/

/*
//how much more memory are we adding? we dont have control of input
//how much memory are we adding within the function?
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("booo");
    }
}
booo([1,2,3,4,5]); // space complexity O(1)

function uselessFunc3(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

uselessFunc3(6); // space complexity O(n)
*/



/* Stuff to know */
/*
Big Os
O(1) Constant - no loops
O(logN) Logarithmic - usually searching algorithms have log(n) if they are sorted (binary search) (though not on hash maps)
O(n) Linear - for loops, while loops
O(nlog(n)) Log Linear - sorting operations usually
O(n^2) Quadratic - every element in a collection needs to be compared to every other element. two nested loops
O(2^n) Exponential - recursive algorithms that solve a problem on size n
O(n!) Factorial - you are adding a loop for every element

**iterating through half a collection is still O(n)
**two separate collections: O(n + m), O(n * m)

What can cause time in a function?
Operations (+, -, *, /)
Comparisons (<,>, ==)
Looping (for, while)
Outside Function call (function())

What causes space complexity?
Variables
Data Structures
Function call
Allocation
*/