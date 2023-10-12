
import React, { useState, useEffect, useCallback } from 'react';
import '../style/Weather.css'; 
import Cards from './Cards';
import MainCard from './MainCard';
import { getWeatherData } from '../context/WeatherApi';


const Weather = ({city, setCity}) => {
    const [cityInput, setCityInput] = useState('')
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
    if (cityInput.trim() === "") {
      setError("You must enter a city");
      setShowToggle(false);
    } else {
      setCity(cityInput); 
      setIsLoading(true);
      setError(null);
      setShowToggle(true);
      setCityInput(""); 
    }

  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSearch()
    }
  } 


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
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type='submit'  onClick={handleSearch}>Search</button>
          </div>

          <MainCard 
          weatherData={weatherData}
          isCelsius={isCelsius}
          convertTemperature={convertTemperature}
          isLoading={isLoading}
          error={error}
           />
          <div>
            {weatherData &&
              weatherData.forecast &&
              weatherData.forecast.forecastday && (

                <Cards
                  forecastData={weatherData.forecast.forecastday}
                  isCelsius={isCelsius}
                  convertTemperature={convertTemperature}
                />
              )}
          </div>
        </div>
      );
    };

    
export default Weather;

      
