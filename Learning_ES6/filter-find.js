// const products = [
//     {
//         category: {
//             phones: {
//                 androidPhone: {
//                     company: {
//                         xiaomi: {
//                             model: {
//                                 mi6: {
//                                     price: 12000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'CHINA'
//                                 },
//                                 mi10: {
//                                     versions: [
//                                         {
//                                             name: 'lite',
//                                             price: 15000
//                                         },
//                                         {
//                                             name: 'pro',
//                                             price: 20000
//                                         },
//                                         {
//                                             name: 'pro max',
//                                             price: 25000
//                                         },
//                                     ]
//                                 }
//                             }
//                         },
//                         samsung: {
//                             model: {
//                                 a52: {
//                                     price: 32000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'HUNGRY'
//                                 },
//                                 a72: {
//                                     price: 42000,
//                                     ram: 8,
//                                     rom: 128,
//                                     varient: 'VIETNAM'
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 iosPhone: {
//                     company: {
//                         apple: {
//                             model: {
//                                 iphoneX: {
//                                     price: 12000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'USA'
//                                 },
//                                 iphoneXi: {
//                                     price: 220000,
//                                     ram: 8,
//                                     rom: 64,
//                                     varient: 'UK'
//                                 }
//                             }
//                         }
//                     }
//                 },
//             },
//             tabs: {
//                 androidTabs: {
//                     company: {
//                         xiaomi: {
//                             model: {
//                                 mipad: {
//                                     price: 12000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'CHINA'
//                                 },
//                                 hupad: {
//                                     price: 35000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'CHINA'
//                                 }
//                             }
//                         },
//                         samsung: {
//                             model: {
//                                 a8: {
//                                     price: 32000,
//                                     ram: 6,
//                                     rom: 128,
//                                     varient: 'HUNGRY'
//                                 },
//                                 a10: {
//                                     price: 42000,
//                                     ram: 8,
//                                     rom: 128,
//                                     varient: 'VIETNAM'
//                                 }
//                             }
//                         }
//                     }
//                 },
//             }
//         }
//     }
// ];
const nums = [1, 854, 84, 57, 58, 75, 84, 2, 87, 5, 8, 5];
//printing all numbers
nums.forEach(element => {
    //console.log(element);
});
//finding big numbers using filter
const gt50 = nums.filter(x => x > 50);
//console.log(gt50);
//finding small numbers 
const lt50 = nums.filter(x => x < 50);
//console.log(lt50);
const items = [
    { name: 'a', price: 1000, type: 'food' },
    { name: 'b', price: 1100, type: 'phone' },
    { name: 'c', price: 1300, type: 'phone' },
    { name: 'd', price: 1500, type: 'tab' },
    { name: 'e', price: 1600, type: 'food' },

];

const foods = items.filter(x => x.type == 'food');
console.log(foods);