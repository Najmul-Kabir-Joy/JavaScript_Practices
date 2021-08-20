let nums = [2, 3, 6, 6, 5, 11, 8, 150];
let distinct = [];
function getSecondLargest(nums) {
    // Complete the function
    for (const num of nums) {
        if (distinct.indexOf(num) == -1) {
            distinct.push(num);
        }
    }
    distinct.sort(function (a, b) { return b - a });

    return distinct[1];
}

console.log(getSecondLargest(nums));
