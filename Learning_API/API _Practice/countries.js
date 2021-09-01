const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = country => {
    const countries = document.getElementById('countries');

    country.forEach(element => {
        console.log(element);
        const h3 = document.createElement('h3');
        const capital = document.createElement('p');
        const region = document.createElement('p');
        const population = document.createElement('p');
        const flag = document.createElement('img');
        const flagSrc = element.flag;
        flag.setAttribute('src', flagSrc);
        flag.setAttribute('width', '25%');
        const details = document.createElement('div');
        details.classList.add('details');
        h3.innerText = 'Name: ' + element.name;
        capital.innerText = 'Capital: ' + element.capital;
        region.innerText = 'Region: ' + element.region;
        population.innerText = 'Population: ' + element.population;
        population.style.visibility = 'hidden';
        flag.style.visibility = 'hidden';
        details.addEventListener('mouseover', function () {
            population.removeAttribute('style');
        });
        details.addEventListener('mouseout', function () {
            population.setAttribute('style', 'visibility: hidden');
        });
        details.addEventListener('mouseover', function () {
            flag.removeAttribute('style');
        });
        details.addEventListener('mouseout', function () {
            flag.setAttribute('style', 'visibility: hidden');
        });
        details.appendChild(flag);
        details.appendChild(h3);
        details.appendChild(capital);
        details.appendChild(region);
        details.appendChild(population);
        countries.appendChild(details);
    });
}
countries();