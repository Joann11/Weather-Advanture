$(function() {
    var results = [];
  
    function getDataFromAPI(location) {
  
      results.length = 0;
    $.get(
      "https://api.apixu.com/v1/current.json?key=c52e3288f518456f8d533105181803&q="+ location,
      function(data) {
  
  
        $.each(data, function(key, value) {
          results.push(value);
        });
        // All of the data we've brought in from the API now in our array for our own consumption
        console.log(results);
      }
    ).done(function() {
      display_weather(results);
    
    });
  }
  
    function display_weather(weatherArray){
      $("#name").html(weatherArray[0].name);
      $("#temperature").html(weatherArray[1].temp_c +"c");
      $("#feelslike").html(weatherArray[1].feelslike_c + "c");
      $("#wind").html(weatherArray[1].wind_kph + " kph");
      $("#humidity").html(weatherArray[1].humidity);
      $("#condition").html(weatherArray[1].condition.text);
      
    }
    function displayweather(weatherArray){
        if ("#condition" = "Partly Cloud")
        console.log(<img src="Clouds GIF-source"></img> );
    }

   $("button").click(function(){
     // the val will print out name of the place because nof is the id of the input
     getDataFromAPI($("#nameOfPlace").val());
  
   });
  });
  
  
  