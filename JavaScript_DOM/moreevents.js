
document.getElementById('input').addEventListener('focus', function () {
    document.getElementById('body').style.backgroundColor = 'hotpink';
})
document.getElementById('input').addEventListener('blur', function () {
    document.getElementById('body').style.backgroundColor = 'white';
})
document.getElementById('input').addEventListener('keyup', function () {
    if ((document.getElementById('input').value) == 'delete') {
        document.getElementById('del_btn').removeAttribute('disabled', true);
    } else {
        document.getElementById('del_btn').setAttribute('disabled', 'true');
    }
})
document.getElementById('input').addEventListener('change', function () {
    if ((document.getElementById('input').value) == 'delete') {
        document.getElementById('del_btn').removeAttribute('disabled', true);
    } else {
        document.getElementById('del_btn').setAttribute('disabled', 'true');
    }
})
document.getElementById('del_btn').addEventListener('click', function () {
    document.getElementById('paragraph').style.display = 'none';
    document.getElementById('input').value = '';
})