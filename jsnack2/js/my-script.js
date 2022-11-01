'use strict';
const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
} else {
    console.log('le parole hanno la stessa lunghezza');
}