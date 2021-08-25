const s = "javascriptloops";
let vowels = [];
let consonant = [];

for (const letter of s) {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        vowels.push(letter);
    } else {
        consonant.push(letter);
    }
}

for (const letter of vowels) {
    console.log(letter);
}
for (const letter of consonant) {
    console.log(letter);
}