import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function searchCity(response) {
    setWeatherInfo({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "a432b612baftbo7e8e8c94493b9d5ee0";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(url).then(searchCity);
  }

  if (weatherInfo.ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Seach City"
                onChange={changeCity}
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-info"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherInfo} />
      </div>
    );
  } else {
    search();
    return "Loading city...";
  }
}
