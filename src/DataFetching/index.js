import React, { useEffect, useState } from 'react';
import axios from 'axios';
var qs = require('qs');

function DataFetching() {
    const [company, setCompany] = useState([]);
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [currency, setCurrency] = useState("");
    const [total, setTotal] = useState("");


    useEffect(() => {
        const originLocationCode = "SYD"
        const destinationLocationCode = "BKK"
        const departureDate = "2020-09-10"
        const returnDate = "2020-09-12"
        const adultsMax = "2"

        var data = qs.stringify({
            'Authorization': 'Bearer 271Ocb3mcgM6bjQZRiyspUGbmjjA'
        });

        var config = {
            method: 'get',
            url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=${adultsMax}`,
            headers: {
                'Authorization': 'Bearer 271Ocb3mcgM6bjQZRiyspUGbmjjA',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        };
        axios(config)
            .then(response => {
                console.log(response);
                const companyName = response.data.dictionaries.carriers.CI;
                const departureDateAndTime = response.data.data[0].itineraries[0].segments[0].departure.at;
                const arrivalDateAndTime = response.data.data[0].itineraries[0].segments[0].arrival.at;
                const currencyType = response.data.data[0].price.currency;
                const totalToPay = response.data.data[0].price.total;
                console.log(companyName);
                console.log(arrivalDateAndTime);
                console.log(departureDateAndTime);
                console.log(currency, total);
                setCompany(JSON.stringify(companyName));
                setDeparture(JSON.stringify(arrivalDateAndTime));
                setArrival(JSON.stringify(departureDateAndTime));
                setCurrency(JSON.stringify(currencyType));
                setTotal(JSON.parse(totalToPay));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", marginTop: "100px", width: "500px", height: "200px", borderRadius: "8px", backgroundColor: "white" }}>

                <p> Company: {company}</p>
                <p>Departure: {departure}</p>
                <p>Arrival: {arrival}</p>
                <p>Total: {currency} {total}</p>
            </div>
        </div>
    )
}

export default DataFetching;