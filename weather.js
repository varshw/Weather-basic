document.getElementById('search-button').addEventListener('click', function() {
    const apiKey = '42ea50448cbd9a4e44fcff6261882f73'; // Replace with your actual API key
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            const description = data.weather[0].description;

            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Weather: ${description}`;
        })
        .catch(error => {
            alert(error.message);
            document.getElementById('city-name').textContent = '';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
        });
});
