const array = [-5, -15, -1, -10, -65, -5, -2, -6, -100];
console.log("The largest number in the given array is: ", largestInArray(array));

function largestInArray(array) {
    largest = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            largest = array[index];
        } else {
            largest = largest;
        }
    }
    return largest;
}

