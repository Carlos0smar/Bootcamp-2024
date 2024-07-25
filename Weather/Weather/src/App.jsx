import React, { useState } from 'react';

// Mock weather data
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
    <button key={city} id="cityButton" onClick={() => onCityClick(city)}>
      {city}
    </button>
  );
}

function WeatherDashboard() {
  const [searchCity, setSearchCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (mockWeatherData[searchCity]) {
      setCurrentWeather(mockWeatherData[searchCity]);
      setError('');
      if (!searchHistory.includes(searchCity)) {
        setSearchHistory([...searchHistory, searchCity]);
      }
    } else {
      setCurrentWeather(null);
      setError('City not found.');
    }
    setSearchCity('');
  };

  const handleCityClick = (city) => {
    setCurrentWeather(mockWeatherData[city]);
    setError('');
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
      <div id="previousSearches">
        {searchHistory.map((city) => (
          <HistoryButton key={city} city={city} onCityClick={handleCityClick} />
        ))}
      </div>
      <div id="weatherData">
        {error && <div>{error}</div>}
        {currentWeather && (
          <>
            <div>Temperature: {currentWeather.temperature}</div>
            <div>Humidity: {currentWeather.humidity}</div>
            <div>Wind Speed: {currentWeather.windSpeed}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;