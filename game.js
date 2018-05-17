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
  //canvas background changes depends on the api weather condition
  function display_weather(weatherArray) {
    var con = weatherArray[1].condition.text;
    console.log(con);
    function condition_background() {
      if (con === "Partly cloudy" || con === "Overcast" || con === "Cloudy") {
        $("#my_canvas").css("background-image", "url(cloudyy1.jpg)");
      } else if (
        con === "Heavy rain" ||
        con === "Light rain" ||
        con === "Moderate rain"
      ) {
        $("#my_canvas").css("background-image", "url(rainScoll.jpg)");
      } else if (con === "Sunny" || con === "Clear") {
        $("#my_canvas").css("background-image", "url(clear1.jpg)");
      } else if (
        con === "Heavy snow" ||
        con === "Light snow showers" ||
        con === "Moderate snow"
      ) {
        $("#my_canvas").css("background-image", "url(snowy.jpg)");
      } else {
        $("#my_canvas").css("background-image", "url(sky22.jpg)");
      }
    }
    condition_background();
  }

  getDataFromAPI();
});

var runner = ".run";
var jumper = ".jump";
var bird = ".bird";
var bird2 = ".bird2";
var dragon = ".dragon";
var dragon2 = ".dragon2";
var wall = "#my_canvas";
var score = 0;
var totalSc = 0;
var result = false;

$(document).ready(function() {
  //the unicorn jumping animation is hidden until you press space
  $(".jump").hide();
  //the time/ sequence when the obstacles come out
  $(".dragon")
    .hide()
    .delay(1000)
    .show(0);
  $(".bird")
    .hide()
    .delay(5000)
    .show(0);
  $(".bird2")
    .hide()
    .delay(13000)
    .show(0);
  $(".dragon2")
    .hide()
    .delay(3000)
    .show(0);

  // when you press keypress 32 "space"
  $(document).on("keydown", function(e) {
    if (e.type == "keydown") {
      if (e.keyCode === 32) {
        $(".run").hide();
        $(".jump").show();
        result = false;
      }
    }
  });
  // when you release from keypress 32 "space"
  $(document).on("keyup", function(e) {
    if (e.type == "keyup") {
      $(".run").show();
      $(".jump").hide();
      result = false;
    }
  });

  function gameOver() {
    if (
      collision(runner, bird) ||
      collision(runner, bird2) ||
      collision(runner, dragon) ||
      collision(runner, dragon2) ||
      collision(jumper, bird) ||
      collision(jumper, bird2) ||
      collision(jumper, dragon) ||
      collision(jumper, dragon2)
    ) {
      stop_the_game();
      return;
    }

    function stop_the_game() {
      /*  $(".bird").css("animation", "none");
      
            $(".bird2").css("animation", "none");
      
            $(".dragon").css("animation", "none");
      
            $(".dragon2").css("animation", "none");
      
            $(".run").css("animation", "none");
      
            $(".jump").css("animation", "none");
      
            // $("#my_canvas").css("background", "none")
      */
      console.log("GAME STOPPED");

      //clearInterval(totalSc);
    }
  }

  setInterval(function() {
    gameOver();
  }, 1000);

  //Score of the player

  totalSc = setInterval(function() {
    totalScore();
  }, 1000);

  function totalScore() {
    //SCORE INCREASE BY 15 EVERY SECOND
    score += 15;
    $("#result").html(score);
  }
  totalScore();

  //the collision when the unicorn touches obstacles
  function collision(firstDiv, secondDiv) {
    $div1 = $(firstDiv);

    $div2 = $(secondDiv);

    var x1 = $div1.offset().left;

    var y1 = $div1.offset().top;

    var h1 = $div1.outerHeight(true);

    var w1 = $div1.outerWidth(true);

    var b1 = y1 + h1;

    var r1 = x1 + w1;

    var x2 = $div2.offset().left;

    var y2 = $div2.offset().top;

    var h2 = $div2.outerHeight(true);

    var w2 = $div2.outerWidth(true);

    var b2 = y2 + h2;

    var r2 = x2 + w2;

    // console.log("ccsxc");
    var result = false;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      console.log(result);

      return false;
    } else {
      result = true;

      console.log(result);

      return true;

      // }
    }
  }
});
