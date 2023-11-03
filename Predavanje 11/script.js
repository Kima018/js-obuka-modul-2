var wrapper = document.querySelector(".image-wrapper");

const slikeURL = [
  "https://www.b92.net/news/pics/2023/08/30/58447846564ef1fe3ead31885220113_v4_big.jpg",
  "https://www.b92.net/news/pics/2021/09/09/13558257086139e01b70e8a645054144_v4_big.jpg",
  "https://cdn.navidiku.rs/firme/proizvodgalerija/galerija5929/otkup-vozila-marko---otkup-volkswagen-golf-1-modela.jpg",
];

for (let i = 0; i < slikeURL.length; i++) {
  var slika = document.createElement("img");
  slika.setAttribute("src", slikeURL[i]);
  slika.classList.add("slika");
  wrapper.appendChild(slika);
}

// var slika = document.querySelectorAll(".slika");
// for (var i = 0; i < slika.length; i++) {
//   slika[i].addEventListener("click", funkcijaSlike);
// }

// function funkcijaSlike(event) {
//   var slika = event.target;
//   if (slika.classList.contains("veca-slika")) {
//     slika.classList.remove("veca-slika");
//   } else {
//     slika.classList.add("veca-slika");
//   }
//   console.log(slika);
// }

//ODNOSI SE I NA SAM WRAPPER, I DODAJE MU KLASU ZA SLIKU...
// wrapper.addEventListener("click", function (e) {
//   e.target.classList.toggle("veca-slika");
// });

wrapper.addEventListener("click", function (e) {
  var slika = e.target;
  var srcAtribut = slika.getAttribute("data-wrapper");
  if (srcAtribut != "wrapper") {
    e.target.classList.toggle("veca-slika");
  }
});
