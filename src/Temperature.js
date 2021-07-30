import React from "react";

export default function Temperature(props) {
  return (
    <div className="row">
      <div className="col-4 ">
        <div className="weather-temperature">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            id="icon"
          />
          <span>
            <strong id="temperature">{props.celsious}</strong>
            <span className="units">°C</span>
          </span>
        </div>
      </div>
      <div className="col-4">
        <ul>
          <li>
            Humidity:
            <span id="humidity"> {props.humidity}</span>%
          </li>
          <li>
            Wind:
            <span id="wind"> {props.wind}</span>
            km/h
          </li>
        </ul>
      </div>
      <div className="col-4">
        <ul>
          <li>
            Sunrise:
            <span id="sunrise"> {props.sunrise}</span>
          </li>
          <li>
            Sunset:
            <span id="sunset"> {props.sunset}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
