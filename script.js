let now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDateTime = document.querySelector("#currentDateTime");
currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;

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

  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  h1.innerHTML = `${temp}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let key = "4d28e6453aac33727582159ed0a68d45";
let units = "metric";

//

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#cityTemp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#cityTemp");
  temperatureElement.innerHTML = 19;
}
