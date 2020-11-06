import React from 'react';
import { DateTime } from 'luxon';

const SearchResults = (props) => {
    if (props.loading) {
        return (
            <h2>Loading data...</h2>
        )
    }

    return (

        <div className="container_results">
            {props.flights.data && props.flights.data.map(flight => (
                <div className="result">
                <h2>From: {flight.cityFrom}</h2>
                <h2>To: {flight.cityTo}</h2>
                <p>Time of departure: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')} (local time)</p>
                <p>Time of arrival: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')} (local time)</p>
                <p>Fly duration: {flight.fly_duration}</p>
                <h2>Price: {flight.price}€</h2>
                <hr/>
                </div>
            ))}
        </div>
    )

}

export default SearchResults;