$(document).ready(function () {
  var username = "admin";
  var password = "123";
  $("#loginButton").click(function () {
    var unetoIme = $("#username").val();
    var unetaLozinka = $("#password").val();
    // console.log(unetoIme, unetaLozinka);
    if (username == unetoIme && password == unetaLozinka) {
      console.log("Ime je ok");
    } else {
      console.log("Podaci nisu okeij");
    }
  });
});
