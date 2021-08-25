inches = 100;
inchToFeet(inches);
console.log(inches + " inches = " + feet + "feet");

miles = 20;
milesToKilometere(miles);
console.log(miles + " miles = " + kilometer + "kilometer");


function inchToFeet(inches) {
    feet = parseFloat(inches / 12).toFixed(3);
    return feet;
}

function milesToKilometere(miles) {
    kilometer = parseFloat(miles * 1.60934).toFixed(3);
    return kilometer;
}



