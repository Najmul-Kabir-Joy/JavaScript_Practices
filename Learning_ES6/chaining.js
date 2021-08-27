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

//array destructuring 
const [fname, lname, age] = ['najmul', 'kabir', 22];

console.log(fname);
console.log(age);

//jdi na object er property ta na thake tahole tkhn error chole asbe.
//shei error handle korte ? marks use kora hoy. means jdi pay toile samne jabe. jdi na pay toile agabe na.
//example
//console.log(personOne.previousEducation.university.age);
// shows TypeError: Cannot read property 'age' of undefined
//solution
console.log(personOne.previousEducation.university?.age);