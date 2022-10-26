'use strict';
let amount = 0
for (let i = 0; i < 10; i++) {
   let number = Number(prompt('Inserisci un numero'));
   amount = amount + number
}

console.log(`Tot : ${amount}`);
