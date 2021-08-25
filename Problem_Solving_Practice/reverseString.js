const myName = "fuck you";
let newName = "";

for (let i = myName.length - 1; i >= 0; i--) {
    newName += myName[i];
}

const text = "Joy Loves Rupa";
console.log(stringReverser(text));

function stringReverser(text) {
    newText = "";
    for (const letter of text) {
        newText = letter + newText;
    }
    return newText;
}

console.log(newName);

