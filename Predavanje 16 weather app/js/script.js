$(document).ready(function () {
  function addParagraf(pClass, pContent) {
    return $(`<p class='${pClass}'> ${pContent}</p>`);
  }
  function formatTime(dateTimeString) {
    return dateTimeString.slice(11, 16);
  }

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
        var time = formatTime(hourData.time);
        weatherItem.append("<p class='hourlyTime'>" + time + "</p>");
        var innerDiv = $("<div></div>");
        innerDiv.append("<img src='" + hourData.condition.icon + "'/>");
        innerDiv.append(
          `<p class='hourlyTime'>${hourData.chance_of_rain}%</p>`
        );
        weatherItem.append(innerDiv);
        var roundedTemp = Math.round(hourData.temp_c);
        weatherItem.append(`<p class='l-temp'> ${roundedTemp}°C</p>`);
        $("#hourlyWrapper").append(weatherItem);
      });
    },
  });

  //page 2

  var citys = ["belgrade", "kragujevac", "subotica"];
  citys.forEach(function (eachCity) {
    $.ajax({
      method: "GET",
      url: "http://api.weatherapi.com/v1/forecast.json",
      data: {
        key: "aace614e5c374ad194f145139231311",
        q: eachCity,
        days: 1,
        aqi: "no",
        alerts: "no",
      },
      success: function (response) {
        console.log(response);
        var temp = `<p class='city-current-temp'>${Math.round(
          response["current"]["temp_c"]
        )}°C`;
        var maxTemp = `<p class='h-temp'>${Math.round(
          response["forecast"]["forecastday"][0]["day"]["maxtemp_c"]
        )}°C</p>`;
        var minTemp = `<p class='l-temp'> ${Math.round(
          response["forecast"]["forecastday"][0]["day"]["mintemp_c"]
        )}°C</p>`;
        var name = `<p class='city-country-name'>${response["location"]["name"]}, ${response["location"]["country"]}`;
        var img = $(
          `<img class='img-city-forecast' src="${response["current"]["condition"]["icon"]}"/>`
        );
        var divWrapper = $("<div class='city-forecast-wrap'></div>");
        var innerDiv = $('<div class="side-flex"></div>');

        divWrapper.append(temp);
        innerDiv.append(maxTemp);
        innerDiv.append(minTemp);
        divWrapper.append(innerDiv);
        divWrapper.append(name);
        divWrapper.append(img);

        $(".citys-wrapper").append(divWrapper);
      },
    });
  });
});
//2607173
//2801268
// $(document).ready(function () {
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
//       $("#cityName").text(response["location"]["name"]);
//       $("#currentTemp").text(response["current"]["temp_c"] + "°C");
//       $("#nebo").text(response["current"]["condition"]["text"]);
//       $("#neboImg").attr("src", response["current"]["condition"]["icon"]);
//       $("#maxTemp").text(
//         response["forecast"]["forecastday"]["0"]["day"]["maxtemp_c"] + "°C"
//       );
//       $("#minTemp").text(
//         response["forecast"]["forecastday"]["0"]["day"]["mintemp_c"] + "°C"
//       );

//       response.forecast.forecastday[0].hour.forEach(function (hourData) {
//         var weatherItem = $("<div class='weather-item'></div>");
//         var dateTimeString = hourData.time;
//         var time = dateTimeString.slice(11, 16);
//         weatherItem.append("<p class='hourlyTime'>" + time + "</p>");
//         var innerDiv = $("<div></div>");
//         innerDiv.append("<img src='" + hourData.condition.icon + "'/>");
//         innerDiv.append(
//           "<p class='hourlyTime'>" + hourData.chance_of_rain + "%" + "</p>"
//         );
//         weatherItem.append(innerDiv);
//         weatherItem.append(
//           "<p class='hourlyDegre'>" +
//             Math.round(hourData.temp_c) +
//             "°C" +
//             "</p>"
//         );
//         $("#hourlyWrapper").append(weatherItem);
//       });
//     },
//   });

//   var citys = ["belgrade", "kragujevac", "subotica"];
//   citys.forEach(function (eachCity) {
//     $.ajax({
//       method: "GET",
//       url: "http://api.weatherapi.com/v1/forecast.json",
//       data: {
//         key: "aace614e5c374ad194f145139231311",
//         q: eachCity,
//         days: 1,
//         aqi: "no",
//         alerts: "no",
//       },
//       success: function (response) {
//         var divWrapper = $("<div class='city-forecast-wrap'></div>");
//         divWrapper.append(
//           "<p class='city-current-temp'>" +
//             response["current"]["temp_c"] +
//             "°C" +
//             "</p>"
//         );
//         var innerDiv = $('<div class="side-flex"></div>');
//         innerDiv.append(
//           "<p class='h-temp'>" +
//             Math.round(
//               response["forecast"]["forecastday"][0]["day"]["maxtemp_c"]
//             ) +
//             "°C" +
//             "</p>"
//         );
//         innerDiv.append(
//           "<p class='l-temp'>" +
//             Math.round(
//               response["forecast"]["forecastday"][0]["day"]["mintemp_c"]
//             ) +
//             "°C" +
//             "</p>"
//         );
//         divWrapper.append(innerDiv);
//         divWrapper.append(
//           "<p class='city-country-name'>" +
//             response["location"]["name"] +
//             " , " +
//             response["location"]["country"] +
//             "</p>"
//         );
//         divWrapper.append(
//           "<img class='img-city-forecast' src=" +
//             response["current"]["condition"]["icon"] +
//             " />"
//         );

//         $(".citys-wrapper").append(divWrapper);
//       },
//     });
//   });
// });
