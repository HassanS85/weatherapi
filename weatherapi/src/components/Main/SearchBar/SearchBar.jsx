import React from 'react'

const SearchBar = (props) => {

    const { setSearchTerm } = props;

    const updateValue = (e) => {
        console.log(props.searchTerm)
        setSearchTerm(e.target.value)
    }

  return (
    <input className='searchBox' onChange={updateValue} type="search" ></input>  
    )
}

export default SearchBar