import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
  <div className="Weather mt-3 mb-3">
    <div className="weather-temperature clearfix">
    <div className="float-start">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="goldenrod"
        size={70}
        animate={true}
      />
    </div>
    <div className="float-start">
      <span className="temperature ms-3">{props.temperature}</span>
      <span className="units">°C | °F</span>
    </div>
    </div>
  </div>
  );
}
