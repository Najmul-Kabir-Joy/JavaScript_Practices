console.log("Required wood: ", woodCalculator(1, 1, 0));


function woodCalculator(chair, table, bed) {
    // let woodForEach = multiplier(chair, table, bed);
    sum = 0;
    for (const iterator of multiplier(chair, table, bed)) {
        sum += iterator;
    }
    return sum;
}

function multiplier(chair, table, bed) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    let chairWoodCount = chair * chairWood;
    let tableWoodCount = table * tableWood;
    let bedWoodCount = bed * bedWood;

    return [chairWoodCount, tableWoodCount, bedWoodCount];
}