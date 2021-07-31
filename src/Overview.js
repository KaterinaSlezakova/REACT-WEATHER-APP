import React from "react";

import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <h1 id="city">Santorini</h1>
      <h2 id="country">GR</h2>
      <ul>
        <li>
          Last updated at Sunday
          <span> 12:24</span>
        </li>
        <li>clear sky</li>
      </ul>
    </div>
  );
}
