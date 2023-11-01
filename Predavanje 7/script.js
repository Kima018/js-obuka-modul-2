// var godine = prompt("Koliko godina imate?");
// if (godine >= 18) {
//   console.log("Punoletni ste, dobrodosli");
// } else {
//   console.log("Morate biti punoletni da vidite sadrzaj");
// }

var ime = prompt("Kako se zovete?");
// console.log(typeof ime);
console.log(ime);
ime = ime.toLowerCase();
console.log(ime);

if (ime == "Maki") {
  console.log(`Dobrodosao ${ime}!`);
} else if (ime == "Petar") {
  console.log(`Dobrodosao ${ime}!`);
} else {
  console.log("Pogresno ime, pristup je odbijen!");
}
