$(document).ready(function () {
  var grad = $("#cityName").text();
  var currentTemp = $("#currentTemp");
  console.log(grad);
  $.ajax({
    method: "GET",
    url: "http://api.weatherapi.com/v1/current.json",
    data: {
      key: "aace614e5c374ad194f145139231311",
      q: "176.104.107.100",
      aqi: "no",
    },
    success: function (response) {
      console.log(response["location"]["name"]);
      $("#cityName").text(response["location"]["name"]);
      $("#currentTemp").text(response["current"]["temp_c"] + "°C");
    },
  });
});
