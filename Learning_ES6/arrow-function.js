// declaring a function
function add(numOne, numTwo = 0) {
    return numOne + numTwo;
};

//function expression 

const add1 = function add(numOne, numTwo = 0) {
    return numOne + numTwo;
};

// function expression (anonymous)

const add2 = function (numOne, numTwo) {
    return numOne + numTwo;
};

//arrow function 

const add3 = (numOne, numTwo) => numOne + numTwo;
const add4 = (numOne, numTwo, numThree = 0) => numOne + numTwo + numThree;
const mul0 = (numOne, numTwo, numThree = 0) => (numOne * numTwo) * numThree;
const mul1 = numOne => numOne * 10;
const myName = () => 'Najmul';

//big arrow function 
const calculations = (numOne, numTwo) => {
    const sum = numOne + numTwo; //4
    const sub = numOne - numTwo; //0
    const mul = numOne * numTwo; // 4
    const div = numOne / numTwo; // 1
    const total = sum + sub + mul + div; //9
    return total;
};

const sum0 = add(1, 1);
const sum1 = add1(2, 2);
const sum2 = add2(3, 3);
const sum3 = add3(4, 4);
const sum4 = add4(5, 5, 5);
const mulRes0 = mul0(5, 5, 5);
const mulRes1 = mul1(5);
const calcRes = calculations(2, 2);

console.log(`${sum0} ${sum1} ${sum2} ${sum3} ${sum4} ${mulRes0} ${mulRes1} ${myName()} ${calcRes}`);