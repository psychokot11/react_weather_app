
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