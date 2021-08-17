import React from "react";


import "./Overview.css";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.cityName},</h1>
      <h2>{props.country}</h2>
      <div class="text-capitalize"><strong>{props.description}</strong></div>
    </div>
  );
}
