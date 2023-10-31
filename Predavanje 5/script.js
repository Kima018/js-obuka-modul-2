document.getElementById("contentHolder").innerHTML = " <p>test 123</p>";

var prviParagraph = document.createElement("p");
prviParagraph.innerHTML = "Prvi JS paragraf";
prviParagraph.style.color = "red";

document.getElementById("contentHolder").appendChild(prviParagraph);

var linkDoGoogla = document.createElement("a");
linkDoGoogla.setAttribute("href", "https://google.com");
linkDoGoogla.innerHTML = "klinkni da odes na google";

document.getElementById("contentHolder").appendChild(linkDoGoogla);

var slika = document.createElement("img");
slika.setAttribute(
  "src",
  "https://e0.365dm.com/23/02/2048x1152/skysports-f1-2023-cars-launch_6060549.jpg"
);
slika.setAttribute("alt", "F1 formula");
slika.classList.add("slika");
slika.classList.add("border");

document.getElementById("contentHolder").appendChild(slika);

//--------------------------------------homework---------------------------------------

// var bojaNaslova = (document.getElementById("naslov").onclick = changeColor()); <- Zasto odmah povlaci funcion a ne na event??!
// var bojaNaslova = (document.getElementById("naslov").onclick = changeColor);
// function changeColor() {
//   document.getElementById("naslov").style.color = "red";
// }

var bojaNaslova = document.getElementById("naslov");
bojaNaslova.onclick = changeColor;

function changeColor() {
  if (bojaNaslova.style.color == "red") {
    bojaNaslova.style.color = "black";
    bojaNaslova.style.textDecoration = "none";
  } else {
    bojaNaslova.style.color = "red";
    bojaNaslova.style.textDecoration = "underline";
  }
}
