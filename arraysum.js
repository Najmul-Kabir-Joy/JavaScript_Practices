const array = [1, 2, 3, 4, 5, 6, 9, 10];

console.log(arraySum(array));

function arraySum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}