import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
 
  const API_KEY = "f9e40c1b06127e3c1b87cbc7d24b43f2"; // Replace with your API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async () => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: location,
          units: "metric", // Use 'imperial' for Fahrenheit
          appid: API_KEY,
        },
      });
      console.log(response.data);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("Location not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Display App</h1>
      <input
        type="text"
        placeholder="Enter location (e.g., London)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "10px 20px" }}>
        Get Weather
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Weather in {weatherData.name}</h2>
          <p>
            <strong>Current Temperature:</strong> {weatherData.main.temp}°C (
            {(weatherData.main.temp * 9) / 5 + 32}°F)
          </p>
          <p>
            <strong>Min Temperature:</strong> {weatherData.main.temp_min}°C (
            {(weatherData.main.temp_min * 9) / 5 + 32}°F)
          </p>
          <p>
            <strong>Max Temperature:</strong> {weatherData.main.temp_max}°C (
            {(weatherData.main.temp_max * 9) / 5 + 32}°F)
          </p>
          <p>
            <strong>Sky Status:</strong> {weatherData.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Pressure:</strong> {weatherData.main.pressure} atm
          </p>
          <p>
            <strong>Sea level:</strong> {weatherData.main.sea_level} feet
          </p>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;