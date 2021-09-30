import React from "react";

export default function CurrentPosition() {
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
  }
  return (
    <div className="col-1">
      <button type="submit" className="btn btn-secondary" onClick={getLocation}>
        <i class="fas fa-map-marker-alt"> </i>
      </button>
    </div>
  );
}
