//---------------HomeWork---------------------

var korpa = ["Maticna ploca", "Ram memorija", "Graficka karta"];

for (var proizvod in korpa) {
  console.log(korpa[proizvod]);
}

var sadrzajKorpe = {
  maticnaPloca: 500,
  ramMemorija: 200,
  gpu: 350,
};

//Nzm da li je pravilno ovako, vrv postoji mnogo bolji nacin ali sam isprobao i radi
var ukupnaCena = 0;

for (var proizvod in sadrzajKorpe) {
  ukupnaCena += sadrzajKorpe[proizvod];
  console.log(`Cena za ${proizvod} je ${sadrzajKorpe[proizvod]}`);
}
console.log("Ukupna cena je " + ukupnaCena);

document.getElementById("listaKomponenata").innerHTML = "<h5>Pozdrav!</h5>";
document.getElementById("listaKomponenata").innerHTML += "<h2>Maki</h2>";

//Dodavanje proizvoda iz korpe u div koristeci .innerHTML i for petlje
for (var proizvod in korpa) {
  document.getElementById("vezba").innerHTML += `<h2>${korpa[proizvod]}</h2>`;
}
