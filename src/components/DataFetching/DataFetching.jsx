import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResultBox from '../ResultBox/ResultBox';
import Loader from '../Loader/Loader';
import './data-fetching.styles.css';

var qs = require('qs');


function DataFetching({ originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity }) {

    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState([]);
    console.log('====================================');
    console.log(details);
    console.log('====================================');


    useEffect(() => {
        const getFlights = async () => {
            var data = qs.stringify({
                'Authorization': `Bearer vq5oh8A8cJwjINXTGQ8TXe5tLIbx`
            });

            var config = {
                method: 'get',
                url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${passengerQuantity}&max=10`,
                headers: {
                    'Authorization': `Bearer vq5oh8A8cJwjINXTGQ8TXe5tLIbx`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: data
            };


            if (passengerQuantity > 0) {
                await axios(config)
                    .then(response => {
                        setLoading(true)
                        console.log(response.data.data);
                        console.log(response.data);

                        setTimeout(() => {
                            setDetails(response.data.data);
                            setLoading(false);
                        }, 2000)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
        getFlights();
    }, [originLocationCode, destinationLocationCode, departureDate, returnDate, passengerQuantity])

    if (loading) {
        return (
            <div className="loader-container">
                <Loader />
            </div >
        )
    };


    return (
        <div>
            {details ?

                details.map(data => {
                    console.log(data.price.total)

                    return (<ResultBox
                        key={data.id}
                        company={"company"}
                        departure={data.itineraries[0].segments[0].departure.at}
                        arrival={data.itineraries[0].segments[0].arrival.at}
                        currency={data.price.currency}
                        total={data.price.total}
                    />)
                }) : null}
        </div>
    )
};

export default DataFetching;