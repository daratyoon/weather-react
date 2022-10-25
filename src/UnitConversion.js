import React from "react";

export default function UnitConversion(props) {
  return (
    <div className="UnitConversion">
      <span className="DailyTemp">{props.fahrenheit}°</span>{" "}
      <span className="Unit">°F|°C</span>
    </div>
  );
}
