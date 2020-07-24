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

function displayWeather(response) {
  let cityInput = document.querySelector("h1");
  let temp = document.querySelector("div.big");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");
  let sky = document.querySelector("#sky");

  celsTemp = response.data.main.temp;

  cityInput.innerHTML = response.data.name;
  temp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}`;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  sky.innerHTML = response.data.weather[0].description;
}

function search(city) {
  let key = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  console.log(url);

  axios.get(url).then(displayWeather);
}

function currentLocation(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

let locationForm = document.querySelector("#location");
locationForm.addEventListener("submit", currentLocation);

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

search("Paris");
