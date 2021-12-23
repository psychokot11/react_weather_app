import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherData(props) {
  return (
    <div className="row">
      <div className="col-md-6 left-column">
        <div>
          <h1 className="city">{props.data.name}</h1>
          <CurrentDate />
          <div>
            <h3 className="humidity">Humidity: {props.data.humidity}%</h3>
            <h3 className="wind">Wind: {props.data.wind}km/h</h3>
            <h3 className="description">{props.data.description}</h3>
            <p>
              <img
                src={props.data.icon}
                alt="weather icon"
                className="icon"
              ></img>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 right-column">
        <h2 className="Temperature">
          {props.data.temperature}
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
  );
}
