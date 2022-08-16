import React, {useEffect} from 'react'
import './WeatherDisplay.css';


const WeatherDisplay = (props) => {
    const weatherObj = props.weatherObj;

    const postWeather = async () => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=fcaf49d862694275809223551221408&q=${weatherObj}`, {
        method: "POST",
        headers: {
          'Accept': "application/JSON",
          'Content-Type': "application/JSON"
        },
        body: JSON.stringify( {
          location: weatherObj.location.name,
          temp: weatherObj.current.temp_c,
          imgUrl: weatherObj.current.condition.icon,
          description: weatherObj.current.condition.text
        })
      })
    }


    useEffect( () => {
        postWeather()
      },[weatherObj])

  return (
    <div className='weather-container'>
        <h2>{weatherObj.location.name}</h2>
        <p>{weatherObj.current.temp_c}&deg;C</p>
        <img src={weatherObj.current.condition.icon} alt="Weather icon" />
        <p>{weatherObj.current.condition.text}</p>
    </div>
  )
}

export default WeatherDisplay