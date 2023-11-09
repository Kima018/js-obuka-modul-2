$(document).ready(function () {
  //GET - LIST USERS
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    success: function (response) {
      // console.log(response["support"]["url"]);
      for (let user in response["data"]) {
        // console.log(typeof response["data"][user]);
        var email = response["data"][user]["email"];
        var name = response["data"][user]["first_name"];
        $("#userList").append("<p>" + name + " - " + email + "</p>");
      }
    },
  });
  //PSOT- CREATE
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
      name: "Marijan",
      job: "Programer",
    },
    success: function (response) {
      // console.log(response);
    },
  });
  //DELETE- DELETE USER
  $("#obrisiKorisnika").click(function () {
    $.ajax({
      url: "https://reqres.in/api/users/2",
      type: "DELETE",
      success: function (response) {
        console.log("korisnik je uspesno obrisan");
      },
      error: function (error) {
        console.log("greska prilikom brisanja korisnika ");
      },
    });
  });
  //PSOT - REGISTER
  $("#signUp").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    // "email": "eve.holt@reqres.in",
    // "password": "pistol"  =>> na ove podatke radi, ali na bilo koje druge ne
    $.ajax({
      url: "https://reqres.in/api/register",
      type: "POST",
      data: { email: email, password: password },
      success: function (response) {
        console.log("korisnik je uspesno registrovan");
      },
      error: function (response) {
        console.log("neuspesna registracija");
      },
    });
  });

  //post - login //=> nisam skapirao zasto mi izbacuje error u consoli kada se ne poklapaju podaci
  //ali status 400 je ok
  $("#signIn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"  =>> na ove podatke radi, ali na bilo koje druge ne
    $.ajax({
      url: "https://reqres.in/api/login",
      type: "POST",
      data: { email: email, password: password },
      success: function (response) {
        console.log("Uspesno ste se ulogovali");
      },
      error: function (response) {
        console.log("neuspesan LOGIN");
      },
    });
  });
  //
  $.ajax({
    url: "https://reqres.in/api/unknown",
    type: "GET",
    success: function (response) {
      for (let user in response["data"]) {
        console.log(response["data"][user]["name"]);
      }
    },
  });
});
