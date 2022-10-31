import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    return response.data;
  }

  let apiKey = "a432b612baftbo7e8e8c94493b9d5ee0";
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.forecast}&key=${apiKey}&units=imperial`;

  axios.get(url).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon type="clear-sky-day" />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max">20°</span>
            <span className="WeatherForecast-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
