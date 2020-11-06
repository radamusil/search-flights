import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import { useState, useEffect } from 'react';


const App = () => {
  const [flights, setFlights] = useState([]);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [dateFromFormatted, setDateFromFormatted] = useState();
  const [dateFromValue, setDateFromValue] = useState();
  const [dateToFormatted, setDateToFormatted] = useState();
  const [dateToValue, setDateToValue] = useState();
  const [searchChange, setSearchChange] = useState(false);

  const handleToChange = (e) => {
    setTo(e.currentTarget.name);    
    }  

  const handleFromChange = (e) => {
            setFrom(e.currentTarget.name);
            }

  const handleFromDateChange = (value, formattedValue) => {
      setDateFromFormatted(formattedValue);
      setDateFromValue(value);
  }

  const handleToDateChange = (value, formattedValue) => {
    setDateToFormatted(formattedValue);
    setDateToValue(value);
  }

  const handleSubmit = () => {
    setSearchChange(!searchChange);
  }

  useEffect(() => {
    fetchData();
  }, [searchChange]);

  const fetchData = async () => {
    const url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${dateFromFormatted}&dateTo=${dateToFormatted}&partner=picky&v=3`;
    const response = await fetch(url);

    const resp = await response.json();
    setFlights(resp);
  }


  return (
    <div className="App">
      <SearchBar handleToChange={handleToChange}
                 handleFromChange={handleFromChange} 
                 handleFromDateChange={handleFromDateChange}
                 dateFromValue={dateFromValue}
                 handleToDateChange={handleToDateChange}
                 dateToValue={dateToValue}
                 handleSubmit={handleSubmit}/>      

      <SearchResults flights={flights}/>
    </div>

  );
}

export default App;
