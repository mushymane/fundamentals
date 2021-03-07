

// naive
function hasPairWithSum(array, sum) {
    var len = array.length;
    for (var = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (array[i] + array[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

// better
function hasPairWithSum2(array, sum) {
    const mySet = new Set();
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(array[i])) {
            console.log('true');
            return true;
        }
        mySet.add(sum - array[i]);
    }
    console.log('false');
    return false;
}

hasPairWithSum2([1, 2, 3, 9, 8, 6, 5], 10);