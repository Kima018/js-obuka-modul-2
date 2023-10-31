var proizvodi = ["helb", "mleko", "jogurt"];

// v01
// var listaProizvoda = (document.getElementById("proizvodi").innerHTML =
//   proizvodi);
// v02
// document.getElementById("proizvodi").innerHTML = proizvodi[0];
// document.getElementById("proizvodi").innerHTML += " " + proizvodi[1];
// document.getElementById("proizvodi").innerHTML += " " + proizvodi[2];
// v03
document.getElementById("proizvodi").innerHTML += `<p> ${proizvodi[0]}</p>`;
document.getElementById("proizvodi").innerHTML += `<p> ${proizvodi[1]}</p>`;
document.getElementById("proizvodi").innerHTML += `<p> ${proizvodi[2]}</p>`;
// vezba
document.getElementById(
  "proizvodi"
).innerHTML += `<p style='color:red'> ${proizvodi[0]}</p>`;
document.getElementById(
  "proizvodi"
).innerHTML += `<p style='color:blue'> ${proizvodi[1]}</p>`;
document.getElementById(
  "proizvodi"
).innerHTML += `<p style='color:pink'> ${proizvodi[2]}</p>`;
