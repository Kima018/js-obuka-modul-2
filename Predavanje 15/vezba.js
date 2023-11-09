$(document).ready(function () {
  var naslov = $(`<h1>Hello ReqRes users!</h1>`);
  $(".main-wrapper").append(naslov);
  $.ajax({
    url: "https://reqres.in/api/users/",
    type: "GET",
    success: function (response) {
      for (let user in response["data"]) {
        var ime = response["data"][user]["first_name"];
        var email = response["data"][user]["email"];
        var avatarSrc = response["data"][user]["avatar"];

        ///
        var newDiv = $("<div class='content'></div>");
        $(".content-wrapper").append(newDiv);

        var newHeading = $("<h2></h2>").text(ime);
        newDiv.append(newHeading);

        var newEmail = $("<p></p>").text(email);
        newDiv.append(newEmail);

        var newImage = $("<img>").attr("src", avatarSrc);
        newDiv.append(newImage);
        console.log("uspesno");
      }
    },
  });
});
