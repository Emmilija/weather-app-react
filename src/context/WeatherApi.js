import axios from "axios";



export const getWeatherData = async (city) => {

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_WEATHER_URL}/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`,
      
          );
console.log(response)
     

       return response.data
      } catch (error) {
        console.error('Error fetching weather data:', error);
 
  
      }
    }


