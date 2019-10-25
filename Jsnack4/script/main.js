// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var lista = ["Luca", "Marco", "Mario"];
console.log(lista);

var askname = prompt("Come ti chiami?");

var trovato = false;
console.log(trovato,"prima di for");

// ciclo
for(var index = 0; index < lista.length; index++) {
  console.log(lista[index]);
  if(askname == lista[index]) {
    trovato=true;
    console.log("Nome trovato", index, trovato);
  }
}

console.log(trovato, "dopo for");

// seleziono elemento html in cui fare output

if (trovato == true) {
  console.log("sei nella lista");

  var htmlElement = document.getElementById("output");
  htmlElement.innerHTML = "Sei Invitato!";

} else {
  console.log("non sei nella lista");
  var htmlElement = document.getElementById("output");
  htmlElement.innerHTML = "Non sei invitato!";
}
