$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://api.weatherapi.com/v1/forecast.json",
    data: {
      key: "aace614e5c374ad194f145139231311",
      q: "176.104.107.100",
      days: 1,
      aqi: "no",
      alerts: "no",
    },

    success: function (response) {
      $("#cityName").text(response["location"]["name"]);
      $("#currentTemp").text(response["current"]["temp_c"] + "°C");
      $("#nebo").text(response["current"]["condition"]["text"]);
      $("#neboImg").attr("src", response["current"]["condition"]["icon"]);
      $("#maxTemp").text(
        response["forecast"]["forecastday"]["0"]["day"]["maxtemp_c"] + "°C"
      );
      $("#minTemp").text(
        response["forecast"]["forecastday"]["0"]["day"]["mintemp_c"] + "°C"
      );

      response.forecast.forecastday[0].hour.forEach(function (hourData) {
        var weatherItem = $("<div class='weather-item'></div>");
        var dateTimeString = hourData.time;
        var time = dateTimeString.slice(11, 16);
        weatherItem.append("<p class='hourlyTime'>" + time + "</p>");
        var innerDiv = $("<div></div>");
        innerDiv.append("<img src='" + hourData.condition.icon + "'/>");
        innerDiv.append(
          "<p class='hourlyTime'>" + hourData.chance_of_rain + "%" + "</p>"
        );
        weatherItem.append(innerDiv);
        weatherItem.append(
          "<p class='hourlyDegre'>" +
            Math.round(hourData.temp_c) +
            "°C" +
            "</p>"
        );
        $("#hourlyWrapper").append(weatherItem);
      });
    },
  });

  $.ajax({
    method: "GET",
    url: "http://api.weatherapi.com/v1/forecast.json",
    data: {
      key: "aace614e5c374ad194f145139231311",
      q: "belgrade",
      days: 1,
      aqi: "no",
      alerts: "no",
    },

    success: function (response) {
      console.log(response);
      $(".city-country-name").text(
        response["location"]["name"] + " , " + response["location"]["country"]
      );
      $(".city-current-temp").text(response["current"]["temp_c"] + "°C");
      $(".h-temp").text(
        Math.round(response["forecast"]["forecastday"][0]["day"]["maxtemp_c"]) +
          "°C"
      );
      $(".l-temp").text(
        Math.round(response["forecast"]["forecastday"][0]["day"]["mintemp_c"]) +
          "°C"
      );
    },
  });
});

/*<div class="citys-wrapper">
          <div class="city-forecast-wrap">
            <p class="city-current-temp">19^</p>
            <div class="side-flex">
              <p class="h-temp">24</p>
              <p class="l-temp">8</p>
            </div>
            <p class="city-country-name">Montreal,Canada</p>
            <img class="img-city-forecast" src="images/midrain.png" />
          </div> */

// $(document).ready(function () {
//   var sati = [];
//   var temperaturaPoSatima = [];
//   var imgUrl = [];
//   var rain = [];

//   $.ajax({
//     method: "GET",
//     url: "http://api.weatherapi.com/v1/forecast.json",
//     data: {
//       key: "aace614e5c374ad194f145139231311",
//       q: "176.104.107.100",
//       days: 1,
//       aqi: "no",
//       alerts: "no",
//     },
//     success: function (response) {
//       var data = response;
//       data.forecast.forecastday[0].hour.forEach(function (hourData) {
//         var dateTimeString = hourData.time;
//         var timePart = dateTimeString.slice(11, 16);
//         var timeTemp = Math.round(hourData.temp_c);
//         var timeImg = hourData.condition.icon;
//         var timeRaining = hourData.chance_of_rain;
//         temperaturaPoSatima.push(timeTemp);
//         sati.push(timePart);
//         imgUrl.push(timeImg);
//         rain.push(timeRaining);

//         $("#cityName").text(response["location"]["name"]);
//         $("#currentTemp").text(response["current"]["temp_c"] + "°C");
//         $("#nebo").text(response["current"]["condition"]["text"]);
//         $("#neboImg").attr("src", response["current"]["condition"]["icon"]);
//         $("#maxTemp").text(
//           response["forecast"]["forecastday"]["0"]["day"]["maxtemp_c"] + "°C"
//         );
//         $("#minTemp").text(
//           response["forecast"]["forecastday"]["0"]["day"]["mintemp_c"] + "°C"
//         );
//         $(".weather-item").each(function (i) {
//           var hourlyTime = $(this).find(".hourlyTime");
//           var hourlyDegre = $(this).find(".hourlyDegre");
//           var itemImg = $(this).find(".itemImg");
//           var hourlyRain = $(this).find(".hourlyRain");
//           if (
//             i < sati.length &&
//             i < temperaturaPoSatima.length &&
//             i < imgUrl.length &&
//             i < rain.length
//           ) {
//             hourlyTime.text(sati[i]);
//             hourlyDegre.text(temperaturaPoSatima[i] + "°C");
//             itemImg.attr("src", imgUrl[i]);
//             hourlyRain.text(rain[i] + "%");
//           } else {
//             hourlyTime.text("N/A");
//             hourlyDegre.text("N/A");
//           }
//         });
//         console.log(sati);
//         console.log(temperaturaPoSatima);
//       });
//     },
//   });
//   $("#hourlyWrapper").draggable({
//     axis: "x",
//     // containment: "parent",
//   });
// });
