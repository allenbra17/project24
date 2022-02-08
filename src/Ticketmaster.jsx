import React, { useState, useEffect } from "react";
import App from "./App";
import { Table } from "reactstrap";

// https://app.ticketmaster.com/discovery/v2/events.json?latlong=34.0522,-118.2437&apikey=4Nblt4UKTyRD9c4b3BNdEpqwvYNc1FyR

const key = "4Nblt4UKTyRD9c4b3BNdEpqwvYNc1FyR";

const TixApp = (props) => {
  //   const lat = 41.8781;
  //   const long = 87.6298;
  const { lat, long } = props;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${long}&apikey=${key}`;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [events, setEvents] = useState([]);

  async function getEvents() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data._embedded.events);
      setName(data._embedded.events.name);
      //   setDate(data._embedded.events[0].dates.start.localDate);
      //   setTime(data._embedded.events[0].dates.start.localTime);
      console.log(props);
    } catch (err) {
      console.error(err);
    }
  }

//   const eventMapper = () => {
//     return props.events.map((events, index) => {
//       return (
//         <tr key={index}>
//           <td>{events.name}</td>
//           <td>{events.date}</td>
//           <td>{events.type}</td>
//         </tr>
//       );
//     });
//   };

  useEffect(() => {
    if (lat && long) {
      getEvents();
    }
  }, [lat, long]);

  return (
    // <>
      <h1>Hello from Ticketmaster</h1>
    //   <Table>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Name</th>
    //         <th>Date</th>
    //         <th>Type</th>
    //       </tr>
    //     </thead>
    //     <tbody>{eventMapper()}</tbody>
    //   </Table>
    // </>
  );
};

export default TixApp;
