function refreshCity(response){
let temperatureValue = document.querySelector("#temp-value");
let temperature = response.data.temperature.current;
temperatureValue.innerHTML = Math.round(temperature);
let cityElement = document.querySelector("#city-name");
cityElement.innerHTML = response.data.city;
}
function searchCity(city){
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
