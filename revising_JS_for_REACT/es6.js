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
};

let array = [1, 2, 3, 4, 84, 568, 45, 0, 75, 69];

const findBig = (numArray) => {
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
};
const info = ` My name is ${student.name}
    My school was ${student.prevInstitution.school}.
    I know ${student.languages.length} languages.
    The biggest number in the array is ${findBig(array)}`;
console.log(info);
//spreding
const secArray = [...array];
array.push(10123);
array.push(9635);
console.log(secArray);

