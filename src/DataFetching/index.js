import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResultBox from '../components/ResultBox';
var qs = require('qs');
require('dotenv').config();

const myToken = process.env.REACT_APP_API_TOKEN
console.log(myToken);


function DataFetching({ originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity }) {

    const [company, setCompany] = useState([]);
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {

        var data = qs.stringify({
            'Authorization': `Bearer ${myToken}`
        });

        var config = {
            method: 'get',
            url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=${passengerQuantity}`,
            headers: {
                'Authorization': `Bearer ${myToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        };
        axios(config)
            .then(response => {
                console.log(response);
                const companyName = response.data.dictionaries.carriers;
                const departureDateAndTime = response.data.data[0].itineraries[0].segments[0].departure.at;
                const arrivalDateAndTime = response.data.data[0].itineraries[0].segments[0].arrival.at;
                const currencyType = response.data.data[0].price.currency;
                const totalToPay = response.data.data[0].price.total;

                setCompany(JSON.stringify(companyName));
                setDeparture(JSON.stringify(arrivalDateAndTime));
                setArrival(JSON.stringify(departureDateAndTime));
                setCurrency(JSON.stringify(currencyType));
                setTotal(JSON.parse(totalToPay));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity])

    return (
        <div style={{ textAlign: "center" }}>

            <ResultBox
                company={company}
                departure={departure}
                arrival={arrival}
                currency={currency}
                total={total}
            />
        </div>
    )
}

export default DataFetching;