
import Form from "./Form";
import Path from "./Path";

import "./App.css";

export default function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app shadow-lg">
        <Form />
        <Path />
      </div>
    </div>
  );
}
