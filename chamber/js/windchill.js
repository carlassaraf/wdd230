function getWeatherData() {

    let temperature = document.getElementById("temperature");
    let wind_speed = document.getElementById("wind-speed");
    let wind_chill = document.getElementById("wind-chill");

    let temp_val = toFahrenheit(temperature.innerText);
    let speed_val = toMilesPerHour(wind_speed.innerText);

    if(temp_val <= 50 && speed_val > 3) {
        let chill = toCelsius(calculateWindChill(temp_val, speed_val));
        wind_chill.innerText = `${chill.toFixed(2)}°C`;
    }
    else {
        wind_chill.innerText = "N/A";
    }
}

function toFahrenheit(celsius) { return parseFloat(celsius) * 9 / 5 + 32; }

function toMilesPerHour(kmph) { return parseFloat(kmph) / 1.609; }

function calculateWindChill(temperature, wind_speed) { return 35.74 + 0.6215 * temperature - 35.75 * (wind_speed ** 0.16) + 0.4275 * temperature * (wind_speed ** 0.16); }

function toCelsius(fahrenheit) { return (parseFloat(fahrenheit) - 32) * 5 / 9; }