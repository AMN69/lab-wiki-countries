//Displays the basic navbar with the LAB name

import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CountriesList from './CountriesList';

const Navbar = () => {
    return (
        <div id="root">
            <div>
                <nav class="navbar navbar-dark bg-primary mb-3">
                    <div class="container">
                        <a class="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>
                <CountriesList />
            </div>
        </div>
    )
}

export default Navbar;
