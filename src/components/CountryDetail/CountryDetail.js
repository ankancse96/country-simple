import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    let {countryName} = useParams();
    const[country,setCountry]=useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setCountry(data[0]))
    },[countryName])
    return (
        <div>
            <h3>This is Country site:{countryName}</h3>
            <h5>Region:{country.capital}</h5>
            <h6>popilation: {country.population}</h6>
            
        </div>
    );
};

export default CountryDetail;