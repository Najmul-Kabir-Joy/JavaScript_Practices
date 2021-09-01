const buddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = (buddy) => {
    const buddies = buddy.results;
    console.log(buddies);
    const buddiesContainer = document.getElementById('buddies_container');
    buddies.forEach(element => {
        const { title, first, last } = element.name;
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>Name: ${title} ${first} ${last}</h2>
            <h4>Email: ${element.email}</h4>
        `
        buddiesContainer.appendChild(div);
    });
}
buddies();