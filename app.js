

function handler() {
    var startDate = document.getElementById("dest").value
    console.log(Date.parse(startDate))
    var dest = Date.parse(startDate)

    var x = setInterval(function () {

        var now = new Date().getTime();

        var diff = dest - now;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        console.log(days);

        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        console.log(hours);

        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        console.log(min);

        var sec = Math.floor((diff % (1000 * 60)) / 1000);
        console.log(sec);

        document.getElementById("demo").innerHTML = days + "Days," + hours + "hrs:" + min + "m:" + sec + "s"
    }, 1000);
}

