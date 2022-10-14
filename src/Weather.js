import axios from "axios";
import React from "react";

export default function Weather(props) {
  function getWeather(response) {
    alert(
      `The weather is ${Math.round(response.data.main.temp)}°F in ${
        response.data.name
      }`
    );
  }
  let apiKey = "e3af10cefc7c7a7f4ca878121a656948";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getWeather);
  return (
    <div className="Weather">
      <h2>Weather App</h2>
    </div>
  );
}
