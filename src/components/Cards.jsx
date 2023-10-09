import React from 'react';
import './Weather.css'; 




const Cards = ({ forecastData, isCelsius }) => {

    if (!forecastData || forecastData.length === 0) {
        return ;
      }

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


      const convertTemperature = (temperature, targetUnit) => {
              if (targetUnit === 'C') {
                return Math.round(temperature);
              } else if (targetUnit === 'F') {
                return parseFloat((temperature * 9 / 5 + 32).toFixed(2));
              } else {
                return temperature;
              }
            }



            return (
              <div className='cards'>
                {forecastData.map((day) => {
                  const date = new Date(day.date);
                  const dayOfWeek = days[date.getDay()]; 
          
                  return (
                    <div key={day.date} className='onecard'>
                      <h3 className='card-day'>{dayOfWeek}</h3>
                      <div>
                      <img className='icon-card' src={day.day.condition.icon} alt={day.day.condition.text} /></div>
                      <p className='card-temp'>
                        {convertTemperature(day.day.avgtemp_c, isCelsius)}{isCelsius ? '°C' : '°F'}
                      </p>
                      <p className='card-desc'>{day.day.condition.text}</p>
                    </div>
                  );
                })}
              </div>
            );
          }


  export default Cards;



