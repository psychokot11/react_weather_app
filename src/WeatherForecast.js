import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setForecastData(response.data.daily);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let key = `5f499f0d563e2b69490e35e28cf5fd01`;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${key}&units=metric`;
  axios.get(url).then(handleResponse);

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="dailyForecast">{forecastData[0].dt}</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="forecast-icon"
            ></img>
            <div className="min-max-temp">
              <span className="max-temp">{forecastData[0].temp.max}°</span>
              <span className="min-temp">{forecastData[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "not ready lol";
  }
}
