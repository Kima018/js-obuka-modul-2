document.getElementById("buyButton").addEventListener("click", function () {
  var cena = document.getElementById("cenaProizvoda").getAttribute("data-cena");
  console.log(`Cena proizvoda je ${cena} eura`);
});

//---------------------------------------------
var dugme = document.getElementsByClassName("dugme");
console.log(dugme);

for (var i = 0; i < dugme.length; i++) {
  dugme[i].addEventListener("click", function () {
    console.log("test");
    this.style.color = "red";
  });
}

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i + " je paran broj");
  }
}
