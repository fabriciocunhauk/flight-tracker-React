import React from 'react';
import NavBar from '../../components/Navbar/index';
import PlainVideo from '../../assets/In-The-Clouds.mp4'

import './styles.css';
import DataFetching from '../../DataFetching/index';

function LandingPage() {

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
            <div>
                <DataFetching />
            </div>
        </div>
    )
}

export default LandingPage;