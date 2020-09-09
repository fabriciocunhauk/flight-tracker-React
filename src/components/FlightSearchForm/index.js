import React, { useState } from 'react';

import './styles.css';
import DataFetching from '../../DataFetching';

function FlightSearchForm() {
    const [inputCity, setInputCity] = useState('')
    const [destination, setDestination] = useState('')

    const originLocationCode = inputCity
    const destinationLocationCode = destination
    console.log(originLocationCode);
    console.log(destination);
    // const departureDate = "2020-09-10"
    // const returnDate = "2020-09-12"
    // const adultsMax = "2"

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input1">
                    <input className="form-input" name="input1" type="text" value={inputCity} onChange={event => setInputCity(event.target.value)} placeholder="From" />
                </label>
                <label htmlFor="input2">
                    <input className="form-input" type="text" name="input2" value={destination} onChange={event => setDestination(event.target.value)} placeholder="To" />
                </label>
                <label htmlFor="input3">
                    Departure
                                <input className="form-input" type="date" name="input3" placeholder="From" />
                </label>
                <label htmlFor="input4">
                    Return
                                <input className="form-input" type="date" name="input4" placeholder="Time" />
                </label>
                <label htmlFor="input4">
                    <input className="form-input" type="number" name="input4" placeholder="Passengers" />
                </label>
                <button className="btn-search" type="submit">Search</button>
            </form>
            <DataFetching
                originLocationCode={originLocationCode}
                destinationLocationCode={destinationLocationCode}
            />
        </div>
    );
}

export default FlightSearchForm;