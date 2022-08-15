import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';

const Main = () => {

    const [ searchTerm, setSearchTerm ] = useState("London");
    const [ weatherObj, setWeatherObj ] = useState(false);

    const getWeather = async () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=fcaf49d862694275809223551221408&q=${searchTerm}`
        ).then(json => {
            return json.json();
        }).then(data => {
            setWeatherObj(data);
            console.log(data)
        })
    }

// const getWeather = async () => {
//     let headersList = {
//         "Accept": "*/*",
//         "User-Agent": "Thunder Client (https://www.thunderclient.com)"
//        }
       
//        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fcaf49d862694275809223551221408&q=${searchTerm}`,
//         { 
//          method: "GET",
//          headers: headersList
//        });
       
//        let data = await response.text();
//        console.log(data);
       
//     }



  return (
    <>
        <div>
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            <button onClick={getWeather}>Get Weather</button>
        </div>
        <div>
            {weatherObj && <WeatherDisplay weatherObj={weatherObj} /> }
        </div>
    </>
  )
}

export default Main