function processForm()
{ 
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  return temp[1].replace(/\+/g, ' ');
  console.log(temp[1]);
 

}
processForm();

function getUserName(){
    return processForm();
}

$(function() {
  var results = [];
  function getDataFromAPI(location) {

    results.length = 0;
  $.get(
    "https://api.apixu.com/v1/current.json?key=c52e3288f518456f8d533105181803&q=St%Andrews",//+ location,
    
function(data) {


      $.each(data, function(key, value) {
        results.push(value);
      });
      // All of the data we've brought in from the API now in our array for our own consumption
    
    })
  .done(function() {
    display_weather(results);
    console.log(results);
  });
  }


  function display_weather(weatherArray){

    $("#name").html(processForm())
    console.log("data!",weatherArray);
    //$("#name").html(weatherArray[0].name);
    $("#temperature").html(weatherArray[1].temp_c +"C");
    $("#feelslike").html(weatherArray[1].feelslike_c + "C");
    $("#wind").html(weatherArray[1].wind_kph + " kph");
    $("#humidity").html(weatherArray[1].humidity);
    $("#condition").html(weatherArray[1].condition.text);
    //display_condition();
  }
      
//function display_condition(){
  //console.log($("#condition").val());
    //if ($("#condition").val() == "Partly cloudy"||$("#condition").val() == "Overcast"|| $("#condition").val() == "Cloudy"){
      // var condition_result = "#condition.css"
      //console.log('ok');
    //}
    //else if ("#condition" == " Heavy rain" || "Light rain"){
    //console.log( " " );
    //}
    //else if ("#condition" == "Sunny"|| "Clear"){
    //console.log( "hii" );
  //}
    //else if ("#condition" == "Heavy snow" || "Light snow showers" || "Moderate snow"){
    //console.log( "smile" );
  //}
    //else {
    //console.log( "hi" );
  //}
   
//}



 //$("button").click(function(){

   // the val will print out name of the place because nof is the id of the input
   getDataFromAPI($("#nameOfPlace").val());

// });
});
