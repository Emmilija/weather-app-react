// const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); 
//       handleSearch();
//     }
//   };
  
//   const handleSearch = async () => {
//     if (city) {
//       setIsLoading(true);
//       setError(null);
  
//       try {
//         const data = await getWeatherData(city);
//         setWeatherData(data);
//         setIsLoading(false);
//       } catch (error) {
//         setError('Error fetching weather data');
//         setIsLoading(false);
//       }
//     }
//   };
  
//   return (

//     <input
//       id="cityInput"
//       className="city-input"
//       placeholder="Search for city"
//       type="text"
//       value={city}
//       onChange={(e) => setCity(e.target.value)}
//       onKeyDown={handleKeyDown}
//     />

//   );