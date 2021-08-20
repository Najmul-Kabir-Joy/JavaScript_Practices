var student = {
    name: "Najmul",
    id: 11321,
    sec: "E",
    phone: 1679704843
};

var mobile = {
    model: "iphone X",
    color: "gray",
    price: 100000,
    ram: 6,
    rom: "128gb"
};

//setting object property

var updatePrice = 'price';
mobile[updatePrice] = 123000;
mobile['price'] = 250000;
mobile.price = 35000;

console.log("Price = ", mobile.price);
////cpm