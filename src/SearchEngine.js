import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
    });
  }

  function searchCity(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(search);
    let key = `507a8a9ca59f349acae2d2eb4eb7139e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  let conditions = (
    <div>
      <h3 className="humidity">Humidity: {weather.humidity}%</h3>
      <h3 className="wind">Wind: {weather.wind}km/h</h3>
      <h3 className="description">{weather.description}</h3>
    </div>
  );

  let temperature = (
    <h2 className="Temperature">
      {weather.temperature}
      <span>
        <small>
          <sup>
            <a href="/" className="Celcius">
              °C
            </a>
            |
            <a href="/" className="Farenheit">
              °F
            </a>
          </sup>
        </small>
      </span>
    </h2>
  );

  let defaultForm = (
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
            <h1 className="city">Search for the city</h1>
            <h3 className="date">
              <Date />
            </h3>
          </div>
        </div>
        <div className="col-md-6 right-column"></div>
      </div>
    </div>
  );

  let form = (
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
            <h1 className="city">{city}</h1>
            <h3 className="date">
              <Date />
            </h3>
            <div>{conditions}</div>
          </div>
        </div>
        <div className="col-md-6 right-column">{temperature}</div>
      </div>
    </div>
  );

  if (city) {
    return form;
  } else {
    return <div>{defaultForm}</div>;
  }
}
