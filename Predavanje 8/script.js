// document.getElementById("askMe").addEventListener("click", function () {
//   console.log("test123");
// });

// function askMeSomething() {
//  var x = prompt("pitaj me nesto");
//   console.log(x);
// }

var pitanja = [
  "koliko je 2+2",
  "koji je glavni grad Srbije",
  "koja je najveca reka na svetu",
];
var odgovori = ["4", "Beograd", "Nil"];

document.getElementById("askMe").addEventListener("click", askMeSomething);

function askMeSomething() {
  var randomNum = Math.floor(Math.random() * 3);
  var x = prompt(pitanja[randomNum]);

  if (x != "" && x != null) {
    x = x.toLowerCase();
    var y = odgovori[randomNum].toLowerCase();
    if (x == y) {
      console.log("TACAN ODGOVOR!");
    }
  } else {
  }
}
