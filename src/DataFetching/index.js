import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResultBox from '../components/ResultBox';
import Loader from '../components/Loader/';
import token from './myToken';
var qs = require('qs');


const tk = token
console.log(tk);

function DataFetching({ originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity }) {

    const [loading, setLoading] = useState(false)
    const [company, setCompany] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [currency, setCurrency] = useState('');
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const fetchFunction = async () => {
            var data = qs.stringify({
                'Authorization': `Bearer ${tk}`
            });

            var config = {
                method: 'get',
                url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=${passengerQuantity}`,
                headers: {
                    'Authorization': `Bearer ${tk}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: data
            };


            if (passengerQuantity.length > 0) {
                await axios(config)
                    .then(response => {
                        console.log(response);
                        setLoading(true)

                        const companyName = response.data.dictionaries.carriers;
                        const departureDateAndTime = response.data.data[0].itineraries[0].segments[0].departure.at;
                        const arrivalDateAndTime = response.data.data[0].itineraries[0].segments[0].arrival.at;
                        const currencyType = response.data.data[0].price.currency;
                        const totalToPay = response.data.data[0].price.total;

                        setTimeout(() => {
                            setCompany(JSON.stringify(companyName));
                            setDeparture(JSON.stringify(arrivalDateAndTime));
                            setArrival(JSON.stringify(departureDateAndTime));
                            setCurrency(JSON.stringify(currencyType));
                            setTotal(JSON.parse(totalToPay));
                            setLoading(false);
                        }, 3000)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
        fetchFunction()
    }, [originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity])

    if (loading) {
        return (
            <div style={{ marginTop: '-190px' }}>
                <Loader />
            </div>
        )
    }

    return (
        <div>

            {total ? (<ResultBox
                company={company}
                departure={departure}
                arrival={arrival}
                currency={currency}
                total={total}
            />) : null}
        </div>
    )
}

export default DataFetching;