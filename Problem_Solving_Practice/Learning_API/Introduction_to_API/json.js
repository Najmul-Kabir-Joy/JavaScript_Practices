const shop = {
    name: 'joilla store',
    id: 564,
    prducts: ['alu', 'potol', 'tomatto'],
    owner: {
        name: 'najmul',
        id: 'o12'
    },
    isOff: true
};
const stringyfied = JSON.stringify(shop);
const json = JSON.parse(stringyfied);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);