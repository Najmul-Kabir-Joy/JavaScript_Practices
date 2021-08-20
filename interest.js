const depositAmount = 1000;
const interestRate = 5 / 100;
const year = 1;
let interestAmount = interestRateCalculator(depositAmount, interestRate, year);
let newAmount = depositAmount + interestAmount;
console.log("Your depositted amount is: " + depositAmount + " taka"
    + "\n" +
    "You got extra: " + interestAmount + " taka"
    + "\n" +
    "Your new total amount is: " + newAmount + " taka");

function interestRateCalculator(depositAmount, interestRate, year) {
    interest = depositAmount * interestRate * year;
    return interest;
}