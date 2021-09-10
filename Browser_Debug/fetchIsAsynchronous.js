console.log('starting');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
console.log('ending');