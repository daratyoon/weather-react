import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        <p className="DailyTemp m-0">{props.fahrenheit}</p>{" "}
        <span className="Unit">
          °F|
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="UnitConversion">
        <p className="DailyTemp m-0">{celsius}</p>{" "}
        <span className="Unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          |°C
        </span>
      </div>
    );
  }
}
