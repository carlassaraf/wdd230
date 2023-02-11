/**
 * Converts temperature from Celsius to Fahrenheit
 * @param {Number} temperature Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
function toFahrenheit(temperature) { return temperature * 9 / 5 + 32; }

/**
 * Converts temperature from Fahrenheit to Celsius
 * @param {Number} temperature Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
function toCelsius(temperature) { return (temperature - 32) * 5 / 9; }

/**
 * Converts kilometers to miles
 * @param {Number} km 
 * @returns Distance in miles
 */
function toMiles(km) { return km / 1.609; }

/**
 * Calculates, if possible, the wind chill
 * @param {Number} temperature Temperature in Fahrenheit
 * @param {Number} windSpeed Wind speed in mph 
 * @returns Wind chill value if possible, NaN otherwise
 */
function getWindChill(temperature, windSpeed) {
    // Check values
    if(temperature <= 50 && windSpeed > 3) {
        // Calculate wind chill
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }
    else { return NaN; }
}

document.addEventListener("DOMContentLoaded", () => {
    // Get temperature value
    const temperature = toFahrenheit(parseFloat(document.querySelector("#temperature").innerText));
    // Get wind speed value
    const windSpeed = toMiles(parseFloat(document.querySelector("#wind-speed span").innerText));
    // Calculate wind chill value
    const windChill = getWindChill(temperature, windSpeed);
    // Set value
    document.querySelector("#wind-chill span").innerText = isNaN(windChill)? "N/A" : `${toCelsius(windChill).toFixed(1)} °C`;
});