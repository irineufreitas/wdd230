const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?'; // Base URL for the Current Weather API

const latitude = 49.74991478041749;
const longitude = 6.637578267619603;

// API key
const apiKey = '9e230d3576f759836a3f9cddddfe63d7';

// Construct the complete URL with query parameters
const completeUrl = `${url}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(completeUrl); // Use completeUrl variable here
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display current temperature
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Construct URL for weather icon
    let desc = data.weather[0].description; // Get weather description
    weatherIcon.setAttribute('src', iconsrc); // Set weather icon src attribute
    weatherIcon.setAttribute('alt', desc); // Set weather icon alt attribute
    captionDesc.textContent = `${desc}`; // Display weather description
}
