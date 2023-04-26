const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");
const hoursElement = document.getElementById("hours");
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const toggleBtn = document.getElementById("toggle-btn");
const sessionElement = document.getElementById("session");
const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let is24HourFormat = false;

function currentDateandTime() {
    const date = new Date();
    let hours = date.getHours();
    let session = "AM";
    if (hours >= 12) {
      hours -= 12;
      session = "PM";
    }
    if (is24HourFormat) {
        hours = date.getHours();
        session = "";
    }
    const day = days[date.getDay()];
    const options = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = date.toLocaleDateString("en-US", options).toUpperCase();
    hours = hours < 10 ? "0" + hours : hours;
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    
    dayElement.innerHTML = day;
    dateElement.innerHTML = currentDate;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
    sessionElement.innerHTML = session;
    secondsElement.innerHTML = seconds;
  }

function toggleFormat() {
    let hours = parseInt(hoursElement.innerHTML);

    if (is24HourFormat) {
      is24HourFormat = false;
    } else {
      is24HourFormat = true;
    }

    if (is24HourFormat) {
        toggleBtn.innerHTML = "12-hr / 24-hr";
        let session = "";
        hours = hours < 10 ? "0" + hours : hours;
    } else {
        toggleBtn.innerHTML = "12-hr / 24-hr";
        let session = hours >= 12 ? "PM" : "AM";
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours === 0 ? 12 : hours;
        hours = hours < 10 ? "0" + hours : hours;
        sessionElement.innerHTML = session;
    }

    hoursElement.innerHTML = hours;
  }
  toggleBtn.addEventListener("click", toggleFormat);
  setInterval(currentDateandTime, 1000);
