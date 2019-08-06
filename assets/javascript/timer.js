$(document).ready(function () {
    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
    $('.meditationTime').change(function () {
        var userSelect = $(this).val()
        $(".start").on("click", function () {
            secIntId = setInterval(function () {
                if (userSelect > -1) {
                    const displayTime = timeConverter(userSelect);
                    $('.time').text(displayTime);
                    userSelect--
                } else {
                    clearInterval(secIntId)
                }
            }
                , 1000)
        });
    });
});