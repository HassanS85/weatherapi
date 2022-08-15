import React from 'react'
import './WeatherDisplay.css';


const WeatherDisplay = (props) => {
    const weatherObj = props.weatherObj;

    const postWeather = () => {
      fetch("http://localhost:8080/add", {
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
    <div>WeatherDisplay</div>
  )
}

export default WeatherDisplay