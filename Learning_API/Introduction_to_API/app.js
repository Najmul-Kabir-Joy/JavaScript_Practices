function displayUser(user) {
    const ul = document.getElementById('userList');
    user.forEach(element => {
        const li = document.createElement('li')
        li.innerText = element.name;
        ul.appendChild(li);
    });
};

function displayPost(posts) {
    const postContainer = document.getElementById('post_container');
    posts.forEach(element => {
        const eachPost = document.createElement('div');
        eachPost.classList.add('each_post');
        eachPost.innerHTML = `
            <div class= 'post_header'>
                <h3>${element.title}</h3>
            </div>
            <div class= 'post_body'>
                <p>${element.body}</p>
            </div>
        `
        postContainer.appendChild(eachPost);
    });
};
