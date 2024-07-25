function searchReuslt(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = inputElement.value;
}
let searchElement = document.querySelector("#input-form");
searchElement.addEventListener("submit", searchReuslt);
