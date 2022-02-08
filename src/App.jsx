import React from "react";
import "./App.css";
import TixApp from "./Ticketmaster";

function App() {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [status, setStatus] = useState();

  const userLocation = () => {
    if (!navigator.geolocation){
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }, () => {
        setStatus("Unable to retrieve your location");
      })
    }
  }

  useEffect(() => {
    userLocation()
  }, []);
   

  return (
    <div className="App">
      <header className="App-header">
        <TixApp lat={lat} long={long}/>
        {lat}
        {long}
      </header>
    </div>
  );
}

export default App;
