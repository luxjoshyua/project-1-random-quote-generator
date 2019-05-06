/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Second Version using the HTML empty string method

******************************************/

// Create an array of quote objects, give each object properties e.g. quote, source, year, citation, tag, context
var quotes = [

    // quote one
    {
        quote: 'Political power grows out of the barrel of a gun.',
        source: 'Mao',
        year: 1938,
        citation: 'Quotation\'s from Chairman Mao Tse-Tung book'
    },

    // quote two
    {
        quote: 'Destroy the Museums. Crack syntax. Sabotage the adjective. Leave nothing but the verb.',
        source: 'Filippo Tommaso Marinetti',
        citation: 'Futurist Art in Modernism',
        tag: '20th Century Art, Futurism, Italian Philosophy',
        year: 1912
    },

    // quote three
    {
        quote: 'The history of all hitherto existing society is the history of class struggles.',
        source: 'Karl Marx',
        citation: 'Communist Manifesto',
        tag: 'Political Philosophy',
        year: 1848
    },

    // quote four
    {
        quote: 'Man will become immeasurably stronger, wiser, and subtler; his body will become more harmonious, his movements more rhythmic, his voice more musical. The forms of life will become dynamically dramatic. The average human type will rise to the heights of an Aristotle, a Goethe, or a Marx. And above these heights, new peaks will rise.',
        source: 'Lev Davidovich Bronstein aka Leon Trotsky',
        citation: 'Trotsky on the Society of the Future',
        tag: 'Russian History',
        year: 1924
    },

    // quote five
    {
        quote: 'Without revolutionary theory there can be no revolutionary movement.',
        source: 'Vladimir Ilyich Ulyanov aka Lenin',
        citation: 'Dogmatism and "Freedom of Criticism"',
        tag: 'Russian History, Political Philosophy',
        year: 1902
    },

    // quote six
    {
        quote: 'I know you\'ve come to kill me, Shoot, you are only going to kill a man.',
        source: "Ernesto 'Che' Guevara",
        context: 'Context; The CIA had captured Che in the Bolivian jungle and were preparing to shoot him in a one-room schoolhouse in the town of La Higuera.',
        citation: 'Lee Anderson\'s biography Che Guevara: A Revolutionary Life',
        tag: 'Latin American History',
        year: 1967
    },

    // quote seven
    {
        quote: 'Hey hey LBJ, how many kids did you kill today?',
        source: 'Vietnam War History book',
        context: 'Context; American protestors challenging Lyndon B. Johnson\'s decision to invade Vietnam in 1955.',
        citation: 'New York Times Article',
        tag: 'Vietnamese History',
        year: 1968
    }
];

// log the array to the console, check it's working, remember 'when in doubt, log it out'
console.log(quotes);

// create getRandomQuote() function
function getRandomQuote() {
    // generate a random number between 0 and the last index in the array parameter
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // return the randomly selected quote object
    return randomQuote; 
}

// Create a random colour function
function randomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')'
    document.querySelector('body').style.backgroundColor = color;
}

function printQuote() {
    // create new variable called randomQuote, assign it to getRandomQuote variable
    let randomQuote = getRandomQuote();
    // setup empty string, will be added to below
    let html = '';
    // add the p element with class of quote
    html += '<p class="quote">' + randomQuote.quote + '</p>';
    // add the p element with class of source
    html += '<p class="source">' + randomQuote.source;
    // check for year
    if (randomQuote.year) {
        html += '<span class="year">' + randomQuote.year + '</span>';
    }
    // check for tag
    if (randomQuote.tag) {
        html += '<span class="tag">' + randomQuote.tag + '</span>';
    }
    // check for citation
    if (randomQuote.citation) {
        html += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    // check for context
    if (randomQuote.context) {
        html += '<p class="context">' + randomQuote.context + '</p>';
    }
    // close the p element
    html += '</p>';
    // add the string to the quote-box div
    let quoteDiv = document.getElementById('quote-box');
    quoteDiv.innerHTML = html;
}

// invoke the printQuote and randomColor functions when button is clicked
document.getElementById('loadQuote').addEventListener("click", function () {
    printQuote();
    randomColor();
}, false);

printQuote();
randomColor();

/* print new quote to page after certain interval
accepts two parameters - function, timing */
setInterval(printQuote, 10000);