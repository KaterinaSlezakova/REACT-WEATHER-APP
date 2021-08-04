import React from "react";

import "./Overview.css";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1 id="city">{props.cityName},</h1>
      <h2 id="country">{props.country}</h2>
      <ul>
        <li>
          Last updated at
          <span> {props.date}</span>
        </li>
        <li>{props.description}</li>
      </ul>
    </div>
  );
}
