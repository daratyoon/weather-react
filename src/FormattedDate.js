import React from "react";

export default function FormattedDate(props) {
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      {day} {date} {month}, {year}
      <br />
      {hours}:{minutes}
    </div>
  );
}
