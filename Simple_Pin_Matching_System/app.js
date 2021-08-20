document.getElementById('gen-btn').addEventListener('click', function () {
    const pin = Math.round(Math.random() * (10000 - 1000)) + 1000;
    document.getElementById('gen-pin-view').value = pin;
})

document.getElementById('numpad').addEventListener('click', function (event) {
    const currentInput = event.target.innerText;
    if (isNaN(currentInput)) {
        if (currentInput == 'C') {
            document.getElementById('type-view').value = '';
        } else if (currentInput == '<') {

        }
    } else {
        const preValue = document.getElementById('type-view').value;
        const newValue = preValue + currentInput;
        document.getElementById('type-view').value = newValue;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const typedPin = document.getElementById('type-view').value;
    const genPin = document.getElementById('gen-pin-view').value;
    if (typedPin == genPin) {
        document.getElementById('correct').style.display = 'block';
    } else {
        document.getElementById('incorrect').style.display = 'block';
    }
    document.getElementById('type-view').value = '';
    // document.getElementById('gen-pin-view').value = '';
})

document.getElementById('type-view').addEventListener('focus', function () {
    const notify = document.getElementsByClassName('notify');
    for (const noti of notify) {
        noti.style.display = 'none';
    }
})