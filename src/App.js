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
          humidity={40}
          wind={5}
          sunrise="5:45"
          sunset="20:45"
          celsious={28}
        />
      </div>
      <Path />
    </div>
  );
}
