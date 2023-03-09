document.addEventListener("DOMContentLoaded", () => {
    // select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    // API url
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=51c9e7e908aa3baccb967c02e9950992";
    // Fetch API
    apiFetch(url).then(data => displayResults(currentTemp, data));
});

async function apiFetch(url) {
    // JSON data
    let data;

    try {
        // Fetch url
        const response = await fetch(url);
        // Verify response
        if (response.ok) {
        // Get JSON data
        data = await response.json();
        // Catch error
        } else {
            throw Error(await response.text());
        }
    // Catch error
    } catch (error) {
        console.log(error);
        return null;
    }
    return data;
}

function displayResults(currentTemp, weatherData) {
    // Get the temperature in Fahrenheit without decimals
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
}