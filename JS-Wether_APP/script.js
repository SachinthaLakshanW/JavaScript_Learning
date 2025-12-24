const cityInput = document.getElementById("cityInput")
const searchBtn = document.getElementById("searchBtn")
const status = document.getElementById("status")
const weatherInfo = document.getElementById("weatherInfo")

const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")
const condition = document.getElementById("condition")

searchBtn.addEventListener("click", getWeather)

async function getWeather() {
  const city = cityInput.value.trim()

  if (!city) {
    status.innerText = "Please enter a city name"
    return
  }

  status.innerText = "Loading weather data..."
  weatherInfo.classList.add("hidden")

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    )
    const geoData = await geoRes.json()

    if (!geoData.results) {
      throw new Error("City not found")
    }

    const { latitude, longitude, name, country } = geoData.results[0]

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )

    const weatherData = await weatherRes.json()
    const weather = weatherData.current_weather

    cityName.innerText = `${name}, ${country}`
    temp.innerText = `${weather.temperature} °C`
    wind.innerText = `${weather.windspeed} km/h`
    condition.innerText = getCondition(weather.weathercode)

    status.innerText = ""
    weatherInfo.classList.remove("hidden")

  } catch (error) {
    status.innerText = error.message
  }
}

function getCondition(code) {
  if (code === 0) return "Clear"
  if (code <= 3) return "Cloudy"
  if (code <= 48) return "Fog"
  if (code <= 67) return "Rain"
  if (code <= 77) return "Snow"
  if (code <= 99) return "Storm"
  return "Unknown"
}
