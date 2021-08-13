// Open Weather API
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Colton&appid=10b1fa858990d6078fd65f88c814eabd";
// var cityName = $("<input>");


// Function to call API
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Display Colton, CA
    console.log(response.name);
 
  });

// Search button
// var searchBtn = $("<button>");
// var searchValue = $("search-value");

// searchBtn.on("click", function(event) {
//   event.preventDefault();
//   searchvalue = "";
  
// });

