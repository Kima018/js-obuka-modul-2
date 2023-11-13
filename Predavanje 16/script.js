$(document).ready(function () {
  $("#prognoza").click(function () {
    var grad = $("#city").val();
    $.ajax({
      method: "GET",
      url: "http://api.weatherapi.com/v1/forecast.json",
      data: {
        key: "aace614e5c374ad194f145139231311",
        q: grad,
        days: 7,
        aqi: "no",
        alerts: "no",
      },
      success: function (response) {
        console.log(response);

        console.log(response["location"]["name"]);
      },
    });
  });
});

$(document).ready(function () {
  $("#prethodnaPrognoza").click(function () {
    var grad = $("#city").val();
    $.ajax({
      method: "GET",
      url: "http://api.weatherapi.com/v1/history.json",
      data: {
        key: "aace614e5c374ad194f145139231311",
        q: grad,
        dt: "2023-11-10",
      },
      success: function (response) {
        console.log(response);
        console.log(response["location"]["name"]);
      },
    });
  });
  //
});
