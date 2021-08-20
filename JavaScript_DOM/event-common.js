const body = document.getElementById('body');
const header = document.createElement('header');
const main = document.createElement('main');
const section = document.createElement('section');
section.setAttribute('id', 'container');
body.appendChild(header);
body.appendChild(main);
main.appendChild(section);
section.innerHTML = `
    <div>
        <input id = 'name-input' type = 'text'> </input>
        <button id='update-btn'>update</button>
        <p id = 'show-text'></p>
        <button onclick = 'showText()'> using function </button>
        <button id='event'> using event handler </button>
    </div>
`

function showText() {
    document.getElementById('show-text').innerText = 'Done by function';
}

document.getElementById('event').addEventListener('click', function () {
    document.getElementById('show-text').innerText = 'Done by event handler';
})

document.getElementById('update-btn').addEventListener('click', function () {
    document.getElementById('show-text').innerText = document.getElementById('name-input').value;
    document.getElementById('name-input').value = '';
})

