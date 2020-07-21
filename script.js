// current hour installing

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days);

let today = days[now.getDay()];
console.log(today);

let hour = now.getHours();
console.log(hour);

let minute = now.getMinutes();
console.log(minute);

let currentDay = document.querySelector("#today");
currentDay.innerHTML = `${today} ${hour}:${minute}`;

// get current weather data when click "search"

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);

  let currentTemp = document.querySelector("div.big");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");
  let sky = document.querySelector("#sky");

  celsTemp = response.data.main.temp;

  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}`;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  sky.innerHTML = response.data.weather[0].description;
}

function city(response) {
  let cityName = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityName.value}`;
  let city = `${cityName.value}`;
  let apiKey = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(city);
}

let locationForm = document.querySelector("#location");
locationForm.addEventListener("submit", currentLocation);

// display the current Paris weather when open the app

function displayWeather(response) {
  let temp = document.querySelector("div.big");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");
  let sky = document.querySelector("#sky");

  celsTemp = response.data.main.temp;

  temp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}`;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  sky.innerHTML = response.data.weather[0].description;
}

let key = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric`;
console.log(url);

axios.get(url).then(displayWeather);

function displayFahr(event) {
  event.preventDefault();
  let temp = document.querySelector("div.big");
  let fahrenheit = (celsTemp * 9) / 5 + 32;
  temp.innerHTML = Math.round(fahrenheit);
}

function displayCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("div.big");
  temp.innerHTML = `${Math.round(celsTemp)}°`;
}

let celsTemp = null;

let Fahr = document.querySelector("#Fahr");
Fahr.addEventListener("click", displayFahr);

let celsius = document.querySelector("#Cel");
celsius.addEventListener("click", displayCelsius);
