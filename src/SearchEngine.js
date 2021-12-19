import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="search" placeholder="enter the city" autocomplete="off" />
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
          <h1 className="city">Oslo</h1>
          <h3 className="date">Saturday 11:11</h3>
          <h3 className="humidity">Humidity: 1% </h3>
          <h3 className="wind">Wind: 3km/h</h3>
          <h3 className="description">Windy</h3>
        </div>
        <div className="col-md-6 right-column">
          <h2 className="Temperature">
            6
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
}
