function paperRequirements(bookOne, bookTwo, bookThree) {
    const paperForFirstBoook = 100;
    const paperForSecondBoook = 200;
    const paperForThirdBoook = 300;
    result = (bookOne * paperForFirstBoook) + (bookTwo * paperForSecondBoook) + (bookThree * paperForThirdBoook);
    return result;
}

console.log(paperRequirements(2, 1, 1));