const array = [1, 2, 3, -4, 6, 85, -55, -10, 69, 45, 4];
function positiveFinder(array) {
    let positiveArray = [];
    for (const element of array) {
        if (element < 0) {
            break;
        } else {
            positiveArray.push(element);
        }
    }
    return positiveArray;
}

console.log(positiveFinder(array));