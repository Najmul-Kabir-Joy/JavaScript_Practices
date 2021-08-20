//========== USING FUNCTION ==========//


//handling increasing decreasing product count along with their price
function productCount(product, price, isAdd) {
    let productInput = parseInt(document.getElementById(product + '-number').value);
    if (isAdd == true) {
        productInput++;
    } else if (productInput > 1) {
        productInput--;
    }
    document.getElementById(product + '-number').value = productInput;
    document.getElementById(product + '_total').innerText = productInput * price;
    finalAmount();
}

//getting input value for final calculations 
function getInputValue(product) {
    return parseInt(document.getElementById(product + '-number').value);
}

//calculting subtotal
function subTotalCalculation() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    return subTotal;
}

function taxCalculation() {
    const totalTax = subTotalCalculation() * (10 / 100);
    document.getElementById('tax-total').innerText = totalTax.toFixed(2);
    return totalTax;
}

function finalAmount() {
    const finalTotal = subTotalCalculation() + taxCalculation();
    document.getElementById('final-total').innerText = finalTotal;
}

//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    productCount('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productCount('phone', 1219, false);
})

//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    productCount('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    productCount('case', 59, false);
})

//BHOSDK HOW TO SOLVE THIS. BRAIN NOT WORKING AT THE MOMENT
/* document.getElementById('delete').addEventListener('click', function () {
    document.getElementById('gaybul-hawa').style.display = 'none';
    document.getElementById('case-number').value = 0;
}) */





//========= WITHOUT ID BY USING CLASS =======//

/*
const plusBtns = document.getElementsByClassName('fa-plus');
const countView = document.getElementsByClassName('form-control');
const minusBtns = document.getElementsByClassName('fa-minus');
for (let i = 0; i < plusBtns.length; i++) {
    for (let j = 0; j < countView.length; j++) {
        if (i == j) {
            plusBtns[j].parentElement.addEventListener('click', function () {
                let currenCount = parseInt(countView[j].value);
                currenCount += 1;
                countView[j].value = currenCount;
            })
        }
    }
}
for (let i = 0; i < minusBtns.length; i++) {
    for (let j = 0; j < countView.length; j++) {
        if (i == j) {
            minusBtns[j].parentElement.addEventListener('click', function () {
                let currenCount = parseInt(countView[j].value);
                currenCount -= 1;
                countView[j].value = currenCount;
            })
        }
    }
}
*/