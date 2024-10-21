/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function countVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for (let i = 0; i < string.lenght; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            counter = counter + 1;
        }
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console
const stringVowels = countVowels(word);
console.log(stringVowels);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)