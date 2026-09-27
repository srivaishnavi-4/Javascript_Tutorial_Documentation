const GEOCODING_API =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";


// DOM Elements

const cityInput =
    document.getElementById("cityInput");

const searchButton =
    document.getElementById("searchButton");

const locationButton =
    document.getElementById("locationButton");

const statusMessage =
    document.getElementById("statusMessage");

const weatherCard =
    document.getElementById("weatherCard");

const emptyState =
    document.getElementById("emptyState");

const cityName =
    document.getElementById("cityName");

const country =
    document.getElementById("country");

const dateTime =
    document.getElementById("dateTime");

const weatherEmoji =
    document.getElementById("weatherEmoji");

const temperature =
    document.getElementById("temperature");

const description =
    document.getElementById("description");

const feelsLike =
    document.getElementById("feelsLike");

const humidity =
    document.getElementById("humidity");

const windSpeed =
    document.getElementById("windSpeed");

const pressure =
    document.getElementById("pressure");

const minTemperature =
    document.getElementById("minTemperature");

const maxTemperature =
    document.getElementById("maxTemperature");


// Search city
// City name -> Latitude + Longitude

async function searchCity(city) {

    try {

        if (!city) {

            throw new Error(
                "Please enter a city name."
            );
        }


        showLoading();


        const url =
            `${GEOCODING_API}` +
            `?name=${encodeURIComponent(city)}` +
            `&count=1` +
            `&language=en` +
            `&format=json`;


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Unable to find the city."
            );
        }


        const data =
            await response.json();


        if (
            !data.results ||
            data.results.length === 0
        ) {

            throw new Error(
                "City not found."
            );
        }


        const location =
            data.results[0];


        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


        getWeather(
            latitude,
            longitude,
            location.name,
            location.country
        );


    } catch (error) {

        handleError(error);
    }
}


// Get weather using coordinates

async function getWeather(
    latitude,
    longitude,
    locationName,
    countryName
) {

    try {

        showLoading();


        const url =
            `${WEATHER_API}` +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,pressure_msl,wind_speed_10m,weather_code` +
            `&daily=temperature_2m_max,temperature_2m_min` +
            `&timezone=auto`;


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Unable to fetch weather data."
            );
        }


        const data =
            await response.json();


        displayWeather(
            data,
            locationName,
            countryName
        );


    } catch (error) {

        handleError(error);

    } finally {

        hideLoading();
    }
}


// Display weather

function displayWeather(
    data,
    locationName,
    countryName
) {

    const current =
        data.current;

    const daily =
        data.daily;


    cityName.textContent =
        locationName;


    country.textContent =
        countryName;


    temperature.textContent =
        `${Math.round(current.temperature_2m)}°C`;


    feelsLike.textContent =
        `${Math.round(current.apparent_temperature)}°C`;


    humidity.textContent =
        `${current.relative_humidity_2m}%`;


    windSpeed.textContent =
        `${current.wind_speed_10m} km/h`;


    pressure.textContent =
        `${Math.round(current.pressure_msl)} hPa`;


    minTemperature.textContent =
        `${Math.round(daily.temperature_2m_min[0])}°C`;


    maxTemperature.textContent =
        `${Math.round(daily.temperature_2m_max[0])}°C`;


    const weatherInfo =
        getWeatherDescription(
            current.weather_code
        );


    weatherEmoji.textContent =
        weatherInfo.emoji;


    description.textContent =
        weatherInfo.description;


    dateTime.textContent =
        formatDateTime(
            current.time
        );


    weatherCard.classList.remove(
        "hidden"
    );


    emptyState.classList.add(
        "hidden"
    );


    statusMessage.textContent = "";
}


// Weather code -> description

function getWeatherDescription(code) {

    if (code === 0) {

        return {
            description: "Clear sky",
            emoji: "☀️"
        };
    }


    if (
        code === 1 ||
        code === 2
    ) {

        return {
            description: "Partly cloudy",
            emoji: "⛅"
        };
    }


    if (code === 3) {

        return {
            description: "Overcast",
            emoji: "☁️"
        };
    }


    if (
        code === 45 ||
        code === 48
    ) {

        return {
            description: "Fog",
            emoji: "🌫️"
        };
    }


    if (
        code >= 51 &&
        code <= 57
    ) {

        return {
            description: "Drizzle",
            emoji: "🌦️"
        };
    }


    if (
        code >= 61 &&
        code <= 67
    ) {

        return {
            description: "Rain",
            emoji: "🌧️"
        };
    }


    if (
        code >= 71 &&
        code <= 77
    ) {

        return {
            description: "Snow",
            emoji: "❄️"
        };
    }


    if (
        code >= 80 &&
        code <= 82
    ) {

        return {
            description: "Rain showers",
            emoji: "🌦️"
        };
    }


    if (
        code === 95 ||
        code === 96 ||
        code === 99
    ) {

        return {
            description: "Thunderstorm",
            emoji: "⛈️"
        };
    }


    return {
        description: "Unknown",
        emoji: "🌤️"
    };
}


// Format date and time

function formatDateTime(dateTimeValue) {

    const date =
        new Date(dateTimeValue);


    return date.toLocaleString(
        "en-IN",
        {
            dateStyle: "medium",
            timeStyle: "short"
        }
    );
}


// Use browser location

function getCurrentLocation() {

    if (!navigator.geolocation) {

        handleError(
            new Error(
                "Geolocation is not supported by this browser."
            )
        );

        return;
    }


    showLoading();


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            getWeather(
                latitude,
                longitude,
                "Your Location",
                "Current Location"
            );
        },


        function (error) {

            let message;


            switch (error.code) {

                case error.PERMISSION_DENIED:

                    message =
                        "Location permission was denied.";

                    break;


                case error.POSITION_UNAVAILABLE:

                    message =
                        "Location information is unavailable.";

                    break;


                case error.TIMEOUT:

                    message =
                        "Location request timed out.";

                    break;


                default:

                    message =
                        "Unable to get your location.";
            }


            handleError(
                new Error(message)
            );
        }
    );
}


// Search button

searchButton.addEventListener(
    "click",
    function () {

        const city =
            cityInput.value.trim();


        searchCity(city);
    }
);


// Enter key

cityInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            const city =
                cityInput.value.trim();


            searchCity(city);
        }
    }
);


// Current location button

locationButton.addEventListener(
    "click",
    getCurrentLocation
);


// Loading

function showLoading() {

    statusMessage.textContent =
        "Loading weather...";

    searchButton.disabled =
        true;

    locationButton.disabled =
        true;
}


function hideLoading() {

    searchButton.disabled =
        false;

    locationButton.disabled =
        false;
}


// Error handling

function handleError(error) {

    console.error(
        "Weather Error:",
        error
    );


    statusMessage.textContent =
        error.message;


    weatherCard.classList.add(
        "hidden"
    );


    emptyState.classList.remove(
        "hidden"
    );


    hideLoading();
}