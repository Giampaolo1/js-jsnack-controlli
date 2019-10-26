// JSnack 5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// Crea un array vuoto.
var array = [];

//  Chiedi per 6 volte all’utente di inserire un numero
for (var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));

  var numinseriti = document.getElementById('numinseriti').innerHTML;
  document.getElementById('numinseriti').innerHTML = numinseriti + "<li>" + numero + "</li>";

    if (numero % 2 == 0) {
    } else {
      array.push(numero)
    }
}

var numinseriti = document.getElementById('numinseriti').innerHTML;
document.getElementById('numinseriti').innerHTML = numinseriti + "<li>" + numero + "</li>";


// document.getElementById("numinseriti").innerHTML = "Num Inseriti: " + numero;

console.log(array);
document.getElementById("output").innerHTML = "Num Dispari: " + array;

// IDEA: devo aggiungere un controllo sui doppioni
