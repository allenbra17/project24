import React from "react";
import "./App.css";
import TixApp from "./Ticketmaster";
// import TixResult from './TicketmasterResults';

function App() {
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  // const [status, setStatus] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <TixApp />
      </header>
    </div>
  );
}

export default App;
