var countDownDate = new Date("Mayo 18, 2024 14:00:00").getTime();
var countdownFunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "¡Es hora!";
  }
}, 1000);
