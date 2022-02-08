import React, { useState, useEffect } from "react";
import "./App.css";
import NasaImage from "./NASA";

function App() {
  const options = {
    enableHighAccuracy: true,
  };
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  function success(pos) {
    var crd = pos.coords;
    setLat(crd.latitude);
    setLong(crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Group 1's Weather App</h1>
        <h3>Brad, Chris, and Lance</h3>
      </header>
        <div className="component">
          <h4>Current Weather</h4>
          <h4>for Your Location</h4>
          <div className="weather">weather component</div>
          <h4>Satelite Image</h4>
          <h4>of Your Location</h4>
          <NasaImage lat={lat} long={long} />
        </div>
        <div className="component">
          <h4>Events Coming up near you</h4>
          Ticketmaster Component
          <h4>Events Coming up near you</h4>
          Ticketmaster Component
          <h4>Events Coming up near you</h4>
          Ticketmaster Component
          <h4>Events Coming up near you</h4>
          Ticketmaster Component
          <h4>Events Coming up near you</h4>
          Ticketmaster Component
        </div>
      </div>
  );
}

export default App;
