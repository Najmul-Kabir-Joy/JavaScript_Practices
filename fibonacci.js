const range = 12;

console.log(fibonacciGenerator(range));
function fibonacciGenerator(range) {
    if (range < 2 || range > 25 || typeof (range) != "number") {
        return "not valid";
    }
    fibarray = [0, 1];
    for (let i = 2; i < range; i++) {
        if (range == 2) {
            return fibarray;
        } else {
            fibarray[i] = fibarray[i - 1] + fibarray[i - 2];
        }
    }
    return fibarray;

}

a = Math.abs(-10);
console.log(a);