const searchFood = () => {
    const searchFood = document.getElementById('search-field').value;
    // console.log(searchFood);
    if (searchFood == '') {
        document.getElementById('error').innerText = 'NOTHING ENTERED';
    } else {
        document.getElementById('search-field').value = '';
        document.getElementById('error').innerText = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const len = data.meals;
                if (len == null || len == 0) {
                    document.getElementById('error').innerText = 'NOTHING FOUND';
                } else {
                    display(len);
                }
            })
    }
}
//for enter click on search field
const searchBtn = document.getElementById('button-search');
const searchInput = document.getElementById('search-field');
searchInput.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        searchBtn.click();
    }
})


const display = (foods) => {
    const row = document.getElementById('results_row');
    //clearing search result
    //System 1
    //row.innerHTML = '';
    //system 2
    row.textContent = '';
    foods.forEach(food => {
        //console.log(food);
        const col = document.createElement('div');
        col.classList.add('col');
        col.innerHTML = `
        <div onclick="mealDetails(${food.idMeal})" class="card">
            <img src="${food.strMealThumb}" class="card-img-top w-75 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `
        row.appendChild(col);
    });
}
const mealDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = food => {
    const single_meal_details = document.getElementById('single_meal_details');
    single_meal_details.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                <a href="${food.strYoutube}" class="btn btn-primary">Tutorial</a>
            </div>
        </div>
    `

    console.log(data.idMeal);
}