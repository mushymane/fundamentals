// Given 2 arrays, create function that lets user know (true/false)
// whether these two arrays contain any common items
// For example: 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
//
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// Solution
// 2 parameters - always arrays, no size limit
// return true or false

// brute force solution: nested loop, O(n^2) not the most efficient



// function containsCommonItem(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 console.log('true');
//                 return true;
//             }
//         }
//     }
//     console.log('false');
//     return false;
// }

// containsCommonItem(array1, array2); // O(a*b) time complexity, O(1) space complexity 

// better solution
/* array1 ==> obj {
    a: true,
    b: true,
    c: true,
    x: true
}
array2[index] === obj.properties
*/
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'r'];

function containsCommonItem2(array1, array2) {
    // loop thorugh 1st array and create obj where properties === items in array
    // loop through 2nd array and check if item in 2nd exists on created object

    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // console.log(map);
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            console.log('true');
            return true;
        }
    }
    console.log('false');
    return false;
}

containsCommonItem2(array1, array2); // O(a+b) time complexity, O(a) space complexity

// error checking - can we assume always 2 params? etc.

// another more readable solution
function containsCommonItem3(array1, array2) {
    return array1.some(item => array2.includes(item));
}

containsCommonItem3(array1, array2);