var gradovi = [
  {
    ime: "Beograd",
    temperatura: -2,
    padavine: "sneg", //sneg, kisa, bez padavina
  },
  {
    ime: "Subotica",
    temperatura: -4,
    padavine: "bez padavina",
  },
];

for (var grad in gradovi) {
  var prognoza = gradovi[grad];

  var paragraf = document.createElement("p");
  var paragrafText = document.createTextNode(
    prognoza["ime"] + " " + prognoza["temperatura"] + " " + prognoza["padavine"]
  );

  paragraf.append(paragrafText);

  console.log(paragraf);
  document.getElementById("prognoza").append(paragraf);
}
// for (var grad in gradovi) {
//   var vreme = document.createElement("p");
//   vreme.textContent =
//     prognoza["ime"] +
//     " " +
//     prognoza.temperatura +
//     " " +
//     prognoza.padavine;

//   document.getElementById("prognoza").appendChild(vreme);
//------------------------------------------------------------------
// .getElementById("prognoza")
// .append(
//   prognoza.ime +
//     "" +
//     prognoza.temperatura +
//     "" +
//     prognoza.padavine
// );
// console.log(gradovi[i].ime);
// console.log(gradovi[i].temperatura);
// console.log(gradovi[i].padavine);
