const num = [1, 2, 3, 54, 4, 65, 5];
//old approach
/*
let min = num[0];
for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
    }
}
*/
//new approach
const max = Math.max(...num);
const min = Math.min(...num);
//console.log(max, min);
//console.log(`The max value in array is ${max} and min value is ${min}`);


//copying a array 

let nums = [1, 58, 4, 5, 7, 1, 8, 7];
let num2 = [...nums];
nums.push(654);
num2.push(999);
console.log(num2);