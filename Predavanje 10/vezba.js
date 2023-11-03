//domaci za 10u lekciju

document.getElementById("korpa").addEventListener("click", kupiProizvod);
//funkcija za racunanje poreza
function dodajPorez(x) {
  return (x = x + x * 0.2);
}
//funkcija za racucanje cene sa porezom od 20%(pljkacka)
function kupiProizvod() {
  var cena = document.getElementById("cena");
  cena = parseInt(cena.textContent);
  var novaCena = dodajPorez(cena);
  console.log(novaCena);
  alert(`Cena prozivoda sa porezom iznosi ${novaCena} eura`);
}
// kupiProizvod();
