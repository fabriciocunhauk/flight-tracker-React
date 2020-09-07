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
        myHeaders.append("Authorization", "Bearer ogBAGTXoLH2bfAu1k5EvYg2oCxnt");
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
                    <form className="form" action="/" method="post">
                        <label for="input1">
                            <input className="form-input" type="search" id="input1" placeholder="From" />
                        </label>
                        <label for="input2">
                            <input className="form-input" type="search" id="input2" placeholder="To" />
                        </label>
                        <label for="input3">
                            <input className="form-input" type="date" id="input3" placeholder="From" />
                        </label>
                        <label for="input4">
                            <input className="form-input" type="time" id="input4" placeholder="Time" />
                        </label>
                    </form>
                </section>
                <button className="btn-search" type="search">Search</button>
            </div>
        )
    }
}

export default LandingPage;