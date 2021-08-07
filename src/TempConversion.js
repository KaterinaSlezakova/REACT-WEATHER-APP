import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsious");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsious(event){
      event.preventDefault();
      setUnit("celsious");
  }
  function fahrenheit(){
      return (props.celsious * 9/5) + 32;
  }

  if (unit === "celsious") {
    return (
      <div className="TempConversion">
        <span className="temperature ms-3">{Math.round(props.celsious)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
      return (
        <div className="TempConversion">
          <span className="temperature ms-3">{Math.round(fahrenheit())}</span>
          <span className="units">
            <a href="/" onClick={showCelsious}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      );
  }
}
