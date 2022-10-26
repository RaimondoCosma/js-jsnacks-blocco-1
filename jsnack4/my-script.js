'use strict';

const nameList = ['pippo', 'pluto', 'paperino'];
const userName = prompt('Inserisci il tuo nome:');
let found = false
for (let i = 0; i < 10; i++) {
    if (userName === nameList[i]) {
        found = true;
        break;
    }
}

if (found) {
    alert('Nome valido')
} else {
    alert('non sei presente nella lista')
}