import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [temperature, setTemperature]= useState(null)
  function handleResponse(response){
    console.log(response.data);
    setTemperature(response.data.main.temp);
  }

  const apiKey = "476ec4516bf60be6018bdca6a47318a0";
  let city = "Santorini";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse)
return (
<form className="mb-4">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              />
        </div>
          <div className="col-1">
              <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>
          </div>
          <div className="col-1">
              <button type="button" className="btn btn-warning"><i className="fas fa-map-marker-alt"></i></button>
          </div>
        </div> 
      </form>

);

}