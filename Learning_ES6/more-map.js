const friendsArray = ['najmul', 'kabir', 'joy', 'shahina', 'akter', 'rupa'];
const fArrLen = friendsArray.map(x => x.length);
//console.log(fArrLen);

const products = [
    {
        category: {
            phones: {
                androidPhone: {
                    company: {
                        xiaomi: {
                            model: {
                                mi6: {
                                    price: 12000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'CHINA'
                                },
                                mi10: {
                                    versions: [
                                        {
                                            name: 'lite',
                                            price: 15000
                                        },
                                        {
                                            name: 'pro',
                                            price: 20000
                                        },
                                        {
                                            name: 'pro max',
                                            price: 25000
                                        },
                                    ]
                                }
                            }
                        },
                        samsung: {
                            model: {
                                a52: {
                                    price: 32000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'HUNGRY'
                                },
                                a72: {
                                    price: 42000,
                                    ram: 8,
                                    rom: 128,
                                    varient: 'VIETNAM'
                                }
                            }
                        }
                    }
                },
                iosPhone: {
                    company: {
                        apple: {
                            model: {
                                iphoneX: {
                                    price: 12000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'USA'
                                },
                                iphoneXi: {
                                    price: 220000,
                                    ram: 8,
                                    rom: 64,
                                    varient: 'UK'
                                }
                            }
                        }
                    }
                },
            },
            tabs: {
                androidTabs: {
                    company: {
                        xiaomi: {
                            model: {
                                mipad: {
                                    price: 12000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'CHINA'
                                },
                                hupad: {
                                    price: 35000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'CHINA'
                                }
                            }
                        },
                        samsung: {
                            model: {
                                a8: {
                                    price: 32000,
                                    ram: 6,
                                    rom: 128,
                                    varient: 'HUNGRY'
                                },
                                a10: {
                                    price: 42000,
                                    ram: 8,
                                    rom: 128,
                                    varient: 'VIETNAM'
                                }
                            }
                        }
                    }
                },
            }
        }
    }
];

const itemNames = products.map(x => x.category);
const phones = products.map(x => x.category.phones);
const androidPhones = products.map(x => x.category.phones.androidPhone);
const xiaomiPhones = products.map(x => x.category.phones.androidPhone.company.xiaomi);
const xiaomiPhoneMi10 = products.map(x => x.category.phones.androidPhone.company.xiaomi.model.mi10);

products.map(x => console.log(x.category.phones.androidPhone.company.xiaomi.model));
products.forEach(element => {
    console.log('mi 10 versions: ', element.category.phones.androidPhone.company.xiaomi.model.mi10.versions);
});
//map r foreach er moddhe tofat map amk ekta array return korbe. but foreach just kaj ta kore dbe array return korbe na.