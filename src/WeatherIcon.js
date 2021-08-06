import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT"

  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="goldenrod"
        size={65}
        animate={true}
      />
    </div>
  );
}



  

