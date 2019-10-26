// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var lista = ["Luca", "Marco", "Mario"];
console.log(lista);

document.getElementById("listainvitati").innerHTML = "Lista Invitati: " + lista;

var askname = prompt("Come ti chiami?");

document.getElementById("tuonome").innerHTML = "Tuo Nome: " + askname;


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
  document.getElementById("output").innerHTML = "Sei Invitato!";
} else {
  console.log("non sei nella lista");
  document.getElementById("output").innerHTML = "Non sei invitato!";
}
