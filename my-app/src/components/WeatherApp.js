import { useState, useEffect, useRef } from 'react';

function WeatherApp() {
  const inputRef = useRef(null);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const api_key = '7d2f7439094688bc9a2723b3273f8711';

  const handleClick = () => {
    setCity(inputRef.current.value);
  };
  //   let temperature = '';

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
        .then((res) => res.json())
        .then((data) => {
          const temp = data.main.temp;
          setTemperature(temp);
        })
        .catch((error) => {
          setCity('Error fetching temperature', error);
        });
    }
  }, [city]);

  const handleCallback = () => {
    alert(city);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter city name'
        // id='message'
        // name='message'
      />
      <button onClick={handleClick}>Update</button>
      <button onClick={handleCallback}>Callback function</button>
      <h2>{city}</h2>
      <p>{temperature}</p>
    </div>
  );
}

export default WeatherApp;
