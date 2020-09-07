import React, { Component } from 'react';
import NavBar from '../../components/Navbar/index';
import PlainVideo from '../../assets/In-The-Clouds.mp4'

import './styles.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer Z4kv1zhDrkRwOTHONp4Bdq52u8CE");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "visid_incap_2137601=293/kLe1SMCrQn9j66hxD3joUl8AAAAAQUIPAAAAAADkfLboxFe8MtlaoOB4MF6T");

        var urlencoded = new URLSearchParams();
        urlencoded.append("Authorization", "Bearer w7ji2Y5r4HrFAV39bRHVJEXbf3qY");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const originLocationCode = "SYD"
        const destinationLocationCode = "BKK"
        const departureDate = "2020-09-10"
        const returnDate = "2020-09-12"
        const adultsMax = "2"
        fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=${adultsMax}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



    render() {
        return (
            <div>
                <NavBar />
                <video id="background-video" autoPlay loop muted >
                    <source src={PlainVideo} type="video/mp4" />
                </video>
                <section className="form-section">
                    <h1>Track your flight</h1>
                    <form action="/" method="post">
                        <label htmlFor="input1">
                            <input className="form-input" type="text" id="input1" placeholder="From" />
                        </label>
                        <label htmlFor="input2">
                            <input className="form-input" type="text" id="input2" placeholder="To" />
                        </label>
                        <label htmlFor="input3">
                            Departure
                            <input className="form-input" type="date" id="input3" placeholder="From" />
                        </label>
                        <label htmlFor="input4">
                            Return
                            <input className="form-input" type="date" id="input4" placeholder="Time" />
                        </label>
                        <label htmlFor="input4">
                            <input className="form-input" type="number" id="input4" placeholder="Passengers" />
                        </label>
                    </form>
                    <button className="btn-search" type="search">Search</button>
                </section>
            </div>
        )
    }
}

export default LandingPage;