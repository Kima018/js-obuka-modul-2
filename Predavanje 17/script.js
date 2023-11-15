$(document).ready(function () {
  $(".dodajUKorpu").click(function () {
    var currentTotal = parseInt(localStorage.getItem("korpa")) || 0;
    var cena = parseInt($(this).attr("data-price"));
    var newTotal = currentTotal + cena;
    localStorage.setItem("korpa", newTotal);
    console.log(newTotal, cena);
  });
});
