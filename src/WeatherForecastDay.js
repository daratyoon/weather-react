import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function weatherTempMax() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function weatherTempMin() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <span>
        <WeatherIcon icon={props.data.condition.icon} size={35} />
      </span>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">{weatherTempMax()}</span>
        <span className="WeatherForecast-min">{weatherTempMin()}</span>
        <div className="WeatherForecast-description">
          {props.data.condition.description}
        </div>
      </div>
    </div>
  );
}
