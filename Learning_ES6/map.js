const odds = [1, 3, 5, 7, 9, 11];
const evens = [];
const doubleIt = odd => odd += 01;
for (let odd of odds) {
    evens.push(doubleIt(odd));
}
/*Ekhane amara ekta 
array niye seta k loop kore tar 
prottek ta element k update kore 
ekta notun array te rakhtec */
//we can do this easily by using map

/* so map ja kortese.
jdi array er pore map k call kori 
1. loop chalabe 
2. prottek ta element er jnno ami jei function disi shei function ta k call korbe. 
3. function er result ta jei array te store korte blbo oitay store korbe */


//chaile function k call kora jay 
const evens2 = odds.map(doubleIt);
// abar chaile function ta map er mddhe likhao jay 
const evens3 = odds.map(odd => odd += 1);
// chaile function er nam gula just x y type short koreo likha jay
const evens4 = odds.map(x => x += 100);
console.log(evens2);

