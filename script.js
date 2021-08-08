// Open Weather API
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + APIKey;
var APIKey = "10b1fa858990d6078fd65f88c814eabd";

// Function to call API
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var cityName = $("#search-value");
    console.log(cityName);



    
  });