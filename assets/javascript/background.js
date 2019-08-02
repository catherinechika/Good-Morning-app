$(document).ready(function () {

    $.ajax({
      url: "http://api.ipstack.com/check?access_key=f822e5c9d81b944cb089e61702e644de",
      method: "GET"
    }).then(function (ipData) {

      console.log(String(ipData.latitude));
      console.log(String(ipData.longitude));

      localStorage.setItem("latitude", String(ipData.latitude));
      localStorage.setItem("longitude", String(ipData.longitude));
      let latitude = localStorage.getItem("latitude");
      let longitude = localStorage.getItem("longitude");

      //API REQUEST FOR WEATHER DATA USING IP
      const APIKeyWeather = "42f33f5100f9cc8bb325c710a41147ec";

      const queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
        "&units=imperial&appid=" + APIKeyWeather;

      $.ajax({
        url: queryURLWeather,
        method: "GET"
      })

        .then(function (weatherData) {

          console.log("City: " + weatherData.name);
          console.log("Temp: " + weatherData.main.temp);
          console.log("Weather: " + weatherData.weather[0].main);


          let City = weatherData.name;
          let Temp = weatherData.main.temp;
          let Weather = weatherData.weather[0].main;

          let url = "https://api.unsplash.com/search/photos/?client_id=b3bd4562dd7cfd4ec3ff312c310ef726835e54ae3cf6f7fc8f9b9c8f914eb614&query="
          number = Math.floor(Math.random() * 10);

          $.ajax({
            url: url + Weather,
            method: "GET"
          }).then(function (response) {
            weatherPic = response.results[number].urls.regular
            console.log(response.results[number].urls.regular)

            $("body").css({"background-image":`url(${weatherPic})`});
          })
        });
    });
  })