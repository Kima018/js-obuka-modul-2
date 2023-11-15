$(document).ready(function () {
  $("#obrisiKorpu").click(function () {
    localStorage.removeItem("korpa");
    $("#korpa").html("nemate proizvoda u korpi");
  });
  var korpa = localStorage.getItem("korpa");
  if (korpa == null) {
    $("#korpa").html("nemate proizvoda u korpi");
  } else {
    $("#korpa").html(korpa);
  }
});
