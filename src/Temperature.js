import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Temperature(props) {
  return (
    <div className="row mt-3 mb-3">
      <div className="col-5 ">
        <div className="weather-temperature clearfix">
          <div className="float-start">
            <WeatherIcon code={props.icon} />
          </div>
          <div className="float-none">
            <span className="temperature me-3 ">{props.temperature}</span>
            <span className="units">°C | °F</span>
          </div>
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
            <i>Sunrise:</i>
            <span className="sunrise">
              {" "}
              {props.sunriseHour}:{props.sunriseMin}
            </span>
          </li>
          <li>
            <i>Sunset:</i>
            <span className="sunset">
              {" "}
              {props.sunsetHour}:{props.sunsetMin}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
