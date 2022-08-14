import React from 'react';
import SearchBar from 

const Main = () => {

    const [ searchTerm, setSearchTerm ] = useState("London");
    const [ weatherObj, setWeatherObj ] = useState(false);

    const getWeather = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=fcaf49d862694275809223551221408=${searchTerm}`
        ).then(json => {
            return json.json();
        }).then(data => {
            setWeatherObj(data);
        })
    }

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