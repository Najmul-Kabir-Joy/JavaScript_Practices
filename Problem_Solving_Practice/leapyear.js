const year = 2052;
let leapYearDecider = leapYearChecker(year);
if (leapYearDecider == true) {
    console.log("The given year is: " + year + " which is leapyear");
} else {
    console.log("The given year is: " + year + " which is not leapyear");
}

function leapYearChecker(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}