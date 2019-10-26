// JSnack 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt ("Inserisci una parola");
var parola2 = prompt ("Inserisci un altra parola");

// console.log(parola1.length);
// console.log(parola2.length);

if (parola1.length < parola2.length) {

  console.log(parola1);
  console.log(parola2);
  document.getElementById('output').innerHTML = parola1 + " / " + parola2;

 } else if (parola2.length < parola1.length) {

   console.log(parola2);
   console.log(parola1);
   document.getElementById('output').innerHTML = parola2 + " / " + parola1;

 } else {
  console.log(parola1 , parola2);
  document.getElementById('output').innerHTML = "'" + parola1 + "'" + " è lunga quanto " + "'" + parola2 + "'";
 }
