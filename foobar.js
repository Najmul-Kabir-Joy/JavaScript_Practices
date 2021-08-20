const input = 15;
// // console.log(foobarChcek(input));
// function foobarChcek(input) {
//     if (input % 3 == 0 && input % 5 == 0) {
//         return "Foobar";
//     } else if (input % 5 == 0) {
//         return "bar";
//     } else if (input % 3 == 0) {
//         return "foo";
//     } else {
//         return "Kichu na";
//     }
// }

foobarGenerator(input);



function foobarGenerator(input) {
    for (let i = 1; i <= input; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("foobar");
        } else if (i % 5 == 0) {
            console.log("bar");
        } else if (i % 3 == 0) {
            console.log("foo");
        } else {
            console.log(i);
        }
    }
}
// for (let i = 1; i <= input; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("foobar");
//     } else if (i % 5 == 0) {
//         console.log("bar");
//     } else if (i % 3 == 0) {
//         console.log("foo");
//     } else {
//         console.log(i);
//     }
// }

