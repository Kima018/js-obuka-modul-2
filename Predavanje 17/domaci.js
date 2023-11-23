const key = "aace614e5c374ad194f145139231311";
const url = "http://api.weatherapi.com/v1/forecast.json";
function updateWeather(city) {
  $.ajax({
    method: "GET",
    url: url,
    data: {
      key: key,
      q: city,
      days: 1,
      aqi: "no",
      alerts: "no",
    },
    success: function (response) {
      var temp = response["current"]["temp_c"];
      var cityName = response["location"]["name"];
      $("#selectedInfo").text(
        "Grad: " + cityName + ", temperatura: " + temp + "°C"
      );
    },
  });
}
$(document).ready(function () {
  var lastSelected = localStorage.getItem("select");
  if (lastSelected !== null) {
    $("#selectCity").val(lastSelected);
  }

  var selectedCity = $("#selectCity").val();
  localStorage.setItem("select", selectedCity);

  updateWeather(selectedCity);

  $("#selectCity").change(function () {
    var selectedValue = $(this).val();
    localStorage.setItem("select", selectedValue);
    updateWeather(selectedValue);
  });
});
