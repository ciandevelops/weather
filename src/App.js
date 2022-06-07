import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

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
            <p>25C</p>
          </div>
          <div className="humidity">
            <p>80%</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
