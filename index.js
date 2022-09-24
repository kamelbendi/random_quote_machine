


 const QUOTEBANK = [
    {
        "quote" : "Don't compare yourself with other people, compare yourself with who you were yesterday ",
        "author" : "Jordan Peterson"
    },
    {
        "quote" : "If you don't say what you think then you kill your unborn self. ",
        "author" : "Jordan Peterson"
    },
    
    {
        "quote" : "If you are not willing to be a fool, you can't become a master. ",
        "author" : "Jordan Peterson"
    },
    {
        "quote": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "Be the chief but never the lord.",
        "author": "Lao Tzu"
    },
    {
        "quote": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
    }
]
 
/* const quoteBank = require('./quotes.json'); */


window.onload = init;

function init(){
    console.log('it is init');
    generateQuote();
}


function generateQuote(){
    console.log("button clicked");
    let randomNum = Math.floor(Math.random() * QUOTEBANK.length)
    console.log(randomNum);
    let randomQuote = QUOTEBANK[randomNum];
    

    let tweetQuoteLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    tweetQuoteLink += randomQuote.quote.replace(/ /g, "%20");
    tweetQuoteLink += randomQuote.author.replace(/ /g, "%20");
    document.getElementById("text").innerText = randomQuote.quote;
    console.log(randomQuote.author);
    document.getElementById("author").innerText = randomQuote.author;
    document.getElementById('tweet-quote').href = tweetQuoteLink;
    // change background
    
}
