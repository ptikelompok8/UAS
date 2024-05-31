
// WeatherComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeStyle.css'; // Import the CSS file

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const defaultCity = 'Bangka Belitung';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=d503cbdc1a49449ea0b70050243105&q=${defaultCity}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="WeatherForecast">
      {weatherData && (
        <>
          <div className="WeatherLocation">{weatherData.location.name}</div>
          <div className="WeatherData">
            <img className="WeatherIcon" src={weatherData.current.condition.icon} alt="Weather Icon" />
            <div className="WeatherInfo">
              <div className="Temperature">Temperature: {weatherData.current.temp_c}°C</div>
              <div className="Condition">Condition: {weatherData.current.condition.text}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
