const body = document.getElementById('body');
const header = document.createElement('header');
const main = document.createElement('main');
body.appendChild(header);
body.appendChild(main);
const section = document.createElement('section');
main.appendChild(section);
section.innerHTML = `
    <h3>Add your comment please!</h3>
    <textarea id = 'comment' name="message" rows="4" cols="40"></textarea>
    <br>
    <button id='post-button'> Post Comment</button>
`;

const secondSection = document.createElement('section');
main.appendChild(secondSection);
secondSection.innerHTML = `
    <h3> Comments Posted </h3>
    <p> This is the first comment. ore vai re edi ki sikhteso js dya. js ekta osthir jinis. vallagse vaia!!</p>
    <p> This is the second comment. magoma js sikhte giya to php r java bhuila khaia laitec. ami laravel sikhum kmne !! </p>

`;
document.getElementById('post-button').addEventListener('click', function () {
    const p = document.createElement('p');
    secondSection.appendChild(p);
    p.innerText = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
})