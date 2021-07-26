const jokes = require('give-me-a-joke')
const colors = require('../colors')
const cowsay = require('../node_modules')

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);

});

// console.log('red'.red);