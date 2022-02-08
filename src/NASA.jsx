import React, { useState, useEffect } from 'react';
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?'
const date = new Date().toISOString().slice(0, 10);
console.log(date)


const NasaImage = (props) => {
const { lat, long } = props
const [image, setImage] = useState('');
    async function handleFetch() {
        const apikey = 'v4rxp4I1QrqqZD0oGFy0rw56KeuL40bWPCe5Q8Dq'
        const url = `${baseURL}lon=${long}&lat=${lat}&date=2018-01-01&api_key=${apikey}`
        // const url = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY'
        console.log(url)
        try{
            const response = await fetch(url)
            const data = await response.blob()
            setImage(URL.createObjectURL(data))
            console.log(props)


        } catch(err) {
            console.error(err)
        }
    }
    useEffect(() => {
        if(lat && long) {
        handleFetch()}
    }, [lat, long])
   



    return ( 
        <div>
            <img src={image} alt="" width= '400px' height='400px'/>
        </div>
     );
}
 
export default NasaImage;