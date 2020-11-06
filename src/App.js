import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  const handleToChange = (e) => {
    setTo(e.currentTarget.name);    
    }  

  const handleFromChange = (e) => {
            setFrom(e.currentTarget.name);
            }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3`;
    const response = await fetch(url);

    const resp = await response.json();
    setFlights(resp);
    console.log(flights);
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
