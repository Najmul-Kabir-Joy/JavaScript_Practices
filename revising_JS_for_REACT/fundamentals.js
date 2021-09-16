const myName = 'Najmul';
let age = 12;
age = 15;
age = 22;
const num1 = 1, num2 = 0;
let howMuch = 0;
if (num1 === num2) {
    console.log('BOTH EQUAL');
} else if (num1 > num2) {
    howMuch = num1 - num2;
    if (howMuch > 2) {
        console.log('just practice nested if else');
    } else {
        console.log('just practice nested if else hehe')
    }

} else {
    console.log('dim dum dam');
}

let array = [1, 2, 3, 4, 84, 568, 45, 0, 75, 69];
function findBig(numArray) {
    let bigNum = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        // console.log(numArray[index]);
        if (numArray[i] >= bigNum) {
            bigNum = numArray[i];
        } else {
            bigNum = bigNum;
        }
    }
    return bigNum;

}
console.log(findBig(array));

const student = {
    name: 'Joy',
    age: 22,
    sub: 'CSE',
    year: 'final',
    prevInstitution: {
        school: 'ISC',
        collge: 'NIC'
    },
    languages: ['English', 'Bangla', 'Hindi'],
}
console.log(student.prevInstitution.school);
console.log(student['prevInstitution']['collge']);
console.log(student.languages[1]);
