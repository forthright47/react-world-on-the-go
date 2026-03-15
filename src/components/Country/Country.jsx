import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
           <h3>Name: {country.name.common}</h3>
           <p>Population: {country.population.population}</p>
           <p>Area: {country.area.area} and {country.area.area > 300000 ? "Large Country" : "Small Country"}</p>
           <button className='btn-visited' onClick={handleVisited}>
            {visited ? "Visited" : "Not visited"}
           </button>
        </div>
    );
};

export default Country;