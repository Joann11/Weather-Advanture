function processForm() {
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  return temp[1].replace(/\+/, " ");
  console.log(temp[1]);
}
processForm();

function getUserName() {
  return processForm();
}

$(function() {
  var results = [];
  function getDataFromAPI(location) {
    results.length = 0;
    $.get(
      "https://api.apixu.com/v1/current.json?key=c52e3288f518456f8d533105181803&q=Kuching",
      function(data) {
        $.each(data, function(key, value) {
          results.push(value);
        });
        // All of the data we've brought in from the API now in our array for our own consumption
      }
    ).done(function() {
      display_weather(results);
      console.log(results);
    });
  }

  function display_weather(weatherArray) {
    $("#name").html(processForm());
    $("#temperature").html(weatherArray[1].temp_c + "C");
    $("#feelslike").html(weatherArray[1].feelslike_c + "C");
    $("#wind").html(weatherArray[1].wind_kph + " kph");
    $("#humidity").html(weatherArray[1].humidity);
    $("#condition").html(weatherArray[1].condition.text);
    //target the output text of condition
    var condition = $("#condition").text();
    console.log("Condition is " + condition);
    //OMG I MADE IT WORK!!
    // the color of the font so user can see clearly

    function display_condition() {
      if (
        condition === "Overcast" ||
        condition === "Cloudy" ||
        condition === "Partly cloudy"
      ) {
        $("body").css("background-image", "url(sky22.jpg)");
        $(".data").css("color", "black");
      } else if (
        condition === "Heavy rain" ||
        condition === "Light rain" ||
        condition === "Moderate rain" ||
        condition === "Torrential rain shower" ||
        condition === "Moderate or heavy rain shower" ||
        condition === "Light rain shower" ||
        condition === "Moderate or heavy freezing rain" ||
        condition === "Light freezing rain"
      ) {
        $("body").css("background-image", "url(rain.jpg)");
      } else if (condition === "Sunny" || condition === "Clear") {
        $("body").css("background-image", "url(sunshine.jpg)");
        $(".data").css("color", "black");
      } else if (
        condition === "Patchy light rain with thunder" ||
        condition === "Moderate or heavy rain with thunder"
      ) {
        $("body").css("background-image", "url(rainthun.jpg)");
        $(".data").css("color", "white");
      } else {
        $("body").css("background-image", "url(sky.jpg)");
      }
    }
    display_condition();
  }

  getDataFromAPI($("#nameOfPlace").val());
});
