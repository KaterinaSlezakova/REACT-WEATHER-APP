import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Overview from "./Overview";
import Temperature from "./Temperature";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      date: "Sunday 15:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="mb-4">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-warning">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>
        </form>
        <Overview
          city="Berlin"
          country={weatherData.country}
          description={weatherData.description}
          date={weatherData.date}
        />
        <Temperature
          temperature={Math.round(weatherData.temperature)}
          humidity={weatherData.humidity}
          wind={Math.round(weatherData.wind)}
        />
      </div>
    );
  } else {
    const apiKey ="1da419927439ad536d3c0a898ca6bd6f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);

    return <Loader type="ThreeDots" color="#0B5ED7" height={80} width={80} />;
  }
}
