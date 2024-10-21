/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initialsArray(namesArray) {
    let initialsName = [];
    for (let i = 0; i < namesArray.length; i++) {
        initialsName.push(namesArray[i][0]);
    }
    return initialsName;
}






// Invoca la funzione qui e stampa il risultato in console

const initials = initialsArray(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]