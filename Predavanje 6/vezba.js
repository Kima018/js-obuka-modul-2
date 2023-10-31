var korpa = ["Maticna ploca", "Ram memorija", "Graficka karta"];

for (var proizvod in korpa) {
  console.log(korpa[proizvod]);
}

var sadrzajKorpe = {
  maticnaPloca: 500,
  ramMemorija: 200,
  gpu: 350,
};

var ukupnaCena = 0;

for (var proizvod in sadrzajKorpe) {
  ukupnaCena += sadrzajKorpe[proizvod];
  console.log(`Cena za ${proizvod} je ${sadrzajKorpe[proizvod]}`);
}
console.log("Ukupna cena je " + ukupnaCena);
