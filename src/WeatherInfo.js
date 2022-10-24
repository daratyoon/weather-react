import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>
            <strong>{props.data.city}</strong>
          </h1>
          <ul className="DailyInfo">
            <li>Tuesday, Oct 18, 2022</li>
            <li>Last Updated: 11:25AM</li>
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
            <span className="DailyTemp">58°</span>{" "}
            <span className="Unit">F|C</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="WeatherDetails">
            <li>{props.data.wind}</li>
            <li>{props.data.humidity}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
