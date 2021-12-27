import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import OneDayForecast from "./OneDayForecast";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <OneDayForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let key = `67d6d7afe1ce9182d95faca9747543ae`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
