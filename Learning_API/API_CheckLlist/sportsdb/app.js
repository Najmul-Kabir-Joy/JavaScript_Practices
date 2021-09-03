window.addEventListener('load', function () {

});
const searchResult = () => {
    const input = document.getElementById('input').value;
    document.getElementById('input').value = '';
    if (input == '') {
        document.getElementById('error').innerText = 'Please give a input';
    } else {
        fetchData(input);
    }
    document.getElementById('row').textContent = '';
    document.getElementById('details_col').textContent = '';
};
const fetchData = input => {
    url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.teams == null) {
                document.getElementById('error').innerText = 'NOTHING FOUND';
            } else {
                displayResult(data.teams);
            }
        })
};

const displayResult = data => {
    const row = document.getElementById('row');
    row.textContent = '';
    data.forEach(element => {
        const col = document.createElement('div')
        col.classList.add('col');
        col.innerHTML = `
            <div onclick="showDetails('${element.idTeam}')" class="card">
                <img src="${element.strTeamBadge}" class="card-img-top w-50 d-block mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${element.strTeam}</h5>
                    <p class="card-text">${element.strDescriptionEN.slice(0, 200)}</p>
                </div>
            </div>
        `;
        row.appendChild(col)
    });
};

const showDetails = async data => {
    const details_col = document.getElementById('details_col');
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${data}`;
    const res = await fetch(url);
    let datas = await res.json();
    datas = datas.teams;
    datas.forEach(element => {
        details_col.innerHTML = `
        <div class="card d-block mx-auto" style="width: 18rem;">
        <img src="${element.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strTeam}</h5>
                <p class="card-text">${element.strDescriptionEN.slice(0, 200)}</p>
                <a href="strWebsite" class="btn btn-primary">Official Site</a>
            </div>
        </div>
    `;
    });


}

