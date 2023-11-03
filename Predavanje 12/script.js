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
  var vreme = document.createElement("p");
  vreme.textContent =
    gradovi[grad].ime +
    " " +
    gradovi[grad].temperatura +
    " " +
    gradovi[grad].padavine;
  document.getElementById("prognoza").appendChild(vreme);

  // .getElementById("prognoza")
  // .append(
  //   gradovi[grad].ime +
  //     "" +
  //     gradovi[grad].temperatura +
  //     "" +
  //     gradovi[grad].padavine
  // );
  // console.log(gradovi[i].ime);
  // console.log(gradovi[i].temperatura);
  // console.log(gradovi[i].padavine);
}
