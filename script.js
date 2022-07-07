// ⏰ Feature 1

let now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let currentDateTime = document.querySelector("#currentDateTime");
currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;

// 🕵️‍♀️ Feature 2

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let chosenCity = document.querySelector("#yourCity");
  chosenCity.innerHTML = `${city.value}`;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=${units}`
    )
    .then(showTemperature);
}

let cityForm = document.querySelector("#cityForm");
cityForm.addEventListener("submit", searchCity);

///

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#cityTemp");
  h1.innerHTML = `${temp}°C`;
}

let key = "4d28e6453aac33727582159ed0a68d45";
let units = "metric";
