document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const location = document.getElementById('locationInput').value;
    const apiKey = '323dc501131d72c40ae97b5ce5bda642'; // Your actual API key
    const unit = 'metric'; // Default to metric for Celsius
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`;

    document.getElementById('loadingIndicator').classList.remove('hidden');
    document.getElementById('weatherDisplay').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        
        displayWeather(data);
    } catch (error) {
        document.getElementById('error').textContent = error.message;
        document.getElementById('error').classList.remove('hidden');
    } finally {
        document.getElementById('loadingIndicator').classList.add('hidden');
    }
});

function displayWeather(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;
    const temperatureElement = document.getElementById('temperature');
    
    document.getElementById('location').textContent = location;
    temperatureElement.textContent = `${temperature} °C`;
    document.getElementById('conditions').textContent = conditions;

    document.getElementById('weatherDisplay').classList.remove('hidden');

    let isCelsius = true;
    document.getElementById('toggleUnit').addEventListener('click', () => {
        if (isCelsius) {
            temperatureElement.textContent = `${(temperature * 9/5 + 32).toFixed(1)} °F`;
            document.getElementById('toggleUnit').textContent = 'Toggle to °C';
        } else {
            temperatureElement.textContent = `${temperature} °C`;
            document.getElementById('toggleUnit').textContent = 'Toggle to °F';
        }
        isCelsius = !isCelsius;
    });
}
