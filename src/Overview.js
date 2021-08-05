import React from "react";

import "./Overview.css";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1 id="city">{props.cityName},</h1>
      <h2 id="country">{props.country}</h2>
      <div class="text-capitalize">{props.description}</div>
    </div>
  );
}
