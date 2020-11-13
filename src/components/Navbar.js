//Displays the basic navbar with the LAB name

import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CountriesList from './CountriesList';

const Navbar = () => {
    return (
        <div id="root">
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">LAB-WikiCountries</a>
                </div>
            </nav>
            {/* <CountriesList /> */}
        </div>
    )
}

export default Navbar;
