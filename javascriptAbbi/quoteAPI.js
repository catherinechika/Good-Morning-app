//const weatherData

function userDay() {
    var wkDay = new Array();
    wkDay[1] = "Monday";
    wkDay[2] = "Tuesday";
    wkDay[3] = "Wednesday";
    wkDay[4] = "Thursday";
    wkDay[5] = "Friday";
    wkDay[6] = "Saturday";
    wkDay[7] = "Sunday";

    var d = new Date();
    var n = wkDay[d.getDay()];
    console.log(n);
    $("#day").append(n + ",");
    var index = wkDay.indexOf(n);
    var catArray = new Array();
    catArray[0] = "";
    catArray[1] = "management";
    catArray[2] = "inspire";
    catArray[3] = "art";
    catArray[4] = "funny";
    catArray[5] = "sports";
    catArray[6] = "love";
    catArray[7] = "life";
    console.log(catArray[index]);
    let category = (catArray[index]);

    $.ajax({
        url: "https://quotes.rest/qod.json?category=" + category + "&lang=en&api_key=_sHYjMdQ5CSUcZjM6DJV5AeF",
        method: "GET"
    }).then(function (userQuote) {
        console.log(userQuote)
        $("#htmldiv").append(userQuote.contents.quotes[0].quote);
    });

}
userDay()


function userDate() {
    var date = new Date();
    var n = date.getDate();
    console.log(n);
    $("#dayOfMonth").append(n);
}
userDate()

function userMonth() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    console.log(n);
    $("#month").append(n);
}
userMonth()






