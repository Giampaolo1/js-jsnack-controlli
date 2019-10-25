// JSnack 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var num1 = prompt ("inserisci un num1");
var num2 = prompt ("inserisci un num2");

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("I num sono uguali");
}
