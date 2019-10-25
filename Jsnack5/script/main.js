// JSnack 5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// Crea un array vuoto.
var array = [];

//  Chiedi per 6 volte all’utente di inserire un numero
for (var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
    if (numero % 2 == 0) {
    } else {
      array.push(numero)
    }
}

console.log(array);
