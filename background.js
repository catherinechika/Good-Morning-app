$(document).ready(function(){
// Ajax request for the lat and long API
        $.ajax({
             url: "http://api.ipstack.com/check?access_key=f822e5c9d81b944cb089e61702e644de" ,
            method: "GET"
        }).then(function (ipData) {

        localStorage.setItem("latitude",String(ipData.latitude));
        localStorage.setItem("longitude",String(ipData.longitude));
        let latitude = localStorage.getItem("latitude");
        let longitude = localStorage.getItem("longitude");

// Ajax request for the weather based on the lat and long
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
            "&units=imperial&appid=" + "42f33f5100f9cc8bb325c710a41147ec",
            method: "GET"
        }) .then(function (weatherData) {
                let City =  weatherData.name;
                let Temp = weatherData.main.temp;
                let Weather = weatherData.weather[0].main;
                let number = Math.floor(Math.random() * 10);
// Ajax request for the url to the picture based on the weather
                  
        $.ajax({
            url: "https://api.unsplash.com/search/photos/?client_id=b3bd4562dd7cfd4ec3ff312c310ef726835e54ae3cf6f7fc8f9b9c8f914eb614&query="+Weather,
            method: "GET"
        }).then(function(response){
                    let weatherPic = response.results[number].urls.regular
             })
         });
    });
})
