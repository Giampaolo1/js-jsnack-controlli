// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// ciclo for

var somma = 0;
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("Scegli un numero"));

  console.log(numero);
  somma = somma + numero;
}
console.log(somma);

// ciclo while

// while ( condizione ) {
// // codice da eseguire
// // istruzioni per terminare il ciclo
// }
