// JSnack 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt ("inserisci parola1");
var parola2 = prompt ("inserisci parola2");

console.log(parola1.length);
console.log(parola2.length);

if (parola1.length < parola2.length) {

  console.log(parola1);
  console.log(parola2);

 } else if (parola2.length < parola1.length) {

   console.log(parola2);
   console.log(parola1);
 } else {
  console.log(parola1 , parola2);
 }
