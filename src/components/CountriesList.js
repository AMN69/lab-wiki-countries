// Displays the list of links with the country names. 
// Each link should be a react-router-dom Link which we will use to send the 
// country code (cca3) via the URL.

import React from 'react'
import { Link } from 'react-router-dom';
// import theCountries from '../countries.json';

const CountriesList = (props) => {
    const theCountries = props.countries;
    return (
        <div className="row">
            <div className="col-5" style={{maxheight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                    {theCountries.map((eachCountry) => {
                        return <li key={eachCountry.cca3} className="list-group-item list-group-item-action"><Link to={`/${eachCountry.cca3}`}>{eachCountry.flag} {eachCountry.name.common}</Link></li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CountriesList;