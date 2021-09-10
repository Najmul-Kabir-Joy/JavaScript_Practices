console.log('first');

let sec = 0;
const timeId = setInterval(() => {
    console.log(++sec)
    if (sec == 15) {
        clearInterval(timeId);
    }
}, 1000);
console.log('second');