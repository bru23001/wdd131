document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;


////////////////////////// Function to calculate wind chill //////////////////////////

function calculateWindChillC(tempCelsius, windSpeed) {
    return 13.12 + (0.6215 * tempCelsius) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * tempCelsius * Math.pow(windSpeed, 0.16));
}

function calculateWindChillF(tempFahrenheit, windSpeed) {
    return 35.74 + (0.6215 * tempFahrenheit) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempFahrenheit * Math.pow(windSpeed, 0.16));
}

function displayWindChill() {
    let tempCelsius = 9;  
    let windSpeed = 13; 

    document.getElementById("temperature").textContent = `${tempCelsius} °C`;
    document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;

   
    if (tempCelsius <= 10 && windSpeed > 4.8) {
        document.getElementById("wcf").textContent = `${calculateWindChillC(tempCelsius, windSpeed).toFixed(1)} °C`;
    } else {
        document.getElementById("wcf").textContent = "N/A";
    }
}

displayWindChill();