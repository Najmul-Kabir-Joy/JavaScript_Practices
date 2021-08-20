var num = 0;

var result = oddEvenChecker(num);
if (result == true) {
    console.log("The given number is even")
} else {
    console.log("The given number is odd")

}



function oddEvenChecker(num) {

    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}