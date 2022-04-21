// HTML Elements Element Variables
const cityInputEl = document.querySelector('#city-input');
const cityBtnEl = document.querySelector('#city-btn');
const searchHistoryEl = document.querySelector('#search-history')

// City Information HTML Element Variables
const cityNameEl = document.querySelector('#city-name');
const cityTempEl = document.querySelector('#city-temperature');
const cityWindEl = document.querySelector('#city-wind');
const cityHumidityEl = document.querySelector('#city-humidity');
const cityUVEl = document.querySelector('#city-UV');

// Forecast Information Variable
const cardContainer = document.querySelector('#cards-container');

// Other Variables
let city;
let cities;
let cnt = 5;
const APIKey = '041b3ebaa9404accfbb12b62ccab9afb';

const refreshHistory = () => {
    // Empty the search history to avoid duplicating values
    searchHistoryEl.innerHTML = "";

    // Get items from localStorage
    cities = JSON.parse(localStorage.getItem('Cities')) ?? "";
    
    // Loop thru localStorage and create the search history buttons w/ the getDataHistory click event
    for (let i = cities.length - 1; i >= 0; i--) {
        let newBtn = document.createElement('button')
        newBtn.classList.add("p-2", "text-white", "bg-gray-500", "rounded-full", "hover:bg-rose-600");
        newBtn.innerHTML = cities[i];
        newBtn.addEventListener('click', getDataHistory);
        searchHistoryEl.append(newBtn);
    }
}

const getData = (event) => {
    event.preventDefault();
    // Error checking, if cities is falsy then re-assign it as an array. This is a workaround to the "push is not a function" error when the localStorage is empty, treating it as not an array
    if (!cities) {
        cities = [];
    }
    // Grab the input value and assign it to the city variable
    city = cityInputEl.value;

    // Error checking, if input value is blank, then end the function and do nothing.
    if (city === "") {
        return;
    }

    // Verify if the city value is already saved in the localStorage
    if (cities.includes(city)) {
        // If saved, then move the element to the last position
        cities.push(cities.splice(cities.indexOf(city), 1)[0]);
    } else {
        // Else, push the city value into the cities array
        cities.push(city);   
    }

    // Update the localStorage
    localStorage.setItem('Cities', JSON.stringify(cities));
    // Call refreshHistory function
    refreshHistory();
    // Call openWeatherCurrent function
    openWeatherCurrent();
}

const getDataHistory = (event) => {
    event.preventDefault();
    // Overwrite city variable with new value
    city = event.target.innerText;
    // Call openWeatherCurrent function
    openWeatherCurrent();
}

const openWeatherCurrent = async () => {
    // Get the city information using "Current Weather Data API"
    const queryURLCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
    const response = await fetch(queryURLCurrent);
    const data = await response.json();
    
    // Current Date Extraction and Calculation
    // Calcuate Date from UNIX timestamp
    let currentDate = data.dt
    // Convert the UNIX timestamp into milliseconds by multiplying it by 1000
    currentDate = currentDate * 1_000;
    // Use the newly created milliseconds value to create a date object with the new Date() constructor method
    currentDate = new Date(currentDate);
    // Get Full Year
    currentYear = currentDate.getFullYear();
    // Get Month
    currentMonth = currentDate.getMonth() + 1; // January gives 0
    // Get Day
    currentDay = currentDate.getDate();
    // Concatenate to get the date in DD/MM/YYYY format
    currentDate = `(${currentDay}/${currentMonth}/${currentYear})`

    // // Use the .toLocaleString() function to convert the date object into human-friendly date strings
    // currentDate = currentDate.toLocaleString();
    
    // Extract the weather icon code from the data
    let cityWeatherIconCode = data.weather[0].icon;
    // Icon URL
    let cityWeatherIconURL = `https://openweathermap.org/img/w/${cityWeatherIconCode}.png`;

    // Replace HTML Values excl. UV Index
    cityNameEl.innerHTML = `${data.name} ${currentDate} <img src=${cityWeatherIconURL} class="inline" />`;
    cityTempEl.innerHTML = `Temperature: ${data.main.temp} °C`;
    cityWindEl.innerHTML = `Wind: ${data.wind.speed} m/s`;
    cityHumidityEl.innerHTML = `Humidity: ${data.main.humidity}%`;

    // Call openWeatherOpenCall function to extract the UV Index and Forecast information
    openWeatherOpenCall(data);
}

const openWeatherOpenCall = async (currentData) => {
    // Get the UV Index and Forecast information using the "One Call API 1.0" based on the latitude and longitude data from the first response
    const queryURLOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${APIKey}&units=metric`
    const response = await fetch(queryURLOneCall);
    const data = await response.json();

    // If statement to decide on UVI background color
    let backgroundColorUVI;
    if (data.current.uvi <= 2) {
        backgroundColorUVI = 'bg-green-500'
    } else if (data.current.uvi <= 5) {
        backgroundColorUVI = 'bg-yellow-500'
    } else {
        backgroundColorUVI = 'bg-red-500'
    }
    // Replace HTML UV Index Value
    cityUVEl.innerHTML = `UV Index: <span class="text-white ${backgroundColorUVI} ml-1 py-1 px-5 rounded">${data.current.uvi}</span>`

    // Forecast Information, loop thru the data.daily array
    for (let i = 1; i < 6; i++) {
        // Forecast Date Extraction and Calculation
        // Calcuate Date from UNIX timestamp
        let forecastDate = data.daily[i].dt
        // Convert the UNIX timestamp into milliseconds by multiplying it by 1000
        forecastDate = forecastDate * 1_000;
        // Use the newly created milliseconds value to create a date object with the new Date() constructor method
        forecastDate = new Date(forecastDate);
        // Get Full Year
        forecastYear = forecastDate.getFullYear();
        // Get Month
        forecastMonth = forecastDate.getMonth() + 1; // January gives 0
        // Get Day
        forecastDay = forecastDate.getDate();
        // Concatenate to get the date in DD/MM/YYYY format
        forecastDate = `${forecastDay}/${forecastMonth}/${forecastYear}`

        // // Use the .toLocaleString() function to convert the date object into human-friendly date strings
        // forecastDate = forecastDate.toLocaleString();

        // Extract the weather icon code from the data
        let forecastWeatherIconCode = data.daily[i].weather[0].icon;
        // Icon URL
        let forecastWeatherIconURL = `https://openweathermap.org/img/w/${forecastWeatherIconCode}.png`;

        // Populate HTML Forecast Elements
        cardContainer.children[i-1].children[0].innerHTML = forecastDate;
        cardContainer.children[i-1].children[1].innerHTML = `<img src=${forecastWeatherIconURL} class="inline" />`;
        cardContainer.children[i-1].children[2].innerHTML = `Temperature: ${data.daily[i].temp.day} °C`;
        cardContainer.children[i-1].children[3].innerHTML = `Wind: ${data.daily[i].wind_speed} m/s`;
        cardContainer.children[i-1].children[4].innerHTML = `Humidity: ${data.daily[i].humidity}%`;
    }
}

refreshHistory();
cityBtnEl.addEventListener('click', getData)