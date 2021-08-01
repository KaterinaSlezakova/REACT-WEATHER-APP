import Overview from "./Overview";
import Form from "./Form";
import Temperature from "./Temperature";
import Path from "./Path";

import "./App.css";

export default function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app shadow-lg">
        <Form />
        <Overview />
        <Temperature
        />
        <Path />
      </div>
    </div>
  );
}
