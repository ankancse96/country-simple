import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys,setCountrys] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountrys(data))
  },[])
    return (
        <div>
            <h1>No Of countrys:{countrys.length}</h1>
            {
                countrys.map(country=><Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;