'use strict';
const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

if (firstWord.lenght > secondWord.lenght) {
    console.log(secondWord, firstWord);
} else if (firstWord.lenght < secondWord.lenght) {
    console.log(first, firstWord);
} else {
    console.log('le parole hanno la stessa lunghezza');
}