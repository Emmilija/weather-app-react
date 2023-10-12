import React from 'react';
import '../style/Weather.css'; 




const Cards = ({ forecastData, isCelsius, convertTemperature }) => {

    if (!forecastData || forecastData.length === 0) {
        return ;
      }

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



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



