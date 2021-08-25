const miles = 35;
console.log(animalsCounter(miles));
function animalsCounter(miles) {
    let output = 0;
    if (miles > 20) {
        output = ((miles - 20) * 100) + 600;
    } else if (miles <= 20 && miles > 10) {
        output = ((miles - 10) * 50) + 100;
    } else if (miles <= 10 && miles >= 0) {
        output = miles * 10;
    }
    return output;
}

