const apiKey = "bef427262db9e361e69812a0f9313fe7";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const cityStruct = `&q=${city}`;
  const response = await fetch(apiUrl + cityStruct + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${Math.round(
    data.main.humidity
  )}%`;
  document.querySelector(".wind").innerHTML = `${Math.round(
    data.wind.speed
  )} km/h`;

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Humidity") {
    weatherIcon.src = "images/humidity.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Search") {
    weatherIcon.src = "images/search.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main === "Wind") {
    weatherIcon.src = "images/wind.png";
  } else if (data.weather[0].main === "Haze") {
    weatherIcon.src = "images/rain.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
