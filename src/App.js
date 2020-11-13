// import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
// import countries from './countries.json';

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount = async () => {
    const countries = await axios.get("https://countries.tech-savvy.tech/countries");

    // axios devuelve un objeto con la respuesta dentro de "data"
    this.setState({ countries: countries.data});
  }

  render () {
    console.log("countries", this.state.countries)
    return (
      <div className="App">
        <Navbar />
        <CountriesList countries={this.state.countries}/>
          <Switch> 
            <Route exact path="/:id" render={props => (
              <CountryDetails countries={this.state.countries} {...props}/>
            )}/>
          </Switch>


      </div>
    );
  }
}

export default App;
