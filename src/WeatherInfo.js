import axios from "axios";
import React from "react";
import "./WeatherInfo.css";

export default function Weather(props) {
  function getWeather(response) {
    return `The weather is ${Math.round(response.data.main.temp)}°F in ${
      response.data.name
    }`;
  }
  const apiKey = "a432b612baftbo7e8e8c94493b9d5ee0";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getWeather);

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>
            <strong>Houston</strong>
          </h1>
          <ul className="DailyInfo">
            <li>Tuesday, Oct 18, 2022</li>
            <li>Last Updated: 11:25AM</li>
            <li>Mostly Sunny</li>
          </ul>
          <div>
            <span>
              {" "}
              <img
                alt="Sunny"
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              ></img>
            </span>
            <span className="DailyTemp">58°</span>{" "}
            <span className="Unit">F|C</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="WeatherDetails">
            <li>Precipitation: 10% </li>
            <li>Wind Speed: 15mph</li>
            <li>Humidity: 53%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
