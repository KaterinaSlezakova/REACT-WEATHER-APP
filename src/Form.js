import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Overview from "./Overview";
import FormattedDate from "./FormattedDate";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ready : false});
  const [city, setCity] = useState("Santorini");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    
    });
  }
  function search() {
    const apiKey = "2fe472309e4eca35c3771be7be704291";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </div>
           
          </div>
        </form>
        <Overview
          cityName={weatherData.city}
          country={weatherData.country}
          description={weatherData.description}
        />
        <FormattedDate
          day={weatherData.date.getDay()}
          hours={weatherData.date.getHours()}
          minutes={weatherData.date.getMinutes()}
        />
        <CurrentWeather
          code={weatherData.icon}
          temperature={weatherData.temperature}
          humidity={weatherData.humidity}
          wind={Math.round(weatherData.wind)}
          sunriseHour={weatherData.sunrise.getHours()}
          sunriseMin={weatherData.sunrise.getMinutes()}
          sunsetHour={weatherData.sunset.getHours()}
          sunsetMin={weatherData.sunset.getMinutes()}
        />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#0B5ED7" height={80} width={80} />;
  }
}
