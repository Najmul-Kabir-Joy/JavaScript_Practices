const loadCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const item = document.getElementById('inputId').value;
    if (!item) {
        return;
    }
    //display in html
    displayProduct(item);
    //adding item to local storage;
    addProductToCart(item);
    document.getElementById('inputId').value = '';

};
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
};

const displayProduct = name => {
    const products = document.getElementById('products');
    const product = document.createElement('li');
    product.innerText = name;
    products.appendChild(product);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
loadCart();