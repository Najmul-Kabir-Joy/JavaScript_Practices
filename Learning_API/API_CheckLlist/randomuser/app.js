fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => display(data.results));

const display = data => {
    const users_container = document.getElementById('users_container');
    data.forEach(element => {
        const users = document.createElement('div');
        const userName = document.createElement('h4');
        const detailsList = document.createElement('ul');
        const listItem = document.createElement('li');
        const listItem1 = document.createElement('li');
        const listItem2 = document.createElement('li');
        const { title, first, last } = element.name;
        userName.innerText = 'Name: ' + title + ' ' + first + ' ' + last;
        const { street, city, state } = element.location;
        const { latitude, longitude } = element.location.coordinates;
        const { offset, description } = element.location.timezone;
        listItem.innerText = 'Street: ' + street + ' ' + 'City: ' + city + ' ' + 'State: ' + state;
        listItem1.innerText = 'Coordinates: ' + latitude + ' ' + longitude;
        listItem2.innerText = 'Timezone: ' + offset + ' ' + description;
        detailsList.appendChild(listItem);
        detailsList.appendChild(listItem1);
        detailsList.appendChild(listItem2);
        users.appendChild(userName);
        users.appendChild(detailsList);
        users_container.appendChild(users);
    });
};
