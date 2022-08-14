import React from 'react';


const Main = () => {

    const [ searchTerm, setSearchTerm ] = useState("London");
    const [ weatherObj, setWeatherObj ] = useState(false);

    const getWeather = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=3f60da4d844e4b66ab2115419222403&q=${searchTerm}`
        ).then(json => {
            return json.json();
        }).then(data => {
            setWeatherObj(data);
        })
    }

  return (
    
  )
}

export default Main