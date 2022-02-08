import React, { useState, useEffect } from "react";

// https://app.ticketmaster.com/discovery/v2/events.json?latlong=34.0522,-118.2437&apikey=4Nblt4UKTyRD9c4b3BNdEpqwvYNc1FyR

const key = "4Nblt4UKTyRD9c4b3BNdEpqwvYNc1FyR";

const TixApp = (props) => {
    const lat = 41.8781
    const long = 87.6298
    
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [events, setEvents] = useState([]);
    
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${long}&apikey=${key}`;

    useEffect(() => {
        fetch(url)
        .then((res)=>{
            return res.json()
        }) .then((data)=> {
            console.log(data._embedded.events)
        })
        
    }, []);

    return (
        <div>
  <h1>Hello Lil Uzi Vert Fans!</h1>

</div>
);
  
  // async function handleFetch() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data._embedded.events[0]);
  //     //   setName(data._embedded.events[0].name);
  //     //   setDate(data._embedded.events[0].dates.start.localDate);
  //     //   setTime(data._embedded.events[0].dates.start.localTime);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
};

export default TixApp;
