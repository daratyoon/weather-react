import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  function searchCity(response) {
    console.log(response.data);
    setWeatherInfo({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a432b612baftbo7e8e8c94493b9d5ee0";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(url).then(searchCity);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
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
      <div>{weatherInfo}</div>
      <WeatherInfo data={weatherInfo} />
    </div>
  );
}
