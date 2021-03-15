function addTo80(n) {
    console.log('long time');
    return n + 80;
}

// using closure to avoid having cache in global scope
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) { // if (cache.n)
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log('1:', memoized(5))
console.log('2:', memoized(5))

// console.log('1:', memoizedAddTo80(5))
// console.log('2:', memoizedAddTo80(5))