function showTemp(response) {
  let temperatureElement = document.querySelector(
    "#weather-temperature-degree"
  );
  let temperature = Math.round(response.data.temperature.current);

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#enter-city");

  let city = inputCity.value;
  let apiKey = "f78a0dbafabf13190c441b8cod34ftff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}
let searchButton = document.querySelector("#search-city");
searchButton.addEventListener("submit", searchCity);

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
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMin = now.getMinutes();
currentMin = currentMin.toString().padStart(2, "0");

let date = document.querySelector("#day");
date.innerHTML = `${currentDay} ${currentHour}:${currentMin}`;
