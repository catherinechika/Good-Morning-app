const APIKey = "42f33f5100f9cc8bb325c710a41147ec";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}" +
      "q=&units=imperial&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        console.log(response);
      });