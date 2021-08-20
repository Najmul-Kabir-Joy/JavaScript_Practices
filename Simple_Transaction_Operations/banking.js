function inputValue(inputId) {
    const input = parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = '';
    return input;
}
function inputValidation(input, isAdd) {
    let current_balance = parseFloat(document.getElementById('current_balance').innerText);
    if (isAdd == true) {
        if (input > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (input > 0 && input < current_balance) {
            return true;
        } else {
            return false;
        }
    }
}
function addUpdates(input, balanceId, isAdd) {
    const currentBalance = parseFloat(document.getElementById(balanceId).innerText);
    const total = input + currentBalance;
    document.getElementById(balanceId).innerText = total;

    //for updating total balance
    let current_balance = parseFloat(document.getElementById('current_balance').innerText);
    if (isAdd == true) {
        current_balance += input;
        document.getElementById('current_balance').innerText = current_balance;
    } else {
        current_balance -= input;
        document.getElementById('current_balance').innerText = current_balance;
    }
}
/* 
function totalBalance(input, isAdd) {
    let current_balance = parseFloat(document.getElementById('current_balance').innerText);
    if (isAdd == true) {
        current_balance += input;
        document.getElementById('current_balance').innerText = current_balance;
    } else {
        current_balance -= input;
        document.getElementById('current_balance').innerText = current_balance;
    }
} 
*/

document.getElementById('deposit_submit').addEventListener('click', function () {
    input = inputValue('deposit_input');
    valid = inputValidation(input, true);
    if (valid == true) {
        addUpdates(input, 'deposit_amount', true);
    } else {
        document.getElementById('error_msg').innerText = 'Error Occured';
    }

})
document.getElementById('withdraw_submit').addEventListener('click', function () {
    input = inputValue('withdraw_input');
    valid = inputValidation(input, false);
    if (valid == true) {
        addUpdates(input, 'withdraw_amount', false);
    } else {
        document.getElementById('error_msg').innerText = 'Error Occured';
    }

})

document.getElementById('deposit_input').addEventListener('focus', function () {
    document.getElementById('error_msg').innerText = '';
})
document.getElementById('withdraw_input').addEventListener('focus', function () {
    document.getElementById('error_msg').innerText = '';
})