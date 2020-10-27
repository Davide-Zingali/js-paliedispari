// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// input per la scelta se pari o dispari
var inputParioDispari = prompt('Scegli tra pari o dispari');
console.log(inputParioDispari);

// input utente numero da 1 a 5
var inputNumero = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('Numero scelto da Utente: ' + inputNumero);

// numero random da 1 a 5 scelto dal computer
var numeroRandom = numeroR();
console.log('Numero random computer: ' + numeroRandom);

// somma del risultato
// var sommaNumeriInput = inputNumero + numeroRandom;
var sommaNumeriInput = sommaNumeriF();
console.log('Somma dei numeri input: ' + sommaNumeriInput);

// verificare se risultato pari o dispari
var risultatoParioDispari = sommaNumeriInput % 2;

// variabili
var pari = 0;
var dispari = 0;

// condizione per stampari pari o dispari
if (risultatoParioDispari == 0) {
  console.log('La somma dei numeri essere pari');
  pari = 1;
} else if (risultatoParioDispari != 0) {
  console.log('La somma dei numeri essere dispari');
  dispari = 1;
};

// stampa se utente ha vinto o meno
if (pari == 1 && 'pari' == inputParioDispari) {
  console.log('Hai vinto!');
} else if (dispari == 1 && 'dispari' == inputParioDispari) {
  console.log('Hai vinto!');
} else {
  console.log('Hai perso!!!');
};

// funzione....
// numero random
function numeroR() {
  var risultato = Math.floor(Math.random() * 5) + 1;
  return risultato;
};

// somma risultato
function sommaNumeriF() {
  var risultatoSomma = inputNumero + numeroRandom;
  return risultatoSomma;
}
