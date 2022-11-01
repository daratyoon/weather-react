import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{props.data.time}</div>
      <span>
        <WeatherIcon icon={props.data.condition.icon} size={35} />
      </span>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">
          {props.data.temperature.maximum}°
        </span>
        <span className="WeatherForecast-min">
          {" "}
          {props.data.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
