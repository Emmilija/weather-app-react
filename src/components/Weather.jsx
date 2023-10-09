
import React, { useState, useEffect, useCallback } from 'react';
import './Weather.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import {faDroplet} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import{faCloud} from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards';
import Spinner from './Spinner';
import { getWeatherData } from '../context/WeatherApi';


const Weather = ({city, setCity}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [isCelsius, setIsCelsius] = useState(true);
    const [showToggle, setShowToggle] = useState(false);

    
        const getWeather =  useCallback(async () => {
      
          setIsLoading(true);
          setError(null);
      
          try {
            if (city) {
              const data = await getWeatherData(city);
              setWeatherData(data);
              setShowToggle(true);
            } else {
              setError('City is required');
            }
          } catch (error) {
            setError('Error fetching weather data');
          } finally {
            setIsLoading(false);
          }
        }, [city]);

 
        useEffect(() => {
          getWeather();
        }, [getWeather]);
        

          const convertTemperature = (temperature, targetUnit) => {
            if (targetUnit === 'C') {
              return Math.round(temperature);
            } else if (targetUnit === 'F') {
              return parseFloat((temperature * 9/5 + 32).toFixed(2));
            } else {
              return temperature;
            }
          };

const handleToggleUnit = () => {
    setIsCelsius(!isCelsius);
  };


 
  const handleSearch = () => {
    document.querySelector('.button-toggle').style.display = 'block'

    setWeatherData(null); 
    setIsLoading(true);
    setError(null);

    getWeather();
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSearch();
    }
  };
  
      return (
        <div className="search-city">
          
          {showToggle && (
        <button className="button-toggle" onClick={handleToggleUnit}>
          {isCelsius ? 'F' : '°C'}
        </button>
      )}

          <h1>Weather Today</h1>

          <div>
            <input
              id="cityInput"
              className="city-input"
              placeholder="Search for city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p>{error}</p>
          ) : weatherData ? (
            <div className="weather-data">
              {weatherData.location && (
                <div>
                  <h2>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="location-icon"
                    />
                    {weatherData.location.name}
                  </h2>

                  <p className="temperature">
                    {convertTemperature(
                      weatherData.current.temp_c,
                      isCelsius ? "°C" : "F"
                    )}
                    {isCelsius ? "°C" : "°F"}
                  </p>

                  {weatherData.current.condition && (
                    <p className="weather-description">
                      {weatherData.current.condition.text}
                    </p>
                  )}
                </div>
              )}
              {weatherData.current && (
                <div className="icon-weather">
                  <img
                    src={weatherData.current.condition.icon || ""}
                    alt={weatherData.current.condition.text || ""}
                  />
                </div>
              )}
              {weatherData.current && (
                <div>
                  <p className="maini wind">
                    <FontAwesomeIcon icon={faWind} className="wind-icon" />
                    Wind status: {weatherData.current.wind_kph || ""} mph{" "}
                  </p>

                  <p className="maini humidity">
                    <FontAwesomeIcon icon={faDroplet} className="wind-icon" />
                    Humidity: {weatherData.current.humidity || ""} %{" "}
                  </p>

                  <p className=" maini cloud">
                    {" "}
                    <FontAwesomeIcon icon={faCloud} className="wind-icon" />
                    Cloud: {weatherData.current.cloud || ""}{" "}
                  </p>

                  <p className=" maini uv">
                    {" "}
                    <FontAwesomeIcon icon={faSun} className="wind-icon" />
                    Uv: {weatherData.current.uv || ""}{" "}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p>Searching for weather data...</p>
          )}

          <div>
            {weatherData &&
              weatherData.forecast &&
              weatherData.forecast.forecastday && (
                <Cards
                  forecastData={weatherData.forecast.forecastday}
                  isCelsius={isCelsius}
                />
              )}
          </div>
        </div>
      );
    };

    
export default Weather;

      
