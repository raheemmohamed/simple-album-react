import React from "react";

//Search Component Class
import './search-input.component.css';

function SearchInput(props){
    const {placeholder, handleChange} = props;

    return (
        <input className="search-input" type="text" placeholder={placeholder} onChange={(e)=> handleChange(e)}/>
    )
}

export default SearchInput;