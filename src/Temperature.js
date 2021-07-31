import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Temperature(props) {
  return (
    <div className="row">
      <div className="col-5 ms-3">
        <div className="weather-temperature">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#202124"
            size= {70}
            animate={true}
          />
          <span>
            <strong className="temperature ms-3">{props.celsious}</strong>
            <span className="units">°C</span>
          </span>
        </div>
      </div>
      <div className="col-3">
        <ul>
          <li>
            Humidity:
            <span className="humidity"> {props.humidity}</span>%
          </li>
          <li>
            Wind:
            <span className="wind"> {props.wind}</span>
            km/h
          </li>
        </ul>
      </div>
      <div className="col-3">
        <ul>
          <li>
            Sunrise:
            <span className="sunrise"> {props.sunrise}</span>
          </li>
          <li>
            Sunset:
            <span className="sunset"> {props.sunset}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
