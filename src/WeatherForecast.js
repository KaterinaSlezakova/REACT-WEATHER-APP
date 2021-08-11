import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Mon</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">30°</span>
              <span className="WeatherForecast-temperature-min">25°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e23112c75ac1ee62d79ac9963082cc55";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}units=metric`;

    Axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}
