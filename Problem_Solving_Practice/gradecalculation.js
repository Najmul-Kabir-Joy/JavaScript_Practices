const marks = 76;


if (marks >= 80 && marks <= 100) {
    console.log("You got A+");
} else if (marks >= 75 && marks <= 79) {
    console.log("You got A");
} else if (marks >= 70 && marks <= 74) {
    console.log("You got A-");
} else if (marks >= 65 && marks <= 69) {
    console.log("You got B+");
} else if (marks >= 60 && marks <= 64) {
    console.log("You got B");
} else if (marks >= 55 && marks <= 59) {
    console.log("You got B-");
} else if (marks >= 50 && marks <= 54) {
    console.log("You got C+");
} else if (marks >= 45 && marks <= 49) {
    console.log("You got C");
} else if (marks >= 40 && marks <= 44) {
    console.log("You got D");
} else if (marks >= 00 && marks <= 39) {
    console.log("You got F");
} else {
    console.log("Marks out of bounds");
}