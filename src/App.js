import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>MY FIRST REACT REST COUNTRIES</h2>
        <div className="country">
          {
            countries.map((country, index) => <Country key={index} name={country.name} flag={country.flag} timezone={country.timezones}></Country>)
          }
        </div>
      </header>
    </div>
  );
}

function Country(props){
  const countryStyle = {
    backgroundColor: 'white',
    borderRadius: '20px 20px 0 0',
    color:'black'
  }
  return (
    <div style={countryStyle}>
        <h3>{props.name}</h3>
        <img height="200" width="100%" src={props.flag} alt={props.name} />
        <p>TimeZone: {props.timezone[0]}</p>
    </div>
  );
}

export default App;
