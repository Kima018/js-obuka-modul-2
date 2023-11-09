$(document).ready(function () {
  var username = "admin";
  var password = "123";
  var brojacPokusaja = 0;
  $("#loginButton").click(function () {
    var unetoIme = $("#username").val();
    var unetaLozinka = $("#password").val();
    // console.log(unetoIme, unetaLozinka);
    if (brojacPokusaja >= 3) {
      $("#username").prop("disabled", true);
      $("#password").prop("disabled", true);
    }

    console.log(brojacPokusaja);

    $("#wrongUsername").hide();
    $("#wrongPassword").hide();

    if (username !== unetoIme) {
      $("#wrongUsername").show();
    }
    if (password !== unetaLozinka) {
      $("#wrongPassword").show();
    }

    if (username == unetoIme && password == unetaLozinka) {
      console.log("Ime je ok");
      $("#loginForma").hide();
      createEl();
    } else {
      console.log("Podaci nisu okeij");
      brojacPokusaja++;
    }
  });
});

function createEl() {
  var noviText = document.createElement("h1");
  noviText.append("Uspesno ste se ulogovali");
  document.body.appendChild(noviText);
}
