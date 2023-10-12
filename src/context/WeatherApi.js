import axios from "axios";



export const getWeatherData = async (city) => {

    try {
        const apiUrl = ` ${process.env.REACT_APP_WEATHER_URL}/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3&aqi=no&alerts=yesalerts=no`;
      

        const response = await axios.get(apiUrl)

       return response.data
       
      } catch (error) {
        console.error('Error fetching weather data:', error);
      
      }
    }


