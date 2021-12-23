import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      name: response.data.name,
      ready: true,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
    });
  }

  function searchCity(event) {
    console.log("testSearch");
  }
  function handleSubmit(event) {
    console.log("testSubmit");
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
              <h1 className="city">{props.city}</h1>
              <h3 className="date">
                <CurrentDate />
              </h3>
              <div>
                <h3 className="humidity">Humidity: {weatherData.humidity}%</h3>
                <h3 className="wind">Wind: {weatherData.wind}km/h</h3>
                <h3 className="description">{weatherData.description}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-column">
            <h2 className="Temperature">
              {weatherData.temperature}
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
          </div>
        </div>
      </div>
    );
  } else {
    let defaultCity = props.city;
    let key = `507a8a9ca59f349acae2d2eb4eb7139e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Lodaing...";
  }
}
