import React from "react";


export default function Temperature(props) {
  return (
    <div className="d-flex flex-row-reverse bd-highlight mb-3">
      <div className="p-2 bd-highlight col-5">
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
      <div className="p-2 bd-highlight col-5">
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
