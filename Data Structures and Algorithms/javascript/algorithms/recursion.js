let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}

console.log(inception());

//1. identify base case
//2. identify recursive case
//3. get close to base case and return when needed. usually have 2 returns