import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>
            <strong>{props.data.city}</strong>
          </h1>
          <ul className="DailyInfo">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <span>
                  {" "}
                  <WeatherIcon icon={props.data.icon} size={58} />
                </span>
                <UnitConversion fahrenheit={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="WeatherDetails">
            <li className="WeatherInfo-description">
              {props.data.description}
            </li>
            <li>Wind Speed:{props.data.wind}mph</li>
            <li>Humidity:{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
      <WeatherForecast forecast={props.data.city} />
    </div>
  );
}
