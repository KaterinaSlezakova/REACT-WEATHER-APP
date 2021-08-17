import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import TemperatureDetails from "./TemperatureDetails";

export default function CurrentWeather(props) {
  return (
  <div className="CurrentWeather">
      <div className="clearfix">
        <div className="weather-temperature">
        <div className="col-6 mt-4">
          <div className="float-start">
            <WeatherIcon code={props.code} size={90} />
          </div>
          <div className="float-start">
            <TempConversion celsious={props.temperature} />
          </div>
        </div> 
        </div>     
          <div className="col-5 float-end">
            <TemperatureDetails
            humidity={props.humidity}
            wind={props.wind}
            sunriseHour={props.sunriseHour}
            sunriseMin={props.sunriseMin}
            sunsetHour={props.sunsetHour}
            sunsetMin={props.sunsetMin}
            />
          </div>
      </div>    
  </div>
  );
}