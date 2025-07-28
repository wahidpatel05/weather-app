
// Weather App Script`
document.addEventListener('DOMContentLoaded', () => {
    let cityInput = document.getElementById("city-input")
    const getWeather = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const tempDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")
    
    

    getWeather.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if(!city) return;
        //it may throw an error
        //server or database is always in another continent

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
            cityInput.value = ""
        } catch (error) {
            displayError()
            cityInput.value = ""
        }
    })

    async function fetchWeatherData (city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url);
        console.log(response);
        
        if(!response.ok){
            throw new Error("City not found");
            
        }
        data = await response.json()
        return data

    }
    function displayWeatherData(data){
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add("hidden")

        const {name, main, weather} = data;
        cityNameDisplay.textContent = `City: ${name}`
        tempDisplay.textContent = `Temperature: ${main.temp}`
        descriptionDisplay.textContent = `Description: ${weather[0].description}`

    }
    function displayError (){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove("hidden")
    }

})
