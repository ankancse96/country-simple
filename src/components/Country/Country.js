import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,population} = props.country;
    
    const countryStyle={
        border: "1px solid green",
        margin:"10px",
        padding:"10px",
        borderRadius:"5px"
    }
    return (
        
            <div style={countryStyle}>
            <h1>Name:{name}</h1>
            <h2>Capita:{capital}</h2>
            <h3>Population:{population}</h3>
            <Link to={`/name/${name}`}>
                <button>Show Details of :{name}</button>

            </Link>
            
            
            
        </div>
        
    );
};

export default Country;