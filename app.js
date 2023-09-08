const day = document.getElementById("day");
const time = document.getElementById("time");

const date = new Date();
time.innerHTML = date.getUTCMilliseconds();
day.innerHTML = date.toLocaleDateString('en-US', {weekday:'long'});