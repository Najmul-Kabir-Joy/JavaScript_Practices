/*-------------------------
   FOR Transaction SYSYEM 
--------------------------*/

document.getElementById('deposit_submit').addEventListener('click', function () {
    const currentDeposit = parseInt(document.getElementById('deposit_amount').innerText);
    let currentAmount = parseInt(document.getElementById('current_balance').innerText);
    const newDeposit = parseInt(document.getElementById('deposit_input').value);
    const totalDeposit = currentDeposit + newDeposit;
    currentAmount = currentAmount + newDeposit;
    document.getElementById('deposit_amount').innerText = totalDeposit;
    document.getElementById('current_balance').innerText = currentAmount;
    document.getElementById('deposit_input').value = '';
});

document.getElementById('withdraw_submit').addEventListener('click', function () {
    const currentWithdraw = parseInt(document.getElementById('withdraw_amount').innerText);
    let currentAmount = parseInt(document.getElementById('current_balance').innerText);
    const newWithdraw = parseInt(document.getElementById('withdraw_input').value);
    const totalWithdraw = currentWithdraw + newWithdraw;
    currentAmount = currentAmount - newWithdraw;
    document.getElementById('withdraw_amount').innerText = totalWithdraw;
    document.getElementById('current_balance').innerText = currentAmount;
    document.getElementById('withdraw_input').value = '';
})