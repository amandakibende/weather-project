let city = prompt(`Enter a city..`);
city = city.toLowerCase();

if (city !== undefined) {
  let temp = weather[city].temp;
  let humidity = weather[city].humidity;
  let fahr = Math.round(temp * 1.8 + 32);

  alert(
    `It is currently ${temp}°C (${fahr}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we dont know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}
