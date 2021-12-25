import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Oslo");
  function handleResponse(response) {
    setWeatherData({
      name: response.data.name,
      ready: true,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      coordinates: response.data.coord,
    });
  }

  function search() {
    let key = `507a8a9ca59f349acae2d2eb4eb7139e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter the city"
            autoComplete="off"
            onChange={searchCity}
          />
        </form>
        <WeatherData data={weatherData} />
        <hr />;
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Lodaing...";
  }
}
