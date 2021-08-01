import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Form from "./Form";

export default function Temperature() {
  return (
    <div className="row mt-3 mb-3">
      <div className="col-5 ms-3">
        <div className="weather-temperature">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#202124"
            size={70}
            animate={true}
          />
          <span>
            <strong className="temperature ms-3">{celsious}</strong>
            <span className="units">°C | °F</span>
          </span>
        </div>
      </div>
      <div className="col-3">
        <ul>
          <li>
            Humidity:
            <span className="humidity">40</span>%
          </li>
          <li>
            Wind:
            <span className="wind"> 5</span>
            km/h
          </li>
        </ul>
      </div>
      <div className="col-3">
        <ul>
          <li>
            Sunrise:
            <span className="sunrise"> 5:45</span>
          </li>
          <li>
            Sunset:
            <span className="sunset"> 20:45</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
