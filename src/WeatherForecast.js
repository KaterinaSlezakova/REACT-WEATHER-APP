import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

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
    let apiKey = "476ec4516bf60be6018bdca6a47318a0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}
