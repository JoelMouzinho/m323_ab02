const R = require('ramda');

const isDigit = (char) => !isNaN(char) && char !== ' ' && char !== '.';

const filterDigits = R.filter(isDigit);

const countElements = (arr) => arr.length;

const countNumericCharacters = R.compose(
    countElements,
    filterDigits,
    R.split('') 
);

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const result = countNumericCharacters(sentence);

console.log(result); 
