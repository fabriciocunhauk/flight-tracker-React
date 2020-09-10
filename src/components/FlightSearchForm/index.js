import React, { useState } from 'react';
import DataFetching from '../../DataFetching';

import './styles.css';

function FlightSearchForm() {
    const [departureCity, setDeparture] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [returnDate, setReturneDate] = useState('')
    const [numberOfPassengers, setNumberOfPassengers] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="form-section">
            <form onSubmit={handleSubmit}>
                <label htmlFor="input1">
                    <input className="form-input" name="input1" type="text" value={departureCity} onChange={event => setDeparture(event.target.value)} placeholder="From" />
                </label>
                <label htmlFor="input2">
                    <input className="form-input" type="text" name="input2" value={arrivalCity} onChange={event => setArrivalCity(event.target.value)} placeholder="To" />
                </label>
                <label htmlFor="input3">
                    Departure
                                <input className="form-input" type="date" name="input3" value={departureDate} onChange={event => setDepartureDate(event.target.value)} placeholder="From" />
                </label>
                <label htmlFor="input4">
                    Return
                                <input className="form-input" type="date" name="input4" value={returnDate} onChange={event => setReturneDate(event.target.value)} placeholder="Time" />
                </label>
                <label htmlFor="input4">
                    <input className="form-input" type="number" name="input4" value={numberOfPassengers} onChange={event => setNumberOfPassengers(event.target.value)} placeholder="Passengers" />
                </label>
            </form>
            <button className="btn-search" type="submit">Search</button>
            <DataFetching
                originLocationCode={departureCity}
                destinationLocationCode={arrivalCity}
                departureDate={departureDate}
                returnDate={returnDate}
                passengerQuantity={numberOfPassengers}
            />
        </div>
    );
}

export default FlightSearchForm;