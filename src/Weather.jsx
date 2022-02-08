import React, { useState, useEffect } from 'react';

const WeatherApp = (props) => {
    const [temperature,setTemperature]=useState("loading...")
    // const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
    const APIkey = '7ab45847942309bee2eb3c68cdcb2156'
    // const lat = props.crd.latitude
    // const long = props.crd.longitude
    const lat = 39.768402
    const lon = -86.158066
    let celsius = Math.floor (temperature - 273);
    let fahrenheit = Math.floor (celsius * (9/5) + 32);
    //let units = "cels"
    const [isCurrentTemp, setIsCurrentTemp] = useState(false);
    console.log(isCurrentTemp)
    //const [isCurrentTemp, setIsCurrentTemp] = useState(true);
    let handleToggle = () => {
        setIsCurrentTemp(!isCurrentTemp)
    }
   /*  const units = () => {
        setUnits([tem]); */
/*     function checkUnits(isCels) {
  return (isCels ? 'cels' : 'fahr');
}

console.log(checkUnits(true));
// expected output: "cels"

console.log(checkUnits(false));
// expected output: "fahr" */
async function fetchWeather () {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`
try{    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.main.temp);
    setTemperature(data.main.temp);
    } catch (err){
        console.error(err);
    }
}
    useEffect(() => {
        fetchWeather()
    }, []);



    return ( 
        <div>
            {/* <p>Temperature in Celsius: {celsius}</p>
            <p>Temperature in Fahrenheit: {fahrenheit}</p> */}
            
            {/* {<p>Temperature in {units}: {temp}</p>} */}
            
                      {/* <h3>Current Temperature{`\xB0F`}: {Math.round(temp)}</h3>
    <h3>Current Temperature {`\xB0C`}: {Math.round(celcius)}</h3> */
}
    {isCurrentTemp === true ? (
        <h3>Current Temperature {Math.round(celsius)}{`\xB0C`}</h3>
        ) : (
          <h3>Current Temperature {Math.round(fahrenheit)}{`\xB0F`}</h3>
          )}
                    <button onClick={handleToggle}>Change units</button>
                
        </div>
    
     );
}
 
export default WeatherApp;
