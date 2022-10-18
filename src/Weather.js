import axios from "axios";
import React from "react";
import "./Weather.css";

export default function Weather(props) {
  function getWeather(response) {
    return `The weather is ${Math.round(response.data.main.temp)}°F in ${
      response.data.name
    }`;
  }
  let apiKey = "e3af10cefc7c7a7f4ca878121a656948";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getWeather);

  return (
    <div className="Weather">
      <div className="col-6">
        <h1>Houston</h1>
        <ul>
          <li>58°F</li>
          <li>Mostly Sunny</li>
          <li>Tuesday, October 18, 2022</li>
          <li>11:25AM</li>
        </ul>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 10% </li>
          <li>Wind Speed: 15mph</li>
          <li>Humidity: 53%</li>
        </ul>
      </div>
    </div>
  );
}
