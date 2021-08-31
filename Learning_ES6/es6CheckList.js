const pie = 3.1416;
let x = 2;
const personOne = {
    name: 'Najmul',
    id: '181-15-11321',
    sec: 'E',
    university: 'DIU',
    previousEducation: {
        school: {
            schoolName: 'ISC',
            schoolPassingYear: 2015,
            SSC: 5.00,
            schoolSubjects: {
                scienceSubject: ['phy', 'chem', 'bio']
            }
        },
        college: {
            collegeName: 'NIC',
            collegePassingYear: 2017,
            HSC: 4.78,
            collegeSubjects: {
                generalSubject: ['ben', 'eng']
            }
        }
    },
    family: {
        fatherName: 'MSK',
        motherName: 'NK',
        sisterName: 'MBK'
    }

};

const { schoolName, SSC } = personOne.previousEducation.school;

// console.log(`I am a student of ${schoolName}, My SSC result is ${SSC}.
// The value of pie is constant and it is ${pie}. Variable x is with value ${x}`);

const z = z => z + 5;
// console.log(z(2));

const anotherArrow = (x, y) => {
    x += 2; y += 2;
    let result = x * y;
    return result;
};

//console.log(anotherArrow(3, 3));

const multiplier = (x, y, z) => {
    return x * y * z;
}

// console.log(multiplier(4, 4, 4));

const threePointFour = (x, y) => {
    return (x + 2) * (y + 2);
}

// console.log(threePointFour(1, 1));

const taskFive = [1, 2, 3, 4, 5];
const taskFiveAns = taskFive.map(x => x * 5);
// console.log(taskFiveAns);
const taskSix = taskFive.filter(x => x % 2);
// console.log(taskSix);

const phones = [
    { model: "symphony", price: 10000, ram: 4, rom: 8 },
    { model: "walton", price: 12000, ram: 4, rom: 16 },
    { model: "umidigi", price: 18000, ram: 8, rom: 16 },
    { model: "iphone", price: 100000, ram: 8, rom: 128 },
    { model: "Samsung", price: 32000, ram: 8, rom: 64 },
    { model: "xiaomi", price: 25000, ram: 6, rom: 64 },
    { model: "Lenovo", price: 22000, ram: 4, rom: 64 },
    { model: "Huawei", price: 25000, ram: 6, rom: 128 },
    { model: "Asus", price: 27000, ram: 8, rom: 128 }
];

const taskSeven = phones.find(x => x.price == 25000);
//console.log(taskSeven);

/* MAP = Iterates through each data. use the function written. returns the output in a new array
   FOREACH = SAME LIKE MAP BUT DOESN'T RETURN ARRAY
   FILTER = ITERATES THROUGH EACH OBJECT AND RETURNS ALL THE MATCHING IN AN ARRAY
   FIND = ITERATES THORUGH EACH OBJECT AND RETURNS ONLY THE FIRST MATCHING OBJECT
*/

// task eight done in above 

const [one, two, three] = [4, 5, 6];
// console.log(three);

function taskTen(x, y, z = 7) {
    return x + y + z;
}

//console.log(taskTen(2, 2));

//task 11 and 12 done above
// example for chaining 

const sciSubs = personOne?.previousEducation?.school?.schoolSubjects?.scienceSubject;

// console.log(sciSubs);