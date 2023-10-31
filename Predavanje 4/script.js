var naslov = "Hello world";
document.getElementById("heading").innerHTML = naslov;
document.getElementById("heading2").innerHTML = naslov;
document.getElementById("knjige").innerHTML =
  "<p>Harry Potter - kamen mudrosti</p>";
document.getElementById("knjige").innerHTML += " <p>Harry Potter - 2</p>";

var ime = "Marijan";
var prezime = "Jakovljevic";
var godine = 25;
var grad = "Nis";

document.getElementById(
  "recenica"
).innerHTML += `Zovem se ${ime},prezivam se ${prezime} i imam ${godine}godina. Ja sam iz ${
  grad + "a"
}. `;

console.log(
  `Zovem se ${ime},prezivam se ${prezime} i imam ${godine}godina. Ja sam iz ${
    grad + "a"
  }.`
);
