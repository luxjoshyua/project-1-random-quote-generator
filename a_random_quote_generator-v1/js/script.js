/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




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


function clearQuote() {
  //clear here
  var myNode = document.getElementById("quote-box");

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}


// setup up the containing function printQuote
function printQuote() {

  //call clear quote
  clearQuote();


  // Call the `getRandomQuote` function and assign it to a variable, then use it to build the string below
  let randomQuoteCall = getRandomQuote();

  // parent div
  let parentDiv = document.getElementById('quote-box');

  // mark the variable (quoteDiv), attach it to a new element
  let quoteDiv = document.createElement("p");
  // add the class of quote
  quoteDiv.classList.add("quote");
  // mark the variable, attach it to the random quote generator variable
  let quoteCopy = document.createTextNode(randomQuoteCall.quote);

  quoteDiv.appendChild(quoteCopy);

  parentDiv.appendChild(quoteDiv);

  // Use an if statement to check for the source property before adding it to the HTML string.
  if (randomQuoteCall.source) {
    // create a var, attach it to an HTML element on the page
    let source = document.createElement("p");
    // add the class of source
    source.classList.add("source");
    // create a new text node that prints HTML characters to the document
    let sourceCopy = document.createTextNode(randomQuoteCall.source);
    source.appendChild(sourceCopy);
    // insert into the parentDiv variable created above, append the source p element here to it
    parentDiv.appendChild(source);
  }

  // Use an if statement to check for the citation property before adding it to the HTML string.
  if (randomQuoteCall.citation) {
    // create a var, attach it to an HTML element on the page
    let citation = document.createElement("span");
    // add the class of citation
    citation.classList.add("citation");
    // create a new text node that prints HTML characters to the document
    let citationCopy = document.createTextNode(randomQuoteCall.citation);
    citation.appendChild(citationCopy);
    // insert into the parentDiv variable created above, append the citation div here to it
    parentDiv.appendChild(citation);
  }

  // Use an if statement to check for the year property before adding it to the HTML string.
  if (randomQuoteCall.year) {
    // create a var, attach it to an HTML element on the page
    let year = document.createElement("span");
    // add the class of year 
    year.classList.add("year");
    // create a new text node that prints HTML characters to the document
    let yearCopy = document.createTextNode(randomQuoteCall.year);
    // attach yearCopy 
    year.appendChild(yearCopy);
    // appendChild year to the parentDiv
    parentDiv.appendChild(year);
  }

  // Use an if statement to check for the tag property before adding it to the HTML string.
  if (randomQuoteCall.tag) {
    // create a var, attach it to an HTML element on the page
    let tag = document.createElement("p");
    // add the class of year 
    tag.classList.add("tag");
    // create a new text node that prints HTML characters to the document
    let tagCopy = document.createTextNode(randomQuoteCall.tag);
    // attach yearCopy 
    tag.appendChild(tagCopy);
    // appendChild tag to the parentDiv
    parentDiv.appendChild(tag);
  }

  // Use an if statement to check for the context property before adding it to the HTML string.
  if (randomQuoteCall.context) {
    // create a var, attach it to an HTML element on the page
    let context = document.createElement("p");
    // add the class of contex
    context.classList.add("context");
    // create a new text node that prints HTML characters to the document
    let contextCopy = document.createTextNode(randomQuoteCall.context);
    // attach contextCopy 
    context.appendChild(contextCopy);
    // appendChild context to the parentDiv
    parentDiv.appendChild(context);
  }
};

printQuote();
randomColor();


// invoke the printQuote frunction when button is clicked
document.getElementById('loadQuote').addEventListener("click", function () {
  printQuote();
  randomColor();
}, false);

// change DOM to random background color when button is clicked
//document.getElementById('loadQuote').addEventListener("click", randomColor, false);


// change the quote on screen after 20 seconds with setInterval()

//const clearPrintQuote = setInterval(printQuote, 20000); 

//clearPrintQuote(); 

//setTimeout(clearInterval, 5000, printQuote)




// var setInterval_ID = setInterval(printQuote, 2000);

// setTimeout(stop_interval, 1000);

// function stop_interval() {
//   clearInterval(setInterval_ID);
// }