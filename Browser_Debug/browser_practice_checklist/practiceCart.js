const loadCart = () => {
    const cart = getCart();
    for (const item in cart) {
        display(item, cart[item]);
    }
}
const addItem = () => {
    const productName = document.getElementById('pname').value;
    const productPrice = parseInt(document.getElementById('pprice').value);
    if (!productName || !productPrice) {
        return;
    }
    display(productName, productPrice);
    setCart(productName, productPrice);

    document.getElementById('pname').value = '';
    document.getElementById('pprice').value = '';

}

const display = (name, price) => {
    productList = document.getElementById('plist');
    product = document.createElement('li');
    product.innerText = `Product Name = ${name} & Product Price = ${price}`;
    productList.appendChild(product);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const setCart = (name, price) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + price;
    } else {
        cart[name] = price;
    }

    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
loadCart();