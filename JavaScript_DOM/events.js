const body = document.getElementById('body');
//creating a header
const header = document.createElement('header');
header.setAttribute('id', 'header_id');
body.appendChild(header);
const h1InHeader = document.createElement('h1');
h1InHeader.innerText = 'Practicing Some button click events'
header.appendChild(h1InHeader);
const main = document.createElement('main');
body.appendChild(main);
const h6 = document.createElement('h6');
main.append(h6);
h6.setAttribute('id', 'header_six');
h6.innerText = 'Main code starts from here';
h6.style.fontSize = '1.5em';
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
const button5 = document.createElement('button');
const button6 = document.createElement('button');
const button7 = document.createElement('button');
button1.innerText = 'Click to make: red';
button2.innerText = 'Click to make: green';
button3.innerText = 'Click to make: blue';
button4.innerText = 'Click to make: purple';
button5.innerText = 'Click to make: lime';
button6.innerText = 'Click to make: magenta';
button7.innerText = 'Click to make: hotpink';
button6.setAttribute('id', 'magentaBtn');
button7.setAttribute('id', 'hotPinkBtn');
main.appendChild(button1);
main.appendChild(button2);
main.appendChild(button3);
main.appendChild(button4);
main.appendChild(button5);
main.appendChild(button6);
main.appendChild(button7);
const btns = document.getElementsByTagName('button');
// for (const button of btns) {
//     button.classList.add('colorChangeBtn');
//     button.setAttribute('onclick', 'color_changer()');
// }

//this is anonymous function
button4.onclick = function () {
    document.getElementById('body').style.backgroundColor = 'purple';
}

// this code working for chaning
// for (let i = 0; i < btns.length; i++) {
//     if (i == 0) {
//         btns[i].classList.add('make_red');
//         btns[i].setAttribute('onclick', 'make_red()');
//         // btns[i].setAttribute('id', 'make_red');
//     } else if (i == 1) {
//         btns[i].classList.add('make_green');
//         btns[i].setAttribute('onclick', 'make_green()');
//         // btns[i].setAttribute('id', 'make_green');
//     } else if (i == 2) {
//         btns[i].classList.add('make_blue');
//         btns[i].setAttribute('onclick', 'make_blue()');
//         // btns[i].setAttribute('id', 'make_blue');
//     }
// }

const colorTray = ['make_red', 'make_green', 'make_blue', 'make_purple', 'make_lime'];
for (let i = 0; i < btns.length; i++) {
    for (let j = 0; j < colorTray.length; j++) {
        if (i == j) {
            btns[i].classList.add(colorTray[j]);
            btns[i].setAttribute('onclick', colorTray[j] + '()');
            // btns[i].addEventListener('click', colorTray[j]);
        }
    }
}

// using addEventListener
// const magentaBtn = document.getElementById('magentaBtn');
// magentaBtn.addEventListener('click', make_magenta);
document.getElementById('magentaBtn').addEventListener('click', make_magenta);
document.getElementById('hotPinkBtn').addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = 'hotpink'
});

//https://stackoverflow.com/questions/7796127/how-to-get-class-name-through-javascript


//ei function e dhuktese kintu forloop tak ja kortese na kno jni.
//id niye nile color change hoy na  

// function color_changer() {
//     for (let i = 0; i < btns.length; i++) {
//         if (btns[i].className == 'make_red') {
//             console.log('red');
//             make_red();
//         } else if (btns[i].className == 'make_green') {
//             make_green();
//         } else if (btns[i].className == 'make_blue') {
//             make_blue();
//         }
//     }
// }


//eirkm function kivabe automatic create korte pari??
function make_red() {
    document.getElementById('body').style.backgroundColor = 'red';
}
function make_green() {
    document.getElementById('body').style.backgroundColor = 'green';
}
function make_blue() {
    document.getElementById('body').style.backgroundColor = 'blue';
}
function make_purple() {
    document.getElementById('body').style.backgroundColor = 'purple';
}
function make_lime() {
    document.getElementById('body').style.backgroundColor = 'lime';
}
function make_magenta() {
    document.getElementById('body').style.backgroundColor = 'magenta';
}

