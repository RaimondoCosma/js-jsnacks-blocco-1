'use strict';
let myArray = [];

for (let i = 0; i < 6; i++) {
   let userNumber = Number(prompt('Inserisci un numero'));
   if (!(userNumber % 2 === 0)) {
    myArray.push(userNumber);
   }
}
console.log(myArray);