/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function filterByFirstLetter(namesArray, letter) {
    let filteredNames = [];
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0] === letter) {
            filteredNames.push(namesArray[i]);
        }
    }
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console

const filtered = filterByFirstLetter(names, "A");
console.log(filtered);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]