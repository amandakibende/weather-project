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

  let currentTemp = document.querySelector("p.big");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");

  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  wind.innerHTML = `Wind: ${Math.round(response.data.main.wind.speed)} km/h`;
  humidity.innerHTML = ` Humidity: ${response.data.main.humidity}%`;
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

// get current weather data when click "current"

function theWeather(response) {
  let cityName = document.querySelector("#city-input");
  let temp = Math.round(response.data.main.temp);
  console.log(temp);

  let weather = document.querySelector("p.big");
  weather.innerHTML = `${temp}°*`;
}

function currentWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let key = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  console.log(url);
  axios.get(url).then(theWeather);
}

function currentButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentWeather);
}

let position = document.querySelector("#location");
position.addEventListener("submit", currentButton);

// display the current Paris weather when open the app

function displayWeather(response) {
  let temp = document.querySelector("p.big");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");

  temp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  wind.innerHTML = `Wind: ${Math.round(response.data.main.wind.speed)} km/h`;
  humidity.innerHTML = ` Humidity: ${response.data.main.humidity}%`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0]}@2x.png)`
  );
}

let key = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric`;
console.log(url);

axios.get(url).then(displayWeather);
