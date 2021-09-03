const bank = owner => {
    const owners = ['abir', 'musa'];
    if (owners.includes(owner)) {
        let balance = 0;
        return {
            deposit: amount => {
                balance += amount;
                return balance;
            },
            withdraw: amount => {
                balance -= amount;
                return balance;

            }
        }
    } else {
        console.log('user not found');
    }
}

const deposit = bank('abir');
console.log(deposit.deposit(100));
console.log(deposit.withdraw(100));
console.log(deposit.withdraw(100));