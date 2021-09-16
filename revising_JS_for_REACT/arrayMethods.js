const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'watch', price: 3200, brand: 'titan', color: 'black' },
    { name: 'phone', price: 30000, brand: 'xiaomi', color: 'purple' },
    { name: 'sunglass', price: 2000, brand: 'rayban', color: 'black' },
    { name: 'pendrive', price: 200, brand: 'hp', color: 'white' },
    { name: 'camera', price: 320000, brand: 'xiaomi', color: 'gray' },
];

const brands = products.map(p => p.brand);
const price = products.map(p => p.price);
console.log(brands);
console.log(price);

products.forEach(p => console.log(p.color));

console.log(products.filter(p => p.price > 30000));
console.log('using find', products.find(p => p.price > 30000));
console.log(products.filter(p => p.name.includes('m')));
console.log('using find', products.find(p => p.name.includes('m')));