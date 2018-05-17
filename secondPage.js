$(function() {
  var results = [];
  function getDataFromAPI(location) {
    results.length = 0;
    $.get(
      "https://api.apixu.com/v1/current.json?key=c52e3288f518456f8d533105181803&q=St%Andrews", //+ location,

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
    var con = weatherArray[1].condition.text;
    console.log(con);
  }

  getDataFromAPI();
});
