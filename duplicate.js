// const array = ["1", "2", "3", "4", "5", "1", "25", "2", "3"];
const array = [3, 4, 5, 7, 9, 13, 15, 4, 5, 21];
console.log(duplicateRemover(array));

function duplicateRemover(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) == -1) {
            newArray.push(array[i]);
        } else {
            console.log("Duplicate : ", array[i]);
            continue;
        }
    }
    return newArray;
}

