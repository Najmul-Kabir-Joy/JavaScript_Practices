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

//creating variable for objects data 
const hscGeneralSubjectc = personOne.previousEducation.college.collegeSubjects.generalSubject;
const id = personOne.id;
const sscResult = personOne.previousEducation.school.SSC;

//es6 tech 
const { university, sec } = personOne;
const { sisterName } = personOne.family;
const { scienceSubject } = personOne.previousEducation.school.schoolSubjects;

// console.log(id);
// console.log(sscResult);
// hscGeneralSubjectc.forEach(element => {
//     console.log(element);
// });

console.log(scienceSubject);
