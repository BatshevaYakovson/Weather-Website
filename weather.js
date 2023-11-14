
const apiKey = 'af2d2ebbe323968333ee3e7849669115';

function updateWeather(city, cityId) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=he&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const cityElement = document.getElementById(cityId);
        cityElement.querySelector('i.weather-icon').className = 'fas fa-icon weather-icon'; // Clear existing classes
        if (data.main.feels_like <= 20) {
          cityElement.querySelector('i.weather-icon').classList.add('fas', 'fa-bolt'); // Cold (bolt for lightning)
        } else if (data.main.feels_like > 20 && data.main.feels_like <= 30) {
          cityElement.querySelector('i.weather-icon').classList.add('fas', 'fa-cloud'); // Pleasant
        } else {
          cityElement.querySelector('i.weather-icon').classList.add('fas', 'fa-sun'); // Hot
        }
            cityElement.querySelector('p.city-name').textContent = data.name;
            cityElement.querySelector(`p.description`).textContent = data.weather[0].description;
            cityElement.querySelector(`p.temperature`).textContent = `${data.main.temp}°C`;
            cityElement.querySelector(`p.feels-like`).textContent = `${data.main.feels_like}°C`;
            cityElement.querySelector(`p.humidity`).textContent = ` ${data.main.humidity}%`;


        })
        .catch(error => console.error(`Error fetching data for ${city}:`, error));
}

updateWeather('Eilat', 'eilat');
updateWeather('London', 'london');
updateWeather('New York', 'new-york');
updateWeather('Alaska', 'alaska');
