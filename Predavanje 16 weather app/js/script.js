$(document).ready(function () {
  var sati = [];
  var temperaturaPoSatima = [];
  var imgUrl = [];
  var rain = [];

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
      var data = response;
      data.forecast.forecastday[0].hour.forEach(function (hourData) {
        var dateTimeString = hourData.time;
        var timePart = dateTimeString.slice(11, 16);
        var timeTemp = Math.round(hourData.temp_c);
        var timeImg = hourData.condition.icon;
        var timeRaining = hourData.chance_of_rain;
        temperaturaPoSatima.push(timeTemp);
        sati.push(timePart);
        imgUrl.push(timeImg);
        rain.push(timeRaining);

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
        $(".weather-item").each(function (i) {
          var hourlyTime = $(this).find(".hourlyTime");
          var hourlyDegre = $(this).find(".hourlyDegre");
          var itemImg = $(this).find(".itemImg");
          var hourlyRain = $(this).find(".hourlyRain");
          if (
            i < sati.length &&
            i < temperaturaPoSatima.length &&
            i < imgUrl.length &&
            i < rain.length
          ) {
            hourlyTime.text(sati[i]);
            hourlyDegre.text(temperaturaPoSatima[i] + "°C");
            itemImg.attr("src", imgUrl[i]);
            hourlyRain.text(rain[i] + "%");
          } else {
            hourlyTime.text("N/A");
            hourlyDegre.text("N/A");
          }
        });
        console.log(sati);
        console.log(temperaturaPoSatima);
      });
    },
  });
  $("#hourlyWrapper").draggable({
    axis: "x",
    // containment: "parent",
  });
});

// $(document).ready(function () {
//   var sati = [];
//   var temperaturaPoSatima = [];

//   $.ajax({
//     method: "GET",
//     // url: "http://api.weatherapi.com/v1/forecast.json?key=aace614e5c374ad194f145139231311&q=176.104.107.100&days=1&aqi=no&alerts=no",
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
//         temperaturaPoSatima.push(timeTemp);
//         sati.push(timePart);
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
//           if (i < sati.length && i < temperaturaPoSatima.length) {
//             hourlyTime.text(sati[i]);
//             hourlyDegre.text(temperaturaPoSatima[i] + "°C");
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
// });

// var grad = $("#cityName").text();
// var currentTemp = $("#currentTemp");
// console.log(grad);
// $.ajax({
//   method: "GET",
//   url: "http://api.weatherapi.com/v1/forecast.json?key=aace614e5c374ad194f145139231311&q=176.104.107.100&days=1&aqi=no&alerts=no",
//   url: "http://api.weatherapi.com/v1/forecast.json",
//   data: {
//     key: "aace614e5c374ad194f145139231311",
//     q: "176.104.107.100",
//     days: 1,
//     aqi: "no",
//     alerts: "no",
//   },
//   success: function (response) {
//     console.log(response["location"]["name"]);
//     $("#cityName").text(response["location"]["name"]);
//     $("#currentTemp").text(response["current"]["temp_c"] + "°C");
//     $("#nebo").text(response["current"]["condition"]["text"]);
//     $("#neboImg").attr("src", response["current"]["condition"]["icon"]);
//     $("#maxTemp").text(
//       response["forecast"]["forecastday"]["0"]["day"]["maxtemp_c"] + "°C"
//     );
//     $("#minTemp").text(
//       response["forecast"]["forecastday"]["0"]["day"]["mintemp_c"] + "°C"
//     );
//   },
// });

// $(".weather-item").each(function () {
//   var hourlyTemp = $(this).find($(".hourlyDegre"));
// });
