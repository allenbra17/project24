import React, { useState, useEffect } from 'react';

const WeatherApp = (props) => {
    const [temperature,setTemperature]=useState("loading...")
    const APIkey = '7ab45847942309bee2eb3c68cdcb2156'
    const { lat, long } = props
    let celsius = Math.floor (temperature - 273);
    let fahrenheit = Math.floor (celsius * (9/5) + 32);
    const [isCurrentTemp, setIsCurrentTemp] = useState(false);
    console.log(isCurrentTemp)
    let handleToggle = () => {
        setIsCurrentTemp(!isCurrentTemp)
    }

async function fetchWeather () {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`
    console.log(url)
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
        if(lat && long)
        fetchWeather()
    }, [lat, long]);



    return ( 
        <div>
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
