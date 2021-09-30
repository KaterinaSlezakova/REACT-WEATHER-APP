import React from "react";
import axios from "axios";

export default function CurrentPosition() {
function displayWeather(response){
console.log(response);
}
function searchPosition(position) {
    let longitude= position.coords.longitude;
    let latitude= position.coords.latitude;
    let apiKey = "2fe472309e4eca35c3771be7be704291";
    let units= "metric"
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(displayWeather);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchPosition);
  }
  
  return (
    <div className="col-1">
      <button type="submit" className="btn btn-secondary" onClick={getLocation}>
        <i className="fas fa-map-marker-alt"> </i>
      </button>
    </div>
  );
}
