function add(num1, num2 = 100) {
    //approach one
    /*if (num2 == undefined) {
        num2 = 0;
    }*/
    // approach 2
    /*
     num2 = num2 || 0;
     */
    return num1 + num2;
}

function fullName(fname, lname = 'JoJo') {
    return fname + " " + lname;
}

console.log(add(10));
console.log(fullName('Najmul Kabir'));