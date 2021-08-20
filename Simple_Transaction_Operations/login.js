/*---------------------
    FOR LOGIN SYSYEM 
----------------------*/
document.getElementById('login_btn').addEventListener('click', function () {
    const getEmail = document.getElementById('email_input').value;
    const getpass = document.getElementById('pass_input').value;
    const preEmail = 'najmul@mail.com';
    const prePass = 's1234s';
    if ((getEmail == preEmail) && (getpass == prePass)) {
        window.location.href = 'banking.html';
    }
});
document.getElementById('login_btn').addEventListener('onchange', function () {
    const getEmail = document.getElementById('email_input').value;
    const getpass = document.getElementById('pass_input').value;
    const preEmail = 'najmul@mail.com';
    const prePass = 's1234s';
    if ((getEmail == preEmail) && (getpass == prePass)) {
        window.location.href = 'banking.html';
    }
});