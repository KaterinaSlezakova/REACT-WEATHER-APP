import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Overview from "./Overview";
import Temperature from "./Temperature";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Form() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data.main.temp);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready===true){
    return (
      <div>
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
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-warning">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
      <Overview />
      <Temperature temperature={Math.round(temperature)} />
      </div>
    );

  } else {
    const apiKey = "476ec4516bf60be6018bdca6a47318a0";
    let city = "Santorini";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader type="ThreeDots" color="#0B5ED7" height={80} width={80} />;
  }
}
