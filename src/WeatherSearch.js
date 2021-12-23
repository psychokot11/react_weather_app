import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherData from "./WeatherData";
import "./SearchEngine.css";

export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function displayWeather(response) {
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      ready: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let key = `507a8a9ca59f349acae2d2eb4eb7139e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  //if (weather.ready) {
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
      <div className="row">
        <div className="col-md-6 left-column">
          <p>
            <img
              src={require("./images/dummy.png")}
              alt="weather icon"
              className="icon"
            ></img>
          </p>
          <div>
            <h1 className="city">{weather.city}</h1>
            <h3 className="date">
              <CurrentDate />
            </h3>
            <div>
              <h3 className="humidity">Humidity: {weather.humidity}%</h3>
              <h3 className="wind">Wind: {weather.wind}km/h</h3>
              <h3 className="description">{weather.description}</h3>
              <WeatherData />
            </div>
          </div>
        </div>
        <div className="col-md-6 right-column">{weather.temperature}</div>
      </div>
    </div>
  );
  //} else {
  //search();
  //return "Loading...";
  //}
}
