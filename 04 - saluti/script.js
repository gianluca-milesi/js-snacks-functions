/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

// Dichiara la funzione qui.

// function hello(string) {
//     return `Hello ${string}`;
// }

// ARROW FUNCTION
const hello = (string) => `Hello ${string}`;

// Invoca la funzione qui e stampa il risultato in console
const nameHello = hello(name);
console.log(nameHello)

//Risultato atteso se si passa 'Mario': // ciao Mario