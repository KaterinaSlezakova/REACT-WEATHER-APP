import React from "react";

export default function Temperature(props) {
  let sunriseHour = props.sunriseHour;
  let sunsetHour = props.sunsetHour;
  let sunriseMin = props.sunriseMin;
  let sunsetMin = props.sunsetMin;

  if (sunriseHour < 10) {
    sunriseHour = `0${sunriseHour}`;
  }
  if (sunsetHour < 10) {
    sunsetHour = `0${sunsetHour}`;
  }
  if (sunriseMin < 10) {
    sunriseMin = `0${sunriseMin}`;
  }
  if (sunsetMin < 10) {
    sunsetMin = `0${sunsetMin}`;
  }

  return (
    <div className="row mb-3 mt-3">
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
              {sunriseHour}:{sunriseMin}
            </span>
          </li>
          <li>
            <i>Sunset:</i>
            <span className="sunset">
              {" "}
              {sunsetHour}:{sunsetMin}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
