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
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              Humidity:
              <span className="humidity"> {props.humidity}</span>%
            </li>
            <br></br>
            <li>
              Wind:
              <span className="wind"> {props.wind}</span>
              km/h
            </li>
          </ul>
          </div>
          <div className = "col-6">
          <ul>
            <li>
              Sunrise:
              <span className="sunrise">
                {" "}
                {sunriseHour}:{sunriseMin}
              </span>
            </li>
            <br></br>
            <li>
              Sunset:
              <span className="sunset">
                {" "}
                {sunsetHour}:{sunsetMin}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
