const cart = [
    {
        product: "alu",
        price: 25,
        quantity: 5
    },
    {
        product: "peyaj",
        price: 45,
        quantity: 3
    },
    {
        product: "telapia",
        price: 125,
        quantity: 4
    },
    {
        product: "chips",
        price: 10,
        quantity: 10
    },
    {
        product: "tomatto",
        price: 30,
        quantity: 1
    },
    {
        product: "ada",
        price: 100,
        quantity: 1
    },
    {
        product: "misti",
        price: 350,
        quantity: 2
    }
];

total = 0;

function totalCalculator(cart, total) {
    for (const items of cart) {
        total += (items.price * items.quantity);
    }
    return total;
}

console.log(totalCalculator(cart, total));