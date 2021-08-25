const num = 5;
// const num2 = 9;
let factorial = factorialFinderUsingWhile(num);
// let factorial2 = factorialFinder(num2);
console.log("Factorial of " + num + " is " + factorial);
// console.log("Factorial of " + num2 + " is " + factorial2);

// function factorialFinder(num) {
//     result = num;
//     for (i = num - 1; i >= 1; i--) {
//         result *= i;
//     }
//     return result;
// }

function factorialFinderUsingWhile(num) {
    result = num;
    num--;
    while (num >= 1) {
        result *= num;
        num--;
    }
    return result;
}


//factorial using recursion
const input = 5;
console.log("Factorial using recursion: " + factorialrec(input));

function factorialrec(input) {
    if (input == 1) {
        return 1;
    }
    return input * factorialrec(input - 1);
}