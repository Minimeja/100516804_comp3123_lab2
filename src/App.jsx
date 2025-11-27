import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = "4c10595a16ae71021a0e500d4eb0ce27";

function App() {
  const [city, setCity] = useState("Toronto");
  const [query, setQuery] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const res = await axios.get(url);
      setWeather(res.data);
      setCity(cityName);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchWeather(query.trim());
  };

  return (
    <div className="app">
      <div className="weather-container">
        <h1 className="app-title">Weather Now</h1>
        <p className="app-subtitle">Check the current weather for any city.</p>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="info-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}

        {weather && !loading && !error && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
