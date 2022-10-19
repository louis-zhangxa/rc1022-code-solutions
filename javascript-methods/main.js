var numbers = [1, 3, 4];
var maximumValue = Math.max(...numbers);
console.log('the value of maximumValue:', maximumValue);

var heroes = ['spiderman', 'blackpanther', 'captionamerica', 'thor'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('the value of randomHero', randomHero);

var library = [
  {
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

var lastBook = library.pop();
var firstBook = library.shift();
console.log('the value of lastBook', lastBook);
console.log('the value of firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('the value of library', library);

var fullName = 'Louis Zhang';
var firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName', sayMyName);
