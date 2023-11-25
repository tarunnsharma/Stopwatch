const containerEle = document.querySelector(".container");
const timeEle = document.querySelector(".time");

const secsEle = document.querySelector("#secs");
const minsEle = document.querySelector("#mins");
const hoursEle = document.querySelector("#hours");

const startEle = document.querySelector("#start");
const stopEle = document.querySelector("#stop");
const resetEle = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let Interval;

startEle.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(start, 1);
}

stopEle.onclick = () => {
  clearInterval(Interval);
}
//Bug in reset, after reset start doesn't function have to refresh the page.
resetEle.onclick = () => {
  clearInterval(Interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  hoursEle.innerHTML = "00";
  secsEle.innerHTML = "00";
  minsEle.innerHTML = "00";
}

function start() {
  seconds++;
  let mins = seconds % 60;
  if (seconds <= 9) {
    secsEle.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    secsEle.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    minsEle.innerHTML = "0" + minutes;
    seconds = 0;
    secsEle.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    minsEle.innerHTML = minutes;
  }

  if (minutes > 59) {
    hours++;
    hoursEle.innerHTML = "0" + hours;
    minutes = 0;
    seconds = 0;
    secsEle.innerHTML = "0" + 0;
    minsEle.innerHTML = "0" + 0;
  }

  if (hours > 9) {
    hoursEle.innerHTML = hours;
  }
}