function bestFriend(array) {
    let max = array[0];
    for (const elements of array) {
        if (elements.length > max.length) {
            max = elements;
        } else {
            max = max;
        }
    }
    return max;
}

console.log(bestFriend(["Riaz", "Najmul", "Sifat", "Rupa", "Daniel"]));