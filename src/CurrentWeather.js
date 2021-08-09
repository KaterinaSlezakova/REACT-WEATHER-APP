import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";


export default function CurrentWeather(props) {
  return (
  <div className="CurrentWeather mt-3">
    <div className="col-6">
    <div className="weather-temperature clearfix">
    <div className="float-start">
      <WeatherIcon code={props.code} size={70} />
    </div>
    <div className="float-start">
      <TempConversion celsious={props.temperature} />
    </div>
    </div>
    </div>
  </div>
  );
}
