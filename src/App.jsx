import React, { useState, useEffect } from "react";
import "./App.css";
import NasaImage from "./NASA";


function App() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
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
        <NasaImage 
        lat={lat}
        long={long}/>
      </header>
    </div>
  );
}

export default App;
