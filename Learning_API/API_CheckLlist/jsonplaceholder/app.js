fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));

const displayComments = data => {
    const comments_container = document.getElementById('comments_container');
    console.log(data);
    data.forEach(comment => {
        const comments = document.createElement('div');
        comments.innerHTML = `
            <h2>Name: ${comment.name} </h2>
            <small>${comment.email}</small>
            <p>Comment: ${comment.body}</p>
            <button onclick="showID(${comment.id})">SHOW ID</button>
        `;
        comments_container.appendChild(comments);
    });

};

const showID = id => {
    document.getElementById('id').innerText = id;
}