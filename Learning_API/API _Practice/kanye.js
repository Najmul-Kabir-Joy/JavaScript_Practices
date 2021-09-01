const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (quotes) => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quotes.quote;
}

quotes();
