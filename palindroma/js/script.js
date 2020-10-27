// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// input della Parola
var input = prompt('Inserisci una parola da definire');
console.log(input);

// versione senza funzione
// convertire la parola in array
var arrayInput = input.split('');
console.log(arrayInput);

// invertire l'array
var arrayReverse = arrayInput.reverse();
console.log(arrayReverse);

// // convertire da array a stringa grazie a join con '' vuoti
var stringaReverse = arrayReverse.join('');
console.log(stringaReverse);

// condizione che stampa quando una parola e' palindroma o meno
if (stringaReverse == input) {
  console.log("La parola e' palindroma");
} else {
  console.log("La parola non e' palindroma");
}

// versione con funzione...
function provaFunzione(num1, num2) {

}
