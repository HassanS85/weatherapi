import React from 'react'

const SearchBar = (props) => {

    const { setSearchTerm } = props;

    const updateValue = (e) => {
        console.log(props.searchTerm)
        setSearchTerm(e.target.value)
    }

  return (
    <input onChange={updateValue} type="search" ></input>  
    )
}

export default SearchBar