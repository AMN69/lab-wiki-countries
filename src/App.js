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
    countries: ['']
  }

  componentDidMount = async () => {
    const countries = await axios.get("https://countries.tech-savvy.tech/countries");

    // axios devuelve un objeto con la respuesta dentro de "data"
    this.setState({ countries: countries.data});
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <CountriesList />
          <Switch> 
            <Route exact path="/:id" render={props => (
              <CountryDetails {...props} />
            )}/>
          </Switch>


      </div>
    );
  }
}

export default App;
