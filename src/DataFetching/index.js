import React, { useEffect, useState } from 'react';
import axios from 'axios';
var qs = require('qs');

function DataFetching() {
    const [flightData, setFlightData] = useState([]);
    console.log(flightData);

    useEffect(() => {
        const originLocationCode = "SYD"
        const destinationLocationCode = "BKK"
        const departureDate = "2020-09-10"
        const returnDate = "2020-09-12"
        const adultsMax = "2"

        var data = qs.stringify({
            'Authorization': 'Bearer uuGkxDabTmKKUGgwdqjQgFwQUG0i'
        });

        var config = {
            method: 'get',
            url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=${adultsMax}`,
            headers: {
                'Authorization': 'Bearer uuGkxDabTmKKUGgwdqjQgFwQUG0i',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response.data.data[0]);
                setFlightData(JSON.stringify(response.data.data[0]));
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <div>
            {flightData}
        </div>
    )
}

export default DataFetching;