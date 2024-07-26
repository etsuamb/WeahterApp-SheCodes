function refreshCity(response) {
  let temperatureValue = document.querySelector("#temp-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityElemement = document.querySelector("#humid");
  let windElement = document.querySelector("#wind-speed");
  let date = new Date(response.data.time*1000);
  let formattedDate = document.querySelector("#city-date");
  let icon = document.querySelector("#icon");
  
  temperatureValue.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  weatherDescription.innerHTML = response.data.condition.description;
  humidityElemement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  formattedDate.innerHTML=dateFormat(date);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temp-icon"/>`;
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
