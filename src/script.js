function refreshCity(response) {
  let temperatureValue = document.querySelector("#temp-value");
  let temperature = response.data.temperature.current;
  temperatureValue.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.condition.description;
  let humidityElemement = document.querySelector("#humid");
  humidityElemement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let date = new Date(response.data.time*1000);
  let formattedDate = document.querySelector("#city-date");
  formattedDate.innerHTML=dateFormat(date);
}
function dateFormat(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurdsay",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${day} ${hour}:${minute}, `;
}
function searchCity(city) {
  let apiKey = "0c0da2fc4to069493aa82b3dbf389dd0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshCity);
}
function searchResult(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");
  searchCity(inputElement.value);
}
let searchElement = document.querySelector("#input-form");
searchElement.addEventListener("submit", searchResult);
searchCity("Addis Ababa");
