import React from 'react';
import NavBar from '../../components/Navbar/index';
import PlainVideo from '../../assets/In-The-Clouds.mp4'

import './styles.css';
import FlightSearchForm from '../../components/FlightSearchForm';

function LandingPage() {

    return (
        <div>
            <NavBar />
            <video id="background-video" autoPlay loop muted >
                <source src={PlainVideo} type="video/mp4" />
            </video>
            <h1>Track your flight</h1>

            <div>

                <FlightSearchForm />
            </div>
        </div>
    )
}

export default LandingPage;