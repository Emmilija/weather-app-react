import React from "react";
import '../style/Weather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import {faDroplet} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import{faCloud} from '@fortawesome/free-solid-svg-icons'
import Spinner from './Spinner';


function MainCard({weatherData, isLoading, isCelsius, convertTemperature, error}) {

    if (!weatherData) {
        return (
        error
        );
      }



    return(
        <div>
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
</div>
    )
          }



export default MainCard;