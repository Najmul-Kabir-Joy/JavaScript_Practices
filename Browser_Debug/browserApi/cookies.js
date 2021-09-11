document.cookie.split('; ').map(x => console.log(x.split('=')));
//finding a cookiee data
document.cookie.split('; ').find(x => x.includes('country'));
//getting the value of a cookie
document.cookie.split('; ').find(x => x.includes('country')).split('=')[1];

const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}