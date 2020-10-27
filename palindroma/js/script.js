// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// input della Parola
var input = prompt('Inserisci una parola da definire');
console.log(input);

var stringaReverse = scomposizione();

// -------------------------------------------------------------------
// // versione senza funzione
// // convertire la parola in array
// var arrayInput = input.split('');
// console.log(arrayInput);
//
// // invertire l'array
// var arrayReverse = arrayInput.reverse();
// console.log(arrayReverse);
//
// // // convertire da array a stringa grazie a join con '' vuoti
// var stringaReverse = arrayReverse.join('');
// console.log(stringaReverse);
// ----------------------------------------------------------------

// condizione che stampa quando una parola e' palindroma o meno
if (stringaReverse == input) {
  console.log("La parola e' palindroma");
} else {
  console.log("La parola non e' palindroma");
}

// funzione...
function scomposizione() {
  return input.split("").reverse().join("");
}
