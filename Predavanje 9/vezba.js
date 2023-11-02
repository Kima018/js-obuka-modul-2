// var kocka = document.createElement("div");
var node = document.getElementById("wrapper");
var kocka = document.createElement("div");
kocka.classList.add("square");
//dodajem u html divove i dodeljujem im klase
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    var kocka = document.createElement("div");
    kocka.classList.add("square");
    node.appendChild(kocka);
  } else {
    var kocka = document.createElement("div");
    kocka.classList.add("square", "plava");
    node.appendChild(kocka);
  }
}
//pretrazujem sve elemente sa klasom square, i na klik il dodajem ili uklanjam klasu
var crnaKocka = document.querySelectorAll(".square");

crnaKocka.forEach(function (crnaKocka) {
  crnaKocka.addEventListener("click", function () {
    if (crnaKocka.classList.contains("crna")) {
      crnaKocka.classList.remove("crna");
    } else {
      crnaKocka.classList.add("crna");
    }
  });
});
