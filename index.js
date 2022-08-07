var countdown = new Date('1 januari 2023 00:00:00').getTime();

function newyear() {
  var now = new Date().getTime();
  gap = countdown - now;

  var second = 1000;
  var minute = second * 60;
  var hours = minute * 60;
  var days = hours * 24;

  var d = Math.floor(gap / days);
  var h = Math.floor((gap % days) / hours);

  var m = Math.floor((gap % hours) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function () {
  newyear();
}, 1000);
