"use client";

import { useEffect, useState } from 'react';
import styles from './Weather.module.css'; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;  // .env dosyasından API anahtarı
  const city = 'Ankara';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const translateWeatherDescription = (description) => {
    switch (description) {
      case 'clear sky':
        return 'Açık Hava';
      case 'few clouds':
        return 'Az Bulutlu';
      case 'scattered clouds':
        return 'Dağınık Bulutlar';
      case 'broken clouds':
        return 'Kırık Bulutlar';
      case 'shower rain':
        return 'Sağanak Yağmur';
      case 'rain':
        return 'Yağmur';
      case 'thunderstorm':
        return 'Gök Gürültülü';
      case 'snow':
        return 'Kar';
      case 'mist':
        return 'Sis';
      default:
        return description;
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Hava durumu verileri alınamadı');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apiUrl]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.weatherContainer}>
      <h2>Hava Durumu</h2>
      <p>{weatherData.name}</p>
      <p>Sıcaklık: {weatherData.main.temp} °C</p>
      <p>Durum: {translateWeatherDescription(weatherData.weather[0].description).charAt(0).toUpperCase() + translateWeatherDescription(weatherData.weather[0].description).slice(1)}</p>
    </div>
  );
};

export default Weather;
