//falsy = '',0,false,null,undefined
//checking anything falsy
let myVar = 10;
if (myVar) {
    myVar *= 10;
} else {
    myVar = 0;
}

let myMoney = 50;
//checking anything falsy
if (!myMoney) {
    myMoney += 10;
}
let food;
//ternary
// if (myMoney > 100) {
//     food = 'biriyani';
// } else {
//     food = 'chabiscuit'
// }
// can write the upper code in shortcut like following
let food1 = myMoney > 100 ? 'biriyani' : 'chabiscuit';
const price = 100;
let drink = (price < 100 && myMoney > 50) ? 'coke' : 'kisu na';
console.log(food1);
// num to string convertion shortcut

const num = 50;
const numStr = num + '';
console.log(num);
console.log(numStr);

// string to num convertion shortcut
const strNum = +num;
console.log(strNum);

let isActive = true;

const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// more shortcut 
isActive && showUser();
// toogle boolean
isActive = !isActive