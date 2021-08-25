const str1 = 'this is a string'; //doesn's support multiline
const str2 = "this is also a string"; //doesn's support multiline
const str2Alter = "this is also a string \n" +
    "this is the second line"
const str3 = `this is also also a string 
this is the second line of the string`; //supports multiline 
const count = 2;
//old system
const code = "<h1 class='header'> This is header " + count + "</h1>";
//new es6 system 
const code1 = `<h1 class="article-header">heading ${count}</h1>`
const arr = [1, 3, 4, 56, 78];
const arrLen = `The array has ${arr.length} elements`;
const fName = 'Najmul';
const lName = 'Kabir';
const nName = 'Joy';
//old system
const fullName0 = fName + ' ' + lName;
//in es6
const fullName1 = `${fName} ${lName} ${nName}`;
console.log(fullName1);