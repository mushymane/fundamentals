// Given an array = [2,5,1,2,3,5,1,2,4]
// Should return 2

// [2,1,1,2,3,5,1,2,4]
// Should return 1

// Given an array [2,3,4,5]
// Should return undefined

// naive
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2) time, O(1) space

// better
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map);
    }

    return undefined;
} // O(n)

console.log(firstRecurringCharacter2([4, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));