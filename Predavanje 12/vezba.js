// var gradovi = [
//   {
//     ime: "Beograd",
//     temperatura: -2,
//     padavine: "sneg", //sneg, kisa, bez padavina
//   },
//   {
//     ime: "Subotica",
//     temperatura: 13,
//     padavine: "bez padavina",
//   },
// ];
var gradovi = [];

document.getElementById("dodajGrad").addEventListener("click", dodajGrad);
document
  .getElementById("topliGrad")
  .addEventListener("click", prikaziTopliGrad);
document
  .getElementById("hladniGrad")
  .addEventListener("click", prikaziHladniGrad);

function dodajGrad() {
  var porukaEl = document.getElementById("poruka");
  var grad = prompt("unesi ime grada =>");
  grad = grad.split(" ");
  var privremeniGrad = {
    ime: grad[0],
    temperatura: grad[1],
  };
  gradovi.push(privremeniGrad);
}

function prikaziTopliGrad() {
  var porukaEl = document.getElementById("poruka1");
  porukaEl.innerHTML = "";
  for (var grad in gradovi) {
    grad = gradovi[grad];
    if (grad["temperatura"] > 12) {
      var paragraf = document.createElement("p");
      paragraf.style.color = "red";
      var paragrafText = document.createTextNode(
        grad["ime"] + " " + `${grad["temperatura"]}°C`
      );

      paragraf.append(paragrafText);
      document.getElementById("poruka1").append(paragraf);
    }
  }
}

function prikaziHladniGrad() {
  var porukaEl = document.getElementById("poruka2");
  porukaEl.innerHTML = "";
  for (var grad in gradovi) {
    grad = gradovi[grad];
    if (grad["temperatura"] < 12) {
      var paragraf = document.createElement("p");
      paragraf.style.color = "blue";
      var paragrafText = document.createTextNode(
        grad["ime"] + " " + `${grad["temperatura"]}°C`
      );
      paragraf.append(paragrafText);
      document.getElementById("poruka2").append(paragraf);
    }
  }
}

// var poruka = prompt("unesi ime grada =>");
// var paragraf = document.createElement("p");
// paragraf.append(poruka);
// document.getElementById("poruka").append(paragraf);
// console.log(paragraf);

// var grad = prompt("unesi ime grada =>");
// document.getElementById("poruka").innerHTML = grad;

// function prikaziHladniGrad() {
// var porukaEl = document.getElementById("poruka");
//   porukaEl.innerHTML = "";
//   for (var grad in gradovi) {
//     grad = gradovi[grad];
//     var paragraf = document.createElement("p");
//     var paragrafText = document.createTextNode(
//       grad["ime"] + " " + grad["temperatura"]
//     );
//     paragraf.append(paragrafText);
//     document.getElementById("poruka").append(paragraf);
//   }
// }
