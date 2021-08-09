import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";


export default function WeatherForecast(){
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
}