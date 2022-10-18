import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState("");

  function searchCity(response) {
    setWeatherInfo(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
        <li>Descrip: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} mph</li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e3af10cefc7c7a7f4ca878121a656948";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(url).then(searchCity);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Seach City"
          onChange={changeCity}
          className="SearchCityBar"
        />
        <input type="submit" value="Search" className="SearchCityButton" />
      </form>
      <div>{weatherInfo}</div>
    </div>
  );
}
