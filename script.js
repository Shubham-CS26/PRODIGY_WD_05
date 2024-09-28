const form = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');
const weatherInfo = document.getElementById('weatherInfo');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const location = locationInput.value;
    getWeather(location);
});

async function getWeather(location) {
    const apiKey = '67418b0a82213b8fa2d6722574dce838';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = 'An error occurred. Please try again later.';
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherDescription = weather[0].description;
    const temperature = main.temp;

    const weatherHtml = `
        <h2>${name}</h2>
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
    `;
    weatherInfo.innerHTML = weatherHtml;
}
