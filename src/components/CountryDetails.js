// It renders via the react-router-dom's Route and it receives the country code
// (cca3) via the URL.

import React from 'react'
// import { Link } from 'react-router-dom';
// import theCountries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    console.log("I'm within CountryDetails")
    const theCountries = props.countries;
    // buscamos por id el project que coincide con el id que recibimos por parámetro. Es una función
    let getCountry = id => theCountries.find(obj => obj.cca3 === id);

    // desestructuramos params de props.match
    const { params } = props.match;

    // const id = props.match.params.id

    // creamos una constante donde guardamos el resultado de invocar a getProject con el id que sacamos de this.props.match.params.id
    const foundCountry = getCountry(params.id)

    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: '30%'}}>Capital</td>
                    <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{foundCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {foundCountry.borders.map((eachBorder) => {
                                return <li key={eachBorder}><Link to={`/${eachBorder}`}>{getCountry(eachBorder).name.common}</Link></li>
                            })
                            }
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;