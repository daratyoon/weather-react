import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "shower-rain-day": "RAIN",
    "snow-day": "SNOW",
    "mist=day": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color="54ad95"
      size={40}
      animate={true}
    />
  );
}
