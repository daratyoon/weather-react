import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

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
            <li>{props.data.description}</li>
          </ul>
          <div>
            <span>
              {" "}
              <img
                alt="Sunny"
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              ></img>
            </span>
            <span className="DailyTemp">{props.data.temperature}°</span>{" "}
            <span className="Unit">F|C</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="WeatherDetails">
            <li>Wind Speed:{props.data.wind}mph</li>
            <li>Humidity:{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
