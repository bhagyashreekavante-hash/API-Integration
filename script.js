function getWeather(){

let city = document.getElementById("city").value;
let coordinates = city.split(",");

let lat = coordinates[0];
let lon = coordinates[1];

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)

.then(response => response.json())

.then(data => {

let temp = data.current_weather.temperature;
let wind = data.current_weather.windspeed;
let code = data.current_weather.weathercode;

let icon = getWeatherIcon(code);

document.getElementById("weatherResult").innerHTML =

`
<div class="weather-icon">
<i class="${icon}"></i>
</div>

<p>Temperature: ${temp} °C</p>
<p>Wind Speed: ${wind} km/h</p>
`;

})

.catch(error => {

document.getElementById("weatherResult").innerHTML =
"Failed to load weather data";

});
}




/* WEATHER ICON LOGIC */

function getWeatherIcon(code){

if(code == 0)
return "wi wi-day-sunny";

else if(code <= 3)
return "wi wi-cloudy";

else if(code <= 55)
return "wi wi-rain";

else if(code <= 65)
return "wi wi-showers";

else if(code <= 75)
return "wi wi-snow";

else
return "wi wi-cloud";

}