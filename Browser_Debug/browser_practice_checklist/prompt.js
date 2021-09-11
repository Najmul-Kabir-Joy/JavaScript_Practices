const input = () => {
    const value = parseInt(prompt('Enter a number: '))
    alert(value + 200);
};

const check = () => {
    const res = confirm('Do you want to see the site link?');
    if (res) {
        console.log(location.href);
    }
}