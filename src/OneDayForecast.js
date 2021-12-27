import React from "react";

export default function OneDayForecast(props) {
  function showDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDate();
    return day;
    console.log(date);
  }

  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  return (
    <div>
      <div className="dailyForecast">{showDay()}</div>
      <img src={icon} alt="weather icon" className="forecast-icon"></img>
      <div className="min-max-temp">
        <span className="max-temp">{Math.round(props.data.temp.max)}°</span>
        <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
