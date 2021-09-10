const fnc = () => console.log('I am coding now');
console.log('first');
setTimeout(fnc, 3600);
setTimeout(function () {
    console.log('In line func');
}, 6600);
setTimeout(() => { console.log('Arrow func') }, 4600);
console.log('second');
console.log('third');