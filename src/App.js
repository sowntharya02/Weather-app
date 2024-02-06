import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

const API_key = 'd2df6e61ff42e5263e5af5408e5ac7c4';

const App = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
      setData(response.data);
    } catch (err) {
      alert('Enter the city name');
    }
  };

  return (
    <div className='App'>
      <h1 className='Title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          className='input'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter the City Name"
        />
        <button className='button' onClick={fetchData}>
          Fetch
        </button>
      </div>
      <div>
        {data && (
          <div className='container'>
            <h2>{data.name}</h2>
            <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
            <p>Weather: {data.weather[0].main}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
