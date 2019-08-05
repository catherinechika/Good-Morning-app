$("#find-zipcode").on("click", function (event) {

    event.preventDefault();

    const zipcode = $("#zipcode-input").val();

    const APIKeyWeather = "42f33f5100f9cc8bb325c710a41147ec";

    const queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&appid=" + APIKeyWeather;

    $.ajax({
        url: queryURLWeather,
        method: "GET"
    })
        .then(function (weatherData) {

            console.log("City: " + weatherData.name);
            console.log("Temp: " + weatherData.main.temp);
            console.log("Weather: " + weatherData.weather[0].main);

            const city = weatherData.name;
            const temp = weatherData.main.temp;
            let weather = weatherData.weather[0].main;

            const weatherToKeyword = {
                Clear: "sunny"
            };
            
            const imageQuery = weatherToKeyword[weather] || weather;

            $(".city").text(city);
            $(".temperature").text(temp + " Degrees");
            $(".condition").text(weather);

            let url = "https://api.unsplash.com/search/photos/?client_id=b3bd4562dd7cfd4ec3ff312c310ef726835e54ae3cf6f7fc8f9b9c8f914eb614&query="
            number = Math.floor(Math.random() * 10);

            $.ajax({
                url: url + imageQuery,
                method: "GET"
            }).then(function (response) {
                weatherPic = response.results[number].urls.regular
                console.log(response.results[number].urls.regular)

                $("body").css({ "background-image": `url(${weatherPic})` });
            })
        });
});