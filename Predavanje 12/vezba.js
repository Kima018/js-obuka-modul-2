// var poruka = prompt("unesi ime grada =>");
// var paragraf = document.createElement("p");
// paragraf.append(poruka);
// document.getElementById("poruka").append(paragraf);
// console.log(paragraf);

// var grad = prompt("unesi ime grada =>");
// document.getElementById("poruka").innerHTML = grad;

var gradovi = [
  // {
  //   ime: "Beograd",
  //   temperatura: -2,
  //   padavine: "sneg", //sneg, kisa, bez padavina
  // },
  // {
  //   ime: "Subotica",
  //   temperatura: -4,
  //   padavine: "bez padavina",
  // },
];

document.getElementById("dodajGrad").addEventListener("click", dodajGrad);
document.getElementById("topliGrad").addEventListener("click", prikaziGrad);
document.getElementById("hladniGrad").addEventListener("click", prikaziGrad);

var porukaEl = document.getElementById("poruka");

function dodajGrad() {
  var grad = prompt("unesi ime grada =>");
  grad = grad.split(" ");

  var privremeniGrad = {
    ime: grad[0],
    temperatura: grad[1],
  };
  gradovi.push(privremeniGrad);
  console.log(gradovi);
}

function prikaziTopliGrad() {
  porukaEl.innerHTML = "";
  for (var grad in gradovi) {
    grad = gradovi[grad];
    var paragraf = document.createElement("p");
    var paragrafText = document.createTextNode(
      grad["ime"] + " " + grad["temperatura"]
    );
    paragraf.append(paragrafText);
    document.getElementById("poruka").append(paragraf);
  }
}

function prikaziHladniGrad() {
  porukaEl.innerHTML = "";
  for (var grad in gradovi) {
    grad = gradovi[grad];
    var paragraf = document.createElement("p");
    var paragrafText = document.createTextNode(
      grad["ime"] + " " + grad["temperatura"]
    );
    paragraf.append(paragrafText);
    document.getElementById("poruka").append(paragraf);
  }
}
