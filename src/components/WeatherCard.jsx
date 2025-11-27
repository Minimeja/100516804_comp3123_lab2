function WeatherCard({ weather }) {
  const { name, sys, main, weather: weatherArray, wind } = weather;

  const condition = weatherArray[0];
  const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="header">
        <h2>
          {name}, {sys.country}
        </h2>
        <p className="description">{condition.description}</p>
      </div>

      <div className="main-info">
        <img src={iconUrl} alt={condition.main} />
        <div>
          <p className="temp">{Math.round(main.temp)}°C</p>
          <p>Feels like {Math.round(main.feels_like)}°C</p>
        </div>
      </div>

      <div className="extra-info">
        <p>Humidity: {main.humidity}%</p>
        <p>Pressure: {main.pressure} hPa</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>
          Min: {Math.round(main.temp_min)}°C · Max: {Math.round(main.temp_max)}°C
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
