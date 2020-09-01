import React from 'react';
import NavBar from '../../components/Navbar/index';

import './styles.css';

function LandingPage() {
    return (
        <div>
            <NavBar />
            <div className="form">
                <label for="input1" >From</label>
                <input className="form-input" type="search" id="input1" />
                <label for="input2">To</label>
                <input className="form-input" type="search" id="input2" />
            </div>
        </div>
    )
}

export default LandingPage;