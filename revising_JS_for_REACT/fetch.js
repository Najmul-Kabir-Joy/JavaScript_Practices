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

console.log(student);
console.log(JSON.stringify(student));
console.log(JSON.parse(student));

//fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))
// keys and values

const keys = Object.keys(student);
const value = Object.values(student);

//forEach

const numbers = [23, 74, 8, 44, 8, 5, 7, 85];
numbers.forEach(num => console.log(num))
console.log(numbers.map(num => num * 2));

//for of  for array like object
//for in to loop on object

const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'watch', price: 3200, brand: 'titan', color: 'black' },
    { name: 'phone', price: 30000, brand: 'xiaomi', color: 'purple' },
    { name: 'sunglass', price: 2000, brand: 'rayban', color: 'black' },
    { name: 'pendrive', price: 200, brand: 'hp', color: 'white' },
    { name: 'camera', price: 320000, brand: 'xiaomi', color: 'gray' },
];

//want to add new object in the array
//step copy it destructure it the add it 

const newProduct = { name: 'laptop', price: 32000, brand: 'dell ', color: 'silver' }
const newProcuts = [...products, newProduct];

//remove phones means create a new array without phone
const remaining = products.filter(p => p.name !== 'phone' && p.name !== 'laptop' && p.name !== 'watch');
console.log(remaining);