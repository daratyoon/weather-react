import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Fri</div>
            <span>
              <WeatherIcon icon="clear-sky-day" size={35} />
            </span>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-max">
                {forecastData.temperature.maximum}°
              </span>
              <span className="WeatherForecast-min">
                {" "}
                {forecastData.temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a432b612baftbo7e8e8c94493b9d5ee0";
    let city = props.forecast;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(url).then(handleResponse);
  }
}
