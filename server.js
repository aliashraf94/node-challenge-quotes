const { response } = require("express");
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Challange 1

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get('/', (request, response) => {
  response.send('Hi there this is your server, I will teach you some quotes. I have two endpoints for you /quotes and /quotes/random')
});

app.get('/quotes', (request, response) => {
  response.send(quotes)
});

app.get('/quotes/random', (request, response) => {
  response.send(pickFromArray(quotes))
});

// Challange 2

// In this exercise the user will send data through the url.

// When the user changes the url like this:

// /quotes/search?term=life
// /quotes/search?term=success
// /quotes/search?term=miss
// The server will respond with life, success, miss

// Extra (bonus) requirements:

// bonus: make your search case-insensitive
// bonus: make the search return matches on quote OR author text.

app.get ('/quotes/search', (request, response) => {
  const term = request.query.term.toLowerCase()
  const results = (filteredQuotes(quotes, term))
  response.send(results)
})

// Practice some Inclass Ecercises with Yonah Week-2 NodeJs

// GET - Returns a single quote object (by it's position in the array)

app.get("/quotes/:index", (request, response) => {
  const index = parseInt(request.params.index) -1
  const quote = quotes[index]
  if (quote) {
    response.status(200).send(quote)
  } else {
    response.status(404).send()
  }
})


// POST - Create a new quote (add it to the end of the array)

app.post("/quotes", (request, response) => {
  const quote = {
    quote: request.query.quote,
    author: request.query.author,
  }

  quotes.push(quote)

  response.status(201).send({id: quotes.length})
})

// PUT - Update an existing quote

app.put("/quotes/:index", (request, response) => {
  const index = parseInt(request.params.index) -1
  const quote = {
    quote: request.query.quote,
    author: request.query.author,
  }
  const result = quotes.splice(index, 1 ,quote)
  response.status(200).send(quote)
})

// DELETE - Delete an existing quote from the array

app.delete("/quotes/:index", (request, response) => {
  const index = parseInt(request.params.index) -1
  quotes.splice(index, 1 , undefined)
  response.status(204).send()
})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const filteredQuotes = (quoteArray, term) => {
  let newArray = quoteArray.filter((eachQuote) => {
    if (eachQuote.quote.toLowerCase().includes(term) || eachQuote.author.toLowerCase().includes(term) ) {
      return eachQuote.quote
    }
  })
  return newArray
}
//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
