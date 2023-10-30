var mojeIme = "Marijan";
var mojePrezime = "Jakovljevic";
var godine = 25;
var zavrsenaSkola = true;
var dan_u_nedelji = 1;

if (zavrsenaSkola == true) {
  zavrsenaSkola = "zavrsio sam skolu";
} else {
  zavrsenaSkola = "nisam zavrsio skolu";
}

console.log(
  `Moje ime je ${mojeIme} ${mojePrezime}, imam ${godine} godina, i ${zavrsenaSkola}. `
);
