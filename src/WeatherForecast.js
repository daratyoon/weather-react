import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon icon={props.data} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max">20°</span>
            <span className="WeatherForecast-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
