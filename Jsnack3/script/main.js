// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// CICLO FOR

var somma = 0;

for (var i = 1; i <= 5; i++) {
var numero = parseInt(prompt("Scegli un numero"));

var numinseriti = document.getElementById('numinseriti').innerHTML;
document.getElementById('numinseriti').innerHTML = numinseriti + "<li>" + numero + "</li>";


   console.log(numero);
  somma = somma + numero;
 }
 console.log(somma);





// CICLO WHILE

// var i = 1
// while (i <= 5) {
//  var numero = parseInt(prompt("Scegli un numero"));
//  i++;
//
//  console.log(numero);
//  somma = somma + numero;
// }

console.log(somma);

document.getElementById('output').innerHTML = "Somma= " + somma;
// document.getElementById('numinseriti').innerHTML = "Num Inseriti: ";

// OUTPUT Numeri inseriti
