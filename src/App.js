import Overview from "./Overview";
import Form from "./Form";
import Temperature from "./Temperature";

import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
