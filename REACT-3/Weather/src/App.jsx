import { useState } from 'react';
import './App.css';
/*
React Weather Dashboard


We provided some simple React template code. Your goal is to build a weather dashboard application that lets users search for current weather conditions in different cities.

When the app loads, it should display a search bar where users can type in a city's name. Once the city name is entered (case-sensitive) and the user hits the "Search" button, the app should display the current temperature, humidity, and wind speed for the chosen city. For simplicity, you don't have to make actual API calls; instead, use the predefined data to mimic the weather data for a few cities.

Additionally, all previously searched cities should be listed below the search bar as buttons. When a user clicks on a previously searched city, its weather data should be displayed again.

Ensure the application handles scenarios where the city is not in your mock data by displaying a message: "City not found." You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they are. Submit your code once it is complete and our system will validate your output.


*/

// instead of requesting data from an API, use this mock data
const mockWeatherData = {
 'New York': {
   temperature: '22°C',
   humidity: '56%',
   windSpeed: '15 km/h'
 },
 'Los Angeles': {
   temperature: '27°C',
   humidity: '45%',
   windSpeed: '10 km/h',
 },
 'London': {
   temperature: '15°C',
   humidity: '70%',
   windSpeed: '20 km/h'
 },
};

function HistoryButton({ city, onCityClick }) {
  return (
    <button key={city} id="cityButton" className='button' onClick={() => onCityClick(city)}>
      {city}
    </button>
  );
}

function WeatherDashboard() {
  const [searchCity, setSearchCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState('');
  const [source, setSource] = useState(1);

  const handleCitySearch = () => {
    if(mockWeatherData[searchCity]){
      setCurrentWeather(mockWeatherData[searchCity]);
      if(!searchHistory.includes(searchCity)){
        setSearchHistory([...searchHistory, searchCity]);
      }
      setError('');
    } else {
      setCurrentWeather(null);
      setError('City not found.');
    }
    setSearchCity('');
  }
  const randomImage = () => {
    const random = Math.floor(Math.random() * 3) + 1;
    return random;
  }
  const handleCityClick = (city) => {
    setCurrentWeather(mockWeatherData[city]);
    setSource(randomImage());
    setError('');
  };
  
  return (
   <div>
    <div id="searchBar">
     <input type="text" id="citySearch" placeholder="Search for a city..." value={searchCity} onChange={(e)=>setSearchCity(e.target.value)} />
     <button id="searchButton" className="button" onClick={handleCitySearch}>Search</button>
     </div>
     <div id="previousSearches">
       {searchHistory.map(
         city => <HistoryButton key={city} city={city}  onCityClick={handleCityClick}/>
       )}
     </div>
     <div id="weatherData">
      {error && <div>{error}</div>}
       {currentWeather && (
          <>
            <img src={`weather_images/${source}.png`} className='weatherImage'/>
            <div className='data'>Temperature: {currentWeather.temperature}</div>
            <div className='data'>Humidity: {currentWeather.humidity}</div>
            <div className='data'>Wind Speed: {currentWeather.windSpeed}</div>
          </>
        )}
     </div>
   </div>
 );
}

export default WeatherDashboard;
