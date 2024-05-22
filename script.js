const APIKey = "f8412dee1e93b1159dd3e23af0d81f9c"

const inputElement = document.getElementById("city-input");
const buttonElement = document.getElementById("submit-button");
const outputElement = document.getElementById("output-area");
const conditionsImage = document.getElementById("conditions-image")
const weatherType = document.getElementById("status-text")

buttonElement.addEventListener("click", function() {
    const userInput = inputElement.value;
    const lowerCaseUserInput = userInput.toLowerCase();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${lowerCaseUserInput}&appid=${APIKey}&units=metric`

    fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        const cityName = data.name;
        const currentTemp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const conditions = data.weather[0].main
        const weatherCode = data.weather[0].icon
        const imgUrl = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;

        outputElement.innerText = `The temperature in ${cityName} is ${currentTemp}°C but it feels like it's ${feelsLike}°C.`;
        weatherType.innerText = `Expect ${conditions}`;
        conditionsImage.src = imgUrl;
    })
})
