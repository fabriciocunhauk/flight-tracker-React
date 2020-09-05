import React from 'react';
import NavBar from '../../components/Navbar/index';
import PlainVideo from '../../assets/In-The-Clouds.mp4'

import './styles.css';

function LandingPage() {
    return (
        <div>
            <NavBar />
            <video id="background-video" autoPlay loop muted >
                <source src={PlainVideo} type="video/mp4" />
            </video>
            <section className="form-section">
                <h1>Track your flight</h1>
                <form className="form">
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

export default LandingPage;