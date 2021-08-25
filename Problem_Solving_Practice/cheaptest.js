const phones = [
    { model: "symphony", price: 10000, ram: 4, rom: 8 },
    { model: "walton", price: 12000, ram: 4, rom: 16 },
    { model: "umidigi", price: 18000, ram: 8, rom: 16 },
    { model: "iphone", price: 100000, ram: 8, rom: 128 },
    { model: "Samsung", price: 32000, ram: 8, rom: 64 },
    { model: "xiaomi", price: 25000, ram: 6, rom: 64 },
    { model: "Lenovo", price: 22000, ram: 4, rom: 64 },
    { model: "Huawei", price: 25000, ram: 6, rom: 128 },
    { model: "Asus", price: 27000, ram: 8, rom: 128 }
];

const requirements = {
    minPrice: 20000,
    maxPrice: 35000, minRam: 6, minRom: 64
};


function suitablePhone(phones, requirements) {
    let inRange = [];

    for (let i = 0; i < phones.length; i++) {
        if (phones[i].price >= requirements.minPrice && phones[i].price <= requirements.maxPrice && phones[i].ram >= requirements.minRam && phones[i].rom >= requirements.minRom) {
            inRange.push(phones[i]);
        }
    }
    let cheapest = inRange[0];
    for (let i = 0; i < inRange.length; i++) {
        let current = inRange[i];
        if (current.price == cheapest.price) {
            if (current.ram == cheapest.ram) {
                if (current.rom >= cheapest.rom) {
                    cheapest = current;
                } else {
                    cheapest = cheapest;
                }
            } else if (current.ram > cheapest.ram) {
                cheapest = current;
            } else {
                cheapest = cheapest;
            }
        } else if (current.price < cheapest.price) {
            cheapest = current;
        }
    }
    return cheapest;
}


let selected = suitablePhone(phones, requirements);
console.log(selected.model + "Is the best phone for you. It has " + selected.ram + "gb ram, " + selected.rom + " gb rom in just " + selected.price + " taka.")
