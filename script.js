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

let today = days[now.getDay()];
console.log(today);

let hour = now.getHours();
console.log(hour);

let minute = now.getMinutes();
console.log(minute);

let currentDay = document.querySelector("p.today");
currentDay.innerHTML = `${today} ${hour}:${minute}`;

//

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);

  let currentTemp = document.querySelector("p.big");

  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°`;
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

let location = document.querySelector("#location");
location.addEventListener("submit", currentLocation);

//
function theWeather(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(temp);

  let weather = document.querySelector("p.big");
  weather.innerHTML = `curently ${temp}°`;
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
