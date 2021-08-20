const products = [
    {
        name: "samsung phone ",
        price: 25000
    },
    {
        name: "xiaomi phone ",
        price: 25000
    },
    {
        name: "htc phone ",
        price: 25000
    },
    {
        name: "samsung laptop ",
        price: 25000
    },
    {
        name: "asus laptop ",
        price: 25000
    },
    {
        name: "lg phone smart phone ",
        price: 25000
    },
    {
        name: "bashundhara papers ",
        price: 25000
    },
]

function searchProducts(products, searchString) {
    searchString = searchString.toLowerCase();
    for (const product of products) {
        if (product.name.indexOf(searchString) != -1) {
            console.log(product);
        }
    }
}

searchProducts(products, 'LAPTO');
