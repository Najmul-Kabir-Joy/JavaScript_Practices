const nums = [42, 65];
const [x, y] = nums;
console.log(y);

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

const { school } = student.prevInstitution;
console.log(school)
const [firstLang, secLang, thilang] = student.languages;
console.log(secLang);

const { name, age } = { myName: 'najmul', age: '22' };
console.log(age);