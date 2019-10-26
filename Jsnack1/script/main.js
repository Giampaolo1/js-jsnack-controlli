// JSnack 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var num1 = prompt ("Inserisci un numero");
var num2 = prompt ("Inserisci un altro numero");

if (num1 > num2) {
  console.log(num1);
  document.getElementById('output').innerHTML = "Il num più grande è: " + num1;
} else if (num2 > num1) {
  console.log(num2);
  document.getElementById('output').innerHTML = "Il num più grande è: " + num2;
} else {
  console.log("I num sono uguali");
  document.getElementById('output').innerHTML = "I numeri sono uguali";
}
