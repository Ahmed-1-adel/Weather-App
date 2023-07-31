let input = document.querySelector(".search input");
let button = document.querySelector(".search button");
let imgs = document.querySelector(".weather img");
const keyAccess = "dffe07f55fa503eca17b3fd331f3f648";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${keyAccess}`);
  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    imgs.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    imgs.src = "images/clear.png";
  } else if (data.weather[0].main === "Mist") {
    imgs.src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    imgs.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    imgs.src = "images/snow.png";
  } else if (data.weather[0].main === "Drizzle") {
    imgs.src = "images/drizzle.png";
  }
}

button.addEventListener("click", () => {
  checkWeather(input.value);
  document.querySelector(".weather").style.display = "block";
});
