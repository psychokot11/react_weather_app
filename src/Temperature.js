import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <h2 className="Temperature">
        {props.data}
        <span>
          <small>
            <sup>
              <b>°C</b> |
              <a href="/" className="Farenheit" onClick={showFahrenheit}>
                °F
              </a>
            </sup>
          </small>
        </span>
      </h2>
    );
  } else {
    return (
      <h2 className="Temperature">
        {Math.round((props.data * 9) / 5 + 32)}
        <span>
          <small>
            <sup>
              <a href="/" className="Celcius" onClick={showCelcius}>
                °C
              </a>
              | <b>°F</b>
            </sup>
          </small>
        </span>
      </h2>
    );
  }
}
