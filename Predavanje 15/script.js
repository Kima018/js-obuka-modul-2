$(document).ready(function () {
  //GET , POST
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
  $("#obrisiKorisnika").click(function () {
    $.ajax({
      url: "https://reqres.in/api/users/2",
      type: "DELETE",
      success: function (response) {
        console.log("korisnik je uspesno obrisan" + response);
      },
      error: function (error) {
        console.log("greska prilikom brisanja korisnika " + error);
      },
    });
  });
  $("#signUp").click(function () {
    var username = $("#username").val();
    var email = $("#email").val();

    $.ajax({
      url: "https://reqres.in/api/users",
      type: "POST",
      data: { name: username, email: email },
      success: function (response) {
        console.log("korisnik je uspesno registrovan");
      },
    });
  });
});

// $("#podaci").append(
//   response["data"]["0"]["first_name"] +
//     " - " +
//     response["data"]["0"]["email"]
// );
