/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;

}

function factorial(input) {
    if (input == 1) {
        return 1;
    }
    return factorial(input - 1) * input;
} */

function fibo(i) {
    if (i == 0) {
        return 0;
    }

    if (i == 1) {
        return 1;
    }

    return fibo[i - 1] + fibo[i - 2];
}
console.log(fibo(8))



// const range = 10;
// console.log(fibonacciGenerator(range));

// function fibonacciGenerator(range) {
//     fibarray = [0, 1];
//     for (let i = 2; i < range; i++) {
//         if (range == 2) {
//             return fibarray;
//         } else {
//             fibarray[i] = fibarray[i - 1] + fibarray[i - 2];
//         }
//     }
//     return fibarray;
// }