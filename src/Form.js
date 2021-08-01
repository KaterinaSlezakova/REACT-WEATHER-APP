import React from "react";

export default function Form() {
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