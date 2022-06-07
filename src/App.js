import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&type=accurate&APPID=475b797ba66d1e6726639864d6add352`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Toronto</p>
          </div>
          <div className="temp">
            <h1>22C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">25C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">80%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">10 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
