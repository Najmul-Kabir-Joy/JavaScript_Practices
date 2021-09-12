const API_KEY = `c243493d93ed334cca9ac180a787ed75`;
const currentLocation = () => navigator.geolocation.getCurrentPosition(showPosition);
const showPosition = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => currentDisplay(data))
};
currentLocation();
const currentDisplay = data => {
    console.log(data)
    const place_name = document.getElementById('current_place_name');
    const temp = document.getElementById('current_temp');
    const weather = document.getElementById('current_weather');
    const img = document.getElementById('current_img');
    place_name.innerText = data.name + "," + data.sys.country;
    temp.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;
    img.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}




const search = () => {
    const input = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

const display = data => {
    const place_name = document.getElementById('place_name');
    const temp = document.getElementById('temp');
    const weather = document.getElementById('weather');
    const img = document.getElementById('img');
    place_name.innerText = data.name + "," + data.sys.country;
    temp.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;
    img.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
};